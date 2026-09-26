# Phase 13: CapCut Timeline Assembly & NLE Master Blueprint
## Episode 03: Social Media Blackout for 30 Days

> **Instructions**: Standalone post-production deliverable. Multi-track timeline assembly guide (Tracks 0–3), transition rules, keyframed pans, and audio ducking envelopes.
>
> **MANDATORY POST-PRODUCTION RULES:**
> 1. **Zero Gap Frames:** Every visual cut snaps seamlessly to spoken downbeats without black frames or frame overlaps.
> 2. **Audio-Visual Reconciliation:** Master VO duration (569.0s) + End Card (5.0s) = 574.0s total timeline runtime. Drift: **0.0 seconds**.
> 3. **Muted AI Video Clips:** All 18 AI video clips have internal microphone audio muted completely (-inf dB).
> 4. **Signature Cinematics Deployed:** Features Beat 025 (Infinite Container Canyon Zoom Tunnel) and Beat 028 (Staccato Whip-Zoom Reverse Montage).

---

## 1. Multi-Track Timeline Architecture

```text
======================================================================
CAPCUT MULTI-TRACK TIMELINE ARCHITECTURE (1920×1080, 30.00 FPS)
----------------------------------------------------------------------
TRACK 0 (Visual Master)  : 133 Chronological Cuts (86 Stills, 18 AI Videos, 29 Remotion MP4s)
TRACK 1 (Dialogue Stems) : master_narration.wav (Normalized to -14.0 LUFS, 0.0 dB gain)
TRACK 2 (Sound Design)   : 32 Tactile Foley Drops (-18.0 dB to -28.0 dB per cue sheet)
TRACK 3 (Score Bed)      : 5 Calibrated BGM Suites (Base -34dB, Math Duck -52dB, Pause Swell +8dB)
======================================================================
STATUS: ALL GATES PASS (Exit Code 0)
```

---

## 2. Master Beat-by-Beat Assembly Guide (Beats 001 – 133)

