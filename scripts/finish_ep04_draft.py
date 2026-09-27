#!/usr/bin/env python3
"""Episode 04 — finishing pass on the CapCut draft built by assemble_ep04_draft.mjs.

Adds, using CapCut's own formats:
  - captions (script wording, timed to the voice) and age labels, cloned from a native
    CapCut caption (assets/capcut_ready/caption_template.json, taken from the ColdCard draft)
  - soft fades on every background-music piece
Refuses to run while CapCut is open.
"""
import copy, json, os, subprocess, sys, uuid

DRAFT = "/Users/bilalashraf/Movies/CapCut/User Data/Projects/com.lveditor.draft/What If Humans Lived to 150 - Rough Cut"
READY = "/Users/bilalashraf/YT Videos/videos/04-what-if-humans-live-to-150/assets/capcut_ready"
if subprocess.run(["pgrep", "-x", "CapCut"], capture_output=True).returncode == 0:
    sys.exit("CapCut is running. Quit it completely, then rerun.")

X = json.load(open(f"{READY}/extras.json"))
T = json.load(open(f"{READY}/caption_template.json"))
FONT = json.loads(T["material"]["content"])["styles"][0]["font"]
def us(x): return int(round(x * 1e6))
def nid(): return str(uuid.uuid4()).upper()

def text_content(text, size):
    return json.dumps({"styles": [{"fill": {"content": {"render_type": "solid", "solid": {"alpha": 1, "color": [1, 1, 1]}}, "render_type": "solid"},
        "range": [0, len(text)], "strokes": [{"width": 0.09, "mode": 0, "content": {"render_type": "solid", "solid": {"color": [0, 0, 0]}}}],
        "useLetterColor": True, "size": size, "font": FONT}], "text": text}, ensure_ascii=False)

def text_track(items, y, size, kind, render_base):
    segs, mats = [], []
    for i, it in enumerate(items):
        m = copy.deepcopy(T["material"]); m["id"] = nid(); m["type"] = kind
        m["content"] = text_content(it["text"], size); m["font_size"] = size
        m["words"] = {"end_time": [], "start_time": [], "text": []}; m["recognize_task_id"] = ""; m["base_content"] = ""
        s = copy.deepcopy(T["segment"]); s["id"] = nid(); s["material_id"] = m["id"]
        s["target_timerange"] = {"start": us(it["start"]), "duration": us(it["duration"])}
        if "source_timerange" in s: s["source_timerange"] = None
        s["clip"]["transform"] = {"x": 0.0, "y": y}; s["render_index"] = render_base + i
        segs.append(s); mats.append(m)
    trk = copy.deepcopy(T["track"]); trk["id"] = nid(); trk["segments"] = segs
    return trk, mats

for name in ("draft_content.json", "draft_info.json"):
    p = f"{DRAFT}/{name}"
    if not os.path.exists(p): continue
    d = json.load(open(p)); mats = d["materials"]
    # fades on music pieces (matched in order of start time)
    music_ids = {a["id"] for a in mats["audios"] if "cinematic_meditation_loop" in a.get("path", "")}
    pieces = sorted(X["music"], key=lambda m: m["at"])
    segs = sorted([s for t in d["tracks"] if t["type"] == "audio" for s in t["segments"] if s["material_id"] in music_ids], key=lambda s: s["target_timerange"]["start"])
    assert len(segs) == len(pieces), (len(segs), len(pieces))
    # idempotent: drop fades from any earlier run before adding
    old = {f["id"] for f in mats.get("audio_fades", [])}
    for s0 in segs: s0["extra_material_refs"] = [r for r in s0["extra_material_refs"] if r not in old]
    mats["audio_fades"] = []
    for s, m in zip(segs, pieces):
        f = {"id": nid(), "type": "audio_fade", "fade_type": 0, "fade_in_duration": us(m["fade_in"]), "fade_out_duration": us(m["fade_out"])}
        mats["audio_fades"].append(f); s["extra_material_refs"].append(f["id"])
    # captions (bottom) and age labels (top)
    d["tracks"] = [t for t in d["tracks"] if t["type"] != "text"]
    mats["texts"] = []
    for items, y, size, kind, base in ((X["captions"], -0.72, 7.85, "subtitle", 14000), (X["labels"], 0.70, 11.0, "text", 15000)):
        trk, tm = text_track(items, y, size, kind, base)
        d["tracks"].append(trk); mats["texts"].extend(tm)
    json.dump(d, open(p, "w"), ensure_ascii=False)
    print(f"{name}: {len(segs)} music fades | {len(X['captions'])} captions | {len(X['labels'])} labels")
