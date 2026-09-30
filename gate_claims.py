#!/usr/bin/env python3
"""
Medical claims gate (It's Probably Nothing; usable by any channel with a ledger).

The gate_check.py CITES rule says "research is invisible". For medicine that is
the wrong rule: the danger is an *unsourced or over-reaching claim*, whether or
not the narration names a source. This gate makes the claims ledger mechanical.

    python3 gate_claims.py script.md CLAIMS_LEDGER.md
    python3 gate_claims.py script.md CLAIMS_LEDGER.md --metadata 13_FINAL_METADATA.md
    python3 gate_claims.py --topic "pancreatic cancer back pain"        # topic screen only

Ledger format (markdown table, one row per claim; see videos/its-probably-nothing/_template/):

| ID | Claim | Script anchor | Source | Tier | Simplified? |

  Script anchor  exact words from the script that carry the claim
  Source         organisation / title / year AND a URL, DOI or PMID
  Tier           A = guideline, systematic review, WHO/NIH/NCI/CDC/national health service
                 B = peer-reviewed human study
                 C = preclinical (cell, animal), small or preliminary — script anchor MUST hedge
                 N = story detail invented for Dennis (his age, his job); no source needed,
                     but it may never be a medical claim
  Simplified?    yes/no (yes = script simplifies; must be true of the science, just less detail)

Checks (exit 1 on any FAIL):
  LEDGER   parses, every row has ID, anchor, source with URL/DOI/PMID, tier A/B/C
  ANCHOR   every anchor appears in the script
  HEDGE    every tier-C anchor contains an explicit hedge (early, lab, animal, not proven, ...)
  COVERAGE every sentence with a number/statistic is covered by an anchor
  FRAMING  no conspiracy framing (can't patent, big pharma, they don't want you to know, ...)
  ADVICE   no treatment/self-care advice (fasting for cancer, supplements, skip the doctor, ...)
  CLOSE    the last 150 words point to a clinician / emergency care
  TOPIC    (with --topic) not on the never-list (self-harm, method, ...)
  METADATA (with --metadata) contains an educational-not-medical-advice disclaimer

NOT covered: whether the cited source really says what the anchor claims. That is a
human/LLM read of each source; this gate only guarantees a source exists per claim.
"""

import argparse
import re
import sys

import gate_check as g

NEVER_TOPIC = re.compile(
    r"\b(suicide|suicidal|self[- ]harm|self[- ]injur\w*|hanging|hanged|overdose|"
    r"how to (kill|die|end)|methods? of|painless (way|death)|euthanasia)\b", re.I)
FLAG_TOPIC = re.compile(
    r"\b(abortion|miscarriage|stillbirth|sids|infant death|child(ren)? death|mass (shooting|casualty)|"
    r"school shooting|pediatric|paediatric)\b", re.I)

HEDGE = re.compile(
    r"\b(early|lab|laboratory|animal|mice|mouse|in cells|preliminary|not proven|"
    r"unproven|so far|too soon|unclear|isn'?t known|not yet|small (study|trial)|"
    r"suggests?|might|may)\b", re.I)

CONSPIRACY = re.compile(
    r"(can'?t (be )?patent|no money in|big pharma|pharma (doesn'?t|don'?t)|they don'?t want you to know|"
    r"doctors (hate|don'?t want)|hidden cure|suppressed|cover[- ]?up|miracle|secret (cure|remedy)|"
    r"the reason you don'?t hear)", re.I)

ADVICE = re.compile(
    r"(you should (take|try|start|stop|avoid|eat|drink|fast)|try (fasting|a detox|supplements?)|"
    r"\b(detox|home remed(y|ies)|natural cure|cure (for )?cancer|cures? (it|cancer|diabetes))\b|"
    r"instead of (seeing|going to|visiting) (a|your) doctor|skip the doctor|"
    r"don'?t (need|bother) (a|the|your) doctor)", re.I)

NUMBER_SENT = re.compile(
    r"(\d|%|\bpercent\b|\b(million|billion|thousand|hundred)\b|\bout of\b|"
    r"\b(one|two|three|four|five|six|seven|eight|nine|ten) in (one|two|three|four|five|six|seven|eight|nine|ten|\d)\b|"
    r"\b(times|fold)\b (more|less|as)|"
    r"\b(five|ten|two|three)[- ]year (survival|rate)\b)", re.I)

CLINICIAN = re.compile(
    r"\b(doctor|clinician|physician|nurse|gp|emergency|ambulance|nine one one|911|999|112|"
    r"urgent care|get (it|them|that|this) checked|get checked|see someone|screening|checkup|check-up)\b", re.I)

DISCLAIMER = re.compile(r"(not (a )?medical advice|educational|does not replace|not a substitute)", re.I)


def norm(t):
    t = re.sub(r"`?\[[^\]]+\]`?", " ", t)          # tags / timestamps
    t = t.lower().replace("’", "'")
    t = re.sub(r"[^a-z0-9%' ]+", " ", t)
    return re.sub(r"\s+", " ", t).strip()


