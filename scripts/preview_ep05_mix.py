#!/usr/bin/env python3
"""
Episode 05: simulate the whole audio mix (voiceover, music pieces with their fades and dips, AI-clip audio at
its set level, sound effects) with ffmpeg and print integrated loudness, loudness range and peak.
    python3 scripts/preview_ep05_mix.py [out.wav]     (default: a temp file, deleted afterwards)
"""
import json, os, subprocess, sys, tempfile
K = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "videos/05-hdmi-monopoly/assets/capcut_ready")
x = json.load(open(K + "/extras.json")); plan = json.load(open(K + "/timeline_plan.json"))
ins, fl, lab = [], [], []
def add(path, at, vol, src=None, dur=None, fi=0, fo=0):
    i = len(lab); opts = []
    if src is not None: opts += ["-ss", str(src)]
    if dur is not None: opts += ["-t", str(dur)]
    ins.extend(opts + ["-i", path])
    f = f"[{i}:a]aformat=sample_rates=48000:channel_layouts=stereo,volume={vol}"
    if fi: f += f",afade=t=in:d={fi}"
    if fo and dur: f += f",afade=t=out:st={max(0, dur - fo)}:d={fo}"
    fl.append(f + f",adelay={int(at * 1000)}|{int(at * 1000)}[a{i}]"); lab.append(f"[a{i}]")
add(K + "/vo_master_-15LUFS.wav", 0, 1.0)
for m in x["music"]: add(K + "/music/cinematic_meditation_loop.mp3", m["at"], m["vol"], m["src"], m["dur"], m["fade_in"], m["fade_out"])
for b in plan:
    if b["kind"] == "V" and subprocess.run(["ffprobe", "-v", "error", "-select_streams", "a", "-show_entries", "stream=codec_type", "-of", "csv=p=0", b["filePath"]], capture_output=True, text=True).stdout.strip():
        add(b["filePath"], b["start"], x["clips"].get(os.path.basename(b["filePath"]), {"volume": 1})["volume"])
for s in x["sfx"]: add(K + "/sfx/" + s["file"], s["at"], s["vol"])
graph = ";".join(fl) + ";" + "".join(lab) + f"amix=inputs={len(lab)}:normalize=0:duration=longest[out]"   # no limiter: shows the real peak
out = sys.argv[1] if len(sys.argv) > 1 else tempfile.mktemp(suffix=".wav")
r = subprocess.run(["ffmpeg", "-y", "-hide_banner", "-nostats"] + ins + ["-filter_complex", graph, "-map", "[out]", "-ac", "2", "-ar", "48000", out], capture_output=True, text=True)
if r.returncode: sys.exit(r.stderr[-400:])
m = subprocess.run(["ffmpeg", "-hide_banner", "-nostats", "-i", out, "-af", "ebur128=peak=true", "-f", "null", "-"], capture_output=True, text=True).stderr
g = lambda k: [l for l in m.splitlines() if l.strip().startswith(k)][-1].split()[1]
print("mix of %d sources: integrated %s LUFS | loudness range %s LU | true peak %s dBFS" % (len(lab), g("I:"), g("LRA:"), g("Peak:")))
if len(sys.argv) == 1: os.remove(out)
