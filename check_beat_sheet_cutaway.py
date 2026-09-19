#!/usr/bin/env python3
"""
FinanceCraft — CP-6 Human/Consumer Cutaway Minimum external verifier.

Phase 4's Technique 5 (Consumer & Cultural Juxtaposition) exists to stop a
documentary from staying entirely inside the boardroom/factory register —
every Act should schedule at least one relatable human/consumer cutaway
(a living room, a doorstep, a warehouse floor, a second-hand listing) that
isn't a literal illustration of that sentence's specific noun. "Encouraged"
techniques get skipped by a beat planner that defaults to the literal path
unless something actually counts them — same shape as the Signature
Cinematic Minimum and Chart-vs-Cinematic Bias checks this catches for.

This script counts `[CUTAWAY: ...]` tags (the required inline marker for
Technique 5, per the Channel Bible) per Act in a beat sheet and flags any
Act with zero cutaway beats and no stated justification.

    python3 check_beat_sheet_cutaway.py videos/<episode-slug>/07_BEAT_SHEET.md

Exit code 0 = every Act has a cutaway beat or a stated reason, 1 = one or
more Acts have neither.

NOT covered (needs editorial judgment, not text-scriptable):
  - whether a tagged [CUTAWAY] beat is genuinely a non-literal human/consumer
    moment, or just a tag slapped on an ordinary beat to pass this check
  - whether a stated "reason for absence" is actually a good reason
  - visual quality of the cutaway itself (that's CP-14, a rendered-frame check)
"""

import re
import sys

ACT_HEADER_RE = re.compile(r"^###\s*ACT\s+[IVXLCDM]+\s*[—\-–]\s*(.+?)\s*\(", re.IGNORECASE)
CUTAWAY_TAG_RE = re.compile(r"\[CUTAWAY\s*:", re.IGNORECASE)
JUSTIFICATION_RE = re.compile(r"CUTAWAY CHECK\s*:", re.IGNORECASE)
BEAT_ROW_RE = re.compile(r"^\|\s*\*?\*?\d{3}\*?\*?\s*\|")


def split_acts(lines):
    """Return list of (act_title, [lines belonging to that act])."""
    acts = []
    current_title = None
    current_lines = []
    for line in lines:
        m = ACT_HEADER_RE.match(line.strip())
        if m:
            if current_title is not None:
                acts.append((current_title, current_lines))
            current_title = m.group(1).strip()
            current_lines = []
        else:
            if current_title is not None:
                current_lines.append(line)
    if current_title is not None:
        acts.append((current_title, current_lines))
    return acts


def main():
    if len(sys.argv) != 2:
        print(f"usage: {sys.argv[0]} <07_BEAT_SHEET.md>")
        return 1
    path = sys.argv[1]

    try:
        lines = open(path, encoding="utf-8").read().splitlines()
    except OSError as e:
        print(f"error: could not read {path}: {e}")
        return 1

    acts = split_acts(lines)
    if not acts:
        print(f"[warn] no '### ACT ...' headers found in {path} — cannot check per-Act cutaway coverage")
        return 1

    total_fail = 0
    total_cutaways = 0
    for title, act_lines in acts:
        block = "\n".join(act_lines)
        beat_count = sum(1 for l in act_lines if BEAT_ROW_RE.match(l.strip()))
        cutaway_count = len(CUTAWAY_TAG_RE.findall(block))
        has_justification = bool(JUSTIFICATION_RE.search(block))
        total_cutaways += cutaway_count

        if cutaway_count == 0 and not has_justification:
            verdict = "FAIL"
            total_fail += 1
            detail = f"0 [CUTAWAY] beats, no 'CUTAWAY CHECK:' justification line, {beat_count} beats total"
        elif cutaway_count == 0 and has_justification:
            verdict = "PASS"
            detail = f"0 [CUTAWAY] beats but justification stated, {beat_count} beats total"
        else:
            verdict = "PASS"
            detail = f"{cutaway_count} [CUTAWAY] beat(s), {beat_count} beats total"

        print(f"[{verdict}] ACT {title} — {detail}")

    print(f"\n{len(acts)} Act(s) checked, {total_cutaways} total [CUTAWAY] beat(s) — "
          f"{len(acts) - total_fail} pass, {total_fail} fail")
    return 1 if total_fail else 0


if __name__ == "__main__":
    sys.exit(main())
