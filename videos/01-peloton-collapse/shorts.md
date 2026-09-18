# Peloton Collapse — Vertical Shorts Spinoffs (`shorts.md`)

> **Architectural Purpose:** Standalone vertical (9:16) high-velocity investigative shorts derived directly from the master long-form Peloton documentary. Designed to drive top-of-funnel algorithmic discovery on YouTube Shorts, TikTok, and Instagram Reels. All visual assets are repurposed from existing 4K long-form stills and Remotion renders.

---

## Master Technical Specification for Shorts
* **Format:** Vertical 9:16 (1080×1920), 30fps
* **Target Runtime:** 45–55 seconds (~110–135 words at 155 WPM)
* **Visual Pacing:** Cut / motion downbeat every **1.5 to 2.5 seconds**
* **Audio Voice Anchor:** `"Conversational business explainer, clear and engaging."`
* **Audio Mix:** VO at 0.0 dB (-14 to -16 LUFS), BGM ducked to -34 dB, tactile foley on document slams

---

## Short 1: The $400 Million Ghost Factory

* **Target Filename:** `01_short_ghost_factory.mp4`
* **Target Voiceover Audio File:** `voiceover/short_01_ghost_factory_vo.wav` (24-bit 48kHz WAV, -16 LUFS)
* **Source Master VO Chunks:** `chunk_000_001.wav`, `chunk_002_003.wav`, `chunk_022_023.wav`, `chunk_048_049.wav` (from `assets/voiceover_package_20260915_152424/chunks/`)
* **Runtime:** ~48 seconds (124 words)
* **Core Hook:** The $400M mega-factory liquidated for scrap before producing a single bike.
* **Reused Long-Form Assets:**
  - `010_ohio_farmland_drone.mp4` (Establishing aerial)
  - `040_deed_purchase_price.png` (Wood County deed $33M)
  - `050_monolith_interior.png` (Empty structural steel interior)
  - `080_output_park_rendering.png` (Architectural 3D rendering)
  - `090_assembly_line_blueprint.png` (2,000 workers stamping blueprint)
  - `100_capital_destruction_card.mp4` (Remotion $400M committed vs $33M recovered)
  - `800_first_solar_boundary.png` (First Solar signage)
  - `810_padlocked_gate.png` (Silent padlocked gates)

### Spoken Narration & Delivery Script
* **Voice Control Instruction:** `"Conversational business explainer, clear and engaging. Speaks with cool, unhurried curiosity, letting the staggering contrast land."`
* **Voiceover WAV Asset:** `voiceover/short_01_ghost_factory_vo.wav`

> "This 1 point 2 million square foot unfinished mega-factory in Wood County, Ohio cost four hundred million dollars to build. Two years later, it was sold for thirty-three million dollars in cash.
>
> In May 2021, Peloton broke ground on the Peloton Output Park: a massive industrial foundry engineered to stamp out 1 point 5 million exercise bikes every single year, employing two thousand American workers.
>
> But by the time the concrete dried, the pandemic quarantine had ended. Gyms reopened. People went outside. And demand for stationary bikes collapsed off a cliff.
>
> Peloton was stuck with a half-built steel monolith bleeding millions in property taxes. In 2024, they sold it to a solar panel manufacturer at a ninety-two percent loss. 
> 
> A four-hundred-million-dollar monument to corporate hubris... that never produced a single bike."

### CapCut Vertical 9:16 Assembly Guide
* **Audio Track Setup:**
  - **Track A1 (Dialogue VO):** `voiceover/short_01_ghost_factory_vo.wav` (0.0 dB gain, normalized to -16 LUFS, speech clarity priority).
  - **Track A2 (Score/BGM):** `peloton_bgm_act4_reckoning.mp3` (ducked to -34 dB during speech; swells to -26 dB during the final 4 seconds).
  - **Track A3 (Tactile Foley):** Paper slide at 0:05 (`040_deed`), low bass thud at 0:34 (`100_capital_destruction_card`).
