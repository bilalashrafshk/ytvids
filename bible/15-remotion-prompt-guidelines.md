<!-- Part of the FinanceCraft Channel Bible. Index: ../FinanceCraft — Channel Bible, Asset Guide & Description.md -->

# **FinanceCraft — Remotion Prompt Guidelines**

*A standalone reference for writing effective Remotion prompts for Claude Code, distinct from and complementary to the remotion-bits component catalog already integrated into the Guided Production Document. Not yet tied to our specific channels — that integration is a separate next step.*

---

## **Two different Remotion resources, not one**

* **remotion-bits** (already in the Guided Production Document) — a library of 42 pre-built, ready-to-import components. Use this first whenever an existing component covers the beat.  
* **The Remotion skill for Claude Code** (this file) — installed via `npx skills add remotion-dev/skills`, this equips Claude Code with Remotion's actual best practices and conventions, so *custom* code it writes from scratch (when no pre-built bit fits) follows the framework properly instead of improvising. Install this alongside remotion-bits, not instead of it — one supplies ready components, the other makes bespoke code reliable when nothing off-the-shelf fits.

Community prompts for this skill are organized into four recognized categories: **Image Animation**, **Text Effects**, **UI Demos**, and **Tools & Workflows**.

---

## **The pattern that separates a working prompt from a vague one**

The single biggest difference between prompts that produce reliable results and ones that don't is specificity of technical parameters — exact frame counts (not "a few seconds"), exact hex colors (not "dark theme"), exact font names, and an explicit scene-by-scene sequence rather than one paragraph describing the whole video at once. Opening a prompt with **"use Remotion best practices"** is a common, effective convention — it's a direct cue for the coding agent to lean on the installed skill's conventions rather than reinvent them.

---

## **Technique: OCR-driven highlight reveal (Image Animation)**

For animating a real screenshot or document — directly relevant to our own real-world-asset beats:

1. Import the actual image into the project.  
2. Run OCR (the `tesseract` CLI is the community-standard tool for this) to find the pixel positions of specific words or phrases within the image.  
3. Build a composition that pads the image generously against a clean background, applies a slow, subtle zoom and a slight 3D rotation across the shot's duration, and opens on a blur that resolves to sharp focus over the first second.  
4. Once resolved, animate a highlighter sweeping across specific found words — a library like `rough.js` gives this a hand-drawn, imperfect marker look rather than a flat digital rectangle — timed to land exactly under the OCR'd word positions, sitting behind the text so it doesn't obscure it.

This is directly applicable to any `[SHOWABLE]`\-tagged beat where a real document or screenshot needs a specific phrase called out on screen, rather than the whole image sitting inert.

## **Technique: map and route animation with camera-follow (Image Animation)**

For a beat needing a real geographic path, not just a static map:

1. Build the map composition first, camera centered and zoomed appropriately on the starting location.  
2. Animate a zoom-out from the starting point while keeping it in frame, establishing geographic context before any movement begins.  
3. Animate a line tracing the route to the next point, with the camera *following the line's leading edge* rather than cutting straight to the destination — this is what makes a route feel traveled rather than teleported.  
4. For a landmark worth emphasizing at a stop along the route, animate it rendering in genuine 3D as the camera arrives, rather than just labeling a flat map pin.

Directly relevant to any `[MAP]`\-tagged beat with more than one location — a flight path, a money trail across jurisdictions, a supply chain.

## **Technique: fully detailed multi-scene sequence (Tools & Workflows / UI Demos)**

For a longer composition with several distinct beats in sequence, the most reliable prompts specify, per scene: an exact frame count and its duration in seconds, precisely what's on screen (down to specific UI elements, text content, and their entrance order), the specific animation mechanism (a spring-based scale-and-fade, a 3D perspective rotation on specific axes, a staggered reveal with named delay order between elements), and the exact transition type into and out of the scene. Color palette and typography are specified once, up front, as exact hex values and named fonts — then referenced consistently across every scene rather than re-described each time.

