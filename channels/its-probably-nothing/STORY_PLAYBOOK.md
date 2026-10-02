# It's Probably Nothing — Story Playbook

*How every episode is made, in order. Distilled from Episode 01 (Rabies) and from a line-by-line teardown of the reference channel's rabies episode (`reference/transcripts/1507nxH2c4E_Dying_from_Rabies.txt`). `CHANNEL.md` says what the channel is; this says how an episode earns its place on it.*

The reference's writing is good at three things: vivid one-line images, jokes that carry facts, and escalation. It is weak at four: its patient is an unnamed "you", its numbers drift from the primary sources, its mechanism timing is looser than the evidence, and it never lets the viewer see the road not taken. Our job is to match it on the first three and beat it on the four.

---

## The one-sentence engine

**Dennis believes something comforting about his symptom, the narrator takes the belief apart one layer at a time, and a real person has already made the same mistake.**

Everything below serves that sentence.

---

## The ten steps (each leaves a file in the episode folder)

| # | Step | Output | Gate |
| --- | --- | --- | --- |
| 1 | **Topic and thesis.** One disease or hazard; one sentence thesis; the Day-3 sign (an event or symptom a viewer can act on). | `00_IDEA_GATE.md` | `gate_idea.py`, `gate_claims.py --topic` |
| 2 | **Reference teardown.** Read the reference transcript for this topic (if one exists) line by line. Table every claim and image: what it says, what the primary source supports, what we do. Keep what is true and strong; correct what drifts. | `01_RESEARCH_BRIEF.md` → *Reference teardown* | `gate_story.py` (brief section) |
| 3 | **Primary-source research.** CDC/WHO/NIH, MMWR case reports, peer-reviewed papers. Read the page, do not rely on a search summary. Every number gets a URL. Where two sources disagree (e.g. two death estimates) say so in the script. | `01_RESEARCH_BRIEF.md`, `02_CLAIMS_LEDGER.md` | `gate_claims.py` |
| 4 | **Find the spine.** The three (sometimes two or four) comforting beliefs the patient holds. Each must be *wrong in a different way* and each *more costly than the last*: usually (1) "I'd know", (2) "I'd feel it soon", (3) "someone could fix it". | `01_RESEARCH_BRIEF.md` → *Spine* | `gate_story.py` |
| 5 | **Find the real cases.** At least two anonymised real cases from case reports (MMWR, journals) where real people held the same belief. One must be the "this is not a joke" turn: the real person did exactly what Dennis does. Never a named patient. | `01_RESEARCH_BRIEF.md` → *Real cases* | `gate_story.py` |
| 6 | **Write the mechanism image.** One original analogy per big idea. State the fact in the sourced sentence; keep the image in a separate sentence and label it as an image. Do not reuse the reference's images. | script | `gate_claims.py` (anchors) |
| 7 | **Write the script** to the shape below. | `02_SCRIPT_A.md` (and a Draft B if the router asks for twin drafts) | `gate_check.py -a 13`, `gate_claims.py`, `gate_story.py` |
| 8 | **Score it** with the scorecard below. Below 16 of 20, rewrite the weakest two rows. | `02_AUDIT.md` | by eye |
| 9 | **Read it aloud once.** Fix anything the voice trips on. | script | by ear |
| 10 | **Visuals** in the Public-Health Print style (`STANDING_ASSETS.md`): Dennis master first, then scenes, then explainer plates. | `08_STILLS_PROMPTS.md` etc. | style review |

---

## The shape (default; override in the episode's idea gate with a reason)

