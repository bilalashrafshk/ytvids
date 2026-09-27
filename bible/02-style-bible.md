<!-- Part of the FinanceCraft Channel Bible. Index: ../FinanceCraft — Channel Bible, Asset Guide & Description.md -->

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

A distinct sub-series for invented scenarios followed with real reasoning — not a documented case. The premise sets the scope: a world-changing premise explores the whole changed world (with money as one lens among several); a personal premise follows one person. It is never a disguised lesson in one financial mechanic. This covers both a relatable everyday-money scenario (a mortgage, a loan) and a deliberately absurd premise (stranded on an island with $10M of luxury goods) explored with real economic reasoning — the premise can be absurd; the reasoning under it can't be. It must never be mistaken for a documented episode.

**The inversion, stated plainly:** everywhere the main Style Bible says real names, real sourcing, real caricatures — this sub-series does the opposite. Invented people, invented companies, a verified-accurate underlying mechanic instead of a primary-source trail. Nothing here overrides the parent rules for documented episodes; it's a separate, clearly-marked lane.

**Visual signal — layered, so no single missed cue causes confusion:**
- **A signature lavender/violet accent color** that appears nowhere else in the channel's palette system, used for the badge overlay and sub-series graphics. (No opening bumper — episodes open cold on the hook, same as the main show.)
- **A persistent badge overlay** — a clean illustrated label graphic reading "HYPOTHETICAL SCENARIO," in the same lavender accent, reappearing every 2-3 minutes throughout the episode, not just at the open. A one-time disclaimer is exactly what a clipped or re-uploaded segment loses; a recurring one isn't.
- **Composite characters get a deliberately generic, archetypal design** — no specific distinguishing features the way a real-person caricature has. This is a design rule, not just a legal one: it should read as a stand-in, not as anyone in particular.

**Absolute rule: invented names only.** People, companies, banks, anything named — all invented, never real entities even loosely disguised. Round, realistic numbers are fine and expected since accuracy to the underlying mechanic matters — but they attach to invented people and invented companies, never to a real one.

**What still carries over from the main system:** the clean illustrated register, the palette modulation principle, compositional simplicity, the text-generation rules, and the engagement craft from the Script Generator. This is a different content mode, not a different production system.

**Titles must signal fiction.** Three of the five Episode 03 candidates read as real reporting — "Broke Real Cargo," "Starved 6,000 Companies," "How Ad Auctions Replaced the Economy." Past tense, no hedge. The sub-series has a lavender palette, its own bumper, and an on-screen watermark to mark it as invented; a documentary-voiced title undoes all of it before playback, on the one asset that reaches people who never watch. Required: "What If," "POV," "Imagine," or a question mark. The benchmark does this — *POV: You Have $1 Trillion (But Only 7 Days To Spend It)*.

**Descriptions run through `gate_check.py` too.** The Episode 03 description failed all seven gates — jargon 41.7 against a ceiling of 4.0, mean sentence 24 words. Compare the benchmark: *"A theater keeps almost nothing from your $15 movie ticket. So how does the business actually survive?"*

**Packaging locks to one draft.** Episode 03's package mixed Draft A's -$18,400 burn with Draft B's $275/day demurrage, advertising a figure that doesn't appear in the recommended script — and one whose arithmetic was already known to be broken.
