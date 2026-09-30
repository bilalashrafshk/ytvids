# Phase 10: Batch 3 — Remotion Graphics Specifications — Episode 05

> 39 Remotion beats, 1920x1080 at 30 fps. Frame counts are the beat's sentence-bound duration x 30, so they update when the alignment does. **Theme lock:** every colour resolves to `TOKENS.colors.*` in `remotion/src/tokens.ts`: background `background` (#F8F6F0), text `textPrimary` (#0F172A), secondary `textSecondary`, single accent `amber` (#F59E0B, the coin), `emerald` for a tick, `crimson` for a cross, `gridLine` for rules. **No more than 4 live text labels per frame; no jargon on screen** (the on-screen text obeys the same word list as the narration). Fee figures that come from the reported fee schedule carry "as widely reported" on the card; our own arithmetic carries "our own math".

> Every prompt carries both clauses: "use best graphic motions practises and guidelines from top performing graphics" and "follow best industry-standard guidelines and quality and visualisations".

---

## Remotion Asset Inventory

| Beat # | Component | Composition ID | Resolution & FPS | Frames (duration) | Visual purpose |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **060** | `Ep05ReceiptDots` | `Ep05ReceiptDots` | 1920x1080 @ 30fps | 148 frames (4.9s) | Formula Ratio Explainer |
| **100** | `Ep05FeeFlow` | `Ep05FeeFlow-a` | 1920x1080 @ 30fps | 137 frames (4.6s) | Supply Chain Cascade |
| **110** | `Ep05FeeFlow` | `Ep05FeeFlow-b` | 1920x1080 @ 30fps | 89 frames (3.0s) | Supply Chain Cascade |
| **170** | `Ep05WhipZoom` | `Ep05WhipZoom` | 1920x1080 @ 30fps | 319 frames (10.6s) | Whip Zoom Montage |
| **200** | `Ep05NameBadges` | `Ep05NameBadges` | 1920x1080 @ 30fps | 172 frames (5.7s) | Bit-List-Reveal |
| **290** | `Ep05BackerStack` | `Ep05BackerStack-studios` | 1920x1080 @ 30fps | 136 frames (4.5s) | Bit-Card-Stack |
| **300** | `Ep05BackerStack` | `Ep05BackerStack-cable` | 1920x1080 @ 30fps | 98 frames (3.3s) | Bit-Card-Stack |
| **360** | `Ep05PriceCard` | `Ep05PriceCard-key-fee` | 1920x1080 @ 30fps | 143 frames (4.8s) | Formula Ratio Explainer |
| **370** | `Ep05PriceCard` | `Ep05PriceCard-key-prices` | 1920x1080 @ 30fps | 121 frames (4.0s) | Unit Economics Waterfall |
| **520** | `Ep05Flywheel` | `Ep05Flywheel` | 1920x1080 @ 30fps | 398 frames (13.3s) | 3D Orbital Flywheel |
| **600** | `Ep05PriceCard` | `Ep05PriceCard-annual-big` | 1920x1080 @ 30fps | 121 frames (4.0s) | Formula Ratio Explainer |
| **610** | `Ep05PriceCard` | `Ep05PriceCard-annual-small` | 1920x1080 @ 30fps | 90 frames (3.0s) | Formula Ratio Explainer |
| **620** | `Ep05PriceCard` | `Ep05PriceCard-per-device-15` | 1920x1080 @ 30fps | 220 frames (7.3s) | Formula Ratio Explainer |
| **630** | `Ep05PriceCard` | `Ep05PriceCard-per-device-tiers` | 1920x1080 @ 30fps | 244 frames (8.1s) | Formula Ratio Explainer |
| **650** | `Ep05Newsprint` | `Ep05Newsprint-logo-rules` | 1920x1080 @ 30fps | 162 frames (5.4s) | Newsprint Editorial |
| **680** | `Ep05FeeWaterfall` | `Ep05FeeWaterfall-small-yearly` | 1920x1080 @ 30fps | 86 frames (2.9s) | Unit Economics Waterfall |
| **690** | `Ep05FeeWaterfall` | `Ep05FeeWaterfall-small-a` | 1920x1080 @ 30fps | 133 frames (4.4s) | Unit Economics Waterfall |
| **700** | `Ep05FeeWaterfall` | `Ep05FeeWaterfall-small-b` | 1920x1080 @ 30fps | 343 frames (11.4s) | Unit Economics Waterfall |
| **710** | `Ep05FeeWaterfall` | `Ep05FeeWaterfall-giant-setup` | 1920x1080 @ 30fps | 109 frames (3.6s) | Unit Economics Waterfall |
| **720** | `Ep05FeeWaterfall` | `Ep05FeeWaterfall-giant` | 1920x1080 @ 30fps | 241 frames (8.0s) | Unit Economics Waterfall |
| **730** | `Ep05SplitCompare` | `Ep05SplitCompare-forty-times` | 1920x1080 @ 30fps | 181 frames (6.0s) | Split Screen Comparison |
| **850** | `Ep05CounterCard` | `Ep05CounterCard-devices-2017` | 1920x1080 @ 30fps | 154 frames (5.1s) | Cash Burn Counter |
| **860** | `Ep05CounterCard` | `Ep05CounterCard-devices-times` | 1920x1080 @ 30fps | 152 frames (5.1s) | Cash Burn Counter |
| **870** | `Ep05Staircase` | `Ep05Staircase-a` | 1920x1080 @ 30fps | 138 frames (4.6s) | Churn Retention Curve |
| **880** | `Ep05Staircase` | `Ep05Staircase-b` | 1920x1080 @ 30fps | 145 frames (4.8s) | Churn Retention Curve |
| **910** | `Ep05RangeBar` | `Ep05RangeBar` | 1920x1080 @ 30fps | 293 frames (9.8s) | Unit Economics Waterfall |
| **980** | `Ep05SplitCompare` | `Ep05SplitCompare-dp-vs-hdmi` | 1920x1080 @ 30fps | 216 frames (7.2s) | Split Screen Comparison |
| **1030** | `Ep05OrgDiagram` | `Ep05OrgDiagram-org-a` | 1920x1080 @ 30fps | 257 frames (8.6s) | Supply Chain Cascade |
| **1040** | `Ep05OrgDiagram` | `Ep05OrgDiagram-org-b` | 1920x1080 @ 30fps | 181 frames (6.0s) | Supply Chain Cascade |
| **1110** | `Ep05FeeChain` | `Ep05FeeChain` | 1920x1080 @ 30fps | 184 frames (6.1s) | Supply Chain Cascade |
| **1130** | `Ep05Newsprint` | `Ep05Newsprint-docket` | 1920x1080 @ 30fps | 207 frames (6.9s) | Newsprint Editorial |
| **1150** | `Ep05Newsprint` | `Ep05Newsprint-finding` | 1920x1080 @ 30fps | 160 frames (5.3s) | Newsprint Editorial |
| **1170** | `Ep05CounterCard` | `Ep05CounterCard-fourteen` | 1920x1080 @ 30fps | 151 frames (5.0s) | Cash Burn Counter |
| **1210** | `Ep05WallBricks` | `Ep05WallBricks` | 1920x1080 @ 30fps | 220 frames (7.3s) | Bit-List-Reveal |
| **1300** | `Ep05QuoteCard` | `Ep05QuoteCard-quote-a` | 1920x1080 @ 30fps | 294 frames (9.8s) | Variable-Speed-Typewriter |
| **1310** | `Ep05QuoteCard` | `Ep05QuoteCard-quote-b` | 1920x1080 @ 30fps | 266 frames (8.9s) | Variable-Speed-Typewriter |
| **1320** | `Ep05SplitCompare` | `Ep05SplitCompare-four-k-lost` | 1920x1080 @ 30fps | 192 frames (6.4s) | Split Screen Comparison |
| **1330** | `Ep05SplitCompare` | `Ep05SplitCompare-four-k` | 1920x1080 @ 30fps | 115 frames (3.8s) | Split Screen Comparison |
| **1440** | `Ep05PortalTunnel` | `Ep05PortalTunnel` | 1920x1080 @ 30fps | 362 frames (12.1s) | Infinite Portal Tunnel |