1. **Present-first cold open (about 12–15% of the runtime).** Dennis at the first symptom, explaining it away with escalating theories. Ends on a hard beat that gives away the stakes in one sentence ([STILLNESS]).
2. **Rewind.** One scene, the decision moment. Dennis settles into his comforting beliefs. Name them out loud as "one, two, three" on cards.
3. **The fork.** Both roads shown at the decision. From here the episode follows the Ignoring road and cuts to the Day-3 road when it matters.
4. **Act 1, 2, 3: one belief each.** In each act, in this order: *the belief → why it feels true → the sourced mechanism → the real case → the Dennis moment → the Day-3 cutaway → the belief fails.* Each failure is a different kind of failure and a bigger one.
5. **The wall.** Whatever is the point of no return (the symptoms the treatment can no longer fix). Graphic detail is allowed when it carries the medicine; spectacle for its own sake is not.
6. **The honest exception.** If a survivor, a rare recovery or a debated treatment exists, tell it plainly and say what the sources say about how rare it is.
7. **Reality check and history.** Real numbers, each with a source; at least one history beat from a source (an ancient description, the first treatment). End the section on the human pattern in the data, not just a count.
8. **The button.** What Dennis should have noticed on day three; the action; the disclaimer; the callback payoff; the last two lines.

**Length:** about 2,000–2,800 narrated words. Under 1,800 means the acts are thin.

---

## The craft rules

- **Specificity beats statement.** "A forum where the top comment is a man named Rick who is certain it's his elbow" beats "he searched online".
- **Jokes are Dennis's denial, the narrator's dry understatement, or a deadpan fact.** At least one every minute or so. Never a joke at a patient's suffering. Dark is allowed; cruel is not.
- **Escalation means a different kind of wrong each time**, not the same wrong louder.
- **One callback, planted early and paid late** (`[SETUP:]` / `[PAYOFF:]`). Episode 01: Gary's cousin.
- **The turn.** Once per episode, the story stops being only Dennis's: a real case, stated plainly, no joke. The narrator says "this is not a joke."
- **The comforting sentence is the villain.** "It's probably nothing" is usually *right*. The script says so, and says why that is exactly the danger.
- **Hard detail is a tool.** When showing what the disease does, use the specific, sourced sign (the glass of water, the draught of air), not general words like "terrible".
- **The image is separate from the claim.** A sourced sentence carries the fact; a different sentence carries the analogy. This keeps the ledger honest and the writing vivid.
- **Numbers arrive alone.** One per beat, spoken in plain words, each with a source. If two reputable sources differ, give both.
- **Real cases are anonymised.** Place and year, no names. The patient is "a woman in Minnesota", not a person who can be searched.
- **Do not copy the reference's images or order.** Facts overlap, wording does not.
- **Never conspiracy framing, never treatment advice beyond "wash the wound / see a doctor / tell them what happened".** (`gate_claims.py` enforces; this has not changed.)

---

## The story scorecard (score each 0, 1 or 2; minimum 16 of 20 to proceed)

| # | Criterion | 2 means |
| --- | --- | --- |
| 1 | **Hook** | The first 30 seconds make a stranger ask "what happens to this man?" |
| 2 | **Spine** | Three beliefs, each wrong in a different way, each costlier than the last |
| 3 | **Dennis** | Specific, funny, and his denial drives the plot (not a narrator's prop) |
| 4 | **Real cases** | At least two, one of them the turn; anonymised and sourced |
| 5 | **Mechanism** | The fact is sourced and plain; one original image that a viewer repeats |
| 6 | **Escalation** | Every act is a bigger, different kind of wrong |
| 7 | **Humour** | A laugh every minute or so, none at a patient's expense |
| 8 | **Sources** | Every number in the ledger; where sources disagree, the script says so |
| 9 | **Fork** | Both roads shown; the Day-3 road is not an afterthought |
| 10 | **Ending** | A callback payoff, a clear action, and a last image that lingers |

Record the scores and the single biggest weakness in `02_AUDIT.md`.

---

## Reference-teardown method (step 2)

1. Read the whole reference transcript.
2. For every factual claim, write a row: *the reference says* | *what the primary source supports* | *what we do*. Mark each as **keep**, **correct**, or **drop**.
3. List every image and joke that works and ask why. Write our own, never theirs.
4. List what the reference leaves out: the other road, the real cases, the doctor visit, the honest exception.
5. Put the table in `01_RESEARCH_BRIEF.md` under *Reference teardown*.

Episode 01 found five drifts worth correcting: the incubation story ("climbs for months" versus "waits near the bite for most of it"), the death estimate (59,000 versus the current 44,203, with the old figure still worth stating), the survivor count, the US case count, and the claim that nothing can be done after symptoms (true, but the honest exception exists and deserves one plain sentence).