This level of detail is directly why the same instruction we already apply to our own Remotion beats — "very detailed, never a vague placeholder" — is the right standard: looser, more impressionistic prompts are exactly where a coding agent has to guess, and guesses are where visual inconsistency creeps in across a multi-scene composition.

## **Technique: chronological/timeline data animation (Tools & Workflows)**

For animating a real dataset across time — a sequence of dated events, a trend, a series of transactions: request an abstract, minimalist treatment of each data point (a trajectory, a fading path, a marker) rather than literal photorealistic recreation, and explicitly ask for multiple draft versions before refining one — "give me three versions, then I'll pick one and refine it" is a genuinely useful iteration pattern, since the first reasonable-looking version isn't necessarily the best structural choice for the data.

## **Technique: real-world data lookup before generating (Tools & Workflows)**

Some effective prompts have the coding agent fetch real external data before building the animation — pulling a live subscriber count or scraping a real webpage element to use as an actual data point in the composition, rather than a hardcoded placeholder. Useful for any beat where a live or frequently-changing number should reflect current reality rather than being manually re-entered each time.

---

## **One technique to adapt, not adopt as-is**

A published example builds a cinematic "CEO introduction" style treatment — dramatic pop-in typography, glitch distortion, an animated HUD panel, scanning lines — applied directly to a real, named public figure's photoreal likeness. The animation *mechanics* here are genuinely excellent reference material (spring-based scale entrances, hue-rotate glitch skew, HUD panels sliding in from off-frame, floating particle layers). The specific application — a real person's actual likeness rendered photorealistically — directly conflicts with our own rule that real people are illustrated caricatures only, never photoreal. When borrowing this pattern, apply the same animation mechanics to a locked illustrated character reference or a composite figure instead of a real person's photoreal likeness.

---

## **Practical notes worth carrying into any Remotion prompt**

* **Check for existing lockfiles before installing new dependencies** — a small note in one published prompt, worth repeating since it prevents a coding agent from silently switching package managers mid-project.  
* **Specify duration in frames, not just seconds** — Remotion's actual unit of time is frames at a set fps, and a prompt that states "150 frames / 5 seconds" removes any ambiguity about which the agent should treat as authoritative if they ever conflict.  
* **Name the transition type explicitly between every scene** — "spring animation with fade and scale, 0.95 to 1 in, 1 to 0.95 out" is specific enough to reproduce consistently across many scenes; "smooth transition" is not.  
* **Render mode matters** — if an asset needs to composite over other footage later (an overlay, a lower-third), say so explicitly and request a transparent-background export (ProRes with alpha) rather than assuming it'll be extractable after the fact.

---

## **Advanced Remotion Skills & Newsroom Graphics Engine**

This section integrates three specialized production skills into the FinanceCraft Remotion pipeline:
1. **`newsroom-chart-animations`**: Evidence-led financial data graphics, waterfalls, timelines, ledgers, and counters.
2. **`map-explainer`**: 2D geographic explainer maps, 100% vector/illustrated (`d3-geo` + GeoJSON/topojson), electric draw-heads, and sequenced regional blooms — no basemap tile fetch.
3. **`3d-flyover`**: Cinematic globe rotations (`d3.geoOrthographic()`) and 3D aerial terrain/city flyovers built from illustrated parallax art layers with Chaikin curved-path smoothing — no real-world terrain mesh or photorealistic tiles.

---

### **Skill 1: Evidence-Led Newsroom Chart & Financial Data Animations (`newsroom-chart-animations`)**

Use this skill for designing, building, reviewing, or revising evidence-bearing newsroom charts, financial waterfalls, timelines, ledgers, and counters in Remotion. Remotion governs frame-accurate React implementation; this skill governs reference research, editorial design, data integrity, and chart-specific motion.

