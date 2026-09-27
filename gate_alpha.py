#!/usr/bin/env python3
"""
FinanceCraft — GATE alpha. Validates a returned research or concept brief
BEFORE any scripting begins.

    python3 gate_alpha.py brief.md --track1 [--skeleton 8]
    python3 gate_alpha.py brief.md --track2 [--skeleton 9]

--skeleton adds the fields that skeleton's addendum (SKELETON_LIBRARY.md)
requires, and for Track 2 swaps out clock/adversary fields that only the
A5 constrained hypothetical needs.

Checks shape, not truth. A fabricated citation in the right format will pass
this gate — verifying that a source resolves is a human opening the filing.

Exit 0 = brief accepted, 1 = rejected (missing fields named in output).
"""

import argparse
import re
import sys

TRACK1 = {
    "Angle statement": [r"angle\s*statement", r"what'?s actually new", r"\bthe angle\b"],
    "The gap / gap list": [r"\bgap\b", r"commonly told", r"what.{0,20}coverage miss"],
    "Verified facts": [r"verified fact", r"\bPRIMARY\]", r"\bfacts?\b.{0,20}source"],
    "Texture": [r"\btexture\b", r"physical object", r"sensory"],
    "Showable assets": [r"showable", r"on screen", r"screenshot|photograph|headline"],
    "Pivotal detail": [r"pivotal"],
    "Open questions": [r"open question", r"unresolved", r"contradict"],
}

TRACK2 = {
    "The mechanic": [r"\bmechanic\b", r"the real (financial|physical)"],
    "Premise variants (need 5)": [r"five premises", r"premise", r"variant"],
    "The contract": [r"\bcontract\b", r"the rules", r"\bpenalty\b"],
    "The adversary": [r"adversar", r"working against", r"while (you|the protagonist) act"],
    "The clock": [r"\bclock\b", r"\bdeadline\b", r"how long"],
    "World kit": [r"world kit", r"named places", r"recurring object"],
    "Third-order consequences": [r"third.order", r"second.order", r"consequence chain"],
    "Mechanic verified": [r"verif", r"does the math", r"anchor"],
    "Quotable beat": [r"quotable", r"repeat.{0,20}friend", r"the single thing"],
}

