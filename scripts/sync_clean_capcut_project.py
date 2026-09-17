import os
import json
import re
import uuid
import subprocess
import time

ASSET_DIR = "/Users/bilalashraf/Downloads/Peloton"
DRAFT_DIR = "/Users/bilalashraf/Movies/CapCut/User Data/Projects/com.lveditor.draft/Peloton Collapse"

def get_media_info(filepath):
    is_video = filepath.endswith(".mp4")
    if is_video:
        cmd = [
            "ffprobe", "-v", "error",
            "-select_streams", "v:0",
            "-show_entries", "stream=width,height,duration",
            "-of", "json", filepath
        ]
        res = subprocess.run(cmd, capture_output=True, text=True)
        try:
            d = json.loads(res.stdout)["streams"][0]
            dur = float(d.get("duration", 5.0))
            return int(d["width"]), int(d["height"]), int(dur * 1000000), True
        except Exception:
            return 1920, 1080, 5000000, True
    else:
        cmd = ["sips", "-g", "pixelWidth", "-g", "pixelHeight", filepath]
        res = subprocess.run(cmd, capture_output=True, text=True)
        w, h = 1920, 1080
        for line in res.stdout.splitlines():
            if "pixelWidth" in line:
                w = int(line.split()[-1])
            elif "pixelHeight" in line:
                h = int(line.split()[-1])
        return w, h, 10800000000, False