#### 1. Preflight Verification (Before Implementation)
Complete this checklist before research, design, or writing code:
1. Locate the Remotion project root, composition entry point, package manifest, and project instructions.
2. Confirm compatible `remotion`, `react`, and `typescript` dependencies; identify Studio, type-check, still-render, and video-render commands.
3. Identify target compositions, frame rate (30fps), duration, dimensions (1920×1080 master; 1080×1920 portrait), required aspect ratios, and design tokens.
4. Run the cheapest check (`npm run build` or `npx remotion compositions`) before implementation. Record missing dependencies or render prerequisites rather than designing around them.

#### 1b. Postflight Visual Verification (After Implementation — CP-14, mandatory)
A clean type-check and a successful build only prove the code runs; they say nothing about whether the frame is legible, correctly laid out, or on-theme. Before marking any component done:
1. Render at least one representative still frame: `npx remotion still <composition-id> <output.png> --frame=<mid-point-frame>`. For components with meaningful motion (builds, reveals, camera moves), render start/mid/end frames instead of a single frame — a mid-point frame alone can miss an entrance or exit that clips or overshoots.
2. **Actually view the rendered PNG** — this is a visual check, not a file-existence check. Look at what was rendered.
3. Verify against the spec: legibility at a glance, no clipped or overlapping elements, correct Theme-Lock color tokens, and the Information Architecture build order below (title → hierarchy → annotation → sourcing).
4. If the frame doesn't match, fix the component and re-render. Do not mark a component complete off a passing build alone — "it compiled" and "it looks right" are different claims, and only the second one satisfies this checkpoint.
5. **Never batch this.** Writing all of an episode's Remotion components first and only then rendering/viewing them defeats the purpose of this checkpoint — with no per-component checkpoint, generation regresses to the cheapest generic pattern that satisfies the prompt (observed directly: components written in one pass within seconds of each other were uniformly worse — flat invented colors, no real imagery, no map engine — than components rebuilt individually with a render-view-fix cycle each). Complete steps 1–4 for one component fully before starting the next.

#### 2. Editorial Standard
Treat every chart as an **evidence-bearing news document**, not an illustration, dashboard, or decorative interlude.
* Every visible mark must encode data, supply context, establish hierarchy, support verification, or direct attention to the narrator's current claim. If removing a layer does not reduce comprehension, **remove it**.
* Do not borrow visual vocabulary from maps, documentaries, or dashboards unless it carries evidence in the chart. Terrain, contours, particles, ambient parallax, and decorative gradients weaken the argument. Prefer a quiet field, explicit scale, sparse dates, neutral history, one semantic accent, direct annotation, and visible sourcing.
* Visual interest comes from **sequencing, comparison, annotation, and the arrival of evidence** — not ornamental motion.

#### 3. Information Architecture (Build Order)
Build the visual frame in this strict top-to-bottom hierarchy:
1. **Precise Title:** Clearly state what is measured. Never insert unsupported causality.
2. **Readable Unit / Descriptor:** Explicit scale ($ Billions, % Margin, Units Delivered).
3. **Quiet Source Line:** Small, low-contrast, bottom corner (e.g., `Source: company annual reports`). Present for credibility, never competing with the number — the chart is about the story, not the paperwork.
4. **The Plot Field:** Grounded on an honest baseline (zero for bars) with sufficient grid scale to judge magnitude.
5. **Sparse Axes and Dates:** Supply chronological context without becoming wallpaper. Use start, meaningful midpoint, and end labels.
6. **Direct Annotations:** Point directly to the one or two findings stated by the voiceover. Never make the viewer search a detached legend.

