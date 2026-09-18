#!/usr/bin/env python3
"""
FinanceCraft — CP-0 / GATE gamma / GATE epsilon external verifier.

Self-audit is unreliable at counting. This is not. Run it on any delivered
script before accepting the engine's own audit block.

    python3 gate_check.py script.md            # Track 1 thresholds
    python3 gate_check.py script.md --track2   # Track 2 / POV thresholds

Exit code 0 = all gates pass, 1 = one or more fail.
"""

import argparse
import collections
import re
import statistics
import sys

# CP-0 Jargon List — terms present in the failing draft and in zero benchmark videos.
JARGON = """
macroeconomic programmatic algorithmic autonomous protocol infrastructure
architecture authentication consolidate consolidated telecommunications
neurochemistry down-regulate down-regulated up-regulate up-regulated hedonic
variable-ratio reinforcement empirical randomized evaluation deviations sigma
hysteresis liquidity velocity contraction exposure leveraged restructuring
circulatory conversion impressions sovereignty mandates reclassifying
decentralized multi-carrier substitution cognitive equilibrium indices
psychotherapy stimulation cortex telemetry prefixes amortization
capitalization utilization systemic
""".split()

# Validated across all 7 benchmarks. Range 36–108 per 1,000 sentences;
# every benchmark lands its first reframe within the opening 11%.
REFRAME = re.compile(
    r"\b(isn'?t|is not|was never|wasn'?t|doesn'?t|not because|it'?s not|"
    r"you'?re not|not the|never a|actually)\b", re.I)

# CP-6 signature cinematics — the archetypes that get skipped by default when
# the beat planner defaults to newsroom charts. Reported, not gated: zero is
# sometimes legitimate, but it must be a stated choice, not a silent gap.
SIGNATURE_CINEMATICS = re.compile(
    r"\[REMOTION:\s*(ARCHETYPE_WHIP_ZOOM_MONTAGE|ARCHETYPE_INFINITE_PORTAL_TUNNEL|"
    r"ARCHETYPE_3D_ORBITAL_FLYWHEEL)[^\]]*\]", re.I)

# Things a camera could photograph. Extend freely per episode.
CONCRETE = """
coffee popcorn door pocket couch television remote bed floor phone glass
thigh knock neighbor apartment desk truck road port silo warehouse pallet
ceiling van bike cereal box briefcase suit vault car watch island boat
airstrip grain wheat corn soy bar ticket marquee seat diner booth airport
cash wallet kitchen table chair window shelf screen key lock dock crate
train ship plane bag coin note receipt shelf counter street shop stall
""".split()

ARCHETYPE_PROFILES = {
    "1": {
        "label": "First-Principles Explainer",
        "med": 13,
        "mean": 14.1,
        "short": 15.8,
        "lng": 13.3,
        "you": 23.0
    },
    "2": {
        "label": "ELI5 Origin Narrative",
        "med": 8,
        "mean": 9.0,
        "short": 41.8,
        "lng": 1.7,
        "you": 11.3
    },
    "3": {
        "label": "Geopolitical Chessboard",
        "med": 10,
        "mean": 12.7,
        "short": 20.9,
        "lng": 5.8,
        "you": 14.7
    },
    "4": {
        "label": "P&L Business Breakdown",
        "med": 15,
        "mean": 16.9,
        "short": 13.7,
        "lng": 20.9,
        "you": 3.6
    },
    "5": {
        "label": "POV Thought Experiment",
        "med": 7,
        "mean": 8.7,
        "short": 43.1,
        "lng": 1.5,
        "you": 57.4
    },
    "6": {
        "label": "Dual-Character Simulation",
        "med": 11,
        "mean": 11.8,
        "short": 27.4,
        "lng": 4.6,
        "you": 6.6
    },
    "7": {
        "label": "Compounded Playbook",
        "med": 6,
        "mean": 7.6,
        "short": 52.4,
        "lng": 0.9,
        "you": 75.6
    }
}
# Bands are derived from the benchmark video for each archetype, not invented.
# Tolerance is asymmetric: drifting toward the benchmark's register is free,
# drifting away from it is what fails.
BAND = {
    "med":   3,    # median sentence length may exceed benchmark by up to 3 words
    "mean":  3.0,  # mean likewise
    "short": 8.0,  # share of <=6w sentences may fall up to 8pp below benchmark
    "lng":   4.0,  # share of >=25w sentences may exceed benchmark by up to 4pp
    "you":   12.0, # second-person density may fall up to 12/1k below benchmark
}