1. **0:00 – 0:08 (The Contrast Hook):** Open on `010_ohio_farmland_drone.mp4` (center-cropped to 9:16, slow vertical tilt-down). Cut to `040_deed_purchase_price.png` with a crisp paper slide foley at 0:05.
2. **0:08 – 0:22 (The Grand Vision):** Cut to `080_output_park_rendering.png` (slow push-in) $\to$ `090_assembly_line_blueprint.png` (scale 1.15, slow drift right).
3. **0:22 – 0:34 (The Demand Crash):** Cut to `050_monolith_interior.png` (empty vacant bays, color-graded cooler with desaturation) $\to$ `810_padlocked_gate.png`.
4. **0:34 – 0:48 (The Liquidation Verdict):** Cut to `100_capital_destruction_card.mp4` (Remotion counter dropping from $400M to $33M) $\to$ `800_first_solar_boundary.png`.

---

## Short 2: The Most Cursed 7 Days in PR History

* **Target Filename:** `02_short_ryan_reynolds_ad.mp4`
* **Target Voiceover Audio File:** `voiceover/short_02_ryan_reynolds_ad_vo.wav` (24-bit 48kHz WAV, -16 LUFS)
* **Source Master VO Chunks:** `chunk_005_006.wav`, `chunk_006_007.wav` (from `assets/voiceover_package_20260915_152424/chunks/`)
* **Runtime:** ~50 seconds (131 words)
* **Core Hook:** The bizarre sequence of pop-culture catastrophes that tanked Peloton's stock.
* **Reused Long-Form Assets:**
  - `120_viral_christmas_commercial.png` (2019 Christmas ad)
  - `130_mr_big_heart_attack.png` (Sex and the City HBO broadcast mock)
  - `140_ryan_reynolds_parody.png` (Maximum Effort parody commercial)
  - `150_tabloid_media_chaos.png` (Tabloid headlines & breaking news)
  - `170_fictional_tv_vs_50b.png` (Stock chart drop vs real loss)

### Spoken Narration & Delivery Script
* **Voice Control Instruction:** `"Conversational business explainer, clear and engaging. Speaks with dry, amused irony, matter-of-fact and unhurried."`
* **Voiceover WAV Asset:** `voiceover/short_02_ryan_reynolds_ad_vo.wav`

> "This might be the most cursed seven days in corporate PR history.
>
> In December 2021, the Sex and the City reboot premiered. Within the first forty minutes, the beloved character Mr. Big suffers a fatal heart attack immediately after riding a Peloton Bike Plus.
>
> Overnight, Peloton's stock plummeted eleven percent.
>
> Scrambling to contain the damage, Ryan Reynolds and his agency worked around the clock, producing a viral parody commercial in just forty-eight hours featuring the actor alive and well. The internet erupted in praise. Peloton looked like marketing geniuses.
>
> Then, four days later... the actor was hit with serious sexual assault allegations.
>
> Peloton had to frantically scrub the commercial from the internet. It was tabloid chaos. But Mr. Big didn't erase fifty billion dollars of value. A lethal accounting mirage did."

### CapCut Vertical 9:16 Assembly Guide
* **Audio Track Setup:**
  - **Track A1 (Dialogue VO):** `voiceover/short_02_ryan_reynolds_ad_vo.wav` (0.0 dB gain, normalized to -16 LUFS).
  - **Track A2 (Score/BGM):** `peloton_bgm_act1_suspense.mp3` (ducked to -34 dB, comedic record scratch / dead silence drop at 0:34 on sexual assault reveal).
  - **Track A3 (Tactile Foley):** Fast camera shutter clicks at 0:02, heavy gavel / boom at 0:42.
1. **0:00 – 0:06 (The Hook):** Open on rapid-fire 0.8s cuts between `120` and `150` with high-contrast headline flashes.
2. **0:06 – 0:18 (The Heart Attack):** Cut to `130_mr_big_heart_attack.png` (push-in) with red ticker badge `"-11% Overnight"`.
3. **0:18 – 0:34 (The 48-Hour Parody):** Cut to `140_ryan_reynolds_parody.png` (push-in with bright contrast).
4. **0:34 – 0:50 (The Implosion & Real Lesson):** Cut to `150_tabloid_media_chaos.png` $\to$ `170_fictional_tv_vs_50b.png` showing the true 50-billion-dollar stock wipeout.

