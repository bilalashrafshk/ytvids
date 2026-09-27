<!-- Part of the FinanceCraft Channel Bible. Index: ../FinanceCraft — Channel Bible, Asset Guide & Description.md -->

# **FinanceCraft — Guided Production Document Generator**

*Feed this prompt, along with a tagged script (from the Script Generation prompt) and the Style Bible, to generate the full production document. The end user is technically capable — comfortable with code, logic, and running AI tools — but has no traditional video-editing or visual-design background, and no creative/production training. Leave no visual, creative, or tool-usage judgment to guesswork.*

*Which Bible file each task loads — and the deliverable it produces — is in the TASK table in the Bible index (`../FinanceCraft — Channel Bible, Asset Guide & Description.md`). That table is the single source of truth; this file no longer keeps a copy.*

---

## Format Declaration — state this before Phase 1, every time

**Before any other phase begins, state explicitly which Format this episode is: Documented Case, or The Hypothetical.** This is inherited from the Master Tracker's Format column for this idea, and it determines which Script Generator was used to write the script and which character-tag, dialogue, and standing-asset rules apply throughout everything below. Do not infer this reactively by waiting to encounter a `[CARICATURE]` or `[COMPOSITE]` tag mid-generation — state it upfront, as a fact carried in from the idea stage, not a discovery made partway through Part A.

**This is the only axis that branches in this document.** Visual style (Section 2 of the Style Bible) is a channel-level constant and applies identically regardless of Format — it never varies by episode. Format only governs whether real people can appear (Documented Case: yes, as illustrated caricatures, following every rule in Style Bible Section 4) or never appear at all (The Hypothetical: composite characters only, no real named person anywhere in the episode, per Style Bible Section 10).

---

## **Mandatory Engine Gatekeeper: Master Sanity Check Audit Protocol (Strict Adherence)**

> [!CAUTION]
> **CRITICAL INSTRUCTION FOR THE AI GENERATION ENGINE:**  
> The generation engine is programmatically and strictly bound by the following automated sanity checkpoints. Before generating any phase or deliverable (Script, Production Document, Phase 4 Beats, Consolidated Batches, or Timeline Assembly), the engine **MUST execute and explicitly print the designated Sanity Check Audit Block**. If any mathematical checkpoint fails or if the beat count does not satisfy the duration formula, the engine is **FORBIDDEN TO PROCEED** and must halt, recalculate, and expand coverage. Generating fewer beats than required or skipping audit blocks constitutes an automatic system failure and corrupt deliverable.

### **The 15 Master Sanity Checkpoints:**