#### 4. Visual System & Color Semantics
* **Background Field:** Flat warm parchment/off-white (`#F8F6F0` or `#F4F1EA`) or flat dark corporate slate (`#0F141C`).
* **History / Comparison Series:** Neutral muted slate/charcoal tones (`#64748B` / `#94A3B8`).
* **Semantic Accent:** Reserve **one** accent color for the subject or anomaly — Crimson (`#D32F2F`) for crash/loss/outlier; Emerald (`#10B981`) for initial profit/baseline.
* **Fills & Gradients:** Keep fills flat. Use gradients only when encoding quantity, range, or uncertainty.
* **Typography:** Bold sans-serif header (Inter/Outfit), clean tabular numbers for values, compression-safe axis labels.

#### 5. Motion Grammar (Reveals & Holds)
1. **Establish:** Reveal title, source, unit, grid, and axes (Frames 0–24).
2. **Chronological / Baseline Reveal:** Draw baseline historical series (Frames 28–80).
3. **Pause:** Brief 0.5s pause so the baseline scale can be read.
4. **Introduce Subject / Anomaly:** Cascade the crash, divergence, or second series as a distinct visual event (Frames 95–140).
5. **Direct Annotation:** Callout badge and leader line arrive only after the evidence is visible.
6. **Final Hold:** Hold the completed, static chart stable for **0.5–1.5 seconds** while voiceover finishes the claim.

#### 6. Studio-Adjustable Editorial Timeline
Expose editorial timing controls rather than burying procedural magic numbers in JSX:
* Maintain a central, typed timing contract defining:
  - `establish`: Initial context and grid orientation.
  - `elementReveals`: Data lines, bars, waterfalls, or series.
  - `boundaries`: Thresholds, breakeven lines, or comparison bounds.
  - `fills`: Bars, areas, or categories.
  - `labels`: Values, callouts, dates, and annotations.
  - `hold`: Stable completed reading state.
* Represent major events as clearly named timeline sequences (e.g. `<Sequence name="Element reveal — Unit Margin Collapse">`).

#### 7. Specific Chart-Type Master Rules
* **Bars & Columns:** Always start at zero unless a disclosed exception is mandatory. Use flat fills, consistent widths/gaps. Direct-label highlighted values. Make a final or record bar a distinct animated event rather than a uniform cascade.
* **Lines & Trends:** Never smooth curves in a way that invents non-existent intermediate data points. Prefer endpoint labels over legends.
* **Financial Waterfall Charts:** Establish opening baseline (e.g. `+$927 Gross Profit`), cascade intermediate cost deductions step-by-step (`Price Cut -$700`, `Air Freight -$93`, `Demurrage -$150`), and terminate in the final subterranean deficit (`-$196 Gross Loss`).
* **Timelines:** Keep year anchors sparse, large, and proportionally spaced.
* **Counters & Metrics:** Derive values dynamically in code; state the period and denominator; ensure motion does not obscure the final readable number.
* **Rankings & Ledgers:** Keep row rules stable while values or highlight pointers shift.

#### 8. Compact Remotion Code Implementation Pattern
```tsx
import { interpolate, useCurrentFrame } from 'remotion';

export const NewsroomChart = ({ data }: { data: Array<{ label: string; value: number }> }) => {
  const frame = useCurrentFrame();
  
  const reveal = (start: number, end: number) =>
    interpolate(frame, [start, end], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

  const gridProgress = reveal(0, 20);
  const baselineProgress = reveal(25, 75);
  const anomalyProgress = reveal(85, 120);
  const calloutProgress = reveal(125, 145);

  return (
    <div style={{ width: 1920, height: 1080, backgroundColor: '#F8F6F0', padding: 80 }}>
      <h1 style={{ fontSize: 44, color: '#0F172A', margin: 0 }}>HOW UNIT ECONOMICS INVERTED</h1>
      <p style={{ fontSize: 20, color: '#64748B', marginTop: 8 }}>Source: company annual reports • Dollars per bike</p>
      {/* Chart Canvas & SVG Elements driven by progress values */}
    </div>
  );
};
```

---

### **Skill 2: 2D Geographic Explainer Maps (`map-explainer`)**

Use this skill for flat investigative geographic explainers: showing where an industrial site is located, tracing a global supply chain or maritime route, or visualizing jurisdictional regulatory actions in sequence.