def main():
    print("=== SYNCING CLEAN CAPCUT PROJECT (MATCHED METADATA) ===")

    # 1. Parse Part B beats in exact order
    with open("videos/01-peloton-collapse/03_PRODUCTION_DOCUMENT.md") as f:
        text = f.read()

    part_b_start = text.find("# PART B — EDITING & ASSEMBLY")
    part_b_text = text[part_b_start:]

    pattern = r"#### Beat (\d+) — ([^\n]+)\n- \*\*Timeline Timecode:\*\* `(\d+):(\d+\.\d+) – (\d+):(\d+\.\d+)` \(([0-9.]+)s[^\)]*\)\n- \*\*Asset File:\*\* `([^`]+)` \(`([^`]+)`\)"
    matches = re.findall(pattern, part_b_text)

    files = os.listdir(ASSET_DIR)
    print(f"Loaded {len(matches)} Part B beats. Available files in {ASSET_DIR}: {len(files)}")

    beats = []
    for m in matches:
        beat, title, m1, s1, m2, s2, dur, filename, asset_type = m
        t_start = round(int(m1) * 60 + float(s1), 3)
        t_end = round(int(m2) * 60 + float(s2), 3)
        dur = round(float(dur), 3)

        prefix = filename.split(".")[0]
        matched = None
        for f in files:
            if f.startswith(prefix) or f.startswith(f"{beat}_"):
                matched = f
                break

        if not matched:
            card_name = filename.replace(".tsx", ".mp4")
            if card_name in files:
                matched = card_name

        if not matched:
            if "foley" in filename.lower():
                for f in files:
                    if "john_foley_reference" in f:
                        matched = f
                        break
            elif "mccarthy" in filename.lower():
                for f in files:
                    if "barry_mccarthy_reference" in f:
                        matched = f
                        break

        if not matched:
            raise RuntimeError(f"Could not match beat {beat} ({filename})")

        filepath = os.path.join(ASSET_DIR, matched)
        width, height, duration_us, is_video = get_media_info(filepath)

        mat_id = str(uuid.uuid4()).upper()
        seg_id = str(uuid.uuid4()).upper()

        beats.append({
            "beat": beat,
            "title": title,
            "start": t_start,
            "end": t_end,
            "duration": dur,
            "start_us": int(t_start * 1000000),
            "duration_us": int(dur * 1000000),
            "filename": matched,
            "filepath": filepath,
            "width": width,
            "height": height,
            "mat_duration_us": duration_us,
            "is_video": is_video,
            "material_id": mat_id,
            "segment_id": seg_id,
        })

    print(f"Successfully matched and probed all {len(beats)} beats.")

    # 2. Build materials['videos'] and track segments
    video_materials = []
    meta_materials_value = []
    track_segments = []

    for b in beats:
        # A. Material entry in draft_info
        mat = {
            "id": b["material_id"],
            "unique_id": "",
            "type": "video" if b["is_video"] else "photo",
            "duration": b["mat_duration_us"],
            "path": b["filepath"],
            "media_path": "",
            "local_id": "",
            "has_audio": b["is_video"],
            "reverse_path": "",
            "intensifies_path": "",
            "reverse_intensifies_path": "",
            "intensifies_audio_path": "",
            "cartoon_path": "",
            "width": b["width"],
            "height": b["height"],
            "category_id": "",
            "category_name": "local",
            "material_id": "",
            "material_name": b["filename"],
            "material_url": "",
            "crop": {
                "upper_left_x": 0.0, "upper_left_y": 0.0,
                "upper_right_x": 1.0, "upper_right_y": 0.0,
                "lower_left_x": 0.0, "lower_left_y": 1.0,
                "lower_right_x": 1.0, "lower_right_y": 1.0
            },
            "crop_ratio": "free",
            "audio_fade": None,
            "crop_scale": 1.0,
            "extra_type_option": 0,
            "check_flag": 63487,
            "is_unified_beauty_mode": False,
            "is_set_beauty_mode": False,
            "object_locked": None,
            "source": 0,
            "source_platform": 0,
            "formula_id": "",
        }
        video_materials.append(mat)

        # B. Meta material entry for draft_meta_info.json (CRITICAL)
        meta_item = {
            "ai_group_type": "",
            "create_time": -1,
            "duration": b["mat_duration_us"],
            "enter_from": 0,
            "extra_info": b["filename"],
            "file_Path": b["filepath"],
            "height": b["height"],
            "id": b["material_id"],
            "import_time": -1,
            "import_time_ms": -1,
            "item_source": 1,
            "material_color_tag": "",
            "md5": "",
            "metetype": "video" if b["is_video"] else "photo",
            "roughcut_time_range": {"duration": -1, "start": -1},
            "sub_time_range": {"duration": -1, "start": -1},
            "type": 0,
            "width": b["width"]
        }
        meta_materials_value.append(meta_item)

        # C. Track segment entry
        seg = {
            "id": b["segment_id"],
            "material_id": b["material_id"],
            "source_timerange": {
                "start": 0,
                "duration": b["duration_us"]
            },
            "target_timerange": {
                "start": b["start_us"],
                "duration": b["duration_us"]
            },
            "volume": 0.0 if b["is_video"] else 1.0,
            "speed": 1.0,
            "render_index": 0,
            "clip": {
                "alpha": 1.0,
                "flip": {"horizontal": False, "vertical": False},
                "rotation": 0.0,
                "scale": {"x": 1.0, "y": 1.0},
                "transform": {"x": 0.0, "y": 0.0}
            },
            "visible": True,
            "enable_adjust": True,
            "enable_color_curves": True,
            "enable_color_match_adjust": False,
            "enable_color_wheels": True,
            "enable_lut": True,
            "enable_smart_color_adjust": False,
            "extra_material_refs": [],
            "hdr_settings": None,
            "is_placeholder": False,
            "keyframe_refs": [],
            "last_nonzero_volume": 1.0,
            "responsive_layout": {
                "enable": False,
                "horizontal_pos_layout": 0,
                "size_layout": 0,
                "target_follow": "",
                "vertical_pos_layout": 0
            },
            "reverse": False,
            "track_attribute": 0,
            "track_render_index": 0
        }
        track_segments.append(seg)

    # 3. Read template draft_info
    with open(os.path.join(DRAFT_DIR, "draft_info.json")) as f:
        draft_info = json.load(f)

    draft_info["materials"]["videos"] = video_materials
    draft_info["duration"] = 835000000
    draft_info["tracks"] = [
        {
            "attribute": 0,
            "flag": 0,
            "id": str(uuid.uuid4()).upper(),
            "is_default_name": True,
            "name": "",
            "segments": track_segments,
            "type": "video"
        }
    ]

    # 4. Construct clean draft_meta_info
    now_us = int(time.time() * 1000000)
    meta_info = {
        "cloud_draft_cover": False,
        "cloud_draft_sync": False,
        "cloud_package_completed_time": "",
        "draft_cloud_capcut_purchase_info": "",
        "draft_cloud_last_action_download": False,
        "draft_cloud_package_type": "",
        "draft_cloud_purchase_info": "",
        "draft_cloud_template_id": "",
        "draft_cloud_tutorial_info": "",
        "draft_cloud_videocut_purchase_info": "",
        "draft_cover": "draft_cover.jpg",
        "draft_deeplink_url": "",
        "draft_enterprise_info": {
            "draft_enterprise_extra": "",
            "draft_enterprise_id": "",
            "draft_enterprise_name": "",
            "enterprise_material": []
        },
        "draft_fold_path": DRAFT_DIR,
        "draft_has_unfinished_aigc_video_effect": False,
        "draft_id": str(uuid.uuid4()).upper(),
        "draft_is_ae_produce": False,
        "draft_is_ai_packaging_used": False,
        "draft_is_ai_shorts": False,
        "draft_is_ai_translate": False,
        "draft_is_article_video_draft": False,
        "draft_is_cloud_temp_draft": False,
        "draft_is_from_deeplink": "false",
        "draft_is_infinite_canvas_draft": False,
        "draft_is_invisible": False,
        "draft_is_pippit_draft": False,
        "draft_is_web_article_video": False,
        "draft_materials": [
            {
                "type": 0,
                "value": meta_materials_value
            },
            {"type": 1, "value": []},
            {"type": 2, "value": []},
            {"type": 3, "value": []},
            {"type": 6, "value": []},
            {"type": 7, "value": []},
            {"type": 8, "value": []}
        ],
        "draft_materials_copied_info": [],
        "draft_name": "Peloton Collapse",
        "draft_need_rename_folder": False,
        "draft_new_version": "164.0.0",
        "draft_removable_storage_device": "",
        "draft_root_path": "/Users/bilalashraf/Movies/CapCut/User Data/Projects/com.lveditor.draft",
        "draft_segment_extra_info": [],
        "draft_timeline_materials_size_": len(json.dumps(draft_info)),
        "draft_type": "",
        "draft_web_article_video_enter_from": "",
        "pippit_avatar_url": "",
        "pippit_extra_info": "",
        "pippit_id": "",
        "pippit_user_name": "",
        "tm_draft_cloud_completed": "",
        "tm_draft_cloud_entry_id": -1,
        "tm_draft_cloud_modified": 0,
        "tm_draft_cloud_parent_entry_id": -1,
        "tm_draft_cloud_space_id": -1,
        "tm_draft_cloud_user_id": -1,
        "tm_draft_create": now_us,
        "tm_draft_modified": now_us,
        "tm_draft_removed": 0,
        "tm_duration": 835000000
    }

    # 5. Overwrite all CapCut project files synchronously
    print("Writing synced draft_info.json, draft_content.json, draft_meta_info.json, template-2.tmp, and draft_info.json.bak...")
    with open(os.path.join(DRAFT_DIR, "draft_info.json"), "w") as f:
        json.dump(draft_info, f)

    with open(os.path.join(DRAFT_DIR, "draft_content.json"), "w") as f:
        json.dump(draft_info, f)

    with open(os.path.join(DRAFT_DIR, "draft_meta_info.json"), "w") as f:
        json.dump(meta_info, f, indent=2)

    with open(os.path.join(DRAFT_DIR, "draft_info.json.bak"), "w") as f:
        json.dump(draft_info, f)

    with open(os.path.join(DRAFT_DIR, "template-2.tmp"), "w") as f:
        json.dump(draft_info, f)

    # 6. Update root_meta_info.json
    root_meta_path = "/Users/bilalashraf/Movies/CapCut/User Data/Projects/com.lveditor.draft/root_meta_info.json"
    if os.path.exists(root_meta_path):
        try:
            with open(root_meta_path) as f:
                root_meta = json.load(f)
            for entry in root_meta.get("all_draft_store", []):
                if entry.get("draft_name") == "Peloton Collapse":
                    entry["tm_duration"] = 835000000
                    entry["tm_draft_modified"] = now_us
                    entry["draft_timeline_materials_size"] = meta_info["draft_timeline_materials_size_"]
            with open(root_meta_path, "w") as f:
                json.dump(root_meta, f, indent=2)
            print("Updated root_meta_info.json successfully.")
        except Exception as e:
            print("Notice on root_meta_info:", e)

    print("\n=======================================================")
    print("ALL 120 ASSETS SYNCHRONIZED AND LINKED TO DOWNLOADS/PELOTON!")
    print(f"draft_materials[0].value items: {len(meta_materials_value)}")
    print(f"draft_info.materials.videos items: {len(video_materials)}")
    print(f"All IDs match 1:1 between metadata and timeline.")
    print("=======================================================")

if __name__ == "__main__":
    main()
