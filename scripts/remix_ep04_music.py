#!/usr/bin/env python3
"""Episode 04: set the background-music levels in the CapCut draft (after the user swaps the track).

- Under narration: 18 dB below the VO (engine mix rule); cold open a little louder.
- Silence drops at the turn (7:47) and under "her mother died"; soft fades at every cut.
- Loops the track if it is shorter than the video, and fades out 3s after the last word.

Refuses to run while CapCut is open. Backs up every file it writes.
    python3 scripts/remix_ep04_music.py [draft_folder]
"""
import copy, glob, json, os, shutil, subprocess, sys, time, uuid

DRAFT = sys.argv[1] if len(sys.argv) > 1 else "/Users/bilalashraf/Movies/CapCut/User Data/Projects/com.lveditor.draft/What If Humans Lived to 150 - Rough Cut"
ALIGN = "/Users/bilalashraf/YT Videos/videos/04-what-if-humans-live-to-150/voiceover/alignment.json"
VO_NAME = "vo_master_-15LUFS.wav"
VO_LUFS = -16.2          # measured
BED_BELOW_VO = 18.0      # dB, engine mix rule (18–35)
COLD_OPEN_BOOST = 5.0    # dB, first 16.5s

if os.environ.get("SKIP_CAPCUT_CHECK") != "1" and subprocess.run(["pgrep", "-x", "CapCut"], capture_output=True).returncode == 0:
    sys.exit("CapCut is running. Quit it completely, then rerun.")

def lufs(path):
    out = subprocess.run(["ffmpeg", "-hide_banner", "-i", path, "-af", "ebur128", "-f", "null", "-"], capture_output=True, text=True).stderr
    return float([l for l in out.splitlines() if l.strip().startswith("I:")][-1].split()[1])

files = [p for p in glob.glob(f"{DRAFT}/Timelines/*/draft_info.json") + [f"{DRAFT}/draft_info.json"] if os.path.exists(p)]
d = json.load(open(files[0]))
mats = d["materials"]
audio_by_id = {a["id"]: a for a in mats["audios"]}
music_track = next(t for t in d["tracks"] if t["type"] == "audio" and any(audio_by_id[s["material_id"]]["name"] != VO_NAME for s in t["segments"]))
tmpl = music_track["segments"][0]
music = audio_by_id[tmpl["material_id"]]
music_len = music["duration"] / 1e6

gain_db = (VO_LUFS - BED_BELOW_VO) - lufs(music["path"])
v_bed = round(10 ** (gain_db / 20), 4)
v_open = round(10 ** ((gain_db + COLD_OPEN_BOOST) / 20), 4)

a = json.load(open(ALIGN)); S = a["sentences"]
turn, died0, died1 = S[138]["start"], S[164]["start"], S[165]["start"]
end = a["duration"] + 3.0

# (target start, target end, volume, fade in, fade out); source position loops over the track.
spans = [(0.0, 16.5, v_open, 0.5, 0.5), (16.5, turn, v_bed, 0.5, 0.8), (turn + 1.0, died0, v_bed, 1.5, 0.6), (died1, end, v_bed, 1.5, 3.0)]
pieces = []
for s0, s1, vol, fi, fo in spans:
    t = s0
    while t < s1 - 0.01:                      # split where the track loops
        src = t % music_len
        chunk = min(s1 - t, music_len - src)
        pieces.append([t, chunk, src, vol, fi if t == s0 else 0.05, fo if t + chunk >= s1 - 0.01 else 0.05])
        t += chunk

def us(x): return int(round(x * 1e6))
def new_id(): return str(uuid.uuid4()).upper()
def find_list(mid):
    for k, v in mats.items():
        if isinstance(v, list):
            for m in v:
                if isinstance(m, dict) and m.get("id") == mid: return k, m
    return None, None

new_segs = []
for t, dur, src, vol, fi, fo in pieces:
    seg = copy.deepcopy(tmpl); seg["id"] = new_id()
    seg["source_timerange"] = {"start": us(src), "duration": us(dur)}
    seg["target_timerange"] = {"start": us(t), "duration": us(dur)}
    seg["volume"] = vol; seg["last_nonzero_volume"] = vol
    refs = []
    for r in tmpl["extra_material_refs"]:
        k, m = find_list(r)
        if m is None or m.get("type") == "audio_fade": continue
        m2 = copy.deepcopy(m); m2["id"] = new_id(); mats[k].append(m2); refs.append(m2["id"])
    fade = {"id": new_id(), "type": "audio_fade", "fade_type": 0, "fade_in_duration": us(fi), "fade_out_duration": us(fo)}
    mats.setdefault("audio_fades", []).append(fade); refs.append(fade["id"])
    seg["extra_material_refs"] = refs
    new_segs.append(seg)
music_track["segments"] = new_segs
d["duration"] = max(d.get("duration", 0), us(end))

stamp = time.strftime("%Y%m%d-%H%M%S")
for p in files:
    shutil.copy2(p, f"{p}.before-remix-{stamp}")
    json.dump(d, open(p, "w"), ensure_ascii=False)
print(f"music: {music['name']} ({music_len:.0f}s) | bed volume {v_bed} ({gain_db:.1f} dB), cold open {v_open}")
print(f"{len(new_segs)} pieces:", [(round(p[0], 1), round(p[0] + p[1], 1), p[3]) for p in pieces])
print("wrote:", *files, sep="\n  ")
