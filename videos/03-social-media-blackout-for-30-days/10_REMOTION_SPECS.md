# Phase 10: Batch 3 — Remotion Graphics Specifications
## Episode 03: Social Media Blackout for 30 Days

> **Instructions**: Standalone asset generation deliverable. Production specifications, React component architectures, props interfaces, and headless render commands for code-driven motion graphics (`newsroom-chart-animations`, `map-explainer`, `3d-flyover`, `remotion-bits`, and signature cinematics).
>
> **MANDATORY ENGINE RULES:**
> 1. **Theme-Lock Mandate:** 100% of Remotion code MUST inherit the episode's established color tokens (Cardstock `#0c0e12`, Surface `#161920`, Text `#f3f4f6`, Deficit Red `#dc2626`, Profit/Recovery Green `#10b981`, Demurrage Amber `#f59e0b`, Grid Slate `#334155`).
> 2. **Audio-Synchronized Frame Durations:** Every component duration in frames ($F$) snaps exactly to spoken voiceover timing ($F = \text{round}(D \times 30)$). Zero timing drift.
> 3. **Editorial Newsroom & Dynamic Cinematics:** Deploys signature high-energy cinematics (Archetype 7: Infinite Recursive Zoom Tunnel, Archetype 8: Rapid Staccato Whip-Zoom Montage) alongside evidence-led newsroom waterfalls and geospatial maps.
> 4. **Standard Quality Clauses:** Every specification includes verbatim: `"use best graphic motions practises and guidelines from top performing graphics"` and `"follow best industry-standard guidelines and quality and visualisations"`.

---

## 1. Batch 3 Sanity Check Audit Block

```text
======================================================================
PHASE 10 SANITY CHECK AUDIT BLOCK (BATCH 3: REMOTION GRAPHICS)
----------------------------------------------------------------------
Total Remotion Components      : 29 components
Master Canvas Resolution       : 1920×1080 (16:9 Landscape)
Target Frame Rate              : 30 fps (Broadcast Standard)
Total Rendered Frames          : 4050 frames (135.0s)
Theme Lock Verification        : 100% Locked to Episode 03 Palette
Specialized Skill Mapping      :
  - newsroom-chart-animations  : 14 components (Evidence-Led Charts & Ledgers)
  - remotion-bits              : 9 components (Kinetic Badges, Timers, HUDs)
  - map-explainer              : 3 components (2D Geospatial Vector Routes)
  - 3d-flyover                 : 1 component (CesiumJS Aerial Port Flyover)
  - cinematic-signature        : 2 components (Infinite Zoom Tunnel & Whip Montage)
======================================================================
STATUS: ALL GATES PASS (Exit Code 0)
```

---

## 2. Remotion Asset Inventory Table

