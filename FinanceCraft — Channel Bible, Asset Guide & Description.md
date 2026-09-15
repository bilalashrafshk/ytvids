# **FinanceCraft — Channel Production Bible & Asset Guide**

*Working reference for tone, visual system, production rules, and brand assets.*

## **1\. Channel Assets**

| Asset Type | Reference Link | Design Description |
| :---- | :---- | :---- |
| **Channel Icon** | In google doc | Minimalist, high-contrast diorama featuring a dark circular map-frame enclosing a fractured emerald-green corporate building node with a bold diagonal red downward indicator arrow. |
| **Channel Banner** | In google doc | Layered paper diorama background featuring an illustrated bespectacled executive caricature, forensic investigation desk with crime maps and SEC filings, corporate network nodes, and a tactile "SUBSCRIBE" paper button. |

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

> * **Niche:** Business and finance documentaries—corporate fraud, scandal, rise-and-fall stories, and hidden corporate/financial history. Semi-faceless with Margery's avatar clips bridging segments.  
> * **Core Promise:** Stories people are interested in but haven't heard, or haven't heard told this way—sourced from primary documents (SEC filings, court records, congressional transcripts), avoiding overdone stories like Enron, Theranos, or FTX.  
> * **Positioning:** Sits alongside creators like ColdFusion, MagnatesMedia, and Wendover Productions, but niched down strictly to fraud, scandal, and hidden history with primary-source rigor as the differentiator.

## **4\. Visual System & Palette Rules**

> * **Primary Register:** Illustrated paper-cutout puppet/diorama world. Layered cut-paper shapes, torn edges, visible paper-fiber grain, and soft drop shadows between layers.  
> * **The One Exception:** Real evidence as physical props. Real screenshots, documents, and filings appear as literal paper objects glued or taped into the collage—never as an AI recreation or digital photo cut.  
> * **Color Palette & Modulation:** Base palette is vibrant and saturated. Modulation is mandatory:  
  * *Accountability stories:* Full vibrant palette, cooling down only at the downfall/consequence beat.  
  * *Tragedy / loss of life:* Desaturated from the outset (dusty rose, slate-grey, charcoal-rust). Zero celebratory color grading.

## **5\. Caricature & Legal Guardrails**

> 1. **Illustrated caricature only:** Never photoreal. Exempt from synthetic content disclosure triggers and minimizes likeness/legal risk.  
> 2. **Fixed Reference Blocks:** Lock a fixed reference block per recurring person, generated once with a locked seed/reference image and reused across all shots.  
> 3. **Accountability Only:** Caricatures are strictly for wrongdoers facing consequences. Victims, crew, or tragedy figures use anonymized silhouettes with factual labels.  
> 4. **Zero Scripted/Lip-Synced Dialogue:** Visual staging and gestures only. Attributed quotes must be presented on on-screen quote cards, never synced to caricature mouth movement.  
> 5. **Care for Active Cases:** Living public figures in active legal proceedings require significantly more cautious framing and staging than closed/historical cases.

## **6\. Production Workflow & Map Guidelines**

> * **Stills as Foundation:** Use static AI stills with CapCut manual pan/zoom and layered parallax as default choices for scene-setting depth without drift risk.  
> * **Maps:** Always start from a real reference map and style it into the paper look using design tools. Never let AI generate raw geography.  
> * **Post-Production Typography:** Generate paper props blank to avoid AI spelling errors; add real text (stamped/stenciled fonts) in post-production.

# **FinanceCraft — Research Methodology (for NotebookLM)**

*Goal: consistently surface genuinely new angles and details on stories that have often been covered before — verified, and dramatic enough to narrate. Built around how NotebookLM actually works, not around it as a generic search engine.*

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

## **1\. Channel Identity**

**Niche:** Business and finance documentary — corporate fraud, scandal, rise-and-fall stories, and hidden corporate/financial history. Semi-faceless: narrated, with Margery's avatar clips bridging segments.

**The core promise:** stories people are interested in but haven't heard, or haven't heard told this way — sourced from primary documents (SEC filings, court records, congressional transcripts), not retreads of Enron/Theranos/FTX-level stories everyone's already made.

**Positioning:** same genre neighborhood as ColdFusion, MagnatesMedia, Wendover Productions — niched down specifically to fraud/scandal/hidden-history with primary-source rigor as the differentiator, not volume.

---

## **2\. Visual System — One Register, One Exception**

**Primary register: illustrated paper-cutout puppet/diorama world.** Layered cut-paper shapes, torn edges, visible paper-fiber grain, soft drop shadows between layers. This is the look for *everything* — characters, interiors, maps, symbolic objects.

**The one sanctioned exception: real evidence as physical props.** Real screenshots, documents, and filings appear as literal paper objects glued or taped into the collage — never as a photo cut jarringly into the illustration, and never as an AI-generated recreation of a real document.

**Retired, not repeated:** stock photography mixed with paper animation (episode 1 — didn't work, two visual registers colliding). Flat-lay evidence-board collage (tried once for a specific episode — filed as a one-off, not a second parallel system). If either comes back, it comes back as a deliberate, narrow role — not a general-purpose look running alongside the puppet world.

**Compositional simplicity beats density.** One clear focal point per scene, minimal supporting elements, generous negative space. A frame crowded with several things competing for attention reads as busier and, somewhat counterintuitively, more generic-AI-coded than a restrained one — density is easy to generate, restraint takes a deliberate choice. If a beat's prompt describes more than two or three distinct elements, cut it down before generating rather than after.

**Lean toward recurring settings over a new one-off environment every beat.** Within one narrative sequence, the setting shouldn't shift without a story reason — a Continuity Dependency gap should be the exception, not something that happens by accident. Across a full episode, establish one or two recurring "home base" settings (Margery's office, a fixed evidence desk) the story returns to between excursions to new places — that gives the episode a rhythm of anchor-and-departure instead of a constant stream of unrelated new environments. This isn't a mandate to flatten every location into the same room: real, specific places (the factory floor, the courtroom, the NASDAQ tower) carry genuine documentary credibility and shouldn't be sacrificed for coherence's sake. The actual fix is reducing how many *never-repeated* environments an episode introduces, not reducing geographic specificity where the story needs it.

---

## **3\. Color Palette**

**Base: vibrant, but not maximally saturated — lean lighter.** Still a colorful register, not the original muted sepia-navy concept — saturated color reads as intentional craft (see: Kurzgesagt) rather than cheap, and performs better in thumbnails. But pull back from the most intense saturation extremes: a lighter, less crowded execution of vibrant reads cleaner and more premium than one pushed to the maximum, and it pairs with the compositional-simplicity principle above — a few light, well-chosen colors in a simple frame beats many saturated ones competing at once.

**Modulation is mandatory, not optional.** The palette must be able to desaturate and cool down for heavy or tragic beats. A uniformly saturated palette across a 10-minute video — regardless of subject matter — starts to feel tonally flat or, worse, inappropriately upbeat for the story.

