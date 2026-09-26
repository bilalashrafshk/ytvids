<!-- Part of the FinanceCraft Channel Bible. Index: ../FinanceCraft — Channel Bible, Asset Guide & Description.md -->

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