| Beat # | Timecode (Start – End) | Asset Filename | Visual Type | Transition In | Motion / Keyframing | Audio & Foley Cues |
| :---: | :---: | :--- | :--- | :--- | :--- | :--- |
| **001** | `00:00.0 - 00:04.2` | `assets/stills/001_pier400_leaking_butter_containers.png` | Static Image | Hard Cut | 2.5D Ken Burns (Wide establishing shot, slow push-in (1.0x to 1.1x)) | `001_foley_harbor_sub_impact.wav` (-22.0 dB) |
| **002** | `00:04.2 - 00:07.0` | `assets/remotion/002_HypotheticalScenarioWatermark.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (remotion-bits) | BGM Bed Active (-34dB) |
| **003** | `00:07.0 - 00:11.2` | `assets/remotion/003_CountdownLedgerDrain.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (remotion-bits) | BGM Bed Active (-34dB) |
| **004** | `00:11.2 - 00:14.8` | `assets/stills/004_analog_desk_rotary_phone_courier_pouches.png` | Static Image | Hard Cut | 2.5D Ken Burns (Medium tabletop shot, slow subtle lateral drift) | `004_foley_rotary_dial_clack.wav` (-24.0 dB) |
| **005** | `00:14.8 - 00:20.5` | `assets/remotion/005_DemurrageAccumulationCurve.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (newsroom-chart-animations) | BGM Math Duck (-52dB) |
| **006** | `00:20.5 - 00:23.5` | `assets/stills/006_rusted_harbor_clock_frozen.png` | Static Image | Hard Cut | 2.5D Ken Burns (Extreme close-up, slow push-in) | `006_foley_metal_clock_tick.wav` (-26.0 dB) |
| **007** | `00:23.5 - 00:28.0` | `assets/remotion/007_Pier400AerialFlyoverMap.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (3d-flyover) | BGM Bed Active (-34dB) |
| **008** | `00:28.0 - 00:31.5` | `assets/videos/008_operator_wiping_sweat_pier_400.mp4` | AI Video Clip | Hard Cut | Native 30fps Video Motion (Muted -inf dB) | BGM Bed Active (-34dB) |
| **009** | `00:31.5 - 00:35.0` | `assets/stills/009_container_yard_heat_shimmer_low_angle.png` | Static Image | Hard Cut | 2.5D Ken Burns (Low-angle shot across container rows, slow lateral pan) | BGM Bed Active (-34dB) |
| **010** | `00:35.0 - 00:39.0` | `assets/stills/010_macro_melted_butter_crane_tracks.png` | Static Image | Hard Cut | 2.5D Ken Burns (Downward-angled close-up, slow creeping tilt down) | `010_foley_liquid_fat_trickle.wav` (-28.0 dB) |
| **011** | `00:39.0 - 00:43.2` | `assets/stills/011_aluminum_clipboard_reefer_power_tariff.png` | Static Image | Hard Cut | 2.5D Ken Burns (Medium close-up on clipboard held by worker) | BGM Bed Active (-34dB) |
| **012** | `00:43.2 - 00:47.0` | `assets/stills/012_abandoned_glendale_dairy_desk.png` | Static Image | Hard Cut | 2.5D Ken Burns (Atmospheric medium shot, dim shadows) | BGM Bed Active (-34dB) |
| **013** | `00:47.0 - 00:51.2` | `assets/stills/013_locked_shipping_portal_expired_token.png` | Static Image | Hard Cut | 2.5D Ken Burns (Screen punch-in with subtle CRT scanline effect) | BGM Bed Active (-34dB) |
| **014** | `00:51.2 - 00:55.5` | `assets/stills/014_showable_demurrage_ticket_container_latch.png` | Static Image | Hard Cut | 2.5D Ken Burns (Tight macro focus on red stamped ink) | `014_foley_paper_ticket_flap.wav` (-25.0 dB) |
| **015** | `00:55.5 - 00:59.8` | `assets/remotion/015_CalendarDemurrageStomp.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (remotion-bits) | `015_foley_rubber_stamp_thud.wav` (-20.0 dB) |
| **016** | `00:59.8 - 01:03.0` | `assets/stills/016_operator_grim_looking_at_clipboard.png` | Static Image | Hard Cut | 2.5D Ken Burns (Medium profile shot, slow push-in) | BGM Bed Active (-34dB) |
| **017** | `01:03.0 - 01:07.5` | `assets/stills/017_terminal_gate_guard_at_booth.png` | Static Image | Hard Cut | 2.5D Ken Burns (Eye-level establishing shot, warm sunlight) | BGM Bed Active (-34dB) |
| **018** | `01:07.5 - 01:12.0` | `assets/stills/018_guard_thermos_and_mechanical_seiko.png` | Static Image | Hard Cut | 2.5D Ken Burns (Medium character portrait, slow pan) | `018_foley_thermos_twist_click.wav` (-26.0 dB) |
| **019** | `01:12.0 - 01:16.2` | `assets/stills/019_guard_pointing_at_frozen_ipad.png` | Static Image | Hard Cut | 2.5D Ken Burns (Over-the-shoulder framing, crisp linework) | BGM Bed Active (-34dB) |
| **020** | `01:16.2 - 01:20.5` | `assets/videos/020_ipad_infinite_loading_spinner.mp4` | AI Video Clip | Hard Cut | Native 30fps Video Motion (Muted -inf dB) | BGM Bed Active (-34dB) |
| **021** | `01:20.5 - 01:24.8` | `assets/stills/021_pivotal_sign_in_with_google_spinning_wheel.png` | Static Image | Hard Cut | 2.5D Ken Burns (Center-weighted dramatic punch-in, high contrast) | `021_foley_digital_glitch_tone.wav` (-28.0 dB) |
| **022** | `01:24.8 - 01:28.0` | `assets/stills/022_terminal_gate_arm_bolted_shut.png` | Static Image | Hard Cut | 2.5D Ken Burns (Low-angle static hold, imposing concrete barriers) | `022_foley_gate_arm_impact.wav` (-22.0 dB) |
| **023** | `01:28.0 - 01:32.0` | `assets/stills/023_painted_plywood_no_manual_dock_receipts.png` | Static Image | Hard Cut | 2.5D Ken Burns (Flat frontal composition, stark documentary framing) | BGM Bed Active (-34dB) |
| **024** | `01:32.0 - 01:36.5` | `assets/remotion/024_ContainerGridlockMetric3D.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (newsroom-chart-animations) | BGM Math Duck (-52dB) |
| **025** | `01:36.5 - 01:40.5` | `assets/remotion/025_InfiniteContainerZoomTunnel.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (cinematic) | BGM Bed Active (-34dB) |
| **026** | `01:40.5 - 01:44.2` | `assets/videos/026_aerial_drone_sweep_paralyzed_port.mp4` | AI Video Clip | Hard Cut | Native 30fps Video Motion (Muted -inf dB) | BGM Bed Active (-34dB) |
| **027** | `01:44.2 - 01:48.0` | `assets/stills/027_silhouette_dock_worker_burning_sky.png` | Static Image | Hard Cut | 2.5D Ken Burns (Striking graphic silhouette, bold rim lighting) | BGM Bed Active (-34dB) |
| **028** | `01:48.0 - 01:52.5` | `assets/remotion/028_TimeRewindWhipMontage.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (cinematic) | `028_foley_tape_rewind_whir.wav` (-23.0 dB) |
| **029** | `01:52.5 - 01:57.0` | `assets/stills/029_operator_dispatch_desk_long_beach.png` | Static Image | Hard Cut | 2.5D Ken Burns (Medium wide interior, morning light streaming through windows) | BGM Bed Active (-34dB) |
| **030** | `01:57.0 - 02:01.5` | `assets/videos/030_fpv_drone_glide_warehouse_aisles.mp4` | AI Video Clip | Hard Cut | Native 30fps Video Motion (Muted -inf dB) | BGM Bed Active (-34dB) |
| **031** | `02:01.5 - 02:05.5` | `assets/stills/031_towering_warehouse_pallets_high_trusses.png` | Static Image | Hard Cut | 2.5D Ken Burns (Upward tilted wide angle, industrial scale) | BGM Bed Active (-34dB) |
| **032** | `02:05.5 - 02:09.5` | `assets/stills/032_consumer_product_boxes_vignette.png` | Static Image | Hard Cut | 2.5D Ken Burns (Clean product vignette, soft studio cel-shading) | BGM Bed Active (-34dB) |
| **033** | `02:09.5 - 02:14.0` | `assets/videos/033_bustling_warehouse_floor_forklifts_motion.mp4` | AI Video Clip | Hard Cut | Native 30fps Video Motion (Muted -inf dB) | `033_foley_tape_gun_rip.wav` (-22.0 dB) |
| **034** | `02:14.0 - 02:18.2` | `assets/stills/034_loading_dock_bay_doors_delivery_vans.png` | Static Image | Hard Cut | 2.5D Ken Burns (Wide exterior loading dock shot, brisk daylight) | BGM Bed Active (-34dB) |
| **035** | `02:18.2 - 02:22.0` | `assets/remotion/035_GlobalFeedBlackoutMap.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (map-explainer) | BGM Bed Active (-34dB) |
| **036** | `02:22.0 - 02:26.0` | `assets/stills/036_operator_reaching_for_silent_landline.png` | Static Image | Hard Cut | 2.5D Ken Burns (Close-up profile shot, subtle slow push-in) | `036_foley_dead_phone_receiver.wav` (-24.0 dB) |
| **037** | `02:26.0 - 02:30.2` | `assets/stills/037_packing_conveyor_halted_half_taped_boxes.png` | Static Image | Hard Cut | 2.5D Ken Burns (High-angle stationary view over dead conveyor) | BGM Bed Active (-34dB) |
| **038** | `02:30.2 - 02:34.5` | `assets/remotion/038_DailyDispatchWaterfall.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (newsroom-chart-animations) | `038_foley_waterfall_bar_snap.wav` (-24.0 dB) |
| **039** | `02:34.5 - 02:38.5` | `assets/stills/039_splitscreen_operator_ca_founder_ny.png` | Static Image | Hard Cut | 2.5D Ken Burns (Clean graphic split-screen, vector styling) | BGM Bed Active (-34dB) |
| **040** | `02:38.5 - 02:43.0` | `assets/stills/040_manhattan_skincare_quiet_shipping_desk.png` | Static Image | Hard Cut | 2.5D Ken Burns (Medium shot of quiet boutique office) | BGM Bed Active (-34dB) |
| **041** | `02:43.0 - 02:47.2` | `assets/stills/041_stressed_founder_pacing_whiteboard.png` | Static Image | Hard Cut | 2.5D Ken Burns (Medium character shot, stressed body language) | BGM Bed Active (-34dB) |
| **042** | `02:47.2 - 02:51.5` | `assets/stills/042_laptop_functional_shopify_zero_visitors.png` | Static Image | Hard Cut | 2.5D Ken Burns (Screen inset illustration, crisp UI graphics) | BGM Bed Active (-34dB) |
| **043** | `02:51.5 - 02:56.0` | `assets/remotion/043_AdAuctionBlackoutGraphic.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (remotion-bits) | BGM Bed Active (-34dB) |
| **044** | `02:56.0 - 03:00.5` | `assets/videos/044_macro_hand_pulling_glass_serum_bottle.mp4` | AI Video Clip | Hard Cut | Native 30fps Video Motion (Muted -inf dB) | `044_foley_glass_bottle_clink.wav` (-26.0 dB) |
| **045** | `03:00.5 - 03:04.8` | `assets/stills/045_showable_skincare_unit_cost_card.png` | Static Image | Hard Cut | 2.5D Ken Burns (Crisp product spotlight with clean text tags) | BGM Bed Active (-34dB) |
| **046** | `03:04.8 - 03:09.5` | `assets/remotion/046_SerumUnitCostStack.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (newsroom-chart-animations) | BGM Bed Active (-34dB) |
| **047** | `03:09.5 - 03:15.5` | `assets/remotion/047_PaidAdAcquisitionImpact.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (newsroom-chart-animations) | `047_foley_ad_click_hammer_slam.wav` (-18.0 dB) |
| **048** | `03:15.5 - 03:19.5` | `assets/stills/048_operator_eyes_widening_realization.png` | Static Image | Hard Cut | 2.5D Ken Burns (Dramatic close-up portrait, high-contrast cel-shading) | BGM Bed Active (-34dB) |
| **049** | `03:19.5 - 03:24.0` | `assets/stills/049_skincare_bottle_isolated_on_giant_rack.png` | Static Image | Hard Cut | 2.5D Ken Burns (Low-angle wide composition, stark lighting) | BGM Bed Active (-34dB) |
| **050** | `03:24.0 - 03:28.5` | `assets/stills/050_warehouse_rack_yellow_hazardous_tag.png` | Static Image | Hard Cut | 2.5D Ken Burns (Atmospheric macro shot, gritty industrial tone) | BGM Bed Active (-34dB) |
| **051** | `03:28.5 - 03:34.0` | `assets/remotion/051_Day07LedgerCheckpoint.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (newsroom-chart-animations) | BGM Math Duck (-52dB) |
| **052** | `03:34.0 - 03:40.0` | `assets/remotion/052_FrozenWorkingCapitalCascade.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (newsroom-chart-animations) | BGM Bed Active (-34dB) |
| **053** | `03:40.0 - 03:43.5` | `assets/stills/053_empty_boardroom_table_coffee_cups.png` | Static Image | Hard Cut | 2.5D Ken Burns (Wide overhead shot, cinematic stillness) | BGM Bed Active (-34dB) |
| **054** | `03:43.5 - 03:48.0` | `assets/stills/054_founder_handing_cash_envelopes_courier.png` | Static Image | Hard Cut | 2.5D Ken Burns (Medium two-shot inside boutique office lobby) | `054_foley_manila_envelopes_thwack.wav` (-24.0 dB) |
| **055** | `03:48.0 - 03:52.2` | `assets/stills/055_showable_cash_delivery_envelope.png` | Static Image | Hard Cut | 2.5D Ken Burns (Macro close-up on envelope, crisp vector line) | BGM Bed Active (-34dB) |
| **056** | `03:52.2 - 03:57.0` | `assets/videos/056_courier_pedaling_midtown_rain_traffic.mp4` | AI Video Clip | Hard Cut | Native 30fps Video Motion (Muted -inf dB) | `056_foley_bike_rain_spray.wav` (-22.0 dB) |
| **057** | `03:57.0 - 04:01.0` | `assets/videos/057_courier_running_stairs_ringing_doorbell.mp4` | AI Video Clip | Hard Cut | Native 30fps Video Motion (Muted -inf dB) | BGM Bed Active (-34dB) |
| **058** | `04:01.0 - 04:05.0` | `assets/stills/058_startup_founders_high_fiving_glass_room.png` | Static Image | Hard Cut | 2.5D Ken Burns (Ironic medium shot, bright corporate palette) | BGM Bed Active (-34dB) |
| **059** | `04:05.0 - 04:09.5` | `assets/remotion/059_CourierCashDepletionMeter.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (remotion-bits) | BGM Bed Active (-34dB) |
| **060** | `04:09.5 - 04:14.0` | `assets/remotion/060_GlobalCashDisruptionMap.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (map-explainer) | BGM Bed Active (-34dB) |
| **061** | `04:14.0 - 04:18.5` | `assets/videos/061_wholesale_egg_merchant_truck_roof_megaphone.mp4` | AI Video Clip | Hard Cut | Native 30fps Video Motion (Muted -inf dB) | `061_foley_megaphone_feedback_chirp.wav` (-22.0 dB) |
| **062** | `04:18.5 - 04:23.0` | `assets/stills/062_merchant_screaming_bank_codes_megaphone.png` | Static Image | Hard Cut | 2.5D Ken Burns (Expressive character portrait, energetic linework) | BGM Bed Active (-34dB) |
| **063** | `04:23.0 - 04:27.0` | `assets/stills/063_smartphone_whatsapp_business_disabled.png` | Static Image | Hard Cut | 2.5D Ken Burns (Macro screen inset, cracked glass texture) | BGM Bed Active (-34dB) |
| **064** | `04:27.0 - 04:31.5` | `assets/stills/064_truck_drivers_refusing_unload_eggs.png` | Static Image | Hard Cut | 2.5D Ken Burns (Medium wide shot, determined worker postures) | BGM Bed Active (-34dB) |
| **065** | `04:31.5 - 04:36.0` | `assets/stills/065_abandoned_wooden_egg_crates_dirt_shoulder.png` | Static Image | Hard Cut | 2.5D Ken Burns (Wide angle landscape, slow lateral pan, heat haze) | BGM Bed Active (-34dB) |
| **066** | `04:36.0 - 04:40.0` | `assets/stills/066_operator_office_safe_thin_checkbook.png` | Static Image | Hard Cut | 2.5D Ken Burns (Medium close-up, dramatic side lighting) | BGM Bed Active (-34dB) |
| **067** | `04:40.0 - 04:44.5` | `assets/videos/067_pickup_driving_through_fog_california_st.mp4` | AI Video Clip | Hard Cut | Native 30fps Video Motion (Muted -inf dB) | BGM Bed Active (-34dB) |
| **068** | `04:44.5 - 04:48.5` | `assets/stills/068_grand_bank_lobby_heavy_glass_doors.png` | Static Image | Hard Cut | 2.5D Ken Burns (Point-of-view entrance framing, slow push-in) | BGM Bed Active (-34dB) |
| **069** | `04:48.5 - 04:53.0` | `assets/stills/069_showable_bank_floor_green_painter_tape.png` | Static Image | Hard Cut | 2.5D Ken Burns (Wide eye-level perspective, dramatic architectural scale) | `069_foley_painter_tape_rip.wav` (-25.0 dB) |
| **070** | `04:53.0 - 04:57.2` | `assets/stills/070_long_line_sixty_business_owners_marble_pillars.png` | Static Image | Hard Cut | 2.5D Ken Burns (Deep perspective down queue, tired expressions) | BGM Bed Active (-34dB) |
| **071** | `04:57.2 - 05:01.0` | `assets/stills/071_operator_in_bank_queue_checking_wristwatch.png` | Static Image | Hard Cut | 2.5D Ken Burns (Medium shot, waiting posture) | BGM Bed Active (-34dB) |
| **072** | `05:01.0 - 05:05.5` | `assets/stills/072_startup_founder_cardboard_box_invoices.png` | Static Image | Hard Cut | 2.5D Ken Burns (Medium character vignette, disheveled appearance) | BGM Bed Active (-34dB) |
| **073** | `05:05.5 - 05:10.0` | `assets/stills/073_bank_teller_terminal_auth_failure.png` | Static Image | Hard Cut | 2.5D Ken Burns (Close-up on computer display with warning icon) | BGM Bed Active (-34dB) |
| **074** | `05:10.0 - 05:14.5` | `assets/stills/074_cashiers_check_signed_wet_blue_ink.png` | Static Image | Hard Cut | 2.5D Ken Burns (Tight macro overhead shot of pen tip on paper) | `074_foley_fountain_pen_scratch.wav` (-26.0 dB) |
| **075** | `05:14.5 - 05:18.5` | `assets/stills/075_operator_sliding_id_across_mahogany_counter.png` | Static Image | Hard Cut | 2.5D Ken Burns (First-person point-of-view, crisp focus) | BGM Bed Active (-34dB) |
| **076** | `05:18.5 - 05:23.0` | `assets/videos/076_bank_teller_whispering_behind_window.mp4` | AI Video Clip | Hard Cut | Native 30fps Video Motion (Muted -inf dB) | BGM Bed Active (-34dB) |
| **077** | `05:23.0 - 05:27.5` | `assets/stills/077_bank_backoffice_clerks_copper_telephones.png` | Static Image | Hard Cut | 2.5D Ken Burns (Atmospheric documentary shot, warm interior palette) | BGM Bed Active (-34dB) |
| **078** | `05:27.5 - 05:31.5` | `assets/stills/078_operator_white_knuckles_counter_edge.png` | Static Image | Hard Cut | 2.5D Ken Burns (Tight macro detail, tactile emotional stress) | `078_foley_wood_counter_creak.wav` (-27.0 dB) |
| **079** | `05:31.5 - 05:36.0` | `assets/remotion/079_WireSettlementDelayCurve.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (newsroom-chart-animations) | BGM Math Duck (-52dB) |
| **080** | `05:36.0 - 05:40.0` | `assets/remotion/080_Day16LedgerCheckpoint.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (newsroom-chart-animations) | BGM Math Duck (-52dB) |
| **081** | `05:40.0 - 05:44.2` | `assets/stills/081_commercial_contract_binder_torn_open_highlighter.png` | Static Image | Hard Cut | 2.5D Ken Burns (High-contrast tabletop view, dramatic angle) | BGM Bed Active (-34dB) |
| **082** | `05:44.2 - 05:49.0` | `assets/stills/082_dennys_highway_diner_exterior_overcast.png` | Static Image | Hard Cut | 2.5D Ken Burns (Wide establishing shot, retro roadside americana) | BGM Bed Active (-34dB) |
| **083** | `05:49.0 - 05:53.0` | `assets/videos/083_sliding_into_dennys_vinyl_booth_coffee.mp4` | AI Video Clip | Hard Cut | Native 30fps Video Motion (Muted -inf dB) | `083_foley_ceramic_mug_clatter.wav` (-22.0 dB) |
| **084** | `05:53.0 - 05:57.0` | `assets/stills/084_attorney_gesturing_to_hallway_phone_booth.png` | Static Image | Hard Cut | 2.5D Ken Burns (Medium two-shot inside booth, warm diner tones) | BGM Bed Active (-34dB) |
| **085** | `05:57.0 - 06:01.5` | `assets/stills/085_wooden_phone_cubby_hallway_analog_wire.png` | Static Image | Hard Cut | 2.5D Ken Burns (Medium shot, documentary framing) | BGM Bed Active (-34dB) |
| **086** | `06:01.5 - 06:06.0` | `assets/stills/086_showable_analog_fax_machine_1998_brother.png` | Static Image | Hard Cut | 2.5D Ken Burns (Eye-level vignette, nostalgic hardware aesthetic) | `086_foley_analog_fax_stepper_motor.wav` (-23.0 dB) |
| **087** | `06:06.0 - 06:10.5` | `assets/videos/087_thermal_fax_roll_spitting_court_dockets.mp4` | AI Video Clip | Hard Cut | Native 30fps Video Motion (Muted -inf dB) | BGM Bed Active (-34dB) |
| **088** | `06:10.5 - 06:14.8` | `assets/stills/088_attorney_feeding_emergency_motions_fax.png` | Static Image | Hard Cut | 2.5D Ken Burns (Over-the-shoulder action framing, steady push-in) | BGM Bed Active (-34dB) |
| **089** | `06:14.8 - 06:19.0` | `assets/stills/089_attorney_serious_holding_document_both_hands.png` | Static Image | Hard Cut | 2.5D Ken Burns (Dramatic medium portrait, sharp rim lighting) | BGM Bed Active (-34dB) |
| **090** | `06:19.0 - 06:23.5` | `assets/remotion/090_LienAccelerationStampCard.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (remotion-bits) | `090_foley_foreclosure_stamp_slam.wav` (-19.0 dB) |
| **091** | `06:23.5 - 06:27.5` | `assets/stills/091_mca_contract_paragraph_immediate_acceleration.png` | Static Image | Hard Cut | 2.5D Ken Burns (Macro text inset with animated yellow highlighter sweep) | BGM Bed Active (-34dB) |
| **092** | `06:27.5 - 06:32.0` | `assets/stills/092_splitscreen_lender_boardroom_vs_disconnected_phone.png` | Static Image | Hard Cut | 2.5D Ken Burns (Stylized graphic comparison, corporate chill vs dark) | BGM Bed Active (-34dB) |
| **093** | `06:32.0 - 06:36.5` | `assets/stills/093_showable_ucc1_foreclosure_lien_document.png` | Static Image | Hard Cut | 2.5D Ken Burns (Clean forensic document card, official seals) | BGM Bed Active (-34dB) |
| **094** | `06:36.5 - 06:40.5` | `assets/videos/094_postal_carrier_slipping_priority_envelopes.mp4` | AI Video Clip | Hard Cut | Native 30fps Video Motion (Muted -inf dB) | BGM Bed Active (-34dB) |
| **095** | `06:40.5 - 06:45.0` | `assets/videos/095_sheriff_deputy_taping_foreclosure_notice.mp4` | AI Video Clip | Hard Cut | Native 30fps Video Motion (Muted -inf dB) | `095_foley_heavy_tape_press.wav` (-24.0 dB) |
| **096** | `06:45.0 - 06:49.0` | `assets/stills/096_operator_driving_looking_at_parked_trucks.png` | Static Image | Hard Cut | 2.5D Ken Burns (Profile driving framing, highway overpass reflections) | BGM Bed Active (-34dB) |
| **097** | `06:49.0 - 06:53.5` | `assets/remotion/097_ChassisDeadZoneClusterMap.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (map-explainer) | BGM Bed Active (-34dB) |
| **098** | `06:53.5 - 06:58.2` | `assets/videos/098_drone_flyover_trapped_chassis_parking_lot.mp4` | AI Video Clip | Hard Cut | Native 30fps Video Motion (Muted -inf dB) | `098_foley_gravel_wind_whistle.wav` (-27.0 dB) |
| **099** | `06:58.2 - 07:02.5` | `assets/stills/099_chained_container_yard_padlock_guard.png` | Static Image | Hard Cut | 2.5D Ken Burns (Wide telephoto shot, harsh dust atmosphere) | BGM Bed Active (-34dB) |
| **100** | `07:02.5 - 07:07.0` | `assets/videos/100_idling_trucks_drivers_on_running_boards.mp4` | AI Video Clip | Hard Cut | Native 30fps Video Motion (Muted -inf dB) | BGM Bed Active (-34dB) |
| **101** | `07:07.0 - 07:11.5` | `assets/stills/101_iowa_grain_elevator_winter_wheat.png` | Static Image | Hard Cut | 2.5D Ken Burns (Wide scenic landscape, stark contrast to port) | BGM Bed Active (-34dB) |
| **102** | `07:11.5 - 07:16.0` | `assets/stills/102_grain_conveyor_overflow_pile_dirt.png` | Static Image | Hard Cut | 2.5D Ken Burns (Dynamic downward angle, golden grain texture) | BGM Bed Active (-34dB) |
| **103** | `07:16.0 - 07:21.0` | `assets/stills/103_trapped_container_novelty_massage_guns.png` | Static Image | Hard Cut | 2.5D Ken Burns (Medium close-up with ironic product reveal) | BGM Bed Active (-34dB) |
| **104** | `07:21.0 - 07:26.5` | `assets/remotion/104_Day24LedgerCheckpoint.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (newsroom-chart-animations) | BGM Math Duck (-52dB) |
| **105** | `07:26.5 - 07:31.0` | `assets/remotion/105_UnpaidCarrierDebtWaterfall.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (newsroom-chart-animations) | BGM Bed Active (-34dB) |
| **106** | `07:31.0 - 07:35.0` | `assets/stills/106_red_stamp_system_collapse_ledger.png` | Static Image | Hard Cut | 2.5D Ken Burns (Bold graphic end beat, intense contrast) | `106_foley_system_collapse_gavel.wav` (-18.0 dB) |
| **107** | `07:35.0 - 07:39.2` | `assets/stills/107_empty_long_beach_highway_dawn.png` | Static Image | Hard Cut | 2.5D Ken Burns (Wide vanishing point road shot, atmospheric chill) | BGM Bed Active (-34dB) |
| **108** | `07:39.2 - 07:43.0` | `assets/stills/108_pickup_truck_parked_deserted_lot_weeds.png` | Static Image | Hard Cut | 2.5D Ken Burns (Frontal vehicle framing, desolate weeds and asphalt) | BGM Bed Active (-34dB) |
| **109** | `07:43.0 - 07:47.0` | `assets/stills/109_closed_warehouse_bay_doors_silence.png` | Static Image | Hard Cut | 2.5D Ken Burns (Wide symmetrical architecture shot, motionless) | BGM Bed Active (-34dB) |
| **110** | `07:47.0 - 07:51.0` | `assets/stills/110_distant_elevated_freeway_morning_mist.png` | Static Image | Hard Cut | 2.5D Ken Burns (Telephoto landscape, cold morning mist) | BGM Bed Active (-34dB) |
| **111** | `07:51.0 - 07:55.2` | `assets/stills/111_operator_boots_walking_gravel_gate.png` | Static Image | Hard Cut | 2.5D Ken Burns (Low-angle follow framing behind worker boots) | BGM Bed Active (-34dB) |
| **112** | `07:55.2 - 07:59.5` | `assets/stills/112_private_security_guard_locked_bay.png` | Static Image | Hard Cut | 2.5D Ken Burns (Medium character portrait, stern impersonal stance) | BGM Bed Active (-34dB) |
| **113** | `07:59.5 - 08:04.0` | `assets/stills/113_thick_steel_chain_wrapped_fence_posts.png` | Static Image | Hard Cut | 2.5D Ken Burns (Tight macro focus on chain links, gritty texture) | `113_foley_heavy_chain_rattle.wav` (-20.0 dB) |
| **114** | `08:04.0 - 08:07.5` | `assets/stills/114_showable_heavy_brass_padlock.png` | Static Image | Hard Cut | 2.5D Ken Burns (Extreme close-up punch-in, sharp gold and silver highlights) | `114_foley_brass_padlock_snap.wav` (-19.0 dB) |
| **115** | `08:07.5 - 08:12.0` | `assets/stills/115_showable_notice_of_receivership_document.png` | Static Image | Hard Cut | 2.5D Ken Burns (Eye-level document shot, official state court header) | BGM Bed Active (-34dB) |
| **116** | `08:12.0 - 08:16.2` | `assets/stills/116_legal_notice_text_immediate_repossession.png` | Static Image | Hard Cut | 2.5D Ken Burns (Macro highlight on court injunction text) | BGM Bed Active (-34dB) |
| **117** | `08:16.2 - 08:20.5` | `assets/stills/117_port_authority_container_line_seals.png` | Static Image | Hard Cut | 2.5D Ken Burns (Graphic document detail, official seal embossment) | BGM Bed Active (-34dB) |
| **118** | `08:20.5 - 08:25.0` | `assets/stills/118_operator_looking_through_wire_mesh_racks.png` | Static Image | Hard Cut | 2.5D Ken Burns (Over-the-shoulder perspective through wire mesh) | BGM Bed Active (-34dB) |
| **119** | `08:25.0 - 08:29.5` | `assets/remotion/119_FinalBalanceSheetAutopsy.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (newsroom-chart-animations) | `119_foley_ledger_autopsy_whump.wav` (-21.0 dB) |
| **120** | `08:29.5 - 08:35.5` | `assets/remotion/120_NegativeEquityWaterfall.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (newsroom-chart-animations) | BGM Bed Active (-34dB) |
| **121** | `08:35.5 - 08:40.0` | `assets/stills/121_boardroom_empty_checkbook_broken_pen.png` | Static Image | Hard Cut | 2.5D Ken Burns (Minimalist tabletop composition, cold lighting) | BGM Bed Active (-34dB) |
| **122** | `08:40.0 - 08:44.5` | `assets/stills/122_rotting_cardboard_boxes_concrete_floor.png` | Static Image | Hard Cut | 2.5D Ken Burns (Macro close-up on rotting cardboard, slow push-in) | BGM Bed Active (-34dB) |
| **123** | `08:44.5 - 08:48.8` | `assets/videos/123_operator_pocket_vibrating_pulling_phone.mp4` | AI Video Clip | Hard Cut | Native 30fps Video Motion (Muted -inf dB) | `123_foley_canvas_pocket_vibe.wav` (-22.0 dB) |
| **124** | `08:48.8 - 08:52.5` | `assets/stills/124_smartphone_lighting_up_white_glow.png` | Static Image | Hard Cut | 2.5D Ken Burns (Close-up on phone screen turning on, sharp contrast) | BGM Bed Active (-34dB) |
| **125** | `08:52.5 - 08:57.0` | `assets/remotion/125_NotificationExplosionHUD.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (remotion-bits) | BGM Bed Active (-34dB) |
| **126** | `08:57.0 - 09:01.5` | `assets/stills/126_social_media_feed_smiling_selfies_gardening.png` | Static Image | Hard Cut | 2.5D Ken Burns (Stylized app interface with vector illustrations) | BGM Bed Active (-34dB) |
| **127** | `09:01.5 - 09:06.0` | `assets/stills/127_splitscreen_morning_news_hosts_laughing.png` | Static Image | Hard Cut | 2.5D Ken Burns (Television broadcast framing, bright saturated palette) | BGM Bed Active (-34dB) |
| **128** | `09:06.0 - 09:10.5` | `assets/stills/128_operator_standing_before_padlocked_gate.png` | Static Image | Hard Cut | 2.5D Ken Burns (Wide low-angle shot, tragic cinematic contrast) | BGM Bed Active (-34dB) |
| **129** | `09:10.5 - 09:15.2` | `assets/remotion/129_AttentionReboundVsBusinessDeaths.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (newsroom-chart-animations) | BGM Math Duck (-52dB) |
| **130** | `09:15.2 - 09:19.5` | `assets/stills/130_abandoned_factory_gate_rust_windblown_trash.png` | Static Image | Hard Cut | 2.5D Ken Burns (Wide documentary angle, muted greige tones) | BGM Bed Active (-34dB) |
| **131** | `09:19.5 - 09:24.0` | `assets/remotion/131_AuctionHammerCrushContainer.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (remotion-bits) | BGM Bed Active (-34dB) |
| **132** | `09:24.0 - 09:29.0` | `assets/stills/132_final_padlock_on_chain_fade_to_black.png` | Static Image | Hard Cut | 2.5D Ken Burns (Extreme close-up on padlock, slow fade to black) | `132_foley_distant_harbor_bell_fade.wav` (-26.0 dB) |
| **133** | `09:29.0 - 09:34.0` | `assets/remotion/133_FinanceCraftEndCard.mp4` | Remotion Graphic | Hard Cut | Remotion Native Motion (remotion-bits) | BGM Bed Active (-34dB) |

---

## 3. Final Master Export Specifications

```text
======================================================================
NLE / CAPCUT MASTER EXPORT SETTINGS
----------------------------------------------------------------------
Master Container Format : MP4 (MPEG-4 Part 14)
Video Codec             : H.264 / AVC (High Profile Level 4.2)
Canvas Resolution       : 1920×1080 (16:9 Landscape Full HD)
Frame Rate              : 30.00 fps (Constant Frame Rate)
Encoding Bitrate        : VBR 2-Pass Target: 24.0 Mbps (Max: 30.0 Mbps)
Audio Codec             : AAC-LC Stereo
Audio Sample Rate       : 48,000 Hz (48 kHz Broadcast Standard)
Audio Bitrate           : 320 kbps
Integrated Loudness     : -14.0 LUFS (+/- 0.5 LUFS target)
True Peak Maximum       : -1.0 dBFS (Zero Inter-Sample Peaking)
Total Master Duration   : 09:34.0 (574.0 seconds, exactly 17,220 frames)
======================================================================
```
