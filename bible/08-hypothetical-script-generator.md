<!-- Part of the FinanceCraft Channel Bible. Index: ../FinanceCraft — Channel Bible, Asset Guide & Description.md -->

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

**The structure follows the premise's scale — there is no default.** If the premise changes the world ("what if humans lived to 150"), the video tours the world: A12 World Cascade. If it happens to one person ("what if you had $1 trillion"), follow that person: A5. Only a genuine fork between two choices gets two characters: A6. **Never shrink a world premise onto one or two characters, and never narrow it to a single lesson** — a viewer who clicked "what if humans lived to 150" wants the whole changed world, not one retirement plan. State the skeleton and one sentence of reasoning.

## Step 2 — Build the hook

Same techniques as the main show — a specific number, a direct address, an unresolved question, a flash-forward to the end state — but direct second-person address ("you") is a strong default here in a way it isn't for documented cases, since there's no real person's actual experience being claimed. Draft this last, after Step 3, same as the main Script Generator.

## Step 3 — Write the full narration

**Write naturally — skeletons are a starting shape, not a mold.** Use a skeleton's beat map only where it helps the story; percentages are rough, beats can be merged, skipped or reordered, and if no skeleton genuinely fits, write freeform (`gate_check.py -a 0`). A script that reads like a template being filled in has failed, whatever its gates say.

**Plain words only — zero technical, academic or evidence language.** Every word should be one a 12-year-old uses. No jargon (actuaries, receivership, externalities), no research talk (studies show, researchers, scientists say, experts, economists, the data, evidence), no paperwork (SEC, filings, 10-K, regulators). If an idea needs a technical word, say what the thing *does* instead. This is not a style preference: it is the single biggest reason drafts come out wordy and boring.

**Two passes (Two-Pass Rule, `bible/05-cp-verify-phase-gates.md`).** *Pass 1:* write the whole draft from the Concept Brief, the invented world and the skeleton's beat map — the only rules in view are invented names, an honest mechanic, and reading as fiction. Push the premise; follow the strangest consequence. *Pass 2:* on the finished draft, run CP-0, the opening-contract check for the skeleton and `gate_check.py`, then make the smallest edits that clear them.


- **Invented names only — people, companies, banks, everything.** Never a real entity, never a near-miss that could be mistaken for one.
- **The underlying mechanic must be accurate.** Every number in the scenario should be internally consistent and true to how the real mechanic works — the story is invented, the math is not.
- Characters are optional. When the skeleton is personal (A5, A6, A9), build one or two invented characters with enough specific, sensory detail to feel real — a recurring visual motif (a whiteboard, a specific object) gives the Guided Production Document something concrete to anchor beats to.
- Direct address to the viewer ("you") can carry the whole narration if the personal-journey structure is used — this is the one structural choice that flips from the main show's rule, where a documentary voice narrates about someone else, not as someone else.
- Reuse the engagement craft from the main Script Generator: genuine rhetorical questions posed and then answered, and emphasis-through-isolation for a key number rather than relying on intensifying adjectives.
- Vary pacing deliberately, same as the main show — near-stillness beats, segment transitions that pull forward rather than trail off, a cutting pass once a full draft exists, and a read-aloud check for spoken delivery.
- **Phonetic Decimal Normalization:** Mandate the phonetic word "point" instead of raw periods (e.g. `1 point 2 million`, never `1.2`) for all spoken decimals to prevent "one dot two" TTS mispronunciations.

## Step 4 — Tag asset-relevant moments inline

Same tagging system as the main Script Generator, with one difference: there is no `[CARICATURE: <name>]` tag here, since there's no real person to lock a likeness to. Use `[COMPOSITE: <role>]` instead (e.g., `[COMPOSITE: the couple]`, `[COMPOSITE: the neighbor]`) — this signals the Guided Production Document to use the generic, archetypal design rule from the Style Bible rather than a locked caricature reference block. `[SHOWABLE]`, `[MAP]`, `[DATA]`, `[PIVOTAL]`, and the delivery tags (`[TENSE]`, `[WRY]`, etc.) all carry over unchanged.

Also tag where the recurring `[WATERMARK]` reminder falls — roughly every 2-3 minutes — so the Guided Production Document knows where to place the "HYPOTHETICAL SCENARIO" badge overlay per the Style Bible's visual-signal requirement. This is not optional and should never be left for the production stage to notice on its own.

## Step 5 — Close and hand off

End on an image or a question that turns the premise back on the viewer's real world — never a moral, a lesson or "notice what decided this". Don't write the subscribe/sign-off CTA — same standardized block as the main show, though note the Guided Production Document uses this sub-series' own lavender watermark badge, not the main show's standing assets.

## Output format

**CP-INPUT applies: no Concept Brief, no script. CP-3 applies: two complete drafts, never one.**

1. Divergence table — Draft A (Safe Take) vs Draft B (Swing), naming the two-plus axes they differ on and what each is betting on
2. Draft A: chosen structure + rationale, full tagged narration, full CP-2 audit block including CP-0 gates
3. Draft B: same, complete and independently gated
4. The engine's recommendation on which to shoot, with reasoning — and one sentence naming exactly what could go wrong with the Swing
