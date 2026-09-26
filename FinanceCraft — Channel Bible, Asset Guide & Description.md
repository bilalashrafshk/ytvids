# **FinanceCraft — Channel Production Bible & Asset Guide**

*Working reference for tone, visual system, production rules, and brand assets.*> [!IMPORTANT]
> ### 🎬 THE ENTERTAINMENT & ENGAGEMENT PRIME DIRECTIVE (NEVER DRY, NEVER FORMAL)
> **FinanceCraft is NOT a courtroom audit channel, an academic lecture hall, or a corporate compliance video provider.**
> Our mission is to produce **fun, vibrant, witty, visually addictive, and deeply informative documentaries and thought experiments** (combining the best narrative electricity of *MagnatesMedia*, the visual clarity of *Crayon Capital*, and the kinetic urgency of *My Chaotic Stories*).
>
> **Core Production Rules:**
> 1. **Anti-Dryness Law:** If a script sounds like an SEC lawyer or a college economics professor reading prepared remarks, it is an **AUTOMATIC FAILURE**. Narration must be conversational, sharp, humorous, and visceral. **Research is invisible:** the voiceover never cites sources ("according to its 10-K", "filings show") — it says what happened, to whom, and what it looked like; sources live in the description. Every ~60–90 seconds must carry something a viewer would retell (CP-VERIFY GATE γ).
> 2. **Track Production Routing (three tracks — `00-ROUTER.md` STEP 2 decides):**
>    - **Track 1: Corporate Autopsies & Investigative Scandals (Documented Cases):** Real corporate history (e.g. Peloton, WeWork). Sourced from primary documents when relevant, but told as high-stakes, entertaining human drama.
>    - **Track 2: "The Hypothetical" & Macro Thought Experiments (Speculative / What-If):** High-concept simulations (e.g. *The Thirty-Day Blackout*, *What If You Had $1 Trillion*). **STRICTLY FORBIDS forcing SEC 10-K filings, court dockets, or legalistic paperwork.** Uses second-person immersion ("You"), telemetry HUDs, economic flowcharts, countdown clocks, and relatable human behavior.
>    - **Track 3: Mechanism Explainers (Systems, not events):** How a system works continuously, with no protagonist or collapse (e.g. how currencies work, movie-theatre economics). Researched with `research-prompt-track3-v2.md` — a lighter sourcing bar than Track 1.
> 3. **Create First, Then Audit (Two-Pass Rule — `bible/05-cp-verify-phase-gates.md`):** Every creative step is drafted first with only its inputs and hard constraints in view — gates, bands, word lists and counts stay out of the creative pass so they can't narrow ideas before they exist. Then, before delivering, the AI generation engine MUST perform a strict self-audit against the task's rules before outputting or presenting any deliverable. If any requirement is violated (e.g. thumbnail text failing the 168px Legibility Rule, missing quality clause, premature beat generation before audio exists, monolithic file bundling), the output is an **AUTOMATIC REJECTION** and must be re-generated before returning to the user.
> 4. **Clean-Room Isolation Law (Strict Prohibition on Cross-Episode Mimicry):** The AI generation engine is **STRICTLY FORBIDDEN from looking at, copying, or anchoring to files from other completed episode directories in `videos/` (such as legacy episodes like `videos/01-peloton-collapse/`).** Older episodes contain deprecated monolithic formats, pre-refactor conventions, or track-specific corporate fraud framing that will contaminate active work. For structural file blueprints, the AI MUST strictly reference `videos/_template/` and this Master Channel Bible (this index plus the `bible/` section files) alone. Every episode must be generated from first principles in its own isolated directory.
>
> | Task ID | Active Pipeline Task | Master Section Header | Deliverable File | Bible File to Load | Essential Rules to Extract & Follow |
> | :--- | :--- | :--- | :--- | :---: | :--- |
> | **TASK-01** | **Research & Mechanism Ingestion** | `# FinanceCraft — Research Methodology` | `01_RESEARCH_BRIEF.md` | `bible/01-research-methodology.md` | Gap List, Pivotal Detail. Track 1: Case studies (filings, transcripts). Track 2: What-Ifs (verified economic models, AER trials, telemetry). **NEVER force SEC filings onto thought experiments.** |
> | **TASK-02** | **Script Generation (Track 1 / Track 2)** | `# FinanceCraft — Script Generation Prompt` / `"The Hypothetical"` | `02_SCRIPT.md` | `bible/07-script-generation-prompt.md` (T1/T3) or `bible/08-hypothetical-script-generator.md` (T2); gates in `bible/05`, `bible/06` | 5-Act structure, ~155 WPM pace, normalized decimals (`point`), inline tags. Track 1: Documented cases. Track 2: POV immersion ("You"), composite archetypes (`[COMPOSITE: <role>]`), recurring `[WATERMARK: HYPOTHETICAL SCENARIO]`, zero SEC filings. |
> | **TASK-03** | **Titles & Core Narrative Hooks** | `# FinanceCraft — Guided Production Document` (Phase 1) | `03_TITLES_AND_HOOKS.md` | `bible/11-guided-production-document.md` → Phase 1 | 5 distinct CTR title angles, mobile search hooks, provisional core thesis. Standalone file. |
> | **TASK-04** | **Thumbnail Packaging & Concepts** | `# FinanceCraft — Thumbnail Style Reference` (Phase 2) | `04_THUMBNAILS.md` | `bible/03-thumbnail-style.md` + `bible/11` → Phase 2 | 3–4 Outlier Archetypes, **Anchor Rule**, **Legibility Rule** (168px cap-height test, not word count), archetype-set callout density, 4K Nano Banana 2 prompts. Standalone file. |
> | **TASK-05** | **Character / Composite Setup** | `# FinanceCraft — Guided Production Document` (Phase 3) | `05_CHARACTER_SETUP.md` | `bible/11-guided-production-document.md` → Phase 3 | Caricatures (Track 1) or composite archetypes (Track 2) with single static reference portraits. Standalone file. |
> | **TASK-06** | **Voice Direction & Audio Stems** | `# FinanceCraft — Voice Direction Prompt (VoxCPM2)` | `06_VOICE_DIRECTION.json`<br>`06_VOICE_DIRECTION.md` | `bible/12-voice-direction-voxcpm2.md` | VoxCPM2 JSON chunking, 2-Part Control Instruction (Persona Anchor + Dynamic Register), phonetic decimals (`point`). Standalone files. |
> | **GATE** | **Master VO Audio & Timestamps** | `# Audio-First Timing Gatekeeper` | `voiceover/` (`.wav` + `alignment.json`) | `bible/11` → Audio-First Timing Gatekeeper | **MANDATORY TIMING GATE:** Master voiceover audio and sentence/phrase alignment JSON MUST exist BEFORE generating beats to guarantee 0.0s timing drift. |
> | **TASK-07** | **Spoken-Cadence Beat Sheet** | `# FinanceCraft — Guided Production Document` (Phase 4) | `07_BEAT_SHEET.md` | `bible/11-guided-production-document.md` → Phase 4 | **Generated STRICTLY AFTER VO audio timestamps exist.** Exact millisecond downbeats (`00:00.0 - 00:03.4`), sentence-bound visual cuts, framing, motion. Standalone file. |
> | **TASK-08** | **Batch 1: Still Prompts** | `# Asset Instructions: Nano Banana 2` | `08_STILLS_PROMPTS.md` | `bible/11` → Phase 5 (Batch 1) | Consolidated copy-paste prompts for all Batch 1 4K stills (3840×2160, vector flat cel-shaded style). Standalone file. |
> | **TASK-09** | **Batch 2: AI Video Prompts** | `# Asset Instructions: AI Video` | `09_VIDEO_PROMPTS.md` | `bible/11` → Phase 5 (Batch 2) | Consolidated copy-paste prompts for all Batch 2 AI video clips (Google Flow / Omni, muted, 1920×1080). Standalone file. |
> | **TASK-10** | **Batch 3: Remotion Graphics Specs** | `# FinanceCraft — Remotion Prompt Guidelines` | `10_REMOTION_SPECS.md` | `bible/15-remotion-prompt-guidelines.md` | Dedicated code specifications, component imports, and render commands for Remotion charts/maps. Standalone file. |
> | **TASK-11** | **Batch 4: Audio Score & Sound Design** | `# FinanceCraft — Audio Architecture & Sound` | `11_AUDIO_DESIGN.md` | `bible/10-audio-architecture.md` | Dedicated BGM score beds (Suno/Udio prompts), empirical volume ducking curves, tactile foley triggers. Standalone file. |
> | **TASK-12** | **Shorts Spinoffs** | `# FinanceCraft — NotebookLM Cinematic Video` | `shorts.md` | `bible/14-notebooklm-video-guidelines.md` + `bible/11` → Phase 6 | Standalone vertical (9:16) spinoff scripts, NotebookLM Video Overview prompts, and CapCut vertical assembly instructions. |
> | **TASK-13** | **Timeline Assembly & CapCut Integration** | `# CapCut assembly instructions` | `12_CAPCUT_ASSEMBLY.md` | `bible/11` → CapCut assembly instructions | Step-by-step NLE multi-track timeline assembly, transition rules, keyframed pans, and audio ducking. Standalone file. |
> | **TASK-14** | **Verified YouTube Description & Chapters** | `# Final Deliverable — YouTube Metadata` | `13_FINAL_METADATA.md` | `bible/11` → Final Deliverable | Frame-accurate chapter timestamps (derived from final captions/cuts), 20+ curated SEO tags, and verified description. Standalone file. |
>
> **Modular Architecture Rule:** Every single deliverable above is saved as an independent, standalone `.md` or `.json` file in `videos/<episode-slug>/`. **NEVER append or consolidate everything into a single monolithic `production.md`.**
>
> **Companion References:** For complete 25-archetype Remotion catalog see [`references/REMOTION_GRAPHICS_ENGINE_REFERENCE.md`](file:///Users/bilalashraf/YT%20Videos/references/REMOTION_GRAPHICS_ENGINE_REFERENCE.md) and 42 bits in [`references/REMOTION_BITS_CATALOG.md`](file:///Users/bilalashraf/YT%20Videos/references/REMOTION_BITS_CATALOG.md). For competitor metadata, tags & thumbnails see [`references/COMPETITOR_METADATA_AND_THUMBNAIL_AUDIT.md`](file:///Users/bilalashraf/YT%20Videos/references/COMPETITOR_METADATA_AND_THUMBNAIL_AUDIT.md).


## **1\. Channel Assets**

| Asset Type | Reference Link | Design Description |
| :---- | :---- | :---- |
| **Channel Icon** | In google doc | Minimalist, high-contrast vector icon featuring a dark circular map-frame enclosing a fractured emerald-green corporate building node with a bold diagonal red downward indicator arrow. |
| **Channel Banner** | In google doc | Layered clean vector illustration background featuring an illustrated bespectacled executive caricature, forensic investigation desk with crime maps and SEC filings, corporate network nodes, and an illustrated "SUBSCRIBE" button. |

## **2\. Recommended Channel Descriptions**

### **Option 1: Punchy & Narrative (Recommended)**

Every financial collapse leaves a paper trail. Most people just don’t know how to read the map.

FinanceCraft is an investigative documentary series dissecting the dark mechanics of corporate fraud, multi-billion-dollar scandals, and hidden financial history. We don’t rehash the headlines you already know. Instead, we dig into primary records—SEC filings, forensic audits, and court transcripts—to show how corporate empires were constructed, concealed, and dismantled.

Subscribe to trace the blueprint behind high-stakes greed and corporate catastrophe.

### **Option 2: Deep-Dive & Investigative**

Mapping the dark side of global business.

Behind every sudden bankruptcy and unprecedented scandal lies a calculated network of shell companies, regulatory blindspots, and accounting illusions. FinanceCraft builds forensic deep dives into business crime and hidden economic disasters using primary documents rather than second-hand gossip.

New investigative documentaries exploring corporate collapses, audacious business models, and high-stakes white-collar heists.

## **3\. Channel Identity & Editorial Mission**

> * **Niche:** Business and finance documentaries—corporate fraud, scandal, rise-and-fall stories, and hidden corporate/financial history. High-momentum visual storytelling. Margery is an in-world situational protagonist when an active character is narrative-critical (e.g. stranded on an island in a hypothetical scenario, or navigating a facility), never a generic news anchor or desk host.  
> * **Core Promise:** Stories people are interested in but haven't heard, or haven't heard told this way—sourced carefully off camera and told on camera like a story — never like paperwork (research is invisible: `bible/01-research-methodology.md`). Where it matters we go to primary documents. We avoid overdone stories like Enron, Theranos, or FTX.  
> * **Positioning:** Sits alongside creators like ColdFusion, MagnatesMedia, and Wendover Productions, but niched down strictly to fraud, scandal, and hidden history with primary-source rigor as the differentiator.

## **4\. Visual System & Palette Rules**

> * **Primary Register:** Clean, flat vector illustration with soft cel-shading. Confident line work, gradient-based light and shadow for dimensionality—no flat single-tone fill, and no 3D render.  
> * **The One Exception:** Real evidence as a clean inset. Real screenshots, documents, and filings appear as literal images in bordered inset panels or referenced in-scene—never redrawn, never AI-recreated, and never cut in as full-frame photoreal footage.  
> * **Color Palette & Modulation:** Base palette is light and neutral (white, soft sky gradients, warm greige) with color used sparingly for one deliberate functional accent. Modulation is mandatory:  
  * *Accountability stories:* Restrained base with purposeful accents, cooling down only at the downfall/consequence beat.  
  * *Tragedy / loss of life:* Desaturated from the outset (dusty rose, slate-grey, charcoal-rust). Zero celebratory color grading.

## **5\. Caricature & Legal Guardrails**

> 1. **Illustrated caricature only:** Never photoreal. Exempt from synthetic content disclosure triggers and minimizes likeness/legal risk.  
> 2. **Fixed Reference Blocks:** Lock a fixed reference block per recurring person, generated once with a locked seed/reference image and reused across all shots. Standalone single-pose portrait only (no turnaround or character sheet).  
> 3. **Accountability Only:** Caricatures are strictly for wrongdoers facing consequences. Victims, crew, or tragedy figures use anonymized silhouettes with factual labels.  
> 4. **Zero Scripted/Lip-Synced Dialogue:** Visual staging and gestures only. Attributed quotes must be presented on on-screen quote cards, never synced to caricature mouth movement.  
> 5. **Care for Active Cases:** Living public figures in active legal proceedings require significantly more cautious framing and staging than closed/historical cases.

## **6\. Production Workflow & Map Guidelines**

> * **Stills as Foundation:** Use static AI stills with CapCut manual pan/zoom and layered parallax as default choices for scene-setting depth without drift risk.  
> * **Maps:** Always start from a real reference map and style it into the clean illustrated look using design tools. Never let AI generate raw geography.  
> * **Typography & In-Scene Text:** Nano Banana 2 natively renders legible, precise text and typography. Prompts can request exact headlines, numbers, ticker readouts, and data badges directly in generation without needing to generate blank or defer to post-production. (Remotion is reserved for animated/kinetic numbers and dynamic motion graphics).

---

## **7. Bible Section Map (the rest of this Bible lives in `bible/`)**

*This file used to hold every section below in one 3,185-line document. Each section is now its own file so a run loads only what its task needs. Content is unchanged; only position-based cross-references ("the table above") were rewritten to name the file. Open exactly the files the current task needs — the TASK table at the top of this file says which.*

| File | Section | Used for |
| :--- | :--- | :--- |
| [`bible/01-research-methodology.md`](bible/01-research-methodology.md) | Research Methodology (NotebookLM) | TASK-01 research brief; Phase 0 track routing; Texture Pass |
| [`bible/02-style-bible.md`](bible/02-style-bible.md) | Style & Production Bible | Visual system, palette, caricature rules, technique menu, maps, typography, negative prompts, Hypothetical sub-series (Section 10) |
| [`bible/03-thumbnail-style.md`](bible/03-thumbnail-style.md) | Thumbnail Style Reference | TASK-04 thumbnails: T1–T7 styles, Anchor / Legibility / Instant-Recognition rules |
| [`bible/04-cp-input-brief-gate.md`](bible/04-cp-input-brief-gate.md) | CP-INPUT — Mandatory Brief Gate | Highest precedence: no brief, no script |
| [`bible/05-cp-verify-phase-gates.md`](bible/05-cp-verify-phase-gates.md) | CP-VERIFY — Phase Gates & Regeneration Loop | GATE alpha-0, α, β, γ, δ, ε checklists; escalation rule |
| [`bible/06-retention-physics-cp0.md`](bible/06-retention-physics-cp0.md) | Retention Physics (CP-0) | Per-archetype sentence bands, universal gates, jargon list, register rules, A5 Stakes Contract |
| [`bible/07-script-generation-prompt.md`](bible/07-script-generation-prompt.md) | Script Generation Prompt | TASK-02 Track 1 / Track 3 scripts; CP-3 twin drafts; CP-2 audit |
| [`bible/08-hypothetical-script-generator.md`](bible/08-hypothetical-script-generator.md) | "The Hypothetical" Script Generator | TASK-02 Track 2 scripts; Invention Protocol |
| [`bible/09-narration-archetypes.md`](bible/09-narration-archetypes.md) | Benchmark Narration Archetypes (A1–A7) | Voice anatomy, verbatim excerpts, generator prompts; A8–A11 live in SKELETON_LIBRARY.md |
| [`bible/10-audio-architecture.md`](bible/10-audio-architecture.md) | Audio Architecture & Sound Design | TASK-11 audio: M1–M5 music beds, ducking, micro-audio mechanics |
| [`bible/11-guided-production-document.md`](bible/11-guided-production-document.md) | Guided Production Document Generator (incl. Part A assets, Part B editing) | TASK-03, 05, 07–09, 13, 14; CP-6 |
| [`bible/12-voice-direction-voxcpm2.md`](bible/12-voice-direction-voxcpm2.md) | Voice Direction Prompt (VoxCPM2) | TASK-06 voice direction |
| [`bible/13-idea-generation-prompt.md`](bible/13-idea-generation-prompt.md) | Idea Generation Prompt | Ranking ideas from the Master Tracker |
| [`bible/14-notebooklm-video-guidelines.md`](bible/14-notebooklm-video-guidelines.md) | NotebookLM Cinematic Video & Prompt Guidelines | TASK-12 shorts |
| [`bible/15-remotion-prompt-guidelines.md`](bible/15-remotion-prompt-guidelines.md) | Remotion Prompt Guidelines | TASK-10 Remotion specs |

**Naming note — three different numbered series, never interchangeable:**
- **A1–A11** — narration skeletons / archetypes (`bible/09-narration-archetypes.md`, `SKELETON_LIBRARY.md`, `gate_check.py -a`).
- **T1–T7** — thumbnail styles (`bible/03-thumbnail-style.md`).
- **M1–M5** — music beds (`bible/10-audio-architecture.md`).