**Reuse:** 39 beats are built from 18 component files. Build each once with a `scene` prop, then render each scene. Ground-truth files to start from: `InfiniteZoomMontage.tsx` (whip-zoom), `Beat270CacFlywheel.tsx` (flywheel), `InfiniteDroneZoomTunnel.tsx` (tunnel), `NewsprintEditorialShort.tsx` (documents), `Beat780UnitMarginWaterfall.tsx` (fee waterfalls), `Beat590AirFreightBurn.tsx` (counters).

**Build rule (CP-14):** one component at a time; render start, middle and end frames with `npx remotion still`, view the PNGs, and only then start the next.

---

## Component Specifications & Render Commands

### Beat 060 — `Ep05ReceiptDots` (receipt_dots)
- **Archetype / engine:** `ARCHETYPE_FORMULA_RATIO_EXPLAINER`
- **Spoken line:** "On a four hundred dollar TV, it's one dollar in every ten thousand."
- **Timing:** 00:26.8 to 00:31.7, 4.9 s, **148 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** A grid of 10,000 dots with exactly one lit in amber, after a TV receipt line zooms out.
- **On-screen labels (max 4):** "$400 TV"; "one dollar in ten thousand"
- **Source line under the title:** illustrative ratio: $1 in every $10,000 (4 cents on a $400 TV)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build `Ep05ReceiptDots`. A grid of 10,000 dots with exactly one lit in amber, after a TV receipt line zooms out."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05ReceiptDots out/ep05/060_receipt_dots.mp4 --gl=angle --props='{"durationInFrames":148,"scene":""}'
```

### Beat 100 — `Ep05FeeFlow` (fee_flow_a)
- **Archetype / engine:** `ARCHETYPE_SUPPLY_CHAIN_CASCADE`
- **Spoken line:** "The money goes to a company called H D M I Licensing Administrator,"
- **Timing:** 00:43.6 to 00:48.2, 4.6 s, **137 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Coins flow from a crowd of TV icons into one box labelled with the collecting company.
- **On-screen labels (max 4):** "HDMI Licensing Administrator"; "the fee"
- **Source line under the title:** hdmi.org (founders page)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'a' of `Ep05FeeFlow`. Coins flow from a crowd of TV icons into one box labelled with the collecting company."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05FeeFlow-a out/ep05/100_fee_flow_a.mp4 --gl=angle --props='{"durationInFrames":137,"scene":"a"}'
```

### Beat 110 — `Ep05FeeFlow` (fee_flow_b)
- **Archetype / engine:** `ARCHETYPE_SUPPLY_CHAIN_CASCADE`
- **Spoken line:** "which collects for the companies that built the plug."
- **Timing:** 00:48.2 to 00:51.2, 3.0 s, **89 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** The box passes the coins on to seven founder badges.
- **On-screen labels (max 4):** "collects for"; "seven founders"
- **Source line under the title:** hdmi.org (founders page)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'b' of `Ep05FeeFlow`. The box passes the coins on to seven founder badges."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05FeeFlow-b out/ep05/110_fee_flow_b.mp4 --gl=angle --props='{"durationInFrames":89,"scene":"b"}'
```

### Beat 170 — `Ep05WhipZoom` (whipzoom_leads)
- **Archetype / engine:** `ARCHETYPE_WHIP_ZOOM_MONTAGE`
- **Spoken line:** "One for the picture. Two for the sound. Another if you wanted the picture sharper. Every one was a different plug, made by a different company, and they never quite fit."
- **Timing:** 01:09.1 to 01:19.7, 10.6 s, **319 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Staccato whip-zoom montage through eight different plug-and-cable plates, landing on the tangled knot.
- **On-screen labels (max 4):** "none"
- **Source line under the title:** none (metaphor, no data)
- **Signature-cinematic scheduling:** the archetype's documented full duration is 240 frames (six 5-frame staccato cuts plus the landing push). This beat runs 319 frames, so hold the landing on the tangled knot with a slow push for the remaining 79 frames; never clip the motion.
- **Upstream feeder stills (Batch 1):** 140_feeder_01.png .. 140_feeder_08.png
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build `Ep05WhipZoom`. Staccato whip-zoom montage through eight different plug-and-cable plates, landing on the tangled knot."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05WhipZoom out/ep05/170_whipzoom_leads.mp4 --gl=angle --props='{"durationInFrames":319,"scene":""}'
```