---

## Short 3: Why Peloton Lost $196 on Every Single Bike

* **Target Filename:** `03_short_inverted_economics.mp4`
* **Target Voiceover Audio File:** `voiceover/short_03_inverted_economics_vo.wav` (24-bit 48kHz WAV, -16 LUFS)
* **Source Master VO Chunks:** `chunk_024_025.wav`, `chunk_025_026.wav`, `chunk_028_029.wav` (from `assets/voiceover_package_20260915_152424/chunks/`)
* **Runtime:** ~46 seconds (120 words)
* **Core Hook:** How selling a $2,000 luxury bike turned into an active cash-draining disaster.
* **Reused Long-Form Assets:**
  - `260_hardware_recurring_fee.png` ($2,245 hardware + $39/mo SaaS)
  - `590_air_freight_burn_counter.mp4` (Boeing 777 air freight counter)
  - `760_hardware_price_cut.png` (Price cut from $1,895 to $1,445)
  - `770_boeing_777_charter.png` (Air freight cargo plane)
  - `780_unit_margin_waterfall_remotion.mp4` (Waterfall chart dropping to -$196)
  - `930_warehouses_packed_ceiling.png` (Third-party storage demurrage)

### Spoken Narration & Delivery Script
* **Voice Control Instruction:** `"Conversational business explainer, clear and engaging. Speaks with sharp analytical clarity, dismantling the math step by step."`
* **Voiceover WAV Asset:** `voiceover/short_03_inverted_economics_vo.wav`

> "How do you sell an exercise bike for two thousand dollars and manage to lose money on every single delivery?
>
> In 2020, Peloton was a Wall Street darling. Early adopters were happy to pay over two thousand dollars for the hardware, giving Peloton a gorgeous forty-three percent gross profit margin.
>
> But when supply chain bottlenecks hit, management panicked. To satisfy backlog demand, they began chartering Boeing 777 cargo jets, burning one hundred and eighty dollars per bike just to fly heavy steel across the Pacific.
>
> Then, they slashed the bike's price by seven hundred dollars.
>
> By 2022, after factoring in warehousing, air freight, and delivery vans, Peloton was losing one hundred and ninety-six dollars on every single bike loaded off the dock."

### CapCut Vertical 9:16 Assembly Guide
* **Audio Track Setup:**
  - **Track A1 (Dialogue VO):** `voiceover/short_03_inverted_economics_vo.wav` (0.0 dB gain, normalized to -16 LUFS).
  - **Track A2 (Score/BGM):** `peloton_bgm_act3_bullwhip.mp3` (ducked to -34 dB; math drop to -45 dB at 0:32 during waterfall chart).
  - **Track A3 (Tactile Foley):** Jet engine roar subtle swoosh at 0:12, mechanical counter ticking at 0:35.
1. **0:00 – 0:07 (The Mathematical Paradox):** Open on `260_hardware_recurring_fee.png` (pulsing `$2,245` text overlay).
2. **0:07 – 0:20 (The Panic Freight):** Cut to `770_boeing_777_charter.png` $\to$ `590_air_freight_burn_counter.mp4` (cargo flight cost ticker).
3. **0:20 – 0:32 (The Price Cut & Storage):** Cut to `760_hardware_price_cut.png` $\to$ `930_warehouses_packed_ceiling.png` (boxes stacked to ceiling).
4. **0:32 – 0:46 (The Waterfall Deficit):** Cut to `780_unit_margin_waterfall_remotion.mp4` (bar cascading into negative red zone: `-$196 Gross Loss`).

---

## Short 4: The 125,000 Tread+ Recall & The CPSC Showdown

