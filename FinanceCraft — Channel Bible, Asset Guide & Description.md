# **FinanceCraft — Channel Production Bible & Asset Guide**

*Working reference for tone, visual system, production rules, and brand assets.*> [!IMPORTANT]
> ### 🎬 THE ENTERTAINMENT & ENGAGEMENT PRIME DIRECTIVE (NEVER DRY, NEVER FORMAL)
> **FinanceCraft is NOT a courtroom audit channel, an academic lecture hall, or a corporate compliance video provider.**
> Our mission is to produce **fun, vibrant, witty, visually addictive, and deeply informative documentaries and thought experiments** (combining the best narrative electricity of *MagnatesMedia*, the visual clarity of *Crayon Capital*, and the kinetic urgency of *My Chaotic Stories*).
>
> **Core Production Rules:**
> 1. **Anti-Dryness Law:** If a script sounds like an SEC lawyer or a college economics professor reading prepared remarks, it is an **AUTOMATIC FAILURE**. Narration must be conversational, sharp, humorous, and visceral.
> 2. **Dual-Track Production Routing:**
>    - **Track 1: Corporate Autopsies & Investigative Scandals (Documented Cases):** Real corporate history (e.g. Peloton, WeWork). Sourced from primary documents when relevant, but told as high-stakes, entertaining human drama.
>    - **Track 2: "The Hypothetical" & Macro Thought Experiments (Speculative / What-If):** High-concept simulations (e.g. *The Thirty-Day Blackout*, *What If You Had $1 Trillion*). **STRICTLY FORBIDS forcing SEC 10-K filings, court dockets, or legalistic paperwork.** Uses second-person immersion ("You"), telemetry HUDs, economic flowcharts, countdown clocks, and relatable human behavior.
> 3. **Mandatory Step-by-Step Pre-Delivery Self-Audit Gate:** At EVERY step of the pipeline, the AI generation engine MUST perform a strict self-audit against the task's rules before outputting or presenting any deliverable. If any requirement is violated (e.g. text hook > 4 words, missing quality clause, premature beat generation before audio exists, monolithic file bundling), the output is an **AUTOMATIC REJECTION** and must be re-generated before returning to the user.
> 4. **Clean-Room Isolation Law (Strict Prohibition on Cross-Episode Mimicry):** The AI generation engine is **STRICTLY FORBIDDEN from looking at, copying, or anchoring to files from other completed episode directories in `videos/` (such as legacy episodes like `videos/01-peloton-collapse/`).** Older episodes contain deprecated monolithic formats, pre-refactor conventions, or track-specific corporate fraud framing that will contaminate active work. For structural file blueprints, the AI MUST strictly reference `videos/_template/` and this Master Channel Bible alone. Every episode must be generated from first principles in its own isolated directory.
>
> | Task ID | Active Pipeline Task | Master Section Header | Deliverable File | Target Line Range | Essential Rules to Extract & Follow |
> | :--- | :--- | :--- | :--- | :---: | :--- |
> | **TASK-01** | **Research & Mechanism Ingestion** | `# FinanceCraft — Research Methodology` | `01_RESEARCH_BRIEF.md` | `Lines 81–204` | Gap List, Pivotal Detail. Track 1: Case studies (filings, transcripts). Track 2: What-Ifs (verified economic models, AER trials, telemetry). **NEVER force SEC filings onto thought experiments.** |
> | **TASK-02** | **Script Generation (Track 1 / Track 2)** | `# FinanceCraft — Script Generation Prompt` / `"The Hypothetical"` | `02_SCRIPT.md` | `Lines 427–565` | 5-Act structure, ~155 WPM pace, normalized decimals (`point`), inline tags. Track 1: Documented cases. Track 2: POV immersion ("You"), composite archetypes (`[COMPOSITE: <role>]`), recurring `[WATERMARK: HYPOTHETICAL SCENARIO]`, zero SEC filings. |
> | **TASK-03** | **Titles & Core Narrative Hooks** | `# FinanceCraft — Guided Production Document` (Phase 1) | `03_TITLES_AND_HOOKS.md` | `Lines 1346–1369` | 5 distinct CTR title angles, mobile search hooks, provisional core thesis. Standalone file. |
> | **TASK-04** | **Thumbnail Packaging & Concepts** | `# FinanceCraft — Thumbnail Style Reference` (Phase 2) | `04_THUMBNAILS.md` | `Lines 339–426, 1370–1383` | 3–4 Outlier Archetypes, **Anchor Rule**, **Legibility Rule** (168px cap-height test, not word count), archetype-set callout density, 4K Nano Banana 2 prompts. Standalone file. |
> | **TASK-05** | **Character / Composite Setup** | `# FinanceCraft — Guided Production Document` (Phase 3) | `05_CHARACTER_SETUP.md` | `Lines 1384–1402` | Caricatures (Track 1) or composite archetypes (Track 2) with single static reference portraits. Standalone file. |
> | **TASK-06** | **Voice Direction & Audio Stems** | `# FinanceCraft — Voice Direction Prompt (VoxCPM2)` | `06_VOICE_DIRECTION.json`<br>`06_VOICE_DIRECTION.md` | `Lines 1661–1865` | VoxCPM2 JSON chunking, 2-Part Control Instruction (Persona Anchor + Dynamic Register), phonetic decimals (`point`). Standalone files. |
> | **GATE** | **Master VO Audio & Timestamps** | `# Audio-First Timing Gatekeeper` | `voiceover/` (`.wav` + `alignment.json`) | — | **MANDATORY TIMING GATE:** Master voiceover audio and sentence/phrase alignment JSON MUST exist BEFORE generating beats to guarantee 0.0s timing drift. |
> | **TASK-07** | **Spoken-Cadence Beat Sheet** | `# FinanceCraft — Guided Production Document` (Phase 5) | `07_BEAT_SHEET.md` | `Lines 1403–1550` | **Generated STRICTLY AFTER VO audio timestamps exist.** Exact millisecond downbeats (`00:00.0 - 00:03.4`), sentence-bound visual cuts, framing, motion. Standalone file. |
> | **TASK-08** | **Batch 1: Still Prompts** | `# Asset Instructions: Nano Banana 2` | `08_STILLS_PROMPTS.md` | `Lines 1551–1575` | Consolidated copy-paste prompts for all Batch 1 4K stills (3840×2160, vector flat cel-shaded style). Standalone file. |
> | **TASK-09** | **Batch 2: AI Video Prompts** | `# Asset Instructions: AI Video` | `09_VIDEO_PROMPTS.md` | `Lines 1576–1600` | Consolidated copy-paste prompts for all Batch 2 AI video clips (Google Flow / Omni, muted, 1920×1080). Standalone file. |
> | **TASK-10** | **Batch 3: Remotion Graphics Specs** | `# FinanceCraft — Remotion Prompt Guidelines` | `10_REMOTION_SPECS.md` | `Lines 1987–2314` | Dedicated code specifications, component imports, and render commands for Remotion charts/maps. Standalone file. |
> | **TASK-11** | **Batch 4: Audio Score & Sound Design** | `# FinanceCraft — Audio Architecture & Sound` | `11_AUDIO_DESIGN.md` | `Lines 953–1181` | Dedicated BGM score beds (Suno/Udio prompts), empirical volume ducking curves, tactile foley triggers. Standalone file. |
> | **TASK-12** | **Shorts Spinoffs** | `# FinanceCraft — NotebookLM Cinematic Video` | `shorts.md` | `Lines 1588–1630, 1905–1986` | Standalone vertical (9:16) spinoff scripts, NotebookLM Video Overview prompts, and CapCut vertical assembly instructions. |
> | **TASK-13** | **Timeline Assembly & CapCut Integration** | `# CapCut assembly instructions` | `12_CAPCUT_ASSEMBLY.md` | `Lines 1633–1655` | Step-by-step NLE multi-track timeline assembly, transition rules, keyframed pans, and audio ducking. Standalone file. |
> | **TASK-14** | **Verified YouTube Description & Chapters** | `# Final Deliverable — YouTube Metadata` | `13_FINAL_METADATA.md` | `Lines 1658–1680` | Frame-accurate chapter timestamps (derived from final captions/cuts), 20+ curated SEO tags, and verified description. Standalone file. |
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
> * **Core Promise:** Stories people are interested in but haven't heard, or haven't heard told this way—sourced from primary documents (SEC filings, court records, congressional transcripts), avoiding overdone stories like Enron, Theranos, or FTX.  
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

# **FinanceCraft — Research Methodology (for NotebookLM)**

*Goal: consistently surface genuinely new angles and details on stories that have often been covered before — verified, and dramatic enough to narrate. Built around how NotebookLM actually works, not around it as a generic search engine.*

---

## **Phase 0 — Route by track BEFORE opening a notebook (added)**

This methodology was written for Track 1 (documented case autopsies) and was being applied indiscriminately. That is a primary cause of scripts coming out formal and paper-y.

**Track 1 — Documented Case Autopsy.** Real company, real collapse, real filings. Run Phases 1–6 as written below. SEC EDGAR, PACER, hearing transcripts are correct here.

**Track 2 — "The Hypothetical" / POV / macro thought experiment.** **Do not run this methodology at all.** There is no case to excavate and no filing to cite. Running Phases 2 and 4 on a thought experiment produces a bibliography, and a bibliography produces the exact academic register the format cannot survive. Use the Concept Brief in the Hypothetical Script Generator instead, plus the Texture Pass below.

**Track 3 — Mechanism / explainer episode** (how currencies work, unit economics of an industry). Primary-source excavation is optional and usually unnecessary. What this track needs is *one authoritative number per claim* and *heavy texture*. Skip Phases 2 and 3; run Phase 1, the Texture Pass, and Phase 4 lightly.

---

## **The Texture Pass (mandatory for ALL tracks — run it last, never skip it)**

Verified facts make a script defensible. They do not make it watchable. Every benchmark video in the reference set is carried by concrete physical detail, and the engine has been systematically under-collecting it because the research phases only ask for evidence.

Collect, explicitly, before writing:

* **Physical objects** — what does this story look like in a room? Popcorn tubs, marquee letters, a Denny's coffee cup, pallets, a briefcase, a vault door, a spinning loading wheel.
* **Places with names** — Monaco, Fort Lauderdale, Iowa, Rotterdam. Named places are free specificity; generic ones ("emerging markets") are free vagueness.
* **Prices a normal person recognises** — a $15 ticket, a $2,000 rent, an $18 million car. Anchor every abstract figure to one of these.
* **Sensory friction** — the queue, the smell, the wait, the dead phone, the booth at the airport. Benchmark hooks open here roughly every time.
* **One absurd true detail** — the ring count, the clothes-drying-rack exercise bike, the 42-acre rock with no fresh water. These are the lines viewers quote back.
* **A human doing something, not a trend occurring** — a coordinator saying the backlog is measured in months, not "logistics constraints materialised."

**Sources for texture are different from sources for evidence.** Trade press, operator interviews, Reddit and forum threads from people who actually do the job, product and pricing pages, earnings-call Q&A (not the prepared remarks), photo archives, local reporting. A court filing will never tell you what the lobby smelled like.

**The checkpoint:** if the Texture Pass yields fewer than ten usable concrete items, the episode is not ready to script. That is a research failure, not a writing problem — and it is the failure that gets papered over with jargon later.

---

## **The principle this whole method is built on**

NotebookLM is source-grounded: it answers from what you've uploaded into that notebook, not the open web. That's a strength (fewer hallucinations, exact citations back to source) and a hard constraint (it cannot find things you never gave it). **The output is only as fresh as the sources are.** If you upload the same five Wikipedia-adjacent sources every documentary channel already used, you'll get a well-organized version of the same story. The differentiation happens in what you feed it — this methodology exists to make that deliberate instead of accidental.

**Notebook structure — one per story, plus one lightweight exception.**

Default: one notebook per story, named to match its idea-tracker entry. NotebookLM can't reason across notebooks, and a shared notebook risks a subtler problem too — the "commonly told version" summary for Story A can start blending in details from Story B's sources if they're topically adjacent (two accounting frauds, say). Keep them separated.

The one addition worth making: a standing **Channel Pattern Notebook** holding only the finished Research Briefs (Phase 6 output) from every story you've researched — not raw primary sources. Briefs are short and synthesized, so this stays well within any source cap even after dozens of episodes, and it's the notebook to query for a genuine cross-story question ("which of our stories share a regulator, an auditor, a recurring loophole"). Raw source dumps don't belong here — only the distilled output does.

**Source budget is finite** (50 sources on Standard, up to 600 on Ultra; 500,000 words / 200MB per source). Spend it on evidentiary value, not volume — fifteen primary documents beat fifty mixed-quality ones.

---

## **Phase 1 — Map the well-known path**

Before touching primary sources, deliberately gather what's *already* been said, so you know exactly what to avoid repeating.

1. Pull 3-5 mainstream sources: the Wikipedia article, one or two major retrospective news pieces, and (if findable) transcripts or summaries of existing YouTube documentary coverage of the same story.  
2. Use NotebookLM's **Discover Sources** feature, or a quick Deep Research pass, to speed this up.  
3. Check specifically for recent developments — an appeal, a follow-up lawsuit, a new filing — since older stories can have quiet updates that neither the primary sources nor the popular retellings reflect yet.  
4. Upload these into the notebook.  
5. Run this prompt:

> *"Summarize the commonly told version of this story in a few clean paragraphs — the version most articles and videos about it already tell."*

Keep that summary in the notebook as a reference object, not as evidence. Its only job is to be the thing you consciously depart from in Phase 3\.

---

## **Phase 2 — Excavate primary sources**

This is where actual differentiation comes from. Reuse and extend the source checklist:

* SEC EDGAR (10-Ks, proxy statements, litigation releases)  
* PACER / bankruptcy and court filings, depositions  
* Congressional hearing transcripts  
* Regulatory or special-committee investigation reports (the Toshiba/Olympus-style independent inquiry reports)  
* Contemporaneous press archives — written before the ending was known, not retrospectives  
* Harvard Business School case studies  
* Local-language press or regulatory archives for international stories (translated)

Upload these as the bulk of the notebook. An actual court filing outranks a news article describing the court filing — prioritize the primary document every time both exist.

---

## **Phase 3 — Interrogate the gap**

This is the differentiation engine. Run these prompts against the full notebook (mainstream summary \+ primary sources together) — each maps to one of the five angle-transformation techniques already in the idea-tracker toolkit:

**Invert** — *"Based on the primary sources, who had the opportunity to stop this and didn't? What did they know, and when?"*

**Correct** — *"What specific facts in the primary sources contradict or complicate the commonly told version summarized earlier in this notebook?"*

**Zoom** — *"What is the most specific, overlooked detail in these documents that the popular retellings never mention?"*

**Connect** — *"What connections exist between this event and other fields — psychology, geography, an unrelated industry — that the sources touch on but that popular coverage doesn't explore?"*

**Aftermath** — *"What happened to the key people or the company in the years after the main event, according to these sources? Popular coverage rarely follows up — what's the update?"*

**Narrative mining** (run this one regardless of which angle you land on) — *"Extract direct quotes, specific numbers, and vivid or ironic human details from these documents that would work well narrated in a documentary — moments of hubris, irony, or human drama, not just facts."* Primary sources are often dry; this is the deliberate step that keeps "verified" from becoming "flat."

Follow it immediately with the **physical-detail extraction**, which is a different question and gets missed if folded into the above — *"From these sources, list every concrete physical object, named place, recognisable price, and piece of sensory detail. Not conclusions or figures — things a camera could photograph and a person could touch."* This feeds the Texture Pass and is the single highest-leverage research output for retention.

**Showable & pivotal assets** (run every time, non-negotiable) —

> *"List every specific, discrete artifact in these sources that could be shown on screen as-is — a tweet, a screenshot, a photograph, a specific document page, a headline, a chart. For each one, note exactly what it shows, its source, and why it's compelling."*

Anything this surfaces is a candidate for a real-document editorial insert under the visual system — log each one straight into the Research Brief's Showable Assets list (Phase 6\) as you find it, don't let it get lost in a chat scroll.

Follow it with:

> *"Beyond anything visual — what single fact, document, or quote in these sources feels most pivotal to how this story should be told? What would change about the story if this detail were left out?"*

Narrative mining collects texture; this asks the notebook to commit to a judgment about what actually matters most. Worth asking even when you think you already know the answer.

**Checkpoint — is there actually a story here?** If the Gap List coming out of this phase is thin — nothing beyond what Phase 1's summary already said — that's a real signal, not a failure. Take it back to the idea tracker: either try a different one of the five techniques, or re-score and deprioritize the idea. Forcing a script out of an angle that didn't pan out is how a channel ends up making the same video everyone else already made, just later.

---

## **Phase 4 — Verify before it goes in the script**

For every fact you intend to actually use:

> *"Show me the exact source and passage this claim comes from."*

Use NotebookLM's citation linking as the check, not your memory of the chat answer. Flag anything resting on a single source — especially claims that function as an accusation against a still-living person — and don't use it until a second, independent source confirms it. This niche carries more legal exposure than most; this step is not optional.

**Source variety matters as much as source count.** Don't let verification lean entirely on one type of document. Draw from a genuine mix — regulatory filings, court records, contemporaneous press, and where relevant, primary social posts (a since-deleted tweet, a public statement) archived at the time. Treat this phase as the equivalent of a human researcher spending real hours cross-checking every load-bearing claim before it goes in a script, not a single pass through the notebook's most convenient answer.

**When two primary sources disagree** (a filing gives one number, testimony gives another — common in messy fraud cases), don't silently pick one. Ask: *"Do any of these sources contradict each other on this point? What does each one specifically say?"* If the discrepancy is itself interesting, it can become a beat rather than a problem to hide — "officials never fully reconciled X and Y" is a legitimate line in a script.

**Two kinds of risk, not just one.** Legal exposure is the obvious one. The other is reputational: this genre gets watched by people who know the subject matter and publicly fact-check it — economists, lawyers, industry insiders. A claim sourced from an authoritative primary document survives that scrutiny; one sourced from a blog summarizing a summary doesn't. Weight your sourcing accordingly for anything load-bearing.

---

## **Phase 5 — Generate structured outputs**

* **Mind Map** of the full source set — catches structural connections between people, events, and entities, and doubles as a first pass at spotting which relationships deserve an actual map or diagram treatment in the video.  
* **Report** — generate a synthesized briefing doc as your working research digest, easier to scan than the raw chat history.

---

## **Phase 6 — Package the Research Brief**

This is the handoff artifact — what gets fed into the script-writing prompt next. Standard template:

1. **Angle statement** — one sentence: what's actually new here.  
2. **Verified facts**, each with its source citation.  
3. **Key figures** — names, roles, one line of context each.  
4. **Timeline of events** — kept as reference even if the script itself won't be chronological.  
5. **The Gap List** — specific facts or details that differ from, or are absent from, the commonly told version (Phase 1's summary).  
6. **Narrative-mining highlights** — the quotes, numbers, and ironic details surfaced in Phase 3\.  
7. **Showable Assets** — every real, screenable artifact found (tweet, document page, photo, headline): what it is, its exact source, and why it's compelling.  
8. **The Pivotal Detail** — the single fact or document Phase 3 flagged as most load-bearing to the story.  
9. **Open questions** — anything unresolved or contradictory across sources.  
10. **Visual-asset flags** — note as you go: anything that clearly wants a map, a caricature beat, or a real-document insert.

That Research Brief is the input for the next piece — the prompt that turns this into an actual asset-tagged script.

# **FinanceCraft — Style & Production Bible**

*Working reference for tone, visual system, and production rules. Update this as decisions change — don't let it drift out of sync with what's actually being made.*

---

## 1. Channel Identity & Entertainment Mandate

**The Mission:** We make **fun, highly engaging, visually addictive, and deeply informative** business, finance, and macroeconomic documentaries. We are NOT a dry corporate compliance firm, an SEC law clerk's office, or an academic lecture channel. If a script feels formal, stuffy, or like a courtroom deposition, it violates our core identity.

**Dual Production Tracks:**
1. **Track 1: Corporate Autopsies & Investigative Scandals (Documented Cases):** Real corporate collapses, accounting manias, and high-stakes executive gambles (e.g. Peloton, WeWork, MoviePass). Grounded in primary records when relevant, but narrated with wit, high retention, relatable human absurdity, and dramatic momentum.
2. **Track 2: "The Hypothetical" & Macro Thought Experiments (Speculative / What-If Simulations):** High-concept simulations exploring extreme economic dilemmas and systemic anomalies (e.g. *The Thirty-Day Blackout*, *What If You Had $1 Trillion*, *What If Commercial Banks Failed Overnight*). **STRICTLY PROHIBITS forcing SEC filings, court dockets, or legalistic paperwork.** Uses second-person immersion ("You"), telemetry HUDs, economic flowcharts, countdown clocks, and relatable human behavior.

**The Tone & Positioning:** Same genre neighborhood as *MagnatesMedia*, *Crayon Capital*, *My Chaotic Stories*, and *ColdFusion*. Sophisticated yet irreverent; intellectually rigorous without ever being stuffy, academic, or formal.

---

## 2. Visual System — Clean Illustration, Dynamic Visualizations, Nuanced Evidence

**Primary register: clean, flat vector illustration with soft cel-shading.** Confident line work, gradient-based light and shadow for dimensionality — not flat single-tone fill, and not a 3D render. This is the look for everything: characters, interiors, maps, symbolic objects. Depth comes from considered gradients and directional light, not from layered texture or drop shadows.

**This register works identically whether or not a real named person appears in a given beat.** A mechanism/infographic-style episode with zero people, a Hypothetical episode with only composite characters, and a documented-case episode with a real caricature all use the same underlying illustration system — only the character-handling rules (Section 4) change per beat, never the visual register itself.

**Real evidence as a clean inset (Nuanced Evidence Rule — No Blanket Ban):** Real screenshots, deeds, court transcripts, and SEC filings appear as actual literal images — bordered inset panels or floating document cards with clean drop-shadows — never redrawn or AI-recreated, and never cut in as full-frame photoreal footage. However, **holding flat static text for long durations causes severe viewer fatigue and split-attention drop-off.** To balance evidentiary authenticity with peak visual retention:
- **Strict Prohibition on Text-Heavy Statics (Animate Every Document):** NEVER leave the audience staring at a flat, un-animated wall of text, contract clause, or legal filing. Every text-heavy asset or forensic exhibit MUST deploy active motion:
  - **Archival Newsprint / Document Highlighter Sweep (`ARCHETYPE_NEWSPRINT_EDITORIAL`):** An animated semi-transparent highlighter strip sweeps across the verbatim incriminating phrase while a red ink sketch circle pops around the key statistic.
  - **Typewriter & Live Transcription Reveals (`variable-speed-typewriter`, `multitext-typewriter`):** Real-time keystroke cadences for leaked memos, internal Slack chats, or conflicting executive claims.
  - **Forensic Rubber Stamp Slams (`ARCHETYPE_RUBBER_STAMP`):** An official verdict badge (e.g., `FRAUD`, `RECALLED`, `LIQUIDATED`) slams down with tactile physics and particle dust.
  - **3D Card Stacks & List Reveals (`bit-card-stack`, `bit-list-reveal`):** Multi-page SEC exhibits, audit checklists, or contract pages fan out in 3D depth rather than sitting in a flat heap.
- **Brief Evidentiary Flashes:** When an overview still of a document is shown, hold it briefly (1.5s–3.0s max) and punch directly into the highlighted excerpt or kinetic detail.
- **Narrative Conceptual Metaphors:** Do not rely solely on dry document crops. Elevate complex corporate mechanisms with rich conceptual illustrations and visual metaphors (e.g. an architectural blueprint, an industrial monolith, an overleveraged house of cards, or an empty conveyor belt).
- **Remotion Dynamic Motion Graphics Engine:** When explaining financial figures, balance sheets, multiples, geographic movements, or physical scale, translate the narrative into animated Remotion compositions governed by [`references/REMOTION_GRAPHICS_ENGINE_REFERENCE.md`](file:///Users/bilalashraf/YT%20Videos/references/REMOTION_GRAPHICS_ENGINE_REFERENCE.md). Always choose the most engaging asset format (cinematic 3D aerial terrain flyover, rapid whip-zoom montage, infinite zoom tunnel, or economic flywheel) while strictly locking to the video's established color palette and theme.

**Retired, not repeated:** the original paper-cutout/diorama treatment (torn edges, cardstock texture, fiber grain) — moved away from deliberately after checking real evidence rather than by assumption: the proven, currently successful patterns in this specific niche (Dark Ledger, Crayon Capital, and the higher-performing thumbnails checked directly) consistently use clean illustration, not tactile paper texture. Stock photography mixed with illustration (episode 1's original problem) and the flat-lay evidence-board collage remain retired for the same reason as before — one consistent register, not competing ones.

**Compositional simplicity beats density.** One clear focal point per scene, minimal supporting elements, generous negative space. A frame crowded with several things competing for attention reads as busier and, somewhat counterintuitively, more generic-AI-coded than a restrained one — density is easy to generate, restraint takes a deliberate choice. If a beat's prompt describes more than two or three distinct elements, cut it down before generating rather than after.

**Lean toward recurring settings over a new one-off environment every beat.** Within one narrative sequence, the setting shouldn't shift without a story reason. Across a full episode, establish one or two recurring "home base" settings (a corporate boardroom, an archival vault, an abandoned manufacturing plant) the story returns to between excursions to new places — real, specific locations still matter for documentary credibility and shouldn't be sacrificed for coherence's sake. The fix is reducing how many never-repeated environments an episode introduces, not reducing geographic specificity where the story needs it.

---

## 3. Color Palette

**Base: light, neutral illustrated backgrounds — color used sparingly, not as the default fill.** White, soft sky gradients, warm light greige interiors should carry most of a frame, with color reserved for one deliberate functional accent rather than spread across multiple simultaneous saturated hues. This matches what's actually working in the checked references — scenes with several saturated colors competing at once (especially green and yellow together) read as busy, not premium. Green and yellow specifically stay sparing-use-only, never co-dominant scene colors.

Saturated color still earns its place deliberately — a thumbnail's single hero accent, a signal color on an important data point — but the everyday scene-to-scene palette defaults toward restraint and light neutrality.

---

## 4. Caricature Rules for Real People

**This section only activates when a real, named person actually appears in a beat.** Episodes or beats with no real person — a mechanism explainer, a Hypothetical scenario with only composite characters, a map or chart beat — never touch this section at all. This is the highest-stakes part of the system whenever it does apply. Follow it exactly.

1. **Illustrated caricature only — never photoreal.** Illustrated/stylized content that doesn't resemble real footage is exempt from YouTube's synthetic-content disclosure trigger and sidesteps likeness/legal risk. Photoreal AI depiction of a real person is off the table entirely, regardless of how polished a photoreal reference might look elsewhere in the genre — several proven competitor thumbnails use real photoreal portraits of real people; we don't, by design.
2. **Lock a fixed reference block per recurring person** (e.g. `[MALIK RIAZ fixed reference block]`), generated once with a locked seed/reference image, reused across every shot they appear in. This is one single pose at one single angle — never call it or generate it as a "character sheet" or "reference sheet," which specifically means a multi-angle turnaround in illustration convention and will produce one if either term reaches an image model.
3. **Caricature is for accountability content only** — someone facing consequences for wrongdoing. It is **not** for victims, crew, or anyone in a tragedy. Tragedy content uses the same anonymized-silhouette-plus-factual-label treatment established in episode 1 (Coldcard Hack) — no face, real or illustrated.
4. **Never script or lip-sync dialogue for a real person's caricature.** Visual staging (sitting, gesturing, a gavel falling) is fine; putting invented words in a real person's mouth is not — this holds regardless of illustration style, and matters more for living, active public figures than for closed cases. If a real quote is needed, present it as an attributed on-screen quote card, not spoken caricature dialogue. "Talking" beats get a generic mid-speech gesture with narration VO carrying the content, not synced words.
5. **Weigh living/active figures more cautiously than closed/deceased cases.** A convicted fraudster in a closed case (Ebbers) carries less risk than a living public figure with active legal proceedings (Malik Riaz) — extra care on staging and framing scales with that.

---

## 5. Production Technique Menu

Not every shot needs full AI video generation — most of the runtime shouldn't.

| Technique | Use for | Notes |
|---|---|---|
| **Static AI stills** (Nano Banana 2) | Most shots, symbolic objects, quote cards | No camera/motion/audio language in the prompt — full composition locked in one frame |
| **CapCut manual pan/zoom** on one still | Establishing shots, maps, wide illustrated scenes | Default choice — zero drift risk, cheapest, best accuracy guarantee for maps |
| **Manual layered parallax** (separate transparent layers, keyframed at different speeds in CapCut) | Scene-setting depth without AI video cost | Depth via keyframed layer speed, not texture — matches the cel-shaded register's gradient-based approach to dimensionality |
| **Image-to-Video** (one reference) | Simple ambient motion off an approved still (grain flutter, subtle drift) | No target end-state needed |
| **Frames-to-Video** (two references, both pre-approved stills) | Any beat involving a real person's caricature, or anywhere design consistency matters | Anchors both ends so the model isn't improvising — primary technique for character work |
| **Extend** (last-frame continuation) | Stretching a shot's duration, chaining establishing shots | Drift risk compounds with repeated use — spot-check after every extend; avoid for character-consistency-critical beats |

---

## 6. Maps

- Always start from a real reference map, styled into the clean illustrated look via a design tool (Illustrator/Figma, or a Nano Banana 2 edit of a traced real map) — never let the video model generate geography from a text prompt alone.
- The flat, accuracy-critical map gets camera/lift motion only — no redrawing.
- Once the shot transitions into an artistic illustrated interpretation, accuracy constraints relax — it's now representational, not a factual map claim.

---

## 7. Text & Typography

- **In-Generation Text Capabilities (Nano Banana 2):** Modern diffusion generators (specifically **Nano Banana 2**) are exceptionally capable of rendering crisp, accurate text directly into the image. **Do not blanket ban in-image text or arbitrarily restrict length when the situation demands it.** When the narrative genuinely calls for an authentic environmental asset—such as a historic newspaper front page, an official deed transfer consideration badge, an architectural blueprint stamp, a boardroom stock ticker, or realistic industrial facility signage—render it directly in-scene with high typographical fidelity.
- **The "Glanceable vs. Reading" Anti-Fatigue Principle:** While Nano Banana 2 handles text brilliantly, be deliberate about viewer cognitive load (the Split-Attention Effect). A viewer listening to narration should **glance and absorb**, not pause to read dense paragraphs.
  - **Default to Atomic Data:** Prefer big bold numbers (`$400M`, `97%`, `-98% Gross Margin`) and concise 1–4 word punchy labels (`LIQUIDATION SALE`, `RECALLED`, `CRISIS PEAK`) over multi-clause sentences.
  - **Reserve Long Text for Situational Authenticity — But Always Animate It:** Full headlines or multi-line legal clauses belong strictly on archival document insets or authentic newspaper props, where the visual weight of the text *is* the editorial evidence. However, **never present them as static blocks.** Always apply animated highlighter wipes (`ARCHETYPE_NEWSPRINT_EDITORIAL`), typewriter keystroke reveals (`variable-speed-typewriter`), or punchy kinetic zoom-ins directly onto the operative phrase to eliminate cognitive drag.
- **Dynamic Remotion Overlays for Kinetic Text & Documents:** When text needs to be kinetic, count upwards, highlight verbatim clauses, or reveal itself at the exact vocal downbeat (e.g., live metric counters, highlight callout boxes, animated financial cards, status badges over scenic footage), **do not bake it statically into the image**. Instead, generate a clean atmospheric visual canvas in Part A, and define the **Remotion Typography Overlay prompt** directly in **Part B — Editing & Assembly** so its entrance timing locks to the narrator's voice.
- **Stylistic Cohesion & Palette-Lock:** Any text overlay or in-scene typography must match the FinanceCraft illustrated register—clean, confident lettering matching the scene's line weight and warm neutral palette, never a generic digital overlay box or mismatched dark mode.

---

## 8. Standing Negative Prompts

Append the relevant block to every generation:

**Any real-person caricature beat:**
`photorealism, real face, real skin texture, exact facial likeness, 3D render, smooth CG shading, synced dialogue, lip-sync to specific words, character sheet, reference sheet, turnaround, multiple views in one image`

**Any scene beat:**
`generic cartoon mascot style, overly glossy plastic 3D look, low-effort round-head stick figure with dot eyes` — the last exclusion specifically because that exact template is heavily reused across the finance-explainer space right now; our characters need real design work, not the same generic base everyone else is running.

**Any map beat:**
`redrawn borders, invented geography, distorted coastline or border shapes, illegible or shifting text, photorealistic satellite texture`

**General:** never reference a real brand's name, logo, or signature color as a style anchor for *invented* elements (e.g. don't borrow a real company's branding to dress up a fictional one). **Thumbnail exception:** when a real, named company or platform is the episode's actual subject (Track 1, or a Track 2 scenario acting on a real named entity per Section 10), its real logo/wordmark may appear in the thumbnail as a literal, undistorted graphic element — never redrawn, parodied, or stylized — the same way the Visual System already allows real evidence as a clean inset. This is often the single clearest way to signal subject matter at 200px (see top-performing competitor thumbnails built entirely around a real logo), and withholding it in favor of an abstract metaphor is a legibility failure, not a safety measure.

---

## 9. Editorial Guardrails

- Naming real companies/executives requires rigorous sourcing (SEC filings, court records, primary documents) — this niche carries more defamation exposure than mystery/history content.
- Real screenshots and documents are editorial proof-inserts, never AI-recreated.
- Stories involving loss of life get the anonymized-silhouette treatment for real individuals (never caricature) and a desaturated, restrained palette, regardless of what the channel's default look is elsewhere.

---

## 10. "The Hypothetical" — Illustrative Scenario Sub-Series

A distinct sub-series for content that teaches a real financial or business mechanic through an invented, illustrative scenario — not a documented case. This covers both a relatable everyday-money scenario (a mortgage, a loan) and a deliberately absurd premise (stranded on an island with $10M of luxury goods) explored with real economic reasoning — the premise can be absurd; the reasoning under it can't be. It must never be mistaken for a documented episode.

**The inversion, stated plainly:** everywhere the main Style Bible says real names, real sourcing, real caricatures — this sub-series does the opposite. Invented people, invented companies, a verified-accurate underlying mechanic instead of a primary-source trail. Nothing here overrides the parent rules for documented episodes; it's a separate, clearly-marked lane.

**Visual signal — layered, so no single missed cue causes confusion:**
- **A dedicated cold-open bumper**, distinct from the main show's, branded "The Hypothetical," using a signature lavender/violet accent color that appears nowhere else in the channel's palette system.
- **A persistent badge overlay** — a clean illustrated label graphic reading "HYPOTHETICAL SCENARIO," in the same lavender accent, reappearing every 2-3 minutes throughout the episode, not just at the open. A one-time disclaimer is exactly what a clipped or re-uploaded segment loses; a recurring one isn't.
- **Composite characters get a deliberately generic, archetypal design** — no specific distinguishing features the way a real-person caricature has. This is a design rule, not just a legal one: it should read as a stand-in, not as anyone in particular.

**Absolute rule: invented names only.** People, companies, banks, anything named — all invented, never real entities even loosely disguised. Round, realistic numbers are fine and expected since accuracy to the underlying mechanic matters — but they attach to invented people and invented companies, never to a real one.

**What still carries over from the main system:** the clean illustrated register, the palette modulation principle, compositional simplicity, the text-generation rules, and the engagement craft from the Script Generator. This is a different content mode, not a different production system.

**Titles must signal fiction.** Three of the five Episode 03 candidates read as real reporting — "Broke Real Cargo," "Starved 6,000 Companies," "How Ad Auctions Replaced the Economy." Past tense, no hedge. The sub-series has a lavender palette, its own bumper, and an on-screen watermark to mark it as invented; a documentary-voiced title undoes all of it before playback, on the one asset that reaches people who never watch. Required: "What If," "POV," "Imagine," or a question mark. The benchmark does this — *POV: You Have $1 Trillion (But Only 7 Days To Spend It)*.

**Descriptions run through `gate_check.py` too.** The Episode 03 description failed all seven gates — jargon 41.7 against a ceiling of 4.0, mean sentence 24 words. Compare the benchmark: *"A theater keeps almost nothing from your $15 movie ticket. So how does the business actually survive?"*

**Packaging locks to one draft.** Episode 03's package mixed Draft A's -$18,400 burn with Draft B's $275/day demurrage, advertising a figure that doesn't appear in the recommended script — and one whose arithmetic was already known to be broken.

# **FinanceCraft — Thumbnail Style Reference**

*A menu of distinct, proven thumbnail archetypes, described as reusable patterns — not templates to copy directly. Pick whichever fits a given episode's actual content, per the guidance under each one. Referenced by the Guided Production Document's Thumbnail Concepts phase.*

---

## **The Anchor Rule (mandatory, all archetypes)**

Every benchmark thumbnail is built the same way: something the viewer already recognises, plus one thing wrong with it.

| Anchor | Wrong thing |
| :--- | :--- |
| Netflix logo | on fire |
| Dinosaur skeleton | dissolving into rock strata |
| Costco storefront | "CON!?" |
| A gun | held by a stick figure in ancient China |
| Jensen + logos you know | he's puppeteering all of them |
| A human face | "$35 BILLION WIPED" |

The anchor buys the first 200 milliseconds. The wrong thing buys the click. Remove either and the thumbnail fails.

The anchor must be nameable by someone with zero domain knowledge. A phone. A house. A supermarket shelf. A parcel. A logo they use weekly. Industry objects — a shipping container, a gate terminal, a demurrage ticket, an ad-auction gavel — are never anchors. They can be the wrong thing, sitting beside an anchor, never standing alone.

This is where the specialist insight goes: in the video, not on the thumbnail. The thumbnail sells the door; the episode delivers the room.

**Gate:** name the anchor and the wrong thing in one sentence each, before writing any prompt. If the anchor needs a sentence of explanation, it isn't an anchor — restart.

---

## **Archetype 1 — Real Photo + Illustrated Character + Data Callouts**

**Pattern:** a real, photographic background (an actual storefront, a real location) with a simple illustrated or voxel-style character as the hero element in the foreground, and several small text-plus-arrow annotations pointing to specific parts of the scene, each calling out one concrete number.

**Proof point:** "The Costco Con!?" (Tony Talks Business) — real Costco storefront photo, a blocky illustrated character holding a membership card and a hot dog, four separate data callouts ($5.3B in fees, 11¢ per $1, 81M households, $65/year), each with its own arrow.

**When to use it:** a consumer-facing "how does this company actually make money" story with several genuinely surprising, concrete numbers worth calling out individually — the callouts are doing real work here, not decoration.

---

## **Archetype 2 — Simple Character + Bold Type**

**Pattern:** a minimal round-head illustrated character (simple dot eyes, plain line features) in a flat, simply-colored scene, with large bold outlined title text carrying most of the visual weight.

**Proof point:** "No Jobs" (Ink Explainer, 17x outlier, 5.4K VPH).

**Honest caveat, not a recommendation to copy directly:** this exact character style is heavily reused across the finance/explainer space right now — it converts well, but it's also one of the least differentiated looks available. If this archetype gets used, the character design should still be distinctly ours, not the same round-head-dot-eyes template several other channels are already running.

---

## **Archetype 3 — Documentary Portrait + Data Overlay**

**Pattern:** a strong archival or historical portrait as the hero image, with subtle technical overlay graphics (thin circuit-style lines, small labeled data points), and editorial typography including a "presents"-style credit line.

**Proof point:** "The Rise of BMW" (Think School, 6.54M subs).

**Our adaptation, not a direct copy:** this uses a real photoreal portrait of a real person — we don't. When this archetype fits a documented-case episode with a strong central figure, the portrait becomes our locked illustrated caricature reference instead of a photoreal photo, keeping the composition and overlay technique but staying inside our own real-person rules.

---

## **Archetype 4 — Painterly / Editorial Illustration**

**Pattern:** a single rich, detailed illustrated scene — closer to concept art than infographic — muted, naturalistic color, elegant serif typography, and deliberately *no* data callouts cluttering the frame. The image alone carries the intrigue.

**Proof points:** "Antarctica Before the Ice" (Mr. Science, 2.8x) and especially **"Origin of Oil" (Atlas Veil, >100x outlier)** — the strongest single performance number across all six examples, worth treating as the standout case for this archetype specifically.

**When to use it:** atmospheric, historical, or scientific subject matter where one evocative image says more than any number of annotations would — the >100x result suggests this is currently underused relative to how well it performs.

---

## **Archetype 5 — 3D Architectural / Object Render**

**Pattern:** a moody, cinematic 3D-rendered environment or object — dramatic directional lighting, dark surroundings, huge bold glowing title typography.

**Proof point:** "Berghof" / "Inside Hitler's Secret Mansion" (Atrium, 2.5x).

**When to use it:** episodes where a specific real place or physical structure is genuinely the subject — a facility, an estate, a landmark — and its scale or atmosphere is part of the story.

---

## **Archetype 6 — Moody Photoreal AI Scene**

**Pattern:** dramatic colored lighting (deep purple/blue), a surreal or near-future scene, bold high-contrast impact typography.

**Proof point:** "No Employees" (There's An AI For That, 6.6x).

**When to use it:** forward-looking or disruption-themed episodes (automation, AI's effect on an industry) where the "unsettling near-future" mood is the actual hook.

---

## **Archetype 7 — Isometric Infographic**

**Pattern:** a clean isometric 3D illustration of a building, object, or system, with numerous small labeled callouts and icons directly on the illustration, often on a light grid-paper background. Information-dense but organized, not cluttered.

**Proof point:** "How Five-Star Hotels Make Money" (The Business Vault, **43.1x outlier** — the second-strongest number in this set) and "The Economics of Owning a Watch Brand" (Mr. Finance).

**When to use it:** "how does this business/industry actually work" mechanism-explainer content — this is the best-evidenced archetype for that specific content type in this set, given the 43.1x result, and a strong natural fit for FinanceCraft's forensic, mechanism-driven angle.

---

## **Choosing an archetype for a given episode**

Not a rigid lookup table, but a starting instinct: a real central figure with strong sourcing → Archetype 3. A company mechanism or "how it works" angle → Archetype 7. An atmospheric, historical, or scientific angle → Archetype 4. A physical place as the actual subject → Archetype 5. A forward-looking/disruption angle → Archetype 6. Archetypes 1 and 2 are broadly usable defaults when nothing else fits more specifically — with Archetype 2's differentiation caveat in mind.

Whichever archetype is chosen, it still runs through the existing Thumbnail Concepts phase rules: Nano Banana 2 handles high-fidelity typography directly, so text hooks, headline numbers, and data badges can be specified straight in the generation prompt (post-production typography overlays remain an optional fallback), keep any real person's likeness illustrated rather than photoreal, and sanity-check readability at small size before finalizing.

### **The Legibility Rule (replaces the 1–4 word rule)**
The word-count cap was derived from one example and is contradicted by the benchmark set. Measured headline lengths: Netflix 0 words, Costco 3, NVIDIA 1, Rent vs Buy 3, $1 Trillion 7, Financial Freedom 6, Five-Star Hotels 5, Movie Theater Chain 8.

The real constraint is cap height, not word count. Text must be readable at 168 pixels wide. Eight short words in a heavy condensed face beat four long words set small.

- One line, or two with a clear size hierarchy — never three.
- No word longer than 11 characters.
- Weight 700 or heavier, high contrast against whatever sits behind it.
- Zero words is a legitimate choice when the image carries the whole idea (see: Netflix in flames).

**Test:** shrink to 168px and read it at arm's length. That is the only check that matters.

### **Callout Density — set by archetype, not capped globally**
Benchmark counts: Five-Star Hotels ~15 callouts, Costco 5, Movie Theater Chain 5, Rent vs Buy 0, Netflix 0.

- **Isometric / infographic archetypes:** 8–15 callouts. The density is the style — capping it produces a sparse, undercooked version of the format.
- **Character or object-staging archetypes:** 0–2. One big number, or none.
- **Split-comparison archetypes:** 0. The split carries the meaning.

Every callout must be priceable by someone with no industry knowledge. `$65 A YEAR` works. `DEMURRAGE: $275/DAY` does not.

### **The Instant-Recognition Object Rule**
Every thumbnail's dominant hero object must be identifiable in under 1 second by someone with zero prior context on the episode — not someone who already knows the premise. Test it directly: does understanding the object require knowing an industry term first (a demurrage ticket, an OAuth error, a chassis shortage)? If yes, it cannot be the hero image — it may still live as background texture, but the foreground must be built from objects that carry meaning on sight (cash, gold, a padlock, a phone, a shipping container, a burning logo), the way *My Chaotic Stories*' "$1 Trillion" thumbnail piles up gold bars and money bags rather than ledger exhibits.

**The subject-bridge check:** the 1–4 word headline plus the hero image, together, must make the episode's actual subject identifiable — not just its downstream consequence — without reading a data badge. A viewer should be able to name what the video is about from the thumbnail alone, even before they know the twist. A hero image that only shows the *consequence* of the story's mechanism (a locked gate, an idle warehouse) with no visual trace of the *mechanism itself* (the platform, product, or system that actually broke) fails this check, regardless of how well it executes the chosen archetype.

### **The Benchmark Cross-Check (Mandatory Before Finalizing)**
Before finalizing any thumbnail concept, name the single closest proof-point thumbnail already logged in `references/COMPETITOR_METADATA_AND_THUMBNAIL_AUDIT.md` for the chosen archetype and format, and confirm the concept doesn't diverge from what made that image work — specifically its palette warmth/contrast level and its zero-inferential-distance between image and premise. A thumbnail that requires a two-step inference (padlock → warehouse → therefore the platform economy failed) has already lost to a thumbnail that requires zero steps. If a concept can't clear this check against its named benchmark, revise it before moving to the next phase — don't ship the near-miss.

**Cite views and date alongside any benchmark claim.** An outlier multiple with no view count is not evidence. Two problems already found in the current reference set:
- **Mr. Finance / "Movie Theater Chain":** 4,730 views. Archetype 4's entire style band is calibrated on it. It is a well-made video and it is not proof of what performs. Flag anything sourced to it as unvalidated.
- **The `ink_explainer_no_jobs` entry is mislabelled.** The packaging cited "No Jobs, 17x Outlier, 5.4K VPH"; the actual file is "How Did Human Accidentally Invented Guns?", 35,069 views. A performance stat was attributed to a video that isn't in the set.

Where view counts diverge by orders of magnitude (1.4M vs 4.7K), weight the high performers and mark the rest as stylistic reference only.

# **FinanceCraft — CP-INPUT: The Mandatory Brief Gate (HIGHEST PRECEDENCE)**

*This gate runs before CP-0, before track classification, before anything. It is the first thing the engine evaluates on every invocation.*

---

## **The rule**

**The engine MUST NOT write narration — not a draft, not a hook, not a sample paragraph, not "a rough version to get us started" — until a completed Research Brief (Track 1) or Concept Brief (Track 2/3) has actually been supplied in the conversation.**

If no brief is present, the engine's entire response is a refusal plus a request. Nothing else.

## **Why this is a hard gate and not a preference**

When the engine writes without a brief, it fills the gap with the only material it has: general knowledge, plausible-sounding figures, and generic structure. That output *reads* finished. It passes a casual review. And it is exactly how unverified numbers, invented details, and the flat institutional register get into a script — because nothing concrete was ever supplied to displace them. A script written from no brief is not a first draft. It is a fabrication with good formatting, and revising it costs more than starting correctly.

This failure is invisible at the point it happens and expensive three stages later, once a shot list and a voiceover have been built on top of it.

## **The refusal protocol**

If invoked with no brief, respond with exactly this shape and nothing more:

1. State plainly that no Research Brief or Concept Brief is present, so scripting cannot begin.
2. Name which brief type the topic requires (route by track).
3. List the specific missing fields, by name, from the relevant brief template.
4. Offer the one thing that IS allowed without a brief: *helping build the brief itself* — running the research methodology, drafting the Concept Brief, or interrogating a half-finished one.

**Do not** soften the gate by producing "just an outline" or "a structural skeleton to react to." A structure written before the material is known anchors every later decision to a guess.

## **Partial briefs**

A brief missing one or two non-load-bearing fields may proceed, but the engine must name the gaps up front and flag every passage in the delivered script that rests on a gap. A brief missing its Angle Statement (Track 1) or its Mechanic and Invention Premise (Track 2) is not partial — it is absent, and the gate holds.

## **What the engine may never do**

- Invent a figure to fill a hole and mark it `[VERIFY]` — verification-flagged inventions survive into final scripts with remarkable reliability.
- Proceed because the topic "is well known enough."
- Proceed because the user asked twice. The second ask is answered the same way as the first, with the brief-building offer repeated.

---

# **FinanceCraft — CP-VERIFY: The Phase Gate & Regeneration Loop**

*Runs at the close of every phase. No phase output is handed forward until its gate returns PASS. This section defines how the engine checks itself and what it does when it fails.*

---

## **The problem this solves**

The engine has been producing self-audits that assert compliance without performing the check. A real example: a delivered script's own audit block claimed 5 `[DATA]` tags when the script contained 7, claimed 4 `[COMPOSITE]` archetypes when only 3 were tagged, and reported per-act word counts that were off by up to 90 words — while every line of the audit read as confident and verified.

That is the failure mode to design against. **An audit that produces a number without counting is worse than no audit**, because it converts an unchecked draft into an apparently-validated one, and everything downstream inherits the false confidence.

So the rule underneath this entire section: **verification means producing the evidence, not producing the verdict.**

---

## **The loop**

Every phase runs the same four steps:

**1. PRODUCE** — generate the phase output.
**2. VERIFY** — run that phase's checklist below, in full, in writing.
**3. BRANCH** — all PASS → hand forward. Any FAIL → regenerate.
**4. REGENERATE** — rewrite only the failing unit, re-verify, repeat. Maximum **two** regeneration attempts per phase.

### How to verify so the check is real

For every checklist item, the engine outputs **three things**: the requirement, the observed value, and the evidence.

```
REQUIREMENT: Sentences ≤6 words must be ≥38% (Track 2)
OBSERVED:    47 of 171 sentences = 27.5%
EVIDENCE:    counted; longest offending run at Act II ¶4 —
             three consecutive sentences of 22, 26 and 19 words
VERDICT:     FAIL
```

**Forbidden verification language**, in any phase: "PASS", "compliant", "verified", "confirmed", "all guidelines followed" — appearing without an observed value and its evidence beside it. A bare verdict is treated as a FAIL regardless of what it claims.

**For any countable item, the count must be produced by scanning the delivered artifact, not recalled from the intention while writing it.** If the engine cannot actually count something reliably, it must say so — *"cannot verify by inspection"* — rather than emit a plausible number. An admitted gap is recoverable; a confident wrong number is not.

### What "regenerate" means

Regeneration is targeted, not total. Rewrite the smallest unit that contains the failure:

- Gate 4 jargon failure in one paragraph → rewrite that paragraph
- Act III over-length by 40% → restructure Act III
- Stakes Contract absent → rewrite the opening 80 words
- Structure fundamentally wrong for the material → the whole draft, back to Step 1

Rewriting the entire script to fix one paragraph usually introduces new failures elsewhere and is a common way for the loop to oscillate without converging.

**After every regeneration, re-run the phase's FULL checklist — not only the item that failed.** Fixes propagate: cutting jargon lengthens sentences, tightening sentences drops concrete nouns.

### The escalation rule — this is the important one

**If a phase fails its gate twice, stop. Do not attempt a third pass. Do not ship the best available version.**

Report to the user:
1. Which specific gate is failing and the observed value across both attempts
2. What was changed between attempts and why it didn't resolve it
3. The engine's diagnosis of *why* — usually one of: the brief lacks the material the gate needs, two guidelines are in genuine conflict, or the topic is a poor fit for the chosen archetype
4. A specific recommendation — usually either "the brief needs X" or "this needs a different archetype"

Two failures on the same gate almost never means the engine needs another try. It means something upstream is wrong, and further attempts burn effort producing variations on an unfixable draft. **Silently shipping a near-miss after two failures is the single worst outcome available** — it looks like success and defeats the entire gate system.

---

## **Per-phase checklists**

### GATE α — Brief Intake (after CP-INPUT, before anything else)
- Brief type matches the routed track — state which, and why
- Every load-bearing field present and non-empty: Track 1 → Angle Statement, Verified Facts w/ citations, Pivotal Detail, Showable Assets. Track 2 → Mechanic, Invention Premise + 4 rejected variants, Constraint, Adversary, World Kit, Quotable Beat
- Texture Pass yields ≥10 concrete items — **list them, numbered**
- FAIL → do not regenerate. Return to the user for the missing material. The engine cannot manufacture its way past this gate.

### GATE β — Structure & Divergence (after Step 1, before drafting)
- Structure named for both drafts, with one-sentence rationale each
- Drafts diverge on ≥2 of the 4 axes — name the axes explicitly
- Draft B's risk stated in one sentence: what could go wrong
- Chronological chosen only with a stated reason nothing else fits
- FAIL → re-pick structures. This gate is cheap to fail and enormously expensive to skip; a wrong structural choice cannot be edited out later.

### GATE γ — Narration Draft (after Step 3, per draft, independently)
Run every CP-0 Retention Physics gate with observed values and evidence:
- **Run `gate_check.py -a <archetype>` and paste its output.** Do not restate the numbers from memory — the bands are archetype-relative and the script is the authority.
- Median, mean, short-sentence share, long-sentence share, second-person: against **this archetype's band**, not a universal number
- Jargon per 1,000 ≤ 4.0 (universal) — **list every offending term by name**
- 12+ char words per 1,000 ≤ 14 (universal)
- **By eye, not by script:** passages with nothing a camera could photograph. No reliable automated test exists for this; read for it.
- **Mechanism repetition.** List every distinct failure mode in the script. If the same one recurs — a blocked login, a frozen account — it is one beat told repeatedly, not escalation. The benchmarks never reuse a failure mode; each stage breaks for a new reason. Not mechanically checkable, since the mechanism is topic-specific.
- R3 explainer-paragraph ban — quote any passage of 3+ mechanism sentences with no person, object, consequence or joke
- R5 device ledger — list each rhetorical device and its count; any count >1 is a FAIL
- Track 2: Stakes Contract complete within 80 words — **quote the 80 words**
- Track 2: ledger beats present and identically shaped at every time block

### GATE δ — Tagging & Assets (after Step 4)
- Every `[COMPOSITE]` / `[CARICATURE]` beat described in prose carries an actual bracket tag — scan the prose for untagged archetype beats, don't assume
- Every Showable Asset and the Pivotal Detail from the brief is tagged somewhere
- `[WATERMARK]` spacing ≤3 minutes throughout (Track 2) — compute the gaps from act word counts, don't eyeball
- Delivery tags present at every genuine energy shift
- Tag counts produced by scanning the delivered script
- Signature cinematics: `gate_check.py` reports every `[REMOTION: ARCHETYPE_...]` tag's approximate timestamp. Zero found needs a stated reason in the audit; two or more landing <90s apart needs one too — don't let either pass silently.

### GATE ε — Audit Integrity (after CP-2, final gate before handoff)
This gate audits the audit.
- Per-act word counts counted from the delivered acts — not asserted
- Cumulative act timestamps derived from those counts — recompute and compare against any stated timestamps
- Total word count with tags stripped
- Every number in the CP-2 block traceable to something actually counted
- **Self-check: does any figure in this audit block differ from what a fresh count of the delivered script would produce?** If unsure of any figure, mark it "unverified" rather than stating it.
- FAIL → the audit block is rewritten. The script itself may be fine; a wrong audit is still a blocking failure because everything downstream trusts it.

---

## **Honest limitation — read this before relying on the loop**

Self-verification is weakest at exactly the thing that has already failed here: mechanical counting. A language model asked to count tags in its own 2,000-word output will often produce a plausible number rather than a correct one, and asking it to "check carefully" does not reliably fix that.

This section reduces the failure rate — mainly by demanding evidence alongside every verdict, which makes fabricated counts harder to produce casually. It does not eliminate it.

**For anything genuinely numeric — word counts, sentence-length distributions, jargon density, tag counts, act allocations — run an external script over the delivered file.** A twenty-line counter is definitive where self-audit is probabilistic. Treat GATE γ and GATE ε self-reports as a first filter that catches obvious failures, and the external count as the thing that actually decides.

The gates that self-verification handles *well* are the judgement calls: is this passage an explainer paragraph, is this device repeating, is Draft B actually a swing, does the Stakes Contract really state a penalty. Those are the ones to lean on.

---

# **FinanceCraft — Retention Physics (MEASURED STYLE GATES — CP-0)**

*This section outranks every stylistic instruction elsewhere in this document. It was derived by measuring the seven benchmark transcripts directly, not by intuition. A script that violates these gates is rejected and rewritten before any other check runs.*

---

## **Why this section exists**

The engine's prose kept drifting into a formal, academic, "written" register despite instructions saying "be fun and witty." Instructions expressed as adjectives do not constrain output. These are expressed as numbers, because numbers constrain output.

**Measured across the seven benchmark videos vs. a failing in-house draft:**

| Metric | Benchmark range | Benchmark median | Failing draft | Verdict |
| ----- | ----- | ----- | ----- | ----- |
| Mean sentence length (words) | 7.6 – 16.9 | 11.7 | 12.7 | borderline |
| **Median sentence length** | **6 – 15** | **11** | **12** | borderline |
| **Short sentences (≤6 words)** | **14% – 52%** | **28%** | **21%** | **too few** |
| Long sentences (≥25 words) | 1% – 21% | 5% | 7% | borderline |
| **Jargon terms per 1,000 words** | **0.0 – 4.1** | **1.8** | **26.8** | **CATASTROPHIC — 6.5× worst benchmark** |
| **Words ≥12 characters per 1,000** | **4.2 – 13.5** | **9.0** | **28.3** | **CATASTROPHIC — 2.1× worst benchmark** |
| Second-person hits per 1,000 (POV formats) | 57 – 76 | 57 | 36 | too low for Track 2 |

**The finding:** the failing draft was not short on concrete detail (15.1 concrete nouns/1,000 vs benchmark POV's 15.2 — effectively identical). It was burying that detail under six times the abstraction load of any successful video in the niche. "Too technical" is not a vibe. It is a measurable density problem.

---

## **The Gates — archetype-relative, validated against the benchmarks**

**These thresholds were not invented. They are the measured values of the benchmark video for each archetype.** An earlier version of this section used a single universal threshold set; when those were run against the seven benchmark videos, **all seven failed.** A gate that rejects every video you are trying to emulate is not a quality standard, it is a bug. The gates below pass all seven.

Run on spoken narration only — strip `[TAGS]`, act headers and audit blocks before counting. Use `gate_check.py -a <archetype>`.

### Per-archetype bands (from the benchmark for that archetype)

| A# | Archetype | median | mean | ≤6w | ≥25w | you/1k |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | First-Principles Explainer | 13 | 14.1 | 15.8% | 13.3% | 23.0 |
| 2 | ELI5 Origin Narrative | 8 | 9.0 | 41.8% | 1.7% | — |
| 3 | Geopolitical Chessboard | 10 | 12.7 | 20.9% | 5.8% | — |
| 4 | P&L Business Breakdown | 15 | 16.9 | 13.7% | 20.9% | — |
| 5 | POV Thought Experiment | 7 | 8.7 | 43.1% | 1.5% | 57.4 |
| 6 | Dual-Character Simulation | 11 | 11.8 | 27.4% | 4.6% | — |
| 7 | Compounded Playbook | 6 | 7.6 | 52.4% | 0.9% | 75.6 |

**Tolerance is asymmetric.** Drifting *toward* the benchmark's register is free. Drifting away fails: median +3 words, mean +3.0, short-sentence share −8pp, long-sentence share +4pp, second-person −12/1k.

**Why per-archetype and not universal:** sentence metrics vary enormously by format and legitimately so. Mr. Finance runs a 16.9-word mean across 23 minutes and it works — a P&L breakdown needs clauses to carry a cost structure. LITTLE BIT BETTER runs 7.6 and that works too. The spread across archetypes is 2.2× on mean length and 23× on long-sentence share. Any single number is wrong for six of the seven.

**Pick the archetype before writing, not after.** The bands only mean something if the archetype is chosen deliberately in Step 1.

### The four universal gates

These are the ones that held across every archetype, and they are the ones the engine actually fails:

**JARGON ≤ 4.0 per 1,000 words.** Measured maximum across all seven benchmarks: **2.2**. Minimum: 0.0. Two of the seven contain literally none. The failing in-house draft measured **22.1** — ten times the worst benchmark. This single metric explains most of what "too technical" means.

**12+ character words ≤ 14 per 1,000.** Benchmark range 4.1 – 12.8. Failing draft: **28.5**.

Format does not excuse either. A 23-minute P&L breakdown with 16.9-word sentences still keeps jargon at 1.2.

**REFRAMES ≥ 36 per 1,000 sentences, first one inside the opening 12%.** The "it isn't X, it's Y" turn — "World hunger isn't a shortage of food." All seven benchmarks fall between 36 and 108, and every one lands its first turn within the first 11%. These are the lines viewers quote back. A script can pass every register gate and still have nothing in it worth repeating; this is the gate that catches that.

**SENTENCE OPENERS: most-repeated ≤ 24%, longest identical run ≤ 3.** Benchmarks run 6–20% with no run exceeding three. Second-person density is a floor, not a target — overshooting it produces "You stand. You wipe. You look. You check," which reads as a chant. A draft can pass the YOU gate and fail this one.

### Demoted checks — honest about what cannot be automated

**Concrete-noun runs (formerly GATE 7): not mechanically checkable.** The original implementation matched against a hand-written vocabulary list, which measured "contains a word from my list" rather than concreteness. It flagged 132 consecutive sentences in a video full of kitchens and houses. The metric was invalid and has been removed rather than left in to be ignored. Read for it by eye instead: passages with nothing a camera could photograph. The failure it was trying to catch is real; the test was not.

**Raw decimals: advisory, not a gate.** This is a text-to-speech artifact, not a writing-quality signal. The benchmarks are human-voiced and contain raw decimals freely. It still matters for us because our VO is synthetic, so `gate_check.py` reports it as a note before voicing.

### The Jargon List (Gate 4 reference — these words cost you)

Every one of these appeared in the failing draft and in **none** of the seven benchmark videos. Treat each as a fail unless it is the actual subject of the episode and is defined by physical demonstration within one sentence:

`macroeconomic · programmatic · algorithmic · autonomous · protocol · infrastructure · architecture · authentication · consolidate · telecommunications · neurochemistry · down-regulate · up-regulate · hedonic set-point · variable-ratio · reinforcement schedule · empirical · randomized evaluation · standard deviations · sigma · hysteresis · liquidity · velocity · contraction · exposure · leveraged · restructuring · circulatory · conversion · impressions · sovereignty · mandates · reclassifying · decentralized · multi-carrier · substitution · cognitive · equilibrium · subjective indices · systemic*`

*\*`systemic` is the one permitted exception, and only in the way My Chaotic Stories used it: isolated as a one-word sentence after the plain-language version has already landed. Never as a modifier inside a longer clause.*

**The substitution discipline:** every one of these has a spoken-register replacement.
- "liquidity freeze" → "the money stopped moving"
- "customer acquisition costs explode" → "it now costs four times as much to find one buyer"
- "down-regulated D2 dopamine receptors" → "your brain turned down the volume on pleasure, and it hasn't turned it back up"
- "informal commerce velocity contracts 65 percent" → "two out of every three street sales just stop"
- "hysteresis" → "it never goes back"
- "0 point 19 standard deviations" → cut the number entirely, or say "people simply knew less about the news, and the gap was real but small"

---

## **The Register Rules (qualitative, enforced by the gates above)**

**R1 — One idea per sentence.** If a sentence contains a comma followed by a clause that introduces a second concept, split it.

**R2 — Never define, always demonstrate.** The failing pattern is: *name the thing → define the thing → give the consequence.* The benchmark pattern is: *show the consequence → name the thing afterwards, briefly, almost as an aside.* Martik Finance explains supply and demand for two full sentences before ever using the phrase. Logical Money teaches illiquidity without ever saying the word — "Ryan cannot sell 8% of the kitchen."

**R3 — The explainer-paragraph ban.** No paragraph may run three or more sentences of pure mechanism with no person, object, consequence, or joke in it. If the draft contains a passage that reads like an encyclopedia entry with "you" inserted, it is a fail regardless of accuracy.

**R4 — Numbers arrive alone or not at all.** Never stack three statistics in consecutive sentences. One number, isolated in a short sentence, framed by what it means physically. If three numbers are genuinely needed, they must be spread across three different beats with story between them.

**R5 — One device, one use.** A rhetorical device (myth-vs-reality reversal, "conventional wisdom says X, the math says otherwise", the corrective restatement) may be used **once per script**. The second use is a pattern; the third is a tic and the viewer disengages. Track device usage explicitly in the audit block.

**R6 — Bare noun-phrase section markers are permitted and encouraged in Track 2.** "Luxury goods." "Gold." "Art." A two-word fragment that announces a new category is a legitimate sentence in this format.

**R7 — The technical label goes last, and gets deflated.** Lock Stock Finance: "Economists sometimes call this dynamic a currency war. Nobody's shooting, but everyone's trying to make their exports cheaper." Name it, then puncture it.

---

## **Track 2 — The Stakes Contract (POV / Hypothetical only)**

The benchmark POV video states its **entire premise, deadline, penalty, working rules, and adversary within the first 70 words.** The failing draft took 400 words to establish that the outage was even global, and never stated rules or a penalty at all.

**Mandatory: by word 80, the viewer must know all five of:**
1. What just happened (one sentence, no scene-setting)
2. The clock (how long)
3. The penalty (what is lost if it runs out)
4. The rules (what is and isn't allowed inside the scenario)
5. The adversary (the thing working against you while you act — compounding interest, spreading failure, a closing window)

If the scenario has no natural penalty or adversary, **invent one and state it** — a countdown with no stake is not a ticking clock, it is a calendar.

**Ledger beats are mandatory for countdown formats.** At the end of each major time block, restate position in a fixed, repeated format the viewer learns to expect: *"End of day two. 25 billion dollars spent. 975 billion remaining. Interest accrued while you were buying: 272 million."* Same shape every time. This is the retention spine of the entire archetype.

---

## **Real Named Entities in Track 2 — permitted**

The engine has been over-cautious here. The benchmark POV video names Patek Philippe, Bugatti, Koenigsegg, Christie's, ADM, Bunge, Cargill, Louis Dreyfus, Apple, Microsoft, Nvidia, the SEC, the IMF, the NYSE, Euronext and Argentina — freely, throughout, with dollar figures attached.

**Rule:** in a scenario explicitly framed as hypothetical, real companies, products, places and institutions may be named as *objects the scenario acts upon*. What remains forbidden is exactly what the Style Bible already forbids: inventing quotes, inner monologue, or wrongdoing for a real named person or company. Buying Cargill in a thought experiment is fine. Alleging Cargill did something is not.

---

# **FinanceCraft — Script Generation Prompt**

*Feed this prompt, along with a completed Research Brief or Concept Brief, to generate the narration script. Attach the Style Bible too — the caricature, tone, and editorial rules apply while writing, not just while producing visuals.*

---

You are writing the narration script for a FinanceCraft episode. Your overarching directive is to craft a **fun, visually electric, witty, and deeply informative video**. We are NOT a stuffy corporate boardroom, a legal deposition office, or a dry academic seminar. Write with natural swagger, relatable humor, and visceral metaphors.

## **Step 0 — Track Classification & Format Routing (CRITICAL FIRST STEP)**

**Precedence order on every invocation:**

`CP-INPUT (brief present?) → GATE α → Step 0 (track) → Step 1 → GATE β → Steps 2-3 → GATE γ → Step 4 → GATE δ → CP-3 (twin drafts) → CP-2 (audit) → GATE ε → handoff`

Each GATE is a CP-VERIFY checkpoint: produce, verify with evidence, and regenerate on failure — maximum two attempts, then escalate to the user rather than shipping a near-miss. If CP-INPUT fails, stop there and refuse; do not classify, do not outline, do not draft.

Before writing a single word, classify the topic into one of two tracks:

* **Track 1: Documented Case Autopsy (Real Corporate History, Scandal, or Collapse):**
  - *Topics:* Peloton, WeWork, MoviePass, Theranos, Wirecard, Boeing.
  - *Format:* Investigative narrative with real named figures as caricatures (`[CARICATURE: <name>]`), primary filings/records as tactile insets (`[SHOWABLE: <filing>]`), and forensic financial waterfalls (`[DATA]`).
  - *Tone:* Witty, investigative, grounded in real corporate absurdity.
  - *Execution:* Proceed with Step 1 through Step 5 below.

* **Track 2: "The Hypothetical" & Macro Thought Experiments (Speculative / What-If Simulations):**
  - *Topics:* *The Thirty-Day Blackout*, *What If You Had $1 Trillion*, *What If Commercial Banks Froze*, *The Day Money Dies*.
  - *Format:* Second-person POV immersion ("You"), ticking countdown clocks, composite characters (`[COMPOSITE: <role>]`), telemetry HUDs, and recurring `[WATERMARK: HYPOTHETICAL SCENARIO]` overlays.
  - **CREATIVE MANDATE:** Track 2 is a fiction format with an honest mechanic at its centre. Invent people, places, objects, dialogue and escalation freely and specifically — the Invention Protocol governs this. The only locked layer is the mechanic and its anchoring figures. Over-applying documentary caution here is a failure mode, not a safety measure: it produces careful, generic scenarios nobody finishes watching.
  - **STRICT PROHIBITION:** **NEVER force SEC Form 10-K filings, court dockets, PACER records, or corporate fraud litigation framing onto a thought experiment.** Doing so creates a dry, formal, nonsensical video and constitutes an automatic engine failure.
  - *Execution:* **Route immediately to `# FinanceCraft — "The Hypothetical" Script Generator (Lines 516+)` and `Archetype 5: The POV Thought Experiment (Lines 797+)`.**

---

## **Inputs needed**

* The full Research Brief (for Track 1) or Concept Brief (for Track 2)
* Target runtime in minutes — if not given, assume 12-15 minutes (~1,860-2,325 words at ~155 words/minute documentary pace)

  ## **Step 1 — Pick a structure, and say which one**

Don't default to chronological — it should be the least common choice, not the standing one.

* **In medias res** — open at the story's most dramatic moment, then rewind. Best for one clear peak.  
* **Investigation frame** — narrate as a live discovery ("we found a filing that changes this"). Best when the Pivotal Detail is itself dramatic to reveal.  
* **Ticking clock** — structure around a countdown to collapse. Best for slow-motion failures.  
* **Parallel characters** — cut between two opposing arcs. Best when Key Figures has a clear moral opposition.  
* **Thematic, non-chronological** — organize by theme, not time. Best for sprawling stories with many actors where strict timeline gets confusing.  
* **Reverse chronology** — start at the end, work backward to root causes. Best for aftermath-focused angles.  
* **Chronological** — only when nothing else genuinely fits better.

State your choice and one sentence of reasoning before writing the script.

## **Step 2 — Build the hook**

The largest single drop-off happens in the first 2-5 seconds, not the first 30 — most viewers who survive the first 3 seconds make it to 10\. The opening line has to land immediately; the fuller hook then runs through the first 15-30 seconds.

Use one of: a specific shocking number, a direct address that reframes what the viewer thinks they already know, an unresolved image or question, or a flash-forward to the climax. The Angle Statement should usually drive this — the hook is often the fastest way to signal this isn't the story people have already heard.

Draft this step last, not first. It's easier to write a genuinely sharp opening once the full story exists on the page (Step 3\) than to guess at one before it does — write the body, then come back and craft this.

## **Step 3 — Write the full narration**

* Use the Verified Facts as the factual spine. Don't introduce anything not in the Research Brief or clearly conventional public knowledge.  
* **Engagement technique is never a license to invent.** Rhetorical questions, direct address, and emphasis all work on real verified facts — none of them require a composite character, an invented scene, or a fabricated inner monologue for a real person. If a technique only works by imagining what someone was thinking or inventing a illustrative stand-in, that's fiction-writing craft, not documentary craft, and it doesn't belong here regardless of how effective it reads.  
* Weave in Narrative-mining highlights as texture, not as a list — don't let narration run dry for more than \~30 seconds without a human or dramatic detail surfacing.  
* Place the Pivotal Detail at a moment of maximum narrative weight, not necessarily where it falls chronologically — consider it for the hook, the midpoint turn, or the closing beat.  
* Real people never get invented dialogue or quotes. If the Research Brief has no sourced quote for a moment, describe or imply — never fabricate speech.  
* If the story involves loss of life or victims, not just financial harm, narrate that portion with appropriate gravity regardless of the channel's usual tone.  
* Vary pacing deliberately — include at least one genuine near-stillness beat (a quiet pause after a gut-punch fact). Don't run one uniform energy for the whole runtime.  
* Surface Open Questions honestly where they bear on the story's core claim — don't quietly resolve real ambiguity for a cleaner narrative.  
* Seed open loops continuously, not just at the top — a forward reference ("what happened next made the SEC's job much harder") gives viewers a reason to stay past every internal drop-off point, not only the first 30 seconds.  
* Treat every segment transition as a micro-hook, not a natural pause. The gap between two sections is where viewers are most likely to leave — end each segment on a line that pulls forward, not one that trails off.  
* Once a full draft exists, cut anything that doesn't add a fact, create curiosity, or advance the story. Over-scripting is a common failure mode — if a line doesn't earn its place, remove it even if it's well-written.  
* Write for spoken delivery, not for reading. Read it aloud during revision — anything that sounds like an essay instead of a person talking gets rewritten.  
* **Staccato Rhythmic Variety & Punchy Cadence:** Aim for a conversational sentence length averaging 10 to 13 words. Actively break up multi-clause technical explanations with short, punchy 3-to-6-word standalone declarations (*"The math says otherwise."*, *"Not even close."*, *"Here's the catch."*, *"Nobody checked."*). This rhythmic contrast resets viewer cognitive load, injects natural vocal momentum, and gives key documentary beats maximum spoken impact.  
* **Spoken Conversational Pivots:** Actively favor forward-driving, conversational signposts (*"Here's what actually happened,"*, *"Now look at the numbers,"*, *"And this is where things get weird,"*, *"To see why, follow the money"*) over formal, academic prose transitions (*"Furthermore,"*, *"Consequently,"*, *"Moreover,"*). Spoken narration thrives on sounding like a sharp, engaging investigative narrator explaining a case across a desk, rather than an academic reading a prepared paper.  
* **Visceral Physical Grounding (The "Popcorn & Delivery Van" Rule):** Abstract accounting nouns (*inventory write-downs, gross margin compression, cash burn, working capital deficits*) risk losing viewer engagement if left as floating spreadsheet metrics. Narration is strongly encouraged to anchor these abstractions to concrete physical objects, visceral human actions, or real-world friction (e.g., *"losing $196 every time a bike was loaded onto a delivery van"*, *"pallets of unsold metal frames stacked to the ceiling in Ohio warehouses"*, or *"spending more on marketing than it cost to build the factory"*). Physical grounding turns sterile arithmetic into immediate visual realization.  
* **Relatable Micro-Humor & Everyday Reality Checks (The "Cereal Box" Principle):** Ground corporate absurdity with dry, relatable everyday observations, especially across Act I and Act II. Weaving in 1 or 2 understated, humanizing reality checks (e.g., a $2,500 high-tech touchscreen bike quietly becoming the household's most expensive clothes drying rack) punctures boardroom marketing spin, provides natural breathing room between dense financial calculations, and builds an authentic bond with the viewer.  
* **CP-0 Retention Physics gates are binding here.** Before considering this step complete, the draft must satisfy every gate in the Retention Physics section. Those gates outrank the guidance in this step wherever they conflict.
* **The explainer-paragraph ban (R3).** The most common failure mode is a passage that is accurate, well-organised, and dead — three or more consecutive sentences of pure mechanism with no person, object, consequence, or joke. Mechanism must be married to consequence in the same breath, or delivered as a reveal, never as a definition.
* **Show the consequence before naming the thing (R2).** Do not write "X is called Y, and it works by Z, which means W." Write "W happened. That's Y." The benchmark set does this without exception.
* **One device, one use (R5).** Myth-vs-reality reversals, "conventional wisdom says / the math says otherwise", corrective restatements — pick each up once per script and put it down.
* **Numbers arrive alone (R4).** Never three statistics in consecutive sentences. Isolate one, ground it in something physical, move on.
* No unexplained jargon. If a technical or financial term is genuinely necessary (a covenant, a write-down, gross margin), define it in plain language the moment it first appears rather than assuming the audience already knows it — a documentary that has to be paused and looked up has already lost the viewer. This isn't about dumbing down the story; it's about never making the audience feel like they walked in without the prerequisite.  
* Use genuine rhetorical questions as a pacing device, not just narration statements. Pose a question the audience is likely already wondering, then answer it in the sentences that follow — "why did the cash burn accelerate as production scaled up?" reads as a person thinking out loud, not a lecture. Don't overuse this; a few well-placed questions per script, not one per paragraph.  
* For a single hard-hitting number or fact, isolate it in its own short sentence rather than burying it in a longer one, or use a corrective restatement — state a plausible-sounding wrong scale first, then correct it with the real figure ("not months — years"). This is how spoken emphasis actually lands; adjectives and intensifiers ("shockingly," "incredibly") do this job far less effectively than sentence structure does.
* **Phonetic Decimal Normalization ("point", NEVER "dot"):** TTS and neural voice models (VoxCPM2, ElevenLabs, etc.) routinely pronounce raw numeric decimals like `1.2` as "one dot two" rather than "one point two". Therefore, all decimal figures in the spoken narration MUST be written out phonetically using the word **"point"** (e.g., `1 point 2 million`, `1 point 5 million bikes`, `2 point 5 billion dollars`, `zero point eight percent`), NEVER raw numeric digits with periods (`1.2`, `1.5`, `2.5`).

  ## **Step 4 — Tag asset-relevant moments inline**

As you write, insert bracket tags at points needing specific treatment later — don't write full shot descriptions, just flag them:

* `[SHOWABLE: <what it is, from the Research Brief's Showable Assets>]` (routes to animated document reveals: Remotion highlighter sweeps `ARCHETYPE_NEWSPRINT_EDITORIAL`, typewriter keystroke reveals, or rubber stamp slams; strictly NO static text-heavy cards)  
* `[PIVOTAL]` at the Pivotal Detail's placement  
* `[MAP: 2D route / choropleth]` or `[MAP: 3D flyover / aerial]` wherever geography or physical infrastructure needs showing (routes to Remotion `map-explainer` for 2D vectors/routes, or `3d-flyover` for 3D Cesium terrain/cities)  
* `[CARICATURE: <name>]` at any beat centering a real person  
* `[DATA: <metric / chart type>]` wherever a number, financial comparison, or statistic would benefit from an on-screen visual (routes to Remotion `newsroom-chart-animations` for evidence-led waterfalls, timelines, bubble curves, and ledgers)  
* `[REMOTION: <archetype ID or Bit ID>]` wherever high-velocity visual engagement is needed (cinematic 3D drone flyovers, staccato whip-zoom montages, infinite zoom tunnels, bullwhip physics waves, economic flywheels, or subscribe frames per [`references/REMOTION_GRAPHICS_ENGINE_REFERENCE.md`](file:///Users/bilalashraf/YT%20Videos/references/REMOTION_GRAPHICS_ENGINE_REFERENCE.md))

Every Showable Asset and the Pivotal Detail from the Research Brief must be tagged somewhere — these tags are the handoff points for the production document stage.

Also tag delivery/energy shifts for the narrator — `[TENSE]`, `[WRY]`, `[SOMBER]`, `[BUILDING]`, or similar — wherever the performance should shift noticeably. These aren't asset handoffs; they're for whoever records or generates the voiceover, so energy doesn't stay flat for the whole runtime.

## **Step 5 — Close and hand off**

End on a thematic or reflective button. Don't write the subscribe/sign-off CTA — that's a standardized block added separately at the production stage, not part of the story itself.

---

## **CP-3 — The Twin Draft Protocol (mandatory output requirement)**

**Every scripting invocation produces TWO complete, fully-written scripts from the same brief — never one.**

Not a draft and a variant. Not one script with alternate hooks bolted on. Two independent scripts that make genuinely different bets on the same material, each complete enough to shoot.

### Why two

A single script is unfalsifiable. There is nothing to compare it against, so review collapses into line-editing whatever arrived — and the structural choice, which is the decision that actually determines retention, never gets examined at all. Two scripts convert a vague "is this good?" into a concrete "which one, and why?" That is a question that can actually be answered, and the answer teaches the engine something for next time.

It also protects against the failure mode this engine is most prone to: the competent, safe, chronological version that is impossible to object to and impossible to be excited by.

### The divergence requirement

The two drafts must differ on **at least two of these four axes**, and the engine must state which axes it chose:

1. **Structure** — different entries from the Step 1 menu. If Draft A is a ticking clock, Draft B is not a ticking clock.
2. **Point of entry** — a different moment in the story opens the video. Not a rewritten hook on the same opening beat; a genuinely different beat.
3. **Protagonist or lens** — whose experience carries the narrative. The operator vs. the customer, the insider vs. the regulator, the system vs. the individual inside it.
4. **Emotional register** — one draft leans wry and absurd, the other tense and consequential. Both are permitted in this niche; they produce very different videos.

**Not acceptable as divergence:** different word choices, a reordered middle, a different closing line, or the same script at two lengths.

### Deliberate asymmetry — the Safe Draft and the Swing Draft

Label them explicitly:

- **Draft A — The Safe Take.** The structure most likely to perform reliably for this material. Conventional in shape, excellent in execution. This is the one that ships if there is no time to think.
- **Draft B — The Swing.** The riskier structural bet — the one that could outperform Draft A substantially or could not work at all. Reverse chronology on a story everyone tells forward. A single object narrating a whole collapse. The antagonist's point of view. A format borrowed from a different archetype entirely.

**Draft B must take a real risk.** If both drafts feel equally safe, Draft B has failed its purpose and must be rewritten. The engine should be able to name, in one sentence, exactly what could go wrong with Draft B — if it can't, it isn't a swing.

### Both drafts are held to every gate

CP-0 Retention Physics, CP-2 audit block, tagging, decimal normalisation — both scripts, in full, separately. The Swing is not exempt from the gates because it is experimental. Experimental structure, disciplined prose.

### Output order

1. A short comparison table: Draft A vs Draft B across the chosen divergence axes, plus one line on what each is betting on
2. Draft A, complete, with its own audit block
3. Draft B, complete, with its own audit block
4. **The engine's own recommendation and reasoning** — state which draft to shoot and why, in three or four sentences. Do not present the two neutrally and leave the choice hanging; a recommendation that can be disagreed with is more useful than balanced silence.



## **Output format**

1. Chosen structure + one-sentence rationale  
2. **Mandatory Script Sanity Check Audit Block (CP-2 Enforcement):**

   **2a. RETENTION PHYSICS GATES (CP-0 — report these FIRST; any fail blocks handoff):**
   - **Archetype declared**, then `gate_check.py -a <n>` output pasted verbatim
   - Median / mean / short / long / second-person — against this archetype's measured band (see CP-0 table)
   - Jargon per 1,000 ≤ 4.0 (universal) — **list every offending term found**
   - Words of 12+ characters per 1,000 ≤ 14 (universal)
   - Concrete grounding — read by eye and quote any passage running long with nothing photographable in it. Not mechanically checkable; do not report a number for this.
   - Rhetorical-device ledger: list each device used and its count. Any device used more than once is a FAIL under R5.
   - Track 2 only — Stakes Contract check: confirm premise, clock, penalty, rules and adversary are all present within the first 80 words, and quote them.

   *These are counted on spoken narration with all `[TAGS]`, headers and audit text stripped. Do not estimate — count. A self-reported count that does not match the delivered script is itself an engine failure.*

   **2b. Structural checks:**
   - Exact Spoken Word Count ($W$) — counted with tags stripped
   - Calculated Narration Runtime ($T = (W / 155) \times 60$ seconds)
   - Runtime Window Verification ($12\text{ to }15\text{ minutes} \implies 1,860 \le W \le 2,325\text{ words}$)
   - 5-Act Structural Runtime Allocation (Target: Act I ~15-20%, Act II ~25%, Act III ~25%, Act IV ~20%, Act V ~10-15%) — **per-act word counts must be counted from the delivered acts, and cumulative act start-timestamps must be derived from those counts, not asserted**
   - Inline Asset Tag Audit (Count of `[SHOWABLE]`, `[PIVOTAL]`, `[MAP]`, `[CARICATURE]` or `[COMPOSITE]`, `[DATA]`, `[REMOTION]`, `[WATERMARK]`) — **counts must be produced by scanning the delivered script; every composite/showable beat referenced in prose must carry an actual bracket tag**
   - Decimal Normalization Audit (Confirmation that all decimal numbers use phonetic "point", e.g. `1 point 2`, with zero raw numeric periods `X.Y`)
3. The full narration script, natural paragraph breaks matching spoken pacing, with inline tags  
4. Handoff confirmation: Script verified mathematically compliant for Phase 4 beat breakdown ($B_{target} = \text{round}(T/3.5)$ beats, based on $2.5\text{s} - 4.0\text{s}$ average shot pacing).  
# **FinanceCraft — "The Hypothetical" Script Generator**

*A parallel path to the main Script Generator, for the illustrative-scenario sub-series only. Do not use this for documented-case episodes — it explicitly permits invented characters and scenarios, which the main Script Generator forbids. Attach a Concept Brief instead of a Research Brief.*

---

## Concept Brief — what you need before starting, instead of a Research Brief

- **The mechanic being taught** — one sentence: the real financial or business principle this episode illustrates (e.g., "extra principal payments reduce total loan interest disproportionately, because early payments are mostly interest under standard amortization").
- **Real-world reference figures** — typical interest rates, loan terms, price points, timelines — realistic numbers to ground the invented scenario, verified accurate to how the mechanic actually works. This is the one piece of "research" this format needs: confirm the math or mechanism is genuinely correct, not sourced to a specific case.
- **The angle** — what's counter-intuitive or underappreciated about this mechanic that makes it worth a full episode.
- **The takeaway** — what a viewer should understand or feel by the end.
- **The invention premise** — the chosen premise variant from the Invention Protocol, plus the four rejected ones and why they were weaker. Load-bearing: a Concept Brief without this field is treated as absent under CP-INPUT.
- **The constraint** — the rule that makes the obvious path impossible, and the adversary that acts while the protagonist does.
- **The world kit** — three named places, three recurring objects, one recurring human figure, one absurd detail per act.
- **The quotable beat** — the single moment a viewer would repeat to someone the next day.
- **The third-order chain** — for the two most important beats, the consequence chain pushed three steps past the obvious.


---

## **The Invention Protocol (Track 2 — replaces research, does not skip it)**

Track 2 skips primary-source excavation. It does **not** skip preparation. What Phase 2 is to a case autopsy, this is to a thought experiment — and it is the step whose absence produces generic, forgettable hypotheticals.

A thought experiment fails when it is *reasonable*. "What if social media went down for 30 days" is a premise a hundred people have had. The work is finding the version of it nobody has staged.

### 1. Push the premise past reasonable

Generate **at least five premise variants** before committing, and deliberately overshoot in at least two:

- **The constraint twist** — add a rule that makes the obvious path impossible. Not "you have a trillion dollars" but "you have a trillion dollars and seven days and you may not give any of it away." The constraint is what generates every interesting beat; a scenario without one is a description.
- **The wrong protagonist** — tell it from the position nobody picks. The outage from inside the network operations centre. The bank run from the teller's window. The bubble from the auditor who signed off.
- **The inversion** — instead of the collapse, the recovery. Instead of the winner, the person who called it right two years early and got fired for it.
- **The absurd literalisation** — take an abstraction and make it a physical object with weight and a location. Where is the money, physically? What does it weigh? Who is holding it?
- **The compressed clock** — take something that takes a decade and force it into a week. Take something instantaneous and stretch it across a year.

State the five, pick one, and say in a sentence why the other four are weaker. That sentence is usually where the real angle surfaces.

### 2. Build the world before writing a line of narration

Invented does not mean vague. The benchmark POV video is relentlessly specific — a 42-acre rock off Norway with no fresh water, a man in a suit with a briefcase who appears every morning and whom you stop noticing by day three. None of that is verifiable. All of it is concrete.

Before scripting, invent and write down:

- **Three named places** with one distinguishing physical feature each
- **Three objects** that recur across the scenario — something the viewer sees more than once and learns to read
- **One recurring human figure** who says almost nothing and is never explained
- **One absurd true-feeling detail** per act — the thing a viewer would repeat to a friend
- **The adversary's behaviour** — what the clock, the interest, the spreading failure is doing while the protagonist acts, expressed as a number that moves

### 3. The mechanic stays honest — everything else is yours

This is the line, and it is the only one:

- **Locked:** the financial or physical mechanic being taught, and any real-world figure used to anchor it. Interest compounds correctly. Ports have real throughput limits. Markets halt at real thresholds. Get these wrong and the video is worthless regardless of how good the prose is.
- **Free:** people, companies, dialogue, places, objects, escalation order, tone, structure, the specific shape of every failure. Invent boldly here. Timidity in this layer is the reason hypotheticals come out sounding like textbook worked examples.

The engine has been over-applying documentary caution to a fiction format. A composite character in a labelled hypothetical is not a factual claim, and treating it as one produces a scenario too careful to be interesting.

### 4. Second-order consequences are the whole format

First-order consequences are what the viewer already predicted. The video exists in the second and third order.

For each major beat, force the chain three steps out:
*The feed goes down* → *logins break* (first order, predictable) → *a warehouse cannot dispatch because its 3PL portal authenticates through the same provider* (second order) → *a pallet of frozen goods sits on a loading dock in Rotterdam and the spoilage claim is denied because the contract requires digital proof of handover* (third order — this is the beat worth filming).

Stop at the first order and the video is a list of things the viewer already assumed. Push to the third and you have a scene.

### 5. The interest test

Before committing to the Concept Brief, answer honestly: **what is the single beat in this scenario a viewer would describe to someone else the next day?** If there isn't one, the premise is not ready — return to step 1. Every benchmark video has one: the ring count, the 8% of the kitchen, the popcorn as the actual product.


## Step 1 — Pick a structure, and say which one

The chronological personal-journey structure is the strongest default for this format — following one invented person or household through a multi-year arc tends to make abstract math feel concrete. But the same menu from the main Script Generator is available if a different shape genuinely fits better (thematic, parallel-characters comparing two invented paths, reverse chronology from the end state backward). State the choice and one sentence of reasoning.

## Step 2 — Build the hook

Same techniques as the main show — a specific number, a direct address, an unresolved question, a flash-forward to the end state — but direct second-person address ("you") is a strong default here in a way it isn't for documented cases, since there's no real person's actual experience being claimed. Draft this last, after Step 3, same as the main Script Generator.

## Step 3 — Write the full narration

- **Invented names only — people, companies, banks, everything.** Never a real entity, never a near-miss that could be mistaken for one.
- **The underlying mechanic must be accurate.** Every number in the scenario should be internally consistent and true to how the real mechanic works — the story is invented, the math is not.
- Build one or two invented characters with enough specific, sensory detail to feel real — a recurring visual motif (a whiteboard, a specific object) gives the Guided Production Document something concrete to anchor beats to.
- Direct address to the viewer ("you") can carry the whole narration if the personal-journey structure is used — this is the one structural choice that flips from the main show's rule, where a documentary voice narrates about someone else, not as someone else.
- Reuse the engagement craft from the main Script Generator: genuine rhetorical questions posed and then answered, and emphasis-through-isolation for a key number rather than relying on intensifying adjectives.
- Vary pacing deliberately, same as the main show — near-stillness beats, segment transitions that pull forward rather than trail off, a cutting pass once a full draft exists, and a read-aloud check for spoken delivery.
- **Phonetic Decimal Normalization:** Mandate the phonetic word "point" instead of raw periods (e.g. `1 point 2 million`, never `1.2`) for all spoken decimals to prevent "one dot two" TTS mispronunciations.

## Step 4 — Tag asset-relevant moments inline

Same tagging system as the main Script Generator, with one difference: there is no `[CARICATURE: <name>]` tag here, since there's no real person to lock a likeness to. Use `[COMPOSITE: <role>]` instead (e.g., `[COMPOSITE: the couple]`, `[COMPOSITE: the neighbor]`) — this signals the Guided Production Document to use the generic, archetypal design rule from the Style Bible rather than a locked caricature reference block. `[SHOWABLE]`, `[MAP]`, `[DATA]`, `[PIVOTAL]`, and the delivery tags (`[TENSE]`, `[WRY]`, etc.) all carry over unchanged.

Also tag where the recurring `[WATERMARK]` reminder falls — roughly every 2-3 minutes — so the Guided Production Document knows where to place the "HYPOTHETICAL SCENARIO" badge overlay per the Style Bible's visual-signal requirement. This is not optional and should never be left for the production stage to notice on its own.

## Step 5 — Close and hand off

End on the takeaway from the Concept Brief, stated through the story rather than tacked on as a lesson. Don't write the subscribe/sign-off CTA — same standardized block as the main show, though note the Guided Production Document uses this sub-series' own bumper and watermark, not the main show's standing assets.

## Output format

**CP-INPUT applies: no Concept Brief, no script. CP-3 applies: two complete drafts, never one.**

1. Divergence table — Draft A (Safe Take) vs Draft B (Swing), naming the two-plus axes they differ on and what each is betting on
2. Draft A: chosen structure + rationale, full tagged narration, full CP-2 audit block including CP-0 gates
3. Draft B: same, complete and independently gated
4. The engine's recommendation on which to shoot, with reasoning — and one sentence naming exactly what could go wrong with the Swing


---

# **FinanceCraft — Benchmark Script & Narration Archetypes (Reference Transcripts & Prompt Engine)**

> **⚠ EXCERPT INTEGRITY NOTE (resolved 2026-09-19):** An audit against the actual uploaded transcripts found that 25 of the 28 "Verbatim Transcript Reference Excerpts" previously in this library were fabricated or heavily paraphrased — written in a more formal, Latinate register than the real videos. Because these excerpts are the engine's calibration layer for *voice*, the engine was learning the wrong register from them, which is the root cause of scripts reading academic despite instructions to the contrary. All excerpts below have been replaced with verified verbatim text and annotated with register notes. **Never add an excerpt to this library that has not been verified against a real transcript.** A paraphrase in this section is worse than no excerpt at all.

> **Architectural Purpose & Core Protocol**  
> Great financial storytelling is not one-size-fits-all. A forensic SEC autopsy requires a different rhetorical grammar than a deep-tech semiconductor breakdown, an absurdist trillion-dollar thought experiment, or a personal financial simulation.  
>  
> This master section codifies **7 proven, high-retention YouTube scripting archetypes** extracted directly from real-world top-performing videos across finance and economics. Each archetype provides:
> 1. **Core Aesthetic & Voice Profile** (Pacing, WPM, rhetorical registers)
> 2. **Hook Architecture & Retention Mechanics** (First 45-second retention hooks)
> 3. **Visual & Data Sync Grammar** (Strict adherence to the 2.5s–4.0s average cut rule, 6.0s static ceiling, and Remotion visual cues)
> 4. **Verbatim Reference Excerpts from Spoken Transcripts** (Real benchmarks from YouTube masterclasses)
> 5. **Turnkey System Prompts for Script Generation** (Plug-and-play LLM prompt templates)

---

## **Master Archetype Selection Matrix**

| Archetype | Primary Video Format | Ideal Runtime | Pacing / Cadence | Core Visual Device | Benchmark Reference Video |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. First-Principles Explainer** | Macroeconomics / Monetary Systems / Currencies | 10–14 min | 145–155 WPM (Calm Authority) | Interconnected Mechanical Engines & Scales | *Martik Finance* (`pzInrqRFU5M`) |
| **2. ELI5 Mythic Hardware** | Deep Tech / Semiconductor / Founder Autopsy | 12–16 min | 155–165 WPM (High-Energy Contrast) | Tactile Hardware Metaphors (Professors vs Kids) | *Crayon Capital* (`1GowFTjbUnk`) |
| **3. Geopolitical Chessboard** | Sovereign Finance / Hegemony / Energy / Wars | 8–12 min | 140–150 WPM (Investigative Tension) | 2D Vector Maps, Flows & Hegemonic Loops | *Lock Stock Finance* (`1kFV1Td2BQs`) |
| **4. Inside-the-P&L Breakdown** | Corporate Case Study / Franchise / Unit Economics | 15–22 min | 150–160 WPM (Pragmatic Insider) | Financial Waterfalls, P&L Ledgers, Inset Docs | *Mr. Finance* (`-hBYfmfgBbg`) |
| **5. POV Thought Experiment** | "The Hypothetical" Sub-Series / Absurdist Realism | 10–14 min | 160–170 WPM (Urgent Ticking Clock) | Second-Person HUDs, Timelines, Logistical Maps | *My Chaotic Stories* (`dwSfdH1K7Zk`) |
| **6. Dual-Character Simulation** | Personal Finance / Sacred Cows / Rent vs Buy | 14–18 min | 145–155 WPM (Objective Audit) | Side-by-Side Split Screens, 30-Year Wealth Curves | *Logical Money* (`nkT_K8l1rEw`) |
| **7. Compounded Efficiency** | Wealth Roadmaps / FIRE / Asymmetric Equations | 10–14 min | 150–160 WPM (Empowering Conviction) | Minimalist Formula Breakdowns, Savings Rate Curves | *LITTLE BIT BETTER* (`Pd3HYjpmks4`) |

---

## **Archetype 1: The Intuitive First-Principles Explainer**
### *(The Airport Friction Hook & Numbered Engine Framework)*

* **Benchmark Video:** *How Currencies Actually Work (Full Beginner's Guide)* — **Martik Finance**
* **Video Reference:** `https://www.youtube.com/watch?v=pzInrqRFU5M` | Runtime: 10m 23s (623s)
* **Best Suited For:** Explaining intimidating macroeconomic concepts (floating exchange rates, inflation mechanics, central bank balance sheets, trade deficits, purchasing power parity).

### 1. Voice & Rhetorical Anatomy
- **Locked Voice Persona Anchor (VoxCPM2):** `"Approachable finance educator, warm, articulate, and conversational."`
- **The Voice:** Empathetic, calm, accessible educator. Treats the viewer as an intelligent friend who has simply been fed bad jargon. Never talks down; strips away Wall Street vocabulary.
- **Pacing:** 145–155 WPM. Deliberate, clear downbeats. Allows complex ideas to land before introducing the next mechanical step.
- **The "Numbered Engine" Architecture:** Rather than a dry chronological history, the script structures the explanation into clear, interconnected functional units (e.g., *Engine 1: Trade Balance*, *Engine 2: Interest Rate Differentials*, *Engine 3: Inflation & Purchasing Power*, *Engine 4: Speculation*).
- **Visual Sync Integration:** Every engine is teed up with a clear spoken cue that matches a Remotion kinetic diagram or split-scale animation. Visual cuts occur every 3.0–4.0s.

### 2. Verbatim Transcript Reference Excerpts

> **The Sensory Friction Hook (0:00 – 0:20) — VERIFIED VERBATIM:**
> *"You land in a new country, your phone's about to die, and you need cash. So, you walk up to that little booth at the airport, hand over $100, and get back less than you expected. Way less. Was it robbery? Not exactly. But, you just met one of the most misunderstood systems in the entire global economy."*
> **Register note:** 8 sentences, 63 words — mean 8 words/sentence. Two-word sentence fragment ("Way less.") doing the emphasis work. Zero jargon before the 60-word mark.

> **The Numbered Engine Build (≈3:20) — VERIFIED VERBATIM:**
> *"Let's build the mechanism from the ground up. If everyone suddenly wants euros, and nobody wants to sell them, the price of euros goes up. If everyone's trying to dump euros, and nobody wants to buy, the price drops. Simple. The interesting part is why people suddenly want more or less of a currency. There are four big engines behind that. Engine one, interest rates."*
> **Register note:** the mechanism is built from a concrete if/then pair BEFORE any term is named. "Simple." is a one-word reset beat. The taxonomy ("four big engines") is announced only after the reader already feels the mechanic.

> **The Intuition Break (≈6:30) — VERIFIED VERBATIM:**
> *"You'd assume a strong currency is always the goal, right? Not necessarily. A weaker currency makes a country's exports cheaper for everyone else to buy, which is great if you're trying to sell goods abroad... Economists sometimes call this dynamic a currency war. Nobody's shooting, but everyone's trying to make their exports cheaper than the next country's."*
> **Register note:** the technical label ("currency war") arrives AFTER the plain-language explanation and is immediately deflated by a joke. Never the reverse order.

> **The Callback Close (≈10:00) — VERIFIED VERBATIM:**
> *"So, the next time you check an exchange rate, you're looking at a real-time snapshot of the largest market on Earth. A continuous tug-of-war between interest rates, trade, inflation, and millions of people betting on what happens next."*
> **Register note:** the close resolves the airport-booth image opened in the hook. One metaphor ("tug-of-war"), not three.

### 3. Dedicated Script Generator Prompt

```markdown
SYSTEM PROMPT: THE INTUITIVE FIRST-PRINCIPLES EXPLAINER
You are the lead scriptwriter for FinanceCraft, writing an episode in the "First-Principles Explainer" style benchmarked against Martik Finance ("How Currencies Actually Work").

CORE RULES:
1. THE HOOK: Begin with a hyper-relatable, tangible sensory friction (e.g., getting ripped off at an airport exchange booth, wondering why a cup of coffee doubled in price, trying to pay a foreign subscription). Transition from physical irritation to systemic revelation within 35 seconds.
2. THE STRUCTURAL ENGINES: Structure the core topic into 3 to 5 distinct, numbered "Engines" or "Mechanisms" (e.g., "Engine 1: The Raw Trade Flow", "Engine 2: The Yield Differential").
3. THE FIRST-PRINCIPLES ANALOGY: For every complex abstraction, invent an immediate physical mental model (e.g., two islands trading apples for fish, a balance scale tipping under cargo, a tug-of-war between two banks).
4. SCRIPT PACING & TAGGING: Write in crisp, conversational sentences (10–18 words per sentence). Tag every visual transition inline with [REMOTION: Graphic Description], [SHOWABLE: Document/Filing], or [SCENIC: Illustration]. Ensure beats average 3.0–3.8 seconds of spoken narration.
5. NO WALL STREET JARGON: Never introduce an economic term (e.g., "arbitrage", "purchasing power parity", "contango") without explaining the real-world physical transaction behind it in the preceding sentence.

INPUTS:
- Topic: [Insert Macro / Monetary / Economic Topic]
- The Tangible Friction: [Insert everyday relatable situation]
- The Core Engines: [List 3-4 structural mechanisms]
- Target Runtime: ~10-12 minutes (~1,600 - 1,900 words)
```

---

## **Archetype 2: The ELI5 Mythic Hardware & Origin Narrative**
### *(The Status Paradox Hook & Visceral Tactile Metaphors)*

* **Benchmark Video:** *NVIDIA Explained Like You're 5* — **Crayon Capital**
* **Video Reference:** `https://www.youtube.com/watch?v=1GowFTjbUnk` | Runtime: 14m 19s (859s)
* **Best Suited For:** Deep-tech breakdowns, semiconductor hardware wars, AI computing infrastructure, corporate turnaround epics, visionary founder profiles.

### 1. Voice & Rhetorical Anatomy
- **Locked Voice Persona Anchor (VoxCPM2):** `"Engaging video essay storyteller, curious and articulate."`
- **The Voice:** High-energy, punchy, unpretentious tech storyteller. Bridges the gap between silicon-level engineering and breathtaking capitalist scale.
- **Pacing:** 155–165 WPM. Short, razor-sharp declarative sentences. Uses rhythm and sudden status contrasts to keep viewers hooked.
- **Tactile ELI5 Hardware Metaphors:** Instead of abstract technical jargon (ALUs, FP32 floating point, parallel throughput), the script invents visceral, tangible mental pictures (e.g., *a math professor vs 10,000 kindergarteners*; *expensive sand without software*).
- **Visual Sync Integration:** Fast cuts (2.5s–3.5s average). Highly dynamic Remotion kinetic animations, chip block diagrams, and illustrated caricature moments.

### 2. Verbatim Transcript Reference Excerpts

> **The Status Paradox Hook (0:00 – 0:25) — VERIFIED VERBATIM:**
> *"This dishwasher boy built a $5 [trillion] empire from the table of a Denny's diner. He pitched the business plan over cheap coffee in 1992, and 34 years later, his company makes $20 [million] every single hour. Not from the safe bet, but from a gamble nobody believed in that crushed entire industries..."*
> **Register note:** occupation + physical location ("dishwasher boy", "Denny's diner", "cheap coffee") before any company name. The hook is an image, not a thesis.

> **The Stakes Restated as an Object (≈9:10) — VERIFIED VERBATIM:**
> *"For the first time, they can use a gaming chip like a supercomputer. We don't know what they'll build with it. But when they build something important, it will run on us. If they build nothing, we still have the best gaming cards in the world and a $500 million science project. We've survived worse."*
> **Register note:** the strategic bet is expressed as a plain either/or a person could say out loud. "We've survived worse." — four words, carries the entire risk posture.

> **The Waiting Beat (≈9:40) — VERIFIED VERBATIM:**
> *"Six years passed. The gaming business kept printing money. CUDA kept printing almost nothing. And Jensen kept waiting for the problem big enough to prove him right. Then, in Toronto, someone found it. It's 2012."*
> **Register note:** the time-skip is three words. Parallel structure ("kept printing / kept printing / kept waiting") then a hard cut to a place and a year. This is how to compress years without an expository paragraph.

> **The Climax & Founder Will (≈14:00) — VERIFIED VERBATIM:**
> *"Not bad for a company that once had 30 days of cash left and one very wrong chip. None of it was supposed to work. Every single bet looked insane from the outside, and every single one paid off. As what he himself said: 'My will to survive exceeds everybody else's will to kill me.'"*
> **Register note:** the sourced quote is the last thing in the video. It is never paraphrased or introduced with a citation frame.

### 3. Dedicated Script Generator Prompt

```markdown
SYSTEM PROMPT: THE ELI5 MYTHIC HARDWARE NARRATIVE
You are the lead scriptwriter for FinanceCraft, writing an episode in the "ELI5 Mythic Hardware" style benchmarked against Crayon Capital ("NVIDIA Explained Like You're 5").

CORE RULES:
1. THE PARADOX HOOK: Open with an extreme, single-sentence status contrast (e.g., humble immigrant dishwasher / college dropout in a diner vs trillion-dollar monopoly making $X million per hour). Establish the mortality stake immediately (almost went bankrupt 3 times).
2. TACTILE HARDWARE METAPHORS: For every piece of deep tech (semiconductors, architecture, cooling, networking), construct a vivid everyday physical metaphor (professors vs kindergarteners, a single garden hose vs 10,000 sprinkler heads, a train track vs a highway).
3. THE UNREASONABLE BET: Identify the singular, irrational long-term bet the company made that Wall Street mocked for years before it created an unassailable moat.
4. BREATHLESS PACING: Keep sentences punchy and dynamic (average 8–14 words). Use rhythmic sentence fragments. Avoid dry chronological recaps; focus on the escalating technical showdown.
5. VISUAL PACING & CUES: Tag rapid cuts every 2.5–3.5s with [REMOTION: Kinetic Architecture/Chip Comparison], [CARICATURE: Gesture], and [DATA: Growth Counter].

INPUTS:
- Company & Founder: [e.g., TSMC / Morris Chang, ASML / Cymer, Arm]
- The Humble / Paradoxical Origin: [Specific location & starting status]
- The Core Deep-Tech Bottleneck: [The technical problem being solved]
- The Unreasonable Long-Term Bet: [The moat created over 10-20 years]
- Target Runtime: ~12-15 minutes (~1,800 - 2,200 words)
```

---

## **Archetype 3: The Forensic Geopolitical Chessboard**
### *(The Hidden System Hook & Sovereign Realism)*

* **Benchmark Video:** *If You Don't Understand the Petrodollar, You Don't Understand Geopolitics* — **Lock Stock Finance**
* **Video Reference:** `https://www.youtube.com/watch?v=1kFV1Td2BQs` | Runtime: 8m 00s (480s)
* **Best Suited For:** Sovereign finance, petrodollar mechanics, sanctions architecture, central bank reserve freezes, global maritime trade choke-points, foreign exchange dominance.

### 1. Voice & Rhetorical Anatomy
- **Locked Voice Persona Anchor (VoxCPM2):** `"Restrained geopolitical analyst, cold, authoritative, and measured."`
- **The Voice:** Serious, investigative geopolitical analyst. Speaks with the urgency of a declassified briefing. Deconstructs conspiratorial myths and replaces them with cold, mechanical sovereign incentives.
- **Pacing:** 140–150 WPM. Weighty, measured, dramatic downbeats. Emphasizes power, sovereignty, and realpolitik.
- **Sovereign Roleplay POV:** Puts the viewer in the shoes of a specific nation state (e.g., *"Imagine you're Japan...", "Imagine you're an oil exporter in the Persian Gulf..."*), demonstrating why countries have no choice but to participate in the global financial system.
- **Visual Sync Integration:** Highly integrated with 2D/3D Geographic Explainer Maps (`map-explainer` and `3d-flyover`), maritime trade flow lines, central bank balance sheets, and treaty documents.

### 2. Verbatim Transcript Reference Excerpts

> **The Systemic Truth Hook (0:00 – 0:25) — VERIFIED VERBATIM:**
> *"Did you know that there's a system running the world controlling everything from prices to energy to government policy? And no, it's not the banking system. It's not the stock market. It's the petrodollar. For over 50 years, it's been shaping our world."*
> **Register note:** the elimination ladder — name two things the viewer is already thinking, reject both, then name the real one. Three sentences to the reveal.

> **The Historical Turn (≈3:00) — VERIFIED VERBATIM:**
> *"But in 1973, the world experienced the OPEC oil crisis. This was when Arab oil producing countries stopped selling oil to countries supporting Israel in the Yom Kippur War, including the United States, in order to gain political leverage. This caused oil prices to quadruple, leading to massive shortages and severe inflation in Western economies."*
> **Register note:** cause → mechanism → consequence, one per sentence. No stacked subordinate clauses.

> **The Recycling Loop (≈5:10) — VERIFIED VERBATIM:**
> *"They don't just store piles of cash. They invest it. This is called petrodollar recycling... It becomes a loop. First, countries buy oil with dollars. Second, oil producers earn dollars. Third, oil producers invest those dollars back into US assets. And fourthly, the dollar stays strong."*
> **Register note:** a circular system is narrated as an explicit numbered loop the viewer can count on their fingers. This is the single most reusable structure in the archetype.

> **The Hedged Forecast (≈7:40) — VERIFIED VERBATIM:**
> *"It's a gradual shift, not a revolution."*
> **Register note:** the whole geopolitical forecast lands in seven words. Compare to an academic hedge ("the transition appears likely to proceed incrementally rather than abruptly") — same content, dead on delivery.

### 3. Dedicated Script Generator Prompt

```markdown
SYSTEM PROMPT: THE FORENSIC GEOPOLITICAL CHESSBOARD
You are the lead scriptwriter for FinanceCraft, writing an episode in the "Geopolitical Chessboard" style benchmarked against Lock Stock Finance ("If You Don't Understand the Petrodollar").

CORE RULES:
1. THE HIDDEN SYSTEM HOOK: Open by dismantling a vague conspiracy theory or general misconception, replacing it with a concrete institutional mechanism or historical treaty that quietly governs global commerce.
2. SOVEREIGN REALPOLITIK POV: Structure key arguments by forcing the audience to adopt the perspective of a resource-poor or resource-rich nation (e.g., "Imagine you are Germany in 2022...", "Imagine you are a Gulf petrostate with $500B in surplus...").
3. THE PERPETUAL CLOSED LOOP: Map out the circular financial architecture (Country A exports resource -> receives Currency X -> must reinvest in Country B's sovereign debt -> lowering borrowing costs for Country B).
4. RESTRAINED, AUTHORITATIVE TONE: Avoid hyperbole or partisan editorializing. Present sovereign behavior through cold, game-theoretic incentives and national security realism.
5. GEOGRAPHIC & MAP TAGGING: Tag every national transition with [MAP: Country Highlight & Trade Vector], [SHOWABLE: Official Treaty/Executive Order], and [REMOTION: Sovereign Balance Sheet Loop].

INPUTS:
- Core Geopolitical Lever: [e.g., SWIFT Sanctions, The Strait of Hormuz, Lithium Triad, Eurodollar System]
- The Foundational Treaty/Agreement: [Historical origin point and architects]
- The Two Opposing Sovereign Incentives: [Country A vs Country B]
- The Vulnerability / Breaking Point: [Current fragility in the system]
- Target Runtime: ~8-12 minutes (~1,200 - 1,800 words)
```

---

## **Archetype 4: The Inside-the-P&L Business Breakdown**
### *(The Concession Stand Reality & Unit Economics Audit)*

* **Benchmark Video:** *The Economics of Owning a Movie Theater Chain* — **Mr. Finance**
* **Video Reference:** `https://www.youtube.com/watch?v=-hBYfmfgBbg` | Runtime: 23m 06s (1386s)
* **Best Suited For:** Corporate autopsies, franchise breakdowns, declining retail models, hidden industry monopolies, unexpected profit centers (e.g., McDonald's real estate, airline credit card programs).

### 1. Voice & Rhetorical Anatomy
- **Locked Voice Persona Anchor (VoxCPM2):** `"Conversational business explainer, clear and engaging."`
- **The Voice:** The cynical, seasoned corporate insider. Dismantles the romantic daydream of entrepreneurship with brutal ledger mathematics.
- **Pacing:** 150–160 WPM. Methodical, conversational, and forensic. Walks line-by-line down an income statement.
- **The "Real Product" Revelation:** Shows that what the customer thinks they are buying is completely different from how the business actually survives (e.g., *a theater is a popcorn stand; an airline is a credit card loyalty program; an exercise bike is a recurring SaaS utility*).
- **Visual Sync Integration:** Highly dependent on Remotion financial waterfalls, gross margin comparison cards (`newsroom-chart-animations`), and real SEC Form 10-K expense breakouts.

### 2. Verbatim Transcript Reference Excerpts

> **The Naive Daydream Hook (0:00 – 0:30) — VERIFIED VERBATIM:**
> *"Okay, so you want to own a movie theater chain, buy the buildings, hang the marquee, sell tickets to whoever wants to watch the latest release. Sounds simple enough. Here's the problem. When a customer hands over $15 for a ticket on a Friday night, the theater does not really sell that person a movie. It sells that person a seat in a building, it has to heat, cool, staff..."*
> **Register note:** "Here's the problem." — three words, and the entire video's thesis pivots on it. This is the single highest-value transition phrase in the benchmark set.

> **The Inventory Reframe (≈7:40) — VERIFIED VERBATIM:**
> *"A grocery store controls its own shelves. A movie theater does not control its own product... The real inventory here is not popcorn or soda. It is screen time. A 12 screen multiplex running 14 hours a day has somewhere between 48 and 60 individual screening slots to fill every single day."*
> **Register note:** abstract concept ("inventory") is defined by contrast with a familiar business, then converted into a countable physical unit (screening slots per day). Never leave an accounting noun floating.

> **The Fixed-Cost Danger (≈15:00) — VERIFIED VERBATIM:**
> *"When attendance drops for an extended stretch, that same 20-year lease turns into a heavy, immovable weight. And in some of the most valuable urban locations, the land underneath a struggling cinema is actually worth more than the movie business operating on top of it."*
> **Register note:** the lease is given physical weight; the real-estate point is made spatially (underneath / on top of) rather than as a valuation argument.

> **The Structural Conclusion (≈22:30) — VERIFIED VERBATIM:**
> *"A movie theater chain survives not because people still need a theater to watch a movie. It survives because the best-run chains figured out how to monetize the seat, the popcorn, the subscription, the advertising, and the real estate underneath all of it — and turned going to the movies into something a phone at home still can't fully replace."*
> **Register note:** the close is a list of five concrete revenue objects, not a list of five abstractions.

### 3. Dedicated Script Generator Prompt

```markdown
SYSTEM PROMPT: THE INSIDE-THE-P&L BUSINESS BREAKDOWN
You are the lead scriptwriter for FinanceCraft, writing an episode in the "Inside-the-P&L" style benchmarked against Mr. Finance ("The Economics of Owning a Movie Theater Chain").

CORE RULES:
1. THE NAIVE DREAM HOOK: Open with the common, romantic fantasy of owning or entering this business ("So you want to start an airline / buy a gym / open a coffee shop..."). Shatter that illusion in sentence three by revealing the single hidden cost that destroys naive operators.
2. THE "REAL PRODUCT" PARADOX: Explicitly expose what the business is *actually* selling versus what the customer thinks they are buying (e.g., selling real estate vs burgers; selling credit card miles vs flights; selling soda syrup vs entertainment).
3. FORENSIC UNIT ECONOMICS BREAKDOWN: Walk through a single transaction in vivid dollar terms ($X gross sale -> $Y studio/distributor split -> $Z fixed overhead -> pennies or negative margin left over).
4. THE 80%+ MARGIN LIFELINE: Reveal the high-margin secondary engine that actually keeps the doors open (concessions, subscription add-ons, financing fees).
5. VISUAL & DATA SYNC: Tag cuts every 3.0–4.0s with [REMOTION: Waterfall P&L Breakdown], [SHOWABLE: 10-K Cost of Revenue Table], and [DATA: Margin Inversion Card].

INPUTS:
- Business / Industry: [e.g., Commercial Gyms, Airlines, Auto Dealerships, Fast Food Franchises]
- The Romantic Illusion: [What beginners think the business is]
- The Core Transaction & Studio/Supplier Split: [The primary revenue bleed]
- The Secret High-Margin Engine: [What actually generates free cash flow]
- Target Runtime: ~15-20 minutes (~2,200 - 3,000 words)
```

---

## **Archetype 5: The Hyper-Accelerated POV Thought Experiment**
### *(The Ticking Clock & Absurdist Macro Realism)*

* **Benchmark Video:** *POV: You Have $1 Trillion (But Only 7 Days To Spend It)* — **My Chaotic Stories**
* **Video Reference:** `https://www.youtube.com/watch?v=dwSfdH1K7Zk` | Runtime: 10m 37s (637s)
* **Best Suited For:** "The Hypothetical" sub-series, extreme wealth limits, market liquidity collapses, supply constraints, economic satire, hyper-inflation thought experiments.

### 1. Voice & Rhetorical Anatomy
- **Locked Voice Persona Anchor (VoxCPM2):** `"Sharp, fast-paced scenario guide, engaging, articulate, and vivid."`
- **The Voice:** Urgent, cinematic, second-person narrator ("You"). Thrusts the viewer into an impossible economic simulation with high stakes and strict constraints.
- **Pacing:** 160–170 WPM. Kinetic, escalating momentum. Organized around an aggressive countdown clock (Day 1, Day 3, Hour 100).
- **The Macro Shock Absorption Failure:** Starts with lavish consumer purchases that fail to make a dent, and escalates to systemic attempts to deploy capital (buying public markets, solving world problems) that run into hard physical and regulatory limits.
- **Visual Sync Integration:** Fast-paced HUD countdowns, bank account tickers (`newsroom-chart-animations`), global logistical maps, and satirical caricature moments.

### 2. Verbatim Transcript Reference Excerpts

> **The Ticking Clock Hook (0:00 – 0:25) — VERIFIED VERBATIM:**
> *"Monday morning, bank transfer confirmation. No sender, no explanation, just a number with 12 zeros in one sentence. Spend it all within 7 days or lose everything. You read it twice. You open the app. The number is real. $1 trillion sitting in an account registered to your name earning $136 million in interest for every day you don't move it. The rules: no donations, no gifts, no financial instruments."*
> **Register note:** THE CONTRACT IS FULLY STATED IN 8 SENTENCES — premise, deadline, penalty, working rules, and the adversary (compounding interest). No scene-setting, no "imagine if", no throat-clearing. 70 words to total clarity.

> **The Desensitization Beat — Day 1 (≈1:10) — VERIFIED VERBATIM:**
> *"You call the agents. Everyone answers on the first ring. That's the first thing you notice about having a trillion dollars. Not the number, the ring count. By noon you've signed on 80 properties across 12 countries. By the time you finish the last contract, you can't remember what the first three looked like. The desensitization takes about 6 hours."*
> **Register note:** the psychological point is made through ONE tiny concrete observation (the ring count), not through a paragraph about habituation or dopamine. This is the archetype's signature move.

> **The Category Sprint — Day 2 (≈2:00) — VERIFIED VERBATIM:**
> *"Luxury goods... The watches are in a vault. You haven't asked which vault... One car, $18 million, done in 11 minutes... You note that fact. You move on. 43 super yachts. Monaco, Miami, the Maldives... Combined crew requirement, roughly 4,000 people. You have become a maritime employer. That problem is for next week."*
> **Register note:** bare noun-phrase sentences as section headers ("Luxury goods." "Gold." "Art."). Real brand and place names throughout. Consequences are noted and deferred, never explained.

> **The Wall — Day 5 (≈5:40) — VERIFIED VERBATIM:**
> *"World hunger isn't a shortage of food. It was never a shortage of food. It's a shortage of functional roads, stable governments, and supply chains not being disrupted by conflict. None of that has a price tag. None of it closes in seven days. You didn't end hunger. You made grain more expensive for a week. The food is sitting in silos. The problem was never the food."*
> **Register note:** corrective restatement, then anaphora ("None of that / None of it"), then a four-word verdict. Ends on the same image it opened with. Zero technical vocabulary in the entire passage.

> **The Systemic Climax — Day 7 (≈8:30) — VERIFIED VERBATIM:**
> *"You are a weather event and they are closing the airports... Regulators on six continents are on the same call and the word they keep using is systemic, not illegal. Systemic."*
> **Register note:** one metaphor, then the key word isolated as a one-word sentence. This replaces an entire paragraph of regulatory explanation.

> **The Payoff (≈10:10) — VERIFIED VERBATIM:**
> *"You failed. Not because you ran out of ideas, but because the world ran out of things it could sell you fast enough... The richest people alive don't spend their money because the supply runs out long before the money does. And the money that can't be spent earns while you sleep. The earning is faster than the spending."*
> **Register note:** verdict first (two words), reasoning second. The final line is six words and contains the whole thesis.

### 3. Dedicated Script Generator Prompt

```markdown
SYSTEM PROMPT: THE HYPER-ACCELERATED POV THOUGHT EXPERIMENT
You are the lead scriptwriter for FinanceCraft, writing an episode in the "POV Thought Experiment" style benchmarked against My Chaotic Stories ("POV: You Have $1 Trillion").

CORE RULES:
1. SECOND-PERSON IMMERSION ("YOU"): Address the viewer directly as the protagonist of the simulation from the opening second ("You wake up...", "You check your phone...").
2. THE STRICT CONSTRAINT & COUNTDOWN: Establish an impossible financial premise governed by strict rules and a ticking clock (e.g., spend $X billion in 7 days, or survive 30 days while your currency depreciates 50% daily).
3. ESCALATING LOGISTICAL STAGES:
   - Stage 1 (Personal Extravagance): Attempting to buy luxury assets, instantly hitting the mathematical ceiling of consumer goods.
   - Stage 2 (Asset/Market Distortion): Attempting to buy companies or public stock, triggering price slippage, market halts, and regulatory panic.
   - Stage 3 (Physical/Sovereign Wall): Discovering that money cannot bypass physical infrastructure bottlenecks (ports, roads, raw materials) or national defense vetoes.
4. RAPID-FIRE PACING (MEASURED, NOT VIBES): Median sentence length must be 7-9 words. At least 38% of sentences must be 6 words or shorter. No more than 2% may exceed 25 words. Second-person density must exceed 45 hits per 1,000 words. Bare noun-phrase sentences ("Gold." "Art." "Private jets.") are encouraged as category markers. Tag cuts every 2.5-3.5s with [REMOTION: Live Balance Countdown], [MAP: Global Shipping Bottleneck], and [DATA: Market Slippage Card].
4b. THE STAKES CONTRACT: State the premise, the clock, the penalty, the working rules, and the adversary within the first 80 words. No scene-setting before the contract. The benchmark does this in 70 words.
4c. LEDGER BEATS: Close every time block with the same repeated ledger shape — time elapsed, amount spent, amount remaining, what the adversary did while you acted. Identical format each time.
4d. THE TINY OBSERVATION RULE: Make psychological points through one small concrete detail, never through explanation. "Everyone answers on the first ring... Not the number, the ring count." — not a paragraph about habituation. If you catch yourself explaining a mental state, delete it and find the object instead.
4e. JARGON CEILING: 5 terms per 1,000 words maximum against the CP-0 Jargon List. This archetype fails here more than any other because macro topics invite macro vocabulary. Resist it — the benchmark video covers sovereign debt, market microstructure and circuit breakers using almost none of it.
4f. SCOPE ESCALATION. Each act must operate on a larger system than the last. The benchmark runs properties → jets → farmland → world hunger → a sovereign state → the entire equity market → regulators on six continents. Severity rising within one fixed scale is not escalation: once the viewer knows the outcome, a story that stays the same size has nothing left to reveal. State the scope ladder in the Concept Brief before drafting, one line per act.
5. THE SYSTEMIC REVELATION: Conclude with a profound macroeconomic truth about the physical limits of capital vs resources.

INPUTS:
- The Scenario Premise: [e.g., $1 Trillion in 7 Days, Owning 100% of the World's Copper, Buying an Entire Country's Debt]
- The Rules & Constraints: [No gifts, must acquire physical assets, strict deadline]
- The 3 Escalation Failures: [Consumer saturation -> Market slippage -> Physical/Sovereign block]
- Target Runtime: ~10-14 minutes (~1,600 - 2,200 words)
```

---

## **Archetype 6: The Dual-Character Comparative Simulation**
### *(The Controlled Audit & 30-Year Ledger / Ryan vs Steve)*

* **Benchmark Video:** *Renting Vs Buying a Home - The Real Math* — **Logical Money**
* **Video Reference:** `https://www.youtube.com/watch?v=nkT_K8l1rEw` | Runtime: 17m 39s (1059s)
* **Best Suited For:** Personal finance debates, renting vs buying, active trading vs passive index investing, leasing vs purchasing a car, real net worth simulations over decades.

### 1. Voice & Rhetorical Anatomy
- **Locked Voice Persona Anchor (VoxCPM2):** `"Relatable financial breakdown guide, clear, objective, and conversational."`
- **The Voice:** The calm, rigorous financial auditor. Neutral, anti-dogmatic, and completely indifferent to societal cliches. Let's the spreadsheet deliver the verdict.
- **Pacing:** 145–155 WPM. Clear, step-by-step comparative pacing. Gives equal, fair weight to both sides before revealing long-term compounding effects.
- **The Two-Protagonist Simulation:** Creates two identical characters (same age, same income, same savings, same geography) who make opposite financial decisions, tracking their net worth year by year.
- **Visual Sync Integration:** Side-by-side split screens, dual-column ledgers, compound interest comparison graphs (`newsroom-chart-animations`), and amortization waterfall tables.

### 2. Verbatim Transcript Reference Excerpts

> **The Controlled Variable Hook (0:00 – 0:30) — VERIFIED VERBATIM:**
> *"Meet Ryan and Steve. They are both 32. They live in the same city. They both earn $80,000 a year. And after years of responsible financial decisions, canceled subscriptions, and convincing themselves that supermarket brand cereal tastes exactly like the expensive stuff, they've both managed to save $80,000. Financially, they are identical. Personality-wise, not even close."*
> **Register note:** four clipped declarative sentences establish the controlled experiment, then ONE long sentence carrying the joke, then a two-beat contrast. The humour ("supermarket brand cereal") is what makes the setup survive being a spreadsheet.

> **The Ledger Beat — Year 3 (≈4:00) — VERIFIED VERBATIM:**
> *"After 3 years of mortgage payments, Ryan's mortgage balance has fallen from $280,000 to about $270,835. He has paid down just over $9,000 of principal... That leaves Ryan with approximately $112,000 to $123,000 in home equity. That is real wealth. Meanwhile, Steve has paid $72,000 in rent over those 3 [years]."*
> **Register note:** every checkpoint restates BOTH characters' position. "That is real wealth." — a four-word adjudication that stops the numbers from becoming noise.

> **The Illiquidity Joke (≈12:00) — VERIFIED VERBATIM:**
> *"But their wealth looks very different. Steve's is much easier to access. Ryan cannot sell 8% of the kitchen, at least not without creating some serious questions from future buyers."*
> **Register note:** liquidity — the driest concept in the video — is taught entirely through one absurd physical image. No definition is ever given.

> **The Finish Line (≈12:40) — VERIFIED VERBATIM:**
> *"Ryan has only 10 years left on his mortgage. Steve's rent has no finish line."*
> **Register note:** the entire long-run verdict in two sentences, seventeen words, built on one image.

### 3. Dedicated Script Generator Prompt

```markdown
SYSTEM PROMPT: THE DUAL-CHARACTER COMPARATIVE SIMULATION
You are the lead scriptwriter for FinanceCraft, writing an episode in the "Dual-Character Simulation" style benchmarked against Logical Money ("Renting Vs Buying a Home - The Real Math").

CORE RULES:
1. THE CONTROLLED PROTAGONIST HOOK: Introduce two characters (Person A and Person B) with identical starting conditions: same age, same city, same salary, same initial savings pool ($X). State their diverging choices in the opening 40 seconds.
2. UNRECOVERABLE COSTS VS COMPOUNDING: Dissect the invisible frictions of the traditional choice (interest amortization, taxes, insurance, depreciation, maintenance) versus the alternative opportunity cost.
3. CHRONOLOGICAL MILESTONES: Structure the comparison across three strict time horizons:
   - Milestone 1: Year 1 to 5 (The early friction & amortization reality)
   - Milestone 2: Year 15 (The mid-point inflection & compounding crossover)
   - Milestone 3: Year 30 (The final net worth ledger verdict)
4. RIGOROUS SPREADSHEET NEUTRALITY: Do not caricature either protagonist. Give each path its best possible empirical defense, letting the terminal math make the argument.
5. SPLIT-SCREEN VISUAL SYNC: Tag visual beats every 3.0–3.8s with [REMOTION: Split-Screen Dual Ledger], [REMOTION: 30-Year Compounding Curves], and [DATA: Amortization Breakdown].

INPUTS:
- The Core Financial Dilemma: [e.g., Rent vs Buy, 401k vs Real Estate, Leasing vs Buying, Degree vs Trade]
- Protagonist Names & Starting Baseline: [e.g., Ryan vs Steve, $80k income, $50k cash]
- Key Assumptions: [Appreciation rate, market return rate, tax rate, inflation]
- Target Runtime: ~14-18 minutes (~2,100 - 2,700 words)
```

---

## **Archetype 7: The Compounded Efficiency Playbook**
### *(The Single-Number Hook & Mathematical Freedom Roadmap)*

* **Benchmark Video:** *How To Hit Financial Freedom SO Fast It's Almost Unfair* — **LITTLE BIT BETTER**
* **Video Reference:** `https://www.youtube.com/watch?v=Pd3HYjpmks4` | Runtime: 12m 36s (756s)
* **Best Suited For:** Financial independence, early retirement (FIRE), savings rate mechanics, high-conviction wealth accumulation rules, escaping the wage treadmill.

### 1. Voice & Rhetorical Anatomy
- **Locked Voice Persona Anchor (VoxCPM2):** `"Clear, empowering finance mentor, calm, confident, and direct."`
- **The Voice:** High-conviction, urgent, empowering coach. Strips away consumer vanity and replaces it with mathematical clarity.
- **Pacing:** 150–160 WPM. Crisp declarative sentences. Uses micro-pauses after bold quantitative truths.
- **The Asymmetric Lever:** Shows that the single biggest variable in wealth creation is not income, market timing, or stock picking—it is the percentage of cash flow diverted into productive assets before lifestyle creep occurs.
- **Visual Sync Integration:** Minimalist typographic cards, savings rate vs working years curves (`newsroom-chart-animations`), milestone countdown cards, and stark contrast diagrams.

### 2. Verbatim Transcript Reference Excerpts

> **The Minimalist Punch Hook (0:00 – 0:20) — VERIFIED VERBATIM:**
> *"Nine years. That's how long it took me to go from nothing to financial freedom. But, if I knew these nine rules from the start, I could have done it in four years. Rule one, find your financial freedom number."*
> **Register note:** two-word sentence, then the credential, then the regret, then straight into Rule One. The video is teaching by 0:18 — no channel intro, no roadmap, no "in this video we'll cover".

> **The Direct Command Stack (≈5:00) — VERIFIED VERBATIM:**
> *"Okay, you know your number. You're cutting expenses. You're protecting the gap. Now you're excited. You want to start investing. You want to see that number grow. Hold on. Slow down. If you skip this step, you're going to start and then stop. Life is going to punch you in the face and you'll be right back where you started."*
> **Register note:** second-person density is the highest in the benchmark set (≈76 per 1,000 words). Recap in three beats, two two-word interrupts, then the consequence as physical violence.

> **The Concrete Threshold (≈5:40) — VERIFIED VERBATIM:**
> *"Step one, save $1,000 fast. This is your oh[-crap] money. Bone cracks, car breaks, bill [hits]."*
> **Register note:** the emergency fund is never called an emergency fund. Three two-word disasters, all physical.

> **The Freedom Definition Climax (≈12:10) — VERIFIED VERBATIM:**
> *"Balance is a lie sold to people who want to stay comfortable. Work-life balance is for later. Right now, it's work-work balance. You can have a hard four years now or a hard 40 years later."*
> **Register note:** the closing argument is a single sharp binary. No summary of the nine rules, no recap.

### 3. Dedicated Script Generator Prompt

```markdown
SYSTEM PROMPT: THE COMPOUNDED EFFICIENCY PLAYBOOK
You are the lead scriptwriter for FinanceCraft, writing an episode in the "Compounded Efficiency Playbook" style benchmarked against LITTLE BIT BETTER ("How To Hit Financial Freedom").

CORE RULES:
1. THE MINIMALIST DECLARATIVE HOOK: Open with a single number, time duration, or bold metric in sentence one ("Nine years.", "$100,000.", "42 percent."). Contrast that number with the conventional 40-year narrative.
2. THE ASYMMETRIC MATHEMATICAL LEVER: Center the script around a single counter-intuitive mathematical relationship (e.g., the savings rate curve where time to freedom collapses non-linearly).
3. ACTIONABLE NUMBERED RULES: Structure the body into 5 to 9 distinct, sequential rules or wealth gates.
4. RUTHLESS REJECTION OF CONSUMER COMFORT: Challenge lifestyle inflation, debt-fueled status games, and passive consumer traps with direct, empowering prose.
5. CLEAN TYPOGRAPHIC VISUALS: Tag cuts every 3.0–4.0s with [REMOTION: Savings Rate vs Working Years Curve], [REMOTION: Flywheel Inversion Counter], and [DATA: Milestone Badge Card].

INPUTS:
- The Core Playbook Goal: [e.g., Reaching First $100k in 3 Years, The 50% Savings Rate Engine, Asymmetric Cash Flow]
- The Single-Number Hook: [The opening number / duration]
- Key Sequential Rules: [List 5-7 core principles]
- Target Runtime: ~10-14 minutes (~1,600 - 2,200 words)
```

---

# **FinanceCraft — Audio Architecture & Sound Design Engine (Empirical BGM, Voice Dynamics & Adaptive Audio Direction)**

> **Architectural Purpose & Core Protocol**  
> Audio is 50% of the retention equation in documentary filmmaking. In amateur faceless videos, background music is treated as an afterthought—a single looping MP3 dropped onto Track 2 at a flat -20 dB. In top-tier channels (*Crayon Capital, Martik Finance, Mr. Finance, Lock Stock Finance, Logical Money*), **audio is dynamic, act-based, frequency-carved, and emotionally adaptive**. The soundscape changes continuously in sync with the script’s psychological beats, cognitive load, and narrative stakes.  
>  
> This master section codifies the empirical audio physics, music selection engine, voiceover processing chain, and automated mixing rules derived from direct signal analysis of industry-leading YouTube references.

---

## **1. Empirical Signal Analysis: The Real Data Behind Top Channels**

Direct signal processing and spectral measurement (`ffmpeg astats`, `ebur128`, and RMS envelope detection) of real audio tracks from benchmark finance channels revealed four decisive truths:

| Benchmark Channel & Video | Video Format / Focus | Voice Peak RMS | BGM Bed RMS | Dynamic Delta (Ducking) | Pauses Count (in 45s) | Avg Pause Duration | Measured Low-End Energy (<120Hz) | Core Sonic Signature |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Crayon Capital** (*Nvidia Like You're 5*) | Playful Tech / Hardware Explainer | **-16.2 dB** | **-34.0 dB** | **17.8 dB** | **1 pause** | **0.41s** | 9.4% (Snappy punch) | Relentless, upbeat momentum; high music audibility; almost zero dead air; bouncy staccato plucks. |
| **Logical Money** (*Rent vs Buy - Real Math*) | Pedagogical Math / Balance Sheets | **-14.6 dB** | **-69.8 dB** | **55.2 dB** | **13 pauses** | **0.67s** | 5.2% (Warm floor) | **Near-zero music**. Background is pure whisper-quiet room tone (-70 dB) to eliminate cognitive friction during math. |
| **Martik Finance** (*How Currencies Work*) | Investigative Macro Economics | **-9.8 dB** | **-44.9 dB** | **35.2 dB** | **10 pauses** | **0.60s** | 1.0% (Clean sub) | Ultra-compressed broadcast voice right against the ear; wide dramatic pauses; modular synth suspense bed. |
| **Mr. Finance** (*Movie Theater Economics*) | Corporate Autopsy / Downfall | **-18.1 dB** | **-49.5 dB** | **31.3 dB** | **8 pauses** | **0.50s** | 2.0% (Mids-heavy: 50%) | Smoky corporate noir; warm tape-saturated Fender Rhodes; melancholic lo-fi; cynical, contemplative mood. |
| **Lock Stock** (*The Petrodollar*) | Geopolitical Thriller / Crisis | **-20.1 dB** | **-46.6 dB** | **26.6 dB** | **15 pauses** | **0.74s** | **11.6%** (Massive sub-bass) | Longest pauses; ominous 40Hz sub-rumble; ticking clock pulse; sovereign debt crisis weight. |
| **LITTLE BIT BETTER** (*Financial Freedom Fast*) | Self-Mastery / Mindset Playbook | **-14.6 dB** | **-52.5 dB** | **37.8 dB** | **18 pauses** | **0.67s** | 0.8% (Airy mids: 45%) | Clean inspirational acoustic bed building to euphoric crescendo; high pause count emphasizing key rules. |
| **My Chaotic Stories** (*$1 Trillion in 7 Days*) | Absurdist Satire / Viral Thought Exp. | **-23.8 dB** | **-48.7 dB** | **24.9 dB** | **11 pauses** | **0.45s** | 5.4% (Trap punch) | Fast comedic beat drops; cartoonish orchestral stabs; dynamic punchy pace matching gaming energy. |

### **The Golden Rules of Documentary Audio Mixing:**
1. **The Math-to-Music Inversion Rule (Cognitive Bandwidth):** As on-screen informational and mathematical density increases (formulas, financial statements, multi-line Remotion charts), **background music volume must decrease toward silence (-50 dB to -70 dB)**. Music competing with multi-variable math causes cognitive fatigue and viewer drop-off.
2. **The Unified Dynamic Score Rule (No Overcomplication):** Use a **single cohesive background music score** per episode, tailored to the video's primary archetype (or at most two if a distinct narrative pivot occurs). **Do NOT overcomplicate by forcing 3 to 5 different tracks.** Documentary retention and variety come not from juggling multiple songs, but from **dynamic volume modulation on that single score**:
   - Ducked under speech: **-32 dB to -35 dB**
   - Swelling into dramatic pauses ($>1.2\text{s}$): **+6 dB to +8 dB**
   - Dropping during complex math / balance sheets: **-50 dB to -60 dB** (Math Mode)
   - Cutting completely: **$-\infty\text{ dB}$** on shock reveals (Dead Silence Drop)
3. **The Voice Integrity Mandate:** Narration VO is always the acoustic sovereign. Peak voice level must sit between **-14 and -16 LUFS** (True Peak at -1.0 dBFS), with background music sitting between **18 dB and 35 dB below the voice**.
4. **The VO Volume Stability vs. Dynamic Pacing Mandate (Empirical Rule):**
   - **VO Volume must NEVER fluctuate widely:** Measured data from all reference videos proves that elite documentary voiceovers are brickwall-compressed into a tight **~6 dB dynamic corridor** (standard deviation $\le 2.5\text{ dB}$). The narrator must never drop into an inaudible whisper or jump to an abrasive shout. Every syllable must sit effortlessly in the listener's ear without manual volume adjustments.
   - **What DOES vary in the voice is PACING and PITCH CADENCE, NOT volume:**
     - *Hooks (First 60s):* Spoken **10 to 20 WPM faster** (165–180 WPM) with an urgent, forward-leaning pitch to seize attention.
     - *Core Explanations (60s–180s+):* Settles down into a calm, pedagogical **140–155 WPM** (-10 to -20 WPM shift).
     - *Catastrophic Stats & Dramatic Pauses:* Pacing deliberately stretches out (130–140 WPM) with pregnant pauses ($\ge 1.5\text{s}$) after key punchlines.
   - **The Contrast Axiom:** *VO volume stays locked and flat; VO pacing and pitch vary across narrative acts. Background music volume varies dynamically and aggressively (15 dB to 30 dB swings) via ducking, pause swells, and dead silence drops.*

---

## **2. The 5 Core Music Archetypes (Selection & Usage Engine)**

Every FinanceCraft episode must map its narrative acts to one or more of the following 5 core music archetypes:

### **Archetype 1: Inquisitive Neo-Classical & Playful Tech (Crayon Capital Style)**
* **Sonic Profile:** Snappy, bright, intellectual, and curious. Plucked staccato violins, marimbas, woodblocks, light glockenspiel accents, and dry acoustic percussion. Zero heavy sub-bass drone.
* **When to Use:** Explaining technical architectures (semiconductors, supply chains, algorithms), flywheel mechanics, or foundational corporate origins.
* **BPM Range:** 110 – 125 BPM (Propulsive, upbeat).
* **Target Mix Level:** **-32 dB to -34 dB** under speech (18 dB duck delta).
* **AI Music Prompt (Suno v3.5 / Udio / ElevenLabs Music):**
  ```text
  [Instrumental] Inquisitive minimalist neo-classical corporate explainer, 118 BPM, C Major, staccato pizzicato violins, wooden marimba melodic plucks, light glockenspiel accents, clean warm Rhodes piano chords, subtle muted electronic percussion, playful, intellectual, curious, modern tech documentary background, transparent mix, no vocals
  ```
  *(Negative Prompt: vocals, singing, speech, choir, heavy distortion, harsh drums, electric guitar)*
* **Stock Library Search Tags (Epidemic Sound / Artlist / Musicbed):**
  * `Genres:` Classical $\rightarrow$ Minimalist / Acoustic $\rightarrow$ Quirky  
  * `Moods:` Curious, Playful, Clever, Inquisitive, Technology  
  * `Instruments:` Pizzicato Strings, Marimba, Glockenspiel, Muted Electric Piano  

---

### **Archetype 2: Geopolitical Dark Thriller & Ticking Clock (Lock Stock Style)**
* **Sonic Profile:** Ominous, heavy, and impending. Dominated by deep 40Hz sub-bass drones (11.6% low-end energy), analog ticking clock pulses, low cello stabs, and filtered rising synthesizer arpeggios.
* **When to Use:** Geopolitical conflicts, currency warfare, sanctions, sovereign debt defaults, oil embargoes, or catastrophic organizational turning points.
* **BPM Range:** 90 – 105 BPM (Methodical, relentless).
* **Target Mix Level:** **-42 dB to -46 dB** under speech; sub-bass drop swells to **-20 dB** on impact beats.
* **AI Music Prompt (Suno v3.5 / Udio / ElevenLabs Music):**
  ```text
  [Instrumental] Dark cinematic geopolitical thriller underscore, 96 BPM, D Minor, relentless analog ticking clock pulse, deep 40Hz sub-bass drone, menacing low cello stabs, filtered modular synth arpeggios rising in tension, industrial ambience, Hans Zimmer style documentary tension, ominous, high-stakes, suspenseful, no vocals
  ```
  *(Negative Prompt: vocals, singing, uplifting, acoustic guitar, bright piano, funky, dance)*
* **Stock Library Search Tags (Epidemic Sound / Artlist / Musicbed):**
  * `Genres:` Cinematic $\rightarrow$ Dark / Electronic $\rightarrow$ Industrial Underscore  
  * `Moods:` Ominous, Suspenseful, Dark, Restless, Threatening  
  * `Instruments:` Ticking Clock, Sub-Bass Drone, Cello, Analog Arpeggiator  

---

### **Archetype 3: Smoky Corporate Noir & Downtempo Lo-Fi (Mr. Finance Style)**
* **Sonic Profile:** Warm, textured, and cynical. Dominated by mid-frequency energy (350Hz–2000Hz). Tape-saturated vintage Fender Rhodes chords, muted upright acoustic bass, subtle vinyl crackle, and unhurried boom-bap drum brushes.
* **When to Use:** Corporate autopsies, executive greed, accounting illusions, failed IPOs, bankruptcies, or uncovering executive excess.
* **BPM Range:** 75 – 88 BPM (Contemplative, cynical).
* **Target Mix Level:** **-45 dB to -49 dB** under speech (31 dB duck delta).
* **AI Music Prompt (Suno v3.5 / Udio / ElevenLabs Music):**
  ```text
  [Instrumental] Downtempo corporate noir jazz lo-fi beat, 82 BPM, F Minor, vintage warm Fender Rhodes chords, subtle vinyl crackle and tape saturation, muffled upright acoustic bassline, lazy dry boom-bap drum groove, melancholic muted trumpet in background, investigative journalism documentary vibe, contemplative, cynical, no vocals
  ```
  *(Negative Prompt: vocals, upbeat, dance, EDM, pop, bright acoustic, stadium rock)*
* **Stock Library Search Tags (Epidemic Sound / Artlist / Musicbed):**
  * `Genres:` Lo-Fi Hip Hop $\rightarrow$ Jazz-Infused / Beats $\rightarrow$ Chill / Downtempo  
  * `Moods:` Melancholic, Thoughtful, Laid Back, Mysterious, Cynical  
  * `Instruments:` Fender Rhodes, Upright Bass, Vinyl Crackle, Muted Brushed Drums  

---

### **Archetype 4: Minimalist Pedagogical Bed / Math Mode (Logical Money Style)**
* **Sonic Profile:** Transparent, acoustic, and non-intrusive. Gentle felt piano chords with long natural reverb tails, delicate fingerpicked acoustic guitar harmonics, and subtle warm tape room tone. **Zero drums, zero percussion, zero fast melodies.**
* **When to Use:** Complex math breakdowns, multi-variable formulas, unit economics balance sheets, tax schedules, or animated Remotion financial ledgers.
* **BPM Range:** 60 – 75 BPM (Calm, non-distracting).
* **Target Mix Level:** **-55 dB to -70 dB** (Whisper-quiet floor; effectively transparent).
* **AI Music Prompt (Suno v3.5 / Udio / ElevenLabs Music):**
  ```text
  [Instrumental] Ultra-minimal ambient study bed, 70 BPM, C Major, soft felt piano chords played very slowly with long natural decay, distant acoustic guitar harmonics, warm tape hiss, zero drums, zero percussion, non-melodic, transparent harmonic room tone, educational, calm, focused, serene, no vocals
  ```
  *(Negative Prompt: drums, beat, percussion, brass, fast melody, vocals, bass drop, electronic)*
* **Stock Library Search Tags (Epidemic Sound / Artlist / Musicbed):**
  * `Genres:` Ambient $\rightarrow$ Drone / Neo-Classical $\rightarrow$ Solo Felt Piano  
  * `Moods:` Peaceful, Focused, Calm, Serene, Educational  
  * `Instruments:` Felt Piano, Ambient Pad, Reverb Drone (Filter: "No Drums / No Percussion")  

---

### **Archetype 5: Investigative Macro-Suspense & Modular Pulse (Martik Finance Style)**
* **Sonic Profile:** Sterile, institutional, and tension-building. Rhythmic analog synth pulses (Roland Juno / Moog), sweeping low-pass filters, subtle stereo clicks, and sparkling high-frequency shimmer (>8 kHz).
* **When to Use:** Central bank monetary mechanisms, currency debasement, banking panics, inflation spirals, and macro-economic paradoxes.
* **BPM Range:** 98 – 115 BPM (Driving, methodical).
* **Target Mix Level:** **-40 dB to -45 dB** under speech (35 dB duck delta).
* **AI Music Prompt (Suno v3.5 / Udio / ElevenLabs Music):**
  ```text
  [Instrumental] Modern investigative economic documentary pulse, 108 BPM, A Minor, pulsing Roland Juno analog bass synth, rhythmic stereo clicks and high-tech sequence, ethereal synth pads, sweeping low-pass filter, sterile corporate mystery, clean sterile production, investigative, cerebral, tense, no vocals
  ```
  *(Negative Prompt: vocals, guitars, country, acoustic, heavy metal, choir, party)*
* **Stock Library Search Tags (Epidemic Sound / Artlist / Musicbed):**
  * `Genres:` Electronic $\rightarrow$ Ambient Synth / Documentary Underscore  
  * `Moods:` Suspenseful, Serious, Analytical, Neutral, High-Tech  
  * `Instruments:` Analog Synth Pulse, Sequencer, Synth Plucks, Electronic Clicks  

---

## **3. The 4 Subtle Micro-Audio Mechanics (The Production Differentiators)**

The difference between professional documentary soundscapes and amateur editing lies in these four micro-modulations:

```
VOICE SPEECH:   "Nine years. That's how long..."          "...it took to hit freedom."
                [─────────── VO TALKING ───────────]  [PAUSE]  [─────── VO TALKING ───────]
BGM LEVEL:      -34 dB (Ducked in notch)           ──► -26 dB  ──► -34 dB (Re-ducked)
                                                       (SWELL)
EQ PROFILE:     Notch cut (-4dB at 2kHz)           ──► Wide Flat ──► Notch cut (-4dB at 2kHz)
```

### **1. The "Breathe & Swell" Ducking Curve (Pause Compensation)**
* **The Rule:** In flat mixing, music volume stays identical whether the voice is speaking or not. In elite mixing, the background music **breathes** into script pauses.
* **Implementation:**
  * When narration VO is speaking: BGM sits at its base ducked level (**-32 dB to -45 dB** depending on archetype).
  * On dramatic script pauses ($\ge 1.2\text{s}$): BGM **swells upward by $+6\text{ dB}$ to $+8\text{ dB}$** (reaching -24 dB to -26 dB) over a 300ms curve, holding for the duration of the silence to flood the vacuum with emotional weight, then cleanly ducks back down on the exact frame the next spoken syllable begins.

### **2. Frequency Carving / The Speech EQ Pocket**
* **The Problem:** Raising music volume often clashes with human voice frequencies, making words hard to understand.
* **The Solution:** Apply a surgical parametric EQ notch to the BGM master track:
  * **Frequency:** Notch centered between **1,500 Hz and 3,200 Hz** (the human vocal intelligibility core).
  * **Gain:** Cut by **$-3\text{ dB}$ to $-5\text{ dB}$** with a medium Q-curve ($Q = 1.2$).
  * **Result:** The voiceover cuts through like glass without needing to lower the music to inaudibility.

### **3. The "Dead Silence Drop" (The Impact Vacuum)**
* **The Rule:** Absolute silence is louder than an explosion when used strategically.
* **Implementation:** Right before a catastrophic financial stat or revelation (e.g. *"And by Q4... they were $5 billion in debt"*):
  * Cut the background music **completely dead ($- \infty\text{ dB}$)** exactly **$0.6\text{s}$ before the load-bearing sentence**.
  * Deliver the devastating phrase in stark, naked vocal isolation.
  * Trigger a **sub-bass 40Hz thud / low cinematic boom ($-20\text{ dB}$)** on the downbeat of the key metric (*"$5 billion"*), followed by fading in a new, darker music archetype.

### **4. The "Low-Pass Focus Zoom" (Document Inspection Filter)**
* **The Rule:** When the visual punches into a primary forensic document, 10-K balance sheet, or complex spreadsheet:
  * Sweep a **Low-Pass Filter down to 700 Hz – 900 Hz** on the background music for the 3–5 seconds the viewer is meant to read the numbers.
  * The music sounds slightly muffled / underwater, subconsciously signaling to the viewer's brain to redirect 100% of cognitive focus to on-screen comprehension. Sweep the filter cleanly back open to 20 kHz with a soft whoosh when transitioning back to wide cinematic view.

---

## **5. Master Voiceover (VO) & Micro-Foley Standards**

### **Voiceover Processing Chain (VoxCPM2 / Master VO):**
1. **High-Pass Filter (Low Cut):** Steep 24dB/oct cut below **$80\text{ Hz}$** (strips air conditioning hum, mic thumps, and mud).
2. **Dynamic Compression:** Ratio **$4:1$**, Attack **$5\text{ms}$**, Release **$50\text{ms}$**, Soft Knee. Smooths conversational delivery into an authoritatively consistent dynamic range.
3. **Presence & Air EQ:** Gentle $+1.5\text{ dB}$ boost at **$3.5\text{ kHz}$** for consonant crispness; $+2.0\text{ dB}$ high-shelf boost at **$11\text{ kHz}$** for modern documentary proximity.
4. **Master Loudness Target:** **$-14.0\text{ to } -16.0\text{ LUFS}$** (Integrated); True Peak clamped strictly at **$-1.0\text{ dBFS}$**.

### **Micro-Foley Library & Mixing Matrix (Track 2):**
Never use loud arcade sound effects. Foley must be tactile, organic, and sit quietly in the mix:

| Foley Asset Type | Typical Sound Cues | Trigger Moment | Target Mix Level |
| :--- | :--- | :--- | :--- |
| **Forensic Document Handling** | Crisp bond paper slide, archival file folder opening, staple click, ink stamp thud | Insetting an SEC filing, court indictment, or balance sheet | **$-24\text{ dB to } -26\text{ dB}$** |
| **Data & Financial Counters** | Soft vintage mechanical keyboard click, muted digital ticker notch, subtle register tick | Remotion counting numbers, debt tickers, percentage dials | **$-28\text{ dB to } -30\text{ dB}$** |
| **Catastrophe / Climax Drops** | 40Hz sub-bass boom, dark cinema low-end rumble | Chapter title cards, bankruptcy reveals, crash moments | **$-18\text{ dB to } -22\text{ dB}$** |
| **Visual Insets & Transitions** | Soft organic whoosh with high-frequencies rolled off, camera shutter click | Fast punch-in cuts, split-screen reveals | **$-26\text{ dB to } -28\text{ dB}$** |
| **Ambient Room Beds** | 35mm film projector whirr, tape hiss, faint empty boardroom echo | Historical retrospectives, silent visual pauses | **$-32\text{ dB to } -36\text{ dB}$** |

---

## **6. Autonomous Engine Instructions: Dynamic Scoring & CapCut Timeline Assembly**

Whenever the AI generation engine is creating a Production Document or autonomously assembling a project via CapCut MCP, it must follow these deterministic rules:

### **Rule 1: Episode Score Selection (Single Cohesive Bed)**
Before generating Part B or assembling audio, select **one primary cohesive BGM archetype** that embodies the episode's overall editorial identity:
- *Corporate Fraud / Bankruptcy / Executive Greed:* Archetype 3 (Smoky Corporate Noir & Downtempo Lo-Fi)
- *Tech Explainer / Hardware / Growth Flywheel:* Archetype 1 (Inquisitive Neo-Classical & Playful Tech)
- *Macro-Economics / Currency Debasement / Banking:* Archetype 5 (Investigative Macro-Suspense)
- *Geopolitical Conflict / Sovereign Debt / Sanctions:* Archetype 2 (Geopolitical Dark Thriller)
- *Personal Finance / Savings / Tax / Mathematical Proofs:* Archetype 4 (Minimalist Pedagogical Bed)

*Note:* Do NOT overcomplicate by forcing 3 to 5 separate music tracks. A single cohesive, loopable score bed maintains consistent documentary tone. All variety comes from dynamic volume shaping on that track.

### **Rule 2: Automated Beat-Level Scoring in Part B**
In Part B of the Production Document, every single beat's `Audio Mix & Foley` specification declares volume modulation on the score track:
1. `Base Music Level` (e.g. `-34 dB` during speech, or `-55 dB` during Math Mode on balance sheets)
2. `Dynamic Modulation` (e.g. `Swell +8dB to -26dB during pause [02:14.2 - 02:16.0]`, or `Cut to -inf dB for dead silence at 02:15.5`)
3. `Foley Trigger & Volume` (e.g. `Paper slide on document entrance at +0.4s, gain -26dB`, `40Hz sub-bass drop at +0.2s, gain -20dB`)

### **Rule 3: Autonomous CapCut Timeline Construction (via CapCut MCP)**
When the engine builds the timeline in CapCut Desktop:
1. **Track Structure:**
   * **Track 0 (Video):** Visual beats (AI stills, video clips, Remotion comps).
   * **Track 1 (Voiceover):** Master narration audio (`master_narration.wav`), strictly at **$0.0\text{ dB}$** (pre-normalized to -15 LUFS).
   * **Track 2 (Foley & SFX):** Paper slides, sub-bass drops, clicks, aligned to visual keyframes, set to **$-24\text{ dB to } -28\text{ dB}$**.
   * **Track 3 (Background Score):** The unified background music track running continuously under the narration, seamlessly looped to full timeline duration.
2. **Automated Volume Keyframing:**
   * Parse the voiceover silence intervals from the TTS word-alignment JSON.
   * Wherever silence duration exceeds **$1.2\text{ seconds}$**, place four volume keyframes on the BGM track:
     - $K_1$ (Speech end): Base level (e.g. -34 dB)
     - $K_2$ ($K_1 + 300\text{ms}$): Swell level (e.g. -26 dB)
     - $K_3$ (Next speech start $- 200\text{ms}$): Hold swell (-26 dB)
     - $K_4$ (Next speech start): Duck back to base (-34 dB)
3. **Dead Silence Trigger:**
   * On script tags marked `[DEAD SILENCE]` or major balance sheet reveals, drop the BGM volume to **$-\infty\text{ dB}$** $0.5\text{s}$ before the word, and trigger the Track 2 sub-bass drop on the word's timestamp.

---

# **FinanceCraft — Guided Production Document Generator**

*Feed this prompt, along with a tagged script (from the Script Generation prompt) and the Style Bible, to generate the full production document. The end user is technically capable — comfortable with code, logic, and running AI tools — but has no traditional video-editing or visual-design background, and no creative/production training. Leave no visual, creative, or tool-usage judgment to guesswork.*

| **TASK-07** | **Spoken-Cadence Beat Sheet** | `# FinanceCraft — Guided Production Document` (Phase 5) | `07_BEAT_SHEET.md` | `Lines 1403–1550` | **Generated STRICTLY AFTER VO audio timestamps exist.** Exact millisecond downbeats (`00:00.0 - 00:03.4`), sentence-bound visual cuts (brisk multi-shot cuts for stills; multi-sentence thought-block holds for video/Remotion), framing, motion. Standalone file. |
| **TASK-08** | **Batch 1: Still Prompts** | `# Asset Instructions: Nano Banana 2` | `08_STILLS_PROMPTS.md` | `Lines 1551–1575` | Consolidated copy-paste prompts for all Batch 1 4K stills (3840×2160, vector flat cel-shaded style). Standalone file. |
| **TASK-09** | **Batch 2: AI Video Prompts** | `# Asset Instructions: AI Video` | `09_VIDEO_PROMPTS.md` | `Lines 1576–1600` | Consolidated copy-paste prompts for all Batch 2 AI video clips (Google Flow / Omni, muted, 1920×1080). Standalone file. |
| **TASK-10** | **Batch 3: Remotion Graphics Specs** | `# FinanceCraft — Remotion Prompt Guidelines` | `10_REMOTION_SPECS.md` | `Lines 1987–2314` | Dedicated code specifications, component imports, and render commands for Remotion charts/maps. Standalone file. |
| **TASK-11** | **Batch 4: Audio Score & Sound Design** | `# FinanceCraft — Audio Architecture & Sound` | `11_AUDIO_DESIGN.md` | `Lines 953–1181` | Dedicated BGM score beds (Suno/Udio prompts), empirical volume ducking curves, tactile foley triggers. Standalone file. |
| **TASK-12** | **Shorts Spinoffs** | `# FinanceCraft — NotebookLM Cinematic Video` | `shorts.md` | `Lines 1588–1630, 1905–1986` | Standalone vertical (9:16) spinoff scripts, NotebookLM Video Overview prompts, and CapCut vertical assembly instructions. |
| **TASK-13** | **Timeline Assembly Guide** | `# CapCut Timeline Assembly Blueprint` | `12_CAPCUT_ASSEMBLY.md` | `Lines 2265–2418` | Standalone post-production deliverable. Multi-track timeline assembly guide (Tracks 0–3), transition rules, keyframed pans, and audio ducking envelopes. |
| **TASK-14** | **YouTube Metadata & Chapters** | `# Phase 10: Video Packaging & Upload Metadata` | `13_FINAL_METADATA.md` | `Lines 2419–2468` | Standalone distribution deliverable. Verified title, YouTube description, **accurate chapter timestamps derived directly from final video cuts**, pinned comment, 25 SEO tags. |

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
| **CP-6: AI Video Budget & Dynamic Motion Engine** | Phase 4 & Batch 2 | **AI Video (Batch 2) Cap:** Up to **25 AI video clips** per 15-minute documentary (cinematic drone sweeps, kinetic scene motion, physical actions, and in-script protagonist beats). **Remotion (Batch 4) is SEPARATE & Script-Driven:** Remotion components (`newsroom-chart-animations`, `map-explainer`, `3d-flyover`, `remotion-bits`) are NOT counted against the 25 AI video cap; they are generated dynamically as needed by the script (`[DATA]`, `[MAP]`, `[REMOTION]`), never forced by an artificial quota. **Encouraged Cinematics & Engagement:** The engine is actively encouraged to deploy dynamic camera moves, cinematic 3D drone flyovers, staccato whip-zoom montages, and infinite looping motion tunnels to elevate visual energy per [`references/REMOTION_GRAPHICS_ENGINE_REFERENCE.md`](file:///Users/bilalashraf/YT%20Videos/references/REMOTION_GRAPHICS_ENGINE_REFERENCE.md). **Cross-Batch Asset Pipeline Dependency:** The engine must actively schedule necessary Batch 1 AI stills (e.g. 8–15 image plates for whip-zoom montages, vanishing-point corridor plates for infinite zoom tunnels, cutout portraits for 3D flywheels) so they are generated upstream in Batch 1 to feed Remotion compositions in Batch 4. **Signature Cinematic Minimum:** "Encouraged" has proven too weak to survive contact with a beat planner defaulting to newsroom charts. Every episode's beat sheet must explicitly evaluate whether at least one beat's staging (a deep vanishing-point corridor, a rewind/montage VO line, a multi-location recap) fits `ARCHETYPE_WHIP_ZOOM_MONTAGE`, `ARCHETYPE_INFINITE_PORTAL_TUNNEL`, or `ARCHETYPE_3D_ORBITAL_FLYWHEEL`. Zero signature cinematics in a 12+ minute episode requires one stated sentence for why none fit — a silent absence is a planning gap, not a valid outcome. **Spacing:** these are a peak-moment device, not a texture. When more than one is scheduled, they land at least one full Act apart (or ≥90s) unless the script's own escalation genuinely calls for back-to-back — don't cluster them just because both got noticed in the same planning pass. **Theme Lock:** 100% of Remotion code MUST strictly inherit the video's color palette and visual theme — every background, text, and accent color must resolve to a value from the project's `tokens.ts` (`TOKENS.colors.*`) or a documented `rgba()` derived from one; a component that imports `TOKENS` for some colors but hardcodes its own ad-hoc hex for the base canvas (e.g. an invented near-black like `#070a10` instead of `TOKENS.colors.backgroundDark`) still fails Theme Lock. 100% of AI video blocks MUST declare TECHNIQUE and name `INPUT FRAMES`. 100% of AI video prompts MUST include: `"1920x1080, 16:9, 30fps, no audio, mute, silent output"`. Every Remotion prompt MUST include: `"use best graphic motions practises and guidelines from top performing graphics"`. | Reject any AI video prompt with ambient audio, missing technique/input frames declaration, or Batch 2 video count $> 25$. Reject any Remotion asset that fails theme-lock, misses upstream input frame dependencies, or defaults to static text. Reject any `[MAP]`/geographic component that hand-rolls pixel coordinates instead of using a documented projection engine (`d3.geoMercator`, `d3.geoOrthographic`, or the MapTiler/GeoJSON hybrid) from `REMOTION_GRAPHICS_ENGINE_REFERENCE.md`. Reject any signature-cinematic component (`ARCHETYPE_WHIP_ZOOM_MONTAGE`, `ARCHETYPE_INFINITE_PORTAL_TUNNEL`, `ARCHETYPE_3D_ORBITAL_FLYWHEEL`) that renders zero `<Img>`/`staticFile` calls against its scheduled Batch 1 feeder stills — a flat-color or pure-vector/canvas substitute is not a valid delivery of that archetype. |
| **CP-7: Universal Quality Mandate** | 100% of Prompts | Every single prompt block (stills, video, characters, thumbnails) MUST contain: `"follow best industry-standard guidelines and quality and visualisations"`. | Automated regex check: reject prompt if missing the exact clause. |
| **CP-8: Typography & Native Text** | Stills & Thumbs | Nano Banana 2 renders text natively. Every prompt needing text must specify: `ON-IMAGE TEXT: Direct in-generation text: "[exact text]"`. | Negative prompt MUST NOT contain "no text" or "no words" when text is requested. |
| **CP-9: Caricature & Legal Guardrails** | Characters & Beats | Real persons (e.g. Foley, McCarthy) are illustrated caricatures only, strictly gesture-only with ZERO scripted dialogue and ZERO lip-sync. Standalone single-pose portrait only (no turnaround). | Strip all mouth movements/dialogue from real person prompts. |
| **CP-10: Batch 1:1 Reconciliation** | Phase 5 Batches | Sum of assets in Batches 1, 2, 3, and 4 MUST EXACTLY equal $B$ (total beats) + master character references + thumbnail variants. Zero missing/orphaned assets. Every Batch 4 (Remotion) component additionally requires a rendered still PNG on disk per CP-14 — a component with no rendered still is an orphaned asset for this checkpoint's purposes, same as a missing file. **Missed-Feeder-Still Remediation:** Since the engine runs inside Antigravity, a feeder still discovered missing at this stage (or during Phase 10 spec-writing, or during CP-14 viewing) is not a hard block requiring a replan — the engine generates the missing plate on demand via Nano Banana directly within Antigravity, then wires it into the component, re-renders, and re-views before marking the checkpoint reconciled. A missing still is never papered over with a flat-color or procedural substitute when this remediation path is available. | Block transition to Part B until inventory is 100% reconciled. |
| **CP-11: Timeline A/V Synchronization** | Part B Timeline | Narration VO Track Duration ($T_{audio}$) matches Total Visual Beat Duration ($\sum D_i$) within $\pm 0.5$ seconds. Zero gap frames between cuts. All AI video clips muted (-inf dB). | Abort CapCut timeline commit if A/V duration drift $> 0.5$ seconds. |
| **CP-12: Dynamic Audio Score & Ducking** | Part B Audio | 1 cohesive BGM score bed on Track 3, with separate VO (0dB, -15 LUFS on Track 1) and Foley (-26dB on Track 2); dynamic ducking (-32 to -35 dB); pause swells (+8dB on gaps >1.2s); cognitive ducking (-50 to -60dB) during dense data/math beats; dead silence drops on shock reveals. | Flag any un-ducked or flat audio mix. |
| **CP-13: Anti-Dryness & Entertainment Mandate** | Script & Narration | Narration MUST be fun, punchy, conversational, and witty. Strictly prohibits stiff courtroom legalese, academic lecture prose, or corporate compliance tone. Must incorporate visceral physical grounding ("Popcorn & Delivery Van" rule), staccato rhythmic variety, and relatable humor ("Cereal Box" principle). | **AUTOMATIC REJECTION** if script sounds like a formal court filing, legal deposition, or academic paper. Rewrite with conversational swagger and narrative electricity. |
| **CP-14: Remotion Render-and-View Verification** | Batch 4 Remotion Components | A component that type-checks and compiles is not the same as a component that looks right — clipped text, overlapping layers, off-theme color, and broken hierarchy all pass a build cleanly. After writing or editing any Remotion scene component, the engine MUST render at least one representative still frame (`npx remotion still <composition-id> <output.png> --frame=<mid-point-frame>`; for anything with meaningful motion, render start/mid/end frames instead of just one) and **actually view the rendered PNG** before marking that component done. Check the rendered frame against: legibility at a glance, no clipped or overlapping elements, Theme-Lock color tokens, and the Information Architecture build order (Skill 1, "Build Order"). If the frame doesn't match, fix the component and re-render — don't mark it complete off a passing build alone. This is a process discipline, not a text-scriptable gate: `gate_check.py` cannot judge whether a frame "looks good," so this step cannot be skipped on the assumption that some other check covers it. **One Component at a Time:** Batch-writing every Remotion component in one pass before rendering any of them produces uniformly generic output — the engine falls back to the cheapest pattern that satisfies the prompt when there's no per-component checkpoint forcing attention. Build → render → view → fix MUST complete for one component before the next component is started; never write component N+1 while component N's render is still unverified. | Self-audit only — no deliverable may claim a Remotion component is finished without stating that its rendered still was viewed and matched the spec. CP-10's asset reconciliation additionally requires the rendered still PNG to exist on disk for every composition ID. |

---

### **Mandatory Step-by-Step Deliverable Validation Protocol (Self-Audit at Every Phase)**

> [!CAUTION]
> **PRE-DELIVERY AUDIT RULE FOR THE AI GENERATION ENGINE:**  
> At **EVERY SINGLE STEP** of the 14-phase pipeline, the AI generation engine MUST perform a rigorous internal self-audit against the target deliverable's explicit rules before presenting or saving the file.  
> **If ANY condition in the checklist below is violated, the output is an AUTOMATIC REJECTION.** The engine must halt, correct the defect internally, and only return the fully verified deliverable.

```
PHASE-BY-PHASE AUDIT CHECKLIST:

[ ] PHASE 01: 01_RESEARCH_BRIEF.md
    - Track Routing verified: Explicitly declared as Track 1 (Documented Case) or Track 2 (Thought Experiment / What-If).
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
    - Never State the Thesis (10/10 benchmark): the title names the subject and promises a resolution — it never delivers one. Banned in title position: replaced, broke, starved, killed, destroyed, caused, proves, because.
    - No length rule: benchmark range is 3–12 words; a fixed word cap would have rejected a validated 608k-view title.

[ ] PHASE 04: 04_THUMBNAILS.md
    - Dedicated standalone file in videos/<episode-slug>/.
    - 3 to 6 distinct options (Options A through F) mapping across the 7 Outlier Archetypes.
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
    - Two-Part Control Instructions: Persona Anchor locked to Track + Dynamic Register per chunk.
    - Phonetic decimal normalization verified ("point") in target_text.
    - ZERO bracket tag leaks into target_text.

[ ] MANDATORY TIMING GATE: VO AUDIO SYNTHESIS
    - Audio stems synthesized and assembled into master_narration.wav in videos/<episode-slug>/voiceover/.
    - Sentence/word timestamp alignment JSON (metadata.json / alignment.json) generated.
    - HARD GATE: NEVER generate Phase 07 (07_BEAT_SHEET.md) until audio exists.

[ ] PHASE 07: 07_BEAT_SHEET.md
    - Dedicated standalone file generated STRICTLY after VO audio timestamps exist.
    - Visual cuts snap to ground-truth spoken audio downbeats (0.0s drift).
    - Average beat duration targets 2.5s to 4.0s (evidentiary holds up to 10.0s justified).
    - Visual type, staging, camera motion, and visual role tagged per beat.
    - Signature Cinematic Check: at least one beat evaluated against ARCHETYPE_WHIP_ZOOM_MONTAGE / ARCHETYPE_INFINITE_PORTAL_TUNNEL / ARCHETYPE_3D_ORBITAL_FLYWHEEL fit; zero scheduled requires one stated reason, not silence. Multiple signature cinematics are spaced across acts, not clustered.

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
    - Video clip count <= 25.

[ ] PHASE 10: 10_REMOTION_SPECS.md
    - Dedicated standalone file.
    - Batch 3: Remotion motion graphics components matching in-script tags ([DATA], [MAP], [REMOTION]).
    - Exact frame count matching spoken audio; theme-locked color palette.
    - Every component imports `TOKENS` from `tokens.ts` and sets its base canvas/background color from `TOKENS.colors.background` or `TOKENS.colors.backgroundDark` (or a documented `rgba()` derived from one) — no invented hex literal for the base background, even one that "looks close enough" to the theme.
    - Component mix reconciled against Phase 07's Signature Cinematic Check — if Phase 07 flagged a candidate beat, Phase 10 must either deliver the matching archetype or state why it was dropped.
    - Each `[MAP]`/geographic component names the specific `REMOTION_GRAPHICS_ENGINE_REFERENCE.md` engine it uses (e.g. 3B MapTiler Hybrid, `d3.geoMercator`, `d3.geoOrthographic`) — hardcoded pixel coordinates on a blank SVG canvas is not a valid substitute.
    - Each signature-cinematic component lists the exact Batch 1 feeder-still filenames it consumes via `<Img>`/`staticFile`; a component with scheduled feeder stills but zero image usage fails this bullet.

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
| **03** | **`03_TITLES_AND_HOOKS.md`** | Packaging | 5 distinct CTR title angles, mobile search hooks, provisional core thesis. Standalone file. |
| **04** | **`04_THUMBNAILS.md`** | Packaging | 3–4 visual thumbnail concepts, each with a named anchor + wrong-thing pair, cap-height-tested text, and Nano Banana 2 prompts. Standalone file. |
| **05** | **`05_CHARACTER_SETUP.md`** | Visual Direction | Caricature (Track 1) or composite archetype (Track 2) prompts with single static reference portraits. Standalone file. |
| **06** | **`06_VOICE_DIRECTION.json`<br>`06_VOICE_DIRECTION.md`** | Audio Production | Chunked VoxCPM2 JSON with Two-Part Control Instructions (Persona Anchor + Dynamic Register), phonetic decimals (`point`), and API copy-blocks. Standalone files. |
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
- **AI video generation** (e.g. Google Omni/Flow or an equivalent tool) — run manually through the web UI by the user. Clips run 6-8 seconds each; generate at 1920×1080, 16:9. Supports three operational modes: (1) **Text-to-Video** (direct generation from prompt with 0 frames / no reference image, ideal for atmospheric establishing shots, environmental pans, and scenes with no continuity dependency), (2) **Image-to-Video** (one reference still to animate camera movement, zoom, or parallax), and (3) **Frames-to-Video** (start + end pre-approved stills to lock character caricature consistency and gestures without morphing). **This is not silent by default — it generates its own synchronized audio automatically, including ambient sound it infers from the visual (room tone, environmental noise), unless the prompt explicitly mutes it.** Every generation prompt must contain an explicit no-audio instruction as part of its own text (e.g. "...no audio, mute, silent output") — silence has to be requested, it is never the tool's default state.
- **Remotion** — code-based motion graphics and dynamic data/geographic animations, built by the coding agent (not the user manually). Render at 1920×1080, 30fps (master) or 1080×1920 (shorts), matching the technical master spec. The pipeline leverages three specialized skills and an installed component catalog:
  1. **`newsroom-chart-animations`**: For evidence-bearing financial charts, cascading waterfalls, stock bubble curves, proportional timelines, and animated counters. Follows strict newsroom editorial design (quiet field, single semantic accent, visible sourcing directly under the title card, no decorative parallax/particles).
  2. **`map-explainer`**: For 2D geographic maps, supply chains, maritime routes, and regional border/fill blooms. Uses MapTiler SDK + Remotion + projected React HTML overlay labels, with the **fixed map plate rule** for jitter-free camera moves.
  3. **`3d-flyover`**: For 3D cinematic aerial flyovers of industrial complexes, corporate towers, and terrain with CesiumJS. Features Chaikin curved-path smoothing, banking camera mechanics, and deterministic frame settling.
  4. **`remotion-bits`**: Pre-built catalog of 42 kinetic UI, typography, and text components (`variable-speed-typewriter`, `bit-card-stack`, `bit-ken-burns`, `bit-basic-counter`).
- **Background instrumental music & Sound Design** (e.g. Suno v3.5, Udio, ElevenLabs Music, or Epidemic Sound / Artlist) — a single cohesive background score bed per episode (tailored to the video's primary archetype) plus tactile micro-foley sound effects, generated via dedicated **Audio Asset blocks** (per the Audio Architecture & Sound Design Engine).
- **CapCut MCP — local draft-file variant.** Edits CapCut's local project files directly. Requires an existing template draft to clone project structure from. CapCut must be fully closed while the agent edits it — it autosaves on a timer and will clobber changes made while open. Edits accumulate in a session and only commit to disk on an explicit save-and-validate step.
- **Asset mix: mostly dynamic static images cut at rapid documentary tempo (2.5s–4.0s average), supported by up to 25 AI video and Remotion motion assets per episode.** Images do heavy lifting with active Ken Burns pan/zoom, but visual momentum is sustained with Remotion financial charts (`newsroom-chart-animations`), 2D/3D map explainers (`map-explainer` / `3d-flyover`), and cinematic AI scene motion. Reach for AI video for key atmospheric turns, character actions, or mechanical movements.
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
DURATION: [target on-screen duration, 6-8s]
```

**Audio Asset Copy-Paste Block (Music Score Beds & Tactile Foley):**
*All music score creation prompts and major foley triggers live directly in the beat production setup as a dedicated `Audio` asset type, ensuring complete 1:1 synchronization between visual narrative turns and acoustic cues.*

```
FILENAME: [exact filename, e.g. 000_bgm_act1_suspense.mp3 / 025_foley_subbass_boom.wav]
TYPE: Audio (Score Bed / Tactile Foley)
ARCHETYPE: [Inquisitive Neo-Classical / Geopolitical Dark Thriller / Smoky Corporate Noir / Minimalist Pedagogical Bed / Investigative Macro-Suspense / N/A (Foley)]
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

**Titles: generate 4-5 distinct variations, never just one.** Ground them in real data — pull recent high-performing titles from the Master Tracker's Coverage Map and Outlier Log tabs and identify keyword phrases and structural patterns recurring in outlier videos, plus the strongest terms from Genre Trend Scan. Each variation should test a genuinely different angle, not reword the same title:
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
- Bulleted list of primary evidentiary sources (SEC 10-K, regulatory consent decrees, court filings, deeds).
- Never write the subscribe CTA or channel boilerplate here — that's a fixed block at the channel level, not authored per episode.

> [!CRITICAL]
> **MANDATORY TIMING & ACCURACY RULE (NO ESTIMATED TIMESTAMPS IN PHASE 1):**
> The official YouTube Video Description and its Chapter Timestamps (`00:00 - Introduction`, etc.) **MUST NOT be finalized or output with fabricated timestamps during Phase 1 pre-production**. It is physically impossible to know exact downbeats before audio voiceover recording, pacing, and visual editing occur. Pre-generating timestamps causes broken, unaligned YouTube chapters.
> 
> **The official YouTube Description and Chapter Timestamps MUST be generated at the very end of production (in Part B / post-production), derived with frame-accurate precision directly from the final shape of the captions (`.srt` / `.json`) and timeline cuts.**

## Phase 2 — Thumbnail Concepts

Generated as a static image, never AI video — this never appears in the video itself. **Choose from the archetypes in the Thumbnail Style Reference file** based on this episode's actual content (a real central figure, a mechanism/how-it-works angle, an atmospheric or historical angle, a specific physical place, a forward-looking angle) — don't default to the same archetype every episode when the content calls for a different one.

**Be specifically clever about the subject, not generically "put a face on it."** A strong thumbnail concept uses the episode's actual central fact or irony as visual metaphor, not just a portrait. Worked example for a Rivian collapse episode: a clean illustrated Rivian vehicle crashing directly through a giant "$100B" stop sign, with bold text reading "HOW THIS $100B COMPANY COLLAPSED" — the crash-through-the-sign image IS the story's core idea (unstoppable momentum meeting a hard financial wall) rendered as one visual, not a character standing next to unrelated numbers. Every thumbnail concept should pass this bar: could someone understand the episode's core tension **and its subject** from the image alone, before reading the text?

**Before presenting any concept, run it through the Instant-Recognition Object Rule and the Benchmark Cross-Check (Thumbnail Style Reference file, end of the archetype menu).** Name the hero object, confirm it's legible without industry jargon, name the closest competitor proof-point for the chosen archetype, and confirm the concept doesn't diverge from what made that proof-point work. A concept that fails either check is not ready to present, regardless of how well it fits its archetype's mechanical pattern (badge count, word count, resolution).

1. **Generate 3 to 6 distinct thumbnail variants (Options A through F) for A/B testing, at 3840×2160.** Rather than sticking to a single visual format, explore multiple distinct archetypes from the 7-archetype menu (e.g. one POV Simulation HUD, one Environmental Metaphor, one Isometric Infographic, one Painterly Editorial, and one Bold Impact Typography option). This gives the creator maximum range to test radically different visual hypotheses on YouTube's "Test & Compare" tool.
2. Same illustrated system as the episode, using the episode's fixed reference character block if a caricature-driven story — but the metaphor/concept comes first, the character is one possible way to deliver it, not the default.
3. Nano Banana 2 natively renders clean typography, so bold headline text hooks, numbers, and forensic badges can be requested directly in the generation prompt. **Headline text hooks must strictly follow the 1–4 Word Rule** (high-contrast sans-serif in white/yellow with sharp drop shadow, e.g. "THE $50B ILLUSION") to guarantee instant legibility at 200px mobile feed size. Data badges must be limited to 2–4 clean callouts max. (Post-production touch-ups in Canva/Photoshop remain an optional fallback).
4. Palette follows the episode's actual tone per the Style Bible's modulation rule and the light/neutral-with-one-accent color system — contrast and a single dominant focal point drive click-through, not brightness or color count.
5. Final export: downscale to 1280×720 for upload, keeping the 3840×2160 source. Sanity-check readability around 200px wide, mobile-feed scale.

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
  - *Evidence Flash:* Brief overview of real document/deed/filing with highlight (1.5s–3.0s max).
  - *Conceptual Illustration:* Cut immediately to an evocative narrative illustration/metaphor (e.g. crumbling concrete foundation, corporate chessboard, assembly line halted) to avoid dry paper fatigue.
- **Technique 3 — Caricature Performance & Metric Ping-Pong:**
  - *Beat A:* Executive caricature delivering action or reacting at boardroom desk / conference stage (3.0–4.0s).
  - *Beat B:* Cut to Remotion animated stock ticker display, balance sheet readout, or Wall Street trading terminal reacting (3.0–4.5s).
  - *Beat C:* Punch-in on the caricature's tense facial expression or retreating posture (2.0–3.0s).
- **Technique 4 — Remotion Data Visualizations:**
  - Convert complex numbers into animated newsroom charts, waterfall breakdowns, and counter cards (`newsroom-chart-animations`) rather than static text tables.
- **Technique 5 — Consumer & Cultural Juxtaposition:**
  - Cut rapidly between corporate boardroom decisions and consumer living rooms, warehouse floors, stranded container ships, or second-hand listings.
- **Technique 6 — Kinetic FPV Drone Sweeps & Infinite Motion Loops:**
  - When narrating monumental physical scale (e.g. >500,000 sq ft empty plants, container ports, endless assembly bays) or systemic treadmill traps (relentless cash burn, infinite debt) running $>6.0\text{s}$, deploy **high-speed forward FPV drone sweeps or Remotion infinite recurring zoom tunnels (e.g. `InfiniteDroneZoomTunnel`)**. Continuous forward optical flow (vection) eliminates visual fatigue and visually dramatizes vast architectural scale far better than a static 2D blueprint.

**Mandatory Checkpoint 3: Production Technical Constraints Gate:**
1. **AI Video Budget & Dynamic Motion Engine:** Capped at up to **25 AI video clips (Batch 2)** per 15-minute video (allocated for cinematic camera moves, FPV drone fly-throughs, scene motion, and in-script protagonist scenes). **Remotion code graphics (Batch 4) are completely separate** and generated dynamically based on script data/map requirements (`[DATA]`, `[MAP]`), NOT bound by the 25 AI video cap. The engine is strongly encouraged to deploy cinematic drone shots and dynamic motion animations wherever visual pacing or physical scale benefits from continuous optical flow. Every AI video prompt MUST explicitly state `"1920x1080, 16:9, 30fps, no audio, mute, silent output"`.
2. **Universal Quality Mandate:** Every prompt block without exception MUST contain `"follow best industry-standard guidelines and quality and visualisations"`.
3. **Legal & Caricature Compliance:** Real persons (Foley, McCarthy) are illustrated caricatures, strictly gesture-only with zero lip-synced dialogue. Quotes are displayed on visual cards.
4. **Resolution Standards:** All stills generated at 3840×2160 (4K); all video and Remotion rendered at 1920×1080.

For every beat needing a generated or collected asset, produce the full copy-paste block (per the File Naming Convention section above) with:

**Beat number** — for cross-reference with Part B. No timestamp here — that's Part B's job.

**Asset type** — pick one based on the **Cinematic Elevation Principle** (select the format that maximizes visual dynamism, continuous optical flow, and audience retention; never let monumental physical scale, high-stakes data, or long-duration narration $>6.0\text{s}$ languish on a flat static drawing):
1. **AI Video (Cinematic Scene Motion, FPV Drone Sweeps & Performance — Batch 2, capped up to 25 clips):** Strongly encouraged for beats conveying physical scale (cavernous mega-factories, container port gridlock, industrial assembly lines), dramatic character gestures, high-speed camera movement, and seamless forward looping fly-throughs. When a beat narrates vast physical architecture or a monumental space running $>6.0\text{s}$, proactively generate a high-speed forward FPV drone sweep or kinetic camera travel rather than a flat 2D still. Count each against the up-to-25 AI video cap.
2. **Remotion Motion Graphic & Geographic Animation (Batch 4 — Dynamically Script-Driven, Separate from AI Video Cap):** Governed by the master control plane in [`references/REMOTION_GRAPHICS_ENGINE_REFERENCE.md`](file:///Users/bilalashraf/YT%20Videos/references/REMOTION_GRAPHICS_ENGINE_REFERENCE.md). Generated dynamically whenever called for by script tags (`[DATA]`, `[MAP]`, `[SHOWABLE]`, or `[REMOTION]`). Never forced by an arbitrary quota; scales naturally with the episode's factual needs. **Always select the archetype that is most engaging, kinetic, and propulsive for the narrative beat:**
   - **`ARCHETYPE_3D_FLYOVER_TERRAIN` (`3d-flyover`):** Cinematic 3D terrain and city aerial flyovers using CesiumJS. Features MapTiler satellite terrain or Google 3D Tiles, 3-pass Chaikin curved smoothing, constant ground speed, and natural banking roll into turns. Proactively deploy for large geographic parcels, factory sites, and remote terrain instead of flat drawings.
   - **`ARCHETYPE_WHIP_ZOOM_MONTAGE`:** Rapid staccato whip-zoom montage (3–6 frames per cut, Justin Odisho formula with simulated $300^\circ$ shutter angle motion blur) for high-energy chronologies, travel sequences, or multi-location recaps.
   - **`ARCHETYPE_INFINITE_PORTAL_TUNNEL`:** Continuous recursive zoom tunnel (continuous $u$ model with harmonic wobble) for infinite feedback loops, relentless cash burn treadmills, or psychological traps.
   - **`ARCHETYPE_NEWSPRINT_EDITORIAL` (Mandatory for Text-Heavy Documents):** Archival document and newspaper split-screen with animated highlighter marker sweep and red pencil sketch circle. **Strictly required for deeds, leaked memos, court transcripts, and SEC filings to eliminate static text fatigue.**
   - **`ARCHETYPE_ECONOMIC_FLYWHEEL` & `ARCHETYPE_3D_ORBITAL_FLYWHEEL`:** Compounding CAC payback loops, ecosystem lock-in models, and multi-node platform cycles.
   - **`ARCHETYPE_BULLWHIP_PHYSICS`:** Supply chain oscillation waves with exponential amplitude amplification.
   - **`newsroom-chart-animations` (for `[DATA]`):** Evidence-led financial data graphics, waterfalls, bubble curves, and timelines. Follows strict newsroom design (source under title card, single crimson/emerald semantic accent, zero decorative particles/parallax, 1s stable final hold).
   - **`map-explainer` (for 2D `[MAP]`):** Tracing routes, shipping corridors, supply chains, or regional choropleth reveals using MapTiler SDK vector layers, electric draw-heads, sequenced border draws, and projected HTML label overlays with a fixed map plate for stable camera moves.
   - **`remotion-bits` Catalog (42 Pre-Built Components):** Kinetic UI, typography, counter cards, and scene transitions (`variable-speed-typewriter`, `bit-card-stack`, `bit-basic-counter`, `bit-scene-3d-cube-nav`).
3. **Real-World Asset Insert:** For anything tagged `[SHOWABLE]` (deeds, SEC filings, official letters). **Anti-Static Rule:** If the document contains dense text, DO NOT present it as an un-animated static block. Pair it immediately with Remotion animated highlighter wipes (`ARCHETYPE_NEWSPRINT_EDITORIAL`), typewriter reveals, or rubber stamps (`ARCHETYPE_RUBBER_STAMP`).
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
npm install cesium @maptiler/sdk maplibre-gl d3 d3-geo topojson-client
```

### The Four Cardinal Laws of Remotion Production:

1. **The Visual Engagement & Kinematics Law (Detailed & Descriptive):**  
   The engine must actively know *which* Remotion graphic to use and *when* to use it, describing its motion mechanics in rich, breathtaking detail rather than generic notes:
   - When narrating monumental physical scale, remote parcels, or industrial facilities: deploy **Cinematic 3D Aerial Terrain Flyovers (`ARCHETYPE_3D_FLYOVER_TERRAIN`)** with banking camera mechanics over MapTiler terrain.
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
| **Aerial Site / Monolith / Terrain** | `ARCHETYPE_3D_FLYOVER_TERRAIN` | `3d-flyover` (CesiumJS) | `OhioFarmlandFlyover.tsx` |
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

- **Cold open bumper** — the channel's recurring opening logo/title card. Fixed Remotion asset, 1920×1080/30fps, 3-5 seconds. Full prompt required, generated once.
- **Subscribe graphic overlay** — the on-screen subscribe button/animation. Fixed Remotion asset, 2-4 seconds. Full prompt required, generated once.
- **Background instrumental score** — one music generation prompt per episode (Suno/Udio/equivalent), instrumental only, no lyrics, matching the episode's tone register per the Style Bible's palette-modulation principle (a tense, propulsive instrumental bed for an accountability story; a sparse, restrained one for a tragedy episode). State the target mood, tempo range, and instrumentation explicitly in the prompt — never leave this to the music tool's own interpretation of a one-word mood label.
- **Sign-off delivery — decide per episode, not fixed:**
  - Default: Delivered over a dramatic closing conceptual illustration, thematic visual resolution, or dynamic Remotion title animation with narration VO.
  - If this episode features Margery as an in-world protagonist (e.g. stranded on the island in a hypothetical scenario): she can deliver the closing in-scene action.
  - If this episode centers a strong accountability-tone caricature: that character can deliver the line instead, per the dialogue exception in Character Setup.
  - Do NOT generate a generic news-anchor desk sign-off.

**"The Hypothetical" episodes use their own standing assets instead of the above, per Style Bible Section 10:** a separate cold open bumper in the sub-series' lavender accent, and a recurring "HYPOTHETICAL SCENARIO" watermark badge inserted at every `[WATERMARK]` tag — roughly every 2-3 minutes. Subscribe overlay and sign-off delivery follow the main show's rules.

## Phase 5 — Consolidated batches (Part A's execution deliverable, grouped by type)

This is the primary deliverable to actually work from — grouped by asset type so every prompt of one kind can be bulk-copied into the relevant tool in one sitting, rather than jumping between tools beat by beat. **No Part B information (duration, timestamps) appears here — that's a different document.** Every entry uses the full copy-paste block from the File Naming Convention section, in full, not abbreviated to just a filename.

**Mandatory Checkpoint CP-10: 1:1 Asset Inventory Reconciliation Audit:**
Before outputting Phase 5, the engine MUST run and print the exact reconciliation audit:
- Total Master Reference Stills (from Phase 3)
- Total Thumbnail Variants (from Phase 2)
- Total Episode Beats (from Phase 4, $B$)
- Asset Breakdown:
  - Batch 1: Static Image Stills Count ($N_{stills}$)
  - Batch 2: AI Video Performance & Scene Clips Count ($N_{video}$, strictly $N_{video} \le 25$)
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
4. **Full Spoken Narration Script & Cadence:** A fast, punchy 45–60s script (~110–140 words). Includes the Two-Part Control Instruction (`<Locked Persona Anchor>. Speaks with <Delivery Register>`) for standalone VO generation or extraction from the master VO.
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
4. **Primary Evidentiary Citations:** Direct bulleted list of SEC Form 10-K/10-Q filings, CPSC consent orders, county deed registers, and congressional hearing transcripts.
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

# **FinanceCraft — Voice Direction Prompt (VoxCPM2)**

*The auditory spine of the pipeline. Feed this a finished narration script from the Script Generator. It turns the script into a chunked, VoxCPM2-ready voiceover generation script (`06_VOICE_DIRECTION.json` / `VOICE_DIRECTION_VOXCPM2.json` and `06_VOICE_DIRECTION.md`). Enforces the **Two-Part Control Instruction Protocol**: locking one unchanging Persona Anchor across all chunks (mapped from the episode's core archetype) and modulating only delivery registers (cadence, pacing, quiet weight) without shouting. Generating the master VO audio and its timestamped alignment JSON here provides the ground-truth timing for 07_BEAT_SHEET.md, ensuring visual cuts snap to spoken cadence with zero drift.*

---

## **Vocal tags — language-specific, verbatim from VoxCPM2's own documentation**

Several of VoxCPM2's tags mimic Chinese interjection-particle endings (-ah, \-ei, \-en, \-oh, \-wa, \-yo, \-hnn) and underperform in English. Use the form that matches the script's language.

| Category | For English scripts | For Chinese scripts |
| ----- | ----- | ----- |
| Laughs / sighs | `[laughing]`, `[sigh]` | `[laughing]`, `[sigh]` |
| Pauses / thinking | `[Uhm]`, `[Shh]` | `[Uhm]`, `[Shh]` |
| Questions | `[Question]` (plain form) | `[Question-ah]`, `[Question-ei]`, `[Question-en]`, `[Question-oh]` |
| Emotions | `[Surprise]`, `[Dissatisfaction]` (plain forms) | `[Surprise-wa]`, `[Surprise-yo]`, `[Dissatisfaction-hnn]` |

`[laughing]` and `[sigh]` are confirmed via the cookbook's own worked examples and are language-neutral — use with full confidence in either language. The suffixed Question and Emotion tags are documented and tuned for Chinese; their plain-bracket English counterparts are unofficial and should be spot-tested before relying on them in bulk. If even the plain English form doesn't render as intended, isolate the moment as its own micro-chunk and describe the reaction directly in the Control Instruction instead of leaning on an inline tag.

**Retired — do not use, in either language:** `[pause]`, `[chuckle]`, `[whispers]`, `[gasp]`, `[clears throat]` — not on VoxCPM2's own recommended list.

**Absolute ban:** no sound-effect or Foley tags (`[keystrokes clack]`, `[door slams]`) — these get spoken as literal words. No abstract acting-instruction tags (`[flat tone]`, `[slow cadence]`) — that's the Control Instruction's job, not an inline tag.

**Frequency:** restraint over rate — a tag only where it would genuinely make a human voice catch, drop, or hush. Roughly 1 tag per 2-4 minutes of runtime as a ceiling to notice, not a quota. Skip a tag where bare facts should carry the weight alone (a casualty count, a dollar figure) — adding one there reads as manipulative rather than earned.

**No underscores** — replace with plain spaces so the model doesn't mispronounce them or speak the word "underscore" aloud.

**Decimal Normalization Rule ("point", NEVER "dot")** — TTS and neural voice models (VoxCPM2, ElevenLabs, Kokoro, etc.) routinely read raw numeric decimals like `1.2`, `2.5`, or `0.8` literally as **"one dot two"**, **"two dot five"**, or **"zero dot eight"**. This sounds amateur, distracting, and robotic in a financial documentary.
- **MANDATORY ENFORCEMENT FOR SCRIPTS & VO JSON:** In all spoken narration scripts, prompt targets, companion markdown, and specifically within `target_text` chunks of `VOICE_DIRECTION_VOXCPM2.json` (and `05_VOICE_DIRECTION.json`), every decimal number MUST be written out phonetically using the word **"point"**:
  - `1.2` $\rightarrow$ `1 point 2` (e.g. `1 point 2 million square foot`, NOT `1.2-million-square-foot`)
  - `1.5` $\rightarrow$ `1 point 5` (e.g. `1 point 5 million bikes`, NOT `1.5 million`)
  - `2.5 million` $\rightarrow$ `2 point 5 million`
  - `$1.2B` $\rightarrow$ `1 point 2 billion dollars`
  - `0.8%` $\rightarrow$ `zero point eight percent`
- **ABSOLUTE GATE:** Never leave a raw period in a decimal figure (`X.Y`) in the voiceover text or VO JSON. Any occurrence of `1.2` instead of `1 point 2` causes the engine to speak "one dot two" aloud and is a corrupt deliverable.

## **Chunking rules**

Split the script into chunks at paragraph boundaries by default. A chunk is 2-6 sentences sharing one narrative function. If a paragraph spans two functions, split it at that turn.

**Same-register stretch rule:** when 3+ consecutive chunks share the same register family, don't let any single chunk in that stretch run 4+ sentences with no internal tag or split — either add an earned tag or split it further purely to create another Control Instruction application point.

Generate one chunk per API/demo call, never the full script in one call — long text is a known trigger for unstable generation.

---

## **Chunk-to-chunk coherence — don't let intensity jump**

VoxCPM2 has no memory between chunks beyond the cloned reference audio — it doesn't know what the previous chunk sounded like, only what this chunk's own Control Instruction describes. A large jump in stated intensity between two adjacent chunks can render as a different voice entirely, not the same voice shifting mood, because there's nothing carrying continuity except your wording.

**Keep intensity changes incremental unless the narration itself contains a genuine hard tonal break.** Prefer moderate language — "a touch quieter," "a little more measured," "a shade more urgent" — over extreme descriptors — "hushed to almost nothing," "dropping into a whisper," "voice cracking" — when the surrounding chunks sit at a normal register. Save the extreme end of the range for moments the story has actually built toward across several chunks, not as a default flourish on any single one. If in doubt, undersell the shift rather than oversell it — punctuation and word choice in the narration text itself can carry emotional weight the Control Instruction doesn't also need to carry.

---

## **Two-Part Control Instruction: Locked Persona Anchor + Delivery Register Modulation**

Neural voice cloning models (VoxCPM2, ElevenLabs, Kokoro) require an immutable persona anchor across chunks. Because the model is stateless across independent inference calls, varying the prompt's persona vocabulary from chunk to chunk causes the text embedding to overpower the reference audio embedding, fracturing clone fidelity and making the narrator sound like different actors across the video.

To guarantee 100% vocal consistency, **every Control Instruction in a script MUST follow this strict two-part architecture**:

> **Format:** `"<Locked Persona Anchor>. Speaks with <Delivery Register Modulation>."`

---

### **Part 1: The Master Delivery Style Registry (Locked Persona Anchors)**
Select **ONE** persona anchor at the start of script production based on the video's format archetype. **This exact phrase must be prepended to every single chunk across the entire video without variation**:

| Archetype / Format | Benchmark Channel | Locked Persona Anchor String | Acoustic Profile & WPM | Best Suited For |
| :--- | :--- | :--- | :--- | :--- |
| **1. First-Principles Explainer** | *Martik Finance* (`pzInrqRFU5M`) | `"Approachable finance educator, warm, articulate, and conversational."` | Calm, clear, accessible educator. 145–155 WPM. Deliberate downbeats; strips away jargon. | Macroeconomics, currency systems, inflation mechanics, central banks, trade deficits. |
| **2. ELI5 Mythic Hardware** | *Crayon Capital* (`1GowFTjbUnk`) | `"Engaging video essay storyteller, curious and articulate."` | High-energy, punchy, intellectually curious. 155–165 WPM. Crisp staccato, tactile analogies. | Semiconductor hardware wars, AI computing infrastructure, founder turnaround epics. |
| **3. Geopolitical Chessboard** | *Lock Stock Finance* (`1kFV1Td2BQs`) | `"Restrained geopolitical analyst, cold, authoritative, and measured."` | Cold, analytical game-theorist. 140–150 WPM. Deep, resonant chest tone, dignified pauses. | Sovereign debt, petrodollar recycling, sanctions architecture, energy chokepoints. |
| **4. Inside-the-P&L Breakdown** | *Mr. Finance* (`-hBYfmfgBbg`) | `"Conversational business explainer, clear and engaging."` | Pragmatic, intelligent insider. 150–160 WPM. Close-mic studio warmth, relaxed chest register. | Corporate autopsies, unit economics, declining retail models, balance sheet forensics. |
| **5. POV Thought Experiment** | *My Chaotic Stories* (`dwSfdH1K7Zk`) | `"Sharp, fast-paced scenario guide, engaging, articulate, and vivid."` | Immersive second-person guide. 160–170 WPM. Ticking-clock momentum, deadpan realism. | "The Hypothetical" sub-series, trillion-dollar thought experiments, economic disasters. |
| **6. Dual-Character Simulation** | *Logical Money* (`nkT_K8l1rEw`) | `"Relatable financial breakdown guide, clear, objective, and conversational."` | Neutral, rigorous financial auditor. 145–155 WPM. Friendly, impartial, dry common sense. | Rent vs. buy, mortgage payoff math, leasing vs buying, index funds vs real estate. |
| **7. Compounded Efficiency** | *LITTLE BIT BETTER* (`Pd3HYjpmks4`) | `"Clear, empowering finance mentor, calm, confident, and direct."` | Quietly confident mentor. 150–160 WPM. Crisp, purposeful, empowering mathematical clarity. | Financial independence (FIRE), savings rate curves, asymmetric wealth accumulation. |

#### Detailed Style Profiles & Chunk Examples

1. **The Inside-the-P&L Business Analyst (*Mr. Finance* Benchmark)**
   * **Exact Anchor:** `"Conversational business explainer, clear and engaging."`
   * **Vocal Persona:** A pragmatic, intelligent insider sitting across a desk explaining how a company really makes its money. Close-mic studio intimacy, relaxed chest register, unhurried downbeats. Walks line-by-line down an income statement with cool authority.
   * **When to Select:** Corporate autopsies, franchise breakdowns, unit economics, retail crashes (e.g. Peloton, movie theaters, McDonald's, Boeing).
   * **Example Chunk:** `"Conversational business explainer, clear and engaging. Speaks with cool, unhurried clarity, walking through the unit economics step by step."`

2. **The First-Principles Macro Educator (*Martik Finance* Benchmark)**
   * **Exact Anchor:** `"Approachable finance educator, warm, articulate, and conversational."`
   * **Vocal Persona:** An empathetic, patient educator who treats the viewer as an intelligent peer. Strips away banking pretension and Wall Street vocabulary with crystal-clear, steady pacing.
   * **When to Select:** Macroeconomics, currency systems, inflation mechanics, interest rates, central banking, global trade deficits.
   * **Example Chunk:** `"Approachable finance educator, warm, articulate, and conversational. Speaks with calm, unhurried curiosity, unpacking the system from first principles."`

3. **The ELI5 Deep-Tech Storyteller (*Crayon Capital* Benchmark)**
   * **Exact Anchor:** `"Engaging video essay storyteller, curious and articulate."`
   * **Vocal Persona:** A dynamic, intellectually curious tech storyteller. Energetic and punchy without shouting; uses vivid tactile metaphors (professors vs kindergarteners) and rapid momentum.
   * **When to Select:** Semiconductor hardware wars, deep-tech infrastructure, AI computing, Silicon Valley founder origin sagas.
   * **Example Chunk:** `"Engaging video essay storyteller, curious and articulate. Speaks with steady narrative momentum, tracing the founder's early gamble."`

4. **The Forensic Geopolitical Analyst (*Lock Stock Finance* Benchmark)**
   * **Exact Anchor:** `"Restrained geopolitical analyst, cold, authoritative, and measured."`
   * **Vocal Persona:** A cold, analytical game-theorist. Deconstructs conspiratorial myths and replaces them with sovereign incentives and national security realism. Weighty, measured downbeats and deep chest resonance.
   * **When to Select:** Sovereign finance, petrodollar recycling, sanctions architecture, central bank reserve freezes, maritime trade chokepoints, currency wars.
   * **Example Chunk:** `"Restrained geopolitical analyst, cold, authoritative, and measured. Speaks with steady, unhurried gravity, tracing the strategic leverage point."`

5. **The POV Absurdist Guide (*My Chaotic Stories* Benchmark)**
   * **Exact Anchor:** `"Sharp, fast-paced scenario guide, engaging, articulate, and vivid."`
   * **Vocal Persona:** An immersive second-person ("you") guide. Quick-witted, highly visual, guiding the viewer through high-stakes logistical puzzles with ticking-clock momentum and deadpan reactions.
   * **When to Select:** "The Hypothetical" sub-series, trillion-dollar thought experiments, hyper-inflation simulations, logistical chaos.
   * **Example Chunk:** `"Sharp, fast-paced scenario guide, engaging, articulate, and vivid. Speaks with brisk, ticking-clock momentum, laying out the strict rules of the game."`

6. **The Dual-Character Spreadsheet Auditor (*Logical Money* Benchmark)**
   * **Exact Anchor:** `"Relatable financial breakdown guide, clear, objective, and conversational."`
   * **Vocal Persona:** A neutral, rigorous financial auditor. Friendly, impartial, and completely indifferent to societal cliches. Lets the spreadsheet deliver the verdict with dry, relatable humor.
   * **When to Select:** Personal finance sacred cows, renting vs buying, active trading vs index investing, leasing vs owning, 30-year net worth simulations.
   * **Example Chunk:** `"Relatable financial breakdown guide, clear, objective, and conversational. Speaks with relaxed, friendly clarity, setting up the two parallel paths."`

7. **The Compounded Efficiency Mentor (*LITTLE BIT BETTER* Benchmark)**
   * **Exact Anchor:** `"Clear, empowering finance mentor, calm, confident, and direct."`
   * **Vocal Persona:** A quietly confident mentor. Grounded, empowering, and pragmatic. Delivers mathematical truths with inspiring clarity, crisp declarative sentences, and zero fluff.
   * **When to Select:** Financial independence (FIRE), savings rate mechanics, wealth roadmaps, high-conviction accumulation playbooks.
   * **Example Chunk:** `"Clear, empowering finance mentor, calm, confident, and direct. Speaks with crisp, purposeful clarity, isolating the single mathematical lever."`

Keeping this 70% persona foundation identical across all chunks locks the model's text encoder into a stable, articulate YouTube video essayist register.

---

### **Part 2: The Delivery Register Modulation (Chunk Nuance)**
The second clause always opens with `"Speaks with..."` and modulates **only pacing, cadence, and delivery focus**—never character identity or volume.

* **Strict Ban on Shouting / High Volume:** Never use words like `loud`, `raised voice`, `shouting`, `screaming`, `booming`, or `explosive`. Neural TTS models simulate loudness by heavily compressing dynamic range and distorting high frequencies, producing abrasive digital clipping and tinny audio. Emotional intensity in documentary narration comes from **sub-surface tension, cadence, and restraint**, never volume.
* **Discourage Theatrical Character Acting:** Avoid roleplaying keywords like `charm`, `smirk`, `exasperated`, `panic`, or `suffocating tension`. The narrator is an intelligent insider talking across a desk, not a cartoon actor playing corporate executives or panicked victims.

---

## **Archetype Library (Delivery Register Modulations)**

Compose the second clause (`"Speaks with..."`) from these delivery modulations. Every instruction combines the Locked Persona Anchor with one restrained register shift:

**The Forensic Discovery** — primary-source filings, opening the financial trail
* *"...Speaks with calm curiosity, unhurried and articulate."*
* *"...Speaks with deliberate focus, as the significance of the numbers becomes clear."*
* *"...Speaks with quiet forensic clarity, letting the evidence land."*

**The Mechanical Breakdown** — unit economics, margins, cash flow autopsy
* *"...Speaks with steady, objective precision, explaining the math step by step."*
* *"...Speaks with unhurried analytical clarity, stripping away corporate spin."*
* *"...Speaks with cool, measured certainty, walking through the balance sheet."*

**The Understated Irony** — absurd corporate waste, hubris, reality checks
* *"...Speaks with dry, understated delivery, letting the facts do the work."*
* *"...Speaks with matter-of-fact observation, highlighting the absurdity without melodrama."*
* *"...Speaks with calm, deadpan restraint, the punchline already clear."*

**The Mounting Tension / The Bleed** — cash burn, structural cracks, slow collapse
* *"...Speaks with taut, low-register tension, deliberate and steady."*
* *"...Speaks with measured seriousness, watching the deficit widen in real time."*
* *"...Speaks with tight, unhurried restraint, the pattern now impossible to ignore."*

**The Reckoning & Legacy** — bankruptcy, aftermath, philosophical conclusion
* *"...Speaks with quiet, low-register weight, each word placed with care."*
* *"...Speaks with calm, unhurried perspective, letting the numbers land with matter-of-fact weight."*
* *"...Speaks with resolute, quiet finality, closing the analysis without melodrama."*

---

## **Anti-repetition rule**

Track the last 3 chunks' wording before composing the next one — if a specific phrase already appeared, use a different word from the same archetype's spirit rather than reaching for it again. If an archetype's own vocabulary feels exhausted within one script, that's a signal to invent a sibling archetype rather than repeat, not to loosen the rule.

---

## **Voice consistency (production note)**

Every chunk in this script generates via Controllable Cloning against the existing saved reference clip — there's no per-episode Voice Design step, since the voice is already locked from prior work rather than created fresh each time. Confirm the reference clip is clean, at least 5 seconds, before starting a batch. If a genuinely new voice is ever needed — a one-off character distinct from the recurring narrator — that's a separate Voice Design step done ahead of time to produce a new reference clip, not something that happens inline while generating an episode's chunks. If using the API rather than the web demo, fix the seed parameter across calls for additional reproducibility.

---

## **Output format — Strict JSON Array (`VOICE_DIRECTION_VOXCPM2.json`)**

VoxCPM2 automation engines ingest a clean, structured top-level JSON array of chunk objects saved directly to `voiceover/VOICE_DIRECTION_VOXCPM2.json` (and mirrored to `05_VOICE_DIRECTION.json` in the project root).

### JSON Schema & Example Structure:
```json
[
  {
    "chunk_id": 0,
    "control_instruction": "Conversational business explainer, clear and engaging. Speaks with calm curiosity, unhurried and articulate.",
    "target_text": "In January 2024, a solar panel manufacturer named First Solar quietly finalized a real estate purchase in Wood County, Ohio. The purchase price was thirty-three million dollars."
  },
  {
    "chunk_id": 1,
    "control_instruction": "Conversational business explainer, clear and engaging. Speaks with deliberate focus, as the physical scale becomes clear.",
    "target_text": "For that money, they didn't just get two hundred acres of prime industrial farmland. They got a 1 point 2 million square foot unfinished monolith of structural steel, poured concrete, and vacant assembly bays. Thirty-three million sounds like real money. Until you look at the company that poured the concrete."
  }
]
```

### JSON Generation Requirements:
1. **Top-Level Structure:** A pure JSON array `[...]` containing all sequential chunks in chronological order.
2. **`chunk_id`:** 0-indexed integer (`0`, `1`, `2`, ...).
3. **`control_instruction`:** Strict Two-Part Format: `"<Locked Persona Anchor>. Speaks with <Delivery Register Modulation>."` The Persona Anchor must remain 100% identical across all chunks of that video. Register modulations must focus on pacing, cadence, and quiet weight—never shouting or theatrical roleplay.
4. **`target_text`:** Clean spoken narration text containing approved inline vocal tags (`[sigh]`, `[laughing]`, `[Dissatisfaction]`, `[Uhm]`, etc.), written-out numbers where needed for natural vocal cadence, and **zero underscores** to prevent mispronunciation.
5. **Strict Decimal Normalization ("point", NEVER "dot"):** All decimal figures in `target_text` MUST explicitly use the phonetic word "point" (e.g. `1 point 2 million square foot`, `1 point 5 million`, `3 point 5 billion dollars`), never raw period decimals like `1.2` or `3.5`. TTS models will literally speak "one dot two" if given `1.2`. Any raw period decimal in `target_text` is an automatic failure and corrupt deliverable.

*(Optional Companion Markdown: The engine may also output `voiceover/VOICE_DIRECTION_VOXCPM2.md` containing human-readable chunk blocks and copy-paste API strings for manual spot-testing in the web demo).*

# **FinanceCraft — Idea Generation Prompt**

*Run this against the Master Tracker's Outlier Log, Coverage Map, Genre Trend Scan, and Ideas & Topics tabs — either automated via Skill 3 (which reads these tabs and this document directly through Spark's native Sheets/Docs connectors, no notebook involved) or manually by pasting the relevant tab data into any chat alongside this prompt. Without the Outlier Log or Genre Trend Scan populated, skip any instruction below that references outlier ratios or keyword volume — there's no data to reason from without them.*

---

You are ranking video ideas for a business/finance/fraud documentary channel. Cross-reference everything in the tabs above to find ideas that are underreported relative to genuine audience demand — not just topics nobody's made, but topics with proven appetite and a real gap.

## **Step 1 — Identify demand signals**

From the competitor performance data: which topics or story-types produced outlier videos (well above that channel's own baseline) across more than one of the tracked channels? A topic that outlier-performed for two different channels is a stronger demand signal than one that hit for only one.

## **Step 2 — Identify the gap**

Cross-reference those demand signals against what's actually been covered: has the specific story been done, or has only the *category* been proven (e.g., "accounting fraud stories perform well" without this specific case having been covered)? The second case is the real opportunity — proven appetite, unclaimed specific angle.

## **Step 3 — Check against primary sources**

For each surviving candidate, check the primary-source checklist: is there a real, findable primary-source trail (SEC filings, court records, investigation reports) that would let this be told with a genuinely new angle, not just a re-narration of the Wikipedia version? Deprioritize anything where you can't identify a plausible primary-source trail.

## **Step 4 — Exclude what's already spoken for**

Cross-reference the Ideas & Topics tab. Drop anything already scored, in production, on hold, or explicitly rejected there.

## **Step 5 — Rank and output**

Produce 4-5 ideas, ranked, each with:

1. **Story** — the specific idea, not just a category.  
2. **The angle** — one sentence on what would actually be new about this telling.  
3. **Why it will hit** — grounded in the specific evidence from Steps 1-3 (which competitor outliers support this, what the primary-source trail looks like). Not a vibes-based claim — cite what in the data actually supports it.  
4. **Content theme** — one of:  
   * *Caricature-driven* — a strong central real-person antagonist, accountability-tone story.  
   * *Map/data-driven* — the story is carried more by geography, financial mechanics, or timeline than by one character.  
   * *Mixed* — meaningful elements of both.  
5. **What's different from existing coverage** — the specific gap this fills, referencing what the competitor sources did or didn't do.

If fewer than 4 ideas survive Steps 1-4 with genuine evidence behind them, say so rather than padding the list — a shorter, well-supported list is more useful than a full one with weak justification on the last slot.

# **FinanceCraft — NotebookLM Cinematic Video & Prompt Guidelines**

*A standalone reference on NotebookLM's Video Overview (cinematic short-clip) feature, plus its broader research-chat prompting patterns. Not yet tied to our specific channels — that integration is a separate next step. One source for this file (learnwithmeai.com) returned a rate-limit error and isn't reflected below; worth a retry later.*

---

## **Two different capabilities, don't conflate them**

1. **Video Overview** — NotebookLM can generate a short animated/cinematic video from a notebook's sources, using a custom style prompt (accessed via the edit/pen icon on the Video Overview card, choosing "Custom" as the visual style). This is what the rest of this file mostly covers.  
2. **Chat-based research prompting** — separate from video generation entirely, this is about getting better analysis, summaries, and structured output from a notebook's source-grounded chat. Included as a bonus section below, since it's genuinely useful and complements — not replaces — our own Research Methodology.

Access and quality both vary by plan and region: generation limits (as few as 2 per 24 hours on some accounts), some animation styles being Ultra-only vs. available on Pro, and output quality reportedly varying a lot by subject matter — visually rich topics (history, physical objects) tend to render better than abstract ones (economics, pure numbers). Treat this as a real, current limitation, not a prompting failure, if a topic that's inherently abstract comes out flatter than one that's inherently visual.

---

## **What Video Overview is actually good at — and what it isn't**

Based on real hands-on testing, not just the tool's marketing: **Video Overview performs best on slow-changing or largely static backgrounds — graphs, data visualizations, a single evolving diagram — not fast-cutting, many-scene dramatic sequences.** This isn't a minor preference, it should drive which beats you ever route to this tool at all. A beat that's fundamentally a chart building up, a trend line evolving, or a single composition slowly revealing detail is a strong fit. A beat that needs several distinct scenes, quick cuts, or dramatic character action is a weak fit and better handled by Flow or Remotion instead.

**Three things are required to get a usable result, not optional extras:**

1. **Provide the actual visual assets you want used**, not just text sources. NotebookLM's Video Overview draws more reliably from what you explicitly hand it than from what it has to infer or generate unprompted.  
2. **Describe the theme in exhaustive detail and explicitly instruct it to adhere to that theme and to the uploaded sources** — a loose style suggestion gets a loose, generic result; a prompt that specifies the exact visual system (matching our own Style Bible's actual language) and explicitly says "adhere to this" gets something usable.  
3. **Describe the entire video end-to-end**, not just an opening style direction. This output has to get stitched into the same timeline as Flow clips, Remotion graphics, and static images — if the prompt only sets a mood and leaves the rest to the model, the result reads as a foreign element once it's cut in next to everything else. Walking through the full intended arc in the prompt is what keeps it from feeling out of place in the final edit.

---

## **The core principle underneath every good Video Overview prompt**

**Source integrity is non-negotiable, and this is stated explicitly in the best prompts of this kind:** work exclusively from the notebook's uploaded sources, and use NotebookLM's native citation linking for key data points. This is the exact same principle our own Research Methodology is built around — a Video Overview prompt should be seen as an extension of that discipline into a new output format, not an exception to it.

**"Attention is currency."** Every few seconds of screen time should either advance the story or clarify a concept — if a moment doesn't do one of those two things, it doesn't earn its place. This maps directly onto the same instinct behind our own beat-duration ceiling.

**Camera movement should mean something, not just look busy.** A zoom-in signals focus; a wide shot signals context; a fast pan signals a connection being drawn between two things. Prompting the model with *why* a movement happens, not just naming the movement, produces more purposeful results.

---

## **A reusable structure for a custom Video Overview prompt**

Built from what actually makes the strongest published examples work — not a literal script to paste, but the shape a strong prompt takes:

1. **Frame the request as direction, not description.** Ask the model to act as a director analyzing the sources for the core tension and the real "why," not just to illustrate the content literally.  
2. **Define a specific visual world for this content**, not a generic "make it look nice." Give it a name and a rationale — e.g., a data-heavy financial topic might call for a fast-paced "global grid" look (data streams, satellite transitions, mechanical score); a biological or process-based topic might call for a macro/micro look (extreme close detail, slow fluid motion). The point is committing to one coherent visual identity, not leaving it to default.  
3. **Specify the look concretely:** a primary color palette (tie colors to an emotional register, not just aesthetics), one accent color reserved for "aha" moments specifically, a lighting/texture mood (high-contrast vs. soft vs. industrial), and a sonic identity (tempo, instrument family, ambient room tone).  
4. **Name what to avoid, explicitly.** The strongest prompts include a "don't do this" list: no static talking-head shots held too long, no generic uplifting stock-music feel, no walls of scrolling text (text should be a graphic element integrated into the scene, not overlaid on top of it), no literal verbal transitions ("and now we move to..."), no empty buzzwords without a visual demonstration backing them up.  
5. **Set a small number of firm narrative rules** rather than leaving pacing to chance — e.g., a rule that visual interest must meaningfully change on a short, fixed cadence to hold attention, and a "show, don't tell" rule that a stated percentage or scale gets an actual visual representation, not just an on-screen number.  
6. **Ask for a genuine scene-by-scene breakdown**, not a vague treatment — each scene with its own duration, what's on screen, how the camera moves and why, minimal on-screen text, and (critically) a citation link back to the specific source material that scene is drawn from.

---

## **Five distinct visual-world templates worth having on hand**

**Given the slow-changing-background constraint above, these aren't equally viable in practice.** The data-reveal spotlight and the timeline journey are naturally suited to this tool — both are built around one evolving visual (a number, a path) rather than many discrete scenes. The exaggerated explainer and the kinetic-typography argument lean on quick zooms, fast cuts, and rapid scene changes that work against what this tool actually does well — treat those two as better fits for Flow or Remotion, not Video Overview. The step-by-step progression sits in between: fine if each step is one slowly-building visual, weaker if it's cutting between many distinct scenes per step.

Rather than reinventing a "world" from scratch every time, these are five genuinely different, reusable identities — pick whichever fits the source material's actual content, or use them as a starting point to build a sixth of your own:

**1\. The exaggerated explainer** — bold outlines, saturated color, exaggerated reactions, and a slightly chaotic on-screen presence trying hard to make one difficult idea land. Built around a single core idea, not a summary of everything — open on a visual problem, introduce the idea in one plain sentence, use diagrams and labels to explain the mechanism, show one concrete example, then resolve the opening problem. Works well for one clear, explainable mechanism buried in dense material.

**2\. The step-by-step progression** — dramatic angles, glowing directional arrows, and a clear sense of forward movement, framing the content as a process to be mastered rather than a list to be read. Each step connects visibly to the one before it; a wrong turn briefly flags itself before the correct path locks into place; the ending shows the whole process as one completed map. Works well for anything with a genuine sequence or dependency chain.

**3\. The data-reveal spotlight** — built entirely around the single most important number or comparison in the material, presented like a score to beat rather than a statistic to read. Opens on a dramatic number reveal in the first few seconds, explains what it measures in plain language, shows the comparison or trend behind it, and closes on a final "scoreboard" restating the takeaway. Works well when one number or comparison genuinely carries the whole story.

**4\. The kinetic-typography argument** — driven by animated words and simple shapes rather than static slides, structured like a visual argument: one bold opening sentence capturing the core tension, then a contrast between the common misconception and what the source material actually shows, building to one final takeaway line that fills the screen. Works well for correcting a widely-held misconception.

**5\. The timeline journey** — a moving path through key moments in chronological or causal order, each turning point marked distinctly, with an honest "sequence unknown" placeholder rather than inventing a date the sources don't support. Opens on "how did we get here," moves through each major turning point, and ends by zooming out to the full timeline. Works well for anything with real historical or causal progression — which describes a meaningful share of what we actually cover.

All five share the same non-negotiable constraint: work only from what the sources actually contain. None of them license inventing a fact, a date, or a number to fit the visual style — the style is a lens on the material, not permission to embellish it.

---

## **Bonus: general NotebookLM chat-prompting patterns worth knowing**

These operate on the regular chat (or Audio Overview customize box, where noted), not Video Overview — useful as complementary tools to our own Research Methodology, not a replacement for its phased process.

* **"Essential questions" framing** — asking the notebook to generate the handful of questions that, once answered, capture the core meaning of the sources tends to produce sharper structure than asking for a summary outright.  
* **"Most surprising or interesting" framing** — pointed at finding the "wow" detail in dense source material rather than a keyword search; genuinely different from and complementary to our own Phase 3 narrative-mining prompts, which already do a version of this.  
* **Persona framing** — asking the notebook to adopt a specific professional lens (an objective researcher focused on methodology and contradictions, or a plain-language teacher who must supply an analogy and define hard terms) changes what it prioritizes, not just its tone.  
* **Debate format** — for the Audio Overview customize box specifically: asking for two hosts arguing opposing, source-cited positions on a genuinely contested point, letting the listener judge which case is stronger. Useful for surfacing a real disagreement in the source material without flattening it into a false consensus.  
* **Explicit contradiction-finding** — directly asking the notebook to surface where sources disagree, with the specific claim from each side and a possible reason for the disagreement, rather than assuming any summary would have already caught it.

The common thread across all of these: specific, structured asks that request citations and force acknowledgment of gaps consistently outperform an open-ended "summarize this" — the same lesson our own Research Methodology is already built around, just phrased for a chat interface instead of a phased document.

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
2. **`map-explainer`**: 2D geographic explainer maps with MapTiler vector layers, electric draw-heads, and sequenced regional blooms.
3. **`3d-flyover`**: 3D cinematic aerial terrain and city flyovers using CesiumJS with Chaikin curved-path smoothing.

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
3. **Visible Source Immediately Below Header:** Positioned directly under the title card (e.g., `Source: SEC Form 10-K, FY2019–FY2023`) — never hidden in a tiny footer.
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
      <p style={{ fontSize: 20, color: '#64748B', marginTop: 8 }}>Source: SEC Form 10-K FY2020–FY2022 • Constant Dollars Per Bike</p>
      {/* Chart Canvas & SVG Elements driven by progress values */}
    </div>
  );
};
```

---

### **Skill 2: 2D Geographic Explainer Maps (`map-explainer`)**

Use this skill for flat investigative geographic explainers: showing where an industrial site is located, tracing a global supply chain or maritime route, or visualizing jurisdictional regulatory actions in sequence.

#### 1. Three-Layer Architecture
| Layer | Framework | Technical Responsibility |
| :--- | :--- | :--- |
| **Layer 1: MapTiler SDK** | `@maptiler/sdk` | Draws basemap vector canvas plus MapTiler Planet layers and GeoJSON into WebGL. Default styled-vector: `MapStyle.BASIC` (or satellite for physical site evidence). Gated with `delayRender` until `map.once('idle')`. `--gl=angle`, `preserveDrawingBuffer: true`. |
| **Layer 2: Remotion Harness** | Remotion Engine | Frame-by-frame controller. Imperatively updates `setData`/`setPaintProperty`. Live camera used **only** for static shots; fixed map plate used for camera motion. |
| **Layer 3: React HTML Overlay** | React DOM `<div>` | Country, port, and factory facility labels. Positioned each frame via `map.project(lngLat)`. Gives complete typography and animation control without MapLibre symbol clipping. |

#### 2. Motion Stability: The Fixed Map Plate Rule
> [!CAUTION]
> **Never call `map.jumpTo()` on every Remotion frame when moving the camera.**
> In headless video capture, per-frame camera jumps cause MapTiler hillshade and satellite imagery to shimmer and jitter due to renderer tile resampling.
> * For camera pans or zooms across geography: Render the map at a high-resolution fixed canvas plate (e.g. 1.5×–2× viewport) and apply camera pan/zoom smoothly via Remotion's React/CSS layer.
> * Use live MapTiler camera moves only for completely static shots.
> * Always render with `npx remotion render ... --gl=angle --timeout=120000`.

#### 3. Visual Semantics & Reveal Logic
* **Supply Routes / Maritime Paths:** Traced via `turf.lineSliceAlong(line, 0, lineKm * reveal)` per frame, led by a **white-hot electric draw-head** (bright core + outer glow layer) that fades at arrival.
* **Regional / Territorial Blooms:** When a route enters a jurisdiction, trigger a sequence: **Border draw (2.5s) $\to$ Fill bloom (slight opacity overshoot) $\to$ Label rises**.
* **Labels:** Uppercase, high-contrast display text with an accent line. Placed in open space, never obscuring the route or marker pin.

---

### **Skill 3: 3D Cinematic Globe & Terrain Flyovers (`3d-flyover`)**

Use CesiumJS with Remotion for cinematic aerial movement through landscapes, terrain, shipping corridors, or corporate headquarters.

#### 1. Operating Modes
* **`landscape` Mode:** MapTiler `terrain-quantized-mesh-v2` + `satellite-v2`. Used for mountains, rural factory sites (e.g. Wood County, Ohio flatlands), ports, and geographical routes. Requires `REMOTION_MAPTILER_KEY`.
* **`city` Mode:** Google Photorealistic 3D Tiles. Used for dense urban environments, corporate towers, and landmarks. Requires `REMOTION_GOOGLE_MAPS_API_KEY`. (Promotional/educational editorial rules apply; attribution must remain visible).

#### 2. Camera Mechanics & Chaikin Path Smoothing
* Input route provided as sparse control coordinates `[longitude, latitude, altitude][]`.
* Apply **Chaikin corner cutting** (3 passes) to transform straight-then-turn waypoints into a continuous, swerving flight path.
* **Ground Speed & Banking:** Camera walks the smoothed curve by arc length for constant ground velocity. Aim camera at a point ahead on the curve, deriving roll from look-ahead bearing change so the camera banks naturally into turns.

#### 3. Deterministic Remotion Harness
```bash
npx remotion render src/index.ts <CompositionName> out.mp4 --gl=angle --concurrency=1 --timeout=180000
```
* Set `viewer.useDefaultRenderLoop = false`.
* Call `viewer.render()` (never `scene.render()`) during frame settle passes.
* Gate initialization and every frame with `delayRender`.
* Settle landscape on `globe.tilesLoaded` and city on `tileset.tilesLoaded`.

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