### Beat 200 — `Ep05NameBadges` (seven_names)
- **Archetype / engine:** `bit-list-reveal`
- **Spoken line:** "Hitachi. Panasonic. Philips. Silicon Image. Sony. Thomson. Toshiba."
- **Timing:** 01:25.6 to 01:31.3, 5.7 s, **172 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Seven name badges slam in one by one: Hitachi, Panasonic, Philips, Silicon Image, Sony, Thomson, Toshiba (text only, no logos).
- **On-screen labels (max 4):** "seven name badges"
- **Source line under the title:** hdmi.org (founders press release)
- **Reference-sourcing flag:** this beat shows a real page or message. Collect the real one, crop it, and lay it in as a bordered inset card with a soft shadow; never redraw it. Search: hdmi.org (founders press release)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build `Ep05NameBadges`. Seven name badges slam in one by one: Hitachi, Panasonic, Philips, Silicon Image, Sony, Thomson, Toshiba (text only, no logos)."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05NameBadges out/ep05/200_seven_names.mp4 --gl=angle --props='{"durationInFrames":172,"scene":""}'
```

### Beat 290 — `Ep05BackerStack` (backers_studios)
- **Archetype / engine:** `bit-card-stack`
- **Spoken line:** "Fox, Universal, Warner Brothers and Disney all backed it."
- **Timing:** 02:06.9 to 02:11.4, 4.5 s, **136 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Four cards fan out beside the plug: Fox, Universal, Warner Brothers, Disney (text names, no logos).
- **On-screen labels (max 4):** "four studio names"
- **Source line under the title:** hdmi.org press release; Wikipedia: HDMI
- **Reference-sourcing flag:** this beat shows a real page or message. Collect the real one, crop it, and lay it in as a bordered inset card with a soft shadow; never redraw it. Search: hdmi.org press release; Wikipedia: HDMI
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'studios' of `Ep05BackerStack`. Four cards fan out beside the plug: Fox, Universal, Warner Brothers, Disney (text names, no logos)."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05BackerStack-studios out/ep05/290_backers_studios.mp4 --gl=angle --props='{"durationInFrames":136,"scene":"studios"}'
```

### Beat 300 — `Ep05BackerStack` (backers_cable)
- **Archetype / engine:** `bit-card-stack`
- **Spoken line:** "So did the big satellite and cable companies."
- **Timing:** 02:11.4 to 02:14.7, 3.3 s, **98 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Two more cards join: a satellite dish and a cable spool.
- **On-screen labels (max 4):** "satellite"; "cable"
- **Source line under the title:** hdmi.org press release; Wikipedia: HDMI
- **Reference-sourcing flag:** this beat shows a real page or message. Collect the real one, crop it, and lay it in as a bordered inset card with a soft shadow; never redraw it. Search: hdmi.org press release; Wikipedia: HDMI
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'cable' of `Ep05BackerStack`. Two more cards join: a satellite dish and a cable spool."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05BackerStack-cable out/ep05/300_backers_cable.mp4 --gl=angle --props='{"durationInFrames":98,"scene":"cable"}'
```

### Beat 360 — `Ep05PriceCard` (key_fee)
- **Archetype / engine:** `ARCHETYPE_FORMULA_RATIO_EXPLAINER`
- **Spoken line:** "Making a device with the lock means paying a fee every year, fifteen thousand dollars,"
- **Timing:** 02:39.3 to 02:44.1, 4.8 s, **143 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Card: the yearly lock fee, $15,000 a year.
- **On-screen labels (max 4):** "lock fee"; "$15,000 a year"
- **Source line under the title:** Digital Content Protection LLC, licence agreement (rev. March 15, 2024), Procedural Appendix
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'key_fee' of `Ep05PriceCard`. Card: the yearly lock fee, $15,000 a year."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05PriceCard-key-fee out/ep05/360_key_fee.mp4 --gl=angle --props='{"durationInFrames":143,"scene":"key_fee"}'
```

### Beat 370 — `Ep05PriceCard` (key_prices)
- **Archetype / engine:** `ARCHETYPE_UNIT_ECONOMICS_WATERFALL`
- **Spoken line:** "plus a price for each set of keys, which gets cheaper the more you buy."
- **Timing:** 02:44.1 to 02:48.1, 4.0 s, **121 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Key prices fall as the order grows: 30 cents, 7.5 cents, 1.5 cents.
- **On-screen labels (max 4):** "30 cents a key"; "7.5 cents a key"; "1.5 cents a key"
- **Source line under the title:** Digital Content Protection LLC, licence agreement (rev. March 15, 2024), Procedural Appendix
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'key_prices' of `Ep05PriceCard`. Key prices fall as the order grows: 30 cents, 7.5 cents, 1.5 cents."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05PriceCard-key-prices out/ep05/370_key_prices.mp4 --gl=angle --props='{"durationInFrames":121,"scene":"key_prices"}'
```

### Beat 520 — `Ep05Flywheel` (loop_flywheel)
- **Archetype / engine:** `ARCHETYPE_3D_ORBITAL_FLYWHEEL`
- **Spoken line:** "One: studios and cable companies back the plug. Two: so the boxes people buy all use it. Three: so every TV has to have it. Four: so every TV maker signs the contract, and pays."
- **Timing:** 03:37.6 to 03:50.8, 13.3 s, **398 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Four steps turning as one loop: studios and cable back the plug, boxes use it, every TV needs it, every maker signs and pays, feeding back to the start.
- **On-screen labels (max 4):** "studios back it"; "boxes use it"; "every TV needs it"; "every maker pays"
- **Source line under the title:** none (metaphor, no data)
- **Signature-cinematic scheduling:** light one of the four steps on each spoken 'One', 'Two', 'Three', 'Four' (use the alignment for the four frames), then let the loop complete once and hold for the last second.
- **Upstream feeder stills (Batch 1):** 680_feeder_01.png .. 680_feeder_04.png (transparent cutouts)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build `Ep05Flywheel`. Four steps turning as one loop: studios and cable back the plug, boxes use it, every TV needs it, every maker signs and pays, feeding back to the start."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05Flywheel out/ep05/520_loop_flywheel.mp4 --gl=angle --props='{"durationInFrames":398,"scene":""}'
```

