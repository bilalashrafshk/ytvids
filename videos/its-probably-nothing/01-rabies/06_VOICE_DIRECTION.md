# Phase 06: Voice Direction — Episode 01: Rabies

> Accompanies [`06_VOICE_DIRECTION.json`](./06_VOICE_DIRECTION.json), mirrored at `voiceover/VOICE_DIRECTION.json`. Chunk format is the same JSON the other channel's episodes use (`chunk_id`, `control_instruction`, `target_text`; no `section` field, by owner decision), by owner decision; BreezeTTS2-specific fields are not assumed. If BreezeTTS2 needs different fields, convert at the last step and leave these files alone.

## 1. Master voice profile

- **Track:** 3, mechanism explainer, Script v3 (A13 Clinical Timeline, three-belief spine).
- **Narrator feel** (guides every instruction, never pasted into one): dry, calm and warm, a clinician who has seen this before and is quietly on Dennis's side. Not gleeful, not solemn. The humour is understatement, so the jokes are delivered flat and the hardest beats slower and plainer.
- **Register map:** cold open dry and quick; the cabin a softer storyteller; the beliefs conversational and wry; the real cases (chunks 17, 30 to 31, 40) serious with no jokes; the wall and the dinner slow and plain; history and numbers brisk and amused; the button warm and direct; the ending quiet.
- **Target cadence:** about 190 words a minute (the reference range for this format is 182 to 199). **Total:** 2463 spoken words in 65 chunks, about 13.0 minutes at that pace.
- **Inline vocal tags:** none. Nothing here assumes tags the TTS engine may not support; every line is carried by the words and the delivery instruction.
- **One voice.** Dennis's lines are on-screen bubbles, not a second voice. His quoted words inside the narration ("No." "Nothing.") are read by the narrator.

## 2. Spoken-text normalisation (what changed from the script)

- Years and numbers are already written out ("twenty twenty-four", "two thousand four"). The one numeric range left as digits in the script, "1980 and 1999", is spoken "nineteen eighty and nineteen ninety-nine".
- Decimals: "one point four million" already uses "point". No digit remains in any `target_text`.
- "CDC" is spoken "C D C". The World Health Organization is spelled out in full.
- No bracket tags, headers, underscores, stage directions or sound-effect words in any `target_text`.
- Quoted dialogue keeps its quotation marks.

## 3. Instruction rules applied

- Delivery only, written fresh for each line; no persona prefix and no restating who the narrator is.
- No volume words. Intensity comes from pace, weight and pauses.
- Intensity changes are incremental between neighbouring chunks, except at the story's genuine tonal breaks (chunk 5, the turn out of the cold open; chunk 17 and chunk 40, where the jokes stop; chunk 50, the slow and grave stretch).
- No chunk runs more than six sentences.

## 4. Chunk summary