def parse_ledger(path):
    rows, problems = [], []
    for ln, line in enumerate(open(path, encoding="utf-8"), 1):
        s = line.strip()
        if not s.startswith("|") or re.match(r"^\|[\s:|-]+\|?$", s):
            continue
        cells = [c.strip() for c in s.strip("|").split("|")]
        if cells and cells[0].lower() in ("id", "#"):
            continue
        if len(cells) < 6:
            problems.append(f"line {ln}: expected 6 columns (ID | Claim | Script anchor | Source | Tier | Simplified?), got {len(cells)}")
            continue
        if all(not c or set(c) <= set("_.-—<> ") or c.startswith("<") for c in cells[:3]):
            continue  # empty template row
        rows.append({"ln": ln, "id": cells[0], "claim": cells[1], "anchor": cells[2].strip('"“” '),
                     "source": cells[3], "tier": cells[4].upper()[:1], "simp": cells[5]})
    return rows, problems


def result(label, ok, detail=""):
    print(f"  [{'PASS' if ok else 'FAIL'}] {label}")
    if detail:
        print(f"         {detail}")
    return ok


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("script", nargs="?")
    ap.add_argument("ledger", nargs="?")
    ap.add_argument("--metadata")
    ap.add_argument("--topic")
    a = ap.parse_args()
    ok_all = True

    print("\nMedical claims gate")
    if a.topic:
        bad = NEVER_TOPIC.search(a.topic)
        flag = FLAG_TOPIC.search(a.topic)
        ok_all &= result("TOPIC  not on the never-list (self-harm / method subjects)", not bad,
                         f"matched '{bad.group(0)}' — reject at the Idea Gate" if bad else "")
        if flag:
            print(f"  [FLAG] TOPIC touches '{flag.group(0)}' — show the user at HARD STOP 0, do not reshape quietly")
        if not a.script:
            print(f"\n{'CLEAR' if ok_all else 'REJECTED'}\n")
            return 0 if ok_all else 1

    if not (a.script and a.ledger):
        ap.error("script and ledger are required (or use --topic alone)")

    raw = open(a.script, encoding="utf-8").read()
    text = g.extract_narration(raw)
    sents = g.sentences(text)
    nscript = norm(text)

    rows, problems = parse_ledger(a.ledger)
    ok_all &= result("LEDGER  parses and is not empty", bool(rows) and not problems,
                     "; ".join(problems[:4]) if problems else f"{len(rows)} claim row(s)")

    bad_rows = []
    for r in rows:
        if not r["id"] or not r["anchor"]:
            bad_rows.append(f"row@{r['ln']}: missing ID or anchor")
        if r["tier"] != "N" and not re.search(r"(https?://|doi:|10\.\d{4,}/|pmid\W*\d+)", r["source"], re.I):
            bad_rows.append(f"{r['id']}: source has no URL / DOI / PMID")
        if r["tier"] not in ("A", "B", "C", "N"):
            bad_rows.append(f"{r['id']}: tier must be A, B, C or N")
    ok_all &= result("SOURCE  every claim has a locatable source and a tier", not bad_rows,
                     "; ".join(bad_rows[:6]))

    missing = [r["id"] for r in rows if norm(r["anchor"]) and norm(r["anchor"]) not in nscript]
    ok_all &= result("ANCHOR  every ledger anchor appears verbatim in the script", not missing,
                     "not found: " + ", ".join(missing[:8]) if missing else "")

    unhedged = [r["id"] for r in rows if r["tier"] == "C" and not HEDGE.search(r["anchor"])]
    ok_all &= result("HEDGE   tier-C (preclinical/preliminary) claims are hedged in the script", not unhedged,
                     "no hedge in: " + ", ".join(unhedged) if unhedged else "")

    anchors = [norm(r["anchor"]) for r in rows if r["anchor"]]
    uncovered = []
    for s in sents:
        if NUMBER_SENT.search(s):
            ns = norm(s)
            if not any(x and (x in ns or ns in x) for x in anchors):
                uncovered.append(s)
    ok_all &= result("COVERAGE every sentence carrying a number/statistic is covered by an anchor",
                     not uncovered,
                     f"{len(uncovered)} uncovered, e.g. \"{uncovered[0][:110]}\"" if uncovered else "")

    frames = [m.group(0) for m in CONSPIRACY.finditer(text)]
    ok_all &= result("FRAMING no conspiracy / suppressed-cure framing", not frames,
                     ", ".join(f'"{f}"' for f in frames[:5]))

    adv = [m.group(0) for m in ADVICE.finditer(text)]
    ok_all &= result("ADVICE  no treatment or self-care advice", not adv,
                     ", ".join(f'"{f}"' for f in adv[:5]))

    tail = " ".join(text.split()[-150:])
    ok_all &= result("CLOSE   last 150 words point to a clinician / emergency care",
                     bool(CLINICIAN.search(tail)))

    if a.metadata:
        meta = open(a.metadata, encoding="utf-8").read()
        ok_all &= result("METADATA disclaimer present (educational, not medical advice)",
                         bool(DISCLAIMER.search(meta)))

    print("\n  NOT MECHANICALLY CHECKED — read by eye / with an LLM pass:")
    print("    - each source really supports its anchor (the gate only proves a source exists)")
    print("    - simplifications are true of the science, just less detailed")
    print("    - the timeline is labelled illustrative once, plainly")
    print("    - humour is Dennis's denial, never the patient's suffering; no gore; death not dramatised")
    print(f"\n{'ALL CLAIMS GATES PASS' if ok_all else 'CLAIMS GATE FAILED — fix the script or the ledger'}\n")
    return 0 if ok_all else 1


if __name__ == "__main__":
    sys.exit(main())