* **Accountability stories** (fraud, scandal, a wrongdoer facing consequences): full vibrant palette, cooling only at the downfall/consequence beat.  
* **Tragedy / loss of life** (e.g., the PIA crash treatment): desaturated from the outset — dusty rose, slate-grey, charcoal-rust. No bright or celebratory color grading at any point.

**Never name a real brand's color as a reference** (the "Vox highlighter yellow" lesson). Describe the actual color — hex code or a generic descriptor. Naming a competitor's signature color both erodes differentiation and risks the model reproducing their actual brand identifiers.

---

## **4\. Caricature Rules for Real People**

This is the highest-stakes part of the system. Follow it exactly.

1. **Illustrated caricature only — never photoreal.** Illustrated/stylized content that doesn't resemble real footage is exempt from YouTube's synthetic-content disclosure trigger and sidesteps likeness/legal risk. Photoreal AI depiction of a real person is off the table entirely.  
2. **Lock a fixed reference block per recurring person** (e.g. `[MALIK RIAZ fixed reference block]`), generated once with a locked seed/reference image, reused across every shot they appear in. This is one single pose at one single angle — never call it or generate it as a "character sheet" or "reference sheet," which specifically means a multi-angle turnaround in illustration convention and will produce one if either term reaches an image model.  
3. **Caricature is for accountability content only** — someone facing consequences for wrongdoing. It is **not** for victims, crew, or anyone in a tragedy. Tragedy content uses the same anonymized-silhouette-plus-factual-label treatment established in episode 1 (Coldcard Hack) — no face, real or illustrated.  
4. **Never script or lip-sync dialogue for a real person's caricature.** Visual staging (sitting, gesturing, a gavel falling) is fine; putting invented words in a real person's mouth is not — this holds regardless of illustration style, and matters more for living, active public figures than for closed cases. If a real quote is needed, present it as an attributed on-screen quote card, not spoken caricature dialogue. "Talking" beats get a generic mid-speech gesture with narration VO carrying the content, not synced words.  
5. **Weigh living/active figures more cautiously than closed/deceased cases.** A convicted fraudster in a closed case (Ebbers) carries less risk than a living public figure with active legal proceedings (Malik Riaz) — extra care on staging and framing scales with that.

---

## **5\. Production Technique Menu**

Not every shot needs full AI video generation — most of the runtime shouldn't.

| Technique | Use for | Notes |
| ----- | ----- | ----- |
| **Static AI stills** (Nano Banana) | Most shots, symbolic objects, quote cards | No camera/motion/audio language in the prompt — full composition locked in one frame |
| **CapCut manual pan/zoom** on one still | Establishing shots, maps, diorama wides | Default choice — zero drift risk, cheapest, best accuracy guarantee for maps |
| **Manual layered parallax** (separate transparent layers, keyframed at different speeds in CapCut) | Scene-setting depth without AI video cost | The actual historical paper-animation technique, done digitally |
| **Image-to-Video** (one reference) | Simple ambient motion off an approved still (grain flutter, subtle drift) | No target end-state needed |
| **Frames-to-Video** (two references, both pre-approved stills) | Any beat involving a real person's caricature, or anywhere design consistency matters | Anchors both ends so the model isn't improvising — primary technique for character work |
| **Extend** (last-frame continuation) | Stretching a shot's duration, chaining establishing shots | Drift risk compounds with repeated use — spot-check after every extend; avoid for character-consistency-critical beats |

---

## **6\. Maps**

* Always start from a real reference map, styled into the paper look via a design tool (Illustrator/Figma, or a Nano Banana edit of a traced real map) — never let the video model generate geography from a text prompt alone.  
* The flat, accuracy-critical map gets camera/lift motion only — no redrawing.  
* Once the shot transitions into an artistic diorama interpretation, accuracy constraints relax — it's now representational, not a factual map claim.

---

## **7\. Text & Typography**

* **Default:** text lives inside the paper world as a physical object — a stamped nameplate, a torn label strip, a taped note, a marker annotation. Never a clean sans-serif overlay — that's the single most recognizable "faceless explainer" tell.  
* **AI can't reliably spell longer text, and paper props need style consistency regardless.** For any paper prop (nameplate, stamp, label), still generate it *blank*, then add real text in post (CapCut/Premiere) styled to match — stamped or stenciled font, paper-grain texture, slight tilt. This isn't only about spelling anymore — Nano Banana 2 handles short text (1-8 words) with high accuracy — it's about every stamped label in the series looking like it came from the same hand, which stays safer to control in post. Native digital displays (a ticker, a screen readout) are the one exception: short text there can be requested directly, verified against what was asked for before accepting the output. Full sentences or paragraphs, on any surface, still need the generate-blank-add-in-post treatment — longer text remains unreliable.  
* **Utility exceptions** (chapter cards, running totals) can use a real motion-graphics layer, but skin it to match: cardstock background, stamped/hand-lettered type — never a clean flat digital box.

---

## **8\. Standing Negative Prompts**

Append the relevant block to every generation:

**Any real-person caricature beat:** `photorealism, real face, real skin texture, exact facial likeness, 3D render, smooth CG shading, synced dialogue, lip-sync to specific words`

**Any vibrant-palette beat:** `glossy vector-flat look, generic cartoon mascot style`

**Any map beat:** `redrawn borders, invented geography, distorted coastline or border shapes, illegible or shifting text, photorealistic satellite texture`

**General:** never reference a real brand's name, logo, or signature color as a style anchor.

---

## **9\. Editorial Guardrails**

* Naming real companies/executives requires rigorous sourcing (SEC filings, court records, primary documents) — this niche carries more defamation exposure than mystery/history content.  
* Real screenshots and documents are editorial proof-inserts, never AI-recreated.  
* Stories involving loss of life get the anonymized-silhouette treatment for real individuals (never caricature) and the desaturated palette, regardless of what the channel's default look is elsewhere.

---

## **10\. "The Hypothetical" — Illustrative Scenario Sub-Series**

A distinct sub-series for content that teaches a real financial or business mechanic through an invented, illustrative scenario — not a documented case. This exists because some concepts (amortization math, how a business model actually works) are better taught through a relatable constructed example than forced into the "untold real story" format the main show requires. It must never be mistaken for a documented episode, and every rule below exists to make that mistake structurally hard to make, not just discouraged.

**The inversion, stated plainly:** everywhere the main Style Bible says real names, real sourcing, real caricatures — this sub-series does the opposite. Invented people, invented companies, a verified-accurate underlying mechanic instead of a primary-source trail. Nothing here overrides the parent rules for documented episodes; it's a separate, clearly-marked lane.

**Visual signal — layered, so no single missed cue causes confusion:**

