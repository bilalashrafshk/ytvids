<!-- Part of the FinanceCraft Channel Bible. Index: ../FinanceCraft — Channel Bible, Asset Guide & Description.md -->

# **FinanceCraft — Audio Architecture & Sound Design Engine (Empirical BGM, Voice Dynamics & Adaptive Audio Direction)**

> **Architectural Purpose & Core Protocol**  
> Audio is 50% of the retention equation in documentary filmmaking. In amateur faceless videos, background music is treated as an afterthought—a single looping MP3 dropped onto Track 2 at a flat -20 dB. In top-tier channels (*Crayon Capital, Martik Finance, Mr. Finance, Lock Stock Finance, Logical Money*), **audio is dynamic, act-based, frequency-carved, and emotionally adaptive**. The soundscape changes continuously in sync with the script’s psychological beats, cognitive load, and narrative stakes.  
>  
> This master section codifies the empirical audio physics, music selection engine, voiceover processing chain, and automated mixing rules derived from direct signal analysis of industry-leading YouTube references.

---

## **1. Empirical Signal Analysis: The Real Data Behind Top Channels**

Direct signal processing and spectral measurement (`ffmpeg astats`, `ebur128`, and RMS envelope detection) of real audio tracks from benchmark finance channels revealed four decisive truths:

| Benchmark Channel & Video | Video Format / Focus | Voice Peak RMS | BGM Bed RMS | Dynamic Delta (Ducking) | Pauses Count (in 45s) | Avg Pause Duration | Measured Low-End Energy (<120Hz) | Core Sonic Signature |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Crayon Capital** (*Nvidia Like You're 5*) | Playful Tech / Hardware Explainer | **-16.2 dB** | **-34.0 dB** | **17.8 dB** | **1 pause** | **0.41s** | 9.4% (Snappy punch) | Relentless, upbeat momentum; high music audibility; almost zero dead air; bouncy staccato plucks. |
| **Logical Money** (*Rent vs Buy - Real Math*) | Pedagogical Math / Balance Sheets | **-14.6 dB** | **-69.8 dB** | **55.2 dB** | **13 pauses** | **0.67s** | 5.2% (Warm floor) | **Near-zero music**. Background is pure whisper-quiet room tone (-70 dB) to eliminate cognitive friction during math. |
| **Martik Finance** (*How Currencies Work*) | Investigative Macro Economics | **-9.8 dB** | **-44.9 dB** | **35.2 dB** | **10 pauses** | **0.60s** | 1.0% (Clean sub) | Ultra-compressed broadcast voice right against the ear; wide dramatic pauses; modular synth suspense bed. |
| **Mr. Finance** (*Movie Theater Economics*) | Corporate Autopsy / Downfall | **-18.1 dB** | **-49.5 dB** | **31.3 dB** | **8 pauses** | **0.50s** | 2.0% (Mids-heavy: 50%) | Smoky corporate noir; warm tape-saturated Fender Rhodes; melancholic lo-fi; cynical, contemplative mood. |
| **Lock Stock** (*The Petrodollar*) | Geopolitical Thriller / Crisis | **-20.1 dB** | **-46.6 dB** | **26.6 dB** | **15 pauses** | **0.74s** | **11.6%** (Massive sub-bass) | Longest pauses; ominous 40Hz sub-rumble; ticking clock pulse; sovereign debt crisis weight. |
| **LITTLE BIT BETTER** (*Financial Freedom Fast*) | Self-Mastery / Mindset Playbook | **-14.6 dB** | **-52.5 dB** | **37.8 dB** | **18 pauses** | **0.67s** | 0.8% (Airy mids: 45%) | Clean inspirational acoustic bed building to euphoric crescendo; high pause count emphasizing key rules. |
| **My Chaotic Stories** (*$1 Trillion in 7 Days*) | Absurdist Satire / Viral Thought Exp. | **-23.8 dB** | **-48.7 dB** | **24.9 dB** | **11 pauses** | **0.45s** | 5.4% (Trap punch) | Fast comedic beat drops; cartoonish orchestral stabs; dynamic punchy pace matching gaming energy. |

### **The Golden Rules of Documentary Audio Mixing:**
1. **The Math-to-Music Inversion Rule (Cognitive Bandwidth):** As on-screen informational and mathematical density increases (formulas, financial statements, multi-line Remotion charts), **background music volume must decrease toward silence (-50 dB to -70 dB)**. Music competing with multi-variable math causes cognitive fatigue and viewer drop-off.
2. **The Unified Dynamic Score Rule (No Overcomplication):** Use a **single cohesive background music score** per episode, tailored to the video's primary archetype (or at most two if a distinct narrative pivot occurs). **Do NOT overcomplicate by forcing 3 to 5 different tracks.** Documentary retention and variety come not from juggling multiple songs, but from **dynamic volume modulation on that single score**:
   - Ducked under speech: **-32 dB to -35 dB**
   - Swelling into dramatic pauses ($>1.2\text{s}$): **+6 dB to +8 dB**
   - Dropping during complex math / balance sheets: **-50 dB to -60 dB** (Math Mode)
   - Cutting completely: **$-\infty\text{ dB}$** on shock reveals (Dead Silence Drop)
3. **The Voice Integrity Mandate:** Narration VO is always the acoustic sovereign. Peak voice level must sit between **-14 and -16 LUFS** (True Peak at -1.0 dBFS), with background music sitting between **18 dB and 35 dB below the voice**.
4. **The VO Volume Stability vs. Dynamic Pacing Mandate (Empirical Rule):**
   - **VO Volume must NEVER fluctuate widely:** Measured data from all reference videos proves that elite documentary voiceovers are brickwall-compressed into a tight **~6 dB dynamic corridor** (standard deviation $\le 2.5\text{ dB}$). The narrator must never drop into an inaudible whisper or jump to an abrasive shout. Every syllable must sit effortlessly in the listener's ear without manual volume adjustments.
   - **What DOES vary in the voice is PACING and PITCH CADENCE, NOT volume:**
     - *Hooks (First 60s):* Spoken **10 to 20 WPM faster** (165–180 WPM) with an urgent, forward-leaning pitch to seize attention.
     - *Core Explanations (60s–180s+):* Settles down into a calm, pedagogical **140–155 WPM** (-10 to -20 WPM shift).
     - *Catastrophic Stats & Dramatic Pauses:* Pacing deliberately stretches out (130–140 WPM) with pregnant pauses ($\ge 1.5\text{s}$) after key punchlines.
   - **The Contrast Axiom:** *VO volume stays locked and flat; VO pacing and pitch vary across narrative acts. Background music volume varies dynamically and aggressively (15 dB to 30 dB swings) via ducking, pause swells, and dead silence drops.*

---

## **2. The 5 Core Music Beds, M1–M5 (Selection & Usage Engine)**

Every FinanceCraft episode must map its narrative acts to one or more of the following 5 core music beds (M1–M5 — never confused with narration archetypes A1–A12 or thumbnail styles T1–T7):

### **M1: Inquisitive Neo-Classical & Playful Tech (Crayon Capital Style)**
* **Sonic Profile:** Snappy, bright, intellectual, and curious. Plucked staccato violins, marimbas, woodblocks, light glockenspiel accents, and dry acoustic percussion. Zero heavy sub-bass drone.
* **When to Use:** Explaining technical architectures (semiconductors, supply chains, algorithms), flywheel mechanics, or foundational corporate origins.
* **BPM Range:** 110 – 125 BPM (Propulsive, upbeat).
* **Target Mix Level:** **-32 dB to -34 dB** under speech (18 dB duck delta).
* **AI Music Prompt (Suno v3.5 / Udio / ElevenLabs Music):**
  ```text
  [Instrumental] Inquisitive minimalist neo-classical corporate explainer, 118 BPM, C Major, staccato pizzicato violins, wooden marimba melodic plucks, light glockenspiel accents, clean warm Rhodes piano chords, subtle muted electronic percussion, playful, intellectual, curious, modern tech documentary background, transparent mix, no vocals
  ```
  *(Negative Prompt: vocals, singing, speech, choir, heavy distortion, harsh drums, electric guitar)*
* **Stock Library Search Tags (Epidemic Sound / Artlist / Musicbed):**
  * `Genres:` Classical $\rightarrow$ Minimalist / Acoustic $\rightarrow$ Quirky  
  * `Moods:` Curious, Playful, Clever, Inquisitive, Technology  
  * `Instruments:` Pizzicato Strings, Marimba, Glockenspiel, Muted Electric Piano  

---

### **M2: Geopolitical Dark Thriller & Ticking Clock (Lock Stock Style)**
* **Sonic Profile:** Ominous, heavy, and impending. Dominated by deep 40Hz sub-bass drones (11.6% low-end energy), analog ticking clock pulses, low cello stabs, and filtered rising synthesizer arpeggios.
* **When to Use:** Geopolitical conflicts, currency warfare, sanctions, sovereign debt defaults, oil embargoes, or catastrophic organizational turning points.
* **BPM Range:** 90 – 105 BPM (Methodical, relentless).
* **Target Mix Level:** **-42 dB to -46 dB** under speech; sub-bass drop swells to **-20 dB** on impact beats.
* **AI Music Prompt (Suno v3.5 / Udio / ElevenLabs Music):**
  ```text
  [Instrumental] Dark cinematic geopolitical thriller underscore, 96 BPM, D Minor, relentless analog ticking clock pulse, deep 40Hz sub-bass drone, menacing low cello stabs, filtered modular synth arpeggios rising in tension, industrial ambience, Hans Zimmer style documentary tension, ominous, high-stakes, suspenseful, no vocals
  ```
  *(Negative Prompt: vocals, singing, uplifting, acoustic guitar, bright piano, funky, dance)*
* **Stock Library Search Tags (Epidemic Sound / Artlist / Musicbed):**
  * `Genres:` Cinematic $\rightarrow$ Dark / Electronic $\rightarrow$ Industrial Underscore  
  * `Moods:` Ominous, Suspenseful, Dark, Restless, Threatening  
  * `Instruments:` Ticking Clock, Sub-Bass Drone, Cello, Analog Arpeggiator  

---

### **M3: Smoky Corporate Noir & Downtempo Lo-Fi (Mr. Finance Style)**
* **Sonic Profile:** Warm, textured, and cynical. Dominated by mid-frequency energy (350Hz–2000Hz). Tape-saturated vintage Fender Rhodes chords, muted upright acoustic bass, subtle vinyl crackle, and unhurried boom-bap drum brushes.
* **When to Use:** Corporate autopsies, executive greed, accounting illusions, failed IPOs, bankruptcies, or uncovering executive excess.
* **BPM Range:** 75 – 88 BPM (Contemplative, cynical).
* **Target Mix Level:** **-45 dB to -49 dB** under speech (31 dB duck delta).
* **AI Music Prompt (Suno v3.5 / Udio / ElevenLabs Music):**
  ```text
  [Instrumental] Downtempo corporate noir jazz lo-fi beat, 82 BPM, F Minor, vintage warm Fender Rhodes chords, subtle vinyl crackle and tape saturation, muffled upright acoustic bassline, lazy dry boom-bap drum groove, melancholic muted trumpet in background, investigative journalism documentary vibe, contemplative, cynical, no vocals
  ```
  *(Negative Prompt: vocals, upbeat, dance, EDM, pop, bright acoustic, stadium rock)*
* **Stock Library Search Tags (Epidemic Sound / Artlist / Musicbed):**
  * `Genres:` Lo-Fi Hip Hop $\rightarrow$ Jazz-Infused / Beats $\rightarrow$ Chill / Downtempo  
  * `Moods:` Melancholic, Thoughtful, Laid Back, Mysterious, Cynical  
  * `Instruments:` Fender Rhodes, Upright Bass, Vinyl Crackle, Muted Brushed Drums  

---

### **M4: Minimalist Pedagogical Bed / Math Mode (Logical Money Style)**
* **Sonic Profile:** Transparent, acoustic, and non-intrusive. Gentle felt piano chords with long natural reverb tails, delicate fingerpicked acoustic guitar harmonics, and subtle warm tape room tone. **Zero drums, zero percussion, zero fast melodies.**
* **When to Use:** Complex math breakdowns, multi-variable formulas, unit economics balance sheets, tax schedules, or animated Remotion financial ledgers.
* **BPM Range:** 60 – 75 BPM (Calm, non-distracting).
* **Target Mix Level:** **-55 dB to -70 dB** (Whisper-quiet floor; effectively transparent).
* **AI Music Prompt (Suno v3.5 / Udio / ElevenLabs Music):**
  ```text
  [Instrumental] Ultra-minimal ambient study bed, 70 BPM, C Major, soft felt piano chords played very slowly with long natural decay, distant acoustic guitar harmonics, warm tape hiss, zero drums, zero percussion, non-melodic, transparent harmonic room tone, educational, calm, focused, serene, no vocals
  ```
  *(Negative Prompt: drums, beat, percussion, brass, fast melody, vocals, bass drop, electronic)*
* **Stock Library Search Tags (Epidemic Sound / Artlist / Musicbed):**
  * `Genres:` Ambient $\rightarrow$ Drone / Neo-Classical $\rightarrow$ Solo Felt Piano  
  * `Moods:` Peaceful, Focused, Calm, Serene, Educational  
  * `Instruments:` Felt Piano, Ambient Pad, Reverb Drone (Filter: "No Drums / No Percussion")  

---

### **M5: Investigative Macro-Suspense & Modular Pulse (Martik Finance Style)**
* **Sonic Profile:** Sterile, institutional, and tension-building. Rhythmic analog synth pulses (Roland Juno / Moog), sweeping low-pass filters, subtle stereo clicks, and sparkling high-frequency shimmer (>8 kHz).
* **When to Use:** Central bank monetary mechanisms, currency debasement, banking panics, inflation spirals, and macro-economic paradoxes.
* **BPM Range:** 98 – 115 BPM (Driving, methodical).
* **Target Mix Level:** **-40 dB to -45 dB** under speech (35 dB duck delta).
* **AI Music Prompt (Suno v3.5 / Udio / ElevenLabs Music):**
  ```text
  [Instrumental] Modern investigative economic documentary pulse, 108 BPM, A Minor, pulsing Roland Juno analog bass synth, rhythmic stereo clicks and high-tech sequence, ethereal synth pads, sweeping low-pass filter, sterile corporate mystery, clean sterile production, investigative, cerebral, tense, no vocals
  ```
  *(Negative Prompt: vocals, guitars, country, acoustic, heavy metal, choir, party)*
* **Stock Library Search Tags (Epidemic Sound / Artlist / Musicbed):**
  * `Genres:` Electronic $\rightarrow$ Ambient Synth / Documentary Underscore  
  * `Moods:` Suspenseful, Serious, Analytical, Neutral, High-Tech  
  * `Instruments:` Analog Synth Pulse, Sequencer, Synth Plucks, Electronic Clicks  

---

## **3. The 4 Subtle Micro-Audio Mechanics (The Production Differentiators)**

The difference between professional documentary soundscapes and amateur editing lies in these four micro-modulations:

```
VOICE SPEECH:   "Nine years. That's how long..."          "...it took to hit freedom."
                [─────────── VO TALKING ───────────]  [PAUSE]  [─────── VO TALKING ───────]
BGM LEVEL:      -34 dB (Ducked in notch)           ──► -26 dB  ──► -34 dB (Re-ducked)
                                                       (SWELL)
EQ PROFILE:     Notch cut (-4dB at 2kHz)           ──► Wide Flat ──► Notch cut (-4dB at 2kHz)
```

### **1. The "Breathe & Swell" Ducking Curve (Pause Compensation)**
* **The Rule:** In flat mixing, music volume stays identical whether the voice is speaking or not. In elite mixing, the background music **breathes** into script pauses.
* **Implementation:**
  * When narration VO is speaking: BGM sits at its base ducked level (**-32 dB to -45 dB** depending on archetype).
  * On dramatic script pauses ($\ge 1.2\text{s}$): BGM **swells upward by $+6\text{ dB}$ to $+8\text{ dB}$** (reaching -24 dB to -26 dB) over a 300ms curve, holding for the duration of the silence to flood the vacuum with emotional weight, then cleanly ducks back down on the exact frame the next spoken syllable begins.

### **2. Frequency Carving / The Speech EQ Pocket**
* **The Problem:** Raising music volume often clashes with human voice frequencies, making words hard to understand.
* **The Solution:** Apply a surgical parametric EQ notch to the BGM master track:
  * **Frequency:** Notch centered between **1,500 Hz and 3,200 Hz** (the human vocal intelligibility core).
  * **Gain:** Cut by **$-3\text{ dB}$ to $-5\text{ dB}$** with a medium Q-curve ($Q = 1.2$).
  * **Result:** The voiceover cuts through like glass without needing to lower the music to inaudibility.

### **3. The "Dead Silence Drop" (The Impact Vacuum)**
* **The Rule:** Absolute silence is louder than an explosion when used strategically.
* **Implementation:** Right before a catastrophic financial stat or revelation (e.g. *"And by Q4... they were $5 billion in debt"*):
  * Cut the background music **completely dead ($- \infty\text{ dB}$)** exactly **$0.6\text{s}$ before the load-bearing sentence**.
  * Deliver the devastating phrase in stark, naked vocal isolation.
  * Trigger a **sub-bass 40Hz thud / low cinematic boom ($-20\text{ dB}$)** on the downbeat of the key metric (*"$5 billion"*), followed by fading in a new, darker music archetype.

### **4. The "Low-Pass Focus Zoom" (Document Inspection Filter)**
* **The Rule:** When the visual punches into a primary forensic document, 10-K balance sheet, or complex spreadsheet:
  * Sweep a **Low-Pass Filter down to 700 Hz – 900 Hz** on the background music for the 3–5 seconds the viewer is meant to read the numbers.
  * The music sounds slightly muffled / underwater, subconsciously signaling to the viewer's brain to redirect 100% of cognitive focus to on-screen comprehension. Sweep the filter cleanly back open to 20 kHz with a soft whoosh when transitioning back to wide cinematic view.

---

## **5. Master Voiceover (VO) & Micro-Foley Standards**

### **Voiceover Processing Chain (VoxCPM2 / Master VO):**
1. **High-Pass Filter (Low Cut):** Steep 24dB/oct cut below **$80\text{ Hz}$** (strips air conditioning hum, mic thumps, and mud).
2. **Dynamic Compression:** Ratio **$4:1$**, Attack **$5\text{ms}$**, Release **$50\text{ms}$**, Soft Knee. Smooths conversational delivery into an authoritatively consistent dynamic range.
3. **Presence & Air EQ:** Gentle $+1.5\text{ dB}$ boost at **$3.5\text{ kHz}$** for consonant crispness; $+2.0\text{ dB}$ high-shelf boost at **$11\text{ kHz}$** for modern documentary proximity.
4. **Master Loudness Target:** **$-14.0\text{ to } -16.0\text{ LUFS}$** (Integrated); True Peak clamped strictly at **$-1.0\text{ dBFS}$**.

### **Micro-Foley Library & Mixing Matrix (Track 2):**
Never use loud arcade sound effects. Foley must be tactile, organic, and sit quietly in the mix:

| Foley Asset Type | Typical Sound Cues | Trigger Moment | Target Mix Level |
| :--- | :--- | :--- | :--- |
| **Forensic Document Handling** | Crisp bond paper slide, archival file folder opening, staple click, ink stamp thud | Insetting an SEC filing, court indictment, or balance sheet | **$-24\text{ dB to } -26\text{ dB}$** |
| **Data & Financial Counters** | Soft vintage mechanical keyboard click, muted digital ticker notch, subtle register tick | Remotion counting numbers, debt tickers, percentage dials | **$-28\text{ dB to } -30\text{ dB}$** |
| **Catastrophe / Climax Drops** | 40Hz sub-bass boom, dark cinema low-end rumble | Chapter title cards, bankruptcy reveals, crash moments | **$-18\text{ dB to } -22\text{ dB}$** |
| **Visual Insets & Transitions** | Soft organic whoosh with high-frequencies rolled off, camera shutter click | Fast punch-in cuts, split-screen reveals | **$-26\text{ dB to } -28\text{ dB}$** |
| **Ambient Room Beds** | 35mm film projector whirr, tape hiss, faint empty boardroom echo | Historical retrospectives, silent visual pauses | **$-32\text{ dB to } -36\text{ dB}$** |

---

## **6. Autonomous Engine Instructions: Dynamic Scoring & CapCut Timeline Assembly**

Whenever the AI generation engine is creating a Production Document or autonomously assembling a project via CapCut MCP, it must follow these deterministic rules:

### **Rule 1: Episode Score Selection (Single Cohesive Bed)**
Before generating Part B or assembling audio, select **one primary cohesive BGM archetype** that embodies the episode's overall editorial identity:
- *Corporate Fraud / Bankruptcy / Executive Greed:* M3 (Smoky Corporate Noir & Downtempo Lo-Fi)
- *Tech Explainer / Hardware / Growth Flywheel:* M1 (Inquisitive Neo-Classical & Playful Tech)
- *Macro-Economics / Currency Debasement / Banking:* M5 (Investigative Macro-Suspense)
- *Geopolitical Conflict / Sovereign Debt / Sanctions:* M2 (Geopolitical Dark Thriller)
- *Personal Finance / Savings / Tax / Mathematical Proofs:* M4 (Minimalist Pedagogical Bed)

*Note:* Do NOT overcomplicate by forcing 3 to 5 separate music tracks. A single cohesive, loopable score bed maintains consistent documentary tone. All variety comes from dynamic volume shaping on that track.

### **Rule 2: Automated Beat-Level Scoring in Part B**
In Part B of the Production Document, every single beat's `Audio Mix & Foley` specification declares volume modulation on the score track:
1. `Base Music Level` (e.g. `-34 dB` during speech, or `-55 dB` during Math Mode on balance sheets)
2. `Dynamic Modulation` (e.g. `Swell +8dB to -26dB during pause [02:14.2 - 02:16.0]`, or `Cut to -inf dB for dead silence at 02:15.5`)
3. `Foley Trigger & Volume` (e.g. `Paper slide on document entrance at +0.4s, gain -26dB`, `40Hz sub-bass drop at +0.2s, gain -20dB`)

### **Rule 3: Autonomous CapCut Timeline Construction (via CapCut MCP)**
When the engine builds the timeline in CapCut Desktop:
1. **Track Structure:**
   * **Track 0 (Video):** Visual beats (AI stills, video clips, Remotion comps).
   * **Track 1 (Voiceover):** Master narration audio (`master_narration.wav`), strictly at **$0.0\text{ dB}$** (pre-normalized to -15 LUFS).
   * **Track 2 (Foley & SFX):** Paper slides, sub-bass drops, clicks, aligned to visual keyframes, set to **$-24\text{ dB to } -28\text{ dB}$**.
   * **Track 3 (Background Score):** The unified background music track running continuously under the narration, seamlessly looped to full timeline duration.
2. **Automated Volume Keyframing:**
   * Parse the voiceover silence intervals from the TTS word-alignment JSON.
   * Wherever silence duration exceeds **$1.2\text{ seconds}$**, place four volume keyframes on the BGM track:
     - $K_1$ (Speech end): Base level (e.g. -34 dB)
     - $K_2$ ($K_1 + 300\text{ms}$): Swell level (e.g. -26 dB)
     - $K_3$ (Next speech start $- 200\text{ms}$): Hold swell (-26 dB)
     - $K_4$ (Next speech start): Duck back to base (-34 dB)
3. **Dead Silence Trigger:**
   * On script tags marked `[DEAD SILENCE]` or major balance sheet reveals, drop the BGM volume to **$-\infty\text{ dB}$** $0.5\text{s}$ before the word, and trigger the Track 2 sub-bass drop on the word's timestamp.
