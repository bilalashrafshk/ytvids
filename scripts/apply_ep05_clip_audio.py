#!/usr/bin/env python3
"""
Episode 05: set the volume of every AI-clip segment in the CapCut project from extras.json ("clips"),
without rebuilding the draft. Edits only the `volume` fields, in all three draft files CapCut keeps,
after backing each one up. Refuses to run while CapCut is open.

    python3 scripts/apply_ep05_clip_audio.py [draft folder]
"""
import glob, json, os, shutil, subprocess, sys, time

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
DRAFT = sys.argv[1] if len(sys.argv) > 1 else "/Users/bilalashraf/Movies/CapCut/User Data/Projects/com.lveditor.draft/Who Gets Paid Every Time You Plug In a TV - Rough Cut"
if subprocess.run(["pgrep", "-x", "CapCut"], capture_output=True).returncode == 0:
    sys.exit("CapCut is running. Quit it completely, then rerun.")
clips = json.load(open(os.path.join(ROOT, "videos/05-hdmi-monopoly/assets/capcut_ready/extras.json")))["clips"]

files = [DRAFT + "/draft_content.json", DRAFT + "/draft_info.json"] + glob.glob(DRAFT + "/Timelines/*/draft_info.json")
stamp = time.strftime("%Y%m%d-%H%M%S")
for p in files:
    if not os.path.exists(p):
        continue
    d = json.load(open(p))
    mats = {m["id"]: m for m in d["materials"].get("videos", [])}
    n = 0
    for t in d["tracks"]:
        if t["type"] != "video":
            continue
        for s in t["segments"]:
            name = os.path.basename(mats.get(s["material_id"], {}).get("path", ""))
            if name in clips:
                v = clips[name]["volume"]
                s["volume"] = v
                if v > 0:
                    s["last_nonzero_volume"] = v
                n += 1
    shutil.copy2(p, p + ".before-clip-audio-" + stamp)
    json.dump(d, open(p, "w"), ensure_ascii=False)
    print("%-62s %d clip segments set" % (os.path.relpath(p, DRAFT), n))
