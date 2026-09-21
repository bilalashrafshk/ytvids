#!/usr/bin/env python3
"""
FinanceCraft — IDEA GATE verifier (STEP 1.5).

    python3 gate_idea.py idea_gate.md

Checks that every answer is an artifact rather than a bare yes, that the
artifacts have the required shape, and that the stated VERDICT matches the
answers. Like GATE alpha it checks shape, not truth: a well-formed wrong
prior passes. Judging whether the prior is real stays with the human at
HARD STOP 0.

Exit 0 = gate output is well-formed and consistent, 1 = problems found.
"""

import re
import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from gate_check import JARGON                    # single source of truth
from gate_alpha import ABSTRACT

NAMES = {1: "PRIOR", 2: "UNGUESSABLE", 3: "EVERYDAY ENTRY", 4: "MECHANISM",
         5: "ESCALATION", 6: "MOVING NUMBER", 7: "CAMERA TEST",
         8: "COMPLICATION", 9: "CLOSING LINE", 10: "LANE FIT"}
HARD = {1, 5}
ADVISORY = {6}                  # recorded, never counts toward the verdict
NO_SURPRISE_SHAPES = {"e", "j"} # contrarian habit / playbook sell execution, not surprise
BARE = re.compile(r"^\s*(yes|y|true|pass|passes|ok|confirmed|n/?a)[.!]?\s*$", re.I)
Q_HEAD = re.compile(r"^###\s*Q(\d+)\b[^\n]*?\b(PASS|FAIL)\b", re.I | re.M)
P_HEAD = re.compile(r"^###\s*PIVOT\s*(\d+)", re.I | re.M)
LIST_ITEM = re.compile(r"^\s*(?:\d+[.)]|[-*\u2022])\s+(.+)$", re.M)


def blocks(text, head_re):
    """Split text into {id: (status, body)} on a heading regex."""
    ms = list(head_re.finditer(text))
    out = {}
    for i, m in enumerate(ms):
        end = ms[i + 1].start() if i + 1 < len(ms) else len(text)
        body = text[m.end():end]
        body = re.split(r"^\s*(VERDICT:|BIGGEST RISK:|###\s*PIVOT)", body, flags=re.M | re.I)[0]
        status = m.group(2).upper() if m.lastindex and m.lastindex >= 2 else ""
        out[int(m.group(1))] = (status, body.strip())
    return out


def field(text, name):
    m = re.search(rf"^\s*{name}\s*:\s*(.+)$", text, re.I | re.M)
    return m.group(1).strip() if m else None


def jargon_in(s):
    words = [w.lower().strip(".,;:!?\"'()") for w in s.split()]
    return sorted({w for w in words if w in JARGON})


