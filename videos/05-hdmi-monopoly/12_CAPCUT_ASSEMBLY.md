# Phase 13: CapCut Timeline Assembly & NLE Master Blueprint — Episode 05

> Multi-track assembly guide. **Rules carried from earlier episodes:** put every file the draft references (stills, AI clips, Remotion renders, VO, music, foley) under **one folder**, `videos/05-hdmi-monopoly/assets/capcut_ready/`, and import that folder into CapCut once. **Never rebuild a draft while CapCut is open.** **No captions or text labels in the draft:** captions ship as a separate `13_CAPTIONS_EN.srt` for YouTube (built from the final alignment).
>
> **Zero gap frames:** beat *k* starts on the exact frame beat *k-1* ends. **Drift limit:** master VO 693.46 s vs the sum of beats 693.46 s (limit 0.5 s). All AI clips muted.

---

## 1. Multi-Track Timeline Architecture

- **Track 0 (Visual Master):** 144 beats: 76 stills with Ken Burns, 29 AI clips, 39 Remotion renders.
- **Track 1 (Voiceover):** `master_narration.wav` at 0.0 dB (-14 to -16 LUFS).
- **Track 2 (Foley & micro-SFX):** the cues in Phase 11, -24 to -28 dB.
- **Track 3 (Background bed):** M1 bed, looped, -34 dB base, with the swells, Math Mode, low-pass and silence drops from Phase 11.

## 2. Beat-by-Beat Assembly Guide