### Beat 600 — `Ep05PriceCard` (annual_big)
- **Archetype / engine:** `ARCHETYPE_FORMULA_RATIO_EXPLAINER`
- **Spoken line:** "Every maker pays a yearly fee, ten thousand dollars for a big one."
- **Timing:** 04:22.1 to 04:26.2, 4.0 s, **121 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Card: a big maker pays $10,000 a year.
- **On-screen labels (max 4):** "big maker"; "$10,000 a year"
- **Source line under the title:** as widely reported (Wikipedia: HDMI Licensing; licensing explainers)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'annual_big' of `Ep05PriceCard`. Card: a big maker pays $10,000 a year."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05PriceCard-annual-big out/ep05/600_annual_big.mp4 --gl=angle --props='{"durationInFrames":121,"scene":"annual_big"}'
```

### Beat 610 — `Ep05PriceCard` (annual_small)
- **Archetype / engine:** `ARCHETYPE_FORMULA_RATIO_EXPLAINER`
- **Spoken line:** "Small ones pay five thousand, plus a dollar a unit."
- **Timing:** 04:26.2 to 04:29.2, 3.0 s, **90 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Card: a small maker pays $5,000 a year plus $1 a unit.
- **On-screen labels (max 4):** "small maker"; "$5,000 + $1 a unit"
- **Source line under the title:** as widely reported (Wikipedia: HDMI Licensing; licensing explainers)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'annual_small' of `Ep05PriceCard`. Card: a small maker pays $5,000 a year plus $1 a unit."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05PriceCard-annual-small out/ep05/610_annual_small.mp4 --gl=angle --props='{"durationInFrames":90,"scene":"annual_small"}'
```

### Beat 620 — `Ep05PriceCard` (per_device_15)
- **Archetype / engine:** `ARCHETYPE_FORMULA_RATIO_EXPLAINER`
- **Spoken line:** "On top comes the fee for each device, and this is the number in the title. As widely reported, it starts at fifteen cents."
- **Timing:** 04:29.2 to 04:36.5, 7.3 s, **220 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** A single fee card: per device, as widely reported, 15 cents.
- **On-screen labels (max 4):** "per device"; "15 cents"
- **Source line under the title:** as widely reported (Wikipedia: HDMI Licensing)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'per_device_15' of `Ep05PriceCard`. A single fee card: per device, as widely reported, 15 cents."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05PriceCard-per-device-15 out/ep05/620_per_device_15.mp4 --gl=angle --props='{"durationInFrames":220,"scene":"per_device_15"}'
```

### Beat 630 — `Ep05PriceCard` (per_device_tiers)
- **Archetype / engine:** `ARCHETYPE_FORMULA_RATIO_EXPLAINER`
- **Spoken line:** "Put the H D M I logo on your product and the fee drops to five cents. Add the lock as well and it drops to four."
- **Timing:** 04:36.5 to 04:44.6, 8.1 s, **244 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** The fee drops in two steps: 15 cents to 5 cents with the logo, to 4 cents with the lock too.
- **On-screen labels (max 4):** "15 cents"; "5 cents (logo)"; "4 cents (logo + lock)"
- **Source line under the title:** as widely reported (Wikipedia: HDMI Licensing)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'per_device_tiers' of `Ep05PriceCard`. The fee drops in two steps: 15 cents to 5 cents with the logo, to 4 cents with the lock too."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05PriceCard-per-device-tiers out/ep05/630_per_device_tiers.mp4 --gl=angle --props='{"durationInFrames":244,"scene":"per_device_tiers"}'
```

### Beat 650 — `Ep05Newsprint` (logo_rules)
- **Archetype / engine:** `ARCHETYPE_NEWSPRINT_EDITORIAL`
- **Spoken line:** "The group's own logo rules say so, in writing: use the logo, get a discount."
- **Timing:** 04:49.3 to 04:54.8, 5.4 s, **162 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Highlighter sweep over the real logo-guidelines line: makers receive a discounted rate for using the logo.
- **On-screen labels (max 4):** "real page excerpt"
- **Source line under the title:** HDMI Adopted Trademark and Logo Usage Guidelines, rev. May 3, 2022, s.1.1.1 (real page to be collected)
- **Reference-sourcing flag:** this beat shows a real page or message. Collect the real one, crop it, and lay it in as a bordered inset card with a soft shadow; never redraw it. Search: HDMI Adopted Trademark and Logo Usage Guidelines, rev. May 3, 2022, s.1.1.1 (real page to be collected)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'logo_rules' of `Ep05Newsprint`. Highlighter sweep over the real logo-guidelines line: makers receive a discounted rate for using the logo."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05Newsprint-logo-rules out/ep05/650_logo_rules.mp4 --gl=angle --props='{"durationInFrames":162,"scene":"logo_rules"}'
```

### Beat 680 — `Ep05FeeWaterfall` (small_yearly)
- **Archetype / engine:** `ARCHETYPE_UNIT_ECONOMICS_WATERFALL`
- **Spoken line:** "Your yearly fee is five thousand dollars."
- **Timing:** 05:05.9 to 05:08.8, 2.9 s, **86 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Small maker: a $5,000 yearly fee bar rises.
- **On-screen labels (max 4):** "$5,000 yearly"
- **Source line under the title:** our own arithmetic on the widely reported fee schedule
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'small_yearly' of `Ep05FeeWaterfall`. Small maker: a $5,000 yearly fee bar rises."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05FeeWaterfall-small-yearly out/ep05/680_small_yearly.mp4 --gl=angle --props='{"durationInFrames":86,"scene":"small_yearly"}'
```