def main():
    if len(sys.argv) != 2:
        print(__doc__)
        return 1
    text = open(sys.argv[1], encoding="utf-8").read()
    problems, notes = [], []

    print(f"\nIDEA GATE check — {sys.argv[1]}\n")

    # ---- header fields
    thesis = field(text, "THESIS")
    if not thesis:
        problems.append("THESIS — missing")
    elif len(thesis.split()) > 30:
        problems.append(f"THESIS — {len(thesis.split())} words, max 30")
    demand = field(text, "DEMAND")
    if not demand:
        problems.append("DEMAND — line missing (write 'DEMAND: NOT SUPPLIED' if absent)")
    elif re.search(r"not supplied", demand, re.I):
        notes.append("DEMAND not supplied — demand is unproven; say so at handoff")
    else:
        m = re.match(r"\s*(\d+)", demand)
        n = int(m.group(1)) if m else None
        if n is None:
            problems.append("DEMAND — no outlier count at the start of the line")
        elif n == 0:
            notes.append("DEMAND 0 outliers — unproven; gate may pass but flag it")
        elif n == 1:
            notes.append("DEMAND 1 outlier — thin; acceptable for a Swing idea")
    shape = field(text, "SHAPE")
    if not shape or not re.match(r"\s*[a-k]\b", shape, re.I):
        problems.append("SHAPE — missing or not a–k (needed for skeleton ranking)")

    # ---- questions
    shape_letter = shape.strip()[0].lower() if shape else ""
    qs = blocks(text, Q_HEAD)
    fails = set()
    print("QUESTIONS")
    for q, name in NAMES.items():
        if q not in qs:
            print(f"  [MISSING] Q{q} {name}")
            problems.append(f"Q{q} {name} — missing or no PASS/FAIL status")
            continue
        status, body = qs[q]
        issues = []
        if not body or BARE.match(body):
            issues.append("no artifact (bare yes / empty)")
        elif len(body.split()) < 5:
            issues.append("artifact under 5 words")

        if status == "PASS" and not issues:
            if q == 1 and not re.search(r"viewer believes\s*:", body, re.I):
                issues.append("needs 'Viewer believes:' line")
            if q == 2:
                g, a = field(body, "Viewer guess"), field(body, "Actual")
                if not (g and a):
                    issues.append("needs both 'Viewer guess:' and 'Actual:'")
                elif g.lower() == a.lower():
                    issues.append("guess and actual are identical")
            if q == 3:
                if not re.search(r"opens on\s*:", body, re.I):
                    issues.append("needs 'Opens on:' line")
                if jargon_in(body):
                    issues.append("jargon in entry: " + ", ".join(jargon_in(body)))
            if q == 4:
                sents = [s for s in re.split(r"(?<=[.!?])\s+", body) if s.strip()]
                if len(sents) > 2:
                    issues.append(f"{len(sents)} sentences, max 2")
                if len(body.split()) > 50:
                    issues.append(f"{len(body.split())} words, max 50")
                if jargon_in(body):
                    issues.append("jargon: " + ", ".join(jargon_in(body)))
            if q == 5 and len(LIST_ITEM.findall(body)) < 3:
                issues.append("needs 3+ listed beats")
            if q == 6 and not re.search(r"number\s*:", body, re.I):
                issues.append("needs 'Number:' line")
            if q == 7:
                items = LIST_ITEM.findall(body)
                concrete = [i for i in items if not ABSTRACT.search(i)]
                if len(concrete) < 5:
                    issues.append(f"{len(concrete)} photographable items, need 5 "
                                  f"({len(items) - len(concrete)} abstract)")
            if q == 8 and not (field(body, "Counterpoint") and field(body, "Enters at")):
                issues.append("needs 'Counterpoint:' and 'Enters at:'")
            if q == 9 and thesis:
                stop = set("the a an and or but of to in on for is are was it its this that "
                           "you your they their we our be by with as at from not".split())
                cw = lambda s: {w for w in re.findall(r"[a-z']+", s.lower()) if w not in stop and len(w) > 2}
                tw, cl = cw(thesis), cw(body)
                if cl and len(cl & tw) / len(cl) > 0.5:
                    issues.append("closing line mostly restates the thesis "
                                  f"({len(cl & tw)}/{len(cl)} content words shared)")
            if q == 10 and not re.search(r"track\s*:\s*[123]", body, re.I):
                issues.append("needs 'Track: 1|2|3'")

        exempt = (q in ADVISORY) or (q == 2 and shape_letter in NO_SURPRISE_SHAPES)
        if status == "FAIL" and exempt:
            why = "advisory" if q in ADVISORY else f"not required for shape {shape_letter}"
            print(f"  [weak]    Q{q} {name} ({why}, does not count)")
        elif status == "FAIL":
            fails.add(q)
            print(f"  [FAIL]    Q{q} {name} (stated)")
        elif issues:
            fails.add(q)
            print(f"  [BROKEN]  Q{q} {name} marked PASS but: {'; '.join(issues)}")
            problems.append(f"Q{q} {name} — marked PASS but {'; '.join(issues)}")
        else:
            print(f"  [ok]      Q{q} {name}")

    # ---- verdict consistency
    if fails & HARD or len(fails) >= 3:
        expected = "REJECT"
    elif fails:
        expected = "REWORK"
    else:
        expected = "PASS"
    stated = (field(text, "VERDICT") or "").upper().split()
    stated = stated[0] if stated else ""
    print(f"\nVERDICT  stated: {stated or '—'} | computed: {expected} "
          f"(fails: {', '.join(f'Q{q}' for q in sorted(fails)) or 'none'})")
    if stated != expected:
        problems.append(f"VERDICT — stated {stated or 'nothing'}, answers require {expected}")
    if not field(text, "BIGGEST RISK"):
        problems.append("BIGGEST RISK — missing (required on every verdict)")

    # ---- pivots
    if expected == "REJECT":
        pivots = blocks(text, P_HEAD)
        methods = set()
        print(f"\nPIVOTS  {len(pivots)} found (need exactly 3)")
        if len(pivots) != 3:
            problems.append(f"PIVOTS — {len(pivots)} found, need exactly 3")
        for pid, (_, body) in sorted(pivots.items()):
            miss = [f for f in ("Thesis", "Method", "Fixes", "Artifact", "Skeleton")
                    if not field(body, f)]
            meth = (field(body, "Method") or "").split()[0:1]
            methods.update(m.lower() for m in meth)
            fixes = set(int(x) for x in re.findall(r"Q(\d+)", field(body, "Fixes") or ""))
            if not fixes & fails:
                miss.append("Fixes names no failed question")
            if not re.match(r"\s*A(1[01]|[1-9])\b", field(body, "Skeleton") or ""):
                miss.append("Skeleton not a selectable A# (1-11)")
            print(f"  PIVOT {pid}: {'ok' if not miss else '; '.join(miss)}")
            if miss:
                problems.append(f"PIVOT {pid} — {'; '.join(miss)}")
        if pivots and methods != {"sharpen", "restructure", "adjacent"}:
            problems.append("PIVOTS — need one each of Sharpen / Restructure / Adjacent")

    print("\n" + "=" * 58)
    for n in notes:
        print(f"  [note] {n}")
    if problems:
        print(f"REJECTED — {len(problems)} problem(s). Regenerate the gate output.\n")
        for p in problems:
            print(f"  * {p}")
        print()
        return 1
    print("WELL-FORMED — now HARD STOP 0. Human judges: is the prior real? "
          "is the demand number real?\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())