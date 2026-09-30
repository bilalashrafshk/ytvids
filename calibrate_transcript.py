#!/usr/bin/env python3
"""
Measure benchmark transcripts with gate_check.py's OWN functions, so a new
skeleton's band is derived the same way the existing ones were.

    python3 calibrate_transcript.py a.json b.json ...        # per-video table + pooled band
    python3 calibrate_transcript.py --txt a.txt              # plain text transcripts also accepted

Input: faster-whisper JSON ([{"s","e","t"}, ...]) or plain text.
Output: med / mean / short% / long% / you per 1k, plus every universal gate
(jargon, big words, reframe rate, first-reframe position, opener share, opener
run, narrated-source lines, moral close) so you can see which universal gates
a benchmark would itself FAIL. That is how per-skeleton overrides are justified
(same principle as A9's TURN1 and A11's bigwd/openrun overrides).
"""

import json
import re
import statistics
import sys
import collections

import gate_check as g


def load(path):
    if path.endswith(".json"):
        segs = json.load(open(path, encoding="utf-8"))
        return " ".join(s["t"] for s in segs), segs[-1]["e"]
    return open(path, encoding="utf-8").read(), None


def measure(text, seconds=None):
    text = re.sub(r"\s+", " ", text)
    sents = g.sentences(text)
    words = text.split()
    lower = [w.lower().strip(".,;:!?\"'()-") for w in words]
    n_w, n_s = len(words), len(sents)
    lens = [len(s.split()) for s in sents]
    jset = set(g.JARGON)
    jhits = collections.Counter(w for w in lower if w in jset)
    turns = [i for i, s in enumerate(sents) if g.REFRAME.search(s)]
    openers = collections.Counter(s.split()[0].strip('",.') for s in sents if s.split())
    top_w, top_c = openers.most_common(1)[0]
    run = worst = 0
    for s in sents:
        w = s.split()[0].strip('",.') if s.split() else ""
        run = run + 1 if w == top_w else 0
        worst = max(worst, run)
    tail = " ".join(words[-150:])
    return {
        "words": n_w, "sents": n_s,
        "wpm": round(n_w / (seconds / 60)) if seconds else None,
        "med": statistics.median(lens), "mean": round(statistics.mean(lens), 1),
        "short": round(sum(1 for l in lens if l <= 6) / n_s * 100, 1),
        "lng": round(sum(1 for l in lens if l >= 25) / n_s * 100, 1),
        "you": round(len(re.findall(r"\b[Yy]ou(?:r|'re|'ve|'ll)?\b", text)) / n_w * 1000, 1),
        "jargon_n": sum(jhits.values()), "jargon": dict(jhits.most_common(6)),
        "jrate": round(sum(jhits.values()) / n_w * 1000, 1),
        "bigwd": round(sum(1 for w in lower if len(w) >= 12) / n_w * 1000, 1),
        "reframe": round(len(turns) / n_s * 1000),
        "turn1": round(turns[0] / n_s * 100) if turns else None,
        "opener": f"{top_w} {top_c / n_s * 100:.0f}%", "openrun": worst,
        "cites": sum(1 for s in sents if g.CITATION.search(s)),
        "moral": len(list(g.MORAL_CLOSE.finditer(tail))),
    }


def main():
    paths = [a for a in sys.argv[1:] if not a.startswith("--")]
    if not paths:
        print(__doc__)
        return 1
    rows = []
    pooled_text = []
    for p in paths:
        text, secs = load(p)
        m = measure(text, secs)
        rows.append((p, m))
        pooled_text.append(text)
    keys = ["words", "wpm", "med", "mean", "short", "lng", "you", "jrate", "bigwd",
            "reframe", "turn1", "opener", "openrun", "cites", "moral"]
    print("video".ljust(34) + " ".join(k.rjust(8) for k in keys))
    for p, m in rows:
        name = p.rsplit("/", 1)[-1][:32]
        print(name.ljust(34) + " ".join(str(m[k]).rjust(8) for k in keys))
    print()
    for p, m in rows:
        if m["jargon"]:
            print(f"jargon hits {p.rsplit('/', 1)[-1][:28]}: {m['jargon']}")
    num = lambda k: [m[k] for _, m in rows if m[k] is not None]
    print("\nPOOLED BAND (median of per-video values; use as the skeleton's benchmark):")
    for k in ("med", "mean", "short", "lng", "you"):
        print(f"  {k:6} {statistics.median(num(k)):.1f}   (range {min(num(k))} - {max(num(k))})")
    print("\nUNIVERSAL GATES the benchmarks themselves would FAIL (justify overrides):")
    for p, m in rows:
        f = []
        if m["jargon_n"]: f.append(f"JARGON({m['jargon_n']})")
        if m["bigwd"] > 14: f.append(f"BIGWD {m['bigwd']}>14")
        if m["reframe"] < 36: f.append(f"REFRAME {m['reframe']}<36")
        if m["turn1"] is None or m["turn1"] > 12: f.append(f"TURN1 {m['turn1']}%>12")
        if float(m["opener"].split()[-1].rstrip('%')) > 24: f.append(f"OPENER {m['opener']}>24%")
        if m["openrun"] > 3: f.append(f"OPENRUN {m['openrun']}>3")
        if m["cites"]: f.append(f"CITES({m['cites']})")
        if m["moral"]: f.append(f"CLOSE moral({m['moral']})")
        print(f"  {p.rsplit('/', 1)[-1][:34]:34} {', '.join(f) if f else 'none'}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
