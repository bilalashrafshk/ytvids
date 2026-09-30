#!/usr/bin/env python3
"""
Episode 05: build assets/capcut_ready/ from the delivered AI stills and clips, the Remotion renders and the VO.

  stills  -> kenburns/NNN_slug.mp4   1920x1080 @30, exactly the beat length, slow push / pull / drift
                                   (from assets/upscaled/ when present, else the delivered still)
  clips   -> clips/NNN_slug.mp4      24->30 fps by motion interpolation (no repeated frames), own audio KEPT, picture and audio retimed together (never trimmed) to the beat length, 1920x1080 @30
  remotion-> remotion/NNN_slug.mp4   copied
  vo      -> vo_master_-15LUFS.wav   loudness-normalised to -15 LUFS, true peak -1 dB
Reads timeline_plan.json (written by scripts/build_ep05_beats.py).  Idempotent: skips finished files.
"""
import json, os, re, shutil, subprocess, sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
EP = os.path.join(ROOT, "videos/05-hdmi-monopoly")
SRC = os.path.join(EP, "assets/AI Stills + Vids")
READY = os.path.join(EP, "assets/capcut_ready")
plan = json.load(open(READY + "/timeline_plan.json"))
for d in ("clips", "kenburns", "remotion"):
    os.makedirs(f"{READY}/{d}", exist_ok=True)
REGEN = os.path.join(EP, "assets/regenerated")   # corrected or missing assets; these win over the first delivery
DIRS = [REGEN, SRC]
listing = {d: (sorted(os.listdir(d)) if os.path.isdir(d) else []) for d in DIRS}

def find(base):  # base like '040_shopper_checkout.png' or '010_x.mp4' -> the delivered file (regenerated first)
    for d in DIRS:
        m = [f for f in listing[d] if f.startswith(base + "_")]
        if m:
            return os.path.join(d, m[-1])
    return None

_ana = os.path.expanduser("~/opt/anaconda3/bin/python")
KB_PY = _ana if os.path.exists(_ana) else sys.executable    # needs OpenCV + numpy

def run(cmd):
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode:
        print(" ".join(cmd)[:200], "\n", r.stderr[-400:])
        sys.exit(1)

def probe_dur(p):
    return float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", p], capture_output=True, text=True).stdout)

notes = []
for k, b in enumerate(plan):
    name = os.path.basename(b["filePath"])
    out = b["filePath"]
    if b["kind"] == "V" and os.environ.get("CLIPS_OUT"):        # build into another folder while CapCut has clips/ open
        out = out.replace("/clips/", "/%s/" % os.environ["CLIPS_OUT"])
        os.makedirs(os.path.dirname(out), exist_ok=True)
    if b["kind"] == "S" and os.environ.get("KB_OUT"):           # build Ken Burns into another folder while CapCut has kenburns/ open
        out = out.replace("/kenburns/", "/%s/" % os.environ["KB_OUT"])
        os.makedirs(os.path.dirname(out), exist_ok=True)
    if os.environ.get("ONLY_CLIPS") and b["kind"] != "V":
        continue
    if os.environ.get("ONLY_KB") and b["kind"] != "S":
        continue
    D = b["duration"]
    if os.path.exists(out) and os.path.getsize(out) > 1000:
        continue
    if b["kind"] == "R":
        src = os.path.join(ROOT, "remotion/out/ep05", name)   # normally already in place: render_ep05.py copies it here
        shutil.copy2(src, out)
    elif b["kind"] == "S":
        base = name.replace(".mp4", ".png")
        up = os.path.join(EP, "assets/upscaled", base)      # 2x AI upscale wins when it exists
        src = up if os.path.exists(up) else find(base)
        if not src:
            print("MISSING still", base); sys.exit(1)
        # sub-pixel renderer (scripts/kenburns_render.py): ffmpeg zoompan snaps each frame's crop to whole pixels and wobbles on slow zooms
        run([KB_PY, os.path.join(ROOT, "scripts/kenburns_render.py"), src, out, str(D), str(k % 5)])
    else:
        base = name
        src = find(base)
        if not src:
            # no delivered clip: hold the character reference as a slow push (provisional)
            ref = find("ref_char_03.png")
            notes.append((b["n"], b["slug"], "no clip delivered; using ref_char_03 as a provisional Ken Burns"))
            N = max(1, round(D * 30))
            vf = f"crop=floor(ih*16/9/2)*2:ih,scale=3840:2160:flags=lanczos,zoompan=z='1+0.08*on/{N}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={N}:s=1920x1080:fps=30,format=yuv420p"
            run(["ffmpeg", "-y", "-loglevel", "error", "-i", ref, "-vf", vf, "-frames:v", str(N), "-c:v", "libx264", "-crf", "16", out])
            continue
        d = probe_dur(src)
        speed = d / D                       # >1 speeds the clip up, <1 slows it; nothing is cut off
        if not 0.85 <= speed <= 1.30:
            notes.append((b["n"], b["slug"], "speed %.2fx is outside the comfortable range" % speed))
        # AI clips are 24 fps. Repeating frames to reach 30 (what `fps=30` does) makes every camera move judder, so the
        # missing frames are synthesised with motion interpolation instead. A clip already near 30 fps after the speed change needs none.
        eff_fps = 24.0 * speed
        interp = "" if abs(eff_fps - 30.0) < 0.6 else "minterpolate=fps=30:mi_mode=mci:mc_mode=aobmc:me_mode=bidir:vsbmc=1,"
        vf = f"setpts=PTS/{speed:.5f},{interp}scale=1920:1080:flags=lanczos,fps=30,format=yuv420p"
        # the clip's own audio is kept (the user mutes in CapCut at the end if needed), retimed with the picture
        run(["ffmpeg", "-y", "-loglevel", "error", "-i", src, "-vf", vf, "-af", f"atempo={speed:.5f}", "-t", f"{D:.3f}",
             "-c:v", "libx264", "-crf", "16", "-preset", "medium", "-g", "15", "-c:a", "aac", "-b:a", "192k", "-ar", "48000", out])
        notes.append((b["n"], b["slug"], "speed %.2fx" % speed))

# voiceover to -15 LUFS
vo_in = os.path.join(EP, "voiceover/master_narration.wav")
vo_out = f"{READY}/vo_master_-15LUFS.wav"
if not os.path.exists(vo_out):
    r = subprocess.run(["ffmpeg", "-hide_banner", "-nostats", "-i", vo_in, "-af", "loudnorm=I=-15:TP=-1:LRA=11:print_format=json", "-f", "null", "-"], capture_output=True, text=True)
    j = json.loads(r.stderr[r.stderr.rindex("{"):r.stderr.rindex("}") + 1])
    af = f"loudnorm=I=-15:TP=-1:LRA=11:measured_I={j['input_i']}:measured_TP={j['input_tp']}:measured_LRA={j['input_lra']}:measured_thresh={j['input_thresh']}:offset={j['target_offset']}:linear=true"
    run(["ffmpeg", "-y", "-loglevel", "error", "-i", vo_in, "-af", af, "-ar", "48000", "-ac", "1", vo_out])
    print("VO: measured %.1f LUFS, normalised to -15 LUFS" % float(j["input_i"]))
print("done. notes:")
for n in notes:
    print("  ", n)
