#!/usr/bin/env python3
"""
Story gate for It's Probably Nothing (usable by any channel that adopts the same spine).

gate_check.py measures *style* (sentence lengths, reframes). gate_claims.py measures
*accuracy* (every claim sourced). Neither can tell whether the script is a *story*.
This gate checks the parts of the story framework that can be checked mechanically
(see channels/its-probably-nothing/STORY_PLAYBOOK.md); the rest is the human scorecard.

    python3 gate_story.py videos/its-probably-nothing/01-rabies
    python3 gate_story.py videos/its-probably-nothing/01-rabies --script 02_SCRIPT_B.md --ledger 02_CLAIMS_LEDGER.md

Script tags it reads (all stripped from narration by gate_check.extract_narration):
  [CASE: label]       the paragraph below is a real, anonymised case; it must contain a ledger anchor of tier A or B
  [SETUP: name]       plants a callback        [PAYOFF: name]   pays it off later
  [STILLNESS]         a held hard beat
  [PLATES ...]        a colour-plate drop (visual device)       "out of register" / [MISREG]  misregistration device
  Lines starting "Belief " or "Myth " mark the acts of the spine.
"""

import argparse
import os
import re
import sys

import gate_check as g
import gate_claims as c


def result(label, ok, detail=""):
    print(f"  [{'PASS' if ok else 'FAIL'}] {label}")
    if detail:
        print(f"         {detail}")
    return ok


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("episode")
    ap.add_argument("--script", default="02_SCRIPT_A.md")
    ap.add_argument("--ledger", default="02_CLAIMS_LEDGER.md")
    ap.add_argument("--min-words", type=int, default=1800)
    a = ap.parse_args()

    spath = os.path.join(a.episode, a.script)
    lpath = os.path.join(a.episode, a.ledger)
    bpath = os.path.join(a.episode, "01_RESEARCH_BRIEF.md")
    raw = open(spath, encoding="utf-8").read()
    body = "\n".join(l for l in raw.split("\n") if not l.strip().startswith(">") and not l.strip().startswith("#"))
    narration = g.extract_narration(raw)
    words = len(narration.split())
    ok_all = True

    print(f"\nStory gate — {a.script}")

    ok_all &= result(f"LENGTH   at least {a.min_words} narrated words (about 10 minutes)", words >= a.min_words,
                     f"{words} words")

    spine = [l for l in body.split("\n") if re.match(r"^(Belief|Myth) (one|two|three|four|five|\d)\b", l.strip(), re.I)]
    ok_all &= result("SPINE    at least three acts marked 'Belief ...' / 'Myth ...'", len(spine) >= 3,
                     f"{len(spine)} found")

    n = len(body)
    first = body.find("Dennis")
    bubble = re.search(r"\[BUBBLE:[^\]]*probably nothing", body, re.I)
    stillness = [m.start() for m in re.finditer(r"\[STILLNESS\]", body)]
    ok_open = first != -1 and first < n * 0.05 and bool(bubble) and bubble.start() < n * 0.15
    ok_all &= result("OPEN     Dennis in the first 5%, his line on screen in the first 15%", ok_open)
    ok_all &= result("BEATS    at least three held hard beats ([STILLNESS]), one inside the cold open",
                     len(stillness) >= 3 and any(s < n * 0.2 for s in stillness), f"{len(stillness)} found")

    ok_all &= result("FORK     both roads named (Ignoring-Dennis and Goes-on-Day-3 Dennis)",
                     "Ignoring-Dennis" in body and bool(re.search(r"Goes-on-Day-3|Day-3 Dennis", body)))

    rows, _ = c.parse_ledger(lpath)
    strong = [c.norm(r["anchor"]) for r in rows if r["tier"] in ("A", "B") and r["anchor"]]
    paras = [p for p in re.split(r"\n\s*\n", body)]
    case_idx = [i for i, p in enumerate(paras) if "[CASE" in p]
    # a case tag labels the paragraph(s) up to the next blank-line-separated block carrying a ledger anchor
    bad = []
    for i in case_idx:
        window = " ".join(paras[i:i + 3])
        wn = c.norm(g.TAG_RE.sub(" ", window))
        if not any(x and x in wn for x in strong):
            bad.append(paras[i][:60])
    ok_all &= result("CASES    at least two real cases, each backed by a tier A/B ledger anchor",
                     len(case_idx) >= 2 and not bad,
                     f"{len(case_idx)} case tags" + (f"; no anchor near: {bad[0]}..." if bad else ""))

    setups = re.findall(r"\[SETUP:\s*([^\]]+)\]", body)
    payoffs = re.findall(r"\[PAYOFF:\s*([^\]]+)\]", body)
    unpaid = [s for s in setups if s.strip().lower() not in [p.strip().lower() for p in payoffs]]
    ok_all &= result("CALLBACK every planted callback is paid off, at least one exists",
                     bool(setups) and not unpaid, f"setups {len(setups)}, payoffs {len(payoffs)}"
                     + (f"; unpaid: {', '.join(unpaid)}" if unpaid else ""))

    plates = len(re.findall(r"\[PLATES", body))
    reg = len(re.findall(r"out of register|\[MISREG|misregist", body, re.I))
    ok_all &= result("VISUALS  colour-plate drop (2+) and misregistration (2+) used as the progress devices",
                     plates >= 2 and reg >= 2, f"{plates} plate drops, {reg} misregistration mentions")

    tail = body.strip().split("\n")[-1]
    ok_all &= result("ENDING   closes on the payoff line", "I'm fine, Dennis" in tail)

    if os.path.exists(bpath):
        brief = open(bpath, encoding="utf-8").read()
        needed = ["## Reference teardown", "## Spine", "## Real cases"]
        miss = [h for h in needed if h not in brief]
        teardown = brief.split("## Reference teardown")[-1].split("\n## ")[0] if "## Reference teardown" in brief else ""
        rows_td = [l for l in teardown.split("\n") if l.startswith("|") and not re.match(r"^\|[\s:|-]+\|?$", l.strip())]
        ok_all &= result("BRIEF    research brief has Reference teardown (3+ rows), Spine, and Real cases sections",
                         not miss and len(rows_td) >= 4,
                         ("missing: " + ", ".join(miss)) if miss else f"{max(len(rows_td) - 1, 0)} teardown rows")
    else:
        ok_all &= result("BRIEF    01_RESEARCH_BRIEF.md exists", False)

    vpath = os.path.join(a.episode, "06_VOICE_DIRECTION.json")
    if os.path.exists(vpath):
        import json
        chunks = json.load(open(vpath, encoding="utf-8"))
        want = {"chunk_id", "control_instruction", "target_text"}
        bad_keys = [x.get("chunk_id") for x in chunks if set(x.keys()) != want]
        bad_text = [x["chunk_id"] for x in chunks if re.search(r"\d|\[|\]|_", x["target_text"])]
        vol = [x["chunk_id"] for x in chunks if re.search(r"\b(loud|loudly|shout|shouting|boom|booming|volume|raised voice)\b", x["control_instruction"], re.I)]
        long_ = [x["chunk_id"] for x in chunks if len(g.sentences(x["target_text"])) > 6]
        ok_all &= result("VOICE    chunks have exactly chunk_id, control_instruction, target_text (no section); spoken-form text; no volume words; max 6 sentences",
                         not (bad_keys or bad_text or vol or long_),
                         "; ".join(f"{n}: {v}" for n, v in (("wrong keys", bad_keys), ("digits/tags/underscores", bad_text), ("volume words", vol), (">6 sentences", long_)) if v))

    print("\n  NOT MECHANICALLY CHECKED — score by eye with the STORY_PLAYBOOK scorecard (minimum 16 of 20):")
    print("    - specificity: concrete, camera-able details instead of general statements")
    print("    - humour: Dennis's denial and dry understatement; at least one laugh every ~60 seconds")
    print("    - escalation: each act is a bigger, different kind of wrong than the last")
    print("    - mechanism image: one original analogy, labelled as an image, never stated as a claim")
    print("    - the turn: one moment where the story stops being only Dennis's")
    print("    - read aloud once; fix anything a voice would trip on")
    print(f"\n{'STORY GATE PASS' if ok_all else 'STORY GATE FAILED — fix the script or the brief'}\n")
    return 0 if ok_all else 1


if __name__ == "__main__":
    sys.exit(main())