| Beat # | Timecode (Start - End) | Asset file | Transition in | Motion / keyframing | Notes |
| :---: | :---: | :--- | :--- | :--- | :--- |
| **010** | `00:00.0 - 00:04.9` | `010_cold_open_tilt.mp4` | Hard cut | native motion; play at 1.22x to fill 4.9s | muted |
| **020** | `00:04.9 - 00:15.3` | `020_plug_push.mp4` | Hard cut | native motion; play at 0.96x to fill 10.4s | muted |
| **030** | `00:15.3 - 00:22.4` | `030_factory_coin.mp4` | Hard cut | native motion; play at 1.12x to fill 7.1s | muted |
| **040** | `00:22.4 - 00:24.3` | `040_shopper_checkout.png` | Hard cut | wide to medium, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **050** | `00:24.3 - 00:26.8` | `050_receipt_printing.png` | Hard cut | punch-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **060** | `00:26.8 - 00:31.7` | `060_receipt_dots.mp4` | Hard cut | native motion |  |
| **070** | `00:31.7 - 00:34.5` | `070_padlocked_port.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **080** | `00:34.5 - 00:38.1` | `080_socket_vs_port.png` | Hard cut | static split with slight parallax (2.5D) |  |
| **090** | `00:38.1 - 00:43.6` | `090_calendar_23yrs.png` | Hard cut | slow tilt-up along the stack (2.5D) |  |
| **100** | `00:43.6 - 00:48.2` | `100_fee_flow_a.mp4` | Hard cut | native motion |  |
| **110** | `00:48.2 - 00:51.2` | `110_fee_flow_b.mp4` | Hard cut | native motion |  |
| **120** | `00:51.2 - 00:56.7` | `120_chain_pull.mp4` | Hard cut | native motion; play at 1.08x to fill 5.5s | muted |
| **130** | `00:56.7 - 00:58.8` | `130_coin_who.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **140** | `00:58.8 - 01:02.5` | `140_coin_small.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **150** | `01:02.5 - 01:05.6` | `150_year_2002.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **160** | `01:05.6 - 01:09.1` | `160_old_tv_knot.png` | Hard cut | wide, slow 2.5D parallax drift (2.5D) |  |
| **170** | `01:09.1 - 01:19.7` | `170_whipzoom_leads.mp4` | Hard cut | native motion |  |
| **180** | `01:19.7 - 01:23.1` | `180_switchboard.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **190** | `01:23.1 - 01:25.6` | `190_seven_tvs.png` | Hard cut | static wide, slow 2.5D parallax drift (2.5D) |  |
| **200** | `01:25.6 - 01:31.3` | `200_seven_names.mp4` | Hard cut | native motion |  |
| **210** | `01:31.3 - 01:40.5` | `210_table_build.mp4` | Hard cut | native motion; play at 1.09x to fill 9.2s | muted |
| **220** | `01:40.5 - 01:43.8` | `220_dvi_meets.png` | Hard cut | medium, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **230** | `01:43.8 - 01:47.5` | `230_ninth_dec.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **240** | `01:47.5 - 01:49.9` | `240_plug_named.png` | Hard cut | macro push-in (2.5D) |  |
| **250** | `01:49.9 - 01:53.8` | `250_clapper_reel.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **260** | `01:53.8 - 01:59.9` | `260_copies.mp4` | Hard cut | native motion; play at 0.99x to fill 6.1s | muted |
| **270** | `01:59.9 - 02:02.7` | `270_studio_gate.png` | Hard cut | wide, slow 2.5D parallax drift (2.5D) |  |
| **280** | `02:02.7 - 02:06.9` | `280_lock_on_plug.png` | Hard cut | macro push-in (2.5D) |  |
| **290** | `02:06.9 - 02:11.4` | `290_backers_studios.mp4` | Hard cut | native motion |  |
| **300** | `02:11.4 - 02:14.7` | `300_backers_cable.mp4` | Hard cut | native motion |  |
| **310** | `02:14.7 - 02:23.2` | `310_bouncer_badge.mp4` | Hard cut | native motion; play at 0.94x to fill 8.5s | muted |
| **320** | `02:23.2 - 02:32.5` | `320_box_meets_tv.mp4` | Hard cut | native motion; play at 1.08x to fill 9.2s | muted |
| **330** | `02:32.5 - 02:34.2` | `330_bouncer_wide.png` | Hard cut | wide, slow 2.5D parallax drift (2.5D) |  |
| **340** | `02:34.2 - 02:37.4` | `340_badge_reader.png` | Hard cut | punch-in (2.5D) |  |
| **350** | `02:37.4 - 02:39.3` | `350_coin_on_badge.png` | Hard cut | macro push-in (2.5D) |  |
| **360** | `02:39.3 - 02:44.1` | `360_key_fee.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **370** | `02:44.1 - 02:48.1` | `370_key_prices.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **380** | `02:48.1 - 02:52.3` | `380_lockpick.mp4` | Hard cut | native motion; play at 0.95x to fill 4.2s | muted |
| **390** | `02:52.3 - 02:56.3` | `390_laptop_key.png` | Hard cut | medium, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **400** | `02:56.3 - 03:00.0` | `400_fake_keys.png` | Hard cut | macro, slow drift (2.5D) |  |
| **410** | `03:00.0 - 03:04.7` | `410_legal_letter.png` | Hard cut | medium, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **420** | `03:04.7 - 03:11.0` | `420_envelope.mp4` | Hard cut | native motion; play at 0.96x to fill 6.2s | muted |
| **430** | `03:11.0 - 03:14.2` | `430_hdfury_box.png` | Hard cut | medium, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **440** | `03:14.2 - 03:17.1` | `440_strips_lock.png` | Hard cut | punch-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **450** | `03:17.1 - 03:20.4` | `450_summons.png` | Hard cut | low angle, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **460** | `03:20.4 - 03:24.9` | `460_quality_split.png` | Hard cut | static split (2.5D) |  |
| **470** | `03:24.9 - 03:26.9` | `470_calendar_5mo.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **480** | `03:26.9 - 03:28.6` | `480_cracked_lock.png` | Hard cut | macro push-in (2.5D) |  |
| **490** | `03:28.6 - 03:30.4` | `490_chain_holds.png` | Hard cut | slow pull-back (2.5D) |  |
| **500** | `03:30.4 - 03:33.6` | `500_chain_moving.png` | Hard cut | tracking, slow 2.5D parallax drift (2.5D) |  |
| **510** | `03:33.6 - 03:37.6` | `510_loop_intro.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **520** | `03:37.6 - 03:50.8` | `520_loop_flywheel.mp4` | Hard cut | native motion |  |
| **530** | `03:50.8 - 03:53.6` | `530_many_badges.png` | Hard cut | slow tilt-up, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **540** | `03:53.6 - 04:01.4` | `540_one_door.mp4` | Hard cut | native motion; play at 1.03x to fill 7.8s | muted |
| **550** | `04:01.4 - 04:04.2` | `550_no_ports_tv.png` | Hard cut | wide, slow 2.5D parallax drift (2.5D) |  |
| **560** | `04:04.2 - 04:08.4` | `560_viewer_blank.png` | Hard cut | medium, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **570** | `04:08.4 - 04:18.4` | `570_club_door.mp4` | Hard cut | native motion; play at 1.00x to fill 10.0s | muted |
| **580** | `04:18.4 - 04:20.2` | `580_price_board.png` | Hard cut | medium, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **590** | `04:20.2 - 04:22.1` | `590_contract_desk.png` | Hard cut | medium, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **600** | `04:22.1 - 04:26.2` | `600_annual_big.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **610** | `04:26.2 - 04:29.2` | `610_annual_small.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **620** | `04:29.2 - 04:36.5` | `620_per_device_15.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **630** | `04:36.5 - 04:44.6` | `630_per_device_tiers.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **640** | `04:44.6 - 04:49.3` | `640_toll_discount.png` | Hard cut | medium, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **650** | `04:49.3 - 04:54.8` | `650_logo_rules.mp4` | Hard cut | native motion | low-pass focus zoom |
| **660** | `04:54.8 - 04:57.4` | `660_coin_gumball.png` | Hard cut | macro push-in (2.5D) |  |
| **670** | `04:57.4 - 05:05.9` | `670_garage_maker.mp4` | Hard cut | native motion; play at 0.94x to fill 8.5s | muted |
| **680** | `05:05.9 - 05:08.8` | `680_small_yearly.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **690** | `05:08.8 - 05:13.2` | `690_small_per_tv.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **700** | `05:13.2 - 05:24.6` | `700_small_total.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **710** | `05:24.6 - 05:28.2` | `710_giant_setup.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **720** | `05:28.2 - 05:36.3` | `720_giant_total.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **730** | `05:36.3 - 05:42.3` | `730_forty_times.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **740** | `05:42.3 - 05:44.8` | `740_our_own_math.png` | Hard cut | punch-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **750** | `05:44.8 - 05:48.5` | `750_weight_on_small.png` | Hard cut | medium, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **760** | `05:48.5 - 05:51.7` | `760_five_ports.png` | Hard cut | medium, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **770** | `05:51.7 - 05:54.1` | `770_one_coin_once.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **780** | `05:54.1 - 05:56.0` | `780_patent_sheet.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **790** | `05:56.0 - 05:58.7` | `790_blueprint_close.png` | Hard cut | macro push-in (2.5D) |  |
| **800** | `05:58.7 - 06:01.1` | `800_viewer_shelf.png` | Hard cut | medium tracking, slow 2.5D parallax drift (2.5D) |  |
| **810** | `06:01.1 - 06:03.6` | `810_stamp_poised.png` | Hard cut | low angle, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **820** | `06:03.6 - 06:06.6` | `820_stamp_licensed.png` | Hard cut | slow push-in (2.5D) |  |
| **830** | `06:06.6 - 06:14.9` | `830_real_vs_fake.mp4` | Hard cut | native motion; play at 0.95x to fill 8.4s | muted |
| **840** | `06:14.9 - 06:17.8` | `840_coins_question.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **850** | `06:17.8 - 06:23.0` | `850_devices_2017.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **860** | `06:23.0 - 06:28.0` | `860_devices_times.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **870** | `06:28.0 - 06:32.6` | `870_growth_a.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **880** | `06:32.6 - 06:37.5` | `880_growth_b.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **890** | `06:37.5 - 06:39.6` | `890_world_of_tvs.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **900** | `06:39.6 - 06:42.3` | `900_two_each.png` | Hard cut | wide, slow 2.5D parallax drift (2.5D) |  |
| **910** | `06:42.3 - 06:52.1` | `910_range_total.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **920** | `06:52.1 - 06:56.8` | `920_coins_vs_tower.png` | Hard cut | wide, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **930** | `06:56.8 - 07:02.7` | `930_line_at_door.mp4` | Hard cut | native motion; play at 1.02x to fill 5.9s | muted |
| **940** | `07:02.7 - 07:12.9` | `940_displayport_rival.mp4` | Hard cut | native motion; play at 0.98x to fill 10.2s | muted |
| **950** | `07:12.9 - 07:14.9` | `950_tv_wall_shop.png` | Hard cut | wide, slow 2.5D parallax drift (2.5D) |  |
| **960** | `07:14.9 - 07:17.0` | `960_tvs_taken.png` | Hard cut | punch-in (2.5D) |  |
| **970** | `07:17.0 - 07:19.3` | `970_free_asterisk.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **980** | `07:19.3 - 07:26.5` | `980_dp_vs_hdmi.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **990** | `07:26.5 - 07:30.7` | `990_same_names.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **1000** | `07:30.7 - 07:33.3` | `1000_exit_toll.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **1010** | `07:33.3 - 07:40.8` | `1010_stamping_marks.mp4` | Hard cut | native motion; play at 1.07x to fill 7.5s | muted |
| **1020** | `07:40.8 - 07:45.8` | `1020_tradeshow_aisle.png` | Hard cut | medium, slow 2.5D parallax drift (2.5D) |  |
| **1030** | `07:45.8 - 07:54.4` | `1030_org_split.mp4` | Hard cut | native motion |  |
| **1040** | `07:54.4 - 08:00.4` | `1040_org_labels.mp4` | Hard cut | native motion |  |
| **1050** | `08:00.4 - 08:08.0` | `1050_version_22.mp4` | Hard cut | native motion; play at 1.05x to fill 7.6s | muted |
| **1060** | `08:08.0 - 08:11.1` | `1060_same_founders.png` | Hard cut | wide, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **1070** | `08:11.1 - 08:16.4` | `1070_name_plaque.mp4` | Hard cut | native motion; play at 1.14x to fill 5.3s | muted |
| **1080** | `08:16.4 - 08:18.2` | `1080_group_same.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **1090** | `08:18.2 - 08:20.7` | `1090_chip_board.png` | Hard cut | macro push-in (2.5D) |  |
| **1100** | `08:20.7 - 08:28.5` | `1100_chip_line.mp4` | Hard cut | native motion; play at 1.03x to fill 7.8s | muted |
| **1110** | `08:28.5 - 08:34.6` | `1110_who_owes.mp4` | Hard cut | native motion |  |
| **1120** | `08:34.6 - 08:43.8` | `1120_contract_calendar.mp4` | Hard cut | native motion; play at 1.09x to fill 9.2s | muted |
| **1130** | `08:43.8 - 08:50.7` | `1130_docket.mp4` | Hard cut | native motion | low-pass focus zoom |
| **1140** | `08:50.7 - 08:58.4` | `1140_gavel.mp4` | Hard cut | native motion; play at 1.05x to fill 7.6s | muted |
| **1150** | `08:58.4 - 09:03.7` | `1150_court_finding.mp4` | Hard cut | native motion | low-pass focus zoom |
| **1160** | `09:03.7 - 09:08.3` | `1160_chip_maker_pays.png` | Hard cut | medium, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **1170** | `09:08.3 - 09:13.4` | `1170_fourteen_million.mp4` | Hard cut | native motion |  |
| **1180** | `09:13.4 - 09:16.0` | `1180_signs_again.png` | Hard cut | punch-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **1190** | `09:16.0 - 09:24.7` | `1190_chip_vs_wall.mp4` | Hard cut | native motion; play at 0.93x to fill 8.6s | muted |
| **1200** | `09:24.7 - 09:27.1` | `1200_coin_at_wall.png` | Hard cut | low angle, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **1210** | `09:27.1 - 09:34.4` | `1210_wall_bricks.mp4` | Hard cut | native motion |  |
| **1220** | `09:34.4 - 09:42.5` | `1220_console_night.mp4` | Hard cut | native motion; play at 0.99x to fill 8.1s | muted |
| **1230** | `09:42.5 - 09:48.7` | `1230_test_lab.mp4` | Hard cut | native motion; play at 0.96x to fill 6.2s | muted |
| **1240** | `09:48.7 - 09:52.4` | `1240_sofa_forget.png` | Hard cut | wide, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **1250** | `09:52.4 - 09:56.7` | `1250_scales_plug.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **1260** | `09:56.7 - 10:03.2` | `1260_blueprints_glass.mp4` | Hard cut | native motion; play at 0.92x to fill 6.5s | muted |
| **1270** | `10:03.2 - 10:09.2` | `1270_rulebook_closes.mp4` | Hard cut | native motion; play at 1.01x to fill 5.9s | muted |
| **1280** | `10:09.2 - 10:16.2` | `1280_open_code.mp4` | Hard cut | native motion; play at 1.14x to fill 7.0s | muted |
| **1290** | `10:16.2 - 10:19.0` | `1290_open_lock.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **1300** | `10:19.0 - 10:28.8` | `1300_amd_quote_a.mp4` | Hard cut | native motion | low-pass focus zoom |
| **1310** | `10:28.8 - 10:37.6` | `1310_amd_quote_b.mp4` | Hard cut | native motion | low-pass focus zoom |
| **1320** | `10:37.6 - 10:44.0` | `1320_four_k_lost.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **1330** | `10:44.0 - 10:47.8` | `1330_four_k_ratio.mp4` | Hard cut | native motion | Math Mode -50 dB |
| **1340** | `10:47.8 - 10:49.8` | `1340_gamer_desk.png` | Hard cut | medium, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **1350** | `10:49.8 - 10:51.5` | `1350_swap_cable.png` | Hard cut | punch-in (2.5D) |  |
| **1360** | `10:51.5 - 10:53.6` | `1360_sticker_box.png` | Hard cut | medium, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **1370** | `10:53.6 - 11:02.3` | `1370_sticker_reveal.mp4` | Hard cut | native motion; play at 0.92x to fill 8.7s | muted |
| **1380** | `11:02.3 - 11:07.2` | `1380_spec_small_print.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **1390** | `11:07.2 - 11:10.6` | `1390_magnifier.png` | Hard cut | punch-in (2.5D) |  |
| **1400** | `11:10.6 - 11:12.9` | `1400_viewer_returns.png` | Hard cut | medium, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **1410** | `11:12.9 - 11:15.9` | `1410_plug_macro.png` | Hard cut | macro push-in (2.5D) |  |
| **1420** | `11:15.9 - 11:19.2` | `1420_wall_socket.png` | Hard cut | medium, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **1430** | `11:19.2 - 11:21.4` | `1430_contract_plug.png` | Hard cut | slow push-in, Ken Burns push-in 1.00x to 1.08x (2.5D) |  |
| **1440** | `11:21.4 - 11:33.5` | `1440_portal_tunnel.mp4` | Hard cut | native motion |  |

## 3. Final Export Specifications

- Resolution 1920x1080; 30.00 fps; H.264 / MP4 High Profile; ~20-25 Mbps; stereo AAC 48 kHz, 320 kbps.

## 4. Not built yet (needs the assets)

The draft is built by script only after the stills, clips and Remotion renders exist and are copied into `assets/capcut_ready/`. See `scripts/assemble_ep04_draft.mjs` for the pattern; an episode-05 version comes after the assets are generated.