TAG_RE = re.compile(r"`?\[[^\]]+\]`?")
HEADER_RE = re.compile(r"^\s*(#{1,6}|---|\|)")


def extract_narration(raw: str) -> str:
    """Strip tags, headers, audit blocks and markdown furniture."""
    out = []
    for line in raw.split("\n"):
        s = line.strip()
        if not s or HEADER_RE.match(s) or s.startswith(("*", "-", ">", "`")):
            continue
        cleaned = TAG_RE.sub("", line).replace("`", "").replace("*", "").strip()
        if cleaned:
            out.append(cleaned)
    return re.sub(r"\s+", " ", " ".join(out))


def sentences(text: str):
    return [s.strip() for s in re.split(r"(?<=[.!?])\s+", text) if s.strip()]


def check(label, observed, ok, evidence=""):
    verdict = "PASS" if ok else "FAIL"
    print(f"  [{verdict}] {label}")
    print(f"         observed: {observed}")
    if evidence:
        print(f"         evidence: {evidence}")
    return ok


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("path")
    ap.add_argument("--archetype", "-a", type=int, required=True, choices=range(1, 8),
                    help="1 First-Principles | 2 ELI5 Origin | 3 Geopolitical | "
                         "4 P&L Breakdown | 5 POV Thought Experiment | "
                         "6 Dual-Character | 7 Compounded Playbook")
    args = ap.parse_args()

    p = ARCHETYPE_PROFILES[str(args.archetype)]
    raw = open(args.path, encoding="utf-8").read()
    text = extract_narration(raw)
    sents = sentences(text)
    if not sents:
        print("No narration found after stripping tags and headers.")
        return 1

    words = text.split()
    lower = [w.lower().strip(".,;:!?\"'()-") for w in words]
    n_w, n_s = len(words), len(sents)
    lens = [len(s.split()) for s in sents]

    jset = set(JARGON)
    jhits = sorted({w for w in lower if w in jset})
    jrate = sum(1 for w in lower if w in jset) / n_w * 1000
    longw = sum(1 for w in lower if len(w) >= 12) / n_w * 1000
    med = statistics.median(lens)
    mean = statistics.mean(lens)
    short = sum(1 for l in lens if l <= 6) / n_s * 100
    longs = sum(1 for l in lens if l >= 25) / n_s * 100
    you = len(re.findall(r"\b[Yy]ou(?:r|'re|'ve|'ll)?\b", text)) / n_w * 1000

    print(f"\nFinanceCraft gate check — {args.path}")
    print(f"Archetype {args.archetype}: {p['label']}")
    print(f"{n_w} words | {n_s} sentences | ~{n_w/155:.1f} min at 155 wpm")
    print(f"Benchmark for this archetype: med {p['med']} | mean {p['mean']} | "
          f"short {p['short']}% | long {p['lng']}% | you {p['you']}/1k\n")

    results = [
        check(f"MED    median sentence <= {p['med'] + BAND['med']} (benchmark {p['med']})",
              f"{med:.0f} words", med <= p["med"] + BAND["med"]),
        check(f"MEAN   mean sentence <= {p['mean'] + BAND['mean']:.1f} (benchmark {p['mean']})",
              f"{mean:.1f} words", mean <= p["mean"] + BAND["mean"]),
        check(f"SHORT  sentences <=6w >= {max(p['short'] - BAND['short'], 0):.1f}% (benchmark {p['short']}%)",
              f"{short:.1f}%", short >= p["short"] - BAND["short"]),
        check(f"LONG   sentences >=25w <= {p['lng'] + BAND['lng']:.1f}% (benchmark {p['lng']}%)",
              f"{longs:.1f}%", longs <= p["lng"] + BAND["lng"]),
        check("JARGON per 1,000 <= 4.0  [UNIVERSAL — max across all 7 benchmarks was 2.2]",
              f"{jrate:.1f}", jrate <= 4.0,
              ("offending: " + ", ".join(jhits)) if jhits else "none found"),
        check("BIGWD  12+ char words per 1,000 <= 14  [UNIVERSAL — benchmark max 12.8]",
              f"{longw:.1f}", longw <= 14),
    ]

    turns = [i for i, s in enumerate(sents) if REFRAME.search(s)]
    rate = len(turns) / n_s * 1000
    first = turns[0] / n_s * 100 if turns else None
    results.append(check(
        "REFRAME reframes per 1,000 sentences >= 36  [UNIVERSAL — benchmark range 36-108]",
        f"{rate:.0f} ({len(turns)} found)", rate >= 36,
        "the 'it isn't X, it's Y' turn — what viewers quote back"))
    results.append(check(
        "TURN1   first reframe within opening 12%  [UNIVERSAL — benchmarks 1-11%]",
        f"{first:.0f}%" if first is not None else "no reframe anywhere",
        first is not None and first <= 12))

    openers = collections.Counter(
        s.split()[0].strip('",.') for s in sents if s.split())
    top_w, top_c = openers.most_common(1)[0]
    run = worst = 0
    for s in sents:
        w = s.split()[0].strip('",.') if s.split() else ""
        run = run + 1 if w == top_w else 0
        worst = max(worst, run)
    results.append(check(
        "OPENER  most-repeated sentence opener <= 24%  [UNIVERSAL — benchmarks 6-20%]",
        f"'{top_w}' {top_c/n_s*100:.0f}%", top_c / n_s * 100 <= 24))
    results.append(check(
        "OPENRUN longest same-opener run <= 3  [UNIVERSAL — no benchmark exceeds 3]",
        f"{worst} consecutive '{top_w}...'", worst <= 3))

    if p["you"] >= 20:  # only archetypes that are genuinely second-person
        results.append(check(
            f"YOU    second-person per 1,000 >= {p['you'] - BAND['you']:.1f} (benchmark {p['you']})",
            f"{you:.1f}", you >= p["you"] - BAND["you"]))

    # Decimals: an artifact of TTS, not of writing quality. The benchmarks are
    # human-voiced, so they contain raw decimals freely and "fail" this check.
    # It stays advisory for us because our VO is synthetic.
    dec = re.findall(r"\b\d+\.\d+\b", text)
    if dec:
        print(f"  [note] {len(dec)} raw decimal(s) — convert to phonetic \"point\" "
              f"before VO: {', '.join(dec[:8])}")
    else:
        print("  [note] decimals: all phonetic, VO-safe")

    sig = list(SIGNATURE_CINEMATICS.finditer(raw))
    if sig:
        runtime_s = n_w / 155 * 60
        times = [m.start() / len(raw) * runtime_s for m in sig]
        labels = [m.group(1) for m in sig]
        print(f"  [note] SIGNATURE CINEMATICS: {len(sig)} found — " +
              ", ".join(f"{l}@{t:.0f}s" for l, t in zip(labels, times)))
        gaps = [b - a for a, b in zip(times, times[1:])]
        if any(g < 90 for g in gaps):
            print("  [note] CLUSTERING: two or more land < 90s apart — "
                  "confirm this is deliberate escalation, not incidental overlap")
    else:
        print("  [note] SIGNATURE CINEMATICS: 0 found — CP-6 default is at least one "
              "(whip-zoom montage / infinite portal tunnel / orbital flywheel) "
              "or a stated reason none fits this episode")

    print("\n  NOT MECHANICALLY CHECKED — apply by eye (see CP-VERIFY):")
    print("    - concrete-noun runs: no reliable automated test exists; read for")
    print("      passages with nothing a camera could photograph")
    print("    - R3 explainer-paragraph ban, R5 device repetition")
    print("    - Track 2: Stakes Contract complete within first 80 words")
    if args.archetype == 5:
        print(f"\n  First 80 words (check premise/clock/penalty/rules/adversary):")
        print(f'    "{" ".join(words[:80])}"')

    failed = [r for r in results if not r]
    print(f"\n{'ALL GATES PASS' if not failed else f'{len(failed)} GATE(S) FAILED — regenerate'}\n")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
