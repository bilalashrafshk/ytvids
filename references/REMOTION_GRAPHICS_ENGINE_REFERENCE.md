# Remotion Motion Graphics Engine Reference — Master Control Plane

> **The Single Source of Truth for Automated Video Production Engines, Script Beat Planners, and Motion Designers.**  
> When the beat generator plans a graphic or an agent generates Remotion code, it reads this reference to select the exact visual archetype, leverage pre-built library components, enforce newsroom evidence standards, and construct production-ready code.

---

## Table of Contents

1. [Architecture, Code Storage & Preflight Standards](#1-architecture-code-storage--preflight-standards)
2. [Master Archetype Catalog (25 Archetypes)](#2-master-archetype-catalog-25-archetypes)
3. [Geographic & 3D Aerial Engines: Technical Specifications](#3-geographic--3d-aerial-engines-technical-specifications)
   - [3A. CesiumJS 3D Flyover Engine (Landscape & City Modes)](#3a-cesiumjs-3d-flyover-engine-landscape--city-modes)
   - [3B. MapTiler 2D Map Explainer Engine (Vector & GeoJSON Hybrid)](#3b-maptiler-2d-map-explainer-engine-vector--geojson-hybrid)
4. [Newsroom Chart Animations (Data-Evidence Layer & Standards)](#4-newsroom-chart-animations-data-evidence-layer--standards)
5. [Remotion-Bits Pre-Built Library (All 42 Components)](#5-remotion-bits-pre-built-library-all-42-components)
6. [Universal Engine Behavioral Rules](#6-universal-engine-behavioral-rules)
7. [Comprehensive File Registry & Ground Truth Mappings](#7-comprehensive-file-registry--ground-truth-mappings)

---

## 1. Architecture, Code Storage & Preflight Standards

### The Hybrid Blueprint Architecture
When integrating Remotion graphics with automated video pipelines, **never embed raw 300+ line TSX files directly inside script planning markdown**.

#### Why Pure Markdown Embedding Fails:
1. **Context Window Exhaustion**: Pasting multiple full TSX files consumes 30,000+ prompt tokens.
2. **No Compiler / Syntax Safety**: TypeScript in markdown cannot be type-checked, linted, or previewed.
3. **Stale Assets**: Hardcoded asset paths inside markdown fall out of sync with real workspace assets.

#### The Standard:
- **Permanent Source Files**: Keep verified `.tsx` compositions in `src/compositions/` or `remotion/src/components/`. These serve as production ground truth.
- **Engine Reference Sheet (this file)**: Contains Archetype Descriptors, Narrative Triggers, Math/Easing Formulas, Prompt Templates, and Library Lookups.

### Dependency Stack & Installation

```bash
# Core Remotion Engine
npm install remotion @remotion/cli react react-dom

# Pre-Built Bits & Color Theory
npm install remotion-bits culori

# Geographic & 3D Terrain Systems
npm install cesium @maptiler/sdk maplibre-gl
npm install d3 d3-geo topojson-client
npm install --save-dev @types/d3 @types/topojson-client

# Launch Studio for Preview & QA
npx remotion studio
```

### Preflight Verification Checklist
Before generating or revising any Remotion graphic:
1. **Locate Project Root**: Verify `package.json`, composition entry point (`Root.tsx`), and dependencies.
2. **Confirm Dependencies**: Verify `remotion`, React, TypeScript, and graphic libraries.
3. **Validate Target Output**: Confirm aspect ratio (16:9 widescreen `1920x1080` vs. 9:16 vertical `1080x1920`), target FPS (30 or 60 fps), and exact duration in frames.
4. **Preflight Type-Check**: Run `npx tsc --noEmit` or `npm run build` before rendering to catch type/syntax defects.

### Duration & Pacing Specification — NO Artificial 7.0s Hard Cap
- **Dynamic Sizing to Spoken Narration:** Remotion motion graphics and continuous cinematics (3D terrain flyovers, recursive zoom tunnels, whip montages, multi-step waterfalls, bullwhip physics waves) have **NO rigid 7.0s hard cap**.
- **The Pacing Rule:** Unlike a static drawing (which stagnates after 6s), Remotion cinematics remain captivating and engaging for **$4.0\text{s} - 12.0\text{s}+$** because the visual field is continuously evolving, orbiting, panning, and revealing new data points.
- **The 70/30 Motion Grammar & Mandatory Hold Law:** Every Remotion composition must finish its core movement within $65\% - 75\%$ of the total frame count, dedicating the final $25\% - 35\%$ ($\ge 0.5\text{s} - 1.5\text{s}$, or 15–45 frames) to a stable completed reading state while narration concludes.

### Cross-Batch Upstream Asset Pipeline Coordination
Remotion cinematics frequently ingest assets generated upstream by the AI image generation workflow (Batch 1: Stills) or real-world insets (Batch 3):
- **Whip-Zoom Montages (`ARCHETYPE_WHIP_ZOOM_MONTAGE`):** The beat planner must specify and output the 8–15 input photo plates into Batch 1 so Remotion can ingest and sequence them.
- **Infinite Zoom Tunnels (`ARCHETYPE_INFINITE_PORTAL_TUNNEL`):** The beat planner must generate a high-resolution corridor/portal plate with clear vanishing perspective in Batch 1.
- **3D Orbital Flywheels (`ARCHETYPE_3D_ORBITAL_FLYWHEEL`):** The beat planner must generate a transparent cutout subject portrait PNG in Batch 1.
- **Document Highlighter Sweeps (`ARCHETYPE_NEWSPRINT_EDITORIAL`):** The beat planner must generate or source the document plate in Batch 1/3.

### Studio-Adjustable Editorial Timeline Contract
Never hide editorial timing inside hardcoded frame literals scattered across JSX. Maintain a central, typed timing object:

- `establish`: Initial context, orientation, axes, grid, and camera framing
- `camera`: Camera pan, zoom, orbit, or focal tracking changes
- `elementReveals`: Staggered drawing of lines, rivers, routes, historical series, or node cards
- `boundaries`: Border strokes, thresholds, dividing lines, or margin limits
- `fills`: Country fills, bar columns, area fills, or highlighted regions
- `labels`: Direct data values, place names, dates, or source callouts
- `hold`: Stable final completed state for $\ge 0.5\text{s}–1.5\text{s}$ while narration finishes

---

## 2. Master Archetype Catalog (25 Archetypes)

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ BUILT & TESTED COMPOSITIONS:                                                                           │
│ • Globe Target Lock              • Topographic Basin Map          • 3D Aerial Terrain Flyover (Cesium) │
│ • 2D Vector Map Explainer        • 9:16 3D Orbital Flywheel       • Archival Newsprint Editorial       │
│ • Infinite Drone Zoom Tunnel     • Whip-Zoom Montage              • Financial Waterfall Restructuring  │
│ • Economic Flywheel CAC Loop     • Capital Destruction Card       • Supply Chain Bullwhip Wave         │
│ • Supply Chain Cascade           • Cash Burn Odometer Counter     • Unit Margin Waterfall Chart        │
│ • Crisis & Recall Hit Card       • Churn vs Retention Curve       • Forensic Audit Trail Ledger        │
│ • LTV/CAC Formula Breakdown      • Documentary Subscribe Frame    • Comparative Market Cap Bar Chart   │
│ • Pull-Forward Demand Curve      • Revenue Growth Area Chart      • Multi-Metric Key Collapse          │
├────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ READY-TO-BUILD BLUEPRINTS (Validated Math & Prompt Templates):                                         │
│ • Evidence Board / Conspiracy Wall   • Chronological Timeline Scroll   • Split-Screen A/B Comparison    │
│ • Rubber Stamp Forensic Reveal       • 3D Cube Business Model Pivot                                    │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### Archetype 1: 3D Orthographic Globe Spin & Target Lock (`ARCHETYPE_GLOBE_TARGET_LOCK`)

**Narrative Triggers:** Geopolitical conflicts, international real estate acquisitions, cross-border supply chains, global macroeconomic trends.  
*"Deep in South Asia...", "Across global supply chains...", "From Beijing to Washington..."*

**Visual DNA:** `d3.geoOrthographic()`, `clipAngle(90)`, deep space navy base (`#02040a`), landmass fill (`#152238`), border stroke (`#2a4365`). Target coordinate highlight in amber/crimson (`#e63946`). Real-time coordinate ticker, sweeping radar scan line, dual expanding pulse rings.

**Core Math:**
```typescript
const rotateX = interpolate(frame, [0, 80], [-70, -74], { easing: Easing.bezier(0.16, 1, 0.3, 1) });
const rotateY = interpolate(frame, [0, 80], [10, -31], { easing: Easing.bezier(0.16, 1, 0.3, 1) });
projection.rotate([rotateX, rotateY, 0]);

const pinScale = spring({ frame: frame - 55, fps, config: { damping: 12, stiffness: 140 } });
const ringRadius = interpolate((frame % 30) / 30, [0, 1], [10, 48]);
const ringOpacity = interpolate((frame % 30) / 30, [0, 1], [0.8, 0]);
```

**Production Prompt Template:**
```
[TASK: GLOBE TARGET LOCK]
- Target Region: {REGION_NAME} ({LAT}, {LON})
- Rotation Window: Frames 0–80; Total Duration: 150 frames @ 30fps
- Engine: d3-geo orthographic projection with clipAngle(90) strictly enabled
- Visual Elements: Highlighted SVG polygon, coordinate readout, spring-loaded target pin, dual pulsing radar rings
- Behavioral Rule: Rule 1 text discipline strictly enforced (NO unsolicited HUD badges or cut labels)
```

**Working File:** [`GlobeHighlightPunjab.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/GlobeHighlightPunjab.tsx) | Rendered: `globe_highlight_punjab.mp4`

---

### Archetype 2: 2D Investigative Topographical Basin & River Explainer (`ARCHETYPE_TOPOGRAPHIC_MAP`)

**Narrative Triggers:** Territorial water disputes, river basin treaties, military bottlenecks, border security corridors.  
*"The five rivers that feed this basin...", "Controlling the mountain pass..."*

**Visual DNA:** `d3.geoMercator()`, scale range 4800–7500. Multi-layer GeoJSON elevation contours at 0.08 opacity. Flowing neon river paths (`strokeDashoffset`), pulsing river head glow, spotlight mask on contested province, dark investigative field (`#06090e`).

**Core Math:**
```typescript
const riverProgress = interpolate(frame - startDelay, [0, 45], [0, 1], {
  extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  easing: Easing.bezier(0.25, 0.1, 0.25, 1.0),
});
const strokeDashoffset = pathLength * (1 - riverProgress);
const mapScale = interpolate(frame, [0, 210], [7100, 7500], { easing: Easing.quad });
```

**Production Prompt Template:**
```
[TASK: TOPOGRAPHIC BASIN EXPLAINER]
- Focus Coordinates: [{LON}, {LAT}], Target Scale: {SCALE}
- Rivers / Corridors: {LIST_OF_PATHS}
- Motion: Staggered river strokeDashoffset draw over 45 frames; glowing pill callouts at river terminals
- Background: GeoJSON elevation contours (0.08 opacity) on dark investigative cardstock (#06090e)
- Behavioral Rule: Labels must be clean uppercase display text; NO decorative fluff
```

**Working File:** [`PunjabInvestigativeMap.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/PunjabInvestigativeMap.tsx) | Rendered: `punjab_investigative_map.mp4`

---

### Archetype 3: Cinematic 3D Aerial Terrain Flyover (`ARCHETYPE_3D_FLYOVER_TERRAIN`)

**Narrative Triggers:** Establishing geographical context, remote manufacturing sites, borderlands, expansive agricultural terrain, corporate facilities, city architecture.  
*"In Wood County, Ohio, a solar manufacturer quietly finalized a parcel purchase...", "Flying low over the desert facility..."*

**Visual DNA:** Photorealistic 3D terrain draped with satellite imagery via CesiumJS. High-altitude establishing shot smoothly banking into low-altitude inspection pass. Smooth Chaikin curved flight path with natural roll bank into turns.

**Core Math & Kinematics:**
```typescript
// 3 passes of Chaikin corner cutting turns discrete GPS points into continuous swerve
function chaikin(points: Pt3[]): Pt3[] { ... }

// Walk curve by arc length for constant ground speed
const targetDistance = totalDistance * (frame / durationFrames);

// Look ahead 0.4s to compute bearing & roll
const lookAheadDist = targetDistance + speed * AIM_AHEAD_SECONDS;
const roll = (nextBearing - currentBearing) * BANKING_FACTOR;
```

**Production Prompt Template:**
```
[TASK: 3D AERIAL TERRAIN FLYOVER]
- Skill: 3d-flyover
- Mode: {landscape (MapTiler mesh + satellite) | city (Google Photorealistic 3D Tiles)}
- Waypoints: [{LON_1, LAT_1, ALT_1}, {LON_2, LAT_2, ALT_2}, {LON_3, LAT_3, ALT_3}]
- Camera: 3 passes of Chaikin smoothing; constant arc-length walking speed; bank roll into turns
- Duration: {DURATION_FRAMES} frames @ 30fps
- Headless Render Rules: viewer.useDefaultRenderLoop = false, gate with delayRender on tilesLoaded, --gl=angle
```

**Working File:** [`OhioFarmlandFlyover.tsx`](file:///Users/bilalashraf/YT%20Videos/remotion/src/components/OhioFarmlandFlyover.tsx)

---

### Archetype 4: Interactive 2D Vector Map Explainer (`ARCHETYPE_2D_MAP_EXPLAINER`)

**Narrative Triggers:** Country-by-country geopolitical spread, international sanctions, supply route dependencies, multi-state regulatory cascades.  
*"As the pipeline crossed into Georgia, tension spiked...", "Three countries control this flow..."*

**Visual DNA:** MapTiler SDK (`MapStyle.BASIC` or satellite) rendered into WebGL canvas. Custom GeoJSON vector overlays. Electric river/route head pulse. Borders draw with constant timing (2.5s). Countries bloom in fill color with spring overshoot (`[0, 0.6, 1] -> [0, 1.25, 1]`). High-contrast React HTML overlay labels positioned via `map.project()`.

**Core Architecture & Knobs:**
```typescript
// Fixed map plate pattern for moving shots to eliminate tile jitter
const BORDER_DURATION_SEC = 2.5;
const bloomScale = interpolate(progress, [0, 0.6, 1.0], [0, 1.25, 1.0], { easing: Easing.bezier(0.16, 1, 0.3, 1) });
const labelPos = map.project([lon, lat]);
```

**Production Prompt Template:**
```
[TASK: 2D VECTOR MAP EXPLAINER]
- Skill: map-explainer
- Provider: MapTiler SDK (@maptiler/sdk) with MapStyle.BASIC
- Vector Layers: Custom GeoJSON for subject route; MapTiler Planet for boundaries
- Sequence: (1) River/Route draws with electric head, (2) Country border draws over 2.5s, (3) Country fill blooms with 1.25x overshoot, (4) HTML label rises
- Camera: Fixed map plate pattern for panning (prevents raster resampling jitter)
```

**Documentation Reference:** [`.agents/skills/map-explainer/SKILL.md`](file:///Users/bilalashraf/YT%20Videos/.agents/skills/map-explainer/SKILL.md)

---

### Archetype 5: 9:16 Vertical 3D Orbital Flywheel Short (`ARCHETYPE_3D_ORBITAL_FLYWHEEL`)

**Narrative Triggers:** High-retention vertical reels, compounding business model flywheels, platform lock-in loops, tech ecosystem architecture.  
*"The flywheel that made Elon unstoppable...", "How Amazon's loop prints billions..."*

**Visual DNA:** 9:16 vertical (`1080x1920`). Dark atmospheric space/city backdrop. Elliptical 3D orbit (`rotateX(65deg)`). Pinned subject PNG cutout at center. Back orbit arc rendered behind cutout; front arc and orbiting node cards rendered in front. Frosted glass title pill strictly above hairline ($y < 220\text{px}$).

**Core Math:**
```typescript
const introScale = spring({ frame, fps, config: { damping: 15, stiffness: 110 } });
const orbitAngle = (frame * 0.035) + (nodeIndex * ((Math.PI * 2) / numNodes));
const radiusX = 360;
const radiusY = 120;
const x = Math.cos(orbitAngle) * radiusX;
const y = Math.sin(orbitAngle) * radiusY;
const zIndex = Math.sin(orbitAngle) > 0 ? 30 : 10;
```

**Production Prompt Template:**
```
[TASK: 9:16 3D ORBITAL FLYWHEEL SHORT]
- Subject Cutout: {CUTOUT_PATH}
- Orbit Nodes: [{TITLE_1, ICON_1}, {TITLE_2, ICON_2}, {TITLE_3, ICON_3}, {TITLE_4, ICON_4}]
- Motion: Punch-in spring (stiffness: 110, damping: 15); orbital speed: 0.035 rad/frame; counter-rotate node labels
- Safety Rule: Frosted glass title pill (backdrop-filter: blur(12px)) positioned strictly above y=160px
```

**Working File:** [`ElonMuskFlywheelShort.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/ElonMuskFlywheelShort.tsx) | Rendered: `elon_musk_flywheel_short.mp4`

---

### Archetype 6: StanzMedia Archival Newsprint Editorial Reel (`ARCHETYPE_NEWSPRINT_EDITORIAL`)

**Narrative Triggers:** Investigative leaks, corporate scandals, court filings, SEC whistleblower reports, breaking press exposés.  
*"A leaked memo revealed...", "The Wall Street Journal confirmed the fraud..."*

**Visual DNA:** 9:16 or 16:9. Crumpled paper texture (`mix-blend-mode: multiply`) on tactile cardstock (`#f1f1ee`). Halftone 16px dot matrix grid. Highlighting marker sweep (`skewX(-6deg)`, bright highlighter yellow `#ffe600`). Hand-drawn red pencil sketch circles around incriminating statistics. Subtle organic camera sway.

**Core Math:**
```typescript
const highlightWidth = interpolate(frame - startFrame, [0, 24], [0, 100], {
  extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  easing: Easing.bezier(0.25, 0.1, 0.25, 1.0),
});
const paperSway = Math.sin(frame * 0.04) * 1.5;
```

**Production Prompt Template:**
```
[TASK: NEWSPRINT EDITORIAL SPLIT-SCREEN]
- Headline Text: "{HEADLINE_TEXT}"
- Target Highlight Phrase: "{KEY_PHRASE}"
- Evidence Target Stat: "{STAT_NUMBER}" (receives red pencil sketch circle at frame 32)
- Textures: Tactile paper overlay, 16px halftone dot grid, duotone monochrome portrait
- Motion: Marker wipe over 24 frames; camera slow drift (amplitude: 1.5deg)
```

**Working File:** [`NewsprintEditorialShort.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/NewsprintEditorialShort.tsx) | Rendered: `newsprint_editorial_short.mp4`

---

### Archetype 7: Infinite Recursive Drone Zoom Tunnel (`ARCHETYPE_INFINITE_PORTAL_TUNNEL`)

**Narrative Triggers:** Mind-bending recursive loops, algorithmic echo chambers, unstoppable downward spirals, psychological traps.  
*"The rabbit hole goes deeper...", "A recursive trap with no exit..."*

**Visual DNA:** 16:9 cinematic widescreen (`1920x1080`). Continuous elliptical doorway aperture mask. 2.39:1 anamorphic letterbox bars. Volumetric central fog and atmospheric vignette. Zero visible seam or layer pop across loop boundaries.

**Core Math (Continuous U Model — Zero Seam Pop):**
```typescript
const loopProgress = (frame % LOOP_FRAMES) / LOOP_FRAMES;
const u = (2 - layerIndex) + loopProgress;
const layerScale = Math.pow(SCALE_RATIO, u);

// Continuous Iris Aperture:
const hole = u <= -1.0 ? 0 : u < 0.0 ? 0.5 * (1 - Math.cos(Math.PI * (u + 1.0))) : 1.0;

// Continuous Opacity Window:
const opacity = u <= -2.0 ? 0 : u < -1.0 ? 0.5 * (1 - Math.cos(Math.PI * (u + 2.0))) :
                u <= 2.0 ? 1.0 : u < 3.0 ? 0.5 * (1 + Math.cos(Math.PI * (u - 2.0))) : 0;

// Exact integer harmonic wobble (no discontinuity at loop seam):
const wobbleX = A_x * Math.sin((2 * Math.PI * k_x * frame) / TOTAL_FRAMES);
```

**Production Prompt Template:**
```
[TASK: INFINITE DRONE ZOOM TUNNEL]
- Portal Asset: {CORRIDOR_IMAGE_PATH}
- Vanishing Origin: [{ORIGIN_X}, {ORIGIN_Y}]; Scale Ratio R: {SCALE_RATIO}
- Cycle: 75 frames per doorway; 225 frames total (exact 3x loop)
- Strict Rule: Use continuous u model for scale, opacity, and iris mask; NO discrete boolean layer switches
- Rule 1 Enforcement: Clean cinematic footage; ZERO telemetry, HUD badges, or speed text
```

**Working File:** [`InfiniteDroneZoomTunnel.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/InfiniteDroneZoomTunnel.tsx) | Rendered: `infinite_drone_zoom_tunnel.mp4`

---

### Archetype 8: Rapid Staccato Whip-Zoom Montage (`ARCHETYPE_WHIP_ZOOM_MONTAGE`)

**Narrative Triggers:** High-energy montage sequences, rapid chronological recaps, multi-city travel cuts, explosive momentum shifts.  
*"In a matter of weeks, everything changed...", "Across cities, factories, and boardrooms..."*

**Visual DNA:** 16:9 or 9:16. 8–15 rapid photo cuts at exactly 3–6 frames each. Final hero shot lands and holds 60–90 frames with a slow cinematic push. Simulated $300^\circ$ shutter angle motion blur and ghosting.

**Core Math (Justin Odisho Formula):**
```typescript
const progress = clipLocalFrame / (FRAMES_PER_CLIP - 1);
const easedProgress = interpolate(progress, [0, 1], [0, 1], { easing: Easing.bezier(0.25, 0.1, 0.25, 1.0) });
const scale = interpolate(easedProgress, [0, 1], [2.15, 1.0]);

// Shutter Angle Simulation:
const blur = interpolate(progress, [0, 0.25, 0.7, 1.0], [5.5, 7.0, 2.5, 0]);
const ghosting = interpolate(progress, [0, 0.3, 0.8, 1.0], [0.35, 0.45, 0.15, 0]);
```

**Production Prompt Template:**
```
[TASK: RAPID WHIP-ZOOM MONTAGE]
- Image Sequence: [{IMAGE_1}, {IMAGE_2}, ..., {IMAGE_N}]
- Timing: 5 frames per transition; final hero image holds 90 frames
- Kinematics: Scale punch-out 215% -> 100% with cubic-bezier easing
- Optics: Dynamic blur curve peaking at 7px with radial opacity ghosting
- Rule 1 Discipline: ZERO cut numbers or text badges
```

**Working File:** [`InfiniteZoomMontage.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/InfiniteZoomMontage.tsx) | Rendered: `infinite_zoom_montage_odisho.mp4`

---

### Archetype 9: Financial Waterfall & Corporate Restructuring Card (`ARCHETYPE_FINANCIAL_WATERFALL`)

**Narrative Triggers:** Emergency cost-cutting, mass layoffs, budget slashings, margin collapses, corporate restructuring.  
*"Slashing $800M from the budget...", "The cuts started at the executive suite..."*

**Visual DNA:** Warm cardstock field (`#f6f3ec`), deep charcoal typography (`#1c1917`), stark crimson negative offsets (`#dc2626`), forest green positive adjustments (`#16a34a`). Monospace values (`Space Mono`). Stepped waterfall connecting lines and animated odometer tickers.

**Core Math:**
```typescript
const displayedValue = interpolate(frame, [15, 65], [startAmount, targetAmount], { easing: Easing.bezier(0.16, 1, 0.3, 1) });
const barHeight = spring({ frame: frame - (stepIndex * 8), fps, config: { damping: 14, stiffness: 90 } });
```

**Production Prompt Template:**
```
[TASK: FINANCIAL WATERFALL CARD]
- Title: "{WATERFALL_TITLE}"
- Steps: [{LABEL: "START", VALUE: 1200}, {LABEL: "CUTS", VALUE: -800}, {LABEL: "REMAINING", VALUE: 400}]
- Color Rules: Baseline charcoal, deductions crimson (#dc2626), additions green (#16a34a)
- Animation: Odometer ticker frames 15–65; bars stagger in with 8-frame offset
- Evidence: Visible source line directly below header
```

**Working Files:** [`1080_mccarthy_axe_remotion.tsx`](file:///Users/bilalashraf/CapCut/peloton-video-proj/1080_mccarthy_axe_remotion.tsx), [`Beat1080McCarthyAxe.tsx`](file:///Users/bilalashraf/YT%20Videos/remotion/src/components/Beat1080McCarthyAxe.tsx) | Rendered: `1080_mccarthy_axe_remotion.mp4`

---

### Archetype 10: Economic Flywheel Loop Card (`ARCHETYPE_ECONOMIC_FLYWHEEL`)

**Narrative Triggers:** Compounding business loops, CAC payback mechanisms, platform network effects, subscriber retention engines.  
*"It's a self-reinforcing economic loop...", "The CAC payback engine..."*

**Visual DNA:** Tactile documentary card (`#fdfbf7`), 4 circular sequential stages with directed curved arrow arcs. Central hero metric callout with rolling animated counter. Stage status badges lighting up sequentially.

**Core Math:**
```typescript
const stageEntrance = (index: number) =>
  spring({ frame: frame - (15 + index * 18), fps, config: { damping: 14, stiffness: 100 } });
const centerCounter = interpolate(frame, [45, 110], [0, targetMetricValue], {
  extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  easing: (t) => 1 - Math.pow(1 - t, 3),
});
```

**Production Prompt Template:**
```
[TASK: ECONOMIC FLYWHEEL LOOP]
- Title: "{FLYWHEEL_TITLE}"
- Stages: [{STAGE_1}, {STAGE_2}, {STAGE_3}, {STAGE_4}]
- Center Metric: Value="{METRIC_VALUE}", Subtitle="{METRIC_SUBTITLE}"
- Motion: Stages spring in sequentially (18-frame stagger); central ticker counts up smoothly; 180 frames total @ 30fps
```

**Working Files:** [`270_cac_payback_remotion.tsx`](file:///Users/bilalashraf/CapCut/peloton-video-proj/270_cac_payback_remotion.tsx), [`Beat270CacFlywheel.tsx`](file:///Users/bilalashraf/YT%20Videos/remotion/src/components/Beat270CacFlywheel.tsx) | Rendered: `270_cac_payback_remotion.mp4`

---

### Archetype 11: Capital Destruction & Market Cap Erasure Card (`ARCHETYPE_CAPITAL_DESTRUCTION`)

**Narrative Triggers:** Catastrophic shareholder value wipeouts, market cap crashes, valuation collapses.  
*"$45 billion, wiped out in 12 months...", "The stock fell 97%..."*

**Visual DNA:** Severe minimalist layout. Hero dollar figure starts at peak valuation and rapidly tumbles downward in monospace figures. Red fill sweep washes across the card. Final state locks at flat zero or collapse trough with a stark crimson underline.

**Core Math:**
```typescript
const crashProgress = interpolate(frame, [25, 90], [0, 1], {
  extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  easing: Easing.bezier(0.2, 0.0, 0.2, 1.0),
});
const currentValuation = peakValuation * (1 - crashProgress * 0.97);
const redWashOpacity = interpolate(frame, [60, 100], [0, 0.18], { extrapolateLeft: 'clamp' });
```

**Production Prompt Template:**
```
[TASK: CAPITAL DESTRUCTION CARD]
- Peak Valuation: {PEAK_VALUATION} -> Trough Valuation: {TROUGH_VALUATION}
- Timeframe: "{TIMEFRAME_LABEL}"
- Motion: Number odometer falls rapidly frames 25–90; red distress wash expands across card; stark crimson underline stamps down
```

**Working Files:** [`100_capital_destruction_card.tsx`](file:///Users/bilalashraf/CapCut/peloton-video-proj/100_capital_destruction_card.tsx), [`Beat100CapitalDestruction.tsx`](file:///Users/bilalashraf/YT%20Videos/remotion/src/components/Beat100CapitalDestruction.tsx) | Rendered: `100_capital_destruction_card.mp4`

---

### Archetype 12: Supply Chain Bullwhip Effect & Wave Oscillation (`ARCHETYPE_BULLWHIP_PHYSICS`)

**Narrative Triggers:** Supply chain amplification, inventory whiplash, distorted demand signals, forecasting panic.  
*"A 5% shift in retail demand created a 400% explosion at the factory...", "The bullwhip cracked..."*

**Visual DNA:** Warm paper cardstock (`#f6f3ec`), mathematical coordinate grid. Traveling SVG sine wave with exponential amplitude amplification from left to right. Left wrist flick (14px subtle amplitude) expanding into a massive 240px erratic whipping tip on the right.

**Core Math:**
```typescript
const waveTime = frame * 0.18;
// 80 points sampled across horizontal span
for (let i = 0; i <= numPoints; i++) {
  const frac = i / numPoints;
  const x = startX + frac * (endX - startX);
  const amp = 14 + Math.pow(frac, 2.2) * 230; // Exponential amplification curve
  const wavePhase = waveTime - frac * 12;      // Traveling phase delay
  const y = centerY + Math.sin(wavePhase) * amp;
  points.push({ x, y });
}
```

**Production Prompt Template:**
```
[TASK: SUPPLY CHAIN BULLWHIP PHYSICS]
- Stages: Retailer (5% delta) -> Wholesaler (20%) -> Distributor (80%) -> Factory (400%)
- Physics: Traveling sine wave with exponential power curve (frac^2.2 * 230px amplitude)
- Callouts: Pinned metric badges at inflection points along the wave path
```

**Working Files:** [`480_bullwhip_physics_remotion.tsx`](file:///Users/bilalashraf/CapCut/peloton-video-proj/480_bullwhip_physics_remotion.tsx), [`Beat480BullwhipPhysics.tsx`](file:///Users/bilalashraf/YT%20Videos/remotion/src/components/Beat480BullwhipPhysics.tsx) | Rendered: `480_bullwhip_physics_remotion.mp4`

---

### Archetype 13: Supply Chain Domino Cascade Card (`ARCHETYPE_SUPPLY_CHAIN_CASCADE`)

**Narrative Triggers:** Tiered supplier shutdowns, cascading component shortages, bottleneck contagion.  
*"When one tier failed, the next collapsed within 48 hours..."*

**Visual DNA:** Horizontal or vertical cascade of card nodes. Staggered trigger lines connecting each tier. Red status alerts cascade downward with kinetic spring tipping.

**Working Files:** [`490_bullwhip_supply_chain_cascade.tsx`](file:///Users/bilalashraf/CapCut/peloton-video-proj/490_bullwhip_supply_chain_cascade.tsx), [`Beat490BullwhipCascade.tsx`](file:///Users/bilalashraf/YT%20Videos/remotion/src/components/Beat490BullwhipCascade.tsx) | Rendered: `490_bullwhip_supply_chain_cascade.mp4`

---

### Archetype 14: High-Velocity Cash Burn Odometer (`ARCHETYPE_CASH_BURN_COUNTER`)

**Narrative Triggers:** Runway evaporation, emergency charter flights, high-frequency logistics expenditure, panic spending.  
*"They were burning $100 million a month on air freight alone..."*

**Visual DNA:** Large hero odometer tallying rapid currency accumulation. Animated asset streak (e.g., cargo jet or container ship silhouette) crossing the header. Ink stamp slamming down at completion.

**Core Math:**
```typescript
const counterProgress = interpolate(frame, [20, 95], [0, 1], {
  extrapolateLeft: "clamp", extrapolateRight: "clamp",
  easing: (t) => 1 - Math.pow(1 - t, 3),
});
const currentCash = Math.round(targetCash * counterProgress);
const stampSpring = spring({ frame: frame - 105, fps, config: { damping: 12, stiffness: 160 } });
```

**Working Files:** [`590_air_freight_burn_counter.tsx`](file:///Users/bilalashraf/CapCut/peloton-video-proj/590_air_freight_burn_counter.tsx), [`Beat590AirFreightBurn.tsx`](file:///Users/bilalashraf/YT%20Videos/remotion/src/components/Beat590AirFreightBurn.tsx) | Rendered: `590_air_freight_burn_counter.mp4`

---

### Archetype 15: Unit Economics & COGS Waterfall Breakdown (`ARCHETYPE_UNIT_ECONOMICS_WATERFALL`)

**Narrative Triggers:** Hardware gross margin evaporation, price slashing vs. fixed manufacturing costs, bill-of-materials breakdown.  
*"A $700 price cut turned every single bike from a profit engine into an immediate loss..."*

**Visual DNA:** Baseline at $y=560\text{px}$. Staggered green/red stacked delta columns with connecting dashed rules. Monospace currency tags.

**Working Files:** [`780_unit_margin_waterfall_remotion.tsx`](file:///Users/bilalashraf/CapCut/peloton-video-proj/780_unit_margin_waterfall_remotion.tsx), [`Beat780UnitMarginWaterfall.tsx`](file:///Users/bilalashraf/YT%20Videos/remotion/src/components/Beat780UnitMarginWaterfall.tsx) | Rendered: `780_unit_margin_waterfall_remotion.mp4`

---

### Archetype 16: Multi-Factor Financial Crisis & Product Recall Hit (`ARCHETYPE_CRISIS_RECALL_HIT`)

**Narrative Triggers:** Regulatory fines, product recalls, lawsuit reserves, brand collateral damage.  
*"The recall didn't just stop sales—it destroyed the balance sheet..."*

**Visual DNA:** Multi-panel forensic dossier. Incriminating quote card, financial deduction list, and red regulatory stamp.

**Working Files:** [`940_recall_financial_hit_remotion.tsx`](file:///Users/bilalashraf/CapCut/peloton-video-proj/940_recall_financial_hit_remotion.tsx), [`Beat940RecallHit.tsx`](file:///Users/bilalashraf/YT%20Videos/remotion/src/components/Beat940RecallHit.tsx) | Rendered: `940_recall_financial_hit_remotion.mp4`

---

### Archetype 17: Churn vs. Retention Exponential Decay Curve (`ARCHETYPE_CHURN_RETENTION_CURVE`)

**Narrative Triggers:** Subscription cohort decay, churn stabilization, customer lifetime value sustainability.  
*"Monthly churn stayed under 0.65%, holding customer retention above 95%..."*

**Visual DNA:** Dual metric comparison card. Animated counter dropping churn percentage downward while retention progress bar expands across the card.

**Working Files:** [`320_churn_retention_remotion.tsx`](file:///Users/bilalashraf/CapCut/peloton-video-proj/320_churn_retention_remotion.tsx), [`Beat320ChurnRetention.tsx`](file:///Users/bilalashraf/YT%20Videos/remotion/src/components/Beat320ChurnRetention.tsx) | Rendered: `320_churn_retention_remotion.mp4`

---

### Archetype 18: Evidence Board / Forensic Conspiracy Wall (`ARCHETYPE_EVIDENCE_BOARD`)

**Narrative Triggers:** Corporate fraud networks, interlocking directorates, money laundering conduits, shell company webs.  
*"Here's how the money moved...", "Every trail led back to the same parent entity..."*

**Visual DNA:** Cork/moodboard texture (`#1a1209` field). Pinned portrait cards and document snippets. Glowing red SVG thread connections drawing sequentially between nodes. Circular rubber stamp endorsements.

**Core Math:**
```typescript
const cardSpring = spring({ frame: frame - (cardIndex * 12), fps, config: { damping: 14, stiffness: 100 } });
const stringProgress = interpolate(frame - stringStartFrame, [0, 30], [0, 1], {
  extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  easing: Easing.bezier(0.25, 0.1, 0.25, 1.0),
});
const strokeDashoffset = stringLength * (1 - stringProgress);
```

**Production Prompt Template:**
```
[TASK: EVIDENCE BOARD]
- Nodes: [{ENTITY_1, IMAGE_1}, {ENTITY_2, IMAGE_2}, {ENTITY_3, IMAGE_3}]
- Connections: [{FROM: ENTITY_1, TO: ENTITY_2, LABEL: "WIRE TRANSFER $40M"}]
- Motion: Cards drop-pin with 12-frame stagger; red connecting strings draw after cards land
```

---

### Archetype 19: Chronological Timeline Scroll (`ARCHETYPE_TIMELINE_SCROLL`)

**Narrative Triggers:** Multi-year corporate histories, chronological escalation, historical retrospectives.  
*"Over the next eighteen months, three pivotal events occurred..."*

**Visual DNA:** Clean paper editorial cardstock or dark field. Continuous horizontal spine line with alternating top/bottom event cards. Large, sparse year typography.

**Core Math:**
```typescript
const panX = interpolate(frame, [0, durationFrames], [0, -totalWidth * 0.85], {
  easing: Easing.bezier(0.25, 0.1, 0.25, 1.0),
});
```

---

### Archetype 20: Split-Screen A vs B Comparison (`ARCHETYPE_SPLIT_SCREEN_COMPARISON`)

**Narrative Triggers:** Before-and-after reveals, competing corporate strategies, ideological contrasts.  
*"On the left: legacy auto. On the right: Tesla..."*

**Visual DNA:** Central vertical dividing wipe. Left and right cards with independent color palettes, metrics, and labels.

**Core Math:**
```typescript
const wipeProgress = spring({ frame, fps, config: { damping: 18, stiffness: 120 } });
const clipLeft = `polygon(0 0, ${50 * wipeProgress}% 0, ${50 * wipeProgress}% 100%, 0 100%)`;
const clipRight = `polygon(${100 - 50 * wipeProgress}% 0, 100% 0, 100% 100%, ${100 - 50 * wipeProgress}% 100%)`;
```

---

### Archetype 21: Rubber Stamp Forensic Reveal (`ARCHETYPE_RUBBER_STAMP`)

**Narrative Triggers:** Official verdicts, regulatory sanctions, SEC fraud certifications, classified declarations.  
*"The SEC issued a formal verdict: FRAUD..."*

**Visual DNA:** Document preview card. Heavy dashed or solid rectangular stamp boundary tilted $-4^\circ$ to $-8^\circ$. Ink bleed texture with particle puff on impact.

**Core Math:**
```typescript
const stampScale = spring({ frame: frame - stampFrame, fps, config: { damping: 8, stiffness: 300 } });
const stampOpacity = interpolate(frame - stampFrame, [0, 3], [0, 1], { extrapolateLeft: 'clamp' });
```

---

### Archetype 22: 3D Cube Business Model Pivot (`ARCHETYPE_3D_CUBE_PIVOT`)

**Narrative Triggers:** 4–6 pillar corporate strategies, conglomerate division breakdowns, multi-sided platforms.  
*"Their empire rests on four distinct pillars..."*

**Visual DNA:** Isometric 3D cube revolving in 3D camera space. Implemented directly via `remotion-bits` `bit-scene-3d-cube-nav`.

---

### Archetype 23: Mathematical & Ratio Formula Breakdown (`ARCHETYPE_FORMULA_RATIO_EXPLAINER`)

**Narrative Triggers:** Valuation multiples, LTV/CAC ratios, unit margin equations, algorithmic formulas.  
*"The math that broke their business model was simple: LTV divided by CAC..."*

**Visual DNA:** Tactile manila cardstock background (`#EDE5D8`), mathematical fraction rules, bold numerator/denominator metric callouts, verification stamp badge.

**Working Files:** [`LtvCacFormula.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/LtvCacFormula.tsx), [`LtvCacFormulaBits.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/LtvCacFormulaBits.tsx)

---

### Archetype 24: Forensic Audit Trail & Verification Ledger (`ARCHETYPE_AUDIT_TRAIL_LEDGER`)

**Narrative Triggers:** Security audit results, compliance checklists, forensic transaction ledgers, failed verifications.  
*"Three top firms audited the firmware—until the final test failed..."*

**Visual DNA:** Light dot grid background, sequential audit firm cards fanning in, dynamic green-to-red status badge transition (`PASSED AUDITS` $\to$ `FAILED VERIFICATION`), animated red strikethrough lines.

**Working File:** [`AuditTrail.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/AuditTrail.tsx)

---

### Archetype 25: Cinematic Documentary Endscreen / Subscribe Frame (`ARCHETYPE_SUBSCRIBE_FRAME`)

**Narrative Triggers:** Final documentary call-to-action, high-retention subscriber conversion, recommended next videos.  
*"Subscribe to FinanceCraft for forensic investigations every week..."*

**Visual DNA:** Premium paper cardstock with dot grid backing. Channel avatar with breathing pulse ring, animated cursor gliding in to trigger click state on Subscribe button, bell notification wiggle, and dual video recommendation cards.

**Core Math:**
```typescript
const cursorProgress = interpolate(frame, [30, 70], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
const easedCursor = 1 - Math.pow(1 - cursorProgress, 3);
const clickScale = frame >= 75 ? spring({ frame: frame - 75, fps, config: { damping: 10, stiffness: 220 } }) : 0;
const bellWiggle = (frame > 85 && frame < 125) ? Math.sin((frame - 85) * 0.8) * Math.exp(-(frame - 85) * 0.08) * 18 : 0;
```

**Working File:** [`SubscribeFrame.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/SubscribeFrame.tsx)

---

## 3. Geographic & 3D Aerial Engines: Technical Specifications

### 3A. CesiumJS 3D Flyover Engine (Landscape & City Modes)
*Derived from the `3d-flyover` skill.*

#### Mode Selection Matrix

| Mode | Terrain Provider | Best Use Case |
| :--- | :--- | :--- |
| `landscape` | MapTiler `terrain-quantized-mesh-v2` + `satellite-v2` | Rural parcels, farmland, rivers, mountain passes, coastlines |
| `city` | Google Photorealistic 3D Tiles | Dense urban downtowns, commercial architecture, iconic skyscrapers |

> **Critical Rule:** Do NOT use footprint polygon extrusions for city flyovers. They produce flat, untextured blocks. Use Google Photorealistic 3D Tiles.

#### Required Environment Credentials
```bash
# For landscape mode:
REMOTION_MAPTILER_KEY=your_maptiler_key_here

# For city mode:
REMOTION_GOOGLE_MAPS_API_KEY=your_google_maps_key_here
```

#### Flight Path Construction & Kinematics
1. **Control Points**: Provide sparse, meaningful `[longitude, latitude, altitude][]` waypoints. Do not hand-code dozens of noisy points.
2. **Chaikin Corner-Cutting**: Run 3 smoothing passes to transform straight chords into a natural, continuous flight swerve:
   $$Q_i = 0.75 P_i + 0.25 P_{i+1}, \quad R_i = 0.25 P_i + 0.75 P_{i+1}$$
3. **Arc-Length Parameterization**: Walk the smoothed curve by cumulative Haversine distance, ensuring ground speed remains completely constant.
4. **Natural Bank & Roll**: Aim ahead along the path ($0.4\text{s}$ forward). Derive camera roll from the rate of change of bearing ($\Delta \text{bearing}$) so the aircraft banks smoothly into turns.

#### Headless Rendering Stability
- Set `viewer.useDefaultRenderLoop = false`.
- Call `viewer.render()`, NEVER `scene.render()`.
- Set `preserveDrawingBuffer: true`.
- Settle landscape renders on `globe.tilesLoaded` and city renders on `tileset.tilesLoaded`.
- Always pass `--gl=angle` to the Remotion CLI:
```bash
npx remotion render src/index.ts OhioFarmlandFlyover out.mp4 --gl=angle --concurrency=1 --timeout=180000
```

---

### 3B. MapTiler 2D Map Explainer Engine (Vector & GeoJSON Hybrid)
*Derived from the `map-explainer` skill.*

#### Three-Layer Architecture
1. **MapTiler SDK (`@maptiler/sdk`)**: Draws basemap and planet vector layers into WebGL canvas. Default style: `MapStyle.BASIC` (or satellite for physical terrain evidence).
2. **Remotion Frame Harness**: Imperatively updates `setData` and `setPaintProperty` per frame. Settle with `map.once('idle')`.
3. **React HTML Overlay**: Country and territory labels rendered as absolute `<div>` elements positioned via `map.project([lon, lat])`.

#### Source Selection
- **MapTiler Vector**: Standard administrative boundaries, land cover, water bodies.
- **Custom GeoJSON**: Verified river paths, disputed borders, infrastructure pipelines, or elements requiring animated start-to-end reveals.
- **Hybrid**: MapTiler vector basemap with custom GeoJSON narrative layers.

#### Motion Stability Law: Fixed Map Plate Pattern
**Never call `map.jumpTo()` on every frame during camera moves.** Headless raster/vector resampling causes severe visual shimmer/jitter.  
- For static shots: Live MapTiler camera is acceptable.
- For panning/zooming shots: Render a high-resolution fixed map plate and animate via Remotion `interpolate()` transform/scale.

#### Visual Semantics & Tuning Knobs
- **Country Labels**: Uppercase display font with short accent rule divider. Placed in clear territory, never overlapping river corridors.
- **River & Route Lines**: Direct leader line with route accent color; omit redundant category words (e.g., write "INDUS", not "INDUS RIVER").
- **Infrastructure Callouts**: Italic callout directly beside site coordinate.
- **Border Draw Duration**: Constant $2.5\text{s}$ per country.
- **Fill Bloom Overshoot**: `interpolate(p, [0, 0.6, 1.0], [0, 1.25, 1.0])`.

---

## 4. Newsroom Chart Animations (Data-Evidence Layer & Standards)
*Derived from the `newsroom-chart-animations` skill.*

### Governing Editorial Principle
**Treat every chart as an evidence-bearing news document.**  
Every visible mark, axis, and label must encode data, supply context, or establish hierarchy. If removing a layer does not diminish evidence comprehension, remove it immediately.

### Anti-Patterns — NEVER DO in Newsroom Charts
- Irrelevant terrain, contours, river traces, particles, or parallax in non-geographic data charts
- Fake paper grunge, ornamental borders, dashboard chrome, or glassmorphism
- Color gradients that have no quantitative or range meaning
- Missing scale baselines, hidden units, or omitted source citations
- Accent color applied to every bar or data point (reserve accent for the ONE finding)
- Gratuitous background motion or decorative particle float
- Titles that state causal conclusions unsupported by the data

### Information Architecture Sequence (Mandatory)
```
1. Precise Title (States exact metric measured; no unproven causality)
2. Visible Descriptor & Unit (e.g., "USD in Millions", "Year-over-Year %")
3. Prominent Source Line (Positioned directly under title, NOT a hidden footer)
4. The Plot (Honest zero baseline and readable magnitude scale)
5. Sparse Axes & Dates (Essential context without wallpaper clutter)
6. Direct Annotations (Pointing directly at the anomaly or current period)
```

### Motion Grammar Sequence (Mandatory)
```
1. Establish: Title, source, unit, coordinate axes, and baseline grid
2. Reveal: Historical or comparative data in chronological sequence
3. Pause: Allow the viewer to read and anchor to the baseline
4. Introduce: Anomaly, subject company, or shock period as a distinct visual event
5. Annotate: Direct callout appears AFTER the evidence mark is readable
6. Hold: Stable completed state for >= 0.5s - 1.5s while narration finishes
```

### Chart Type Specifications
- **Bars & Columns**: Must start at zero. Flat fills only. Final record or anomaly bar must animate as an independent event.
- **Lines & Curves**: Never smooth curves in ways that invent nonexistent data points. Prefer endpoint direct labels over remote legends.
- **Timelines**: Sparse, stable year typography. Space years proportionally or explicitly disclose timescale simplification.
- **Counters & Tallies**: Derive exact figures from code data structures; never let motion blur obscure the final exact value.
- **Multi-Format Recomposition**: Never center-crop 16:9 charts to generate 9:16 vertical reels. Recompute bar widths, margins, font scales, and layout vertically using `useVideoConfig()`.

### Proven Documentary References (Newpress Reference Set)

| Channel & Video | Timestamp | Core Documentary Lesson |
| :--- | :---: | :--- |
| Search Party — *How Brazilian football hit rock bottom* | 1:06 | Stable dated ranking ledger; restrained divider rules; single pointer. |
| Christophe — *Prediction markets are a trap* | 3:41 | Establish historical distribution first; add conclusion callout second. |
| Max Fisher — *America's job market is collapsing* | 0:48 | Warm paper field; visible source directly under header; stable axis. |
| Max Fisher — *America's job market is collapsing* | 1:18 | Comparison series arrival is the visual event; zero ambient motion. |
| Johnny Harris — *1955 vs 2025, who had it better?* | 5:31 | Direct endpoint line labels completely eliminate legend-hunting. |
| Max Fisher — *China quietly saved the world last month* | 14:02 | Neutral comparison baselines + one red subject mark = instant proof. |

---

## 5. Remotion-Bits Pre-Built Library (All 42 Components)

> **Always check this catalog before building components from scratch.** These are fully typed, production-ready motion bits.

```bash
npm install remotion-bits culori
npx remotion-bits find [query]
npx remotion-bits fetch <bit-id>
```

```tsx
import {
  AnimatedText, AnimatedCounter, TypeWriter, StaggeredMotion,
  Scene3D, Step, Particles, Spawner, Behavior,
  GradientTransition, CodeBlock, useViewportRect, useCamera,
} from "remotion-bits";
```

---

### 5A. Typography & Text Animations

| Animation Name | Bit ID | Motion Mechanics | Best Documentary Use Case |
| :--- | :--- | :--- | :--- |
| **Blur In** | `bit-blur-slide-word` | Heavy gaussian blur dissolving into sharp text while sliding upward. | Chapter titles, opening video hooks, thesis claims. |
| **Character by Character** | `bit-char-by-char` | Micro-bounce pop per glyph without cursor. | Ticker symbols, forensic exhibits, technical headers. |
| **Word by Word** | `bit-word-by-word` | Rhythmic sequential word entrance without blur. | Voiceover caption synchronization, punchy statements. |
| **Slide from Left** | `bit-slide-from-left` | Smooth horizontal translation sweep with fade. | Lower-thirds, source attribution lines, subheadings. |
| **Basic Typewriter** | `basic-typewriter` | Mechanical typewriter with blinking cursor. | Archival memos, retro documents, reporting notes. |
| **Multi-Text Typewriter** | `multitext-typewriter` | Types phrase, pauses, backspaces, types replacement. | Contrasting narratives (*"Wall St expected X" $\to$ "Reality was Y"*). |
| **Variable Speed + Typos** | `variable-speed-typewriter` | Human typing simulation: typos, pauses, auto-corrections. | Leaked emails, internal Slack messages, chat logs. |
| **CLI Simulation** | `cli-simulation` | Terminal prompt (`$ `) with command typing and stdout logs. | Cyber-crime analysis, blockchain audits, database logs. |
| **Glitch In** | `bit-glitch-in` | Chromatic aberration and horizontal slice displacements. | Market crashes, fraud revelations, system panic. |
| **Glitch Cycle** | `bit-glitch-cycle` | Rapid scrambling through corrupted glyphs. | Flashing valuations, extreme market volatility. |
| **Matrix Rain** | `bit-matrix-rain` | Cascading vertical streams of glowing katakana. | Algorithmic trading, crypto backdoors, digital forensics. |

---

### 5B. Numbers & Financial Metrics

| Animation Name | Bit ID | Motion Mechanics | Best Documentary Use Case |
| :--- | :--- | :--- | :--- |
| **Animated Counter** | `bit-basic-counter` | Rolling numbers with easing, decimals, `$`, `%` tags. | Balance sheets, revenue tallies, burn rate counters. |
| **Counter + Confetti** | `bit-counter-confetti` | Rolling counter triggers celebration particle explosion. | IPO peaks, record-breaking quarters, milestone reaches. |
| **Easings Visualizer** | `bit-easings-visualizer` | Side-by-side comparison of physics animation curves. | Technical explainers, animation demonstrations. |

---

### 5C. 2.5D Layouts & Staggered Sequences

| Animation Name | Bit ID | Motion Mechanics | Best Documentary Use Case |
| :--- | :--- | :--- | :--- |
| **3D Card Stack** | `bit-card-stack` | Dense stack of cards fanning out in 3D perspective space. | Pitch decks, investor term sheets, stacked exhibits. |
| **Fracture & Reassemble** | `bit-fracture-reassemble` | Document shatters into 3D grid tiles and snaps back. | Corporate restructuring, fraud deconstructions. |
| **Grid Stagger** | `bit-grid-stagger` | Grid popping in center-outward with scale bounce. | Product feature grids, cohort comparisons, rosters. |
| **List Reveal** | `bit-list-reveal` | Vertical stack sliding into place sequentially. | Key takeaways, audit checklists, SEC infraction lists. |
| **Mosaic Reframe** | `bit-mosaic-reframe` | Image tiles dynamic re-layout and aspect morphing. | Case study dossiers, multi-angle photo evidence. |
| **Staggered Fade In** | `bit-staggered-fade-in` | Clean linear opacity and translation cascade. | Executive bullet points, clean financial summary cards. |

---

### 5D. 3D Camera & Scene Systems (`Scene3D`)

| Animation Name | Bit ID | Motion Mechanics | Best Documentary Use Case |
| :--- | :--- | :--- | :--- |
| **Basic 3D Scene** | `bit-3d-basic` | Camera sweeping between positioned 3D spatial steps. | Multi-chapter presentations, navigating document board. |
| **Cube Navigation 3D** | `bit-scene-3d-cube-nav` | Isometric 3D cube revolving to show different faces. | Comparing 4–6 pillars of a business model or division. |
| **3D Carousel** | `bit-carousel-3d` | Cylindrical revolving ring of cards with depth fade. | Product lineups, customer profiles, sequential case studies. |
| **Cursor Flyover** | `bit-cursor-flyover` | Camera glides over screenshot while mouse clicks. | SaaS software breakdowns, trading platform audits. |
| **Ken Burns Effect** | `bit-ken-burns` | Slow pan/zoom keyframes with organic camera drift. | Historical photos, newspaper clippings, founder portraits. |
| **3D Terminal** | `bit-terminal-3d` | Multiple retro CRT terminals floating in 3D perspective. | High-frequency trading breakdowns, cyber audits. |
| **Flying Through Words** | `bit-flying-through-words` | Keywords rush past camera lens along Z-axis. | High-energy montages, buzzword critique, hype cycles. |
| **Transform3D Showcase** | `bit-transform3d-showcase` | Complex matrix rotations and quaternion interpolations. | Advanced custom geometry, kinetic abstract transitions. |

---

### 5E. Particle Systems & Physics Engine

| Animation Name | Bit ID | Motion Mechanics | Best Documentary Use Case |
| :--- | :--- | :--- | :--- |
| **Fountain Burst** | `bit-particles-fountain` | Particles erupt upward like a geyser and arc under gravity. | Explosions, cash bursts, milestone celebration. |
| **Fireflies** | `bit-fireflies` | Soft glowing motes wandering randomly with soft blur. | Ambient documentary backdrops, moody noir atmospheres. |
| **Falling Snow** | `bit-particles-snow` | Gentle flakes drifting with horizontal sinusoidal sway. | Cold market environments, frozen funds, winter themes. |
| **Grid Particles** | `bit-particles-grid` | Swarm of scattered motes snapping into matrix grid. | Data assembly, network connections, system initialization. |
| **Scrolling Columns** | `bit-scrolling-columns` | Multi-column image strips scrolling with 3D parallax. | Brand showcases, review cascades, social media feeds. |

---

### 5F. Background Effects & Gradients

| Animation Name | Bit ID | Motion Mechanics | Best Documentary Use Case |
| :--- | :--- | :--- | :--- |
| **Linear Gradient** | `bit-linear-gradient` | Smooth, non-muddy morph in perceptual **Oklch** space. | Dynamic scene backdrops, mood shifts (green $\to$ red). |
| **Radial Gradient** | `bit-radial-gradient` | Pulsing circular vignette lighting with shifting center. | Spotlights on key figures, ambient glow behind charts. |
| **Conic Gradient** | `bit-conic-gradient` | 360-degree rotating angular color wheel sweep. | Radar sweeps, loading indicators, kinetic circular energy. |

---

### 5G. Code & Syntax Highlight Animations

| Animation Name | Bit ID | Motion Mechanics | Best Documentary Use Case |
| :--- | :--- | :--- | :--- |
| **Basic Code Block** | `bit-basic-code-block` | Syntax-highlighted code with progressive line reveal. | Explaining algorithms, smart contracts, API endpoints. |
| **Typing Code Block** | `bit-typing-code-block` | Code typed character-by-character with active cursor. | Developer tutorials, demonstrating exploit execution. |

---

### 5H. Full Showcases & Promo Compositions

| Composition | Bit ID | Description |
| :--- | :--- | :--- |
| **Feature Showcase** | `bit-remotion-bits-promo` | 1140-frame promotional sequence integrating typography, 3D scenes, particles, and counters. |
| **Bits Showcase** | `BitsShowcase` | In-repo interactive 4-quadrant control dashboard demonstrating TypeWriter, AnimatedCounter, StaggeredMotion, and Particles simultaneously. |

---

### 5I. Practical Pairing: Remotion Bits + FinanceCraft Aesthetic

| Documentary Requirement | Remotion Bits Component | FinanceCraft Cardstock / SVG Skin |
| :--- | :--- | :--- |
| **Document Title Entrance** | `<AnimatedText split="word" blur={[12, 0]} />` | Google Fonts (`Cinzel` / `Courier Prime`) + ink bleed drop shadows |
| **Balance Sheet Tally** | `<AnimatedCounter values={[0, 4020000000]} />` | Stamped ink styling (`#0E8A5F`) on tactile manila tag |
| **Audit Desk Camera Move** | `<Scene3D><Step ... /></Scene3D>` | Cardstock desk texture (`#F4EFEA`) with realistic drop-shadow |
| **Rubber Stamp Slam** | Spring trigger + `<Particles />` dust puff | Dashed forest-green or crimson border, tilted $-4^\circ$ |
| **Leaked Memo Reveal** | `<TypeWriter typeSpeed={2} errorRate={0.03} />` | Courier Prime monospace on legal affidavit paper stock |
| **Fraud Network Web** | `<Scene3D>` node cards + SVG strings | Cork texture, red yarn connections, polaroid frames |

---

## 6. Universal Engine Behavioral Rules

> **All code-generation agents and beat planners must follow ALL rules without exception.**

### Rule 1 — Strict Text Discipline (HIGHEST PRIORITY)
**NEVER** add decorative text, HUD badges, watermarks, speed readouts, cut counters, or ANY text NOT explicitly provided in the prompt. Visuals must be 100% clean. This is an absolute constraint set by the project owner and overrides all default LLM behavior.

### Rule 2 — Loop Continuity Law
For all looping visuals, every parameter must evaluate identically at `frame = 0` and `frame = T`. Drone wobble frequencies must be exact integer harmonics: $\omega = 2\pi k / T$. Discrete boolean checks (`if (layerIndex === 0)`) are the primary cause of loop flicker—always use continuous trigonometric window functions.

### Rule 3 — Contrast & Hair Safety
In 9:16 vertical reels featuring subject cutouts, any title card or text pill must sit on a frosted-glass backing card (`backdrop-filter: blur(12px)`) and remain strictly above the subject's hairline ($y < 220\text{px}$).

### Rule 4 — Resolution-Scale & Anchor Matching
When scaling imagery, verify perspective anchor points (`transformOrigin`). Zoom origins must strictly coincide with vanishing perspective convergence points.

### Rule 5 — Shutter Angle Fidelity
High-velocity whip pans and zooms must include simulated motion blur (`blur(5px–8px)` + opacity ghosting) to eliminate digital stepping artifacts.

### Rule 6 — Chart Data Integrity & Baseline Honesty
All chart data must be traceable to a cited source. Motion must not obscure the final exact value. Baselines must be zero unless an explicit exception is justified in the prompt.

### Rule 7 — Separation of Evidence vs. Decoration
Terrain, particles, ambient parallax, glow, and vignettes are permitted ONLY in cinematic and non-chart archetypes (1–8, 12, 18, 25). They must NEVER appear in data chart compositions.

### Rule 8 — Multi-Format Recomposition
Never center-crop 16:9 content to produce 9:16. Recompose layout, font sizes, axis density, and element positioning from scratch for each aspect ratio using `useVideoConfig()`.

### Rule 9 — Studio Controllability & Named Timeline Roles
Expose major sequence events using `<Sequence name="...">` and central typed timing contracts (`establish`, `camera`, `elementReveals`, `boundaries`, `fills`, `labels`, `hold`) so timing is visible and adjustable in Remotion Studio.

### Rule 10 — Mandatory Motion Graphics Quality Clause
Every Remotion prompt and code instruction generated by the beat planner MUST without exception include:
`"use best graphic motions practises and guidelines from top performing graphics"` and `"follow best industry-standard guidelines and quality and visualisations"`.

---

## 7. Comprehensive File Registry & Ground Truth Mappings

| Archetype / Composition | Status | Working Source File | Rendered MP4 Output | Primary Ratio |
| :--- | :---: | :--- | :--- | :---: |
| **Globe Target Lock** | ✅ Built | [`GlobeHighlightPunjab.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/GlobeHighlightPunjab.tsx) | `globe_highlight_punjab.mp4` | 16:9 |
| **Topographic Basin Map** | ✅ Built | [`PunjabInvestigativeMap.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/PunjabInvestigativeMap.tsx) | `punjab_investigative_map.mp4` | 16:9 |
| **3D Aerial Terrain Flyover** | ✅ Built | [`OhioFarmlandFlyover.tsx`](file:///Users/bilalashraf/YT%20Videos/remotion/src/components/OhioFarmlandFlyover.tsx) | `010_ohio_farmland_drone.mp4` | 16:9 |
| **9:16 3D Orbital Flywheel** | ✅ Built | [`ElonMuskFlywheelShort.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/ElonMuskFlywheelShort.tsx) | `elon_musk_flywheel_short.mp4` | 9:16 |
| **Archival Newsprint Reel** | ✅ Built | [`NewsprintEditorialShort.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/NewsprintEditorialShort.tsx) | `newsprint_editorial_short.mp4` | 9:16 / 16:9 |
| **Infinite Zoom Tunnel** | ✅ Built | [`InfiniteDroneZoomTunnel.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/InfiniteDroneZoomTunnel.tsx) | `infinite_drone_zoom_tunnel.mp4` | 16:9 |
| **Whip-Zoom Montage** | ✅ Built | [`InfiniteZoomMontage.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/InfiniteZoomMontage.tsx) | `infinite_zoom_montage_odisho.mp4` | 16:9 |
| **Financial Waterfall Axe** | ✅ Built | [`1080_mccarthy_axe_remotion.tsx`](file:///Users/bilalashraf/CapCut/peloton-video-proj/1080_mccarthy_axe_remotion.tsx) | `1080_mccarthy_axe_remotion.mp4` | 16:9 |
| **CAC Payback Flywheel** | ✅ Built | [`270_cac_payback_remotion.tsx`](file:///Users/bilalashraf/CapCut/peloton-video-proj/270_cac_payback_remotion.tsx) | `270_cac_payback_remotion.mp4` | 16:9 |
| **Capital Destruction Card** | ✅ Built | [`100_capital_destruction_card.tsx`](file:///Users/bilalashraf/CapCut/peloton-video-proj/100_capital_destruction_card.tsx) | `100_capital_destruction_card.mp4` | 16:9 |
| **Bullwhip Wave Physics** | ✅ Built | [`480_bullwhip_physics_remotion.tsx`](file:///Users/bilalashraf/CapCut/peloton-video-proj/480_bullwhip_physics_remotion.tsx) | `480_bullwhip_physics_remotion.mp4` | 16:9 |
| **Supply Chain Cascade** | ✅ Built | [`490_bullwhip_supply_chain_cascade.tsx`](file:///Users/bilalashraf/CapCut/peloton-video-proj/490_bullwhip_supply_chain_cascade.tsx) | `490_bullwhip_supply_chain_cascade.mp4` | 16:9 |
| **Air Freight Burn Counter** | ✅ Built | [`590_air_freight_burn_counter.tsx`](file:///Users/bilalashraf/CapCut/peloton-video-proj/590_air_freight_burn_counter.tsx) | `590_air_freight_burn_counter.mp4` | 16:9 |
| **Unit Margin Waterfall** | ✅ Built | [`780_unit_margin_waterfall_remotion.tsx`](file:///Users/bilalashraf/CapCut/peloton-video-proj/780_unit_margin_waterfall_remotion.tsx) | `780_unit_margin_waterfall_remotion.mp4` | 16:9 |
| **Recall Financial Hit Card** | ✅ Built | [`940_recall_financial_hit_remotion.tsx`](file:///Users/bilalashraf/CapCut/peloton-video-proj/940_recall_financial_hit_remotion.tsx) | `940_recall_financial_hit_remotion.mp4` | 16:9 |
| **Churn vs Retention Metric** | ✅ Built | [`320_churn_retention_remotion.tsx`](file:///Users/bilalashraf/CapCut/peloton-video-proj/320_churn_retention_remotion.tsx) | `320_churn_retention_remotion.mp4` | 16:9 |
| **Forensic Audit Trail** | ✅ Built | [`AuditTrail.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/AuditTrail.tsx) | — | 16:9 |
| **LTV / CAC Formula Card** | ✅ Built | [`LtvCacFormula.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/LtvCacFormula.tsx) | — | 16:9 |
| **LTV / CAC Formula Bits** | ✅ Built | [`LtvCacFormulaBits.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/LtvCacFormulaBits.tsx) | — | 16:9 |
| **Documentary Subscribe Frame** | ✅ Built | [`SubscribeFrame.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/SubscribeFrame.tsx) | — | 16:9 |
| **Market Cap Bar Chart** | ✅ Built | [`MarketCapBarChart.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/MarketCapBarChart.tsx) | — | 16:9 |
| **Pull-Forward Demand Curve** | ✅ Built | [`PullForwardDemandCurve.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/PullForwardDemandCurve.tsx) | — | 16:9 |
| **Revenue Growth Area Chart** | ✅ Built | [`RevenueGrowthChart.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/RevenueGrowthChart.tsx) | — | 16:9 |
| **Key Collapse Metrics** | ✅ Built | [`KeyCollapse.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/KeyCollapse.tsx) | — | 16:9 |
| **Heist Cash Ticker** | ✅ Built | [`HeistCounter.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/HeistCounter.tsx) | — | 16:9 |
| **Frozen Funds Alert** | ✅ Built | [`FrozenFunds.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/FrozenFunds.tsx) | — | 16:9 |
| **Final Tally Balance Sheet** | ✅ Built | [`FinalTally.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/FinalTally.tsx) | — | 16:9 |
| **Remotion-Bits Dashboard** | ✅ Built | [`BitsShowcase.tsx`](file:///Users/bilalashraf/CapCut/remotion-graphics/src/compositions/BitsShowcase.tsx) | — | 16:9 |
| **2D Vector Map Explainer** | 🔲 Skill Ready | [`.agents/skills/map-explainer/SKILL.md`](file:///Users/bilalashraf/YT%20Videos/.agents/skills/map-explainer/SKILL.md) | MapTiler SDK engine pattern | 16:9 |
| **Evidence Board Wall** | 🔲 Ready to build | Prompt template in Section 2 | — | 16:9 |
| **Timeline Scroll** | 🔲 Ready to build | Prompt template in Section 2 | — | 16:9 |
| **Split-Screen A/B** | 🔲 Ready to build | Prompt template in Section 2 | — | 16:9 |
| **Rubber Stamp Reveal** | 🔲 Ready to build | Prompt template in Section 2 | — | 16:9 / 9:16 |
| **3D Cube Pivot** | 🔲 Ready to build | Uses `bit-scene-3d-cube-nav` | — | 16:9 |