# Skeleton addenda — extra fields each skeleton's brief must carry.
SKELETON_FIELDS = {
    2: {"Bet chain (4+ bets)": [r"bet chain", r"\bbets?\b"],
        "Deferred payoff": [r"deferred payoff", r"planted", r"pays off"],
        "Sourced closing quote": [r"closing quote", r"\bquote\b"]},
    3: {"Causal chain": [r"causal chain", r"cause.{0,10}effect", r"chain"],
        "The loop": [r"\bloop\b", r"cycle"],
        "Everyday analogy": [r"analogy", r"it'?s like"]},
    6: {"Matched characters": [r"matched character", r"identical", r"character"],
        "Checkpoints": [r"checkpoint", r"year \d+"],
        "Pre-empted objection": [r"objection", r"pre-?empt"]},
    8: {"The prior": [r"\bprior\b", r"viewer believes", r"common belief"],
        "Mechanism layers (3+)": [r"mechanism layer", r"\blayers?\b"],
        "Nested paradox": [r"nested paradox", r"second paradox"],
        "Physical stake": [r"physical stake", r"\bstakes?\b"]},
    9: {"Contrarian choice": [r"contrarian choice", r"the choice"],
        "Foil": [r"\bfoil\b"],
        "Mentor + flipped artifact": [r"mentor", r"artifact"],
        "Misjudging characters (3+)": [r"misjudg", r"side character"],
        "Timeskips": [r"timeskip", r"time.?skip", r"\bage \d+"],
        "Vindication event": [r"vindication", r"shock"],
        "Honest complication": [r"complication", r"counterpoint"]},
    11: {"The celebrated story": [r"celebrated story", r"who believed", r"believers"],
         "The anomaly": [r"\banomaly\b", r"doesn'?t add up"],
         "Evidence pillars (4+)": [r"evidence pillar", r"\bpillars?\b"],
         "Company response": [r"company response", r"responded", r"denied|blamed"],
         "Precedent": [r"\bprecedent\b", r"parallel"],
         "Viewer stake": [r"viewer stake", r"your (pension|portfolio|money)"]},
    12: {"The constraint removed": [r"constraint", r"built (on|around)"],
         "Day one": [r"day one", r"first day"],
         "Domains (5+)": [r"\bdomains?\b"],
         "Upside-down domain": [r"upside.down", r"obvious good"],
         "The long run": [r"long run", r"100\+? years"],
         "Mirror line": [r"mirror line", r"says about (us|how we)"]},
    10: {"Absolute claim": [r"absolute claim", r"the claim"],
         "Carried unit": [r"carried unit", r"\bunit\b"],
         "Escalation ladder (4+ rungs)": [r"ladder", r"rungs?"],
         "Second barrier": [r"second barrier", r"barrier"],
         "Humility close": [r"humility", r"wrong prediction"]},
}
SKELETON_FIELDS.update({
    1: {"Everyday friction": [r"everyday friction", r"friction"],
        "Engines (3-5)": [r"\bengines?\b"],
        "Intuition break": [r"intuition break", r"assumes?"],
        "Label to deflate": [r"label", r"deflate"]},
    4: {"Romantic illusion": [r"romantic illusion", r"illusion"],
        "Walked transaction": [r"walked transaction", r"transaction"],
        "Real product": [r"real product"],
        "Lifeline": [r"lifeline", r"high.margin"],
        "Fixed-cost danger": [r"fixed.cost", r"lease|commitment"]},
    7: {"Single-number hook": [r"single.number", r"hook"],
        "The lever": [r"\blever\b"],
        "Rules (5-9)": [r"\brules?\b"],
        "Honest complication": [r"complication", r"doesn'?t work for"],
        "Closing binary": [r"binary", r"either"]},
})

# Track 2 fields that belong to the A5 ticking-clock format only.
A5_ONLY = {"The contract", "The adversary", "The clock"}

# A texture item must be photographable. These disqualify a bullet.
ABSTRACT = re.compile(
    r"\b(pressure|dynamic|factor|trend|environment|landscape|framework|strategy|"
    r"culture|sentiment|confidence|governance|oversight|practice|approach|"
    r"structure|system|process|model|context|climate|momentum)\b", re.I)


def sections(text, spec):
    """Return {field: (found, non_empty)} by locating headings/keywords."""
    lines = text.split("\n")
    low = text.lower()
    out = {}
    for field, pats in spec.items():
        found = any(re.search(p, low, re.I) for p in pats)
        non_empty = False
        if found:
            for p in pats:
                m = re.search(p, low, re.I)
                if not m:
                    continue
                # count content in the ~40 lines after the match
                idx = low[:m.start()].count("\n")
                # an inline answer on the label's own line counts too
                # ("**Mirror line:** We think a life is a ladder...")
                same = lines[idx][m.end() - (low.rfind("\n", 0, m.start()) + 1):].strip(" *:")
                if not re.match(r"^#{1,6}\s", lines[idx].strip()) and len(same.split()) >= 8:
                    non_empty = True
                    break
                chunk = [l.strip() for l in lines[idx + 1: idx + 40] if l.strip()]
                body = [l for l in chunk if not re.match(r"^#{1,6}\s", l)]
                if sum(len(l.split()) for l in body) > 25:
                    non_empty = True
                    break
        out[field] = (found, non_empty)
    return out


