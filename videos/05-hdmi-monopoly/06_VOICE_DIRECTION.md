# Phase 06: Voice Direction & Audio Stems (VoxCPM2) — Episode 05

> Standalone audio deliverable for Draft A ("Who Gets Paid Every Time You Plug In a TV?"). Accompanies [`06_VOICE_DIRECTION.json`](./06_VOICE_DIRECTION.json), mirrored at `voiceover/VOICE_DIRECTION_VOXCPM2.json`.

## 1. Master Voice Profile

- **Track:** 3, mechanism explainer, Draft A (A3 Causal-Chain)
- **Narrator feel** (guides instructions, never pasted in): wry, curious, third person with a light "you". A sharp friend explaining something they've just noticed, never a lecture.
- **Voice:** Controllable Cloning against the channel's saved reference clip. Confirm the clip is clean and at least 5 seconds before the batch. Fix the seed across calls if using the API.
- **Target cadence:** about 155 words a minute. **Total:** 1967 spoken words in 50 chunks, about 12.7 minutes.
- **Inline vocal tags used:** none, deliberately. The script's facts (the four cents, the fourteen million dollars) are the ones the rules say not to dress with a sigh or a laugh, and the wit is in the words. Add one only if a spot-test shows a line needs it.

## 2. Spoken-text normalisation (what changed from the script)

- **Numbers and years are written out:** "two thousand two", "twenty ten", "twenty twenty-five", so the model never guesses how to read a year.
- **Decimals:** none in the narration. "Version two point two" and "H D M I two point one" already use the word "point". Zero raw decimals, zero digits of any kind remain.
- **Acronyms spelled as letters:** "H D M I", "D V I", "A M D", "H D Fury". "Warner Bros." is spoken "Warner Brothers".
- **No bracket tags, headers, underscores or stage directions** are in any `target_text`.

## 3. Chunk Summary Table

