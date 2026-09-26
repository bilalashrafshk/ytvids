<!-- Part of the FinanceCraft Channel Bible. Index: ../FinanceCraft — Channel Bible, Asset Guide & Description.md -->

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
| **8. Reversal Explainer** | Everyday-phenomenon reversal / myth-busting | 8-12 min | Flowing, longer clauses | Nested paradox held deliberately still mid-motion | *inkly* "Desert People" (253.5x) |
| **9. Second-Person Parable** | Contrarian personal-finance habit, invented characters | 8-10 min | High second-person, staccato | Match cut on a decaying object at each timeskip | *Hidden Yield* (169.6x) |
| **10. Scale Wall** (provisional) | Impossibility / scale-of-the-universe framing | 12-16 min | Steady, escalating | Infinite zoom or flyover up a carried unit | *Kurzgesagt* "Leave the Solar System" (0.38x) |
| **11. Expose Autopsy** | Track 1 scandal / collapse expose | 14-18 min | Third person, prosecutorial | Evidence pillar opens on its source document | *Low Volume Capital* "BYD" (31.5x) |

**Provisional archetypes (1, 4, 7, 10):** these benchmarks sit below the 1x outlier bar (0.33x, 0.09x, 0.54x, 0.38x). The format is sound and the voice band is measured, but there is no evidence *this specific format* over-performs -- only that the finance/economics niche has room for it. They are fully selectable, including as a draft's primary skeleton; `SKELETON_LIBRARY.md`'s HARD STOP 1 output simply labels the choice `(provisional)` so it's made knowingly, not silently.

**Archetypes 8-11** were added after this matrix was first built. Their full voice-anatomy sections, verbatim excerpts, and generator prompts live in `SKELETON_LIBRARY.md`, not below with 1-7. Archetype 11 is the first Track 1 skeleton sourced from an outlier ratio (31.5x) rather than derived from first principles -- see its beat map before writing any expose-format episode, since it carries the highest legal-risk profile of any skeleton (allegations must be worded as allegations, every evidence pillar needs a named source, the company's response is mandatory for every serious charge).

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
- **Visual Sync Integration:** Highly dependent on Remotion financial waterfalls, gross margin comparison cards (`newsroom-chart-animations`), and real cost breakdowns shown per unit a viewer recognises (per ticket, per bike, per cup).

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
5. VISUAL & DATA SYNC: Tag cuts every 3.0–4.0s with [REMOTION: Waterfall P&L Breakdown], [DATA: Cost per Ticket Stack], and [DATA: Margin Inversion Card].

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



**Adaptation for FinanceCraft (see `SKELETON_LIBRARY.md`, A7):** the benchmark opens on the creator's own story ("took me nine years"). FinanceCraft has no first-person host claiming personal financial results. Replace that opening with either a composite protagonist (HYPOTHETICAL framing, Track 2) or a real, sourced person's documented number -- never an invented personal credential for the show itself. The lever driving the rules must be real, verifiable math, checked the same way any Track 2 mechanic is checked.