* **Target Filename:** `04_short_tread_recall.mp4`
* **Target Voiceover Audio File:** `voiceover/short_04_tread_recall_vo.wav` (24-bit 48kHz WAV, -16 LUFS)
* **Source Master VO Chunks:** `chunk_026_027.wav`, `chunk_027_028.wav` (from `assets/voiceover_package_20260915_152424/chunks/`)
* **Runtime:** ~52 seconds (134 words)
* **Core Hook:** The fatal engineering defect and the disastrous 45-day executive standoff with the federal government.
* **Reused Long-Form Assets:**
  - `630_tread_plus_mechanical_gap.png` (Rear roller suction gap diagram)
  - `640_cpsc_urgent_warning_document.png` (CPSC Urgent Warning notice)
  - `650_john_foley_defiant_statement.png` (Foley calling warning "outrageous")
  - `680_tread_plus_stop_sale_warehouse.png` (Halted pallets)
  - `700_cpsc_fine_settlement_document.png` ($19 million civil penalty)

### Spoken Narration & Delivery Script
* **Voice Control Instruction:** `"Conversational business explainer, clear and engaging. Speaks with solemn, measured gravity, letting the corporate arrogance speak for itself."`
* **Voiceover WAV Asset:** `voiceover/short_04_tread_recall_vo.wav`

> "In April 2021, the Consumer Product Safety Commission issued an urgent warning to American households: stop using the Peloton Tread Plus immediately.
>
> The machine had a fatal design flaw: an exposed rear roller that acted like a vacuum, pulling children and pets underneath the high-speed belt. One child had died, and dozens were injured.
>
> But instead of cooperating, CEO John Foley did something almost unheard of in corporate crisis management. He issued a defiant public statement calling the government safety warning 'outrageous and inaccurate.'
>
> For seventeen days, Peloton refused to halt sales.
>
> The backlash was swift and brutal. Within weeks, Foley was forced to issue a humiliating public apology, recall one hundred and twenty-five thousand treadmills, and later pay a nineteen-million-dollar civil penalty for failing to report hazards immediately."

### CapCut Vertical 9:16 Assembly Guide
* **Audio Track Setup:**
  - **Track A1 (Dialogue VO):** `voiceover/short_04_tread_recall_vo.wav` (0.0 dB gain, normalized to -16 LUFS).
  - **Track A2 (Score/BGM):** `peloton_bgm_act4_reckoning.mp3` (ducked to -34 dB, deep tension drone).
  - **Track A3 (Tactile Foley):** Heavy gavel slam at 0:45 on CPSC fine, emergency buzzer sting at 0:02.
1. **0:00 – 0:08 (The Warning):** Cut to `640_cpsc_urgent_warning_document.png` with red callout overlay `"STOP USING IMMEDIATELY"`.
2. **0:08 – 0:20 (The Flaw):** Cut to `630_tread_plus_mechanical_gap.png` (diagram of rear roller mechanism).
3. **0:20 – 0:34 (The Defiance):** Cut to `650_john_foley_defiant_statement.png` highlighting the quote `"Outrageous and Inaccurate"`.
4. **0:34 – 0:52 (The Fallout):** Cut to `680_tread_plus_stop_sale_warehouse.png` $\to$ `700_cpsc_fine_settlement_document.png` with bold badge `"$19M Civil Fine"`.

---

## Turnkey NotebookLM Video Overview Prompt (One-Shot Multi-Short Generation)

```markdown
NOTEBOOKLM VIDEO OVERVIEW PROMPT: PELOTON INVESTIGATIVE SHORTS

STYLE & AESTHETIC DIRECTIVE:
Clean flat vector editorial illustration with soft cel-shading on an off-white architectural parchment grid background (#F8F6F0). Accent colors: Slate Blue (#2563EB), Warning Crimson (#D32F2F), and Charcoal (#0F172A). Strictly avoid photorealism, 3D CGI, claymation, craft textures, or generic corporate stock art.

FORMAT & PACING:
Vertical 9:16 mobile format (1080x1920). Fast-paced investigative cadence with visual cuts every 1.5 to 2.5 seconds. On-screen document highlights, data callouts, and typography must be centered to remain clear of TikTok/Reels UI overlays.

VOICE OVERVIEW INSTRUCTION:
Conversational business explainer tone. Authoritative, articulate, and unhurried downbeats. Let the cold financial contrast and documented evidence carry the tension without shouting.
```