#### 1. Three-Layer Architecture — 100% Vector/Illustrated, No Tile Fetch
| Layer | Framework | Technical Responsibility |
| :--- | :--- | :--- |
| **Layer 1: d3-geo Vector Basemap** | `d3-geo` + `topojson-client` / `world-atlas` | Projects GeoJSON/TopoJSON land, border, and route geometry via `d3.geoMercator()` or `d3.geoAlbersUsa()` into SVG/Canvas paths. Rendered as flat cel-shaded fills and strokes in `TOKENS.colors.*` — no basemap tile server, no satellite or aerial imagery of any kind is fetched or displayed. This is the only sanctioned source of real-world geography; it is illustrated by construction, so the Illustrated-Only rule is satisfied structurally rather than needing a stylization pass. |
| **Layer 2: Remotion Harness** | Remotion Engine | Frame-by-frame controller. Drives projection scale/rotate/translate and route-reveal progress purely through `interpolate()` against `useCurrentFrame()` — fully deterministic, nothing to settle or jitter. |
| **Layer 3: React HTML Overlay** | React DOM `<div>` | Country, port, and factory facility labels. Positioned each frame via the same `d3` projection's `.project(lngLat)` (or `.invert()`). Gives complete typography and animation control. |

#### 2. Motion: Deterministic Projection Math, No Tile Settling
Because there is no tile server or WebGL basemap to settle, there is no jitter/shimmer risk to guard against. Camera pans or zooms across geography are just `interpolate()` calls against the `d3` projection's `scale`/`center`/`rotate` parameters — render deterministically frame-by-frame like any other Remotion component, no `delayRender`/`idle` event needed for the map layer itself.

#### 3. Visual Semantics & Reveal Logic
* **Supply Routes / Maritime Paths:** Traced via `turf.lineSliceAlong(line, 0, lineKm * reveal)` per frame, led by a **white-hot electric draw-head** (bright core + outer glow layer) that fades at arrival.
* **Regional / Territorial Blooms:** When a route enters a jurisdiction, trigger a sequence: **Border draw (2.5s) $\to$ Fill bloom (slight opacity overshoot) $\to$ Label rises**.
* **Labels:** Uppercase, high-contrast display text with an accent line. Placed in open space, never obscuring the route or marker pin.

---

### **Skill 3: 3D Cinematic Globe & Terrain Flyovers (`3d-flyover`)**

Use `d3.geoOrthographic()` plus layered illustrated art for cinematic aerial movement through landscapes, terrain, shipping corridors, or corporate headquarters. No CesiumJS, no MapTiler terrain mesh, no Google Photorealistic 3D Tiles, and no real-world imagery/mesh fetch of any kind — every mode below is 100% illustrated.

