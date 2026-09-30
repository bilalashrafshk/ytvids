"""
Align the episode 05 voiceover to 06_VOICE_DIRECTION.json (sentence level, word timestamps).

    <python with faster-whisper> scripts/align_voiceover.py [path/to/voiceover.wav] [--force]

Default audio: videos/05-hdmi-monopoly/voiceover/master_narration.wav.
Caches the word-level transcript in voiceover/whisper_words.json (re-made when the wav is newer,
or with --force). Writes voiceover/alignment.json. Then run scripts/build_ep05_beats.py.
"""
import json, re, sys, difflib, shutil, os

EP = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "videos", "05-hdmi-monopoly") + "/"
ARGS = [a for a in sys.argv[1:] if not a.startswith("--")]
WAV = ARGS[0] if ARGS else EP + "voiceover/master_narration.wav"
WORDS = EP + "voiceover/whisper_words.json"
FORCE = "--force" in sys.argv
if not os.path.exists(WORDS) or FORCE or os.path.getmtime(WAV) > os.path.getmtime(WORDS):
    from faster_whisper import WhisperModel
    m = WhisperModel("small.en", device="cpu", compute_type="int8")
    segs, info = m.transcribe(WAV, word_timestamps=True, beam_size=1,
                              vad_filter=False, condition_on_previous_text=False)
    words = []
    for s in segs:
        for w in s.words:
            words.append({"w": w.word.strip(), "s": round(w.start, 3), "e": round(w.end, 3)})
    json.dump({"duration": info.duration, "words": words}, open(WORDS, "w"))
    print("transcribed", len(words), "words", flush=True)
data = json.load(open(WORDS))
words = data["words"]

# ---- script side: chunk -> sentences -> tokens
chunks = json.load(open(EP + "06_VOICE_DIRECTION.json"))
sents = []
for c in chunks:
    for s in re.split(r"(?<=[.!?])\s+", c["target_text"].strip()):
        if s:
            sents.append({"chunk_id": c["chunk_id"], "text": s})

ACR = [("h d m i", "hdmi"), ("d v i", "dvi"), ("a m d", "amd"), ("h d fury", "hdfury")]
def norm_text(t):
    t = t.lower().replace("-", " ")
    t = re.sub(r"[^a-z0-9' ]", " ", t)
    t = re.sub(r"\s+", " ", t).strip()
    for a, b in ACR:
        t = re.sub(r"\b" + a + r"\b", b, t)
    return t.split()

def norm_word(w):
    w = w.lower().replace("-", " ")
    w = re.sub(r"[^a-z0-9' ]", "", w)
    w = re.sub(r"\.", "", w)
    return w.strip()

script_tok = []   # (token, sentence index)
for i, s in enumerate(sents):
    for t in norm_text(s["text"]):
        script_tok.append((t, i))

# whisper tokens; split multi-word outputs, collapse dotted acronyms
wt = []   # (token, start, end)
for w in words:
    n = norm_word(w["w"])
    if not n:
        continue
    for part in n.split():
        wt.append((part, w["s"], w["e"]))
# collapse spelled letter runs in whisper output too (e.g. "h d m i")
def collapse(seq):
    out, i = [], 0
    while i < len(seq):
        hit = False
        for a, b in ACR:
            parts = a.split()
            if [x[0] for x in seq[i:i + len(parts)]] == parts:
                out.append((b, seq[i][1], seq[i + len(parts) - 1][2]))
                i += len(parts); hit = True; break
        if not hit:
            out.append(seq[i]); i += 1
    return out
wt = collapse(wt)

a = [t for t, _ in script_tok]
b = [t for t, _, _ in wt]
sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
tstart = [None] * len(a); tend = [None] * len(a)
matched = [False] * len(a)
for blk in sm.get_matching_blocks():
    for k in range(blk.size):
        tstart[blk.a + k] = wt[blk.b + k][1]
        tend[blk.a + k] = wt[blk.b + k][2]
        matched[blk.a + k] = True
# fuzzy pass for unmatched tokens between matched neighbours
for opcode, i1, i2, j1, j2 in sm.get_opcodes():
    if opcode == "replace":
        for k in range(i1, i2):
            best, bj = 0, None
            for j in range(j1, j2):
                r = difflib.SequenceMatcher(None, a[k], b[j]).ratio()
                if r > best:
                    best, bj = r, j
            if bj is not None and best >= 0.7:
                tstart[k] = wt[bj][1]; tend[k] = wt[bj][2]; matched[k] = True
# interpolate the rest
n = len(a)
idx = [i for i in range(n) if tstart[i] is not None]
for i in range(n):
    if tstart[i] is None:
        lo = max([j for j in idx if j < i], default=None)
        hi = min([j for j in idx if j > i], default=None)
        if lo is None:
            tstart[i] = tend[i] = 0.0 if hi is None else tstart[hi]
        elif hi is None:
            tstart[i] = tend[i] = tend[lo]
        else:
            f = (i - lo) / (hi - lo)
            tstart[i] = tend[i] = tend[lo] + f * (tstart[hi] - tend[lo])

NUMWORDS = r"\b(hundred|thousand|million|billion|twenty|fifteen|ten|five|four|two|one|cents?|dollars?|percent)\b"
out = []
low = []
for i, s in enumerate(sents):
    ks = [k for k, (_, si) in enumerate(script_tok) if si == i]
    st, en = tstart[ks[0]], tend[ks[-1]]
    mt = sum(matched[k] for k in ks) / len(ks)
    rec = {"i": i, "chunk_id": s["chunk_id"], "text": s["text"],
           "start": round(st, 2), "end": round(max(en, st), 2), "match": round(mt, 2)}
    out.append(rec)
    if mt < 0.7:
        low.append(rec)

tot_match = sum(matched) / len(matched)
res = {
    "audio": "voiceover/master_narration.wav",
    "warnings": [{"sentences": [r["i"]], "issue": "low word match (%.2f): listen to this line for a TTS error" % r["match"]} for r in low if len(r["text"].split()) > 5 and r["match"] < 0.5 and not re.search(NUMWORDS, r["text"].lower())],
    "duration": round(data["duration"], 2),
    "method": ("faster-whisper small.en word timestamps (cpu, int8, beam 1), matched to "
               "06_VOICE_DIRECTION.json text (%.1f%% of words matched, all %d sentences placed)"
               % (tot_match * 100, len(out))),
    "sentences": out,
}
json.dump(res, open(EP + "voiceover/alignment.json", "w"), indent=1, ensure_ascii=False)
mn = EP + "voiceover/master_narration.wav"
if os.path.abspath(WAV) != os.path.abspath(mn):
    shutil.copyfile(WAV, mn)

# diagnostics
hd_word = sum(1 for t, _, _ in wt if t == "hdmi")
print("duration", res["duration"], "| sentences", len(out), "| words matched %.1f%%" % (tot_match * 100))
print("whisper 'hdmi' tokens:", hd_word, "| script 'hdmi' tokens:", sum(1 for t in a if t == "hdmi"))
print("low-match sentences (<0.7):", len(low))
for r in low:
    print(" ", r["i"], r["match"], r["start"], r["text"][:90])
# gaps / overlaps
gaps = [(out[i + 1]["start"] - out[i]["end"], i) for i in range(len(out) - 1)]
print("max gap %.2fs after sentence %d" % max(gaps))
print("non-monotone:", sum(1 for i in range(len(out) - 1) if out[i + 1]["start"] < out[i]["start"]))
print("last sentence ends", out[-1]["end"], "vs audio", res["duration"])