def texture_items(text):
    """Bullets that name something a camera could photograph."""
    good, weak = [], []
    for line in text.split("\n"):
        s = line.strip()
        if not re.match(r"^[-*\u2022]|\d+[.)]\s", s):
            continue
        s = re.sub(r"^[-*\u2022]\s*|\d+[.)]\s*", "", s).strip()
        if len(s.split()) < 2 or len(s.split()) > 45:
            continue
        (weak if ABSTRACT.search(s) else good).append(s)
    return good, weak


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("path")
    g = ap.add_mutually_exclusive_group(required=True)
    g.add_argument("--track1", action="store_true")
    g.add_argument("--track2", action="store_true")
    ap.add_argument("--skeleton", "-s", type=int, choices=sorted(SKELETON_FIELDS) + [5],
                    help="skeleton chosen at HARD STOP 1 (see SKELETON_LIBRARY.md)")
    args = ap.parse_args()

    text = open(args.path, encoding="utf-8").read()
    spec = dict(TRACK1 if args.track1 else TRACK2)
    track = "1 (Case Autopsy)" if args.track1 else "2 (Hypothetical)"
    sk = args.skeleton
    if args.track2 and sk and sk != 5:
        for f in A5_ONLY:
            spec.pop(f, None)
    if sk in SKELETON_FIELDS:
        spec.update(SKELETON_FIELDS[sk])
        track += f" | skeleton A{sk}"

    print(f"\nGATE alpha — {args.path}")
    print(f"Track {track} | {len(text.split())} words\n")

    problems = []
    print("REQUIRED FIELDS")
    for field, (found, non_empty) in sections(text, spec).items():
        if not found:
            print(f"  [MISSING] {field}")
            problems.append(f"{field} — not present")
        elif not non_empty:
            print(f"  [EMPTY]   {field} — heading present, little or no content")
            problems.append(f"{field} — heading only")
        else:
            print(f"  [ok]      {field}")

    print("\nTEXTURE")
    good, weak = texture_items(text)
    print(f"  photographable items: {len(good)} (need >= 10)")
    for s in good[:6]:
        print(f"     - {s[:72]}")
    if len(good) < 10:
        problems.append(f"Texture — only {len(good)} photographable items, need 10+")
    if weak:
        print(f"  abstract, do NOT count: {len(weak)}")
        for s in weak[:4]:
            print(f"     ~ {s[:72]}")

    if args.track1:
        print("\nCITATIONS")
        prim = len(re.findall(r"\[PRIMARY\]", text, re.I))
        sec = len(re.findall(r"\[SECONDARY\]", text, re.I))
        unc = len(re.findall(r"\[UNCERTAIN\]", text, re.I))
        print(f"  [PRIMARY] {prim} | [SECONDARY] {sec} | [UNCERTAIN] {unc}")
        if prim + sec == 0:
            print("  no source markers found — facts are unattributed")
            problems.append("Citations — no [PRIMARY]/[SECONDARY] markers")
        elif prim == 0:
            print("  warning: zero primary sources — this is the Wikipedia version")
            problems.append("Citations — no primary sources")

    if args.track2:
        print("\nTRACK 2 SPECIFICS")
        prem = len(re.findall(r"^\s*(\d+[.)]|[-*])\s+.{15,}", text, re.M))
        print(f"  list items found: {prem} (need 5 distinct premises among them)")
        if (not sk or sk == 5) and not re.search(r"\b(interest|countdown|remaining|per day|per hour|"
                         r"accru|ticking|running)\b", text, re.I):
            print("  adversary does not appear to be a moving number")
            problems.append("Adversary — not expressible as a number that moves")

    print("\n" + "=" * 58)
    if problems:
        print(f"REJECTED — {len(problems)} problem(s). Do not begin scripting.\n")
        for p in problems:
            print(f"  * {p}")
        print("\nReturn to the research/invention step for the named fields.")
    else:
        print("ACCEPTED — shape is valid. Judgement checks still apply:")
        print("  - do texture items pass the camera test by eye?")
        print("  - does the gap list beat an hour on Wikipedia?")
        print("  - are cited sources real? (gate cannot check this)")
    print()
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())