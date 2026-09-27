# Phase 10: Batch 3 — Remotion Specs — Episode 04: What If Humans Lived to 150?

> Generated from `07_BEAT_SHEET.md` + `voiceover/alignment.json`. Durations are exact; filenames match the beat numbers used in `12_CAPCUT_ASSEMBLY.md`.

> **Rules:** colours only from `remotion/src/tokens.ts` (light parchment ground, navy text; lavender = the Hypothetical accent; crimson only for loss) · big and few labels, never more than 4 on screen, no text overlapping text or a chart · no jargon on screen · frames = round(seconds × 30) · render a still of each and look at it (CP-14) · verify with `python3 check_remotion_theme.py remotion/src/scenes/episode04` · every spec includes: "use best graphic motions practises and guidelines from top performing graphics" and "follow best industry-standard guidelines and quality and visualisations".

**Built** in `remotion/src/scenes/episode04/` (registered as `Ep04-*` compositions). Test frames of every chart and scene component were rendered and checked. One reusable component with props covers each family (`LifeBar` alone covers 12 beats).

---

## Build table

| Beat | Time | Frames | Component | Props | What it shows | Labels (≤4) |
| :-: | :-: | :-: | :--- | :--- | :--- | :--- |
| 012 | `00:34.8` | 171 | `AgeingHourglasses` | `{}` | A row of 6 silhouettes of every age, each with a small hourglass; all the sand slows to a trickle together. | — |
| 014 | `00:44.4` | 77 | `LifeBar` | `{"preset": "man-40"}` | One life bar: 0 to 80 in navy, then extends in lavender to about 130. | 80, 130 |
| 020 | `01:03.0` | 67 | `SpreadsheetFlip` | `{"phase": "flip"}` | One highlighted cell ticks 80 → 150. | 80 → 150 |
| 021 | `01:05.2` | 65 | `SpreadsheetFlip` | `{"phase": "cascade"}` | Every cell beneath turns crimson in a fast downward cascade. | — |
| 023 | `01:11.5` | 123 | `QueueLoop` | `{"mode": "steady"}` | A line of simple figures; each time the one at the front walks through a door, everyone steps forward. Seamless loop. | — |
| 027 | `01:26.2` | 197 | `QueueLoop` | `{"mode": "fast"}` | Same queue, speeding up; small icons (house, briefcase, coin, crown) pop free at the front every cycle. | — |
| 029 | `01:35.1` | 91 | `QueueLoop` | `{"mode": "freeze"}` | The queue stops dead; the door stays shut; a faint vignette closes in. | — |
| 033 | `01:48.6` | 181 | `FamilyPhotoStack` | `{"phase": "grow", "years": [20, 40, 60]}` | A framed photo; every '20 years' tick adds a row and widens the frame. | +20 years |
| 034 | `01:54.6` | 189 | `FamilyPhotoStack` | `{"phase": "final", "years": [80, 100]}` | Rows keep stacking to five; hold on the full frame. | 5 rows |
| 039 | `02:16.8` | 156 | `PopulationCounter` | `{"from": 8, "to": 19.5}` | Big counter climbs from 8 to 19.5 billion, then the curve flattens. | 19.5 billion, then flat |
| 040 | `02:22.0` | 93 | `ChildrenPictogram` | `{}` | Eight figures; the child figures fade from two to one. | 1 in 4, 1 in 8 |
| 045 | `02:40.6` | 137 | `LifeBar` | `{"preset": "marriage"}` | Marriage bar from 30: the old end at 80 (50 years), stretching on to 150 (120 years). | 50 years, 120 years |
| 053 | `03:06.7` | 174 | `LifeBar` | `{"preset": "career-today"}` | Work 20→65, then retirement 65→80. | Work, 15 years off |
| 054 | `03:12.5` | 184 | `LifeBar` | `{"preset": "career-65"}` | Same bar, life now runs to 150: the retirement stretch floods crimson. | 85 years, no pay |
| 055 | `03:18.7` | 187 | `LifeBar` | `{"preset": "career-120"}` | The divider slides to 120; crimson shrinks to 30 years. | Retire at 120, 30 years |
| 068 | `04:04.6` | 148 | `SavingsGrowth` | `{}` | A small pot grows into a tall coin stack along a 150-year timeline. | 150 years |
| 070 | `04:12.6` | 173 | `PassbookRate` | `{"rates": ["5%", "4%", "3%", "2%"]}` | Passbook pages flip; the printed rate shrinks page by page. | rate |
| 073 | `04:24.8` | 146 | `CompareBars` | `{"preset": "mortgage-monthly"}` | Two nearly equal bars. | 30-year $1,799, 100-year $1,504 |
| 074 | `04:29.7` | 97 | `CompareBars` | `{"preset": "mortgage-interest"}` | Interest bars; the 100-year bar shoots up about 3.5× taller. | ~$350K, ~$1.2M |
| 080 | `04:49.8` | 95 | `LifeBar` | `{"preset": "inherit-50"}` | Parent and child bars, 30 years apart; handover marker at the child's 50. | Inherit at 50 |
| 081 | `04:52.9` | 109 | `LifeBar` | `{"preset": "parent-150"}` | The parent's bar stretches to 150. | 150 |
| 082 | `04:56.6` | 160 | `LifeBar` | `{"preset": "inherit-120"}` | Handover marker slides to 120. | Inherit at 120 |
| 083 | `05:01.9` | 247 | `InfiniteQueueTunnel` | `{"plate": "901_tunnel_corridor_plate.png"}` | SIGNATURE — ARCHETYPE_INFINITE_PORTAL_TUNNEL. Continuous forward zoom down the queue of heirs toward the front door, looping (75 frames per doorway). | — |
| 086 | `05:19.7` | 238 | `HomesFreedGrid` | `{}` | Two grids of houses; left lights up 1 in 45 per year, right only 1 in 115. | 1 in 45, 1 in 115 |
| 100 | `06:12.9` | 98 | `LifeBar` | `{"preset": "tenure-7"}` | A boss's time in the job: 7 years. | 7 years |
| 101 | `06:16.2` | 79 | `LifeBar` | `{"preset": "tenure-40"}` | The same bar stretches to 40 years. | 40 years |
| 102 | `06:18.9` | 82 | `SeatsGrid` | `{"phase": "build"}` | A 25 × 20 grid of 500 seats builds in. | 500 top jobs |
| 103 | `06:21.6` | 143 | `SeatsGrid` | `{"phase": "light"}` | About 71 seats light up (today), then only about 12. | ~70 a year, ~12 a year |
| 108 | `06:40.9` | 193 | `WhipZoomSeats` | `{"plates": ["910_montage", "911_montage", "912_montage", "913_montage", "914_montage", "915_montage", "916_montage", "917_montage", "918_montage", "919_montage"]}` | SIGNATURE — ARCHETYPE_WHIP_ZOOM_MONTAGE. 10 feeder plates at 5 frames each with 300° shutter blur, landing on the judge plate with a 90-frame slow push. | — |
| 121 | `07:35.1` | 85 | `KeyFlip` | `{"plate": "beat 120 still"}` | The 'old hand gripping a key' still rotates slowly upside down. | — |
| 125 | `07:51.4` | 189 | `TwinStacks` | `{}` | Two stacks rise in step: Mum's 'Never better!' cards and her children's rent receipts. | Her healthy years, Their rent |
| 130 | `08:13.4` | 128 | `LifeBar` | `{"preset": "old-age"}` | Two life bars; the 'old' segment is 15 years at the end of one, 37 years at the end of the other. | 15 years, 37 years |
| 132 | `08:21.9` | 177 | `CompareBars` | `{"preset": "crash"}` | A crash at 40: years lost then (40) vs now (110). | 40 years, 110 years |
| 144 | `09:18.7` | 181 | `LadderToQueue` | `{"phase": "climb"}` | A clean ladder; a small figure climbs toward the top. | — |
| 145 | `09:24.7` | 139 | `LadderToQueue` | `{"phase": "tip"}` | The ladder tips flat and becomes a queue of people; at the front, one door opens. Hold on stillness. | — |