### Beat 690 — `Ep05FeeWaterfall` (small_per_tv)
- **Archetype / engine:** `ARCHETYPE_UNIT_ECONOMICS_WATERFALL`
- **Spoken line:** "Then you pay a dollar on every TV, just to be in the system."
- **Timing:** 05:08.8 to 05:13.2, 4.4 s, **133 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** A dollar on each of 10,000 TVs stacks $10,000 on top.
- **On-screen labels (max 4):** "$10,000 ($1 a TV)"
- **Source line under the title:** our own arithmetic on the widely reported fee schedule
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'small_a' of `Ep05FeeWaterfall`. A dollar on each of 10,000 TVs stacks $10,000 on top."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05FeeWaterfall-small-a out/ep05/690_small_per_tv.mp4 --gl=angle --props='{"durationInFrames":133,"scene":"small_a"}'
```

### Beat 700 — `Ep05FeeWaterfall` (small_total)
- **Archetype / engine:** `ARCHETYPE_UNIT_ECONOMICS_WATERFALL`
- **Spoken line:** "Then the per-device fee, at five cents, comes to five hundred dollars. All told, about fifteen thousand five hundred dollars. That's a dollar fifty-five on every TV."
- **Timing:** 05:13.2 to 05:24.6, 11.4 s, **343 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Add $500 for the per-device fee to reach $15,500, which is $1.55 on every TV.
- **On-screen labels (max 4):** "$500 (5 cents each)"; "$15,500 total"; "$1.55 a TV"
- **Source line under the title:** our own arithmetic on the widely reported fee schedule
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'small_b' of `Ep05FeeWaterfall`. Add $500 for the per-device fee to reach $15,500, which is $1.55 on every TV."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05FeeWaterfall-small-b out/ep05/700_small_total.mp4 --gl=angle --props='{"durationInFrames":343,"scene":"small_b"}'
```

### Beat 710 — `Ep05FeeWaterfall` (giant_setup)
- **Archetype / engine:** `ARCHETYPE_UNIT_ECONOMICS_WATERFALL`
- **Spoken line:** "Now run it for a giant selling ten million TVs."
- **Timing:** 05:24.6 to 05:28.2, 3.6 s, **109 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** A giant maker selling 10 million TVs: a very long row of TV icons.
- **On-screen labels (max 4):** "10 million TVs"
- **Source line under the title:** our own arithmetic on the widely reported fee schedule
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'giant_setup' of `Ep05FeeWaterfall`. A giant maker selling 10 million TVs: a very long row of TV icons."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05FeeWaterfall-giant-setup out/ep05/710_giant_setup.mp4 --gl=angle --props='{"durationInFrames":109,"scene":"giant_setup"}'
```

### Beat 720 — `Ep05FeeWaterfall` (giant_total)
- **Archetype / engine:** `ARCHETYPE_UNIT_ECONOMICS_WATERFALL`
- **Spoken line:** "The yearly fee is ten thousand dollars, and the per-device fee is four cents each. It comes to about four cents a TV."
- **Timing:** 05:28.2 to 05:36.3, 8.0 s, **241 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** $10,000 yearly plus $400,000 in device fees, about 4 cents a TV.
- **On-screen labels (max 4):** "$10,000 yearly"; "$400,000"; "about 4 cents a TV"
- **Source line under the title:** our own arithmetic on the widely reported fee schedule
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'giant' of `Ep05FeeWaterfall`. $10,000 yearly plus $400,000 in device fees, about 4 cents a TV."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05FeeWaterfall-giant out/ep05/720_giant_total.mp4 --gl=angle --props='{"durationInFrames":241,"scene":"giant"}'
```

### Beat 730 — `Ep05SplitCompare` (forty_times)
- **Archetype / engine:** `ARCHETYPE_SPLIT_SCREEN_COMPARISON`
- **Spoken line:** "So it isn't one price. The small maker pays nearly forty times what the giant pays."
- **Timing:** 05:36.3 to 05:42.3, 6.0 s, **181 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Split screen: garage bench at $1.55 a TV against factory floor at 4 cents a TV, a 'nearly 40 times' marker.
- **On-screen labels (max 4):** "$1.55 a TV"; "4 cents a TV"; "nearly 40 times"
- **Source line under the title:** our own arithmetic on the widely reported fee schedule
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'forty_times' of `Ep05SplitCompare`. Split screen: garage bench at $1.55 a TV against factory floor at 4 cents a TV, a 'nearly 40 times' marker."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05SplitCompare-forty-times out/ep05/730_forty_times.mp4 --gl=angle --props='{"durationInFrames":181,"scene":"forty_times"}'
```

### Beat 850 — `Ep05CounterCard` (devices_2017)
- **Archetype / engine:** `ARCHETYPE_CASH_BURN_COUNTER`
- **Spoken line:** "In twenty seventeen alone, the plug shipped in nearly nine hundred million devices."
- **Timing:** 06:17.8 to 06:23.0, 5.1 s, **154 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Counter card: nearly 900 million devices shipped in 2017.
- **On-screen labels (max 4):** "nearly 900 million devices"
- **Source line under the title:** HDMI LA press release (2017 shipments)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'devices_2017' of `Ep05CounterCard`. Counter card: nearly 900 million devices shipped in 2017."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05CounterCard-devices-2017 out/ep05/850_devices_2017.mp4 --gl=angle --props='{"durationInFrames":154,"scene":"devices_2017"}'
```

