#!/usr/bin/env python3
"""
Asset containment check for CapCut drafts (all channels).

Every file a CapCut draft uses (stills, AI clips, Remotion renders, voiceover, music, sound effects,
overlays, fonts you added) must live INSIDE that episode's own folder, normally
videos/<episode>/assets/capcut_ready/. A draft that points at remotion/out, remotion/public, another
episode, a Downloads folder or anywhere else breaks on the next move or clean-up.

    python3 scripts/check_capcut_assets.py "<draft folder>" "<episode folder>"

Exit 0: every file the TIMELINE uses exists and is inside the episode folder, and nothing registered points outside it.
Exit 1: a used file is outside the folder or missing, or a registered file is outside the folder.
(Registered but unused files that were deleted after CapCut imported the folder show as offline entries: a note, not a failure.)
"""
import glob, json, os, sys

MEDIA = {".mp4", ".mov", ".m4v", ".wav", ".mp3", ".m4a", ".aac", ".png", ".jpg", ".jpeg", ".gif", ".webp", ".srt", ".ttf", ".otf"}
if len(sys.argv) != 3:
    sys.exit(__doc__)
draft = os.path.realpath(sys.argv[1])
episode = os.path.realpath(sys.argv[2])

# CapCut's own files (the draft folder itself and the app's caches/effects) are not the user's assets.
def is_app_path(p):
    rp = os.path.realpath(p)
    return rp.startswith(draft + os.sep) or "/CapCut/User Data/" in rp or "/Library/Containers/" in rp and "CapCut" in rp or "/Library/Application Support/CapCut" in rp

# 1. media the TIMELINE actually uses (segments -> materials): these must exist and be inside the episode folder.
# 2. media merely REGISTERED in the project (CapCut lists every file of an imported folder): outside is a failure,
#    missing is only a warning (files deleted after the import still show as offline entries in the media panel).
def used_paths(d):
    mats = {}
    for k in ("videos", "audios"):
        for m in d.get("materials", {}).get(k, []):
            if m.get("path"):
                mats[m["id"]] = m["path"]
    return {mats[s["material_id"]] for t in d.get("tracks", []) for s in t.get("segments", []) if s.get("material_id") in mats}

used = set()
for f in [draft + "/draft_content.json"] + glob.glob(draft + "/Timelines/*/draft_info.json"):
    if os.path.exists(f):
        used |= used_paths(json.load(open(f)))

found = {}
def walk(o, src):
    if isinstance(o, dict):
        for v in o.values():
            walk(v, src)
    elif isinstance(o, list):
        for v in o:
            walk(v, src)
    elif isinstance(o, str) and o.startswith("/") and os.path.splitext(o)[1].lower() in MEDIA:
        found.setdefault(o, set()).add(os.path.basename(src))

for f in glob.glob(draft + "/**/*.json", recursive=True):
    try:
        walk(json.load(open(f)), f)
    except Exception:
        pass

def inside_ep(p):
    return os.path.realpath(p).startswith(episode + os.sep)

fail = [p for p in sorted(used) if not is_app_path(p) and (not os.path.exists(p) or not inside_ep(p))]
reg = [p for p in sorted(found) if not is_app_path(p) and p not in used]
reg_outside = [p for p in reg if not inside_ep(p)]
reg_missing = [p for p in reg if inside_ep(p) and not os.path.exists(p)]

print("draft:  %s\nepisode: %s" % (draft, episode))
by = {}
for p in used:
    if inside_ep(p):
        k = "/".join(os.path.relpath(os.path.realpath(p), episode).split(os.sep)[:-1])
        by[k] = by.get(k, 0) + 1
print("used on the timeline: %d files | problems (outside the episode folder or missing): %d" % (len(used), len(fail)))
for k, v in sorted(by.items()):
    print("   %-40s %d" % (k, v))
print("also registered in the project (not on the timeline): %d | outside the episode folder: %d | offline (deleted after import): %d" % (len(reg), len(reg_outside), len(reg_missing)))
for p in fail:
    print("PROBLEM (used on the timeline):", p, "" if os.path.exists(p) else "[missing]")
for p in reg_outside:
    print("PROBLEM (registered, outside the episode folder):", p)
if reg_missing:
    print("note: %d offline entries are harmless; a clean rebuild and re-import removes them" % len(reg_missing))
sys.exit(1 if fail or reg_outside else 0)