---

## Render commands

Each graphic sits on the still just before it in the shot list (softened and dimmed). Until the stills exist, test with `"bg": null`.

```bash
# 1. Copy the generated stills (and the 11 feeder plates) into remotion/public/ep04/ first.
cd remotion
npx remotion render src/index.ts Ep04-AgeingHourglasses out/ep04/012_row_silhouettes_age_small.mp4 --props='{"frames": 171, "bg": "011_dawn_ordinary_suburban_town.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/014_timeline_bar_under_freeze.mp4 --props='{"preset": "man-40", "frames": 77, "bg": "013_man_blows_out_forty.png"}'
npx remotion render src/index.ts Ep04-SpreadsheetFlip out/ep04/020_shot.mp4 --props='{"phase": "flip", "frames": 67, "bg": "019_punch_monitor_cell_reading.png"}'
npx remotion render src/index.ts Ep04-SpreadsheetFlip out/ep04/021_red_cascades_cell_cell.mp4 --props='{"phase": "cascade", "frames": 65, "bg": "019_punch_monitor_cell_reading.png"}'
npx remotion render src/index.ts Ep04-QueueLoop out/ep04/023_queue_line_people_steps.mp4 --props='{"mode": "steady", "frames": 123, "bg": "022_hand_slowly_turning_pages.png"}'
npx remotion render src/index.ts Ep04-QueueLoop out/ep04/027_queue_loop_speeds_up.mp4 --props='{"mode": "fast", "frames": 197, "bg": "026_desk_nameplate_slid_out.png"}'
npx remotion render src/index.ts Ep04-QueueLoop out/ep04/029_queue_animation_freezes_door.mp4 --props='{"mode": "freeze", "frames": 91, "bg": "028_single_plain_door_front.png"}'
npx remotion render src/index.ts Ep04-FamilyPhotoStack out/ep04/033_photo_re_shot_twenty.mp4 --props='{"phase": "grow", "years": [20, 40, 60], "frames": 181, "bg": "032_punch_across_rows_grandparents.png"}'
npx remotion render src/index.ts Ep04-FamilyPhotoStack out/ep04/034_rows_keep_stacking_years.mp4 --props='{"phase": "final", "years": [80, 100], "frames": 189, "bg": "032_punch_across_rows_grandparents.png"}'
npx remotion render src/index.ts Ep04-PopulationCounter out/ep04/039_population_counter_climbs_point.mp4 --props='{"from": 8, "to": 19.5, "frames": 156, "bg": "037_punch_front_row_almost.png"}'
npx remotion render src/index.ts Ep04-ChildrenPictogram out/ep04/040_pictogram_eight_figures_child.mp4 --props='{"frames": 93, "bg": "037_punch_front_row_almost.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/045_bar_stretches_far_past.mp4 --props='{"preset": "marriage", "frames": 137, "bg": "044_golden_anniversary_cake_big.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/053_work_bar_then_short.mp4 --props='{"preset": "career-today", "frames": 174, "bg": "052_office_time_clock_queue.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/054_retirement_bar_floods_red.mp4 --props='{"preset": "career-65", "frames": 184, "bg": "052_office_time_clock_queue.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/055_divider_slides_right_red.mp4 --props='{"preset": "career-120", "frames": 187, "bg": "052_office_time_clock_queue.png"}'
npx remotion render src/index.ts Ep04-SavingsGrowth out/ep04/068_small_savings_pot_grows.mp4 --props='{"frames": 148, "bg": "067_coin_jar_labelled_someday.png"}'
npx remotion render src/index.ts Ep04-PassbookRate out/ep04/070_savings_passbook_pages_flip.mp4 --props='{"rates": ["5%", "4%", "3%", "2%"], "frames": 173, "bg": "067_coin_jar_labelled_someday.png"}'
npx remotion render src/index.ts Ep04-CompareBars out/ep04/073_two_nearly_equal_bars.mp4 --props='{"preset": "mortgage-monthly", "frames": 146, "bg": "072_punch_poster_small_print.png"}'
npx remotion render src/index.ts Ep04-CompareBars out/ep04/074_year_bar_shoots_up.mp4 --props='{"preset": "mortgage-interest", "frames": 97, "bg": "072_punch_poster_small_print.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/080_parent_child_life_bars.mp4 --props='{"preset": "inherit-50", "frames": 95, "bg": "079_house_key_ribbon_labelled.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/081_parent_bar_stretches.mp4 --props='{"preset": "parent-150", "frames": 109, "bg": "079_house_key_ribbon_labelled.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/082_handover_marker_slides.mp4 --props='{"preset": "inherit-120", "frames": 160, "bg": "079_house_key_ribbon_labelled.png"}'
npx remotion render src/index.ts Ep04-InfiniteQueueTunnel out/ep04/083_shot.mp4 --props='{"plate": "901_tunnel_corridor_plate.png", "frames": 247}'
npx remotion render src/index.ts Ep04-HomesFreedGrid out/ep04/086_two_grids_houses_far.mp4 --props='{"frames": 238, "bg": "085_close_ups_three_painted.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/100_tenure_bar.mp4 --props='{"preset": "tenure-7", "frames": 98, "bg": "099_close_up_dusty_brass.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/101_tenure_bar_stretches_years.mp4 --props='{"preset": "tenure-40", "frames": 79, "bg": "099_close_up_dusty_brass.png"}'
npx remotion render src/index.ts Ep04-SeatsGrid out/ep04/102_grid_seats_appears.mp4 --props='{"phase": "build", "frames": 82, "bg": "099_close_up_dusty_brass.png"}'
npx remotion render src/index.ts Ep04-SeatsGrid out/ep04/103_seats_light_up_many.mp4 --props='{"phase": "light", "frames": 143, "bg": "099_close_up_dusty_brass.png"}'
npx remotion render src/index.ts Ep04-WhipZoomSeats out/ep04/108_shot.mp4 --props='{"plates": ["910_montage", "911_montage", "912_montage", "913_montage", "914_montage", "915_montage", "916_montage", "917_montage", "918_montage", "919_montage"], "frames": 193}'
npx remotion render src/index.ts Ep04-KeyFlip out/ep04/121_key_image_slowly_rotates.mp4 --props='{"plate": "120_old_hand_gripping_house.png", "frames": 85}'
npx remotion render src/index.ts Ep04-TwinStacks out/ep04/125_shot.mp4 --props='{"frames": 189, "bg": "124_tall_stack_reply_cards.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/130_two_short_old_age.mp4 --props='{"preset": "old-age", "frames": 128, "bg": "129_knee_knee_brace_tiny.png"}'
npx remotion render src/index.ts Ep04-CompareBars out/ep04/132_shot.mp4 --props='{"preset": "crash", "frames": 177, "bg": "131_busy_road_night_headlight.png"}'
npx remotion render src/index.ts Ep04-LadderToQueue out/ep04/144_ladder_illustration_small_figure.mp4 --props='{"phase": "climb", "frames": 181, "bg": "142_brass_key_still_hanging.png"}'
npx remotion render src/index.ts Ep04-LadderToQueue out/ep04/145_ladder_tips_becomes_queue.mp4 --props='{"phase": "tip", "frames": 139, "bg": "142_brass_key_still_hanging.png"}'
# Hypothetical badge for CapCut Track 4 (transparent):
npx remotion render src/index.ts Ep04-HypotheticalBadge out/ep04/badge_hypothetical.mov --codec=prores --prores-profile=4444 --pixel-format=yuva444p10le --props='{"frames":120}'
```

**Totals:** 35 renders from 17 components (AgeingHourglasses, ChildrenPictogram, CompareBars, FamilyPhotoStack, HomesFreedGrid, InfiniteQueueTunnel, KeyFlip, LadderToQueue, LifeBar, PassbookRate, PopulationCounter, QueueLoop, SavingsGrowth, SeatsGrid, SpreadsheetFlip, TwinStacks, WhipZoomSeats). Signature sequences: beat 084 (tunnel, 247f ≥ 225f) and beat 109 (montage, 193f ≥ 10×5f + 90f hold). They land 99s apart.

**Quality clauses (apply to every component):** "use best graphic motions practises and guidelines from top performing graphics" · "follow best industry-standard guidelines and quality and visualisations".