### Beat 860 — `Ep05CounterCard` (devices_times)
- **Archetype / engine:** `ARCHETYPE_CASH_BURN_COUNTER`
- **Spoken line:** "At four to fifteen cents each, that's tens of millions of dollars, in a single year."
- **Timing:** 06:23.0 to 06:28.0, 5.1 s, **152 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Multiply by 4 to 15 cents each: about $36M to $135M a year.
- **On-screen labels (max 4):** "4 to 15 cents"; "about $36M to $135M (our math)"
- **Source line under the title:** our own arithmetic
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'devices_times' of `Ep05CounterCard`. Multiply by 4 to 15 cents each: about $36M to $135M a year."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05CounterCard-devices-times out/ep05/860_devices_times.mp4 --gl=angle --props='{"durationInFrames":152,"scene":"devices_times"}'
```

### Beat 870 — `Ep05Staircase` (growth_a)
- **Archetype / engine:** `ARCHETYPE_CHURN_RETENTION_CURVE`
- **Spoken line:** "See how fast it grew. Six hundred million devices by early two thousand nine."
- **Timing:** 06:28.0 to 06:32.6, 4.6 s, **138 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Staircase of shipped devices, first steps: fast growth, about 600 million in early 2009.
- **On-screen labels (max 4):** "2009"; "600 million"
- **Source line under the title:** HDMI LA adoption figures as reported (Wikipedia: HDMI Licensing)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'a' of `Ep05Staircase`. Staircase of shipped devices, first steps: fast growth, about 600 million in early 2009."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05Staircase-a out/ep05/870_growth_a.mp4 --gl=angle --props='{"durationInFrames":138,"scene":"a"}'
```

### Beat 880 — `Ep05Staircase` (growth_b)
- **Archetype / engine:** `ARCHETYPE_CHURN_RETENTION_CURVE`
- **Spoken line:** "Two billion by late twenty eleven. Nearly ten billion by twenty twenty-one."
- **Timing:** 06:32.6 to 06:37.5, 4.8 s, **145 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Staircase continues: 2 billion in late 2011, nearly 10 billion in 2021.
- **On-screen labels (max 4):** "2011"; "2021"
- **Source line under the title:** HDMI LA adoption figures as reported (Wikipedia: HDMI Licensing)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'b' of `Ep05Staircase`. Staircase continues: 2 billion in late 2011, nearly 10 billion in 2021."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05Staircase-b out/ep05/880_growth_b.mp4 --gl=angle --props='{"durationInFrames":145,"scene":"b"}'
```

### Beat 910 — `Ep05RangeBar` (range_total)
- **Archetype / engine:** `ARCHETYPE_UNIT_ECONOMICS_WATERFALL`
- **Spoken line:** "Multiply it out, and our own rough math says somewhere between six hundred million and two billion dollars, over twenty-three years. Most likely near the bottom of that."
- **Timing:** 06:42.3 to 06:52.1, 9.8 s, **293 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Range bar: roughly $0.6 billion to $2 billion over 23 years, a marker near the low end, labelled our own rough math.
- **On-screen labels (max 4):** "about $0.6B to $2B"; "23 years"; "our own rough math"
- **Source line under the title:** our own arithmetic: ~14 billion devices x $0.04 to $0.15
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build `Ep05RangeBar`. Range bar: roughly $0.6 billion to $2 billion over 23 years, a marker near the low end, labelled our own rough math."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05RangeBar out/ep05/910_range_total.mp4 --gl=angle --props='{"durationInFrames":293,"scene":""}'
```

### Beat 980 — `Ep05SplitCompare` (dp_vs_hdmi)
- **Archetype / engine:** `ARCHETYPE_SPLIT_SCREEN_COMPARISON`
- **Spoken line:** "A group of patent owners asks twenty cents a product. That's more than the lowest fee on the H D M I side."
- **Timing:** 07:19.3 to 07:26.5, 7.2 s, **216 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Two cards: 20 cents a product for the rival plug's patent pool against 4 cents for the lowest fee on the other side.
- **On-screen labels (max 4):** "20 cents"; "4 cents"
- **Source line under the title:** Via Licensing Alliance, DisplayPort Patent Portfolio License Briefing; Wikipedia: MPEG LA
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'dp_vs_hdmi' of `Ep05SplitCompare`. Two cards: 20 cents a product for the rival plug's patent pool against 4 cents for the lowest fee on the other side."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05SplitCompare-dp-vs-hdmi out/ep05/980_dp_vs_hdmi.mp4 --gl=angle --props='{"durationInFrames":216,"scene":"dp_vs_hdmi"}'
```

### Beat 1030 — `Ep05OrgDiagram` (org_split)
- **Archetype / engine:** `ARCHETYPE_SUPPLY_CHAIN_CASCADE`
- **Spoken line:** "Then in twenty eleven, the founders set up a second body, called the H D M I Forum. It writes the new versions of the plug."
- **Timing:** 07:45.8 to 07:54.4, 8.6 s, **257 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** The founders on the left split into two boxes: one that writes the contract and collects the fees, one that writes the rules.
- **On-screen labels (max 4):** "the founders"; "writes the contract, collects fees"; "writes the rules"
- **Source line under the title:** hdmi.org (founders page); Wikipedia: HDMI Licensing
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'org_a' of `Ep05OrgDiagram`. The founders on the left split into two boxes: one that writes the contract and collects the fees, one that writes the rules."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05OrgDiagram-org-a out/ep05/1030_org_split.mp4 --gl=angle --props='{"durationInFrames":257,"scene":"org_a"}'
```

