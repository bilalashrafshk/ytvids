<!-- Part of the FinanceCraft Channel Bible. Index: ../FinanceCraft — Channel Bible, Asset Guide & Description.md -->

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
