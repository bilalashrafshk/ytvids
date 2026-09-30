#!/usr/bin/env python3
"""
Episode 05: plan the background music and the placeholder sound effects; writes
assets/capcut_ready/extras.json (read by assemble_ep05_draft.mjs).

Same bed as episode 04 (cinematic_meditation_loop.mp3) and the same mix approach:
  - bed 18 dB under the voice (engine mix rule), 5 dB louder over the cold open
  - dips under the number cards (-14 dB) and the real-page inserts (-10 dB, stands in for the low-pass focus)
  - a swell (+6 dB) on any silence over 1.2 s; dead-silence drops before the two shock lines
  - loops the 8-minute track, and fades out 3 s after the last word
SFX are the same placeholders as episode 04 (click, whoosh): soft, tactile only, at signature cinematics and key numbers.
"""
import json, os, re, subprocess

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
EP = os.path.join(ROOT, "videos/05-hdmi-monopoly")
READY = EP + "/assets/capcut_ready"
AL = json.load(open(EP + "/voiceover/alignment.json"))
S, T = AL["sentences"], AL["duration"]
plan = json.load(open(READY + "/timeline_plan.json"))
reg = {r["beat"]: r for r in json.load(open(os.path.join(ROOT, "remotion/src/scenes/episode05/beats.json")))}
MUSIC = READY + "/music/cinematic_meditation_loop.mp3"
BED_BELOW_VO = 18.0

def lufs(path):
    out = subprocess.run(["ffmpeg", "-hide_banner", "-i", path, "-af", "ebur128", "-f", "null", "-"], capture_output=True, text=True).stderr
    return float([l for l in out.splitlines() if l.strip().startswith("I:")][-1].split()[1])
def dur(path):
    return float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", path], capture_output=True, text=True).stdout)

vo_lufs = lufs(READY + "/vo_master_-15LUFS.wav")
music_lufs = lufs(MUSIC)
music_len = dur(MUSIC)
gain_db = (vo_lufs - BED_BELOW_VO) - music_lufs
base = 10 ** (gain_db / 20)
db = lambda x: 10 ** (x / 20)
end = T + 3.0

MATH = {"key_fee", "key_prices", "annual_big", "annual_small", "per_device_15", "per_device_tiers", "small_yearly", "small_per_tv",
        "small_total", "giant_setup", "giant_total", "forty_times", "devices_2017", "devices_times", "growth_a", "growth_b",
        "range_total", "dp_vs_hdmi", "four_k_lost", "four_k_ratio"}
DOCS = {"logo_rules", "docket", "court_finding", "amd_quote_a", "amd_quote_b"}

cold_end = next(b["start"] for b in plan if b["kind"] in ("S", "R"))          # end of the AI-clip cold open
def sent(sub):
    return next(i for i, s in enumerate(S) if sub in s["text"])
i1, i2 = sent("Then it signed the contract again."), sent("It was a piece of a contract.")
silences = [(max(0, S[i1]["start"] - 0.6), S[i1]["end"] + 0.9), (max(0, S[i2]["start"] - 0.6), S[i2]["end"] + 0.7)]

# pause swells: real silences over 1.2 s measured on the master audio
r = subprocess.run(["ffmpeg", "-hide_banner", "-nostats", "-i", EP + "/voiceover/master_narration.wav", "-af", "silencedetect=noise=-38dB:d=1.2", "-f", "null", "-"], capture_output=True, text=True)
st = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", r.stderr)]
en = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", r.stderr)]
swells = [(a + 0.05, b - 0.2) for a, b in zip(st, en)]

dips = []
for b in plan:
    if b["slug"] in MATH: dips.append((b["start"], b["start"] + b["duration"], -14.0))
    elif b["slug"] in DOCS: dips.append((b["start"], b["start"] + b["duration"], -10.0))

bounds = {0.0, end, cold_end}
for a, b in silences + swells: bounds |= {a, b}
for a, b, _ in dips: bounds |= {a, b}
bounds = sorted(x for x in bounds if 0 <= x <= end)
def level(t):
    for a, b in silences:
        if a <= t < b: return 0.0
    for a, b in swells:
        if a <= t < b: return base * db(6.0)
    for a, b, d_ in dips:
        if a <= t < b: return base * db(d_)
    return base * (db(5.0) if t < cold_end else 1.0)