### Beat 1040 — `Ep05OrgDiagram` (org_labels)
- **Archetype / engine:** `ARCHETYPE_SUPPLY_CHAIN_CASCADE`
- **Spoken line:** "H D M I Licensing Administrator writes the contract. The Forum writes the rules."
- **Timing:** 07:54.4 to 08:00.4, 6.0 s, **181 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** The two boxes light up in turn: the licensing company 'writes the contract', the Forum 'writes the rules'.
- **On-screen labels (max 4):** "contract"; "rules"
- **Source line under the title:** hdmi.org (founders page)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'org_b' of `Ep05OrgDiagram`. The two boxes light up in turn: the licensing company 'writes the contract', the Forum 'writes the rules'."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05OrgDiagram-org-b out/ep05/1040_org_labels.mp4 --gl=angle --props='{"durationInFrames":181,"scene":"org_b"}'
```

### Beat 1110 — `Ep05FeeChain` (who_owes)
- **Archetype / engine:** `ARCHETYPE_SUPPLY_CHAIN_CASCADE`
- **Spoken line:** "So who owed the fee, the chip maker or the TV maker? The contract said the chip maker."
- **Timing:** 08:28.5 to 08:34.6, 6.1 s, **184 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Fee chain: chip maker to TV maker, a question mark over 'who owes the fee', then an arrow lands on the chip maker.
- **On-screen labels (max 4):** "chip maker"; "TV maker"; "who owes the fee?"
- **Source line under the title:** HDMI LA statement on the ruling (Dec 31, 2025)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build `Ep05FeeChain`. Fee chain: chip maker to TV maker, a question mark over 'who owes the fee', then an arrow lands on the chip maker."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05FeeChain out/ep05/1110_who_owes.mp4 --gl=angle --props='{"durationInFrames":184,"scene":""}'
```

### Beat 1130 — `Ep05Newsprint` (docket)
- **Archetype / engine:** `ARCHETYPE_NEWSPRINT_EDITORIAL`
- **Spoken line:** "Availink hit back. It argued that the group was breaking competition law, and that the contract kept rivals out."
- **Timing:** 08:43.8 to 08:50.7, 6.9 s, **207 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Highlighter sweep over the real case caption: HDMI Licensing Administrator, Inc. v. Availink Inc.
- **On-screen labels (max 4):** "case caption"
- **Source line under the title:** CourtListener docket 5:22-cv-06947 (N.D. Cal.) (real page to be collected)
- **Reference-sourcing flag:** this beat shows a real page or message. Collect the real one, crop it, and lay it in as a bordered inset card with a soft shadow; never redraw it. Search: CourtListener docket 5:22-cv-06947 (N.D. Cal.) (real page to be collected)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'docket' of `Ep05Newsprint`. Highlighter sweep over the real case caption: HDMI Licensing Administrator, Inc. v. Availink Inc."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05Newsprint-docket out/ep05/1130_docket.mp4 --gl=angle --props='{"durationInFrames":207,"scene":"docket"}'
```

### Beat 1150 — `Ep05Newsprint` (court_finding)
- **Archetype / engine:** `ARCHETYPE_NEWSPRINT_EDITORIAL`
- **Spoken line:** "Call it a monopoly or don't. The judge found the contract had not hurt competition."
- **Timing:** 08:58.4 to 09:03.7, 5.3 s, **160 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Highlighter sweep over the court's finding that the contract did not harm competition.
- **On-screen labels (max 4):** "court finding"
- **Source line under the title:** Constantine Cannon / HDMI LA statement on the ruling; court order (real page to be collected)
- **Reference-sourcing flag:** this beat shows a real page or message. Collect the real one, crop it, and lay it in as a bordered inset card with a soft shadow; never redraw it. Search: Constantine Cannon / HDMI LA statement on the ruling; court order (real page to be collected)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'finding' of `Ep05Newsprint`. Highlighter sweep over the court's finding that the contract did not harm competition."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05Newsprint-finding out/ep05/1150_court_finding.mp4 --gl=angle --props='{"durationInFrames":160,"scene":"finding"}'
```

### Beat 1170 — `Ep05CounterCard` (fourteen_million)
- **Archetype / engine:** `ARCHETYPE_CASH_BURN_COUNTER`
- **Spoken line:** "A week before the trial, Availink agreed to pay fourteen million dollars."
- **Timing:** 09:08.3 to 09:13.4, 5.0 s, **151 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Counter card: $14,000,000 ticks up.
- **On-screen labels (max 4):** "$14,000,000"
- **Source line under the title:** HDMI LA statement; Constantine Cannon
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'fourteen' of `Ep05CounterCard`. Counter card: $14,000,000 ticks up."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05CounterCard-fourteen out/ep05/1170_fourteen_million.mp4 --gl=angle --props='{"durationInFrames":151,"scene":"fourteen"}'
```

### Beat 1210 — `Ep05WallBricks` (wall_bricks)
- **Archetype / engine:** `bit-list-reveal`
- **Spoken line:** "The wall was everything around it: the patents, the name, the lock, and a court that upheld the contract."
- **Timing:** 09:27.1 to 09:34.4, 7.3 s, **220 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Four bricks stack into the wall in turn: patents, name, lock, court.
- **On-screen labels (max 4):** "patents"; "name"; "lock"; "court"
- **Source line under the title:** none (metaphor, no data)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build `Ep05WallBricks`. Four bricks stack into the wall in turn: patents, name, lock, court."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05WallBricks out/ep05/1210_wall_bricks.mp4 --gl=angle --props='{"durationInFrames":220,"scene":""}'
```

### Beat 1300 — `Ep05QuoteCard` (amd_quote_a)
- **Archetype / engine:** `variable-speed-typewriter`
- **Spoken line:** "They worked on it for months. In early twenty twenty-four, an A M D engineer wrote: "The H D M I Forum has rejected our proposal unfortunately."
- **Timing:** 10:19.0 to 10:28.8, 9.8 s, **294 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Typewriter reveal of the engineer's message: 'The HDMI Forum has rejected our proposal unfortunately.'
- **On-screen labels (max 4):** "quote card"; "AMD engineer, 2024"
- **Source line under the title:** The Register, 2 March 2024 (message to be shown as a card of the real text)
- **Reference-sourcing flag:** this beat shows a real page or message. Collect the real one, crop it, and lay it in as a bordered inset card with a soft shadow; never redraw it. Search: The Register, 2 March 2024 (message to be shown as a card of the real text)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'quote_a' of `Ep05QuoteCard`. Typewriter reveal of the engineer's message: 'The HDMI Forum has rejected our proposal unfortunately.'"
- **Render command:**
```bash
npx remotion render src/index.ts Ep05QuoteCard-quote-a out/ep05/1300_amd_quote_a.mp4 --gl=angle --props='{"durationInFrames":294,"scene":"quote_a"}'
```