| Chunk | Words | Target duration | Delivery instruction |
| :-: | :-: | :-: | :-- |
| 0 | 33 | 10s | Dry and unhurried, like a friend describing a neighbour's small domestic mystery, with a flicker of a smile on 'finishing the job'. |
| 1 | 48 | 15s | A touch brisker as the theories pile up, ticked off with mild affection for Dennis's confidence, 'something is definitely going round the office' delivered as his most confident theory. |
| 2 | 40 | 13s | Deadpan, the forum and Rick given a faint raised eyebrow; 'This is what he calls research' dropped flat and quick. |
| 3 | 39 | 12s | Warm and amused as Gary's reassurance is taken at face value, then a half-beat of quiet before 'It does not occur to him', said almost kindly. |
| 4 | 19 | 6s | Easy and ordinary, a man making a sensible-sounding plan; 'He's got a barbecue on Saturday' kept light. |
| 5 | 51 | 16s | The mood turns without announcement: slower and plainer, the fact laid down evenly, a small pause before 'And the only decision', the towel landing with quiet weight. |
| 6 | 17 | 5s | A softer storyteller's reset, like turning a page, the cabin set down in a few unhurried strokes. |
| 7 | 40 | 13s | Playful and brisk, the brave man's blanket and towel described with dry affection. |
| 8 | 28 | 9s | Quickening through the checklist, 'No blood. No marks. Nothing hurts.' with relief in it, then a warm, amused close on the funny story. |
| 9 | 48 | 15s | A shade quieter, a secret shared; the three beliefs voiced in Dennis's own easy tone, each a notch more comfortable than the last. |
| 10 | 28 | 9s | Plain and level on 'All three are wrong', a dry smile on 'a little more wrong', then a brisk turn on 'But first, back to the cabin'. |
| 11 | 27 | 9s | Light and wry, Dennis's forgetting made to sound like a very reasonable life choice. |
| 12 | 32 | 10s | A change of colour: warmer and more tender for the other Dennis, the small voice in his head almost confided. |
| 13 | 24 | 8s | Amused, 'And, being Dennis, he apologises' with a fond sigh, 'He says it's probably nothing' a gentle repeat, the nurse's line kind and matter-of-fact. |
| 14 | 24 | 8s | A clean signpost, practical and warm. |
| 15 | 21 | 7s | The belief voiced as Dennis would, comfortably, then fair and patient, a friend conceding the point. |
| 16 | 63 | 20s | Turning the screw: matter-of-fact on the teeth, a dry beat on 'they leave no evidence', then the figures laid out steadily, one at a time. |
| 17 | 32 | 10s | Quietly serious, the joking set aside; the facts told straight, 'Nobody tested the bat' left plain. |
| 18 | 81 | 26s | Back to a measured, explanatory warmth; the rule stated clearly, then the numbers delivered without fuss. |
| 19 | 20 | 6s | A crisp, rueful verdict, landing softly on 'The difference is that he asked.' |
| 20 | 34 | 11s | Leaning in a little, confiding, as the narrator names the one that does the real damage; 'Rabies doesn't' dropped flat. |
| 21 | 61 | 19s | The patient clarity of a good teacher, plain words and no hurry, a dry glint on 'a recipe with no kitchen' and a rueful smile on the kitchens. |
| 22 | 50 | 16s | Steady and informative, then slowing as 'almost nothing happens' settles in. |
| 23 | 48 | 15s | Gently comic, the houseguest described with mock admiration, 'no noise, no mess, no questions' light and quick, then slower on 'It's a wait.' |
| 24 | 19 | 6s | Matter-of-fact, the ranges stated evenly, the long end left to sit for a moment. |
| 25 | 56 | 18s | Curious and a little delighted by the mechanism, a spark on 'here's where it gets clever', then dry on 'catches a lift' and 'the destination is Dennis'. |
| 26 | 38 | 12s | Calm and steady, the facts about the blood given plainly, not defensively. |
| 27 | 20 | 6s | A hush of understatement: the absences listed softly, 'No alarm' very plain, the weeks of nothing allowed to stretch. |
| 28 | 24 | 8s | Bright and tongue in cheek, Dennis having the time of his life, the story growing with each telling. |
| 29 | 43 | 14s | Escalating mock wonder through the pigeon and the small dog, then dropping to a dry, flat 'not one of them is a doctor'. |
| 30 | 29 | 9s | A change of register, closer and more careful, as the real case begins; the girl and the church told simply. |
| 31 | 20 | 6s | Quiet and exact; 'She gets no rabies treatment' plain, a small pause before 'her hand starts to tingle'. |
| 32 | 58 | 18s | Lighter, almost relieved to be back with the right-hand Dennis, 'He apologises to the needle' dry as toast, then a clear explanation of the treatment, 'That's the whole price' with a shrug. |
| 33 | 61 | 19s | Reassuring and clear, the percentage given plainly, then a faintly impressed dry note on the standing ovation. |
| 34 | 24 | 8s | A slow, rueful verdict, 'the cruellest way' unforced, the last line placed with care and left to hang. |
| 35 | 33 | 10s | A fresh start with weight on it, the calendar turning to week six; 'suddenly the loudest thing in the room' understated. |
| 36 | 44 | 14s | Plain and brisk through the symptoms, then a wry lift for the burgers and the arm that feels exactly like an arm. |
| 37 | 45 | 14s | Wry and affectionate, a man rehearsing his apology in a waiting room full of boats. |
| 38 | 23 | 7s | Slowing down; Dennis's quiet argument with himself delivered like a trap closing, 'But that's a story, and stories are for barbecues' light and reasonable, 'It was nothing' flat. |
| 39 | 4 | 1s | Small and bright, a man answering a polite question, the two words almost cheerful and left to sit afterwards. |
| 40 | 61 | 19s | The jokes stop. Direct, steady and serious: 'This is not a joke', then the facts of the case laid down one at a time, ending low and clear on 'she'll hear flu'. |
| 41 | 50 | 16s | Dry resignation on 'advice about rest', then a pause, then the brain and the wall given careful, clear weight. |
| 42 | 55 | 17s | Patient and exact, explaining the wall like a hard truth, the image 'where the immune system isn't allowed' delivered slowly and flatly. |
| 43 | 26 | 8s | Plain and final, the contrast between before and after set down evenly. |
| 44 | 40 | 13s | Slower and plainer, the dinner told as an ordinary evening that turns, 'It isn't fear. It's a reflex.' as a calm correction. |
| 45 | 54 | 17s | Measured and close, no drama in the delivery, the drama in the facts; 'He sees it too' small and still, the clear mind and the thirst given room. |
| 46 | 48 | 15s | Quiet and humane; the household adjusting itself told gently, 'A whole house rearranges itself around one man's throat' placed slowly at the end. |
| 47 | 16 | 5s | A deliberate, gentler lift for the right-hand Dennis, simple and warm, the second glass said almost with relief. |
| 48 | 35 | 11s | Clinical and clear, the two forms described in a level, informative tone. |
| 49 | 36 | 11s | Steady, the list read like a chart at a bedside, no emphasis on the grim items beyond pace. |
| 50 | 15 | 5s | Grave and slow; each word placed, 'Delirium. Convulsions. Coma.' as separate steps, the timeline plain. |
| 51 | 67 | 21s | Honest and careful, like giving good news with a heavy qualification; the recovery stated warmly, 'She isn't a method. She's an exception.' firm and kind. |
| 52 | 33 | 10s | Quiet, closing the act, the last sentence slow, clear and a little sad. |
| 53 | 36 | 11s | A light reset: 'Only ours has Gary' a quick dry aside, then a historian's easy sweep over the centuries. |
| 54 | 52 | 16s | A storyteller's warmth, the boy and the vaccine told simply, then a tender dry joke on 'too young to apologise'. |
| 55 | 79 | 25s | Even and factual, the two figures and the nine minutes set down side by side without fuss. |
| 56 | 80 | 25s | Brightening slightly, a quiet pride for the right-hand road, then affectionate amusement in the voice for 'thanking nurses and apologising to needles'. |
| 57 | 49 | 15s | Back to quiet seriousness; 'And look at who the few are' as a turn, the three facts plain, the last one slow. |
| 58 | 14 | 4s | A clear, kind turn towards the viewer, 'Not a symptom. An event.' like a teacher writing it on the board. |
| 59 | 24 | 8s | Short, even beats, each item given its own small weight. |
| 60 | 34 | 11s | Practical and direct, the instructions given warmly and without fuss, 'straight away' crisp. |
| 61 | 17 | 5s | Friendly and emphatic through 'Say the word', the three animals ticked off briskly, the last two lines gentle and firm. |
| 62 | 30 | 9s | Calm and clear, 'any time before symptoms begin' reassuring, 'no longer helps' plainly said. |
| 63 | 29 | 9s | Warm irony, Gary's cousin brought back like an old friend; the line about evidence delivered slowly so it lands. |
| 64 | 34 | 11s | A quiet, almost tender close: the two Dennises mirrored, the doctor's last line unhurried and kind, nothing added. |

## 5. After recording

Generate one chunk per call, join into `voiceover/master_narration.wav`, then align it (`scripts/align_voiceover.py`, adapted for this episode) so the beat sheet (phase 07) can be timed from the real audio. Spot-test chunks 5, 17, 40 and 50 first: they carry the tonal breaks.
