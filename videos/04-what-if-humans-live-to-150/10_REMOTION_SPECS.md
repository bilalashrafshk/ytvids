# Phase 10: Batch 3 — Remotion Specs (v2) — Episode 04: What If Humans Lived to 150?

> Components live in `remotion/src/scenes/episode04/` (`Ep04-*`). Colours only from `remotion/src/tokens.ts`; big and few labels (≤4); no text over text or over a chart; frames = round(seconds × 30); render a still of each and look at it (CP-14); every render follows "use best graphic motions practises and guidelines from top performing graphics" and "follow best industry-standard guidelines and quality and visualisations".

> v2: beat numbers changed with the video-first shot list. Two v1 graphics are now done inside AI clips instead (the ageing hourglasses and the 40-year-old's life bar).

---

## Build table

| Beat | Time | Frames | Component | Props | What it shows |
| :-: | :-: | :-: | :--- | :--- | :--- |
| 011 | `01:03.0` | 67 | `SpreadsheetFlip` | `{"phase": "flip"}` | [DATA: one cell changes from 80 to 150] |
| 012 | `01:05.2` | 65 | `SpreadsheetFlip` | `{"phase": "cascade"}` | [DATA: the column below turns red] Red cascades cell by cell down the screen. |
| 014 | `01:11.5` | 123 | `QueueLoop` | `{"mode": "steady"}` | The queue: a line of people steps forward one place each time the person at the front walks out through a door. Loops. |
| 018 | `01:26.2` | 197 | `QueueLoop` | `{"mode": "fast"}` | The queue loop speeds up; house, briefcase, coin and crown shapes pop free at the front every few decades. |
| 020 | `01:35.1` | 91 | `QueueLoop` | `{"mode": "freeze"}` | The queue animation freezes. The door stays shut. Nobody moves. |
| 023 | `01:48.6` | 181 | `FamilyPhotoStack` | `{"phase": "grow", "years": [20, 40, 60]}` | The photo re-shot every twenty years; the frame widens as rows stack up: 20, 40, 60 years. |
| 024 | `01:54.6` | 189 | `FamilyPhotoStack` | `{"phase": "final", "years": [80, 100]}` | The rows keep stacking: 80, 100 years — five rows deep. |
| 027 | `02:16.8` | 156 | `PopulationCounter` | `{}` | [DATA: long run — ~19.5 billion people, then flat] Counter climbs to 19.5 billion and flattens. |
| 028 | `02:22.0` | 93 | `ChildrenPictogram` | `{}` | [DATA: under-20s 1 in 4 → 1 in 8] Eight figures; one child grows into an adult. |
| 032 | `02:40.6` | 137 | `LifeBar` | `{"preset": "marriage"}` | [DATA: marriage bar — 30 to 150, 120 years] The bar stretches far past the old 50-year mark. |
| 038 | `03:06.7` | 174 | `LifeBar` | `{"preset": "career-today"}` | [DATA: career timeline today — 20 → 65 → ~80] |
| 039 | `03:12.5` | 184 | `LifeBar` | `{"preset": "career-65"}` | [DATA: retire at 65 with life to 150 — 85 unpaid years] The retirement bar floods red. |
| 040 | `03:18.7` | 187 | `LifeBar` | `{"preset": "career-120"}` | [DATA: retirement age slides to ~120] Red shrinks to 30 years. |
| 050 | `04:04.6` | 148 | `SavingsGrowth` | `{}` | A small savings pot grows into a towering stack of coins over a century and a half. |
| 052 | `04:16.0` | 70 | `PassbookRate` | `{"rates": ["3%", "2%"]}` | Passbook rate shrinking: 3% → 2%. |
| 055 | `04:24.8` | 146 | `CompareBars` | `{"preset": "mortgage-monthly"}` | [DATA: monthly payment — $1,799 vs $1,504] |
| 056 | `04:29.7` | 97 | `CompareBars` | `{"preset": "mortgage-interest"}` | [DATA: total interest — ~$350K vs ~$1.2M] |
| 060 | `04:49.8` | 95 | `LifeBar` | `{"preset": "inherit-50"}` | [DATA: inherit at ~50 today] |
| 061 | `04:52.9` | 109 | `LifeBar` | `{"preset": "parent-150"}` | The parent's bar stretches to 150. |
| 062 | `04:56.6` | 160 | `LifeBar` | `{"preset": "inherit-120"}` | [DATA: inherit at ~120] The handover marker slides to 120. |
| 063 | `05:01.9` | 247 | `InfiniteQueueTunnel` | `{"plate": "901_tunnel_corridor_plate.png"}` | [REMOTION: ARCHETYPE_INFINITE_PORTAL_TUNNEL — endless queue of heirs outside one front door] |
| 065 | `05:19.7` | 238 | `HomesFreedGrid` | `{}` | [DATA: homes freed each year — 1 in 45 vs 1 in 115] |
| 073 | `06:12.9` | 98 | `LifeBar` | `{"preset": "tenure-7"}` | [DATA: boss tenure — ~7 years today] |
| 074 | `06:16.2` | 79 | `LifeBar` | `{"preset": "tenure-40"}` | The tenure bar stretches to 40 years. |
| 075 | `06:18.9` | 82 | `SeatsGrid` | `{"phase": "build"}` | A grid of 500 seats appears. |
| 076 | `06:21.6` | 143 | `SeatsGrid` | `{"phase": "light"}` | [DATA: top jobs opening each year — ~71 today vs ~12] |
| 079 | `06:40.9` | 193 | `WhipZoomSeats` | `{"plates": ["910_montage", "911_montage", "912_montage", "913_montage", "914_montage", "915_montage", "916_montage", "917_montage", "918_montage", "919_montage"]}` | [REMOTION: ARCHETYPE_WHIP_ZOOM_MONTAGE — a judge's bench, a professor's lectern, a council chair, each held by the same unchanging faces] |
| 089 | `07:35.1` | 85 | `KeyFlip` | `{"plate": "120_old_hand_gripping_house.png"}` | The key image slowly rotates upside down. |
| 093 | `07:51.4` | 189 | `TwinStacks` | `{}` | [DATA: two stacks rise in step — Mum's healthy years and her children's rent receipts] |
| 098 | `08:13.4` | 128 | `LifeBar` | `{"preset": "old-age"}` | [DATA: old age — ~15 years today vs ~37 years] |
| 100 | `08:21.9` | 177 | `CompareBars` | `{"preset": "crash"}` | [DATA: a crash at 40 — 40 years lost then, 110 years lost now] |
| 109 | `09:18.7` | 181 | `LadderToQueue` | `{"phase": "climb"}` | A ladder; a small figure climbs rung by rung toward the top. |
| 110 | `09:24.7` | 139 | `LadderToQueue` | `{"phase": "tip"}` | The ladder tips over and becomes a queue of people. At the front, one door opens. |

---

## Render commands

```bash
cd remotion
npx remotion render src/index.ts Ep04-SpreadsheetFlip out/ep04/011_shot.mp4 --props='{"phase": "flip", "frames": 67, "bg": "018_pension_company_office_clerk.png"}'
npx remotion render src/index.ts Ep04-SpreadsheetFlip out/ep04/012_red_cascades_cell_cell.mp4 --props='{"phase": "cascade", "frames": 65, "bg": "018_pension_company_office_clerk.png"}'
npx remotion render src/index.ts Ep04-QueueLoop out/ep04/014_queue_line_people_steps.mp4 --props='{"mode": "steady", "frames": 123, "bg": "022_hand_slowly_turning_pages.png"}'
npx remotion render src/index.ts Ep04-QueueLoop out/ep04/018_queue_loop_speeds_up.mp4 --props='{"mode": "fast", "frames": 197, "bg": "026_desk_nameplate_slid_out.png"}'
npx remotion render src/index.ts Ep04-QueueLoop out/ep04/020_queue_animation_freezes_door.mp4 --props='{"mode": "freeze", "frames": 91, "bg": "028_single_plain_door_front.png"}'
npx remotion render src/index.ts Ep04-FamilyPhotoStack out/ep04/023_photo_re_shot_twenty.mp4 --props='{"phase": "grow", "years": [20, 40, 60], "frames": 181, "bg": "031_classic_three_row_family.png"}'
npx remotion render src/index.ts Ep04-FamilyPhotoStack out/ep04/024_rows_keep_stacking_years.mp4 --props='{"phase": "final", "years": [80, 100], "frames": 189, "bg": "031_classic_three_row_family.png"}'
npx remotion render src/index.ts Ep04-PopulationCounter out/ep04/027_counter_climbs_billion_flattens.mp4 --props='{"frames": 156, "bg": "035_five_row_photo_everyone.png"}'
npx remotion render src/index.ts Ep04-ChildrenPictogram out/ep04/028_eight_figures_child_grows.mp4 --props='{"frames": 93, "bg": "035_five_row_photo_everyone.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/032_bar_stretches_far_past.mp4 --props='{"preset": "marriage", "frames": 137, "bg": "044_golden_anniversary_cake_big.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/038_shot.mp4 --props='{"preset": "career-today", "frames": 174, "bg": "052_office_time_clock_queue.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/039_retirement_bar_floods_red.mp4 --props='{"preset": "career-65", "frames": 184, "bg": "052_office_time_clock_queue.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/040_red_shrinks_years.mp4 --props='{"preset": "career-120", "frames": 187, "bg": "052_office_time_clock_queue.png"}'
npx remotion render src/index.ts Ep04-SavingsGrowth out/ep04/050_small_savings_pot_grows.mp4 --props='{"frames": 148, "bg": "066_young_couple_looking_up.png"}'
npx remotion render src/index.ts Ep04-PassbookRate out/ep04/052_passbook_rate_shrinking.mp4 --props='{"rates": ["3%", "2%"], "frames": 70, "bg": "066_young_couple_looking_up.png"}'
npx remotion render src/index.ts Ep04-CompareBars out/ep04/055_shot.mp4 --props='{"preset": "mortgage-monthly", "frames": 146, "bg": "072_punch_poster_small_print.png"}'
npx remotion render src/index.ts Ep04-CompareBars out/ep04/056_shot.mp4 --props='{"preset": "mortgage-interest", "frames": 97, "bg": "072_punch_poster_small_print.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/060_shot.mp4 --props='{"preset": "inherit-50", "frames": 95, "bg": "078_listing_stamped_sold_family.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/061_parent_bar_stretches.mp4 --props='{"preset": "parent-150", "frames": 109, "bg": "078_listing_stamped_sold_family.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/062_handover_marker_slides.mp4 --props='{"preset": "inherit-120", "frames": 160, "bg": "078_listing_stamped_sold_family.png"}'
npx remotion render src/index.ts Ep04-InfiniteQueueTunnel out/ep04/063_shot.mp4 --props='{"plate": "901_tunnel_corridor_plate.png", "frames": 247}'
npx remotion render src/index.ts Ep04-HomesFreedGrid out/ep04/065_shot.mp4 --props='{"frames": 238, "bg": "085_close_ups_three_painted.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/073_shot.mp4 --props='{"preset": "tenure-7", "frames": 98, "bg": "099_close_up_dusty_brass.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/074_tenure_bar_stretches_years.mp4 --props='{"preset": "tenure-40", "frames": 79, "bg": "099_close_up_dusty_brass.png"}'
npx remotion render src/index.ts Ep04-SeatsGrid out/ep04/075_grid_seats_appears.mp4 --props='{"phase": "build", "frames": 82, "bg": "099_close_up_dusty_brass.png"}'
npx remotion render src/index.ts Ep04-SeatsGrid out/ep04/076_shot.mp4 --props='{"phase": "light", "frames": 143, "bg": "099_close_up_dusty_brass.png"}'
npx remotion render src/index.ts Ep04-WhipZoomSeats out/ep04/079_shot.mp4 --props='{"plates": ["910_montage", "911_montage", "912_montage", "913_montage", "914_montage", "915_montage", "916_montage", "917_montage", "918_montage", "919_montage"], "frames": 193}'
npx remotion render src/index.ts Ep04-KeyFlip out/ep04/089_key_image_slowly_rotates.mp4 --props='{"frames": 85, "plate": "120_old_hand_gripping_house.png"}'
npx remotion render src/index.ts Ep04-TwinStacks out/ep04/093_shot.mp4 --props='{"frames": 189, "bg": "124_tall_stack_reply_cards.png"}'
npx remotion render src/index.ts Ep04-LifeBar out/ep04/098_shot.mp4 --props='{"preset": "old-age", "frames": 128, "bg": "129_knee_knee_brace_tiny.png"}'
npx remotion render src/index.ts Ep04-CompareBars out/ep04/100_shot.mp4 --props='{"preset": "crash", "frames": 177, "bg": "131_busy_road_night_headlight.png"}'
npx remotion render src/index.ts Ep04-LadderToQueue out/ep04/109_ladder_small_figure_climbs.mp4 --props='{"phase": "climb", "frames": 181, "bg": "142_brass_key_still_hanging.png"}'
npx remotion render src/index.ts Ep04-LadderToQueue out/ep04/110_ladder_tips_becomes_queue.mp4 --props='{"phase": "tip", "frames": 139, "bg": "142_brass_key_still_hanging.png"}'
# Hypothetical badge for CapCut Track 4 (transparent):
npx remotion render src/index.ts Ep04-HypotheticalBadge out/ep04/badge_hypothetical.mov --codec=prores --prores-profile=4444 --pixel-format=yuva444p10le --image-format=png --props='{"frames":120}'
```

**Totals:** 33 renders. Signature sequences: beat 063 (tunnel, 247f ≥ 225f) and beat 079 (montage, 193f ≥ 10×5f + 90f hold), 99s apart.
