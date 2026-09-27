# Skeleton Library (v1)

> **Write naturally — skeletons are a starting shape, not a mold.** Use a skeleton's beat map only where it helps the story; percentages are rough, beats can be merged, skipped or reordered, and if no skeleton genuinely fits, write freeform (`gate_check.py -a 0`). A script that reads like a template being filled in has failed, whatever its gates say.

*Read at STEP 2 (skeleton ranking) and STEP 5 (drafting). A skeleton is the story model a script is built on. It is chosen by the **shape of the thesis**, never by the niche the reference came from. Voice is then calibrated to that skeleton's measured band (`gate_check.py -a <n>`), and FinanceCraft's channel constants sit on top of both.*

---

## The three layers — keep them separate

| Layer | What it decides | Source of truth |
|---|---|---|
| **Skeleton** | Beat order, where the reveal lands, what carries escalation | This file, borrowed from any niche |
| **Register** | Sentence length, short/long share, second-person density | That skeleton's benchmark band in `gate_check.py` |
| **Channel constants** | Jargon ≤ 4.0/1k, 12+ch ≤ 14/1k, reframes, tags, no invented speech for real people, HYPOTHETICAL framing for invented characters | Bible CP-0 + Style Bible, always on |

**Precedence when they conflict:** channel constants > skeleton band > generic guidance in the Script Generation Prompt. The prompt's "average 10–13 words" line is generic guidance. It loses to the A8 band (median 16) because CP-0 already says gates outrank Step 3 guidance.

---

## Selectable skeletons

| ID | Skeleton | Benchmark (outlier ratio) | Tracks | Evidence | Visual signature (lands on the key story moment) |
|---|---|---|---|---|---|
| **A8** | Reversal Explainer | inkly Desert (253.5×), Egyptians (90.8×) | 1, 3 | Strong: 2 outliers, same channel | Nested paradox held deliberately still: slow push-in while everything around it moves |
| **A9** | Second-Person Parable | Hidden Yield (169.6×) | 2 only | Single example | Match cut on the decaying object at each timeskip |
| **A5** | Constrained Hypothetical | My Chaotic Stories $1T (99.3×) | 2 only | Single example | Ledger counter card, identical style every time block |
| **A11** | Exposé Autopsy | Low Volume Capital BYD (31.5×) | 1 only | Single example | Each evidence pillar opens on its source document with a highlighter sweep; the contrast image as a drone flyover |
| **A6** | Two-Character Simulation | Logical Money (66.2×) | 2, 3 | Single example | Split screen with both net-worth counters at each checkpoint |
| **A3** | Causal-Chain Explainer | Lock Stock Petrodollar (13.4×) | 1, 3 | Single example | Flywheel for the loop at the midpoint |
| **A2** | Bet Chain | Crayon Capital NVIDIA (2.68×) | 1 | Weak ratio | Whip-zoom montage across the chain of bets |
| **A12** | World Cascade (Kurzgesagt / What If style) | none yet — **needs 1–2 benchmark transcripts** | 2 only | **Provisional** | Before/after split of the same place, then a tour card per domain |
| **A10** | Scale Wall (Kurzgesagt style) | Kurzgesagt Solar System (0.38×) | 2, 3 | **Provisional** | Infinite zoom or scale flyover up the ladder |
| **A1** | First-Principles Explainer | Martik Finance, currencies (0.33×) | 3 | **Provisional** | One kinetic diagram per engine; the close returns to the opening image |
| **A4** | Inside-the-P&L Breakdown | Mr. Finance, movie theaters (0.09×) | 1, 3 | **Provisional** | Waterfall chart for the walked transaction |
| **A7** | Compounded Playbook | LITTLE BIT BETTER, financial freedom (0.54×) | 3 | **Provisional** | Milestone counter card per rule |

**Provisional** means the benchmark video sits below the 1× outlier bar. The format is sound and the voice band is measured, but there's no evidence *this format* over-performs. Provisional skeletons are fully selectable, including as Rank 1. HARD STOP 1 simply labels them `(provisional)` so the choice is made with open eyes.

**Excluded:** numbered listicle (PsychToons). It had weak ratios and is off-brand.