| Checkpoint | Scope | Validation Rule & Formula | Enforcement Action |
| :--- | :--- | :--- | :--- |
| **CP-0: Pre-Delivery Self-Audit & Clean-Room Gate** | Every Deliverable | **Mandatory Step-by-Step Self-Audit:** At EVERY step of the pipeline, the AI generation engine MUST perform a strict self-audit against the task's rules before outputting or presenting any deliverable.<br>**Clean-Room Isolation Law:** The AI is **STRICTLY FORBIDDEN from looking at, copying, or anchoring to files from other completed episode directories in `videos/` (such as legacy episodes like `videos/01-peloton-collapse/`).** Older episodes contain deprecated monolithic formats, pre-refactor conventions, or track-specific corporate fraud framing that will contaminate active work. For structural blueprints, the AI MUST strictly reference `videos/_template/` and this Master Channel Bible alone. Output MUST be a dedicated standalone file per the 14-phase sequence. | **AUTOMATIC REJECTION** if rules are skipped, cross-episode code/text is copied, or monolithic bundling is attempted. |
| **CP-1: Evidentiary & Mechanism Spine** | Research / Concept Brief | **Track 1 (Documented Cases):** 9 required sections present; primary showable documents/transcripts where relevant; 1 load-bearing pivotal detail.<br>**Track 2 (Thought Experiments & What-Ifs):** Verified economic mechanisms, academic empirical data (e.g. AER trials), and network telemetry. **STRICTLY FORBIDDEN TO FORCE SEC 10-K FILINGS ONTO THOUGHT EXPERIMENTS.** | Reject brief if relying on unverified gossip or forcing corporate SEC filings onto speculative simulations. |
| **CP-2: Script Word Count, Runtime & Decimal Normalization** | Script Generator & VO Engine | Word count $W$; Runtime $T = (W / 155) \times 60$ seconds. Target: 12–15 min ($1,860 \le W \le 2,325$). 5-Act narrative balance. **Decimal Normalization Mandate:** All spoken decimal numbers in scripts and VO JSON (`target_text`) MUST be written with the phonetic word "point" (e.g. `1 point 2 million`, `2 point 5 billion dollars`), NEVER raw numeric decimals (`1.2`, `2.5`) which TTS engines mispronounce as "one dot two". | Recalibrate script pacing if runtime is out of bounds; phonetically normalize all decimals to "point" in scripts and VO JSON. |
| **CP-3: Audio-First Timing & Beat Duration Gatekeeper** | 07_BEAT_SHEET.md | **MANDATORY TIMING PREREQUISITE:** Master VO audio (`master_narration.wav`) and sentence-level timestamp alignment JSON MUST exist BEFORE generating beats. $B_{min} = \lfloor T / 5.0 \rfloor$, $B_{max} = \lceil T / 2.5 \rceil$, $B_{target} = \text{round}(T / 3.5)$. Total duration $\sum D_i = T \pm 2\%$. Beats MUST snap to ground-truth spoken sentence downbeats. Generating beats prior to audio synthesis is an AUTOMATIC FAILURE. | Hard gate: Block beat sheet generation until VO audio timestamps exist; reject arbitrary slicing. |
| **CP-4: Shot Duration Bounds & Nuanced Pacing Rule** | Phase 4 Beats | **Overall Timeline Macro Tempo:** The timeline targets an overall average beat tempo of **$2.5\text{s} - 4.0\text{s}$**, achieved by balancing rapid photographic cuts with evolving motion sequences.<br>**1. Static Stills Standard (Anti-Fatigue Rule):** Default scene stills target **$2.5\text{s} - 5.0\text{s}$**; generic stills lasting $> 6.0\text{s}$ are actively discouraged to eliminate visual fatigue. Multi-sentence scenes illustrated with stills MUST cut on every sentence using Cinematic Shot Progression (Wide $\rightarrow$ Medium $\rightarrow$ Punch-in). *Nuanced Evidentiary Exception ($6.0\text{s} - 10.0\text{s}$):* Permitted only for dense forensic reading material (SEC filings, deeds, balance sheets) with continuous slow Ken Burns push-in ($1.05\times - 1.15\times$) or 2.5D parallax.<br>**2. Motion Assets (AI Video & Remotion Graphics):** Durations are governed by script and visual requirements with **zero artificial suppression of duration**. Because active video motion, camera moves, and code-driven graphics evolve continuously without inducing static viewer fatigue, AI videos (e.g. 5s–8s full generative motion arcs) and Remotion graphics (e.g. 4s–12s+ data builds, 3D flyovers, and recursive zoom tunnels) are encouraged to hold across complete multi-sentence thought-blocks until the script pivots to a new topic. The engine must never artificially truncate a fluid motion beat just to enforce a cut. | Reject static beats $>6.0\text{s}$ ONLY IF they lack an evidentiary/dramatic rationale or lack camera motion; allow justified forensic holds up to $10.0\text{s}$; zero beats $< 1.5\text{s}$; AI videos and Remotion clips sized dynamically to script narrative requirements. |
| **CP-5: Multi-Shot Visual Progression** | Phase 4 Beats | No paragraph or multi-sentence concept may be covered by a single static hold. Must apply multi-shot progression (Wide $\rightarrow$ Medium $\rightarrow$ Punch-in / Document Inset Multi-Phase). | Deconstruct static holds into multi-angle cinematic coverage. |
| **CP-6: AI Video Budget & Dynamic Motion Engine** | Phase 4 & Batch 2 | **AI Video Clip Rule:** a clip is a whole number of seconds from **4 to 10**, generated at the length it will actually be used. **Clips span sentences, not one sentence:** most clips should cover 2–4 consecutive sentences of one continuous scene (a camera move, an action unfolding), with cuts still landing on a sentence start at each end. Pick the length L nearest the span D; if D is within ~10% of L, retime the clip in CapCut to fit exactly, otherwise use the next length up and trim no more than 0.5s. Never generate a long clip to use a small slice of it — generation is paid by the second generated, not the second used. A span under ~3.6s isn't an AI clip: merge it with a neighbour, or make it a still with a camera move. **Prefer video:** a smooth, lively episode is mostly moving pictures — aim for roughly 40–60% of the runtime to be AI video, with stills kept for shots whose readable text or quick comic punch matters, and Remotion for numbers. When stills already exist, the clip should start from one (Image-to-Video) so style and characters stay consistent. **Hard cap: 30 AI clips per episode — never more.** Within that cap, make each clip carry more: longer spans (up to 10s) cover more sentences, so 30 clips can still carry most of the runtime. (Episode 04 used 46 as a one-off exception approved by the user; it is not a precedent.) **Remotion (Batch 4) is SEPARATE & Script-Driven:** Remotion components (`newsroom-chart-animations`, `map-explainer`, `3d-flyover`, `remotion-bits`) are NOT counted against the AI video budget; they are generated dynamically as needed by the script (`[DATA]`, `[MAP]`, `[REMOTION]`), never forced by an artificial quota. **Encouraged Cinematics & Engagement:** The engine is actively encouraged to deploy dynamic camera moves, cinematic 3D drone flyovers, staccato whip-zoom montages, and infinite looping motion tunnels to elevate visual energy per [`references/REMOTION_GRAPHICS_ENGINE_REFERENCE.md`](file:///Users/bilalashraf/YT%20Videos/references/REMOTION_GRAPHICS_ENGINE_REFERENCE.md). **Cross-Batch Asset Pipeline Dependency:** The engine must actively schedule necessary Batch 1 AI stills (e.g. 8–15 image plates for whip-zoom montages, vanishing-point corridor plates for infinite zoom tunnels, cutout portraits for 3D flywheels) so they are generated upstream in Batch 1 to feed Remotion compositions in Batch 4. **Signature Cinematic Minimum:** "Encouraged" has proven too weak to survive contact with a beat planner defaulting to newsroom charts. Every episode's beat sheet must explicitly evaluate whether at least one beat's staging (a deep vanishing-point corridor, a rewind/montage VO line, a multi-location recap) fits `ARCHETYPE_WHIP_ZOOM_MONTAGE`, `ARCHETYPE_INFINITE_PORTAL_TUNNEL`, or `ARCHETYPE_3D_ORBITAL_FLYWHEEL`. Zero signature cinematics in a 12+ minute episode requires one stated sentence for why none fit — a silent absence is a planning gap, not a valid outcome. **Full-Duration Scheduling:** a signature cinematic must be scheduled with enough consecutive narration (spanning adjacent sentences) or a narration-free hold to reach its archetype's own documented full duration (e.g. the Whip-Zoom Montage's 6×5-frame staccato plus full landing push totals 240f/8.0s) — truncating the render to whatever one short VO sentence covers, cutting the landing shot or loop off mid-motion, is a scheduling failure. CP-4's audio lock governs cut *placement*, not signature-cinematic *length*: extend the narration span or hold silently rather than clipping the motion short. **Chart-vs-Cinematic Bias:** the engine has more Remotion skills than `newsroom-chart-animations`, and should be encouraged to reach for them — whenever a beat's underlying idea is money/stock draining over time, distance or scale, a compressed timeline, or a network/multi-location breakdown, default to `ARCHETYPE_WHIP_ZOOM_MONTAGE`, `ARCHETYPE_INFINITE_PORTAL_TUNNEL`, `ARCHETYPE_3D_ORBITAL_FLYWHEEL`, `map-explainer`, or `3d-flyover` over a static dense ledger/waterfall chart. Charts are not forbidden — reserve `newsroom-chart-animations` for beats where a specific number or trend comparison genuinely is the point, not as the default fallback every time a dollar figure appears in the script. **Spacing:** these are a peak-moment device, not a texture. When more than one is scheduled, they land at least one full Act apart (or ≥90s) unless the script's own escalation genuinely calls for back-to-back — don't cluster them just because both got noticed in the same planning pass. **Human/Consumer Cutaway Minimum:** Phase 4's Technique 5 (Consumer & Cultural Juxtaposition) is the fix for a documentary that never leaves the boardroom/factory register — a beat sheet that stays entirely inside corporate offices, ports, and executive caricatures for its full runtime is a planning gap, not neutral coverage. Every Act must schedule at least one `[CUTAWAY]`-tagged beat (a relatable human/consumer moment — a living room, a doorstep, a warehouse floor, a second-hand listing — not a literal illustration of that sentence's specific noun), or the beat sheet must state one sentence for why that Act has none. A silent absence is a planning gap, same standard as the Signature Cinematic Minimum above. **Theme Lock:** 100% of Remotion code MUST strictly inherit the video's color palette and visual theme — every background, text, and accent color must resolve to a value from the project's `tokens.ts` (`TOKENS.colors.*`) or a documented `rgba()` derived from one; a component that imports `TOKENS` for some colors but hardcodes its own ad-hoc hex for the base canvas (e.g. an invented near-black like `#070a10` instead of `TOKENS.colors.backgroundDark`) still fails Theme Lock. **On-Screen Text Jargon Lock:** every label, HUD readout, and chart caption rendered inside a Remotion component is subject to the same Gate 4 Jargon List and Register Rules (R2, R4) as narration — a term the script was forbidden from saying out loud does not get a pass by being printed on screen instead. Any acronym (`MCA`, `DTC`, `UCC-1`, etc.) must carry a 2–4 word plain-language expansion inline (e.g. "MCA (Cash Advance)") or be cut; a legal/financial term (`demurrage`, `lien`, `salvage`, `working capital`, `accounts receivable`, `liquidity`) is only allowed on screen once its plain-language version has already landed in the narration for that beat. No single component may display more than 4 live text labels at once — one hero number, demonstrated, per R4's "numbers arrive alone" — rather than a full ledger's worth of line items stacked in one frame. **Big & Few, Never Overlapping:** fewer, larger text elements beat many small ones — every on-screen label must be legible at a glance at normal viewing distance (no fine-print-sized captions crammed in to fit more data), and cutting a label's word count is the correct fix when it's both true and too small, not shrinking the font to fit more words. No text element may visually overlap another text element, and no label/caption may sit on top of and obscure a chart's own axis, bar, line, or its own source label — if a text layer and a chart element would occupy the same screen space, reposition or stagger them before render, never let one silently cover the other. 100% of AI video blocks MUST declare TECHNIQUE and name `INPUT FRAMES`. 100% of AI video prompts MUST include: `"1920x1080, 16:9, 30fps, no audio, mute, silent output"`. Every Remotion prompt MUST include: `"use best graphic motions practises and guidelines from top performing graphics"`. | Reject any AI video prompt with ambient audio, missing technique/input frames declaration, or Batch 2 video count $> 25$. Reject any Remotion asset that fails theme-lock, misses upstream input frame dependencies, or defaults to static text. Reject any `[MAP]`/geographic component that hand-rolls pixel coordinates instead of using a documented projection engine (`d3.geoMercator`, `d3.geoOrthographic`, `d3.geoAlbersUsa`) from `REMOTION_GRAPHICS_ENGINE_REFERENCE.md`. Reject any signature-cinematic component (`ARCHETYPE_WHIP_ZOOM_MONTAGE`, `ARCHETYPE_INFINITE_PORTAL_TUNNEL`, `ARCHETYPE_3D_ORBITAL_FLYWHEEL`) that renders zero `<Img>`/`staticFile` calls against its scheduled Batch 1 feeder stills — a flat-color or pure-vector/canvas substitute is not a valid delivery of that archetype. Reject any `map-explainer`/`3d-flyover` component that imports or calls MapTiler, MapLibre, CesiumJS, or Google Photorealistic 3D Tiles, or fetches any satellite/basemap tile at all — both skills are 100% vector/illustrated (`d3-geo`/`d3.geoOrthographic` + GeoJSON/topojson, or illustrated parallax feeder stills), never a real-world imagery or mesh fetch. Reject any Remotion component with an on-screen label matching the Gate 4 Jargon List or an unexpanded acronym, or with more than 4 live text labels on screen simultaneously. Reject any component where a text element overlaps another text element, or where a label/caption sits on top of and obscures a chart's own axis, plotted element, or source line, or where a label is shrunk to fit rather than shortened. Reject a beat sheet where three or more `[DATA]` beats render the same dense ledger/waterfall visual family back-to-back when a dynamic archetype (whip-zoom montage, infinite tunnel, 3D flywheel, map-explainer, 3d-flyover) would fit the underlying idea just as well. Reject a beat sheet where an Act contains zero `[CUTAWAY]`-tagged beats and no stated reason for the absence. Reject any signature-cinematic component whose rendered `durationInFrames` is shorter than the frame count declared for it in `10_REMOTION_SPECS.md`'s build table — a spec that promises 240f and a render command that delivers 120f is spec drift, not a valid delivery. |
| **CP-7: Universal Quality Mandate** | 100% of Prompts | Every single prompt block (stills, video, characters, thumbnails) MUST contain: `"follow best industry-standard guidelines and quality and visualisations"`. | Automated regex check: reject prompt if missing the exact clause. |
| **CP-8: Typography & Native Text** | Stills & Thumbs | Nano Banana 2 renders text natively. Every prompt needing text must specify: `ON-IMAGE TEXT: Direct in-generation text: "[exact text]"`. | Negative prompt MUST NOT contain "no text" or "no words" when text is requested. |
| **CP-9: Caricature & Legal Guardrails** | Characters & Beats | Real persons (e.g. Foley, McCarthy) are illustrated caricatures only, strictly gesture-only with ZERO scripted dialogue and ZERO lip-sync. Standalone single-pose portrait only (no turnaround). | Strip all mouth movements/dialogue from real person prompts. |
| **CP-10: Batch 1:1 Reconciliation** | Phase 5 Batches | Sum of assets in Batches 1, 2, 3, and 4 MUST EXACTLY equal $B$ (total beats) + master character references + thumbnail variants. Zero missing/orphaned assets. Every Batch 4 (Remotion) component additionally requires a rendered still PNG on disk per CP-14 — a component with no rendered still is an orphaned asset for this checkpoint's purposes, same as a missing file. **Missed-Feeder-Still Remediation:** Since the engine runs inside Antigravity, a feeder still discovered missing at this stage (or during Phase 10 spec-writing, or during CP-14 viewing) is not a hard block requiring a replan — the engine generates the missing plate on demand via Nano Banana directly within Antigravity, then wires it into the component, re-renders, and re-views before marking the checkpoint reconciled. A missing still is never papered over with a flat-color or procedural substitute when this remediation path is available. **Duration Drift Check:** for every signature-cinematic component, reconcile its actual rendered `durationInFrames` against its own row in `10_REMOTION_SPECS.md`'s build table — a render command that quietly passes a shorter duration than the table declares (per CP-6's Full-Duration Scheduling clause) fails this checkpoint the same as a missing asset. | Block transition to Part B until inventory is 100% reconciled. |
| **CP-11: Timeline A/V Synchronization** | Part B Timeline | Narration VO Track Duration ($T_{audio}$) matches Total Visual Beat Duration ($\sum D_i$) within $\pm 0.5$ seconds. Zero gap frames between cuts. All AI video clips muted (-inf dB). | Abort CapCut timeline commit if A/V duration drift $> 0.5$ seconds. |
| **CP-12: Dynamic Audio Score & Ducking** | Part B Audio | 1 cohesive BGM score bed on Track 3, with separate VO (0dB, -15 LUFS on Track 1) and Foley (-26dB on Track 2); dynamic ducking (-32 to -35 dB); pause swells (+8dB on gaps >1.2s); cognitive ducking (-50 to -60dB) during dense data/math beats; dead silence drops on shock reveals. | Flag any un-ducked or flat audio mix. |
| **CP-13: Anti-Dryness & Entertainment Mandate** | Script & Narration | Narration MUST be fun, punchy, conversational, and witty. Strictly prohibits stiff courtroom legalese, academic lecture prose, or corporate compliance tone. Must incorporate visceral physical grounding ("Popcorn & Delivery Van" rule), staccato rhythmic variety, and relatable humor ("Cereal Box" principle). | **AUTOMATIC REJECTION** if script sounds like a formal court filing, legal deposition, or academic paper. Rewrite with conversational swagger and narrative electricity. |
| **CP-14: Remotion Render-and-View Verification** | Batch 4 Remotion Components | A component that type-checks and compiles is not the same as a component that looks right — clipped text, overlapping layers, off-theme color, and broken hierarchy all pass a build cleanly. After writing or editing any Remotion scene component, the engine MUST render at least one representative still frame (`npx remotion still <composition-id> <output.png> --frame=<mid-point-frame>`; for anything with meaningful motion, render start/mid/end frames instead of just one) and **actually view the rendered PNG** before marking that component done. Check the rendered frame against: legibility at a glance (text big enough to read, not shrunk to cram more words in), no text overlapping other text or sitting on top of and obscuring a chart's own axis/plot/label, no clipped elements, Theme-Lock color tokens, and the Information Architecture build order (Skill 1, "Build Order"). If the frame doesn't match, fix the component and re-render — don't mark it complete off a passing build alone. This is a process discipline, not a text-scriptable gate: `gate_check.py` cannot judge whether a frame "looks good," so this step cannot be skipped on the assumption that some other check covers it. **One Component at a Time:** Batch-writing every Remotion component in one pass before rendering any of them produces uniformly generic output — the engine falls back to the cheapest pattern that satisfies the prompt when there's no per-component checkpoint forcing attention. Build → render → view → fix MUST complete for one component before the next component is started; never write component N+1 while component N's render is still unverified. | Self-audit only — no deliverable may claim a Remotion component is finished without stating that its rendered still was viewed and matched the spec. CP-10's asset reconciliation additionally requires the rendered still PNG to exist on disk for every composition ID. |

---

### **Mandatory Step-by-Step Deliverable Validation Protocol (Self-Audit at Every Phase)**

> [!CAUTION]
> **PRE-DELIVERY AUDIT RULE FOR THE AI GENERATION ENGINE:**  
> At **EVERY SINGLE STEP** of the 14-phase pipeline, the AI generation engine MUST perform a rigorous internal self-audit against the target deliverable's explicit rules before presenting or saving the file.  
> **If ANY condition in the checklist below is violated, the output is an AUTOMATIC REJECTION.** The engine must halt, correct the defect internally, and only return the fully verified deliverable.

```
PHASE-BY-PHASE AUDIT CHECKLIST:

[ ] PHASE 01: 01_RESEARCH_BRIEF.md
    - Track Routing verified: Explicitly declared as Track 1 (Documented Case), Track 2 (Thought Experiment / What-If), or Track 3 (Mechanism / Explainer).
    - If Track 2: ZERO SEC Form 10-K filings, court dockets, or bankruptcy paperwork forced onto the concept.
    - Evidentiary Rigor: All 9 sections populated; 1 load-bearing pivotal detail identified; verified empirical mechanisms/telemetry.

[ ] PHASE 02: 02_SCRIPT.md
    - Target Runtime & Word Count: 1,860 to 2,325 words (12 to 15 minutes at 155 WPM).
    - 5-Act Narrative Architecture: Calibrated act splits with rising narrative momentum.
    - Phonetic Decimal Normalization: 100% of spoken decimals MUST use the word "point" (e.g. "1 point 2 million", "2 point 5 billion dollars"), NEVER raw numeric decimals ("1.2", "2.5").
    - Tone & Swagger: Conversational, witty, energetic; grounded in visceral physical stakes ("Popcorn & Delivery Van"); zero dry academic or legal prose.
    - In-Script Directing Tags: Correct tags ([DATA], [MAP], [REMOTION], [SHOWABLE]); Track 2 includes recurring [WATERMARK: HYPOTHETICAL SCENARIO] and [COMPOSITE: <role>].

[ ] PHASE 03: 03_TITLES_AND_HOOKS.md
    - Dedicated standalone file in videos/<episode-slug>/.
    - 5 distinct CTR title angles (POV-Led, Question-Led, Scale-Led, Mechanism-Led, Behavioral-Led).
    - Mobile search hooks and core curiosity gap articulation included.
    - Familiar Anchor Rule (9/10 benchmark): first four words name something a viewer with zero domain knowledge can picture — a house, a gun, a brand, an amount of money. A specialist-only anchor is allowed only when the clause after it supplies familiar stakes (e.g. "...You Don't Understand Geopolitics").
    - Don't give the answer away (10/10 benchmark): the title names the subject and promises a resolution rather than delivering it. Words like replaced, broke, starved, killed, destroyed, caused, proves and because often give the answer away — they aren't banned; use one only if the title still leaves the why or how open.
    - No length rule: benchmark range is 3–12 words; a fixed word cap would have rejected a validated 608k-view title.

[ ] PHASE 04: 04_THUMBNAILS.md
    - Dedicated standalone file in videos/<episode-slug>/.
    - 3 to 6 distinct options (Options A through F) mapping across the 7 thumbnail styles (T1–T7, `bible/03-thumbnail-style.md`).
    - Anchor Rule: a nameable, zero-domain-knowledge anchor plus one clear "wrong thing" named in one sentence each, before the prompt is written.
    - Legibility Rule: passes the 168px cap-height/arm's-length test, not a fixed word count; no word over 11 characters.
    - Callout density set by archetype (isometric 8–15, character/object-staging 0–2, split-comparison 0), each callout priceable with zero industry knowledge.
    - Exact syntax: ON-IMAGE TEXT: Direct in-generation text: "[exact text]".
    - Verbatim CP-7 quality mandate included in 100% of prompts: "follow best industry-standard guidelines and quality and visualisations".

[ ] PHASE 05: 05_CHARACTER_SETUP.md
    - Dedicated standalone file in videos/<episode-slug>/.
    - 2 to 4 distinct characters or composite archetypes.
    - Single static 4K portrait prompt per character (3840×2160); ZERO turnaround or multi-shot character sheets.
    - Verbatim CP-7 quality mandate in all prompts.

[ ] PHASE 06: 06_VOICE_DIRECTION.json & 06_VOICE_DIRECTION.md
    - Dedicated standalone .json and .md files in videos/<episode-slug>/.
    - Valid JSON schema conforming to VoxCPM2 specifications.
    - Control instructions: a vivid delivery instruction written fresh for each chunk (no fixed persona prefix).
    - Phonetic decimal normalization verified ("point") in target_text.
    - ZERO bracket tag leaks into target_text.

[ ] MANDATORY TIMING GATE: VO AUDIO SYNTHESIS
    - Audio stems synthesized and assembled into master_narration.wav in videos/<episode-slug>/voiceover/.
    - Sentence/word timestamp alignment JSON (metadata.json / alignment.json) generated.
    - HARD GATE: NEVER generate Phase 07 (07_BEAT_SHEET.md) until audio exists.

[ ] PHASE 07: 07_BEAT_SHEET.md
    - Dedicated standalone file generated STRICTLY after VO audio timestamps exist.
    - Visual cuts snap to ground-truth spoken audio downbeats (0.0s drift).
    - Stills average 2.5s to 4.0s; AI clips run 4–10s across several sentences and are excluded from that average.
    - Visual type, staging, camera motion, and visual role tagged per beat.
    - Signature Cinematic Check: at least one beat evaluated against ARCHETYPE_WHIP_ZOOM_MONTAGE / ARCHETYPE_INFINITE_PORTAL_TUNNEL / ARCHETYPE_3D_ORBITAL_FLYWHEEL fit; zero scheduled requires one stated reason, not silence. Multiple signature cinematics are spaced across acts, not clustered.
    - Chart-vs-Cinematic Bias Check: scan `[DATA]` beats for 3+ same-family dense ledger/waterfall charts in a row — each one either states why a dynamic archetype (whip-zoom, infinite tunnel, 3D flywheel, map-explainer, 3d-flyover) doesn't fit, or gets swapped to one.
    - Human/Consumer Cutaway Check: every Act contains at least one `[CUTAWAY]`-tagged beat (Technique 5 — a relatable human/consumer moment, not a literal illustration of that sentence's specific noun) or states why that Act has none.

[ ] PHASE 08: 08_STILLS_PROMPTS.md
    - Dedicated standalone file.
    - Batch 1: Nano Banana 2 4K stills (3840×2160, 16:9).
    - Verbatim CP-7 quality mandate in 100% of prompts.
    - Native text specified via ON-IMAGE TEXT: (never negated in negative prompt).
    - Feeder-plate check reconciled against Phase 07's Signature Cinematic Check — if Phase 07 flagged a whip-zoom montage / infinite tunnel / 3D flywheel beat, Batch 1 must include that archetype's required feeder stills (8–15 plates per CP-6's Cross-Batch Asset Pipeline Dependency clause), or Phase 08 must state why they were dropped.

[ ] PHASE 09: 09_VIDEO_PROMPTS.md
    - Dedicated standalone file.
    - Batch 2: AI Video prompts (1920×1080, 16:9, muted, 30fps).
    - Technique explicitly declared (Text-to-Video, Image-to-Video, Frames-to-Video) and INPUT FRAMES listed.
    - At most 30 AI clips; every clip is a whole 4–10s, spans its sentences, and wastes ≤ 0.5s (AI Video Clip Rule, CP-6).

[ ] PHASE 10: 10_REMOTION_SPECS.md
    - Dedicated standalone file.
    - Batch 3: Remotion motion graphics components matching in-script tags ([DATA], [MAP], [REMOTION]).
    - Exact frame count matching spoken audio; theme-locked color palette.
    - Every component imports `TOKENS` from `tokens.ts` and sets its base canvas/background color from `TOKENS.colors.background` or `TOKENS.colors.backgroundDark` (or a documented `rgba()` derived from one) — no invented hex literal for the base background, even one that "looks close enough" to the theme.
    - Component mix reconciled against Phase 07's Signature Cinematic Check — if Phase 07 flagged a candidate beat, Phase 10 must either deliver the matching archetype or state why it was dropped.
    - Each `[MAP]`/geographic component names the specific `REMOTION_GRAPHICS_ENGINE_REFERENCE.md` engine it uses (`d3.geoMercator`, `d3.geoAlbersUsa`, `d3.geoOrthographic`) — hardcoded pixel coordinates on a blank SVG canvas is not a valid substitute, and no MapTiler/Cesium/Google-tile dependency is permitted.
    - Each signature-cinematic component lists the exact Batch 1 feeder-still filenames it consumes via `<Img>`/`staticFile`; a component with scheduled feeder stills but zero image usage fails this bullet.
    - Every on-screen label runs through the Gate 4 Jargon List (line 769); any acronym is expanded inline or cut, and no component carries more than 4 live text labels on screen at once.
    - Labels are big and few, never shrunk to fit more words — and no text overlaps another text element or sits on top of a chart's own axis/plot/label.

[ ] PHASE 11: 11_AUDIO_DESIGN.md
    - Dedicated standalone file.
    - Batch 4: Score bed prompts (Suno/Udio) with BPM, Key, Instrumentation, and Mood.
    - Precise volume ducking envelope specs (-32dB to -35dB base, -50dB math duck, +8dB pause swells, 0dB silence cuts).
    - Tactile foley cues mapped to beat sequence.

[ ] PHASE 12: shorts.md
    - Dedicated standalone file.
    - Vertical (9:16) format, 30 to 60s duration.
    - High-energy opening hook, fast visual turnover.

[ ] PHASE 13: 12_CAPCUT_ASSEMBLY.md
    - Dedicated standalone file.
    - Multi-track timeline mapping (Tracks 0 to 3).
    - A/V duration drift verified to be < 0.5 seconds.
    - All AI video clips muted (-inf dB).

[ ] PHASE 14: 13_FINAL_METADATA.md
    - Dedicated standalone file.
    - Final high-CTR title.
    - Verified description with frame-accurate chapter timestamps derived directly from final captions.
    - 20+ curated SEO tags.
```

---

### **Clean-Room Isolation & Project Directory Architecture**

> [!IMPORTANT]
> **CLEAN-ROOM ISOLATION LAW (ZERO CROSS-EPISODE MIMICRY):**
> When generating or editing deliverables for an episode in `videos/<target-episode>/`, the AI generation engine is **STRICTLY FORBIDDEN from reading, opening, listing, searching, or copying files from any other completed episode directory in `videos/` (such as `videos/01-peloton-collapse/`).**
>
> **Why Cross-Episode Inspection is Catastrophic:**
> 1. **Architectural Contamination:** Older episodes may have been built under legacy monolithic conventions (e.g. a single 340KB `03_PRODUCTION_DOCUMENT.md`). Reading past episodes causes the AI to mistakenly replicate obsolete monolithic structures.
> 2. **Tone & Track Bleed:** Each episode belongs to its own Track (e.g. Track 1 Corporate Fraud vs Track 2 Thought Experiment). Copying patterns from a corporate fraud episode forces irrelevant SEC filings, court dockets, and dry legalistic tone onto speculative simulations.
> 3. **Timing & Inventory Drift:** Each episode's beats, prompts, and audio stems must be calibrated strictly to its own unique narration. Copying structure from adjacent episodes introduces uncalibrated durations and broken asset mappings.
>
> **The Three Permitted Reference Sources:**
> When executing any task for an episode, the AI may ONLY inspect:
> 1. `FinanceCraft — Channel Bible, Asset Guide & Description.md` (The Master Specification).
> 2. `videos/_template/` (The Canonical Starter Templates).
> 3. The target episode's own local workspace (`videos/<target-episode>/`).
>
> **Directory Architecture & Legacy Project Hygiene:**
> - Active projects reside in `videos/<episode-slug>/`.
> - The canonical template directory `videos/_template/` MUST be maintained with modular starter files mirroring the 14-phase sequence.
> - **Legacy Archival Rule:** Any completed episode that uses legacy monolithic structures should be quarantined into an `archive/` directory (e.g. `archive/01-peloton-collapse/`) or left untouched. The AI must treat all sibling episode folders as invisible dark boxes.

---

## Phased Generation Protocol — Modular File Architecture & Audio-First Timing

> [!IMPORTANT]
> **CRITICAL ENGINE DIRECTIVE: MODULAR FILE ARCHITECTURE (ABSOLUTE BAN ON MONOLITHIC `production.md`):**
> The engine MUST NOT append or consolidate the entire production pipeline into a single monolithic file (e.g. `production.md` or `03_PRODUCTION_DOCUMENT.md`). Monolithic documents cause context window bloat, token truncation, formatting corruption, and unmaintainable workflows.
> 
> **MANDATORY RULE:** Every single phase and asset category MUST be generated and saved as an **independent, standalone Markdown file** in the episode project directory (`videos/<episode-slug>/`).
> 
> **MANDATORY TIMING RULE (AUDIO-FIRST BEAT TIMING):**
> The engine MUST NOT generate visual beats (`07_BEAT_SHEET.md`) or visual asset prompts before master voiceover audio is synthesized. Calculating beat durations from raw word counts ($T = W / 155$) is strictly a rough pre-production estimate. Real voiceover delivery introduces organic phrasing downbeats and pauses that cause pre-calculated beats to suffer massive cumulative drift.
> 
> **The visual beat sheet (`07_BEAT_SHEET.md`) MUST be generated strictly AFTER the voiceover audio track (`master_narration.wav`) and its sentence/word-level timestamp alignment JSON exist.** This guarantees that every visual cut snaps to the narrator's natural spoken cadence with 0.0s drift.

### The 14 Modular Pipeline Deliverables:

| Phase | Deliverable File | Timing Dependency | Scope & Description |
| :---: | :--- | :--- | :--- |
| **01** | **`01_RESEARCH_BRIEF.md`** | Pre-Production | Evidentiary brief, mechanism gap list, pivotal detail, primary citations. |
| **02** | **`02_SCRIPT.md`** | Scripting | Master narration script (5-Act structure, CP-2 compliant, staccato rhythm, normalized decimals, inline tags). |
| **03** | **`03_TITLES_AND_HOOKS.md`** | Packaging — runs after the Idea Gate, **before 02**; built from title, thesis and premise only | 5 distinct CTR title angles, mobile search hooks, provisional core thesis. Standalone file. |
| **04** | **`04_THUMBNAILS.md`** | Packaging — runs right after 03, **before 02**; never built from the script | 3–4 visual thumbnail concepts, each with a named anchor + wrong-thing pair, cap-height-tested text, and Nano Banana 2 prompts. Standalone file. |
| **05** | **`05_CHARACTER_SETUP.md`** | Visual Direction | Caricature (Track 1) or composite archetype (Track 2) prompts with single static reference portraits. Standalone file. |
| **06** | **`06_VOICE_DIRECTION.json`<br>`06_VOICE_DIRECTION.md`** | Audio Production | Chunked VoxCPM2 JSON with a vivid delivery instruction written fresh for each chunk (no fixed persona prefix), phonetic decimals (`point`), and API copy-blocks. Standalone files. |
| **GATE** | **Master VO Audio & Alignment JSON** | **Audio Synthesis** | **MANDATORY TIMING GATEKEEPER:** Synthesize master voiceover audio stems and output sentence/word timestamp alignment JSON. **Stop here until audio exists.** |
| **07** | **`07_BEAT_SHEET.md`** | Visual Direction | **Generated STRICTLY AFTER VO Audio & Timestamps exist.** Chronological beat sheet with exact millisecond downbeats (`00:00.0 - 00:03.4`), sentence-bound visual cuts, framing, motion. Standalone file. |
| **08** | **`08_STILLS_PROMPTS.md`** | Asset Generation | Consolidated Batch 1: All Nano Banana 2 4K stills (3840×2160) generation prompts. Standalone file. |
| **09** | **`09_VIDEO_PROMPTS.md`** | Asset Generation | Consolidated Batch 2: All AI Video clips (Google Flow / Omni, muted, 1920×1080) generation prompts. Standalone file. |
| **10** | **`10_REMOTION_SPECS.md`** | Asset Generation | Consolidated Batch 3: Remotion motion graphics components, animation code, and render commands. Standalone file. |
| **11** | **`11_AUDIO_DESIGN.md`** | Audio Production | Dedicated background music score beds (Suno/Udio prompts), volume ducking envelopes, and tactile foley cues. Standalone file. |
| **12** | **`shorts.md`** | Spinoffs | Standalone vertical (9:16) spinoff scripts, NotebookLM Video Overview prompts, and CapCut vertical assembly instructions. |
| **13** | **`12_CAPCUT_ASSEMBLY.md`** | Post-Production | Multi-track timeline assembly guide (Tracks 0–3), transition rules, foley placement, and audio ducking curves. Standalone file. |
| **14** | **`13_FINAL_METADATA.md`** | Distribution | Final high-CTR title, verified description, 20+ curated SEO tags, and frame-accurate chapter timestamps extracted from final captions. Standalone file. |

---

## Video technical spec — every asset must match this

**Final output: 1920×1080, 16:9, 30fps.** This is what Remotion renders at, what AI video clips are generated at (request this aspect ratio explicitly in every video prompt), and what the CapCut timeline is built at.

**Static images are the one deliberate exception — generate at 3840×2160 (4K) or higher, same 16:9 ratio.** These get pushed in on via CapCut pan/zoom or layered parallax, which crops into part of the image — generating at 2x the final resolution keeps that crop from ever looking soft. This applies to every static image: beat stills, character references, and thumbnails alike.

---

## Tool inventory (this pipeline's actual setup — don't assume other tools or workflows)

- **AI image generation** (Nano Banana 2 or an equivalent still-image model — Nano Banana 2 specifically is the current default; note the version explicitly rather than leaving it unversioned, since capability differs meaningfully between versions) — run manually through the web UI by the user. Generate at 3840×2160 per the spec above.
- **AI video generation** (e.g. Google Omni/Flow or an equivalent tool) — run manually through the web UI by the user. Clips are whole seconds from 4 to 10, generated at the length used (AI Video Clip Rule, CP-6); generate at 1920×1080, 16:9. Supports three operational modes: (1) **Text-to-Video** (direct generation from prompt with 0 frames / no reference image, ideal for atmospheric establishing shots, environmental pans, and scenes with no continuity dependency), (2) **Image-to-Video** (one reference still to animate camera movement, zoom, or parallax), and (3) **Frames-to-Video** (start + end pre-approved stills to lock character caricature consistency and gestures without morphing). **This is not silent by default — it generates its own synchronized audio automatically, including ambient sound it infers from the visual (room tone, environmental noise), unless the prompt explicitly mutes it.** Every generation prompt must contain an explicit no-audio instruction as part of its own text (e.g. "...no audio, mute, silent output") — silence has to be requested, it is never the tool's default state.
- **Remotion** — code-based motion graphics and dynamic data/geographic animations, built by the coding agent (not the user manually). Render at 1920×1080, 30fps (master) or 1080×1920 (shorts), matching the technical master spec. The pipeline leverages three specialized skills and an installed component catalog:
  1. **`newsroom-chart-animations`**: For evidence-bearing financial charts, cascading waterfalls, stock bubble curves, proportional timelines, and animated counters. Follows strict newsroom editorial design (quiet field, single semantic accent, visible sourcing directly under the title card, no decorative parallax/particles).
  2. **`map-explainer`**: For 2D geographic maps, supply chains, maritime routes, and regional border/fill blooms. 100% vector/illustrated — `d3-geo` projections (`d3.geoMercator`, `d3.geoAlbersUsa`) over `topojson`/`world-atlas` GeoJSON, rendered as flat cel-shaded fills and strokes in `TOKENS.colors.*`, with projected React HTML overlay labels. No basemap tile server, no satellite imagery — real-world map imagery is never fetched for this skill.
  3. **`3d-flyover`**: For cinematic globe rotations and 3D aerial flyovers of industrial complexes, corporate towers, and terrain. 100% vector/illustrated — `d3.geoOrthographic()` drives the rotating-globe camera, and site/terrain flyovers are built from layered illustrated parallax art (Batch 1 Nano Banana feeder stills) rather than real terrain mesh. Features Chaikin curved-path smoothing, banking camera mechanics, and deterministic frame settling. No CesiumJS, no MapTiler terrain mesh, no Google Photorealistic 3D Tiles.
  4. **`remotion-bits`**: Pre-built catalog of 42 kinetic UI, typography, and text components (`variable-speed-typewriter`, `bit-card-stack`, `bit-ken-burns`, `bit-basic-counter`).
- **Background instrumental music & Sound Design** (e.g. Suno v3.5, Udio, ElevenLabs Music, or Epidemic Sound / Artlist) — a single cohesive background score bed per episode (tailored to the video's primary archetype) plus tactile micro-foley sound effects, generated via dedicated **Audio Asset blocks** (per the Audio Architecture & Sound Design Engine).
- **CapCut MCP — local draft-file variant.** Edits CapCut's local project files directly. Requires an existing template draft to clone project structure from. CapCut must be fully closed while the agent edits it — it autosaves on a timer and will clobber changes made while open. Edits accumulate in a session and only commit to disk on an explicit save-and-validate step.
- **Asset mix: stills cut at rapid documentary tempo (2.5s–4.0s average for stills), with AI video carrying roughly 40–60% of the runtime (AI Video Clip Rule, CP-6).** Stills with active pan/zoom handle quick punches and readable text, but visual momentum is sustained with Remotion financial charts (`newsroom-chart-animations`), 2D/3D map explainers (`map-explainer` / `3d-flyover`), and cinematic AI scene motion. Reach for AI video for key atmospheric turns, character actions, or mechanical movements.
- **NotebookLM Video Overview — Shorts only, never the long-form pipeline.** Confirmed by hands-on use: it's slow, capped around 3-4 minutes per generation, and doesn't hold up across many distinct scenes — it's genuinely good at one thing, a short vertical video with a slow-changing or largely static visual (a chart, an evolving diagram), and a poor fit for anything else. It never appears in Phase 4 or Part A's main beat generation. Its only role is Phase 6 below.

If a better-suited tool exists for a specific beat that isn't in this inventory, name it as a suggestion inline — don't force a beat into a tool that's a poor fit just because it's the one on the list.

---

## File naming convention — apply everywhere, without exception

`[3-digit sequence]_[short-descriptor]_[variant].[ext]`

**Sequence numbers increment by 10 as the standard rule** (010, 020, 030...), not just an example — this leaves room to insert a beat later (015) without renumbering everything after it. Master audio tracks use sequence `000` or the beat sequence where their cue triggers (e.g. `000_bgm_act1_suspense.mp3`, `060_bgm_act2_flywheel.mp3`).

**Variant suffix — two conventions, used for two different things, never interchangeably:**
- `_start` / `_end` — specifically for a Frames-to-Video pair, where the two files are the literal first and last frame of one continuous beat.
- `_A` / `_B` / `_C` — for genuinely separate alternate options meant for human review and selection (thumbnail variants, an A/B test). Never use letter variants for a Frames-to-Video pair, and never use start/end for anything that isn't one.

Example: `012_ebbers-intro_start.png`, `012_ebbers-intro_end.png`, `012_ebbers-intro.mp4` (the resulting clip, no variant suffix needed once it's a single finished file).

**Visual Asset Copy-Paste Block (Stills, AI Video, Remotion, Real-World Assets):**

```
FILENAME: [exact filename per the convention]
TYPE: [Static Image / AI Video / Remotion / Real-World Asset]
TECHNIQUE: [N/A / Text-to-Video (0 frames / no reference image) / Image-to-Video (1 frame) / Frames-to-Video (2 frames: start + end)]
INPUT FRAMES: [None / filename_start.png / filename_start.png + filename_end.png]
PROMPT: [full generation prompt, verbatim, ready to paste — must always include: "follow best industry-standard guidelines and quality and visualisations"]
NEGATIVE PROMPT: [full negative prompt, verbatim]
CONTINUITY: [dependency note, or "None"]
ON-IMAGE TEXT: [Exact text to render in generation via Nano Banana 2, or "None" for purely non-textual stills]
DURATION: [generated length, whole seconds 4–10, = the span it covers; retime ≤10% or trim ≤0.5s]
```

**Audio Asset Copy-Paste Block (Music Score Beds & Tactile Foley):**
*All music score creation prompts and major foley triggers live directly in the beat production setup as a dedicated `Audio` asset type, ensuring complete 1:1 synchronization between visual narrative turns and acoustic cues.*

```
FILENAME: [exact filename, e.g. 000_bgm_act1_suspense.mp3 / 025_foley_subbass_boom.wav]
TYPE: Audio (Score Bed / Tactile Foley)
MUSIC BED: [M1 Inquisitive Neo-Classical / M2 Geopolitical Dark Thriller / M3 Smoky Corporate Noir / M4 Minimalist Pedagogical Bed / M5 Investigative Macro-Suspense / N/A (Foley)]
TOOL / ENGINE: [Suno v3.5 / Udio / ElevenLabs Music / Epidemic Sound]
PROMPT: [full generation prompt, verbatim, ready to paste with BPM, Key, Instrumentation, and Mood — must always include: "follow best industry-standard guidelines and quality and visualisations"]
NEGATIVE PROMPT: [full negative prompt, verbatim: e.g. vocals, singing, speech, choir, heavy distortion, harsh drums]
EPIDEMIC SEARCH QUERY: [search keywords + genre + mood filters]
TARGET DURATION: [target length, e.g. 2:30 - 3:30 / 150s loopable]
TIMELINE ROLE: [Act I score bed, Base -32dB, pause swell +8dB on pauses >1.2s, dead silence drop at 00:27.5]
```

**Field Boundary Rule (Strict Separation of Generation vs. Editing):**
- `TECHNIQUE` is strictly for the AI generation modality:
  - For AI Video: `Text-to-Video (0 frames / no reference image)`, `Image-to-Video (1 frame)`, or `Frames-to-Video (2 frames: start + end)`.
  - For Static Images, Remotion, and Real-World Assets: `N/A`.
- **DO NOT write post-production or editing instructions (e.g. "animated with CapCut pan/zoom", "layered dissolve", "crossfade") inside `TECHNIQUE` in Phase 4.** These blocks exist purely for asset generation via copy-paste. All editing techniques, timeline placement, keyframed pans, and transitions belong exclusively in **Part B — Editing & Assembly**.

**Universal Prompt Quality Mandate:** With each single prompt generated via this engine (stills, AI video clips, character reference files, thumbnails, visual graphics, and audio score tracks), it must always explicitly include the instruction: `"follow best industry-standard guidelines and quality and visualisations"`.

**Mandatory Two-Stage Workflow (Chronological Generation First, Tool-Grouped Batches Second):**
1. **Stage 1 — Chronological Beat Generation (Phase 4):** The engine MUST first generate all beats in strict chronological order from Beat 010 to the final beat. This guarantees 100% narrative synchronization with the script and ensures no narration sentence is orphaned.
2. **Stage 2 — Tool-Grouped Consolidated Batches (Phase 5):** Once all chronological beats are written, the engine MUST group all prompts by asset type (Batch 1: Stills, Batch 2: AI Videos, Batch 3: Real-World Insets, Batch 4: Remotion Code Graphics, Batch 5: Audio Bed) so the user can copy-paste prompts into each tool in bulk in one uninterrupted sitting.

If a prompt runs very long, it can be compacted for length — but only after confirming every functional instruction (negative prompt exclusions, continuity references, text handling, and the universal quality mandate) survives the compaction. Never trim for brevity at the cost of losing an instruction.

---

# PART A — ASSET CREATION & COLLECTION

## Phase 1 — Titles & Core Narrative Hook (Pre-Production)

**Titles come before the script.** Write them from the Idea Gate's thesis and premise, not from a draft script.

**Two passes, same as thumbnails.** *Pass 1 — generate wide:* 10–15 raw titles, one line each, from only the thesis, the premise and the zero-context viewer. No angle list, character limits or keyword rules in view. *Pass 2 — check and develop:* a fresh pass applies the rules below, keeps the strongest, and develops the final set.

**Titles: deliver 4-5 distinct variations, never just one.** Ground them in real data — pull recent high-performing titles from the Master Tracker's Coverage Map and Outlier Log tabs and identify keyword phrases and structural patterns recurring in outlier videos, plus the strongest terms from Genre Trend Scan. Each variation should test a genuinely different angle, not reword the same title:
1. Number/scale-led (e.g. "How This $10B Company Collapsed in 2 Years")
2. Curiosity/question-led
3. Keyword-front-loaded for search, using the strongest term from Genre Trend Scan
4. Name/entity-led, if the story has a strong central figure
5. Angle-statement-led, leaning on the specific pivotal detail

State which one is recommended and why, but always deliver all 4-5 — the final pick is the user's call, not something to make unilaterally.

**Provisional Narrative Hook & Evidentiary Citations (Pre-Production):**
- First 1-2 lines carry the real hook and the primary keyword — this is what shows before "show more" truncates it, and matters more than anything after it.
- A short paragraph (2-4 sentences) expanding on the angle, written for humans, not keyword-stuffed.
- Relevant keyword phrases worked naturally into the body, not listed.
- A short sources list for credibility and legal cover (lives only in the description — never read aloud or shown as a list on screen).
- Never write the subscribe CTA or channel boilerplate here — that's a fixed block at the channel level, not authored per episode.

> [!CRITICAL]
> **MANDATORY TIMING & ACCURACY RULE (NO ESTIMATED TIMESTAMPS IN PHASE 1):**
> The official YouTube Video Description and its Chapter Timestamps (`00:00 - Introduction`, etc.) **MUST NOT be finalized or output with fabricated timestamps during Phase 1 pre-production**. It is physically impossible to know exact downbeats before audio voiceover recording, pacing, and visual editing occur. Pre-generating timestamps causes broken, unaligned YouTube chapters.
> 
> **The official YouTube Description and Chapter Timestamps MUST be generated at the very end of production (in Part B / post-production), derived with frame-accurate precision directly from the final shape of the captions (`.srt` / `.json`) and timeline cuts.**

## Phase 2 — Thumbnail Concepts

Generated as a static image, never AI video. Runs right after the title is locked (Phase 1), **before the script**. Built only from the locked title, the thesis and the premise — never from the script's scenes, props or locations. A script can drift off its premise; packaging built from it inherits the drift.

**Step 1 — Generate wide (creative pass).** Brief the model with only:
- the locked title, the one-line thesis, the premise
- the viewer: someone scrolling with zero context
- the one test: at thumbnail size, a stranger knows what this is about in under a second and wants to click
- the principle: something they already recognise, plus one thing wrong with it
- the Benchmark Gallery (Thumbnail Style Reference)
- hard constraints only: illustrated, never photoreal real people; Hypothetical episodes must read as fiction; a real logo, when the company or platform is the subject, stays literal and undistorted

Ask for 8–10 concepts, one line each, no justification. Don't pass the archetype menu, legibility limits or callout counts into this pass — they narrow ideas before the ideas exist.

**Step 2 — Check (a separate, fresh pass).** Give a new pass only the concepts and the Thumbnail Style Reference rules: the Anchor Rule, the Legibility Rule, Callout Density, the Instant-Recognition Object Rule, the subject-bridge check, and the closest gallery benchmark. For each concept: keep or cut, with a one-line reason. A cut concept is replaced by a new idea from the premise — never patched until it passes. Renaming "demurrage" to "late fees" is patching.

**Step 3 — Develop.** Take the best 3–6 kept concepts, spread across genuinely different ideas, into full Nano Banana 2 prompts at 3840×2160.

**The deliverable (`04_THUMBNAILS.md`)** contains, per concept: the idea in one sentence, one line on why it gets the click, and the prompt. The Step 2 check notes stay out of it.

Production notes:
1. Same illustrated system as the episode. A caricature-driven story may use its reference character, but the idea comes first.
2. Nano Banana 2 renders typography directly. If a real logo comes out distorted, generate with a plain placeholder and composite the real logo afterwards.
3. Palette follows the episode's tone, with one dominant focal point.
4. Export at 1280×720 for upload, keep the 3840×2160 source, and read it at 168px wide before finalising.
5. Every prompt carries the Universal Prompt Quality Mandate clause.

Output filenames: `000_thumbnail_A.png`, `000_thumbnail_B.png`, `000_thumbnail_C.png`, `000_thumbnail_D.png`, `000_thumbnail_E.png`, `000_thumbnail_F.png`.

## Phase 3 — Character setup

For every character appearing in more than one beat — Margery, any real-person caricature, any composite or fictional figure — lock its design first.

1. Generate the character's reference still at 3840×2160. **This must be a single static pose at a single angle — a standalone portrait or figure, never a turnaround, multi-view spread, "character sheet," or "reference sheet."** Those last two terms specifically mean multiple angles of the same character in one image in illustration convention, and an image model follows that convention literally if either word appears anywhere in the prompt — avoid them entirely. Add "no turnaround, no multiple views, no character sheet, no front/side/back views in one image, single pose only" to the negative prompt for every character reference generation. Save it as `000_[character-name]_reference.png` — every later beat involving this character points back to this one file, not a fresh description. Multiple recurring characters each get their own file this way — the name in the filename is what prevents collisions, not the sequence number.
2. **To keep the same character consistent across separate AI video generations:** either (a) stay inside the same conversation thread for every clip involving this character in one sitting, since consistency holds within a session, or (b) upload the saved reference file fresh at the start of each new session and describe the character by pointing back to it.
3. **Dialogue — read this before generating any talking beat, no exceptions:**
   - **Margery, or a fictional/composite character with no real-world identity:** dialogue is fine if and only if the character is actively roleplaying an in-world scene; it can be lip-synced.
   - **A real named person's caricature (Documented Case episodes only — never appears in The Hypothetical at all):** never write dialogue, never lip-sync, regardless of what a "talking beat" might seem to call for. These beats are gesture-only — VO carries all content.
   - **The one narrow exception:** a meta, self-aware sign-off aside — obviously non-documentary, understood as the channel breaking character for a joke. Even there: one short line, never a claim about the story's events, and skip it entirely on tragedy or victim-involved episodes.
4. **Margery's Persona: Situational Narrative Protagonist, NEVER a News Anchor.**
   - **No Desk Talking Heads:** Margery is **not** a television news presenter, anchor, or talking head sitting at a desk. Do NOT generate generic "Margery at forensic desk" clips or force her into act transitions.
   - **In-World Protagonist Only:** She is summoned **only when the script narrative explicitly demands a human proxy or protagonist** to experience or demonstrate the scenario firsthand (e.g., in a hypothetical episode about surviving on a deserted island with luxury items, Margery is the character stranded on the beach unboxing goods; or an investigator walking into an abandoned industrial warehouse).
   - **Zero Quota Obligation:** If the script does not demand a protagonist, she does **not appear at all**. The video quota is reallocated to cinematic scene motion, dynamic Remotion animations, and environmental storytelling.

List every recurring character in a short table before moving to beat-by-beat generation: Character Name | Reference Filename | Real Person or Fictional/Composite.

**"The Hypothetical" episodes use `[COMPOSITE: <role>]` instead of `[CARICATURE: <name>]`, exclusively — never both in the same episode.** These are invented, archetypal characters per the Style Bible's Section 10 design rule — deliberately generic, no specific distinguishing features, and never a real named person under any circumstance. They still get a locked reference file for visual consistency within the episode, but the dialogue rule flips: composite characters are fictional, so scripted dialogue is fine, same as Margery.

## Phase 4 — Beat-by-beat generation instructions

**Cold open — strongly encouraged, not forced:** open the episode on 2–4 AI video clips carrying the hook (roughly the first 10–20 seconds), part of the normal AI video budget. Motion in the first seconds is the strongest default we have. Deviate only when something else genuinely opens harder — e.g. the hook *is* a number best landed as a Remotion counter, or one arresting still says it faster — and state that reason in one line in the beat sheet. Never open on a logo, title card or channel intro.

**Two passes for visuals (Two-Pass Rule, `bible/05-cp-verify-phase-gates.md`).** *Pass 1:* go through the script and pitch the most striking visual idea for each beat — what would make a stranger keep watching — with only the timing math, the episode's style and the hard constraints in view. *Pass 2:* then fit those ideas to the checkpoints below (shot-duration bounds, AI-video cap, tag coverage, technique rules), changing format before dropping an idea.

**Visual layer:** apply `SKELETON_LIBRARY.md`'s Visual layer section before generating shots -- the opening-motion rule, each skeleton's signature visual (table in that file), and the rule to keep motion out from under a character speaking or a quote card.

**Mandatory Checkpoint 1: Narration Runtime vs. Beat Total & Sentence-Bound Timecode Gatekeeper:**
Before writing any beat, the engine MUST calculate and output the exact mathematical Sanity Check Audit Block. This is not a casual suggestion—it is a strict, inviolable gatekeeper that governs the entire generation.

1. **Exact Word Count ($W$):** Count every word of spoken narration in the finished script.
2. **Total Narration Runtime ($T$):** Calculate $T = (W / 155) \times 60$ seconds (at 155 wpm) or obtain the exact master voiceover audio runtime.
3. **Pacing & Shot Duration Bounds ($D$):** The timeline targets an overall average tempo of **$2.5\text{s} - 4.0\text{s}$**, achieved by balancing rapid photographic cuts with extended, evolving motion sequences.
   - **Static Image Pacing Standard (Anti-Fatigue Rule):** Default scene stills target **$2.5\text{s} - 5.0\text{s}$**; generic stills $> 6.0\text{s}$ are actively discouraged to eliminate visual fatigue. Multi-sentence scenes illustrated with stills MUST cut on every sentence using Cinematic Shot Progression (Wide $\rightarrow$ Medium $\rightarrow$ Punch-in). **The Nuanced Evidentiary & Emphasis Exception ($6.0\text{s} - 10.0\text{s}$):** Permitted only when a beat carries dense forensic reading material (SEC filings, deeds, balance sheets, contract exhibits) or high-stakes dramatic revelations where the audience needs cognitive time to absorb the claim while the narrator speaks. **Motion Requirement (Never Frozen):** Any static image held for $6.0\text{s} - 10.0\text{s}$ MUST deploy continuous slow Ken Burns push-in ($1.05\times - 1.15\times$) or layered 2.5D parallax so the screen remains alive.
   - **Motion Assets (AI Video & Remotion Graphics):** Durations are determined entirely by script and visual requirements, with **zero artificial suppression of duration**. Because active video motion, kinetic camera sweeps, and code-driven graphics evolve continuously without inducing static viewer fatigue, AI videos (e.g. 5s–8s full generative motion arcs) and Remotion graphics (e.g. 4s–12s+ data builds, 3D flyovers, and recursive zoom tunnels) are encouraged to hold across complete multi-sentence thought-blocks until the script pivots to a new topic. The engine must never artificially truncate a fluid motion beat just to enforce a cut.
5. **Maximum Allowed Beat Count ($B_{max}$):** $B_{max} = \lceil T / 2.5 \rceil$ (e.g. $\le 335$ beats for an 830s script).
6. **Target Beat Count ($B_{target}$):** $B_{target} = \text{round}(T / 3.5)$ (e.g. $\sim 230 - 240$ beats for an 830s script).
7. **The Audio-First Sentence-Bound Mapping Protocol:** To prevent visible lag and timing drift between the narrator and the visuals, **beats must be bound directly to sentence and phrase boundaries from the voiceover audio/forced alignment**. Slicing the script into arbitrary uniform boxes is strictly prohibited. When the narrator transitions to a new thought, the visual MUST cut on that downbeat.

**The Inviolable Coverage Rule & Coverage vs. Cut Distinction:**
The sum of all individual beat durations ($\sum D_i$) must equal the total narration runtime ($T$) within $\pm 2\%$. An engine generation that produces fewer than $B_{min}$ beats (for example, generating only 35–45 beats for an 840-second script, forcing shots to hold for 20+ seconds) is a **CORRUPT DELIVERABLE AND AN AUTOMATIC SYSTEM FAILURE**.
- **Coverage vs. Cut Distinction (Motion vs. Stills Partition):**
  - **For Static Stills:** The rapid cutting rule remains strictly enforced. Every sentence must cut to a fresh visual (targeting $2.5\text{s} - 4.0\text{s}$) using cinematic shot progression (Wide $\rightarrow$ Medium $\rightarrow$ Punch-in). A single static image must **never** lazily linger across multiple sentences.
  - **For Motion Assets (AI Video & Remotion Graphics):** The static fatigue rule does **not** apply. Because active video motion, camera moves, and code-driven graphics evolve continuously, an AI video or Remotion graphic is encouraged to hold across an entire thought-block (spanning 2, 3, or more contiguous sentences) until the script transitions to a new thought, allowing the full motion arc or data breakdown to play out without premature cuts.

**Mandatory Checkpoint 2: Multi-Shot Scene Construction Rules (How to achieve full beat coverage without repetition):**
To sustain rapid 2.5s–4.0s pacing across a documentary without visual monotony, the engine MUST use standard cinematic coverage techniques:
- **Technique 1 — Cinematic Shot Progression (Wide $\rightarrow$ Medium $\rightarrow$ Punch-in):** Break any multi-sentence setting or action into consecutive cuts:
  - *Cut 1 (Wide):* Establishing wide angle of the environment/facility/room (3.0–4.5s).
  - *Cut 2 (Medium):* Subject interaction, machine operation, or worker action in the scene (2.5–3.5s).
  - *Cut 3 (Punch-in / Macro):* Extreme close-up on a smoking gun detail, rusted joint, gauge, padlocked chain, or warning label (2.0–3.0s).
- **Technique 2 — Document Inset & Conceptual Metaphor Pairing:**
  - *Evidence Flash:* A real artifact with its one payoff line highlighted (1.5s–3.0s max) — only when that line is the drama, never as proof-wallpaper.
  - *Conceptual Illustration:* Cut immediately to an evocative narrative illustration/metaphor (e.g. crumbling concrete foundation, corporate chessboard, assembly line halted) to avoid dry paper fatigue.
- **Technique 3 — Caricature Performance & Metric Ping-Pong:**
  - *Beat A:* Executive caricature delivering action or reacting at boardroom desk / conference stage (3.0–4.0s).
  - *Beat B:* Cut to Remotion animated stock ticker display, balance sheet readout, or Wall Street trading terminal reacting (3.0–4.5s).
  - *Beat C:* Punch-in on the caricature's tense facial expression or retreating posture (2.0–3.0s).
- **Technique 4 — Remotion Data Visualizations:**
  - Convert complex numbers into animated newsroom charts, waterfall breakdowns, and counter cards (`newsroom-chart-animations`) rather than static text tables.
- **Technique 5 — Consumer & Cultural Juxtaposition:**
  - Cut rapidly between corporate boardroom decisions and consumer living rooms, warehouse floors, stranded container ships, or second-hand listings. This is the beat that isn't a literal illustration of that sentence's specific noun — a relatable human/consumer moment used as texture and contrast, not a paraphrase of the VO in picture form.
  - **Tag it:** any beat using this technique is marked inline as `[CUTAWAY: ...]` in the beat sheet's Staging & Subject Description column, the same convention already used for `[DATA]`, `[MAP]`, `[WATERMARK]`. An untagged juxtaposition beat doesn't count for the Human/Consumer Cutaway Minimum (CP-6) — the tag is what makes this technique checkable instead of a suggestion nobody reaches for.
- **Technique 6 — Kinetic FPV Drone Sweeps & Infinite Motion Loops:**
  - When narrating monumental physical scale (e.g. >500,000 sq ft empty plants, container ports, endless assembly bays) or systemic treadmill traps (relentless cash burn, infinite debt) running $>6.0\text{s}$, deploy **high-speed forward FPV drone sweeps or Remotion infinite recurring zoom tunnels (e.g. `InfiniteDroneZoomTunnel`)**. Continuous forward optical flow (vection) eliminates visual fatigue and visually dramatizes vast architectural scale far better than a static 2D blueprint.

**Mandatory Checkpoint 3: Production Technical Constraints Gate:**
1. **AI Video Budget & Dynamic Motion Engine:** follow the AI Video Clip Rule (CP-6): whole 4–10s clips spanning several sentences, generated at the length used, ~40–60% of runtime. **Remotion code graphics (Batch 4) are completely separate** and generated dynamically based on script data/map requirements (`[DATA]`, `[MAP]`), not part of the AI video budget. The engine is strongly encouraged to deploy cinematic drone shots and dynamic motion animations wherever visual pacing or physical scale benefits from continuous optical flow. Every AI video prompt MUST explicitly state `"1920x1080, 16:9, 30fps, no audio, mute, silent output"`.
2. **Universal Quality Mandate:** Every prompt block without exception MUST contain `"follow best industry-standard guidelines and quality and visualisations"`.
3. **Legal & Caricature Compliance:** Real persons (Foley, McCarthy) are illustrated caricatures, strictly gesture-only with zero lip-synced dialogue. Quotes are displayed on visual cards.
4. **Resolution Standards:** All stills generated at 3840×2160 (4K); all video and Remotion rendered at 1920×1080.

For every beat needing a generated or collected asset, produce the full copy-paste block (per the File Naming Convention section above) with:

**Beat number** — for cross-reference with Part B. No timestamp here — that's Part B's job.

**Asset type** — pick one based on the **Cinematic Elevation Principle** (select the format that maximizes visual dynamism, continuous optical flow, and audience retention; never let monumental physical scale, high-stakes data, or long-duration narration $>6.0\text{s}$ languish on a flat static drawing):
1. **AI Video (Cinematic Scene Motion, FPV Drone Sweeps & Performance — Batch 2, AI Video Clip Rule):** Strongly encouraged for beats conveying physical scale (cavernous mega-factories, container port gridlock, industrial assembly lines), dramatic character gestures, high-speed camera movement, and seamless forward looping fly-throughs. When a beat narrates vast physical architecture or a monumental space running $>6.0\text{s}$, proactively generate a high-speed forward FPV drone sweep or kinetic camera travel rather than a flat 2D still. Size each per the AI Video Clip Rule: one clip carries the whole scene across its sentences.
2. **Remotion Motion Graphic & Geographic Animation (Batch 4 — Dynamically Script-Driven, Separate from AI Video Cap):** Governed by the master control plane in [`references/REMOTION_GRAPHICS_ENGINE_REFERENCE.md`](file:///Users/bilalashraf/YT%20Videos/references/REMOTION_GRAPHICS_ENGINE_REFERENCE.md). Generated dynamically whenever called for by script tags (`[DATA]`, `[MAP]`, `[SHOWABLE]`, or `[REMOTION]`). Never forced by an arbitrary quota; scales naturally with the episode's factual needs. **Always select the archetype that is most engaging, kinetic, and propulsive for the narrative beat:**
   - **`ARCHETYPE_3D_FLYOVER_TERRAIN` (`3d-flyover`):** Cinematic globe rotation (`d3.geoOrthographic()`) or illustrated-parallax terrain/city aerial flyovers built from Batch 1 feeder stills — no real terrain mesh or photorealistic tiles. Features 3-pass Chaikin curved smoothing, constant ground speed, and natural banking roll into turns. Proactively deploy for large geographic parcels, factory sites, and remote terrain instead of flat drawings.
   - **`ARCHETYPE_WHIP_ZOOM_MONTAGE`:** Rapid staccato whip-zoom montage (3–6 frames per cut, Justin Odisho formula with simulated $300^\circ$ shutter angle motion blur) for high-energy chronologies, travel sequences, or multi-location recaps.
   - **`ARCHETYPE_INFINITE_PORTAL_TUNNEL`:** Continuous recursive zoom tunnel (continuous $u$ model with harmonic wobble) for infinite feedback loops, relentless cash burn treadmills, or psychological traps.
   - **`ARCHETYPE_NEWSPRINT_EDITORIAL` (Mandatory for Text-Heavy Documents):** Archival document and newspaper split-screen with animated highlighter marker sweep and red pencil sketch circle. **Strictly required for deeds, leaked memos, court transcripts, and SEC filings to eliminate static text fatigue.**
   - **`ARCHETYPE_ECONOMIC_FLYWHEEL` & `ARCHETYPE_3D_ORBITAL_FLYWHEEL`:** Compounding CAC payback loops, ecosystem lock-in models, and multi-node platform cycles.
   - **`ARCHETYPE_BULLWHIP_PHYSICS`:** Supply chain oscillation waves with exponential amplitude amplification.
   - **`newsroom-chart-animations` (for `[DATA]`):** Evidence-led financial data graphics, waterfalls, bubble curves, and timelines. Follows strict newsroom design (source under title card, single crimson/emerald semantic accent, zero decorative particles/parallax, 1s stable final hold).
   - **`map-explainer` (for 2D `[MAP]`):** Tracing routes, shipping corridors, supply chains, or regional choropleth reveals using `d3-geo` vector projections, electric draw-heads, sequenced border draws, and projected HTML label overlays — no basemap tile fetch.
   - **`remotion-bits` Catalog (42 Pre-Built Components):** Kinetic UI, typography, counter cards, and scene transitions (`variable-speed-typewriter`, `bit-card-stack`, `bit-basic-counter`, `bit-scene-3d-cube-nav`).
3. **Real-World Asset Insert:** For anything tagged `[SHOWABLE]` (a tweet, a headline, a photo, a price tag, the one damning line in a memo or document). **Anti-Static Rule:** If the document contains dense text, DO NOT present it as an un-animated static block. Pair it immediately with Remotion animated highlighter wipes (`ARCHETYPE_NEWSPRINT_EDITORIAL`), typewriter reveals, or rubber stamps (`ARCHETYPE_RUBBER_STAMP`).
4. **Static Image (4K Still for Safe-Title Pan/Zoom):** Used strictly for focused macro details, atmospheric establishing shots, character portraits, and visual metaphors where steady documentary pan/zoom provides deliberate pacing. **Strictly discouraged for text-heavy documents or long-duration statistical breakdowns.**

**Continuity dependency** — state this explicitly, every time, even when the answer is "none."

**On-image text** — Nano Banana 2 natively handles in-image typography, headlines, tickers, and data badges directly in generation. State this explicitly every time:
- *"None — for purely visual/atmospheric stills with no text elements (include 'no text, no gibberish text' in negative prompt)."*
- *"Direct in-generation text — specify the exact verbatim text in quotes inside the prompt for Nano Banana 2 to render directly (e.g. bold headline, statistic badge, screen readout, signpost). Do NOT include 'no text' in the negative prompt when text is requested."*
- *"Remotion motion graphic — for kinetic text, animated counting numbers, document highlights, or dynamic lower thirds built in code."*
Pick the matching option. Never include 'no text' in negative prompts when on-image text is requested in the prompt.

**Generation instructions**, matched to asset type (every prompt must include: `"follow best industry-standard guidelines and quality and visualisations"`):
- *Static image:* the full prompt (Style Bible system, correct palette register, character reference file if applicable, with `"follow best industry-standard guidelines and quality and visualisations"`), plus negative prompt, at 3840×2160.
- *AI video:* which technique (`Text-to-Video` with 0 frames / `Image-to-Video` with 1 frame / `Frames-to-Video` with 2 frames / conversational edit), the full prompt (including `"follow best industry-standard guidelines and quality and visualisations"`), the negative prompt — pulled from the Style Bible's standing negative-prompt category that actually matches this beat's content — target duration (6-8s), 1920×1080 stated in the prompt, which input frames it references by filename (or `None` if Text-to-Video). State explicitly in the prompt that audio is muted/off, as words the prompt actually contains, not a separate note.
- *Real-world asset:* exactly what to search for and where, what to do once found, and how it enters the illustrated world as a clean inset card with a soft drop shadow (composited via Nano Banana 2 reference or Remotion overlay) — never blended into the background art, never a full-frame photoreal cut.
- *Remotion motion graphic / data / map:* specify the exact engine & archetype from [`references/REMOTION_GRAPHICS_ENGINE_REFERENCE.md`](file:///Users/bilalashraf/YT%20Videos/references/REMOTION_GRAPHICS_ENGINE_REFERENCE.md), exact dataset/metric or geographic coordinates/GeoJSON, reveal sequence, information hierarchy (Title, Unit, Source under title, baseline plot, direct annotations), target duration in frames (at 30fps, dynamically sized to spoken narration, **NO artificial 7.0s hard cap**), upstream input frames required from Batch 1 (e.g. image sequence for montage, corridor plate for infinite tunnel, cutout PNG for flywheel), and headless render flags (`--gl=angle`). **Must explicitly mandate palette-lock to the video's established color tokens (e.g. cardstock `#f6f3ec`, charcoal `#1c1917`, semantic accent `#dc2626` / `#16a34a`). Must always include:** `"use best graphic motions practises and guidelines from top performing graphics"` and `"follow best industry-standard guidelines and quality and visualisations"`.

**Reference-sourcing flag** — include whenever a beat involves something current AI generation struggles with: exact real geography, a specific real UI, a historically accurate object, an exact landmark. State plainly to search Pinterest or an equivalent source for a specific query and upload references before generating.

## Remotion Motion Graphics Engine & Archetype Master Plane

> **Master Reference File:** Consult [`references/REMOTION_GRAPHICS_ENGINE_REFERENCE.md`](file:///Users/bilalashraf/YT%20Videos/references/REMOTION_GRAPHICS_ENGINE_REFERENCE.md) for full architectural math, 25 archetype prompt templates, Remotion-Bits catalog, and ground-truth working files.

**Environment setup — one-time, before any Remotion work, not per episode:**

```bash
npm install remotion@^4.0.523 @remotion/cli@^4.0.523 @remotion/renderer@^4.0.523
npm install remotion-bits@^0.2.0 culori@^4.0.2
npm install d3 d3-geo topojson-client world-atlas
```

### The Four Cardinal Laws of Remotion Production:

1. **The Visual Engagement & Kinematics Law (Detailed & Descriptive):**  
   The engine must actively know *which* Remotion graphic to use and *when* to use it, describing its motion mechanics in rich, breathtaking detail rather than generic notes:
   - When narrating monumental physical scale, remote parcels, or industrial facilities: deploy **Cinematic 3D Aerial Terrain Flyovers (`ARCHETYPE_3D_FLYOVER_TERRAIN`)** with banking camera mechanics over illustrated parallax feeder-still plates (or a `d3.geoOrthographic()` globe for cross-border scale).
   - When narrating high-octane sequences, rapid historical chronologies, or multi-location expansion: deploy **Rapid Staccato Whip-Zoom Montages (`ARCHETYPE_WHIP_ZOOM_MONTAGE`)** with $300^\circ$ shutter angle blur.
   - When narrating systemic treadmill traps, endless cash burn, or algorithmic loops: deploy **Infinite Recursive Drone Zoom Tunnels (`ARCHETYPE_INFINITE_PORTAL_TUNNEL`)** with continuous $u$-model optical flow.
   - When narrating compounding business mechanisms: deploy **Economic Flywheel Loops (`ARCHETYPE_ECONOMIC_FLYWHEEL`)** or **Bullwhip Physics Waves (`ARCHETYPE_BULLWHIP_PHYSICS`)**.

2. **The Palette & Theme Cohesion Law:**  
   Remotion components must NEVER be left in raw library styles, generic dark-mode UI, or arbitrary color schemes. Every graphic, chart, 3D flight, and map MUST strictly inherit and adhere to the video's established visual palette: FinanceCraft's tactile warm cardstock (`#f6f3ec`), deep charcoal typography (`#1c1917`), and single semantic accents (crimson `#dc2626` for destruction/loss, emerald `#16a34a` for profit/retention, amber for targets).

3. **The Anti-Static Document & Animated Highlight Law:**  
   Strictly forbid leaving the audience staring at un-animated, text-heavy static document images or raw contract walls. Whenever a beat introduces a deed, court transcript, leaked memo, or SEC Form 10-K excerpt, the beat planner MUST deploy an active Remotion reveal:
   - **Highlighter Sweep (`ARCHETYPE_NEWSPRINT_EDITORIAL`):** Yellow highlighter marker wipe over the key incriminating phrase with a red ink circle around the target metric.
   - **Typewriter Keystrokes (`variable-speed-typewriter`, `multitext-typewriter`):** Real-time typing cadence for leaked communications and contrasting claims.
   - **Rubber Stamp Slam (`ARCHETYPE_RUBBER_STAMP`):** Official verdict badge slamming down on the document with particle dust.
   - **3D Card Stack (`bit-card-stack`):** Fanning out multi-page exhibits in 3D perspective space.

4. **The Cross-Batch Upstream Input & No-Hard-Cap Duration Law:**  
   - **No Artificial 7.0s Hard Cap:** Remotion motion graphics and continuous cinematics have NO hard 7-second ceiling. Because their visuals are continuously kinetic, evolving, and captivating, clips can comfortably run **$4.0\text{s} - 12.0\text{s}+$** to match the full spoken narration beat without causing fatigue.
   - **Cross-Batch Asset Scheduling:** The engine must recognize that Remotion cinematics often depend on AI stills generated in Batch 1. The beat planner must explicitly declare these input dependencies in the beat instructions and output them into Batch 1 (e.g., the 8–15 photo plates for a whip-zoom montage, the vanishing-point portal plate for an infinite zoom tunnel, or the transparent cutout PNG for an orbital flywheel).
   - **Mandatory Quality Clause:** Every Remotion prompt without exception MUST include: `"use best graphic motions practises and guidelines from top performing graphics"` and `"follow best industry-standard guidelines and quality and visualisations"`.

### Master Archetype Quick-Routing Table:

| Narrative Requirement | Selected Archetype ID | Engine / Skill | Working Ground Truth File |
| :--- | :--- | :--- | :--- |
| **Aerial Site / Monolith / Terrain** | `ARCHETYPE_3D_FLYOVER_TERRAIN` | `3d-flyover` (illustrated parallax / `d3.geoOrthographic`) | `OhioFarmlandFlyover.tsx` |
| **High-Energy Chronology / Montage** | `ARCHETYPE_WHIP_ZOOM_MONTAGE` | Custom Odisho Shutter Math | `InfiniteZoomMontage.tsx` |
| **Treadmill Trap / Endless Burn** | `ARCHETYPE_INFINITE_PORTAL_TUNNEL` | Continuous $u$ Model | `InfiniteDroneZoomTunnel.tsx` |
| **Leaked Document / SEC Filing** | `ARCHETYPE_NEWSPRINT_EDITORIAL` | Newsprint Highlighter Sweep | `NewsprintEditorialShort.tsx` |
| **Geopolitical Map / River Corridor** | `ARCHETYPE_TOPOGRAPHIC_MAP` / `2D_MAP` | `d3-geo` / `map-explainer` | `PunjabInvestigativeMap.tsx` |
| **Global Macro / Cross-Border Lock** | `ARCHETYPE_GLOBE_TARGET_LOCK` | `d3.geoOrthographic()` | `GlobeHighlightPunjab.tsx` |
| **9:16 Vertical Short Loop** | `ARCHETYPE_3D_ORBITAL_FLYWHEEL` | 3D Elliptical Orbit Short | `ElonMuskFlywheelShort.tsx` |
| **Budget Slashes / Restructuring** | `ARCHETYPE_FINANCIAL_WATERFALL` | Newsroom Waterfall Card | `1080_mccarthy_axe_remotion.tsx` |
| **CAC Payback / Platform Flywheel** | `ARCHETYPE_ECONOMIC_FLYWHEEL` | 4-Stage Sequential Loop | `270_cac_payback_remotion.tsx` |
| **Market Cap Erasure / Collapse** | `ARCHETYPE_CAPITAL_DESTRUCTION` | Rapid Monospace Count-Down | `100_capital_destruction_card.tsx` |
| **Supply Chain Oscillation** | `ARCHETYPE_BULLWHIP_PHYSICS` | Harmonic Exponential Sine Wave | `480_bullwhip_physics_remotion.tsx` |
| **Supplier Bottleneck Dominoes** | `ARCHETYPE_SUPPLY_CHAIN_CASCADE` | Kinetic Tiered Dominoes | `490_bullwhip_supply_chain_cascade.tsx` |
| **Emergency Cash Burn Tally** | `ARCHETYPE_CASH_BURN_COUNTER` | High-Speed Metric Odometer | `590_air_freight_burn_counter.tsx` |
| **COGS / Unit Gross Margin** | `ARCHETYPE_UNIT_ECONOMICS_WATERFALL` | Stepped Delta Column Chart | `780_unit_margin_waterfall_remotion.tsx` |
| **Product Recall / Crisis Hit** | `ARCHETYPE_CRISIS_RECALL_HIT` | Forensic Multi-Panel Card | `940_recall_financial_hit_remotion.tsx` |
| **Cohort Churn vs. Retention** | `ARCHETYPE_CHURN_RETENTION_CURVE` | Exponential Decay Comparison | `320_churn_retention_remotion.tsx` |
| **LTV / CAC Formula Multiples** | `ARCHETYPE_FORMULA_RATIO_EXPLAINER` | Mathematical Fraction Card | `LtvCacFormula.tsx` |
| **Compliance Audit Verification** | `ARCHETYPE_AUDIT_TRAIL_LEDGER` | Sequential Ledger Checklist | `AuditTrail.tsx` |
| **Channel Outro / Subscribe CTA** | `ARCHETYPE_SUBSCRIBE_FRAME` | Animated Cursor Click & Bell | `SubscribeFrame.tsx` |

**On variety vs. cohesion:** Lean toward using a deliberately narrow set of 4–6 recurring archetypes across a whole episode rather than sampling randomly. Skin every component to the episode's established palette and theme. Ensure strict adherence to **Rule 1 (Strict Text Discipline — zero unsolicited HUD badges or speed telemetry)**.

## Standing assets — build once, reuse every episode

Every standing asset still needs its full generation prompt written out in full at least once, even though it's reused — "recurring" is not a reason to skip the prompt.

- **No opening bumper, logo or title card.** Every episode opens cold on the hook — the first frame is story, not branding. The biggest drop-off happens in the first 2–5 seconds, and a logo there spends them on nothing. Branding lives in the thumbnail, the palette and the voice; if a channel ident is ever wanted, it goes after the hook has landed (~0:30), never before.
- **Subscribe graphic overlay** — the on-screen subscribe button/animation. Fixed Remotion asset, 2-4 seconds. Full prompt required, generated once.
- **Background instrumental score** — one music generation prompt per episode (Suno/Udio/equivalent), instrumental only, no lyrics, matching the episode's tone register per the Style Bible's palette-modulation principle (a tense, propulsive instrumental bed for an accountability story; a sparse, restrained one for a tragedy episode). State the target mood, tempo range, and instrumentation explicitly in the prompt — never leave this to the music tool's own interpretation of a one-word mood label.
- **Sign-off delivery — decide per episode, not fixed:**
  - Default: Delivered over a dramatic closing conceptual illustration, thematic visual resolution, or dynamic Remotion title animation with narration VO.
  - If this episode features Margery as an in-world protagonist (e.g. stranded on the island in a hypothetical scenario): she can deliver the closing in-scene action.
  - If this episode centers a strong accountability-tone caricature: that character can deliver the line instead, per the dialogue exception in Character Setup.
  - Do NOT generate a generic news-anchor desk sign-off.

**"The Hypothetical" episodes use their own standing assets instead of the above, per Style Bible Section 10:** the sub-series' lavender accent (no opening bumper — same cold-open rule as the main show), and a recurring "HYPOTHETICAL SCENARIO" watermark badge inserted at every `[WATERMARK]` tag — roughly every 2-3 minutes. Subscribe overlay and sign-off delivery follow the main show's rules.

## Phase 5 — Consolidated batches (Part A's execution deliverable, grouped by type)

This is the primary deliverable to actually work from — grouped by asset type so every prompt of one kind can be bulk-copied into the relevant tool in one sitting, rather than jumping between tools beat by beat. **No Part B information (duration, timestamps) appears here — that's a different document.** Every entry uses the full copy-paste block from the File Naming Convention section, in full, not abbreviated to just a filename.

**Mandatory Checkpoint CP-10: 1:1 Asset Inventory Reconciliation Audit:**
Before outputting Phase 5, the engine MUST run and print the exact reconciliation audit:
- Total Master Reference Stills (from Phase 3)
- Total Thumbnail Variants (from Phase 2)
- Total Episode Beats (from Phase 4, $B$)
- Asset Breakdown:
  - Batch 1: Static Image Stills Count ($N_{stills}$)
  - Batch 2: AI video clips — count (hard cap 30), total generated seconds, share of runtime, and any clip wasting > 0.5s (must be none)
  - Batch 3: Real-World Evidentiary Insets Count ($N_{insets}$)
  - Batch 4: Remotion Code Graphic Components Count ($N_{remotion}$)
  - Batch 5: Background Music Score & Foley Prompts Count ($N_{audio}$, 1 cohesive score bed + tactile foley cues)
- **Reconciliation Equation:** $(N_{stills} + N_{video} + N_{insets} + N_{remotion} + N_{audio}) \equiv B + N_{characters} + N_{thumbnails} + N_{audio}$.
- If any single beat from Phase 4 is omitted, duplicated, or miscategorized in Phase 5, the audit FAILS and generation must be corrected before handoff to Part B.

1. **Static image batch** — every static-image prompt block, including character references and thumbnail variants, in filename order.
2. **AI video batch** — every AI-video prompt block, in filename order, with the running count against the up-to-25 video cap stated at the end.
3. **Real-world assets checklist** — table: what to find, where, target filename.
4. **Remotion build list** — table and full build prompt blocks for every code-animated component, categorized by skill (`newsroom-chart-animations` for financial charts/waterfalls, `map-explainer` for 2D routes/choropleths, `3d-flyover` for 3D terrain flights, `remotion-bits` for UI/text, and standing channel assets), mapped to filename with exact frame count and duration. **Per CP-14, each row also states the rendered still PNG's path and confirms it was viewed and matched the spec** — a component listed here without a viewed rendered still is incomplete, not just unverified.
5. **Background Music Score & Foley batch** — full copy-paste Audio Asset block for the single cohesive background score bed (with Suno/Udio generation prompt, negative prompt, BPM, key, and Epidemic Sound search queries tailored to the episode's primary archetype), plus tactile micro-foley sound cues.

**Hand off to Part B only once every file across these five lists exists, named exactly as specified.**

---

## Phase 6 — Shorts Spinoffs (`shorts.md`) (optional, additional to the core episode)

**MANDATORY DELIVERABLE FILE:** Shorts Spinoffs MUST be generated and saved as a dedicated, standalone markdown file: **`shorts.md`** in the episode project directory (e.g., `videos/01-peloton-collapse/shorts.md`), NEVER bundled inside other documents or a monolithic production file. This isolates short-form execution from the master long-form assembly and keeps production clean and modular.

Generated only after Phase 5's assets exist — this phase reuses existing long-form 4K assets, it doesn't create a parallel asset set from scratch.

### Generation Requirements for `shorts.md`:
For each of the 3–4 standalone Shorts, `shorts.md` must provide:
1. **Metadata & Technical Specs:** Target video filename (e.g., `01_short_ghost_factory.mp4`), Target Voiceover Audio File (e.g., `voiceover/short_01_ghost_factory_vo.wav` at 24-bit 48kHz WAV, normalized to -16 LUFS), Duration (45–60 seconds), Format (Vertical 9:16, 1080×1920, 30fps).
2. **Reused Asset Inventory:** Exact filenames of long-form 4K stills, video clips, and Remotion comps reused from Phase 5 batches. Because long-form stills are generated at 4K (3840×2160), they crop into 9:16 with zero resolution loss.
3. **Voiceover Audio & Master VO Chunk References:** Target standalone `.wav` audio file path AND exact mapping to the master long-form audio `.wav` chunks (`assets/voiceover_package_.../chunks/chunk_XXX.wav`) that cover the core story, enabling either fresh standalone neural synthesis or direct audio splicing from the master stem.
4. **Full Spoken Narration Script & Cadence:** A fast, punchy 45–60s script (~110–140 words). Includes a dynamic, per-line delivery instruction for standalone VO generation or extraction from the master VO.
5. **Dedicated NotebookLM Video Overview Generation Prompt:** The full structured prompt (visual-world definition, 1.5–2.5s pacing, and scene-by-scene sequence) for one-shot generation via NotebookLM.
6. **CapCut Vertical Timeline Blueprint & Audio Mix:** Slicing timecodes, vertical 9:16 framing/crop coordinates, on-screen text/caption placement (center-weighted for mobile viewports), and multi-track audio layout:
   - **Track A1 (Dialogue VO):** Dedicated `short_XX_..._vo.wav` at 0.0 dB gain (-16 LUFS).
   - **Track A2 (Score/BGM):** Episode score ducked to -34 dB beneath speech.
   - **Track A3 (Tactile Foley/SFX):** Document slides, ticker clicks, and bass drops (-20 dB to -26 dB).

**Editorial Rule:** Never let a Short give away the full documentary's ending or core resolution in full — select self-contained, high-friction moments (the $400M ghost factory, the Ryan Reynolds PR disaster, the $196 loss per bike) that create curiosity and drive viewers to watch the full episode.

---

# PART B — EDITING & ASSEMBLY

*A completely separate deliverable from Part A — generate and output this only once Phase 5's batches are confirmed complete, never in the same response as Part A. Assumes every asset already exists. No generation prompts here — only how to arrange what's already made.*

## For every beat, produce:

**Beat number + timestamp range** — the narration line(s) it covers.

**Asset file(s) used** — reference by exact filename from Part A.

**On-screen duration** — how long this asset holds before the next beat, timed against the narration line's spoken length (~155 words/minute) plus a small pre-roll/post-roll buffer. For an AI-video beat, this should land close to the clip's actual generated length (6-8s) if Part A sized beats correctly. If it doesn't, that's a beat that should have been split in Part A; flag it rather than silently stretching the clip. The one sanctioned exception: hold on the clip's final frame for the remainder, as a deliberate freeze-frame emphasis moment. Never loop a clip with directional motion to fill time.

**Transition in** — how this beat connects from the previous one: hard cut, crossfade, match-cut-on-motion, whip-pan, or hold-then-cut. Verify what the local-draft-file CapCut MCP actually exposes for transitions before assuming this maps to a named parameter.

**Audio Mix, BGM Cue & Sound Design (Dynamic Score)** — define the complete acoustic score for this beat per the Audio Architecture & Sound Design Engine:
- **BGM Cue & Modulation:** Name the unified score bed and active dynamic profile (e.g. `Track 3: The Unified Episode Score Bed [Base speech ducking at -34 dB]`, `[Math Mode drop to -55 dB]`, or `[Pause swell to -26 dB]`).
- **Base BGM Volume:** Target dB level while narration speaks (e.g. `-34 dB` for narrative/tech; `-44 dB` for crisis/tension; `-55 dB to -65 dB` for complex balance sheets/Remotion charts).
- **Dynamic Swell / Silence Keyframes:** Explicit instructions for volume modulation (e.g. *"Swell +8dB to -26dB during 1.8s pause at +3.2s"*, or *"Cut to -inf dB at +5.4s for 0.8s dead silence drop before catastrophic figure"*).
- **Filter Sweep:** If zooming into a document, apply *"Low-pass filter sweep down to 800Hz for 4s, focusing ear on text"*.
- **Tactile Foley Cue & Timing:** Dedicated sound effect, exact timestamp offset, and gain (e.g. `Sub-bass 40Hz drop at +0.2s downbeat, gain -20dB`, `Crisp bond paper slide at +0.5s, gain -26dB`, or `Soft mechanical ticker click at +1.1s, gain -28dB`).

**Text/caption placement**, if any — per the Style Bible (text lives in the illustrated world as a designed graphic element), unless it's the accessibility caption track: plain white text, black outline or semi-transparent background band, bottom-centered, standard sans-serif.

**Remotion Typography & Dynamic Callout Overlay**, if applicable — define the exact overlay component prompt, target copy (atomic 1–4 words, numbers, or situational badge), screen coordinates, and entrance timing offset (e.g. animating in with a subtle scale pop on the vocal downbeat at +0.8s). Keep the underlying Part A visual clean; all kinetic text prompts and keyframe triggers belong here in Part B so they synchronize precisely with the audio downbeat.

## CapCut assembly instructions

**Mandatory Checkpoint CP-11: Timeline Audio/Visual Synchronization Gatekeeper:**
Before committing edits to the CapCut draft, verify:
- Narration VO Track Duration ($T_{audio}$) matches Total Assembled Visual Beat Duration ($\sum D_i$) within $\pm 0.5$ seconds.
- Zero gap frames between cuts (continuous visual coverage).
- Keyframed zoom/pan speed consistency across static image stills.
- AI Video clips verified muted on timeline (audio gain set to $-\infty$ dB).

**Mandatory Checkpoint CP-12: Dynamic Audio Score & Ducking Gatekeeper:**
Before exporting or finalizing any CapCut project timeline:
1. **Audio Track Hierarchy:**
   - **Track 1 (Voiceover):** Master narration audio (`master_narration.wav`), strictly at **$0.0\text{ dB}$** gain (pre-normalized to -14 to -16 LUFS).
   - **Track 2 (Foley & SFX):** Tactile paper slides, sub-bass 40Hz drops, mechanical ticker clicks, synchronized to visual cut downbeats, mixed between **$-24\text{ dB}$ and $-28\text{ dB}$**.
   - **Track 3 (Background Score):** Single cohesive, loopable background score bed running the length of the video. Zero song clutter or overcomplication.
2. **Dynamic Volume Keyframing:**
   - Base BGM level ducked to **$-32\text{ dB to } -35\text{ dB}$** during narrative speech.
   - On complex data/math beats (Remotion charts, formulas), BGM dynamically drops to **$-50\text{ dB to } -65\text{ dB}$** (Math Mode).
   - On vocal pauses $> 1.2\text{s}$, BGM keyframed to swell by **$+6\text{ dB to } +8\text{ dB}$** to fill the acoustic vacuum, snapping back down on the next vocal downbeat.
   - On catastrophic punchlines marked `[DEAD SILENCE]`, BGM drops to **$-\infty\text{ dB}$** $0.5\text{s}$ before the word, accompanied by a Track 2 sub-bass impact.

Confirm a template draft exists to clone project structure from. Confirm CapCut is fully closed. Import every named asset in sequence order, apply the per-beat duration/transitions/text above, layer in the background instrumental and foley under the narration track, run validation. If validation fails, do not save over the existing draft — note which beat/asset triggered the failure and stop for review. Once validation passes cleanly, save.

---

## Final Deliverable — Verified YouTube Video Description & Accurate Chapter Timestamps

> [!IMPORTANT]
> **POST-PRODUCTION TIMING RULE:**
> This deliverable is generated **strictly at the very end of production**, after the CapCut project is fully assembled, voiceover is placed, and subtitles/captions (`.srt` / `.json`) are locked.
> **Never pre-generate chapter timestamps in Phase 1.** Frame-accurate downbeats can only be calculated from the final shape of the captions and video timeline.

### Deliverable Format:
1. **Selected Title:** The chosen high-CTR title from Phase 1.
2. **Search-Optimized Hook:** First 1–2 lines delivering the core keyword and emotional tension before YouTube's "Show More" fold.
3. **Forensic Narrative Summary:** 2–4 sentences breaking down the investigative thesis without fluff.
4. **Sources:** A short bulleted list of the main sources behind the load-bearing claims (reporting, interviews, documents) — credibility and legal cover, kept compact.
5. **Frame-Accurate Chapter Timestamps:**
   - Must strictly begin with `00:00`.
   - Timestamps must be extracted directly from the actual millisecond timestamps of the chapter title cards and caption downbeats in the final `.srt` / `.json`.
   - Minimum 3 chapters, each at least 10 seconds long, formatted as `MM:SS - Chapter Title`.
6. **Curated YouTube SEO Tags (15–25 Comma-Separated Tags):**
   - Direct copy-paste block for YouTube Studio's "Tags" field.
   - Sourced and structured using competitor intelligence: (a) Primary Subject/Entity names, (b) Crossover Genre/Format tags (`business documentary`, `finance documentary`), (c) Conversational long-tail search questions (`"why did X collapse"`, `"how X lost billions"`), and (d) Common search misspellings/brand slugs.
7. **Strategic Hashtags (3–5 Tags):**
   - Primary topic, sector, and channel hashtags formatted as `#Topic #Industry #FinanceCraft` to render in YouTube search and above-title metadata.

---

## Modular File Deliverable Sequence

Every phase is output as a standalone deliverable in its own dedicated Markdown/JSON file, strictly following the Audio-First timing gate:

`01_RESEARCH_BRIEF.md` → `02_SCRIPT.md` → `03_TITLES_AND_HOOKS.md` → `04_THUMBNAILS.md` → `05_CHARACTER_SETUP.md` → `06_VOICE_DIRECTION.json` & `06_VOICE_DIRECTION.md` → **[MANDATORY GATE: Master VO Audio Synthesis & Timestamp Alignment JSON]** → `07_BEAT_SHEET.md` (Audio-First Downbeats) → `08_STILLS_PROMPTS.md` → `09_VIDEO_PROMPTS.md` → `10_REMOTION_SPECS.md` → `11_AUDIO_DESIGN.md` → `shorts.md` → `12_CAPCUT_ASSEMBLY.md` → `13_FINAL_METADATA.md`