### Beat 1310 — `Ep05QuoteCard` (amd_quote_b)
- **Archetype / engine:** `variable-speed-typewriter`
- **Spoken line:** "At this time an open source H D M I two point one implementation is not possible without running afoul of the H D M I Forum requirements.""
- **Timing:** 10:28.8 to 10:37.6, 8.9 s, **266 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Typewriter reveal continues: 'At this time an open source HDMI 2.1 implementation is not possible without running afoul of the HDMI Forum requirements.'
- **On-screen labels (max 4):** "quote card"; "AMD engineer, 2024"
- **Source line under the title:** The Register, 2 March 2024
- **Reference-sourcing flag:** this beat shows a real page or message. Collect the real one, crop it, and lay it in as a bordered inset card with a soft shadow; never redraw it. Search: The Register, 2 March 2024
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'quote_b' of `Ep05QuoteCard`. Typewriter reveal continues: 'At this time an open source HDMI 2.1 implementation is not possible without running afoul of the HDMI Forum requirements.'"
- **Render command:**
```bash
npx remotion render src/index.ts Ep05QuoteCard-quote-b out/ep05/1310_amd_quote_b.mp4 --gl=angle --props='{"durationInFrames":266,"scene":"quote_b"}'
```

### Beat 1320 — `Ep05SplitCompare` (four_k_lost)
- **Archetype / engine:** `ARCHETYPE_SPLIT_SCREEN_COMPARISON`
- **Spoken line:** "So on Linux, with an A M D card, the best picture over H D M I is off the table."
- **Timing:** 10:37.6 to 10:44.0, 6.4 s, **192 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Card: the best picture over HDMI on Linux with an AMD card gets a cross.
- **On-screen labels (max 4):** "HDMI on Linux with AMD"; "no"
- **Source line under the title:** The Register; Phoronix; Tom's Hardware
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'four_k_lost' of `Ep05SplitCompare`. Card: the best picture over HDMI on Linux with an AMD card gets a cross."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05SplitCompare-four-k-lost out/ep05/1320_four_k_lost.mp4 --gl=angle --props='{"durationInFrames":192,"scene":"four_k_lost"}'
```

### Beat 1330 — `Ep05SplitCompare` (four_k_ratio)
- **Archetype / engine:** `ARCHETYPE_SPLIT_SCREEN_COMPARISON`
- **Spoken line:** "No four-K at a hundred and twenty frames a second."
- **Timing:** 10:44.0 to 10:47.8, 3.8 s, **115 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Card: the cross stays and a big '4K · 120' lands beneath it.
- **On-screen labels (max 4):** "HDMI on Linux with AMD"; "4K · 120"
- **Source line under the title:** The Register; Phoronix; Tom's Hardware
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build scene 'four_k' of `Ep05SplitCompare`. Card: the cross stays and a big '4K · 120' lands beneath it."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05SplitCompare-four-k out/ep05/1330_four_k_ratio.mp4 --gl=angle --props='{"durationInFrames":115,"scene":"four_k"}'
```

### Beat 1440 — `Ep05PortalTunnel` (portal_tunnel)
- **Archetype / engine:** `ARCHETYPE_INFINITE_PORTAL_TUNNEL`
- **Spoken line:** "Nobody ever voted on the plug behind your TV. Nobody has ever seen the bill. The question isn't what it costs. It's who else has a lock on something you never noticed you were using."
- **Timing:** 11:21.4 to 11:33.5, 12.1 s, **362 frames**. Reveal sequence follows the sentences; the last element holds for 1 s.
- **What is drawn:** Zoom out from the TV port through a tunnel of ports on every device in a house.
- **On-screen labels (max 4):** "none"
- **Source line under the title:** none (metaphor, no data)
- **Signature-cinematic scheduling:** continuous zoom-out with harmonic wobble; reach the wall-of-ports wide shot on the final sentence and hold it for the last second.
- **Upstream feeder stills (Batch 1):** 2070_feeder_01.png (corridor plate)
- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.
- **Prompt:** "use best graphic motions practises and guidelines from top performing graphics. follow best industry-standard guidelines and quality and visualisations. Build `Ep05PortalTunnel`. Zoom out from the TV port through a tunnel of ports on every device in a house."
- **Render command:**
```bash
npx remotion render src/index.ts Ep05PortalTunnel out/ep05/1440_portal_tunnel.mp4 --gl=angle --props='{"durationInFrames":362,"scene":""}'
```

---

## Real-world inserts to collect before rendering

| Beat | What to collect | Where |
| :---: | :--- | :--- |
| 200 | seven names | hdmi.org (founders press release) |
| 290 | backers studios | hdmi.org press release; Wikipedia: HDMI |
| 300 | backers cable | hdmi.org press release; Wikipedia: HDMI |
| 650 | logo rules | HDMI Adopted Trademark and Logo Usage Guidelines, rev. May 3, 2022, s.1.1.1 (real page to be collected) |
| 1130 | docket | CourtListener docket 5:22-cv-06947 (N.D. Cal.) (real page to be collected) |
| 1150 | court finding | Constantine Cannon / HDMI LA statement on the ruling; court order (real page to be collected) |
| 1300 | amd quote a | The Register, 2 March 2024 (message to be shown as a card of the real text) |
| 1310 | amd quote b | The Register, 2 March 2024 |