**Track 1 coverage:** A11 (BYD, 31.5×) is the first scandal/collapse benchmark. It still rests on one video; 1–2 more outlier autopsies would firm it up.

---

## Selection matrix — thesis shape → ranked skeletons

Classify the thesis into one shape (the Idea Gate's Q1 artifact usually decides it). **Rank 1 → Draft A (Safe). Rank 2 → Draft B (Swing).** If a rank is incompatible with the confirmed track, skip to the next compatible entry in the fallback column.

| Thesis shape | Signal words | Rank 1 | Rank 2 | Fallback |
|---|---|---|---|---|
| **a. Reversal** | "You believe X; it's actually Y" | A8 | A3 (T3) / A2 (T1) | A6 |
| **b. Hidden system** | "X quietly runs Y" | A3 | A8 | A10 |
| **c1. World what-if** | "What if everyone / humans / the planet / X stopped existing" — the premise changes the world | A12 | A10 (if the surprise is a limit) | A5 |
| **c2. Personal what-if** | "What if **you** had / were / could…" — it happens to one person | A5 | A9 | A12 |
| **c3. Fork** | "What if you chose X instead of Y" — two paths compared | A6 | A5 | A9 |
| **d. Choice** | "A vs B — which wins?" | A6 | A9 | A5 |
| **e. Contrarian habit** | "The looked-down-on move wins over time" | A9 | A6 | A8 |
| **f. Survival / fall** | "Bet after bet, until…" | A2 | A8 (reversal of the told version) | A3 |
| **g. Impossibility / scale** | "It's bigger / can't be done" | A10 | A5 | A3 |
| **h. How it works** | "How does X actually work?" (currencies, inflation, credit scores) | A1 | A10 (if scale is the surprise) / A3 (if history drives it) | A8 |
| **i. Business model** | "How does X actually make money?" | A4 | A8 (the real product *is* the reversal) | A2 (T1) |
| **j. Roadmap** | "How to get to X faster" | A7 | A9 (the same rules lived as a story) | A6 |
| **k. Exposé** | "X looks like a success; the documents say otherwise" | A11 | A8 (T1) / A4 (if the rot is unit economics) | A2 |

**Shape a vs h vs i.** A reversal (a) needs a wrong belief to break. "How it works" (h) only needs curiosity. If the Idea Gate's Q1 prior is strong, prefer (a) even for a mechanism topic. A business-model topic (i) is usually also a reversal, which is why A8 is its Swing. **Shape a vs k:** one wrong belief resolved by one mechanism is (a); a celebrated success contradicted by several independent lines of evidence is (k).

**Divergence:** A and B are different skeletons by construction. That settles CP-3's Structure axis. The engine still names a second axis (entry point, lens, or register).

**Draft C (on request only) — the Transplant.** Take any compatible skeleton not used by A or B, preferably one whose benchmark is from a *different* niche than the topic. The engine must state in one sentence what could go wrong. C is held to every gate like A and B.

---

## A11 — Exposé Autopsy

**Benchmark:** Low Volume Capital, *BYD: The Chinese Car Company That's Fooling…* (996s, 31.5×). The first Track 1 benchmark.
**Band:** median 13 · mean 14.7 · ≤6w 12.9% · ≥25w 12.9% · you 4.2/1k. **Overrides, from the benchmark:** first reframe by 25%, 12+ character words ≤ 16/1k, same-opener run ≤ 4. Third person, prosecutorial, low on second person.

**Beat map** (positions measured on the benchmark):

| % | Beat |
|---|---|
| 0–4 | **The visible success, in the viewer's world** (the cars on your streets), then **the contrast image** far away (fields of unregistered cars rotting). Name it: the illusion. |
| 4–8 | **Promise the evidence map** in one line: the three things we'll prove. |
| 8–16 | **The celebrated story and its believers:** Buffett, Harvard, Goldman, the BBC, Forbes. Then the turn: none of them were lying; they were reading the company's script. |
| 17–26 | **The anomaly number:** a price no explanation covers. Concede the official explanation, show it isn't enough, then **reframe the question** ("not how they win — who pays"). |
| 28–58 | **Evidence pillars, escalating by severity, each with a named source:** subsidies → the honest complication (almost every Chinese firm is subsidised) → hidden debt → paper sales. |
| 58–69 | **Human cost,** with the company's response and the investigators' finding. |
| 69–78 | **The core promise failing:** recalls hit the battery, the very thing the company is famous for. |
| 79–85 | **Precedent:** an earlier collapse that ran the same pattern (Evergrande). |
| 90–96 | **Widen:** "this story is not about cars" — the playbook across industries, and the policy response. |
| 96–100 | **Viewer stake** (your pension fund holds it), a one-line recap of the pillars, a closing question. |

**FinanceCraft rules for A11** (the highest legal-risk skeleton):
- Keep the structure; drop the benchmark's certainty where the documents don't support it. Its title and a few lines ("shell game", "fooling") state allegations as fact. Ours word allegations as allegations ("one research firm estimates…").
- Every pillar carries a `[PRIMARY]` source from the research brief, and the company's response appears for every serious charge. The benchmark does this once (Brazil); we do it throughout.
- Keep the honest-complication beat. It's in the benchmark, and it's what makes the rest believable.
- Real people: quote cards only, never invented speech.

**Verified excerpts:**
- "None of those institutions was lying on purpose." (the turn that keeps it from being a rant)
- "The question is who is covering the bill?" (the reframed question)
- "Not a better product, a better illusion."

**Brief addendum:**
```
## PART 8 — Exposé kit (skeleton A11)
- Visible success: where the viewer already sees it in daily life.
- Contrast image: one photographable scene that contradicts it, with source.
- Celebrated story: 3–5 named believers and what each said, with sources.
- Anomaly: one number the official explanation can't cover, plus that explanation.
- Evidence pillars: 4+, each a different kind (money, debt, sales, people, product), each marked [PRIMARY] / [SECONDARY] / [UNCERTAIN].
- Company response: to each serious charge, with source.
- Honest complication: what makes the case weaker or the company less unusual.
- Precedent: an earlier collapse with the same pattern, specifics included.
- Viewer stake: how it reaches the viewer's own money.
```

---

## A8 — Reversal Explainer

**Benchmark:** inkly, *Why Desert People Wear More Clothes in Extreme Heat* (611s). `top_outliers/01_…`
**Band:** median 16 · mean 17.0 · ≤6w 9.0% · ≥25w 18.9% · you 36.2/1k (**reported, not gated** — Egyptians runs 7.6 and still hit 90.8×). Longer, flowing sentences are native to this skeleton; don't staccato it. Egyptians itself still fails the A8 long-sentence and first-reframe gates: it's the more essayistic sister, and the band follows the stronger 253× video.

**Beat map** (positions measured on the benchmark):

| % | Beat |
|---|---|
| 0–6 | **Paradox as flat fact.** First sentence states the contradiction. No setup. |
| 6–15 | **Validate the wrong instinct** in body terms, then ask how the people who know best reached the opposite answer. Promise the answer. |
| 15–30 | **The hidden variable.** The one fact that makes intuition wrong (two heat sources, not one). |
| 31 | **Mechanism layer 1** — first payoff. |
| 43–48 | **Layer 2**, bigger — plus a **physical stake** (dehydration kills). |
| 60 | **Layer 3** — the one nobody expects. |
| 65 | **Nested paradox.** A second contradiction inside the first (black robes), resolved with a real test or document, not assertion. |
| 85–100 | **Button:** turns the mechanism into a statement about instinct vs. knowledge. |

**FinanceCraft mapping (Track 1):** Prior = the commonly-told version (research Part 1). Reversal = Angle Statement. Layers = Gap List items ordered by size. Nested paradox = Pivotal Detail. Physical stake = texture. Honest complication = an Open Question. The existing research prompt already produces most of this.

**Verified excerpts:**
- "They do the opposite. They cover up." (reversal, stated in two short sentences)
- "And your instinct screams that this is insane." (validating the prior before breaking it)

**Note:** the sister video (Egyptians, 90.8×) runs even longer sentences and fails A8's band. That's fine. It isn't the calibration video, and the band is a floor for readability, not a ceiling on quality.

**Brief addendum** (paste below the research prompt when A8 is chosen):
```
## PART 8 — Reversal kit (skeleton A8)
- The prior: the one sentence the average viewer believes. Plain words.
- Mechanism layers: three facts that each explain more than the last. Order them smallest to biggest.
- Nested paradox: a second thing that looks wrong even after the main answer lands. What resolves it, and the source.
- Physical stake: what actually breaks, hurts, or disappears if the prior is followed.
```

---

## A9 — Second-Person Parable

**Benchmark:** Hidden Yield, *Why You Must Look Like a Loser to Escape the Rat Race* (546s). `top_outliers/02_…`
**Band:** median 12 · mean 13.7 · ≤6w 24.8% · ≥25w 13.3% · you 69.0/1k · **TURN1 override 30%** (it opens on a scene; the first keyword reframe lands at 27%).

**Beat map:**

| % | Beat |
|---|---|
| 0–14 | **Sensory scene, exact prices.** A named foil does the conventional thing. "You" do the contrarian thing. The social cost is visible on faces. |
| 14–23 | **Mentor + flipped artifact.** An object read one way (old truck = struggling) is revealed to mean the opposite (owns four properties). |
| 23–39 | **Named section: the system.** The mechanism, with the thesis reframe line. |
| 39–58 | **Phase 1 — the cost, then the flip.** Timeskips carried by decaying objects (paint chip, cracked phone). Pain turns to advantage at a stated month. |
| 58–71 | **Phase 2 — proof by repetition.** 3–4 side characters each misjudge you, each with a dollar figure attached. |
| 71–84 | **Vindication event.** An outside shock (recession) hits; the foil collapses; one quiet exchange. |
| 84–100 | **Callback + button.** The opening artifact pays off. Direct-address close. |

Section markers are bare noun phrases ("The pity phase.").

**FinanceCraft rules for A9:**
- Track 2 only. Every character is invented. HYPOTHETICAL badge and lavender register apply.
- **The Stakes Contract does not apply** (no clock, no adversary). It is replaced by a **Cost Contract**: by word 150, the viewer knows the contrarian choice, its social cost, and the named foil.
- **Add what the benchmark lacks: an honest complication.** Hidden Yield never concedes that income, luck, or timing matter. We do, once, before the vindication. It's the difference between a parable and propaganda.
- The dollar figures must survive the invention prompt's Part 5 (mechanic verified). "$280K by 35" has to be reachable from the stated savings and returns.

**Verified excerpts:**
- "Not envy, recognition." (a reframe compressed to three words)
- "You let them think it." (the thesis as an action, not a claim)

**Brief addendum** (replaces invention-prompt Part 2 for A9):
```
## PART 2 — The parable kit (skeleton A9; replaces "The contract")
- Contrarian choice: the one thing "you" do that others read as losing.
- Foil: one named friend doing the conventional thing, with one object that shows it.
- Mentor + artifact: an object everyone misreads, and what it really means.
- Misjudging characters: 3–4 people, each misjudging you once, each with a dollar figure.
- Timeskips: the ages or months where the story jumps, and the object that shows time passed.
- Vindication event: the outside shock that separates the two paths.
- Honest complication: where the contrarian path can still fail.
```

---

## A10 — Scale Wall (provisional)

**Benchmark:** Kurzgesagt, *Why Humanity Will Never Leave The Solar System* (845s). `top_outliers/10_…`
**Band:** median 12 · mean 14.7 · ≤6w 22.1% · ≥25w 16.6% · you 15.5/1k. **Provisional** (sub-1× benchmark): the band is calibration, not performance evidence.

**Beat map:**

| % | Beat |
|---|---|
| 0–5 | **Absolute claim** as the first sentence, total confidence. |
| 5–15 | Acknowledge the hope ("we've made videos saying…"), "but there's a catch." Name the barrier as a mystery. |
| 15–25 | **Carry one unit** (travel time at a stated speed) up the ladder: Mars → Pluto → Oort Cloud. Each rung is reasonable; the pile-up is the "oh no." |
| ~25 | **Upgrade the tool once** (a faster ship) — a hope beat. |
| mid | **Second, unrelated barrier** stacks on just as the first looks solved. |
| 84–100 | **Humility close:** a historical prediction that aged badly; hope this one does too. |

**Finance use:** national debt payoff, "why a billionaire can't spend it," derivatives notional. The unit must be body-relatable: years of median salary, seconds per dollar, stacked bills against a building.

**Verified excerpt:** "You will never leave the solar system." (the whole thesis, no hedge)

**Brief addendum:**
```
## PART 8 — Scale kit (skeleton A10)
- Absolute claim: one sentence, no hedge.
- Carried unit: the single unit every number is converted into.
- Escalation ladder: 4+ rungs, each with the figure in that unit.
- The upgrade: one improvement that looks like it solves it.
- Second barrier: an unrelated obstacle that appears after the upgrade.
- Humility close: a real past prediction that turned out wrong.
```

---

## A12 — World Cascade (provisional)

**The most common what-if format** — Kurzgesagt's *What if…*, the What If channel. The premise changes the **world**, so the video tours the world. Use it whenever the premise applies to everyone ("what if humans lived to 150", "what if the Moon vanished"). Never shrink a world premise onto one or two characters.

**Benchmark:** none in the idea bank yet. Add 1–2 world-scale what-if transcripts (e.g. a Kurzgesagt or What If outlier) to `references/idea_bank/`, then measure a band. Until then `gate_check.py -a 12` borrows A10's Kurzgesagt band and says so.

**Beat map:**

| % | Beat |
|---|---|
| 0–8 | **The switch, flipped.** State the premise flatly and show day one — one vivid image of the world the moment it changes. |
| 8–20 | **The world we take for granted.** How things work *now* because of the constraint the premise removes (we die around 80, so careers, marriages, pensions and elections are all sized to that). This is what the rest of the video breaks. |
| 20–80 | **The tour.** 4–6 domains, each a mini-story: the obvious first effect, then the **second-order** effect nobody thinks of. Order by surprise, not by category. Typical domains: body, family and relationships, work and money, society and politics, the planet, meaning. |
| ~60–70 | **The consequence nobody expected** — the domain where the premise's "obvious good" turns out bad (or its obvious bad turns out good). The video's biggest turn. |
| 80–95 | **Long run.** A century or more later: what the world settles into. |
| 95–100 | **What it says about now.** One line turning back to the viewer's real world — a question or an image, not a lesson. |

**Rules:**
- Characters are allowed only as brief *illustrations inside a domain* (a 140-year-old intern), never as the spine.
- One domain may go deep on money; money never becomes the whole video.
- Real mechanics must be right (the mechanic check), but real history stays off screen unless it's a reveal.

**Brief addendum:**
```
## PART 8 — Cascade kit (skeleton A12)
- The constraint: what the world is built around today that this premise removes.
- Day one: one concrete image of the moment it changes.
- Domains: 5–7 candidates. For each: first-order effect, second-order effect, one concrete image.
- The upside-down domain: where the obvious good becomes bad (or vice versa).
- The long run: what the world looks like 100+ years later.
- The mirror line: what this says about how we live now.
```

---

## A1 — First-Principles Explainer (economics style, provisional)

**Benchmark:** Martik Finance, *How Currencies Actually Work* (623s). Transcript in `references/transcripts/`.
**Band:** median 13 · mean 14.1 · ≤6w 15.8% · ≥25w 13.3% · you 23.0/1k.

**Beat map** (positions from the Bible's verified excerpt timestamps; approximate until the transcript is re-measured):

| % | Beat |
|---|---|
| 0–5 | **Everyday friction.** A small, irritating, physical moment (airport exchange booth, $100 in, less back). End it on a hint that a hidden system did this. |
| 5–30 | **The simple mechanism, demonstrated before it's named.** An if/then pair the viewer can feel ("if everyone wants euros…"), then a one-word reset ("Simple."). |
| ~32 | **Announce the engines** — "there are four big engines behind that" — only after the viewer already feels the mechanic. |
| 32–60 | **Engines 1–4,** each with its own physical analogy and a consequence, not a definition. |
| ~63 | **The intuition break.** "You'd assume X is always good, right? Not necessarily." The technical label arrives last and is deflated with a joke. |
| 95–100 | **Callback close** to the opening image, with one metaphor. |

**Verified excerpts:**
- "Was it robbery? Not exactly." (a question answered with a two-word turn)
- "Nobody's shooting, but everyone's trying to make their exports cheaper…" (the label deflated after it's named)

**Brief addendum:**
```
## PART 8 — First-principles kit (skeleton A1)
- The everyday friction: one small physical moment where the viewer met this system without knowing it.
- The engines: 3–5 forces that drive it. For each, an if/then example with real stuff (apples, euros, a queue).
- The intuition break: what the viewer assumes is always good or bad, and why it isn't.
- The label to deflate: the one technical term worth naming, and a plain-words joke that punctures it.
- The callback: how the opening moment looks different after the video.
```

---

## A4 — Inside-the-P&L Breakdown (finance style, provisional)

**Benchmark:** Mr. Finance, *The Economics of Owning a Movie Theater Chain* (1386s). Transcript in `references/transcripts/`.
**Band:** median 15 · mean 16.9 · ≤6w 13.7% · ≥25w 20.9%. Long sentences are native: a cost structure needs clauses. Jargon still stays under 4.0/1k (the benchmark ran 1.2).

**Beat map** (approximate, from the Bible's excerpt timestamps):

| % | Beat |
|---|---|
| 0–3 | **The naive dream.** "So you want to own a…" Build the romantic version in two or three sentences. |
| ~3 | **"Here's the problem."** The one hidden cost that breaks naive operators. |
| 3–30 | **One transaction, walked in dollars.** $15 ticket → the supplier's cut → overhead → what's left. |
| ~33 | **The real product.** What the business actually sells vs what the customer thinks they buy, turned into a countable unit (screening slots per day). |
| 33–60 | **The high-margin lifeline** that keeps the doors open (popcorn, subscriptions, financing fees). |
| ~65 | **The fixed-cost danger.** The long-term commitment given physical weight (a 20-year lease as an immovable object). |
| 95–100 | **Structural close:** a list of concrete revenue *objects*, not abstractions. |

**Track 1 use:** strong for corporate autopsies. The walked transaction and cost table come from the company's own numbers. The "real product" is often the Angle Statement.

**Verified excerpts:**
- "Here's the problem." (three words carry the thesis pivot)
- "The real inventory here is not popcorn or soda. It is screen time." (an accounting noun turned countable)

**Brief addendum:**
```
## PART 8 — P&L kit (skeleton A4)
- The romantic illusion: what outsiders think this business is.
- The walked transaction: one sale, in dollars, down to what's left. Source every split.
- The real product: what the business actually sells, as a countable unit.
- The lifeline: the high-margin side business that keeps it alive, with its margin.
- The fixed-cost danger: the long commitment that turns deadly when sales drop, as a physical object.
```

---

## A7 — Compounded Playbook (personal-finance style, provisional)

**Benchmark:** LITTLE BIT BETTER, *How To Hit Financial Freedom SO Fast It's Almost Unfair* (756s). Transcript in `references/transcripts/`.
**Band:** median 6 · mean 7.6 · ≤6w 52.4% · ≥25w 0.9% · you 75.6/1k. The shortest, most direct voice in the library.

**Beat map** (approximate, from the Bible's excerpt timestamps):

| % | Beat |
|---|---|
| 0–3 | **One number as the first sentence** ("Nine years."), contrasted with the conventional path. Teaching starts by ~0:18: no intro, no roadmap. |
| 3–95 | **5–9 numbered rules,** each a gate the viewer passes. Each has a physical threshold ("save $1,000 fast"), never a label ("emergency fund"). |
| ~40 | **The command stack.** Recap in three short beats, a two-word interrupt ("Hold on."), then the consequence of skipping as a physical hit. |
| 95–100 | **One sharp binary,** no recap of the rules. |

**FinanceCraft adaptation (required):**
- The benchmark's hook is a personal credential ("it took me nine years"). FinanceCraft has no first-person creator. Use either a **composite character** (Track 2 framing, HYPOTHETICAL badge) or the **number itself as the hook** with no claimed experience ("Four years. That's the gap between…").
- The lever's math (e.g. savings rate vs years to freedom) must be verified like a Track 2 mechanic.
- Add one **honest complication**. The benchmark is pure conviction; income level and luck matter, and saying so once earns trust.

**Verified excerpts:**
- "Nine years." (the whole hook is a number)
- "You can have a hard four years now or a hard 40 years later." (the closing binary)

**Brief addendum:**
```
## PART 8 — Playbook kit (skeleton A7)
- The single-number hook: one figure or duration, and the conventional figure it beats.
- The lever: the one mathematical relationship the video rests on. Show the math.
- The rules: 5–9 steps, each with a physical threshold in dollars or days.
- The skip consequence: what physically goes wrong if a step is skipped.
- Honest complication: who this path doesn't work for.
- The closing binary: one either/or sentence.
```

---

## Existing skeletons — beat maps (full generator prompts stay in the Bible)

**A5 Constrained Hypothetical** ($1T, 99.3×). Stakes Contract complete by word 80. Ledger beat at the end of every time block, same wording shape each time. Escalate by *category*, not just amount. The wall repeats three times with rising stakes: money solves the easy version and exposes a harder, unpriced one. Twist is a systems limit, not a moral. Button turns the experiment into a real-world observation.
*Excerpt:* "Not the number, the ring count."
*Brief:* invention prompt as-is.

**A6 Two-Character Simulation** (Rent vs Buy, 66.2×). Two named characters, identical on every number, different only in values. Checkpoints (e.g. years 0 / 3 / 10 / 20), recalculated each time. Pre-empt the obvious objection at the first checkpoint. Let the "wrong" choice stay competitive for most of the runtime. Convert the math question into a behaviour question. Close on two direct questions, not a slogan.
*Excerpt:* "Financially, they are identical."
*Brief addendum:* matched characters · checkpoints with figures · the pre-empted objection · the behaviour the result depends on. Invented characters → HYPOTHETICAL framing, whatever the track.

**A3 Causal-Chain Explainer** (Petrodollar, 13.4×). Authority hook: a hidden system you don't know runs your life. Strict cause→effect chain; each step causes the next. State the loop once, numbered, at the midpoint, after its parts are built. One everyday analogy for the hard part (Threads vs Twitter for switching cost). Close on an open threat, but as a button — the reference's next-video CTA is handled at production.
*Excerpt:* "If every country needs oil, and oil is sold in dollars, then every country needs dollars."
*Brief addendum:* the causal chain (dated) · the loop · one everyday analogy.

**A2 Bet Chain** (NVIDIA, 2.68×). Cold open compresses the whole arc into one sentence plus a forward tease of later conflict. 4–5 bets, each riskier. One payoff planted early lands about two-thirds through. Close on the subject's **real, sourced** quote. For collapse stories, invert it: the bets that failed.
**Hard divergence from the benchmark:** Crayon Capital reenacts invented dialogue for real people ("subsidizing a hobby for PhD students"). **FinanceCraft does not.** Keep the bet structure; carry voices only through sourced quotes on quote cards.
*Brief addendum:* the bet chain (4+, dated, sourced) · the deferred payoff · the sourced closing quote.

---

## Visual layer (every skeleton)

Encouraged, not gated:
- **Opening (first ~20s):** open cold on motion — no logo, bumper or title card — and let the first image carry the video's central contradiction. **Strong default: AI video carries the hook** — usually one or two long clips spanning the opening sentences. A Remotion piece or a single still may open instead only when it genuinely lands the hook harder; say why in one line.
- **Signature visual:** each skeleton's (table above) lands on its key story moment.
- **Big effects** (montage, tunnel, flywheel, flyover) go on turning points: the reversal, the wall, the vindication, the pillar reveal. Not as decoration.

One rule:
- **Keep motion out from under speech.** When a character speaks or a quote card is up: simple frame, slow camera, held long enough to read. Montages and tunnels go over narration that carries little new information (recaps, chronologies, transitions).

---

## Bible integration status

All eight Bible edits this library originally required (CP-0 rows 8–11, A5-scoped Stakes Contract, point-of-entry menu, skeleton-band sentence length, A8–A11 matrix rows + provisional flags, CP-3 skeleton IDs, A7 hook adaptation, expanded reframe word list) were verified as applied on 2026-09-26. The list was removed so no future run re-applies them. The Bible now lives in `bible/`; its CP-0 table is `bible/06-retention-physics-cp0.md`.
