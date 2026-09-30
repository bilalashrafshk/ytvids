#!/usr/bin/env python3
"""
Episode 05: prepare the inputs the Remotion graphics need, from the AI stills and clips in
videos/05-hdmi-monopoly/assets/AI Stills + Vids/.

  1. Feeder plates -> remotion/public/ep05/  (140_feeder_01..08.png, 2070_feeder_01.png as PNG;
     680_feeder_01..04.png as TRANSPARENT cutouts: background removed)
  2. Background fields (bible/15 "Background Field"): the neighbouring shot's still or clip frame,
     limited to shots with NO readable text, copied to remotion/public/ep05/bg/, and a map
     remotion/src/scenes/episode05/bg_map.json {compositionId: "bg/<file>.jpg"}.

Run with a Python that has Pillow, numpy and rembg (Anaconda has them):
    ~/opt/anaconda3/bin/python scripts/prepare_ep05_remotion_inputs.py
"""
import json, os, re, subprocess, sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
EPD = os.path.join(ROOT, "videos/05-hdmi-monopoly")
SRC = os.path.join(EPD, "assets/AI Stills + Vids")
PUB = os.path.join(ROOT, "remotion/public/ep05")
os.makedirs(PUB + "/bg", exist_ok=True)
from PIL import Image

REGEN = os.path.join(EPD, "assets/regenerated")
files = sorted(os.listdir(SRC))
def find(prefix):
    m = [f for f in files if f.startswith(prefix + "_")]
    return os.path.join(SRC, m[0]) if m else None

# ---------- 1. feeder plates
def plate(name):   # the 2x AI upscale wins when it exists
    up = os.path.join(EPD, "assets/upscaled", name)
    return up if os.path.exists(up) else find(name)
for i in range(1, 9):
    Image.open(plate("140_feeder_%02d.png" % i)).convert("RGB").save(f"{PUB}/140_feeder_{i:02d}.png")
Image.open(plate("2070_feeder_01.png")).convert("RGB").save(f"{PUB}/2070_feeder_01.png")

from rembg import remove, new_session
session = new_session("u2net")
for i in range(1, 5):
    im = Image.open(find("680_feeder_%02d.png" % i)).convert("RGB")
    out = remove(im, session=session)            # RGBA, background removed
    bbox = out.getbbox()
    out = out.crop(bbox) if bbox else out         # tight crop so the object fills its node
    out.save(f"{PUB}/680_feeder_{i:02d}.png")
    print("cutout", i, out.size)

# ---------- 2. background fields
# Shots with readable text (signs, labels, letters, numbers) must never sit behind a chart.
CLEAN_STILLS = {130, 140, 160, 190, 280, 330, 340, 430, 440, 450, 480, 490, 500, 510, 550, 560, 660, 750, 770,
                800, 810, 840, 890, 900, 920, 960, 1060, 1160, 1200, 1240, 1250, 1290, 1340, 1350, 1400, 1410, 1420}
CLEAN_CLIPS = {10, 20, 30, 120, 210, 260, 320, 380, 420, 540, 570, 670, 830, 930, 940, 1010, 1050, 1070, 1100,
               1140, 1190, 1220, 1230, 1260, 1270}
cands = {}
for f in files:
    m = re.match(r"^(\d+)_.*\.(png|mp4)_\d+\.(jpg|mp4)$", f)
    if not m:
        continue
    n = int(f.split("_")[0])
    if "feeder" in f or f.startswith("000_"):
        continue
    name = f.split("." + m.group(2) + "_")[0]
    if m.group(2) == "png" and n in CLEAN_STILLS:
        im = Image.open(os.path.join(SRC, f)).convert("RGB"); im.thumbnail((1920, 1080))
        im.save(f"{PUB}/bg/{name}.jpg", quality=88); cands[n] = f"bg/{name}.jpg"
    elif m.group(2) == "mp4" and n in CLEAN_CLIPS:
        out = f"{PUB}/bg/{name}.jpg"
        d = float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", os.path.join(SRC, f)], capture_output=True, text=True).stdout)
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-ss", str(d * 0.5), "-i", os.path.join(SRC, f), "-frames:v", "1", "-vf", "scale=1920:-2", "-q:v", "3", out], check=True)
        cands[n] = f"bg/{name}.jpg"

reg = json.load(open(os.path.join(ROOT, "remotion/src/scenes/episode05/beats.json")))
own_plates = {"Ep05WhipZoom", "Ep05Flywheel", "Ep05PortalTunnel"}
nums = sorted(cands)
bgmap = {}
for r in reg:
    if r["comp"] in own_plates:
        continue
    n = r["beat"]
    # nearest shot by beat number; prefer the previous shot on a tie; stay within 5 beats
    best = min(nums, key=lambda c: (abs(c - n) / 10.0, 0 if c < n else 1))
    if abs(best - n) <= 50:
        bgmap[r["id"]] = cands[best]
json.dump(bgmap, open(os.path.join(ROOT, "remotion/src/scenes/episode05/bg_map.json"), "w"), indent=1)
print("background fields:", len(bgmap), "of", len(reg) - 3, "graphics")
missing = [r["id"] for r in reg if r["comp"] not in own_plates and r["id"] not in bgmap]
print("flat parchment (no clean neighbour within 5 beats):", missing)