iv = []
for a, b in zip(bounds, bounds[1:]):
    if b - a < 0.05: continue
    v = round(level((a + b) / 2), 5)
    if iv and abs(iv[-1][2] - v) < 1e-9 and abs(iv[-1][1] - a) < 1e-6: iv[-1][1] = b
    else: iv.append([a, b, v])
iv = [x for x in iv if x[2] > 0]

pieces = []
for k, (a, b, v) in enumerate(iv):
    prev_gap = k == 0 or abs(iv[k - 1][1] - a) > 0.05        # a silence (or start) sits before this piece
    next_gap = k == len(iv) - 1 or abs(iv[k + 1][0] - b) > 0.05
    fi = 0.5 if k == 0 else 1.5 if prev_gap else 0.3
    fo = 3.0 if k == len(iv) - 1 else 0.6 if next_gap else 0.3
    t = a
    while t < b - 0.01:                                        # split where the track loops
        src = t % music_len
        chunk = min(b - t, music_len - src)
        pieces.append({"at": round(t, 3), "dur": round(chunk, 3), "src": round(src, 3), "vol": v,
                       "fade_in": fi if t == a else 0.05, "fade_out": fo if t + chunk >= b - 0.01 else 0.05})
        t += chunk

# placeholder SFX at signature cinematics and key numbers
sfx = []
for b in plan:
    if b["kind"] != "R": continue
    rr = reg[b["n"]]
    if rr["comp"] in ("Ep05WhipZoom", "Ep05Flywheel", "Ep05PortalTunnel"):
        sfx.append({"file": "whoosh.wav", "at": round(b["start"], 2), "vol": 0.35})
    if rr["id"] == "Ep05PriceCard-per-device-tiers":
        for c in rr["cues"][:2]:
            sfx.append({"file": "click.wav", "at": round(b["start"] + c / 30 + 0.15, 2), "vol": 0.4})
    if rr["id"] in ("Ep05FeeWaterfall-small-b", "Ep05FeeWaterfall-giant", "Ep05CounterCard-fourteen"):
        sfx.append({"file": "click.wav", "at": round(b["start"] + (rr["cues"][-1] / 30) + 0.1, 2), "vol": 0.4})
sfx.sort(key=lambda x: x["at"])

# AI clips keep their own audio (ambience and effects, no speech), set 18 dB under the voice like the music bed:
# a clip louder than that is turned down to it; a quieter one is left alone.
CLIPS = {}
for b in plan:
    if b["kind"] != "V" or not os.path.exists(b["filePath"]):
        continue
    out = subprocess.run(["ffmpeg", "-hide_banner", "-i", b["filePath"], "-vn", "-af", "ebur128=peak=true", "-f", "null", "-"], capture_output=True, text=True).stderr
    li = [l for l in out.splitlines() if l.strip().startswith("I:")]
    lu = float(li[-1].split()[1]) if li else -70.0
    pk = [l for l in out.splitlines() if l.strip().startswith("Peak:")]
    peak = float(pk[-1].split()[1]) if pk and "inf" not in pk[-1] else -90.0
    # 18 dB under the voice by loudness, and no transient above -12 dBFS (a gavel strike must not spike over the voice)
    g = min(0.0, (vo_lufs - BED_BELOW_VO) - lu, -12.0 - peak) if lu > -69 else 0.0
    CLIPS[os.path.basename(b["filePath"])] = {"lufs": lu, "peak": peak, "gain_db": round(g, 1), "volume": round(10 ** (g / 20), 4)}

json.dump({"music": pieces, "sfx": sfx, "clips": CLIPS, "meta": {"bed_volume": round(base, 4), "gain_db": round(gain_db, 1), "vo_lufs": vo_lufs, "music_lufs": music_lufs}},
          open(READY + "/extras.json", "w"), indent=1)
print("VO %.1f LUFS, music %.1f LUFS -> bed %.1f dB (volume %.4f), cold open to %.1f s" % (vo_lufs, music_lufs, gain_db, base, cold_end))
print("%d music pieces, %d sfx, %d silence drops %s, %d swells %s" % (len(pieces), len(sfx), len(silences), [(round(a, 1), round(b, 1)) for a, b in silences], len(swells), [(round(a, 1), round(b, 1)) for a, b in swells]))
print("clip audio: %d clips, gains %s" % (len(CLIPS), sorted({v["gain_db"] for v in CLIPS.values()})))
print("dips: %d spans; music runs to %.1f s (loops %d time)" % (len(dips), end, int(end // music_len)))