| Beat # | Component Name | Specialized Skill Archetype | Resolution & FPS | Frames (Duration) | Visual Purpose & Data Hierarchy |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **002** | `HypotheticalScenarioWatermark` | `remotion-bits / dynamic-badge` | 1920×1080 @ 30fps | 84f (2.8s) | Translucent dark pill badge sliding in from top-right with p... |
| **003** | `CountdownLedgerDrain` | `remotion-bits / bit-basic-counter` | 1920×1080 @ 30fps | 126f (4.2s) | Kinetic 30-Day countdown clock ticking down rapidly in stacc... |
| **005** | `DemurrageAccumulationCurve` | `newsroom-chart-animations / exponential-curve` | 1920×1080 @ 30fps | 240f (8.0s) | Evidence-bearing newsroom chart plotting daily compounding d... |
| **007** | `Pier400AerialFlyoverMap` | `3d-flyover / CesiumJS-Remotion` | 1920×1080 @ 30fps | 210f (7.0s) | Cinematic 3D aerial flyover sweeping over Port of Los Angele... |
| **015** | `CalendarDemurrageStomp` | `remotion-bits / kinetic-stomp` | 1920×1080 @ 30fps | 129f (4.3s) | Kinetic calendar flipping forward day by day from Day 1 to D... |
| **024** | `ContainerGridlockMetric3D` | `newsroom-chart-animations / isometric-stack-counter` | 1920×1080 @ 30fps | 135f (4.5s) | Isometric 3D container stacking visualization. Volumetric bl... |
| **025** | `InfiniteContainerZoomTunnel` | `cinematic / infinite-portal-tunnel (Archetype 7)` | 1920×1080 @ 30fps | 240f (8.0s) | Infinite recursive Droste drone zoom flight through an endle... |
| **028** | `TimeRewindWhipMontage` | `cinematic / whip-zoom-montage (Archetype 8)` | 1920×1080 @ 30fps | 240f (8.0s) | High-velocity reverse timeline whip-zoom montage. 6 rapid 5-... |
| **035** | `GlobalFeedBlackoutMap` | `map-explainer / global-node-blackout` | 1920×1080 @ 30fps | 114f (3.8s) | 2D global vector map plate with glowing cyan server ASN node... |
| **038** | `DailyDispatchWaterfall` | `newsroom-chart-animations / waterfall-bar` | 1920×1080 @ 30fps | 129f (4.3s) | Newsroom waterfall bar chart displaying daily e-commerce war... |
| **043** | `AdAuctionBlackoutGraphic` | `remotion-bits / kinetic-diagram` | 1920×1080 @ 30fps | 135f (4.5s) | Minimalist geometric illustration of an automated programmat... |
| **046** | `SerumUnitCostStack` | `newsroom-chart-animations / stacked-unit-cost` | 1920×1080 @ 30fps | 141f (4.7s) | Animated building-block unit cost stack. Small green rectang... |
| **047** | `PaidAdAcquisitionImpact` | `newsroom-chart-animations / scale-impact-reveal` | 1920×1080 @ 30fps | 240f (8.0s) | High-impact editorial chart. Above the tiny $2.35 physical p... |
| **051** | `Day07LedgerCheckpoint` | `newsroom-chart-animations / balance-sheet-card` | 1920×1080 @ 30fps | 165f (5.5s) | Newsroom balance sheet checkpoint card at 168 hours elapsed.... |
| **052** | `FrozenWorkingCapitalCascade` | `newsroom-chart-animations / expanding-deficit-rows` | 1920×1080 @ 30fps | 240f (8.0s) | Expanding financial ledger rows revealing secondary liquidit... |
| **059** | `CourierCashDepletionMeter` | `remotion-bits / circular-gauge-drain` | 1920×1080 @ 30fps | 135f (4.5s) | Kinetic circular cash depletion gauge. Needle rotates rapidl... |
| **060** | `GlobalCashDisruptionMap` | `map-explainer / supply-chain-routes` | 1920×1080 @ 30fps | 135f (4.5s) | 2D animated vector trade map tracing commercial trade lines ... |
| **079** | `WireSettlementDelayCurve` | `newsroom-chart-animations / threshold-crossover` | 1920×1080 @ 30fps | 135f (4.5s) | Line chart displaying the 6-day clearing horizon for physica... |
| **080** | `Day16LedgerCheckpoint` | `newsroom-chart-animations / balance-sheet-card` | 1920×1080 @ 30fps | 120f (4.0s) | Day 16 Financial Scorecard. Elapsed: 384 Hours. Trapped Bank... |
| **090** | `LienAccelerationStampCard` | `remotion-bits / stamp-impact-hud` | 1920×1080 @ 30fps | 135f (4.5s) | High-impact document HUD. UCC-1 filing documents animate ont... |
| **097** | `ChassisDeadZoneClusterMap` | `map-explainer / regional-cluster-density` | 1920×1080 @ 30fps | 135f (4.5s) | Regional 2D geographic cluster map of the Southern Californi... |
| **104** | `Day24LedgerCheckpoint` | `newsroom-chart-animations / dashboard-grid` | 1920×1080 @ 30fps | 165f (5.5s) | Full-screen newsroom crisis dashboard at 576 hours elapsed. ... |
| **105** | `UnpaidCarrierDebtWaterfall` | `newsroom-chart-animations / waterfall-debt` | 1920×1080 @ 30fps | 135f (4.5s) | Newsroom debt waterfall displaying $64 million in accumulate... |
| **119** | `FinalBalanceSheetAutopsy` | `newsroom-chart-animations / split-comparison-card` | 1920×1080 @ 30fps | 240f (8.0s) | Forensic balance sheet autopsy comparing Book Value vs Salva... |
| **120** | `NegativeEquityWaterfall` | `newsroom-chart-animations / negative-equity-waterfall` | 1920×1080 @ 30fps | 240f (8.0s) | Negative equity mathematical breakdown. Inventory Value ($8.... |
| **125** | `NotificationExplosionHUD` | `remotion-bits / badge-multiplier` | 1920×1080 @ 30fps | 135f (4.5s) | Kinetic smartphone notification HUD. Red circular badge coun... |
| **129** | `AttentionReboundVsBusinessDeaths` | `newsroom-chart-animations / divergent-bar-chart` | 1920×1080 @ 30fps | 141f (4.7s) | Divergent dual-metric newsroom chart. Top bar (Bright Cyan):... |
| **131** | `AuctionHammerCrushContainer` | `remotion-bits / vector-allegory` | 1920×1080 @ 30fps | 135f (4.5s) | Minimalist high-concept vector motion graphic. A stylized di... |
| **133** | `FinanceCraftEndCard` | `remotion-bits / channel-end-card` | 1920×1080 @ 30fps | 150f (5.0s) | Branded FinanceCraft outro screen. Emerald accent lines, cha... |

---

## 3. Component Architecture & Headless Render Commands

### Beat 002 — `HypotheticalScenarioWatermark` (remotion-bits / dynamic-badge)
- **Visual Role**: Translucent dark pill badge sliding in from top-right with pulsing crimson warning beacon and amber typographic label: 'HYPOTHETICAL SCENARIO — POV MACRO SIMULATION'. Below badge, small monospaced status indicator: 'GLOBAL BGP FEEDS: OFFLINE'.
- **Component File**: `remotion/src/scenes/episode03/HypotheticalScenarioWatermark.tsx`
- **Composition ID**: `HypotheticalScenarioWatermark`
- **Timing**: `00:04.2 - 00:07.0` | Duration: `2.8s` | Exact Frames: `84` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts HypotheticalScenarioWatermark ../videos/03-social-media-blackout-for-30-days/assets/remotion/002_HypotheticalScenarioWatermark.mp4 --gl=angle --props='{"durationInFrames":84,"fps":30}'
```

### Beat 003 — `CountdownLedgerDrain` (remotion-bits / bit-basic-counter)
- **Visual Role**: Kinetic 30-Day countdown clock ticking down rapidly in staccato frame increments alongside an animated commercial bank account balance meter draining from $420,000 toward $0. Warning red outline glow on zero-crossing.
- **Component File**: `remotion/src/scenes/episode03/CountdownLedgerDrain.tsx`
- **Composition ID**: `CountdownLedgerDrain`
- **Timing**: `00:07.0 - 00:11.2` | Duration: `4.2s` | Exact Frames: `126` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts CountdownLedgerDrain ../videos/03-social-media-blackout-for-30-days/assets/remotion/003_CountdownLedgerDrain.mp4 --gl=angle --props='{"durationInFrames":126,"fps":30}'
```

### Beat 005 — `DemurrageAccumulationCurve` (newsroom-chart-animations / exponential-curve)
- **Visual Role**: Evidence-bearing newsroom chart plotting daily compounding demurrage fees at $275/container/day across 40 containers ($11,000/day curve) climbing vertically against a dead-flat incoming revenue line at $0. Sourced under title card: 'Source: Port of LA Tariff Item 1000'.
- **Component File**: `remotion/src/scenes/episode03/DemurrageAccumulationCurve.tsx`
- **Composition ID**: `DemurrageAccumulationCurve`
- **Timing**: `00:14.8 - 00:20.5` | Duration: `5.7s` | Exact Frames: `171` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts DemurrageAccumulationCurve ../videos/03-social-media-blackout-for-30-days/assets/remotion/005_DemurrageAccumulationCurve.mp4 --gl=angle --props='{"durationInFrames":171,"fps":30}'
```

### Beat 007 — `Pier400AerialFlyoverMap` (3d-flyover / CesiumJS-Remotion)
- **Visual Role**: Cinematic 3D aerial flyover sweeping over Port of Los Angeles Pier 400 Berth 406. Chaikin curve smoothing over container berths, terminal crane tracks, and rail spurs. Animated callout pins drop onto refrigerated container stacks with yellow warning rings.
- **Component File**: `remotion/src/scenes/episode03/Pier400AerialFlyoverMap.tsx`
- **Composition ID**: `Pier400AerialFlyoverMap`
- **Timing**: `00:23.5 - 00:28.0` | Duration: `4.5s` | Exact Frames: `135` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts Pier400AerialFlyoverMap ../videos/03-social-media-blackout-for-30-days/assets/remotion/007_Pier400AerialFlyoverMap.mp4 --gl=angle --props='{"durationInFrames":135,"fps":30}'
```

### Beat 015 — `CalendarDemurrageStomp` (remotion-bits / kinetic-stomp)
- **Visual Role**: Kinetic calendar flipping forward day by day from Day 1 to Day 21. Each sunrise triggers a heavy red rubber-stamp impact animation: '+$275 DEMURRAGE ACCRUED' with cumulative fine counter multiplying in bold tabular figures.
- **Component File**: `remotion/src/scenes/episode03/CalendarDemurrageStomp.tsx`
- **Composition ID**: `CalendarDemurrageStomp`
- **Timing**: `00:55.5 - 00:59.8` | Duration: `4.3s` | Exact Frames: `129` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts CalendarDemurrageStomp ../videos/03-social-media-blackout-for-30-days/assets/remotion/015_CalendarDemurrageStomp.mp4 --gl=angle --props='{"durationInFrames":129,"fps":30}'
```

### Beat 024 — `ContainerGridlockMetric3D` (newsroom-chart-animations / isometric-stack-counter)
- **Visual Role**: Isometric 3D container stacking visualization. Volumetric block counter spinning up from 0 to 42,000 units. Half of the container grid turns desaturated charcoal gray with glowing red lock icons indicating trapped digital bills of lading.
- **Component File**: `remotion/src/scenes/episode03/ContainerGridlockMetric3D.tsx`
- **Composition ID**: `ContainerGridlockMetric3D`
- **Timing**: `01:32.0 - 01:36.5` | Duration: `4.5s` | Exact Frames: `135` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts ContainerGridlockMetric3D ../videos/03-social-media-blackout-for-30-days/assets/remotion/024_ContainerGridlockMetric3D.mp4 --gl=angle --props='{"durationInFrames":135,"fps":30}'
```

### Beat 025 — `InfiniteContainerZoomTunnel` (cinematic / infinite-portal-tunnel (Archetype 7))
- **Visual Role**: Infinite recursive Droste drone zoom flight through an endless corridor of 42,000 paralyzed shipping containers. Uses continuous U-model mathematics, 2.39:1 anamorphic letterbox bars, harmonic camera oscillation, and volumetric harbor fog with zero seam pop.
- **Component File**: `remotion/src/scenes/episode03/InfiniteContainerZoomTunnel.tsx`
- **Composition ID**: `InfiniteContainerZoomTunnel`
- **Timing**: `01:36.5 - 01:40.5` | Duration: `4.0s` | Exact Frames: `120` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts InfiniteContainerZoomTunnel ../videos/03-social-media-blackout-for-30-days/assets/remotion/025_InfiniteContainerZoomTunnel.mp4 --gl=angle --props='{"durationInFrames":120,"fps":30}'
```

### Beat 028 — `TimeRewindWhipMontage` (cinematic / whip-zoom-montage (Archetype 8))
- **Visual Role**: High-velocity reverse timeline whip-zoom montage. 6 rapid 5-frame staccato cuts with 300° shutter angle motion blur and 215% -> 100% scale punch, rewinding time in reverse from the locked harbor gates back to the Monday morning dispatch desk.
- **Component File**: `remotion/src/scenes/episode03/TimeRewindWhipMontage.tsx`
- **Composition ID**: `TimeRewindWhipMontage`
- **Timing**: `01:48.0 - 01:52.5` | Duration: `4.5s` | Exact Frames: `135` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts TimeRewindWhipMontage ../videos/03-social-media-blackout-for-30-days/assets/remotion/028_TimeRewindWhipMontage.mp4 --gl=angle --props='{"durationInFrames":135,"fps":30}'
```

### Beat 035 — `GlobalFeedBlackoutMap` (map-explainer / global-node-blackout)
- **Visual Role**: 2D global vector map plate with glowing cyan server ASN nodes in Slough, Ashburn, Singapore, and Dublin. Simultaneously, glowing pulse lines snap and extinguish into deep charcoal black. Status indicator switches: 'TRAFFIC: 0.00 GB/S'.
- **Component File**: `remotion/src/scenes/episode03/GlobalFeedBlackoutMap.tsx`
- **Composition ID**: `GlobalFeedBlackoutMap`
- **Timing**: `02:18.2 - 02:22.0` | Duration: `3.8s` | Exact Frames: `114` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts GlobalFeedBlackoutMap ../videos/03-social-media-blackout-for-30-days/assets/remotion/035_GlobalFeedBlackoutMap.mp4 --gl=angle --props='{"durationInFrames":114,"fps":30}'
```

### Beat 038 — `DailyDispatchWaterfall` (newsroom-chart-animations / waterfall-bar)
- **Visual Role**: Newsroom waterfall bar chart displaying daily e-commerce warehouse order dispatches. Plunges from 10,400 orders on Monday morning down to 12 orders by Tuesday noon, flatlining at 0. Clean editorial layout, slate background, crimson deficit bars.
- **Component File**: `remotion/src/scenes/episode03/DailyDispatchWaterfall.tsx`
- **Composition ID**: `DailyDispatchWaterfall`
- **Timing**: `02:30.2 - 02:34.5` | Duration: `4.3s` | Exact Frames: `129` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts DailyDispatchWaterfall ../videos/03-social-media-blackout-for-30-days/assets/remotion/038_DailyDispatchWaterfall.mp4 --gl=angle --props='{"durationInFrames":129,"fps":30}'
```

### Beat 043 — `AdAuctionBlackoutGraphic` (remotion-bits / kinetic-diagram)
- **Visual Role**: Minimalist geometric illustration of an automated programmatic ad bidding engine. Bidding paddles lower abruptly, algorithmic auction ticker freezes at $0.00, and fiber optic data arrows disconnect, visually isolating the merchant from online attention.
- **Component File**: `remotion/src/scenes/episode03/AdAuctionBlackoutGraphic.tsx`
- **Composition ID**: `AdAuctionBlackoutGraphic`
- **Timing**: `02:51.5 - 02:56.0` | Duration: `4.5s` | Exact Frames: `135` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts AdAuctionBlackoutGraphic ../videos/03-social-media-blackout-for-30-days/assets/remotion/043_AdAuctionBlackoutGraphic.mp4 --gl=angle --props='{"durationInFrames":135,"fps":30}'
```

### Beat 046 — `SerumUnitCostStack` (newsroom-chart-animations / stacked-unit-cost)
- **Visual Role**: Animated building-block unit cost stack. Small green rectangular blocks animate into place: Bottle ($1.10) + Serum ($0.40) + Ocean Freight ($0.85) = $2.35 Total Physical Cost. Clean white labels with dimension lines.
- **Component File**: `remotion/src/scenes/episode03/SerumUnitCostStack.tsx`
- **Composition ID**: `SerumUnitCostStack`
- **Timing**: `03:04.8 - 03:09.5` | Duration: `4.7s` | Exact Frames: `141` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts SerumUnitCostStack ../videos/03-social-media-blackout-for-30-days/assets/remotion/046_SerumUnitCostStack.mp4 --gl=angle --props='{"durationInFrames":141,"fps":30}'
```

### Beat 047 — `PaidAdAcquisitionImpact` (newsroom-chart-animations / scale-impact-reveal)
- **Visual Role**: High-impact editorial chart. Above the tiny $2.35 physical product cost bar, an enormous, towering crimson block ($42.00 Paid Ad Acquisition Click) slams down from the top edge, crushing the proportion of the chart. Bold typography: 'AD TAX: 94.7% OF REVENUE'.
- **Component File**: `remotion/src/scenes/episode03/PaidAdAcquisitionImpact.tsx`
- **Composition ID**: `PaidAdAcquisitionImpact`
- **Timing**: `03:09.5 - 03:15.5` | Duration: `6.0s` | Exact Frames: `180` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts PaidAdAcquisitionImpact ../videos/03-social-media-blackout-for-30-days/assets/remotion/047_PaidAdAcquisitionImpact.mp4 --gl=angle --props='{"durationInFrames":180,"fps":30}'
```

### Beat 051 — `Day07LedgerCheckpoint` (newsroom-chart-animations / balance-sheet-card)
- **Visual Role**: Newsroom balance sheet checkpoint card at 168 hours elapsed. Tabular data cards animate: Dispatches (-91%), Storage Revenue ($0 Frozen), Trapped Pallets (4,200), and Daily Cash Burn (-$12,600/day). Emerald baseline vs crimson burn.
- **Component File**: `remotion/src/scenes/episode03/Day07LedgerCheckpoint.tsx`
- **Composition ID**: `Day07LedgerCheckpoint`
- **Timing**: `03:28.5 - 03:34.0` | Duration: `5.5s` | Exact Frames: `165` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts Day07LedgerCheckpoint ../videos/03-social-media-blackout-for-30-days/assets/remotion/051_Day07LedgerCheckpoint.mp4 --gl=angle --props='{"durationInFrames":165,"fps":30}'
```

### Beat 052 — `FrozenWorkingCapitalCascade` (newsroom-chart-animations / expanding-deficit-rows)
- **Visual Role**: Expanding financial ledger rows revealing secondary liquidity shocks: Accounts Receivable ($1.8M Frozen), Unpaid Packaging Invoices ($320,000), and Merchant Cash Advance Daily Sweeps ($8,400 debited from empty accounts).
- **Component File**: `remotion/src/scenes/episode03/FrozenWorkingCapitalCascade.tsx`
- **Composition ID**: `FrozenWorkingCapitalCascade`
- **Timing**: `03:34.0 - 03:40.0` | Duration: `6.0s` | Exact Frames: `180` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts FrozenWorkingCapitalCascade ../videos/03-social-media-blackout-for-30-days/assets/remotion/052_FrozenWorkingCapitalCascade.mp4 --gl=angle --props='{"durationInFrames":180,"fps":30}'
```

### Beat 059 — `CourierCashDepletionMeter` (remotion-bits / circular-gauge-drain)
- **Visual Role**: Kinetic circular cash depletion gauge. Needle rotates rapidly counter-clockwise as cash reserves drop from $85,000 to $0. Bicycle courier icons speed across the bottom of the screen, consuming $1,800/hour in manual cash refund delivery fees.
- **Component File**: `remotion/src/scenes/episode03/CourierCashDepletionMeter.tsx`
- **Composition ID**: `CourierCashDepletionMeter`
- **Timing**: `04:05.0 - 04:09.5` | Duration: `4.5s` | Exact Frames: `135` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts CourierCashDepletionMeter ../videos/03-social-media-blackout-for-30-days/assets/remotion/059_CourierCashDepletionMeter.mp4 --gl=angle --props='{"durationInFrames":135,"fps":30}'
```

### Beat 060 — `GlobalCashDisruptionMap` (map-explainer / supply-chain-routes)
- **Visual Role**: 2D animated vector trade map tracing commercial trade lines from California ports to Mombasa and Nairobi, Kenya. Trade nodes pulse red and sever into broken dashed lines, illustrating global working capital contagion.
- **Component File**: `remotion/src/scenes/episode03/GlobalCashDisruptionMap.tsx`
- **Composition ID**: `GlobalCashDisruptionMap`
- **Timing**: `04:09.5 - 04:14.0` | Duration: `4.5s` | Exact Frames: `135` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts GlobalCashDisruptionMap ../videos/03-social-media-blackout-for-30-days/assets/remotion/060_GlobalCashDisruptionMap.mp4 --gl=angle --props='{"durationInFrames":135,"fps":30}'
```

### Beat 079 — `WireSettlementDelayCurve` (newsroom-chart-animations / threshold-crossover)
- **Visual Role**: Line chart displaying the 6-day clearing horizon for physical paper cashier's checks. Plotted against a descending cash runway line, intersecting the red default threshold at Day 14. Pulsing red alert beacon at point of insolvency.
- **Component File**: `remotion/src/scenes/episode03/WireSettlementDelayCurve.tsx`
- **Composition ID**: `WireSettlementDelayCurve`
- **Timing**: `05:31.5 - 05:36.0` | Duration: `4.5s` | Exact Frames: `135` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts WireSettlementDelayCurve ../videos/03-social-media-blackout-for-30-days/assets/remotion/079_WireSettlementDelayCurve.mp4 --gl=angle --props='{"durationInFrames":135,"fps":30}'
```

### Beat 080 — `Day16LedgerCheckpoint` (newsroom-chart-animations / balance-sheet-card)
- **Visual Role**: Day 16 Financial Scorecard. Elapsed: 384 Hours. Trapped Bank Deposits ($2.4M), Failed Wire Verification Fees ($8,400), Incurred Port Demurrage ($18,200), Cumulative Cash Burn (-$184,000). High-contrast forensic typography.
- **Component File**: `remotion/src/scenes/episode03/Day16LedgerCheckpoint.tsx`
- **Composition ID**: `Day16LedgerCheckpoint`
- **Timing**: `05:36.0 - 05:40.0` | Duration: `4.0s` | Exact Frames: `120` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts Day16LedgerCheckpoint ../videos/03-social-media-blackout-for-30-days/assets/remotion/080_Day16LedgerCheckpoint.mp4 --gl=angle --props='{"durationInFrames":120,"fps":30}'
```

### Beat 090 — `LienAccelerationStampCard` (remotion-bits / stamp-impact-hud)
- **Visual Role**: High-impact document HUD. UCC-1 filing documents animate onto screen while an aggressive red ink rubber stamp slams down: 'DEFAULT ACCELERATION — BLANKET LIEN ENFORCED'. Crackle sound cue sync and particle dust effect.
- **Component File**: `remotion/src/scenes/episode03/LienAccelerationStampCard.tsx`
- **Composition ID**: `LienAccelerationStampCard`
- **Timing**: `06:19.0 - 06:23.5` | Duration: `4.5s` | Exact Frames: `135` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts LienAccelerationStampCard ../videos/03-social-media-blackout-for-30-days/assets/remotion/090_LienAccelerationStampCard.mp4 --gl=angle --props='{"durationInFrames":135,"fps":30}'
```

### Beat 097 — `ChassisDeadZoneClusterMap` (map-explainer / regional-cluster-density)
- **Visual Role**: Regional 2D geographic cluster map of the Southern California logistics corridor (Long Beach to Ontario/Inland Empire). 14,000 red marker pins cluster into dense traffic choke points around rail ramps and storage yards.
- **Component File**: `remotion/src/scenes/episode03/ChassisDeadZoneClusterMap.tsx`
- **Composition ID**: `ChassisDeadZoneClusterMap`
- **Timing**: `06:49.0 - 06:53.5` | Duration: `4.5s` | Exact Frames: `135` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts ChassisDeadZoneClusterMap ../videos/03-social-media-blackout-for-30-days/assets/remotion/097_ChassisDeadZoneClusterMap.mp4 --gl=angle --props='{"durationInFrames":135,"fps":30}'
```

### Beat 104 — `Day24LedgerCheckpoint` (newsroom-chart-animations / dashboard-grid)
- **Visual Role**: Full-screen newsroom crisis dashboard at 576 hours elapsed. Metric cards reveal: Abandoned Cargo Claims (1,840), Detained Chassis (14,200), and Active Court Injunctions (412). Red warning border glows around grid.
- **Component File**: `remotion/src/scenes/episode03/Day24LedgerCheckpoint.tsx`
- **Composition ID**: `Day24LedgerCheckpoint`
- **Timing**: `07:21.0 - 07:26.5` | Duration: `5.5s` | Exact Frames: `165` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts Day24LedgerCheckpoint ../videos/03-social-media-blackout-for-30-days/assets/remotion/104_Day24LedgerCheckpoint.mp4 --gl=angle --props='{"durationInFrames":165,"fps":30}'
```

### Beat 105 — `UnpaidCarrierDebtWaterfall` (newsroom-chart-animations / waterfall-debt)
- **Visual Role**: Newsroom debt waterfall displaying $64 million in accumulated, unpaid ocean carrier detention bills, chassis lease charges, and terminal gate fees. Deep charcoal background, warning-red horizontal bars.
- **Component File**: `remotion/src/scenes/episode03/UnpaidCarrierDebtWaterfall.tsx`
- **Composition ID**: `UnpaidCarrierDebtWaterfall`
- **Timing**: `07:26.5 - 07:31.0` | Duration: `4.5s` | Exact Frames: `135` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts UnpaidCarrierDebtWaterfall ../videos/03-social-media-blackout-for-30-days/assets/remotion/105_UnpaidCarrierDebtWaterfall.mp4 --gl=angle --props='{"durationInFrames":135,"fps":30}'
```

### Beat 119 — `FinalBalanceSheetAutopsy` (newsroom-chart-animations / split-comparison-card)
- **Visual Role**: Forensic balance sheet autopsy comparing Book Value vs Salvage Value. Left column: $8.4M Stored Consumer Inventory (White). Right column: $0.00 Net Realizable Value (Dark Red). Stamped: 'WORTHLESS COLLATERAL'.
- **Component File**: `remotion/src/scenes/episode03/FinalBalanceSheetAutopsy.tsx`
- **Composition ID**: `FinalBalanceSheetAutopsy`
- **Timing**: `08:25.0 - 08:29.5` | Duration: `4.5s` | Exact Frames: `135` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts FinalBalanceSheetAutopsy ../videos/03-social-media-blackout-for-30-days/assets/remotion/119_FinalBalanceSheetAutopsy.mp4 --gl=angle --props='{"durationInFrames":135,"fps":30}'
```

### Beat 120 — `NegativeEquityWaterfall` (newsroom-chart-animations / negative-equity-waterfall)
- **Visual Role**: Negative equity mathematical breakdown. Inventory Value ($8.4M) minus Demurrage Accrual (-$4.8M), Freight Invoices (-$2.2M), and Legal Receivership Costs (-$1.4M) = -$0.00 Net Recovery. Demonstrates why cargo is abandoned.
- **Component File**: `remotion/src/scenes/episode03/NegativeEquityWaterfall.tsx`
- **Composition ID**: `NegativeEquityWaterfall`
- **Timing**: `08:29.5 - 08:35.5` | Duration: `6.0s` | Exact Frames: `180` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts NegativeEquityWaterfall ../videos/03-social-media-blackout-for-30-days/assets/remotion/120_NegativeEquityWaterfall.mp4 --gl=angle --props='{"durationInFrames":180,"fps":30}'
```

### Beat 125 — `NotificationExplosionHUD` (remotion-bits / badge-multiplier)
- **Visual Role**: Kinetic smartphone notification HUD. Red circular badge counters explode upward exponentially from 0 to 99+ to 1,420 to 18,900 likes and comments in a rapid, dizzying burst across an app interface mockup.
- **Component File**: `remotion/src/scenes/episode03/NotificationExplosionHUD.tsx`
- **Composition ID**: `NotificationExplosionHUD`
- **Timing**: `08:52.5 - 08:57.0` | Duration: `4.5s` | Exact Frames: `135` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts NotificationExplosionHUD ../videos/03-social-media-blackout-for-30-days/assets/remotion/125_NotificationExplosionHUD.mp4 --gl=angle --props='{"durationInFrames":135,"fps":30}'
```

### Beat 129 — `AttentionReboundVsBusinessDeaths` (newsroom-chart-animations / divergent-bar-chart)
- **Visual Role**: Divergent dual-metric newsroom chart. Top bar (Bright Cyan): Online User Attention rebounds to 100% within 4 hours. Bottom bar (Blood Red): 6,000 Small DTC Brands permanently insolvent and liquidated. Editorial annotation: 'The Asymmetric Recovery'.
- **Component File**: `remotion/src/scenes/episode03/AttentionReboundVsBusinessDeaths.tsx`
- **Composition ID**: `AttentionReboundVsBusinessDeaths`
- **Timing**: `09:10.5 - 09:15.2` | Duration: `4.7s` | Exact Frames: `141` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts AttentionReboundVsBusinessDeaths ../videos/03-social-media-blackout-for-30-days/assets/remotion/129_AttentionReboundVsBusinessDeaths.mp4 --gl=angle --props='{"durationInFrames":141,"fps":30}'
```

### Beat 131 — `AuctionHammerCrushContainer` (remotion-bits / vector-allegory)
- **Visual Role**: Minimalist high-concept vector motion graphic. A stylized digital ad auction gavel strikes downward, shattering an intermodal ocean container into dust particles, revealing the fragile dependence of physical supply chains on digital ads.
- **Component File**: `remotion/src/scenes/episode03/AuctionHammerCrushContainer.tsx`
- **Composition ID**: `AuctionHammerCrushContainer`
- **Timing**: `09:19.5 - 09:24.0` | Duration: `4.5s` | Exact Frames: `135` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts AuctionHammerCrushContainer ../videos/03-social-media-blackout-for-30-days/assets/remotion/131_AuctionHammerCrushContainer.mp4 --gl=angle --props='{"durationInFrames":135,"fps":30}'
```

### Beat 133 — `FinanceCraftEndCard` (remotion-bits / channel-end-card)
- **Visual Role**: Branded FinanceCraft outro screen. Emerald accent lines, channel logo badge, animated subscribe button with bell chime indicator, and two dynamic video thumbnail placeholder cards. 1920x1080, 30fps.
- **Component File**: `remotion/src/scenes/episode03/FinanceCraftEndCard.tsx`
- **Composition ID**: `FinanceCraftEndCard`
- **Timing**: `09:29.0 - 09:34.0` | Duration: `5.0s` | Exact Frames: `150` frames at 30fps
- **Color Tokens**: Background: `#0c0e12`, Card: `#161920`, Accent Deficit: `#dc2626`, Accent Profit: `#10b981`, Accent Warning: `#f59e0b`, Neutral Text: `#f3f4f6`
- **Quality Directives**: Use best graphic motions practises and guidelines from top performing graphics. Follow best industry-standard guidelines and quality and visualisations.
- **Headless Render Command**:
```bash
npx remotion render src/index.ts FinanceCraftEndCard ../videos/03-social-media-blackout-for-30-days/assets/remotion/133_FinanceCraftEndCard.mp4 --gl=angle --props='{"durationInFrames":150,"fps":30}'
```