#### 1. Operating Modes
* **`globe` Mode:** `d3.geoOrthographic()` drives a rotating illustrated globe (flat cel-shaded landmasses over the show's ocean/background token color) for cross-border or global-macro beats — this is the same engine already documented for `ARCHETYPE_GLOBE_TARGET_LOCK`. Camera "flyover" is simulated by animating `rotate`/`scale` on the projection, not by moving through real 3D terrain data.
* **`landscape`/`city` Mode:** For a specific site (a port, a factory, a headquarters tower), build a layered illustrated parallax scene from Batch 1 Nano Banana feeder stills (foreground/midground/background plates, per CP-6's Cross-Batch Asset Pipeline Dependency) and move a virtual camera through it with CSS 3D transforms (`translate3d`/`perspective`), the same technique already used by `InfiniteContainerZoomTunnel.tsx`. No terrain mesh or real building geometry is fetched — the illustrated feeder stills provide the geometry illusion.
* **Output Styling:** Because both modes are illustrated by construction (vector globe or illustrated feeder-still plates), the cel-shaded Primary Register is satisfied structurally — there is no raw tile/mesh output to stylize.

#### 2. Camera Mechanics & Chaikin Path Smoothing
* Input route provided as sparse control coordinates `[longitude, latitude, altitude][]`.
* Apply **Chaikin corner cutting** (3 passes) to transform straight-then-turn waypoints into a continuous, swerving flight path.
* **Ground Speed & Banking:** Camera walks the smoothed curve by arc length for constant ground velocity. Aim camera at a point ahead on the curve, deriving roll from look-ahead bearing change so the camera banks naturally into turns.

#### 3. Deterministic Remotion Harness
```bash
npx remotion render src/index.ts <CompositionName> out.mp4 --concurrency=1 --timeout=180000
```
* Pure `interpolate()`/`useCurrentFrame()` math — no external renderer to settle, no `delayRender` needed for the globe/parallax layers themselves (only for the Batch 1 feeder-still `<Img>` loads, per standard Remotion asset-loading practice).

---

*A standalone reference on how to actually write Flow prompts well. Synthesized from current guides, not yet tied to our specific channels — that integration is a separate next step.*

---

## **The one thing to understand before anything else**

Flow's real interface is natural language, not a slash-command language. You'll see lists online of "99 Flow commands" like `/dollyin` or `/goldenhour` — these are **community shorthand for prompt concepts, not an officially documented command syntax Flow parses literally**. Google's own guidance is to describe the subject, action, environment, lighting, and style in plain sentences. Treat any slash-style list as a vocabulary of ideas to translate into natural language, not text to paste in expecting Flow to recognize the symbol.

---

## **The core formulas**

**For images:** `Subject + Action/Pose + Environment + Lighting + Style + Detail Level`

**For video:** `Subject + Action + Environment + Camera + Movement + Lighting + Composition + Mood + Audio`

Not every element is needed every time, but the more of them present, the more control you have. Six elements for images, closer to nine for video — video needs camera and audio direction that stills don't.

**What "strong" looks like at each step** (versus the weak default):

* **Subject:** not "a person" — "a young woman in her 30s with short dark hair"  
* **Action:** not "standing" — "standing at a rain-soaked window, arms crossed"  
* **Environment:** not "in a city" — "a narrow alley in old Istanbul, wet cobblestones, a mosque visible through fog"  
* **Lighting:** the single most skipped element, and the one with the most impact — "warm golden-hour light from the left, soft shadows, slight lens flare"  
* **Style:** "cinematic photography, shallow depth of field" — without this, the model picks a style for you  
* **Camera (video only):** "slow tracking shot following the subject" vs. "static wide shot" produce genuinely different footage  
* **Audio (video only):** Flow's video model generates native synchronized audio in one pass — if you don't describe the sound environment, you may get silence or an unwanted default. Be specific: "ambient café noise, espresso machine, murmured conversation" rather than leaving it unstated.

---

## **Camera language glossary**

| Term | Effect |
| ----- | ----- |
| Tracking shot | Camera moves alongside a moving subject |
| Dolly in / push in | Camera moves forward toward the subject |
| Dolly out / pull out | Camera moves backward, away from the subject |
| Pan left / right | Camera rotates horizontally from a fixed point |
| Tilt up / down | Camera rotates vertically from a fixed point |
| Aerial / drone shot | High elevated view looking down |
| Crane up / down | Camera rises or descends, often revealing scale |
| Handheld | Slight organic, imperfect camera movement |
| Static wide shot | No movement, full scene visible |
| Close-up | Tight framing, background falls away |
| Over-the-shoulder | Behind and slightly above one subject, looking at another |
| Orbit | Camera circles around the subject |
| Rack focus | Focus shifts from one plane to another mid-shot |

Camera angle (where the camera sits) and camera movement (how it moves) are different things and can be combined: a low-angle dolly-in reads very differently from a high-angle static wide.

---

## **Lighting, composition, and effects — condensed vocabulary**

**Lighting:** golden hour, blue hour, neon, moody/low-key, soft diffused, rim light (separates subject from background), silhouette, volumetric (visible light shafts through haze), backlight.

**Composition:** wide vs. tight framing, rule of thirds, symmetry, leading lines (using environmental lines to guide the eye), foreground framing (an object partially framing the subject), negative space (deliberate empty area — useful when you know text or a logo will sit over the shot later).

**Effects — use sparingly, as secondary instructions, not the main event:** motion blur, bokeh (soft out-of-focus background lights), lens flare, film grain, vignette, desaturation. Stacking many effects at once tends to compete with the subject rather than support it — pick the one or two that actually serve the shot.

**Real photography/film terms work well** because the underlying models were trained on real content: f/1.8 aperture, 85mm lens, shallow depth of field, anamorphic lens flare, 24fps cinematic, Dutch angle, establishing shot. Generic words like "beautiful" or "cool" do far less work than a specific technical term.

---

## **The Ingredients panel and character consistency**

Flow's Ingredients panel lets you upload a Subject image, a Scene image, and a Style image, then blend them with a text prompt that explicitly references what you uploaded — e.g., "the subject stands in the scene, rendered in the style, soft natural lighting." The text prompt should *complement* the images, not describe something unrelated to them.

Separately, typing `@` followed by a saved character or asset name lets you reference something already generated in the project without re-uploading a reference image each time — directly relevant to maintaining a locked character design across many separate generations.

---

## **10 mistakes worth checking your prompt against**

1. **Too vague** — "a nice landscape" gives the model nothing to commit to.  
2. **Self-contradicting** — "dark and bright, warm and cool" cancels itself out; pick a direction.  
3. **No lighting mentioned** — the most common beginner omission, and the one with outsized impact.  
4. **No style specified** — the model will pick one for you if you don't.  
5. **Prompt running too long** — roughly 50-80 words is a reliable range; past \~150 words, models tend to lose the thread rather than gain precision.  
6. **Text contradicting the Ingredients images** — if you've uploaded references, the prompt should reinforce them, not describe something else.  
7. **No camera direction for video** — "tracking shot" and "static wide" produce meaningfully different results; don't leave this to default.  
8. **No audio description for video** — silence (or an unwanted inferred sound) is what happens when you skip this.  
9. **Accepting the first generation as final** — treat it as a draft; change one element at a time to learn what each change actually does.  
10. **Not using an assistant to draft first** — if you're stuck translating an idea into a prompt, describing it in plain language to an LLM and asking it to structure a Flow prompt is a legitimate, recommended step, not a shortcut to be embarrassed about.

---

## **Example prompts built from the formula**

**A still, following the image formula:** *An elderly craftsman's hands guiding a chisel through dark wood, fresh shavings curling away, natural window light from the left casting long shadows across the workbench, documentary photography, shallow depth of field, warm and unhurried mood, ultra-detailed, 8K.*

**A video, following the full formula:** *Slow tracking shot at a low angle following a cyclist along a coastal road at golden hour, salt haze softening the horizon, camera holding steady alongside the subject before gently pulling back to reveal the full coastline, warm directional light with long shadows, cinematic color grading, with the sound of wind, tires on gravel, and distant waves.*

**Using the Ingredients panel pattern:** *"\[Subject from uploaded reference\] stands at \[scene from uploaded reference\], rendered entirely in \[style from uploaded reference\]. Soft natural lighting. Ultra-detailed, photorealistic quality."*

---

## **Quick reference notes**

* English prompts are currently the most reliable — the underlying models were trained predominantly on English-language data.  
* If a result doesn't match the prompt, it's almost always one of three things: too vague, internally contradictory, or up against a content restriction. Simplify and remove contradictions before assuming the tool is broken.  
* Different aspect ratios and platforms (a landscape establishing shot vs. a vertical social clip) need their framing described accordingly — don't assume one composition works for both.

&nbsp;