| Chunk | Section | Words | Target duration | Delivery instruction |
| :-: | :--- | :-: | :-: | :--- |
| 0 | Everyday hook | 46 | 18s | Easy and conversational, inviting the listener to actually turn round and look, with a small smile on 'a dozen times without a thought'. |
| 1 | Everyday hook | 18 | 7s | A light, arch beat, letting 'Not much' land dry before the four cents arrives. |
| 2 | Everyday hook | 29 | 11s | Warm and amused, the salt-in-bread line shared like a private joke, the final number left plain. |
| 3 | The turn | 50 | 19s | Leaning in, a touch more serious as the ordinary plug becomes a contract, the company named matter-of-factly. |
| 4 | The promise | 41 | 16s | Steady and promising, laying out the road ahead, then a brisk hand-off into the story. |
| 5 | The mess | 53 | 21s | Playful and visual, ticking through the leads with a tumbling rhythm, the switchboard line a wry aside. |
| 6 | The founders | 56 | 22s | A brisk roll-call of the seven names, each given its own small beat, then knowing on 'still sat down together'. |
| 7 | The founders | 18 | 7s | A quiet pay-off, unhurried, the name landing as the answer to a long-standing problem. |
| 8 | The studios | 8 | 3s | A short, tightening turn, the single word 'Films' held for a beat as the story shifts. |
| 9 | The studios | 50 | 19s | Explaining with growing intrigue, laying out the backers like cards being stacked. |
| 10 | The lock | 45 | 17s | Slow and concrete, an easy show-and-tell, the simplest words given room. |
| 11 | The lock | 52 | 20s | Dry and precise on the bouncer line, then a matter-of-fact settling into what the badges cost. |
| 12 | The lock picked | 11 | 4s | Sharpening into a mock-ominous question, the answer flat and short. |
| 13 | The lock picked | 51 | 20s | Tense and clipped, the pace tightening as the key turns up, holding steady through the warning. |
| 14 | The lock picked | 46 | 18s | A drier storytelling energy, unwinding the sequel with a touch of amusement at the legal argument. |
| 15 | The chain | 18 | 7s | Grounded and reflective, the two short lines carrying weight, the question after them lighter as the story turns. |
| 16 | The loop | 51 | 20s | Measured and clear, ticking off four steps at an even pace so each one lands, the last line a small aside. |
| 17 | The loop | 22 | 9s | Grave weight on 'Nobody voted', slowing a little as the market's single door comes into view. |
| 18 | The loop | 19 | 7s | Plain and wry, the thought experiment offered with a half-smile. |
| 19 | The price | 30 | 12s | Warm and picture-painting, the club drawn with easy relish and a sly close on 'the bouncer's badge'. |
| 20 | The price | 59 | 23s | Curious on the question, then the details laid out crisply, a slight lift when the headline number arrives. |
| 21 | The price | 55 | 21s | Rising amusement as the discount unspools, then a pointed 'Read that again' with an arched eyebrow. |
| 22 | The price | 36 | 14s | A beat of deadpan stillness on 'Four cents', then a brisk, conversational shift into the small maker's story. |
| 23 | The small maker | 48 | 19s | Counting along with the small maker, each cost stacked up steadily, the final figure given a wince. |
| 24 | The small maker | 33 | 13s | Cooler and lighter, the giant's sums dispatched quickly, the answer almost a shrug. |
| 25 | The small maker | 36 | 14s | A knowing turn, the comparison put plainly, the last line carrying quiet weight. |
| 26 | The patents | 17 | 7s | Light, a quick throwaway detail, amused. |
| 27 | The patents | 39 | 15s | Confiding, as if sharing something most people miss, unhurried on 'without being sued'. |
| 28 | The patents | 33 | 13s | Firm, tightening the boundaries one phrase at a time, then a bright turn to the next question. |
| 29 | The money | 55 | 21s | Brisk and numeric, keeping the figures crisp and separate, letting the growth build. |
| 30 | The money | 41 | 16s | Steady and reasoned, the total offered as a careful estimate, a small deflation on 'near the bottom'. |
| 31 | The money | 14 | 5s | Level and understated, brushing off the Big Tech comparison with a shrug. |
| 32 | The money | 15 | 6s | Quiet conviction, the point placed gently but firmly. |
| 33 | The rival | 40 | 15s | Narrating a small failed rebellion, wry and even, a tilt on 'sold as free'. |
| 34 | The rival | 45 | 17s | A sly reveal, the twist delivered with restraint, the shared names given a raised-eyebrow pause. |
| 35 | The rival | 51 | 20s | Rueful and dry, the short line landing first, then more guarded and watchful on the trade-show detail. |
| 36 | The Forum | 59 | 23s | Even and explanatory, keeping the two bodies clearly apart, a small nod on 'same founders'. |
| 37 | The Forum | 22 | 9s | Faintly wry, closing the section on the names changing and the group staying put. |
| 38 | The court | 9 | 3s | Setting the scene with a touch more drama, promising the story that follows. |
| 39 | The court | 67 | 26s | Storytelling, easy and clear, the fee question posed openly and answered flat. |
| 40 | The court | 71 | 27s | Tense and courtroom-quiet, the ruling delivered plainly, a dry lift on 'Call it a monopoly or don't'. |
| 41 | The court | 66 | 26s | Dead level on the payment, a beat of silence, then reflective and slow through the wall line. |
| 42 | The fair case | 54 | 21s | Even-handed and warm, making the fair case sincerely, ending on a soft, human note. |
| 43 | The gate | 29 | 11s | The turn: a small pause, 'But hold on' with a sense of something coming, then measured. |
| 44 | The gate | 45 | 17s | Explanatory and curious, the closing of the rulebook told with mild alarm, the open-source explanation kindly put. |
| 45 | The gate | 55 | 21s | Reading the engineer's words with plain, careful precision, stepping through the sentence without drama. |
| 46 | The gate | 39 | 15s | Matter-of-fact about what is lost, the gaming advice delivered with a wry half-smile. |
| 47 | The joke | 55 | 21s | Playful and incredulous, the label joke turning on the small print, a mock-solemn close. |
| 48 | The close | 30 | 12s | Slow and reflective, returning to the opening image, each short sentence given room. |
| 49 | The close | 35 | 14s | Quiet and clean, the two statements set down evenly, the last question slower and left open. |

## 4. Checks (run on the JSON, not asserted)

- Total chunks 50; longest chunk 71 words; shortest 8 words.
- Digits anywhere in `target_text`: **0**. Raw decimals: **0**. Underscores: **0**. Bracket characters: **0**.
- Volume words ("loud", "shouting", "booming", "raised voice") in any instruction: **0**. Repeated instructions: **0** (all 50 are unique).
- No persona prefix and no identity words (gender, age, accent) in any instruction.
- Chunk 36 of the first cut ran nine sentences, so it was split in two at the turn ("Both trace back..." to "The names on the door change").

## 5. Status (updated after the audio arrived)

- Audio received: `voiceover/full_voiceover_20260929_114124.wav` (694.16 s, original untouched) plus `voiceover/chunk33.wav` (the regenerated chunk). Spliced into `voiceover/master_narration.wav`, 693.46 s, 24 kHz mono.
- Alignment written: `voiceover/alignment.json`, 211 sentences, 91.9% of words matched (the rest is digits-versus-words).
- **Chunk 33 was regenerated and spliced into the master (693.46 s). Every DisplayPort line now matches the script word for word.**

### Original to-do list (kept for reference)

1. Generate each chunk with VoxCPM2 (one call per chunk, never the whole script), assemble `voiceover/master_narration.wav`.
2. Produce the sentence-level timestamp alignment JSON. Beats cannot be built until both exist.
3. Spot-test two lines before the batch: "H D M I" (that it reads as letters) and "Availink" (that the name sounds right). Adjust the spelling if not.
