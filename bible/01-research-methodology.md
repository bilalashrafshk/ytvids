<!-- Part of the FinanceCraft Channel Bible. Index: ../FinanceCraft — Channel Bible, Asset Guide & Description.md -->

# **FinanceCraft — Research Methodology**

*Research exists to find two things: **what nobody has told yet**, and **things a camera can film**. Everything else is plumbing. The actual prompts are canonical in `research-prompt-v2.md` (Track 1), `research-prompt-track3-v2.md` (Track 3) and `invention-prompt-v2.md` (Track 2) — this file explains the method and never restates them.*

---

## **Rule zero — research is invisible on screen**

The viewer never watches us research. Sourcing happens off camera; the video shows what happened, to whom, and what it looked like.

- **Narration never cites.** No "according to its 10-K", "court filings show", "a regulatory report found". Say the thing: *"Peloton had forty thousand bikes nobody wanted."* The one exception: when finding the document *is* the drama (the email nobody was supposed to read, the clause that gave it away) — then it's a scene, not a citation.
- **Documents appear only when a line in them is the payoff.** Highlight that one line, hold it long enough to read, move on. Never documents as proof-wallpaper.
- **Sources live in the description**, where they give credibility and legal cover without costing a second of watch time.

A fact that can only be delivered as "research says" isn't ready for the script — find the person, object or moment it happened to.

---

## **Step 0 — Route by track**

**Track 1 — Documented Case.** Real company, real people. Run the full method below. This is the only track with real legal exposure, so it's the only one with a sourcing bar.

**Track 2 — The Hypothetical.** **Do not run this methodology.** Nothing happened, so there is nothing to excavate. Use `invention-prompt-v2.md` plus the Texture Pass. Running research on a thought experiment produces a bibliography, and a bibliography produces the register this format cannot survive.

**Track 3 — Mechanism.** One trustworthy number per claim, heavy texture, no excavation. Run Step 1, the Texture Pass and the load-bearing check lightly.

---

## **The Texture Pass (all tracks — the most important step)**

Verified facts make a script defensible. They don't make it watchable. Every benchmark video is carried by concrete detail. Collect, explicitly:

* **Physical objects** — popcorn tubs, marquee letters, a Denny's coffee cup, pallets, a vault door, a spinning loading wheel.
* **Places with names** — Monaco, Fort Lauderdale, Rotterdam. Named places are free specificity.
* **Prices a normal person recognises** — a $15 ticket, $2,000 rent, an $18 million car. Anchor every abstract figure to one.
* **Sensory friction** — the queue, the smell, the wait, the dead phone. Benchmark hooks open here almost every time.
* **One absurd true detail** — the line viewers quote back to a friend.
* **A human doing something**, not a trend occurring.

**Where texture lives:** trade press, operator interviews, Reddit and forum threads from people who do the job, pricing pages, earnings-call Q&A (not prepared remarks), photo archives, local reporting. A court filing will never tell you what the lobby smelled like.

**Checkpoint:** fewer than ten usable concrete items → not ready to script. That's a research failure, and it's the one that later gets papered over with jargon.

---

## **Step 1 — Know the version everyone already told**

Pull 3–5 mainstream sources (Wikipedia, a big retrospective, existing YouTube coverage) and summarise the commonly told version in a few sentences. Its only job is to be the thing we deliberately depart from.

## **Step 2 — Find the gap (Track 1)**

Ask of the sources — any mix of reporting, interviews, filings, court records, contemporaneous press, non-English coverage:

- **Invert** — who could have stopped this and didn't? What did they know, and when?
- **Correct** — what contradicts or complicates the common version?
- **Zoom** — what's the most specific overlooked detail?
- **Connect** — what link to another field or industry does coverage miss?
- **Aftermath** — what happened next that nobody followed up on?

Then: **what's the single most pivotal fact, quote or moment**, and what would the story lose without it?

Primary documents are a place to *find* surprises, not a destination. Go to a filing when it's likely to hold the gap; skip it when reporting already covers the ground.

**Checkpoint — is there a story?** If the gap list says nothing beyond Step 1, take the idea back to the Idea Gate. Don't force it.

## **Step 3 — Verify what the story stands on**

Not every fact needs a primary source. **Load-bearing claims do:**

- anything that accuses or criticises a named, living person or a real company
- the headline numbers (the ones in the title, thumbnail or hook)
- the pivotal detail

Those get a primary source (`[PRIMARY]`), or two independent solid reports if no primary exists; single-source accusations don't go in. Everything else — background, colour, texture — can rest on reputable reporting (`[SECONDARY]`). When sources disagree, the disagreement can itself be a beat: *"nobody ever reconciled the two numbers."*

This is the minimum that protects the channel legally and from expert fact-checkers in the comments. It is also the ceiling of what sourcing is allowed to cost the script.

---

## **Output — the Research Brief**

Structured exactly as the track's prompt file specifies (Track 1: commonly told version, gap, verified facts with `[PRIMARY]/[SECONDARY]/[UNCERTAIN]`, texture, showable assets, pivotal detail, open questions, skeleton kit). `gate_alpha.py` checks the shape.

**Tools:** Gemini Deep Research for Track 1 (per `00-ROUTER.md`). NotebookLM works well for the gap and verification steps because it answers only from uploaded sources with clickable citations — one notebook per story, fifteen good sources beat fifty mixed ones.