* **A dedicated cold-open bumper**, distinct from the main show's, branded "The Hypothetical," using a signature lavender/violet accent color that appears nowhere else in the channel's palette system — its exclusivity to this sub-series is the point.  
* **A persistent stamped watermark** — a paper rubber-stamp mark reading "HYPOTHETICAL SCENARIO" in the same lavender accent — reappearing every 2-3 minutes throughout the episode, not just at the open. A one-time disclaimer is exactly what a clipped, re-uploaded, or mid-watched segment loses; a recurring one isn't.  
* **Composite characters get a deliberately generic, archetypal design** — no specific distinguishing features the way a real-person caricature has (compare Ebbers' "heavy brow, jutting jaw" — a specific likeness — to a generic "young professional couple" with no individuating features). This is a design rule, not just a legal one: it should look like a stand-in, not like anyone in particular.

**Absolute rule: invented names only.** People, companies, banks, anything named — all invented, never real entities even loosely disguised. Round, realistic numbers are fine and expected (interest rates, loan terms, price points) since accuracy to the underlying mechanic matters — but they attach to invented people and invented companies, never to a real one.

**What still carries over from the main system:** the paper-cutout visual register, the palette modulation principle, compositional simplicity, the text-generation rules, and the engagement craft (rhetorical questions, emphasis-through-isolation) from the Script Generator. This is a different content mode, not a different production system.

# **FinanceCraft — Script Generation Prompt**

*Feed this prompt, along with a completed Research Brief, to generate the narration script. Attach the Style Bible too — the caricature and editorial rules apply while writing, not just while producing visuals.*

---

You are writing the narration script for a FinanceCraft episode. You'll be given a completed Research Brief. Your job is to turn it into a complete, genuinely captivating script — the goal is a viewer thinking "I did not expect this story to go here," not a dry recitation of verified facts in order. Write with full awareness that every beat will later become a specific visual asset — you're not writing in a vacuum.

## **Inputs needed**

* The full Research Brief (angle statement, verified facts, key figures, timeline, gap list, narrative-mining highlights, showable assets, pivotal detail, open questions, visual-asset flags)  
* Target runtime in minutes — if not given, assume 12-15 minutes (\~1,900-2,300 words at \~155 words/minute documentary pace)

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
* No unexplained jargon. If a technical or financial term is genuinely necessary (a covenant, a write-down, gross margin), define it in plain language the moment it first appears rather than assuming the audience already knows it — a documentary that has to be paused and looked up has already lost the viewer. This isn't about dumbing down the story; it's about never making the audience feel like they walked in without the prerequisite.  
* Use genuine rhetorical questions as a pacing device, not just narration statements. Pose a question the audience is likely already wondering, then answer it in the sentences that follow — "why did the cash burn accelerate as production scaled up?" reads as a person thinking out loud, not a lecture. Don't overuse this; a few well-placed questions per script, not one per paragraph.  
* For a single hard-hitting number or fact, isolate it in its own short sentence rather than burying it in a longer one, or use a corrective restatement — state a plausible-sounding wrong scale first, then correct it with the real figure ("not months — years"). This is how spoken emphasis actually lands; adjectives and intensifiers ("shockingly," "incredibly") do this job far less effectively than sentence structure does.

  ## **Step 4 — Tag asset-relevant moments inline**

As you write, insert bracket tags at points needing specific treatment later — don't write full shot descriptions, just flag them:

* `[SHOWABLE: <what it is, from the Research Brief's Showable Assets>]`  
* `[PIVOTAL]` at the Pivotal Detail's placement  
* `[MAP]` wherever geography needs showing  
* `[CARICATURE: <name>]` at any beat centering a real person  
* `[DATA]` wherever a number or statistic would benefit from an on-screen visual

Every Showable Asset and the Pivotal Detail from the Research Brief must be tagged somewhere — these tags are the handoff points for the production document stage.

Also tag delivery/energy shifts for the narrator — `[TENSE]`, `[WRY]`, `[SOMBER]`, `[BUILDING]`, or similar — wherever the performance should shift noticeably. These aren't asset handoffs; they're for whoever records or generates the voiceover, so energy doesn't stay flat for the whole runtime.

## **Step 5 — Close and hand off**

End on a thematic or reflective button. Don't write the subscribe/sign-off CTA — that's a standardized block added separately at the production stage, not part of the story itself.

## **Output format**

1. Chosen structure \+ one-sentence rationale  
2. The full narration script, natural paragraph breaks matching spoken pacing, with inline tags  
3. Word count and estimated runtime at 155 wpm  
1. &nbsp;

   # **FinanceCraft — "The Hypothetical" Script Generator**

*A parallel path to the main Script Generator, for the illustrative-scenario sub-series only. Do not use this for documented-case episodes — it explicitly permits invented characters and scenarios, which the main Script Generator forbids. Attach a Concept Brief instead of a Research Brief.*

---

## **Concept Brief — what you need before starting, instead of a Research Brief**

* **The mechanic being taught** — one sentence: the real financial or business principle this episode illustrates (e.g., "extra principal payments reduce total loan interest disproportionately, because early payments are mostly interest under standard amortization").  
* **Real-world reference figures** — typical interest rates, loan terms, price points, timelines — realistic numbers to ground the invented scenario, verified accurate to how the mechanic actually works. This is the one piece of "research" this format needs: confirm the math or mechanism is genuinely correct, not sourced to a specific case.  
* **The angle** — what's counter-intuitive or underappreciated about this mechanic that makes it worth a full episode.  
* **The takeaway** — what a viewer should understand or feel by the end.

  ## **Step 1 — Pick a structure, and say which one**

The chronological personal-journey structure is the strongest default for this format — following one invented person or household through a multi-year arc tends to make abstract math feel concrete. But the same menu from the main Script Generator is available if a different shape genuinely fits better (thematic, parallel-characters comparing two invented paths, reverse chronology from the end state backward). State the choice and one sentence of reasoning.

## **Step 2 — Build the hook**

Same techniques as the main show — a specific number, a direct address, an unresolved question, a flash-forward to the end state — but direct second-person address ("you") is a strong default here in a way it isn't for documented cases, since there's no real person's actual experience being claimed. Draft this last, after Step 3, same as the main Script Generator.

## **Step 3 — Write the full narration**

* **Invented names only — people, companies, banks, everything.** Never a real entity, never a near-miss that could be mistaken for one.  
* **The underlying mechanic must be accurate.** Every number in the scenario should be internally consistent and true to how the real mechanic works — the story is invented, the math is not.  
* Build one or two invented characters with enough specific, sensory detail to feel real — a recurring visual motif (a whiteboard, a specific object) gives the Guided Production Document something concrete to anchor beats to.  
* Direct address to the viewer ("you") can carry the whole narration if the personal-journey structure is used — this is the one structural choice that flips from the main show's rule, where a documentary voice narrates about someone else, not as someone else.  
* Reuse the engagement craft from the main Script Generator: genuine rhetorical questions posed and then answered, and emphasis-through-isolation for a key number rather than relying on intensifying adjectives.  
* Vary pacing deliberately, same as the main show — near-stillness beats, segment transitions that pull forward rather than trail off, a cutting pass once a full draft exists, and a read-aloud check for spoken delivery.

  ## **Step 4 — Tag asset-relevant moments inline**

Same tagging system as the main Script Generator, with one difference: there is no `[CARICATURE: <name>]` tag here, since there's no real person to lock a likeness to. Use `[COMPOSITE: <role>]` instead (e.g., `[COMPOSITE: the couple]`, `[COMPOSITE: the neighbor]`) — this signals the Guided Production Document to use the generic, archetypal design rule from the Style Bible rather than a locked caricature reference block. `[SHOWABLE]`, `[MAP]`, `[DATA]`, `[PIVOTAL]`, and the delivery tags (`[TENSE]`, `[WRY]`, etc.) all carry over unchanged.

Also tag where the recurring `[WATERMARK]` reminder falls — roughly every 2-3 minutes — so the Guided Production Document knows where to place the "HYPOTHETICAL SCENARIO" stamp per the Style Bible's visual-signal requirement. This is not optional and should never be left for the production stage to notice on its own.

## **Step 5 — Close and hand off**

End on the takeaway from the Concept Brief, stated through the story rather than tacked on as a lesson. Don't write the subscribe/sign-off CTA — same standardized block as the main show, though note the Guided Production Document uses this sub-series' own bumper and watermark, not the main show's standing assets.

## **Output format**

1. Chosen structure \+ one-sentence rationale  
2. The full narration script, tagged, with the mechanic's key numbers verified internally consistent  
3. Word count and estimated runtime at 155 wpm  

# **FinanceCraft — Guided Production Document Generator**

*Feed this prompt, along with a tagged script (from the Script Generation prompt) and the Style Bible, to generate the full production document. The end user is technically capable — comfortable with code, logic, and running AI tools — but has no traditional video-editing or visual-design background, and no creative/production training. Leave no visual, creative, or tool-usage judgment to guesswork.*

---

## **Phased Generation Protocol — follow in strict order, one deliverable per phase**

This document is generated in phases, never all at once. Attempting research, titles, thumbnails, beats, and assembly simultaneously produces worse output at every stage than doing each one with full attention. Treat every phase below as a complete, standalone deliverable. Output only that phase, then stop and wait for confirmation before starting the next.

1. **Titles & Description**  
2. **Thumbnail Concepts**  
3. **Character Setup**  
4. **Beat-by-Beat Generation** (Part A body)  
5. **Consolidated Batches** (Part A's grouped-by-type execution deliverable)  
6. **Shorts Spinoffs** (optional, additional to the core episode) — 3-4 vertical short-form pieces derived from the same script and reusing the same assets, generated via NotebookLM Video Overview specifically.  
7. **Part B — Editing & Assembly** — a fully separate deliverable, only generated once every file from Phases 1-5's batches actually exists. Never bundled into the same output as Part A, never generated early.

---

## **Video technical spec — every asset must match this**

**Final output: 1920×1080, 16:9, 30fps.** This is what Remotion renders at, what AI video clips are generated at (request this aspect ratio explicitly in every video prompt), and what the CapCut timeline is built at.

**Static images are the one deliberate exception — generate at 3840×2160 (4K) or higher, same 16:9 ratio.** These get pushed in on via CapCut pan/zoom or layered parallax, which crops into part of the image — generating at 2x the final resolution keeps that crop from ever looking soft. This applies to every static image: beat stills, character references, and thumbnails alike.

---

## **Tool inventory (this pipeline's actual setup — don't assume other tools or workflows)**

* **AI image generation** (Nano Banana 2 or an equivalent still-image model — Nano Banana 2 specifically is the current default; note the version explicitly rather than leaving it unversioned, since capability differs meaningfully between versions) — run manually through the web UI by the user. Generate at 3840×2160 per the spec above.  
* **AI video generation** (e.g. Google Omni/Flow or an equivalent tool) — run manually through the web UI by the user. Clips run 6-8 seconds each; generate at 1920×1080, 16:9. Supports Image-to-Video (one reference still), Frames-to-Video (start \+ end still), and conversational refinement within a session for character consistency. **This is not silent by default — it generates its own synchronized audio automatically, including ambient sound it infers from the visual (paper rustle, room tone), unless the prompt explicitly mutes it.** Every generation prompt must contain an explicit no-audio instruction as part of its own text (e.g. "...no audio, mute, silent output") — silence has to be requested, it is never the tool's default state.  
* **Remotion** — code-based motion graphics, built by the coding agent (not the user manually). Render at 1920×1080, 30fps, matching the master spec. Check the reactvideoeditor Remotion MCP and the attached Remotion Bits catalog (see the dedicated section below) for real, working components before writing custom code from scratch.  
* **Background instrumental music** (e.g. Suno, Udio, or an equivalent AI music tool — again, the user's choice of specific tool) — one instrumental score bed per episode, generated from a single prompt (see the Standing Assets section).  
* **CapCut MCP — local draft-file variant.** Edits CapCut's local project files directly. Requires an existing template draft to clone project structure from. CapCut must be fully closed while the agent edits it — it autosaves on a timer and will clobber changes made while open. Edits accumulate in a session and only commit to disk on an explicit save-and-validate step.  
* **Asset mix: mostly static images, a small number of AI video clips (10-15 per episode, 6-8 seconds each, reserved for beats needing actual performance), Remotion for data/motion graphics.** Images do the majority of the visual work in this pipeline — reach for AI video only when a still genuinely can't sell the beat.  
* **NotebookLM Video Overview — Shorts only, never the long-form pipeline.** Confirmed by hands-on use: it's slow, capped around 3-4 minutes per generation, and doesn't hold up across many distinct scenes — it's genuinely good at one thing, a short vertical video with a slow-changing or largely static visual (a chart, an evolving diagram), and a poor fit for anything else. It never appears in Phase 4 or Part A's main beat generation. Its only role is Phase 6 below.

If a better-suited tool exists for a specific beat that isn't in this inventory, name it as a suggestion inline — don't force a beat into a tool that's a poor fit just because it's the one on the list.

---

## **File naming convention — apply everywhere, without exception**

`[3-digit sequence]_[short-descriptor]_[variant].[ext]`

**Sequence numbers increment by 10 as the standard rule** (010, 020, 030...), not just an example — this leaves room to insert a beat later (015) without renumbering everything after it.

**Variant suffix — two conventions, used for two different things, never interchangeably:**

* `_start` / `_end` — specifically for a Frames-to-Video pair, where the two files are the literal first and last frame of one continuous beat.  
* `_A` / `_B` / `_C` — for genuinely separate alternate options meant for human review and selection (thumbnail variants, an A/B test). Never use letter variants for a Frames-to-Video pair, and never use start/end for anything that isn't one.

Example: `012_ebbers-intro_start.png`, `012_ebbers-intro_end.png`, `012_ebbers-intro.mp4` (the resulting clip, no variant suffix needed once it's a single finished file).

**Every single asset, in every phase, is written using this exact copy-paste block — no prose paragraphs describing a prompt, the block IS the prompt:**

FILENAME: \[exact filename per the convention\]

TYPE: \[Static Image / AI Video / Remotion / Real-World Asset\]

PROMPT: \[full generation prompt, verbatim, ready to paste\]

NEGATIVE PROMPT: \[full negative prompt, verbatim\]

CONTINUITY: \[dependency note, or "None"\]

ON-IMAGE TEXT: \[None, with the negative-prompt text exclusion / or exact text \+ where it's added in post\]

DURATION: \[target on-screen duration, 6-8s\]

If a prompt runs very long, it can be compacted for length — but only after confirming every functional instruction (negative prompt exclusions, continuity references, text handling) survives the compaction. Never trim for brevity at the cost of losing an instruction.

---

# **PART A — ASSET CREATION & COLLECTION**

## **Phase 1 — Titles & Description**

**Titles: generate 4-5 distinct variations, never just one.** Ground them in real data — pull recent high-performing titles from the Master Tracker's Coverage Map and Outlier Log tabs and identify keyword phrases and structural patterns recurring in outlier videos, plus the strongest terms from Genre Trend Scan. Each variation should test a genuinely different angle, not reword the same title:

1. Number/scale-led (e.g. "How This $10B Company Collapsed in 2 Years")  
2. Curiosity/question-led  
3. Keyword-front-loaded for search, using the strongest term from Genre Trend Scan  
4. Name/entity-led, if the story has a strong central figure  
5. Angle-statement-led, leaning on the specific pivotal detail

State which one is recommended and why, but always deliver all 4-5 — the final pick is the user's call, not something to make unilaterally.

**Description:**

* First 1-2 lines carry the real hook and the primary keyword — this is what shows before "show more" truncates it, and matters more than anything after it.  
* A short paragraph (2-4 sentences) expanding on the angle, written for humans, not keyword-stuffed.  
* Relevant keyword phrases worked naturally into the body, not listed.  
* Never write the subscribe CTA or channel boilerplate here — that's a fixed block at the channel level, not authored per episode.

## **Phase 2 — Thumbnail Concepts**

Generated as a static image, never AI video — this never appears in the video itself.

**Be specifically clever about the subject, not generically "put a face on it."** A strong thumbnail concept uses the episode's actual central fact or irony as visual metaphor, not just a portrait. Worked example for a Rivian collapse episode: a paper-cutout Rivian vehicle crashing directly through a giant "$100B" stop sign, with bold text reading "HOW THIS $100B COMPANY COLLAPSED" — the crash-through-the-sign image IS the story's core idea (unstoppable momentum meeting a hard financial wall) rendered as one visual, not a character standing next to unrelated numbers. Every thumbnail concept should pass this bar: could someone understand the episode's core tension from the image alone, before reading the text?

1. Generate 2-3 thumbnail variants for A/B testing, at 3840×2160.  
2. Same paper-cutout system as the episode, using the episode's fixed reference character block if a caricature-driven story — but the metaphor/concept comes first, the character is one possible way to deliver it, not the default.  
3. Generate the hero visual blank of text first, then add the bold, high-contrast text hook afterward in a quick pass (Canva, Photoshop, or a still Remotion render).  
4. Palette follows the episode's actual tone per the Style Bible's modulation rule and the light/neutral-with-one-accent color system — contrast and a single dominant focal point drive click-through, not brightness or color count.  
5. Final export: downscale to 1280×720 for upload, keeping the 3840×2160 source. Sanity-check readability around 200px wide, mobile-feed scale.

Output filenames: `000_thumbnail_A.png`, `000_thumbnail_B.png`, etc.

## **Phase 3 — Character setup**

For every character appearing in more than one beat — Margery, any real-person caricature, any composite or fictional figure — lock its design first.

1. Generate the character's reference still at 3840×2160. **This must be a single static pose at a single angle — a standalone portrait or figure, never a turnaround, multi-view spread, "character sheet," or "reference sheet."** Those last two terms specifically mean multiple angles of the same character in one image in illustration convention, and an image model follows that convention literally if either word appears anywhere in the prompt — avoid them entirely. Add "no turnaround, no multiple views, no character sheet, no front/side/back views in one image, single pose only" to the negative prompt for every character reference generation. Save it as `000_[character-name]_reference.png` — every later beat involving this character points back to this one file, not a fresh description. Multiple recurring characters each get their own file this way — the name in the filename is what prevents collisions, not the sequence number.  
2. **To keep the same character consistent across separate AI video generations:** either (a) stay inside the same conversation thread for every clip involving this character in one sitting, since consistency holds within a session, or (b) upload the saved reference file fresh at the start of each new session and describe the character by pointing back to it.  
3. **Dialogue — read this before generating any talking beat, no exceptions:**  
   * **Margery, or a fictional/composite character with no real-world identity:** dialogue is fine. Write it from the script's narration content; it can be lip-synced.  
   * **A real named person's caricature:** never write dialogue, never lip-sync, regardless of what a "talking beat" might seem to call for. These beats are gesture-only — VO carries all content.  
   * **The one narrow exception:** a meta, self-aware sign-off aside — obviously non-documentary, understood as the channel breaking character for a joke. Even there: one short line, never a claim about the story's events, and skip it entirely on tragedy or victim-involved episodes.  
4. **Margery as recurring avatar, not just open/close.** Whenever the script has a segment transition or a moment that naturally suits a host bridging two ideas, default to a Margery avatar beat rather than reaching for abstract B-roll — she's the established recurring host, and using her consistently through the episode (not only at the cold open and sign-off) is what makes her feel like an anchor rather than a bookend.

List every recurring character in a short table before moving to beat-by-beat generation: Character Name | Reference Filename | Real Person or Fictional/Composite.

**"The Hypothetical" episodes use `[COMPOSITE: <role>]` instead of `[CARICATURE: <name>]`.** These are invented, archetypal characters per the Style Bible's Section 10 design rule — deliberately generic, no specific distinguishing features. They still get a locked reference file for visual consistency within the episode, but the dialogue rule flips: composite characters are fictional, so scripted dialogue is fine, same as Margery.

## **Phase 4 — Beat-by-beat generation instructions**

**Before writing any beat, run the duration sanity check:** total the script's runtime at \~155 words/minute, then check that the number and length of beats you're about to create actually adds up to that runtime — not more, not noticeably less. Each beat's assigned on-screen time should match how long the narration is actually talking about that specific subject at that point in the script, not an arbitrary even split. A beat can hold at most 6-8 seconds before it needs to be split into a new beat — this applies to static images exactly as much as AI video clips, not just video.

For every beat needing a generated or collected asset, produce the full copy-paste block (per the File Naming Convention section above) with:

**Beat number** — for cross-reference with Part B. No timestamp here — that's Part B's job.

**Asset type** — pick one, in this priority order (favor the simpler technique; escalate only when the beat genuinely needs it):

1. Static image (to be animated later via CapCut pan/zoom or layered parallax) — the default for most beats.  
2. Real-world asset insert — for anything tagged `[SHOWABLE]`.  
3. Remotion motion graphic — for anything tagged `[DATA]`, chapter cards, or standing assets. See the Remotion Bits Catalog section below for specific components.  
4. AI video — reserved for beats needing actual performance: a gesture, a head turn, a camera move across real dimensional depth. Count each one against the 10-15 cap, state the running total at the end. If it's genuinely unclear whether a beat needs this, default to static.

**Continuity dependency** — state this explicitly, every time, even when the answer is "none."

**On-image text** — state this explicitly, every time, even when the answer is "none":

* *"None — negative prompt must include 'no text, no writing, no illegible signage, no gibberish text.'"*  
* *"Short text on a native digital display (a ticker, a screen readout) — request the exact text directly in the prompt and verify the rendered result before accepting it."*  
* *"Text on a paper prop (nameplate, stamp, label) — generate the prop BLANK, reserved for text added in post. Exact text: '\[VERBATIM TEXT\]'."*  
* *"Any full sentence or paragraph, regardless of surface — still generate blank, add in post."* Pick exactly one. Never let a beat's actual generation prompt contain both a stated desired text and blank/no-text language in the same breath.

**Generation instructions**, matched to asset type:

* *Static image:* the full prompt (Style Bible system, correct palette register, character reference file if applicable), plus negative prompt, at 3840×2160.  
* *AI video:* which technique (Image-to-Video / Frames-to-Video / conversational edit), the full prompt, the negative prompt — pulled from the Style Bible's standing negative-prompt category that actually matches this beat's content — target duration (6-8s), 1920×1080 stated in the prompt, which stills it references by filename if Frames-to-Video. State explicitly in the prompt that audio is muted/off, as words the prompt actually contains, not a separate note.  
* *Real-world asset:* exactly what to search for and where, what to do once found, and how it enters the paper world (composited via Nano Banana 2 reference or Remotion overlay) — never a full-frame photoreal cut.  
* *Remotion motion graphic:* which specific component from the Remotion Bits Catalog (below) to use, what data or text it needs, target duration stated explicitly as a frame count, rendered at 1920×1080/30fps.

**Reference-sourcing flag** — include whenever a beat involves something current AI generation struggles with: exact real geography, a specific real UI, a historically accurate object, an exact landmark. State plainly to search Pinterest or an equivalent source for a specific query and upload references before generating.

## **Remotion Bits Catalog — specific components, not generic placeholders**

**Environment setup — one-time, before any Remotion work, not per episode:**

npm install remotion@^4.0.523 @remotion/cli@^4.0.523 @remotion/renderer@^4.0.523

npm install remotion-bits@^0.2.0 culori@^4.0.2

* **`remotion`** — the core React-to-video rendering framework. Provides `Composition`, `AbsoluteFill`, `useCurrentFrame`, `useVideoConfig`, `spring`, `interpolate`, and timeline sequencing — the coding agent builds every scene on top of these primitives.  
* **`@remotion/cli`** — command-line tooling. Powers `npx remotion render` and `npx remotion still`, plus the local live-preview studio (`npm start` / `remotion studio`) for checking a scene before committing to a full render.  
* **`@remotion/renderer`** — the headless rendering engine (Node.js \+ Puppeteer) that actually converts the React frame output into H.264/ProRes video files. This is what runs during the real render pass, not the preview.  
* **`remotion-bits`** — the component catalog referenced throughout this section. Exposes `AnimatedText`, `AnimatedCounter`, `TypeWriter`, `StaggeredMotion`, `Particles`/`Spawner`/`Behavior`, and `Scene3D`/`Step`, among others. Can also be searched directly: `npx remotion-bits find [query]` and fetched individually with `npx remotion-bits fetch <bit-id>` rather than importing the whole catalog for one component.  
* **`culori`** — a dependency of `remotion-bits`, not used directly. Powers the perceptual Oklch color-space interpolation behind the gradient and color-transition bits (`bit-linear-gradient`, `bit-radial-gradient`, `bit-conic-gradient`), which is why those specific transitions read as smooth rather than muddy through the middle of a color shift.

Confirm this environment is set up before Phase 4 generation begins — a beat that calls for a specific Bit ID is a dead instruction if the package was never installed.

This pipeline has access to a real, installed component library (`remotion-bits`, 42 components). Use specific Bit IDs in every Remotion generation instruction — never a vague "make a bar chart" with no named component. Select from the catalog based on narrative function, remixing a handful of relevant bits per episode rather than using all 42 in one video. **Skin every component to the FinanceCraft paper-cutout system per the Style Bible — cardstock textures, stamped typography, the light/neutral palette with sparing accent color — never the catalog's own example color pairing, which belongs to a different visual system entirely.**

Match by narrative function:

* **Collapse, fraud reveal, market panic:** `bit-glitch-in`, `bit-glitch-cycle` — skinned as a paper-tear/ink-bleed distortion rather than literal cyberpunk chromatic aberration.  
* **Balance sheet, revenue, dollar tallies:** `bit-basic-counter` for a straight number climb; `bit-counter-confetti` reserved for genuine milestones (IPO peak), never for a downfall beat.  
* **Archival photos, founder portraits, old documents:** `bit-ken-burns` — this is the direct Remotion equivalent of the CapCut manual pan/zoom technique already established for static stills.  
* **Leaked emails, internal messages, chat transcripts:** `variable-speed-typewriter` or `multitext-typewriter` for a "claim vs. reality" contrast beat, skinned as a typed document on paper rather than a digital chat UI.  
* **Contradicting a claim mid-sentence:** `multitext-typewriter`'s type-pause-backspace-retype mechanic fits a "what they said" → "what the filing actually shows" beat precisely.  
* **Cyber/crypto/blockchain tracing:** `cli-simulation`, `bit-matrix-rain` — use sparingly and only for genuinely technical tracing beats, not as general atmosphere.  
* **Document stacks, exhibits, term sheets:** `bit-card-stack`, `bit-fracture-reassemble` — the latter fits a "here's how the story falls apart" or "here's how the pieces connect" beat well.  
* **Key takeaways, checklists, timelines:** `bit-list-reveal`, `bit-staggered-fade-in`.  
* **Comparing 2-6 things at once** (business model pillars, corporate divisions): `bit-grid-stagger`, `bit-scene-3d-cube-nav`.  
* **Ambient mood backdrop:** `bit-fireflies`, `bit-radial-gradient`, `bit-linear-gradient` — used behind a talking beat or transition, never as the sole content of a beat.  
* **Code/technical explainer:** `bit-basic-code-block`, `bit-typing-code-block`.

**On variety vs. cohesion:** lean toward using a deliberately narrow set of 4-6 recurring components across a whole episode rather than sampling widely from all 42 — repetition of a few well-chosen, well-skinned components reads as a consistent visual language; using a different exotic component every single data beat reads as scattered, even though each individual component looks good in isolation. Pick the palette of components for an episode once, early, the same way you'd lock a character reference.

## **Standing assets — build once, reuse every episode**

Every standing asset still needs its full generation prompt written out in full at least once, even though it's reused — "recurring" is not a reason to skip the prompt.

* **Cold open bumper** — the channel's recurring opening logo/title card. Fixed Remotion asset, 1920×1080/30fps, 3-5 seconds. Full prompt required, generated once.  
* **Subscribe graphic overlay** — the on-screen subscribe button/animation. Fixed Remotion asset, 2-4 seconds. Full prompt required, generated once.  
* **Background instrumental score** — one music generation prompt per episode (Suno/Udio/equivalent), instrumental only, no lyrics, matching the episode's tone register per the Style Bible's palette-modulation principle (a tense, propulsive instrumental bed for an accountability story; a sparse, restrained one for a tragedy episode). State the target mood, tempo range, and instrumentation explicitly in the prompt — never leave this to the music tool's own interpretation of a one-word mood label.  
* **Sign-off delivery — decide per episode, not fixed:**  
  * Default: Margery delivers it in her avatar clip (reusable — her design is already locked). Full prompt required, generated once, reused.  
  * If this episode centers a strong accountability-tone caricature: that character can deliver the line instead, per the dialogue exception in Character Setup. Bespoke per episode, generated fresh, full prompt required.  
  * Never on a tragedy or victim-involved episode — default to Margery there.

**"The Hypothetical" episodes use their own standing assets instead of the above, per Style Bible Section 10:** a separate cold open bumper in the sub-series' lavender accent, and a recurring "HYPOTHETICAL SCENARIO" watermark stamp inserted at every `[WATERMARK]` tag — roughly every 2-3 minutes. Subscribe overlay and sign-off delivery follow the main show's rules.

## **Phase 5 — Consolidated batches (Part A's execution deliverable, grouped by type)**

This is the primary deliverable to actually work from — grouped by asset type so every prompt of one kind can be bulk-copied into the relevant tool in one sitting, rather than jumping between tools beat by beat. **No Part B information (duration, transitions, timestamps) appears here — that's a different document.** Every entry uses the full copy-paste block from the File Naming Convention section, in full, not abbreviated to just a filename.

1. **Static image batch** — every static-image prompt block, including character references and thumbnail variants, in filename order.  
2. **AI video batch** — every AI-video prompt block, in filename order, with the running count against the 10-15 cap stated at the end.  
3. **Real-world assets checklist** — table: what to find, where, target filename.  
4. **Remotion build list** — every motion-graphic prompt block (naming its specific Bit ID) and standing asset, mapped to filename, with target duration.  
5. **Music prompt** — the single background-score generation prompt.

**Hand off to Part B only once every file across these five lists exists, named exactly as specified.**

---

## **Phase 6 — Shorts Spinoffs (optional, additional to the core episode)**

Generated only after Phase 5's assets exist — this phase reuses them, it doesn't create a parallel asset set from scratch.

**Tool: NotebookLM Video Overview, exclusively.** Nothing else in this phase uses Flow, Remotion, or manual CapCut assembly — the whole point of routing this to NotebookLM is that it handles generation end-to-end from provided context, for this format specifically.

1. **Select 3-4 distinct short-worthy moments from the same script** — the natural candidates are whatever's already tagged `[PIVOTAL]`, `[SHOWABLE]`, a striking `[DATA]` beat, or a sharp `[WRY]` moment, since these are already the self-contained, high-value moments the script flagged. Each short should stand alone without requiring the viewer to have watched the full episode first.  
2. **Format: vertical (9:16), 2-3 minutes maximum** — this is NotebookLM's actual working range, not an arbitrary creative choice.  
3. **Follow the reusable Video Overview prompt structure from the NotebookLM Prompt Guidelines file exactly** for each short — the visual-world definition, production design specifics, forbidden-tropes list, narrative composition rules, and a full scene-by-scene breakdown. A thin prompt produces a thin result; don't improvise a lighter version of that structure.  
4. **Provide the actual assets already generated for the long-form episode as context** — character reference stills, real-document inserts, any relevant Remotion data graphic. Per the NotebookLM guideline, this isn't optional: it draws far more reliably from what it's explicitly given than from what it has to infer.  
5. **State the Style Bible's visual system in exhaustive detail within the prompt and instruct explicit adherence to it** — the paper-cutout register, this episode's palette, the caricature/composite rules for any character appearing. A short that doesn't visually match the long-form episode it's drawn from defeats the point of the spinoff.  
6. **Pace it meaningfully faster than the long-form cut.** Short-form vertical video runs on a different attention clock — visual interest should change roughly every 1-3 seconds, not the 6-8 second beats the long-form pipeline uses. State this explicitly in the prompt: rapid scene changes, quick reveals, no lingering holds except one deliberate emphasis moment if the short calls for it.  
7. **Describe the short end-to-end in the prompt, not just a style direction** — an actual open, middle, and close, stated as a sequence — for the same reason as the long-form Video Overview guidance: it has to read as one deliberate piece the model was walked through, not a generation left to wander.

**Editorial note:** don't let a short give away the episode's actual resolution or its most load-bearing reveal in full — pick a genuinely self-contained moment that creates its own curiosity rather than one that makes watching the full episode redundant.

---

# **PART B — EDITING & ASSEMBLY**

*A completely separate deliverable from Part A — generate and output this only once Phase 5's batches are confirmed complete, never in the same response as Part A. Assumes every asset already exists. No generation prompts here — only how to arrange what's already made.*

## **For every beat, produce:**

**Beat number \+ timestamp range** — the narration line(s) it covers.

**Asset file(s) used** — reference by exact filename from Part A.

**On-screen duration** — how long this asset holds before the next beat, timed against the narration line's spoken length (\~155 words/minute) plus a small pre-roll/post-roll buffer. For an AI-video beat, this should land close to the clip's actual generated length (6-8s) if Part A sized beats correctly. If it doesn't, that's a beat that should have been split in Part A; flag it rather than silently stretching the clip. The one sanctioned exception: hold on the clip's final frame for the remainder, as a deliberate freeze-frame emphasis moment. Never loop a clip with directional motion to fill time.

**Transition in** — how this beat connects from the previous one: hard cut, crossfade, match-cut-on-motion, whip-pan, or hold-then-cut. Verify what the local-draft-file CapCut MCP actually exposes for transitions before assuming this maps to a named parameter.

**Audio note** — ambient sound or foley, whether narration VO carries the beat, and where the background instrumental sits in the mix. Real-person beats get "VO only" noted explicitly. Mixing principle: narration VO always sits on top — instrumental, ambient, and foley stay low enough that VO is never harder to hear because of them.

**Text/caption placement**, if any — per the Style Bible (text lives in the paper world as a physical object), unless it's the accessibility caption track: plain white text, black outline or semi-transparent background band, bottom-centered, standard sans-serif.

## **CapCut assembly instructions**

Confirm a template draft exists to clone project structure from. Confirm CapCut is fully closed. Import every named asset in sequence order, apply the per-beat duration/transitions/text above, layer in the background instrumental under the narration track, run validation. If validation fails, do not save over the existing draft — note which beat/asset triggered the failure and stop for review. Once validation passes cleanly, save.

---

## **Output order**

File-naming convention → Video technical spec → **Part A, phase by phase, each a stopped deliverable:** Titles & Description → Thumbnail Concepts → Character Setup → Beat-by-Beat Generation → Consolidated Batches → Shorts Spinoffs (optional) → **Part B, as a fully separate deliverable once Part A's assets exist.**

# **FinanceCraft — Voice Direction Prompt (VoxCPM2)**

*A standalone tool. Feed this a finished narration script — from the Script Generator or any other source. It has no dependency on the visual pipeline: it doesn't touch beats, assets, or editing, and the Guided Production Document generator doesn't need to see this or vice versa. Its only job is turning a script into a chunked, VoxCPM2-ready voiceover generation script.*

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

---

## **Chunking rules**

Split the script into chunks at paragraph boundaries by default. A chunk is 2-6 sentences sharing one narrative function. If a paragraph spans two functions, split it at that turn.

**Same-register stretch rule:** when 3+ consecutive chunks share the same register family, don't let any single chunk in that stretch run 4+ sentences with no internal tag or split — either add an earned tag or split it further purely to create another Control Instruction application point.

Generate one chunk per API/demo call, never the full script in one call — long text is a known trigger for unstable generation.

---

## **Chunk-to-chunk coherence — don't let intensity jump**

VoxCPM2 has no memory between chunks beyond the cloned reference audio — it doesn't know what the previous chunk sounded like, only what this chunk's own Control Instruction describes. A large jump in stated intensity between two adjacent chunks can render as a different voice entirely, not the same voice shifting mood, because there's nothing carrying continuity except your wording.

**Keep intensity changes incremental unless the narration itself contains a genuine hard tonal break.** Prefer moderate language — "a touch quieter," "a little more measured," "a shade more urgent" — over extreme descriptors — "hushed to almost nothing," "dropping into a whisper," "voice cracking" — when the surrounding chunks sit at a normal register. Save the extreme end of the range for moments the story has actually built toward across several chunks, not as a default flourish on any single one. If in doubt, undersell the shift rather than oversell it — punctuation and word choice in the narration text itself can carry emotional weight the Control Instruction doesn't also need to carry.

---

## **One layer, every chunk — Vivid only, always anchored the same way**

Every chunk, including the first, generates via Controllable Cloning against an existing saved reference clip (Margery's established voice, or whichever narrator this channel uses). There's no Voice Design / no-reference step in this pipeline — voice identity is already locked from prior work, not created fresh per script. That means every Control Instruction, chunk 1 included, uses only the Vivid/delivery layer from the archetype library below — never restate gender, age, or voice texture, since the reference audio already carries all of that.

**Every Control Instruction must begin with "Speaks with..." — no exceptions, no alternate openings.** Not "Speaks in a...", not "Voice dropping. Speaks...", not a bare adverb. Always "Speaks with \[description\]." One consistent anchor removes a variable the voice model doesn't need, and makes every chunk mechanically easy to check against this rule.

Compare:

* *Weaker (fragment stack, states identity unnecessarily, wrong opening):* "Panic-stricken female voice, rapid breathless delivery, suffocating tension, cracking under strain, sudden drops into a dread-filled whisper."  
* *Fixed (Vivid only, strictly anchored):* "Speaks with suffocating tension, voice cracking under the strain, dropping without warning into a dread-filled whisper."

---

## **Archetype library**

Compose fresh from these — never copy an example verbatim, and never repeat identical wording across consecutive chunks even within the same archetype. Every line below strictly opens with "Speaks with." This list isn't exhaustive — invent a new archetype in the same spirit if a story genuinely calls for something none of these cover, and keep it anchored the same way.

**The Unraveling** — mounting crisis, escalating discovery

* Speaks with a tense, clipped tone, as the first cracks appear.  
* Speaks with building urgency, stark and rapid, as the scale becomes clear.  
* Speaks with dread returning, heavier now, the pattern impossible to ignore.  
* Speaks with tightening restraint, watching it happen in real time, inexorable.

**The Confident Villain** — executive hubris before the fall

* Speaks with easy, self-assured charm, faintly amused by his own cleverness.  
* Speaks with a trace of condescension, certain no one is watching closely enough.  
* Speaks with cooling composure, the first flicker of unease beneath it.  
* Speaks with flat, controlled calculation, the charm gone.

**The Reckoning** — courtroom, testimony, consequence landing

* Speaks with grave weight, each word placed like a verdict being read.  
* Speaks with steady, unhurried resolve, the weight of consequence finally landing.  
* Speaks with quiet finality, resolute, offering no comfort.

**The Whistleblower's Fear** — deciding to speak, at real risk

* Speaks with low, careful restraint, glancing over the shoulder of the sentence itself.  
* Speaks with restrained urgency, tightening, like someone who has rehearsed this and still isn't sure.  
* Speaks with fear held just below the surface, resolve winning out by a narrow margin.

**The Forensic Reveal** — primary-source discovery, the investigation-frame hook

* Speaks with quiet, absorbed curiosity, like something has just come into focus.  
* Speaks with sharpening attention, as the significance of the document becomes impossible to miss.  
* Speaks with the quiet satisfaction of a puzzle piece finally fitting.

**The Wry Aftermath** — irony, dark comedy, an absurd detail

* Speaks with dry, knowing restraint, the irony doing the work the words don't have to.  
* Speaks with a faintly amused arch, as if sharing a joke the subject never got to hear.  
* Speaks with rueful understatement, the punchline already obvious.

**The Human Cost** — real financial ruin, victim testimony

* Speaks with gentle care, mindful of the weight of what's being said.  
* Speaks with restrained warmth, like someone choosing words that won't do further harm.  
* Speaks with soft, unhurried patience, letting the silence after the sentence do some of the work.

**The Slow Bleed** — death by a thousand cuts, not a dramatic crash

* Speaks with tired, matter-of-fact resignation, like reciting something long expected.  
* Speaks with a further-flattening tone, as decline becomes routine, almost administrative.  
* Speaks with the restrained tone of a eulogy for something that stopped being alive long before it ended.

**Historical Grandeur** — hidden-history reveals, a sense of scale

* Speaks with a touch of astonishment, as if the scale is only now sinking in.  
* Speaks with gently widening reverence, describing something larger than expected.  
* Speaks with unhurried awe, giving the fact room to land.

**The Cliffhanger** — unresolved, trailing endings

* Speaks with a trailing, quiet uncertainty, the sentence left deliberately unfinished in tone.  
* Speaks with fading composure toward stillness, like a door being left open on purpose.

---

## **Anti-repetition rule**

Track the last 3 chunks' wording before composing the next one — if a specific phrase already appeared, use a different word from the same archetype's spirit rather than reaching for it again. If an archetype's own vocabulary feels exhausted within one script, that's a signal to invent a sibling archetype rather than repeat, not to loosen the rule.

---

## **Voice consistency (production note)**

Every chunk in this script generates via Controllable Cloning against the existing saved reference clip — there's no per-episode Voice Design step, since the voice is already locked from prior work rather than created fresh each time. Confirm the reference clip is clean, at least 5 seconds, before starting a batch. If a genuinely new voice is ever needed — a one-off character distinct from the recurring narrator — that's a separate Voice Design step done ahead of time to produce a new reference clip, not something that happens inline while generating an episode's chunks. If using the API rather than the web demo, fix the seed parameter across calls for additional reproducibility.

---

## **Output format**

(Control Instruction for chunk 1\) Chunk 1 narration text, inline tags included where earned.

(Control Instruction for chunk 2\) Chunk 2 narration text, inline tags included where earned.

\[repeat for all chunks\]

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

# **FinanceCraft — Google Flow Prompt Guidelines**

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
