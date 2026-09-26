# Phase 06: Voice Direction & Audio Stems (VoxCPM2)
## Episode 03: Social Media Blackout for 30 Days

> **Instructions**: Standalone audio production deliverable. Provides human-readable overview of voice chunking, persona anchors, dynamic registers, and copy-paste prompt blocks. Accompanies [`06_VOICE_DIRECTION.json`](./06_VOICE_DIRECTION.json) and [`voiceover/VOICE_DIRECTION_VOXCPM2.json`](./voiceover/VOICE_DIRECTION_VOXCPM2.json).
>
> **LATEST ENGINE GATE AUDIT:**
> 1. **Strict 0-Indexed Chunk IDs:** Integer `chunk_id` (`0` to `31`) strictly conforming to VoxCPM2 automation ingest.
> 2. **Phonetic Decimal Normalization:** 100% of spoken decimal numbers are written with phonetic "point" (e.g., `eight point four million`, `one point two million`, `two point four million`), with zero raw numeric periods.
> 3. **Two-Part Control Instructions:** The Locked Persona Anchor (`"Sharp, fast-paced scenario guide, engaging, articulate, and vivid."`) is declared once for the whole episode (see Section 1) and set as the fixed voice/speaker profile — it is NOT repeated inside every chunk's `control_instruction`. Each chunk's `control_instruction` carries only its `"Speaks with..."` delivery register, and no two chunks repeat the same register clause (hard gate against flattening).
> 4. **Clean Spoken Stream:** Zero bracket vocal tags anywhere. The only permitted inline cue is `(pause)`; sighs, laughs, hesitation, and filler words are written as literal spoken words in the narration, never as tags. Zero inline bracket tags (`[DATA]`, `[MAP]`, `[REMOTION]`, `[COMPOSITE]`) leak into narration. Zero underscores.

---

## 1. Master Voice Profile & Persona Anchor

- **Track / Archetype**: Track 2 (Archetype 5: The Hyper-Accelerated POV Thought Experiment)
- **Locked Persona Anchor**: `"Sharp, fast-paced scenario guide, engaging, articulate, and vivid."` — set once as the episode's fixed voice/speaker profile, applied to every chunk during synthesis. Not repeated in the per-chunk `control_instruction` field.
- **Target Cadence**: 155–165 WPM (Kinetic, urgent second-person delivery)
- **Total Word Count**: 1,591 words
- **Total Chunks**: 32 Chunks (`Chunk 0` to `Chunk 31`)
- **Target Normalization**: -16 LUFS (-1.0 dB True Peak)
- **Audio Output Directory**: `voiceover/`

---

## 2. Chunk Summary Table

| Chunk ID | Section / Scene | Word Count | Target Duration | Dynamic Delivery Register ("Speaks with...") |
| :---: | :--- | :---: | :---: | :--- |
| `0` | Act I — The Butter on Berth 406 | 89 | 34.5s | Speaks with taut, urgent immediacy, laying out the stakes in one unbroken breath before the visual even catches up. |
| `1` | Act I — The Butter on Berth 406 | 86 | 33.3s | Speaks with slow, sensory absorption, letting the heat and the smell settle before the next fact lands. |
| `2` | Act I — The Butter on Berth 406 | 38 | 14.7s | Speaks with clipped, deliberate precision, each number landing like a separate blow. |
| `3` | Act I — The Butter on Berth 406 | 49 | 19.0s | Speaks with wry, observational calm, cataloguing the guard's small rituals like clues. |
| `4` | Act I — The Butter on Berth 406 | 48 | 18.6s | Speaks with flat, deadpan disbelief at the absurdity of the blockage. |
| `5` | Act I — The Butter on Berth 406 | 39 | 15.1s | Speaks with quiet, mounting gravity, the joke draining out of the scene. |
| `6` | Act II — The Rewind: How Pipeline Broke | 27 | 10.5s | Speaks with a brisk, reorienting snap, resetting the clock like flipping a page. |
| `7` | Act II — The Rewind: How Pipeline Broke | 54 | 20.9s | Speaks with brisk, itemizing energy, listing the ordinary machinery of a normal day. |
| `8` | Act II — The Rewind: How Pipeline Broke | 39 | 15.1s | Speaks with clipped, disbelieving flatness, the numbers refusing to move. |
| `9` | Act II — The Rewind: How Pipeline Broke | 65 | 25.2s | Speaks with dry, sympathetic curiosity, walking through someone else's collapse. |
| `10` | Act II — The Rewind: How Pipeline Broke | 78 | 30.2s | Speaks with forensic, dollar-by-dollar precision building to the gut-punch number. |
| `11` | Act II — The Rewind: How Pipeline Broke | 32 | 12.4s | Speaks with clinical, newsroom-anchor flatness, reading out the Day Seven tally like the first bad diagnosis. |
| `12` | Act III — Couriers & Lobby Lines | 32 | 12.4s | Speaks with dry, ironic detachment, watching improvised desperation. |
| `13` | Act III — Couriers & Lobby Lines | 41 | 15.9s | Speaks with brisk, cinematic momentum, cutting fast between images. |
| `14` | Act III — Couriers & Lobby Lines | 60 | 23.2s | Speaks with weary, global-scale recognition, the same story landing somewhere else. |
| `15` | Act III — Couriers & Lobby Lines | 44 | 17.0s | Speaks with slow, procedural patience, setting the scene before the wait begins. |
| `16` | Act III — Couriers & Lobby Lines | 54 | 20.9s | Speaks with restrained, simmering frustration underneath a calm surface. |
| `17` | Act III — Couriers & Lobby Lines | 54 | 20.9s | Speaks with tight, controlled tension, each sentence a held breath. |
| `18` | Act III — Couriers & Lobby Lines | 38 | 14.7s | Speaks with clinical, newsroom-anchor flatness, the Day Sixteen numbers landing heavier than the last set. |
| `19` | Act IV — War Room at Denny's | 44 | 17.0s | Speaks with dry, absurdist understatement at the setting's incongruity. |
| `20` | Act IV — War Room at Denny's | 46 | 17.8s | Speaks with nostalgic, deadpan fascination with the obsolete machinery. |
| `21` | Act IV — War Room at Denny's | 42 | 16.3s | Speaks with grim, escalating urgency as the threat sharpens. |
| `22` | Act IV — War Room at Denny's | 26 | 10.1s | Speaks with flat, somber inevitability. |
| `23` | Act IV — War Room at Denny's | 61 | 23.6s | Speaks with weary, expanding-scale alarm, the crisis widening past one warehouse. |
| `24` | Act IV — War Room at Denny's | 42 | 16.3s | Speaks with quiet, absurdist irony at goods stuck for want of a login. |
| `25` | Act IV — War Room at Denny's | 39 | 15.1s | Speaks with clinical, newsroom-anchor flatness, the Day Twenty-Four tally read out like a body count. |
| `26` | Act V — Padlock on the Gate | 43 | 16.6s | Speaks with hushed, deliberate stillness, letting the silence do the work. |
| `27` | Act V — Padlock on the Gate | 33 | 12.8s | Speaks with slow, deliberate inventory, one grim detail at a time. |
| `28` | Act V — Padlock on the Gate | 39 | 15.1s | Speaks with flat, legal-document gravity. |
| `29` | Act V — Padlock on the Gate | 66 | 25.5s | Speaks with cold, forensic finality, the numbers collapsing to zero. |
| `30` | Act V — Padlock on the Gate | 59 | 22.8s | Speaks with bitter, ironic lightness, the world's cheer landing like a slap. |
| `31` | Act V — Padlock on the Gate | 84 | 32.5s | Speaks with somber, unhurried finality, letting the last line land and hold. |

---

## 3. Copy-Paste Generation Prompts (Web Demo / API)

> Voice/speaker preset for this episode: `"Sharp, fast-paced scenario guide, engaging, articulate, and vivid."`. Apply once when configuring the voice, then use the per-chunk Control Instruction below for delivery.

### Chunk 0
**Control Instruction:** `"Speaks with taut, urgent immediacy, laying out the stakes in one unbroken breath before the visual even catches up."`
```text
Every major social feed on Earth went dark three weeks ago. You have thirty days left before empty bank ledgers trigger mass asset seizures across every commercial port. The rules allow manual landlines, physical courier pouches, and analog wire orders. And right now, on a dock in Los Angeles, forty shipping containers of butter are rotting because of it. Leaking onto the asphalt at Pier four hundred. Racing against a compounding demurrage fine: two hundred seventy-five dollars a container, every morning, with zero cash coming in to pay it.
```

### Chunk 1
**Control Instruction:** `"Speaks with slow, sensory absorption, letting the heat and the smell settle before the next fact lands."`
```text
You stand on the concrete pier. You wipe sweat from your forehead. You smell spoiled dairy in the harbor air. It is hot. Eighty-five degrees in the sun. You look down. A river of warm yellow fat runs between the crane rails. You check your clipboard. Each box has an electric plug. The dock charges one hundred and ten dollars a day for juice. The dairy importer walked away on day fourteen. You know why. His bill of lading is trapped behind a dead login portal.
```

### Chunk 2
**Control Instruction:** `"Speaks with clipped, deliberate precision, each number landing like a separate blow."`
```text
You inspect the container latch. A yellow carbon-copy ticket flaps in the wind. The ink is stamped in red. Two hundred and seventy-five dollars every single morning. Compounding at dawn. You do the math. You shake your head.
```

### Chunk 3
**Control Instruction:** `"Speaks with wry, observational calm, cataloguing the guard's small rituals like clues."`
```text
You walk up to the gate booth. You knock on the glass. A guard sits on an orange milk crate. He wears a reflective vest. He drinks black coffee from a dented thermos. He taps his mechanical Seiko watch. He points at a blank iPad on a metal arm.
```

### Chunk 4
**Control Instruction:** `"Speaks with flat, deadpan disbelief at the absurdity of the blockage."`
```text
Screen has been spinning for three weeks, he tells you. You lean in. You see a gray loading loop over a button that says Sign In With Google. The gate arm stays down. It does not budge. Behind him hangs a painted plywood sign: NO MANUAL DOCK RECEIPTS.
```

### Chunk 5
**Control Instruction:** `"Speaks with quiet, mounting gravity, the joke draining out of the scene."`
```text
You look across the yard. Forty-two thousand containers sit stacked five high. Half of them cannot move. Their digital keys are dead. You are not watching a computer glitch. You are standing in the middle of a trade seizure.
```

### Chunk 6
**Control Instruction:** `"Speaks with a brisk, reorienting snap, resetting the clock like flipping a page."`
```text
Rewind three weeks. Monday morning. You sit in your dispatch office in Long Beach. You own a freight hub. You store inventory for eighty online consumer brands.
```

### Chunk 7
**Control Instruction:** `"Speaks with brisk, itemizing energy, listing the ordinary machinery of a normal day."`
```text
Your warehouse is massive. Sixty thousand square feet of corrugated steel. You look down the aisles. Wooden pallets reach to the ceiling. You see boxes everywhere. Yoga mats. Electric toothbrushes. Vitamin jars. Coffee makers. On normal days, you hear forklifts. You hear tape guns. You see twenty delivery vans waiting at the bay doors.
```

### Chunk 8
**Control Instruction:** `"Speaks with clipped, disbelieving flatness, the numbers refusing to move."`
```text
Then the feeds go dark. You pick up your desk phone. It is quiet. Too quiet. By Tuesday noon, your packing line stops. You walk out onto the floor. You check the dispatch screen. Zero orders. Not twenty. Zero.
```

### Chunk 9
**Control Instruction:** `"Speaks with dry, sympathetic curiosity, walking through someone else's collapse."`
```text
You call your biggest client. He sells skincare from an office in Manhattan. He usually ships four hundred glass bottles an hour. Today, he has shipped three. You ask him what happened. He tells you the truth. His store is open. His checkout works. But nobody knows his brand exists. He buys his customers on ad auctions. The auctions are dead. His traffic is zero.
```

### Chunk 10
**Control Instruction:** `"Speaks with forensic, dollar-by-dollar precision building to the gut-punch number."`
```text
You pull a glass bottle from a cardboard carton. You hold it up to the warehouse light. The bottle cost one dollar and ten cents. The serum inside cost forty cents. The ocean freight from Shenzhen was eighty-five cents. But the Facebook click that told a girl in Ohio to buy it cost forty-two dollars. You realize the truth. Without the click, you are not holding a luxury cosmetic. You are holding hazardous waste on a wooden rack.
```

### Chunk 11
**Control Instruction:** `"Speaks with clinical, newsroom-anchor flatness, reading out the Day Seven tally like the first bad diagnosis."`
```text
Day seven ledger: Time elapsed, one hundred and sixty-eight hours. Warehouse dispatches, down ninety-one percent. Storage revenue, frozen. Trapped pallets, four thousand two hundred. Daily operating loss, twelve thousand six hundred dollars.
```

### Chunk 12
**Control Instruction:** `"Speaks with dry, ironic detachment, watching improvised desperation."`
```text
You watch panic set in. On day nine, your Manhattan client hires twelve bicycle messengers. You hear the story over the phone. He hands the couriers brown paper envelopes stuffed with cash.
```

### Chunk 13
**Control Instruction:** `"Speaks with brisk, cinematic momentum, cutting fast between images."`
```text
You picture them riding through midtown rain. They climb apartment stairs. They hand cash refunds to customers at their doors. The founders think they are heroes. You know they are doomed. They are burning their last cash reserves on bicycle messengers.
```

### Chunk 14
**Control Instruction:** `"Speaks with weary, global-scale recognition, the same story landing somewhere else."`
```text
You call your logistics partner in Nairobi. He tells you the same story. An egg distributor stands on a truck roof with a megaphone. He screams out bank routing codes to street vendors. His messaging app is down. The drivers will not drop crates without physical paper cash. The crates sit in the dust. The eggs spoil in the sun.
```

### Chunk 15
**Control Instruction:** `"Speaks with slow, procedural patience, setting the scene before the wait begins."`
```text
On day twelve, you need working capital. You drive to your bank branch on California Street in San Francisco. You step through the double glass doors. You stop. Green painter's tape covers the marble floor. You see sixty business owners standing in a line.
```

### Chunk 16
**Control Instruction:** `"Speaks with restrained, simmering frustration underneath a calm surface."`
```text
You join the queue. You wait two hours. You talk to a founder in front of you. He holds a cardboard box full of paper invoices. He does not want a digital transfer. Digital transfers require online security keys that show error codes. He wants a physical cashier's check signed in wet blue ink.
```

### Chunk 17
**Control Instruction:** `"Speaks with tight, controlled tension, each sentence a held breath."`
```text
You reach the teller counter. You slide your commercial ID across the wood. The teller shakes her head. Clear times are six business days, she whispers to you. We are verifying every wire over copper telephone wires. You grip the counter edge. Six business days is an eternity. You do not have six days.
```

### Chunk 18
**Control Instruction:** `"Speaks with clinical, newsroom-anchor flatness, the Day Sixteen numbers landing heavier than the last set."`
```text
Day sixteen ledger: Time elapsed, three hundred and eighty-four hours. Bank check clearance, six business days. Trapped deposits, two point four million dollars. Failed wire fees, eight thousand four hundred dollars. Incurred demurrage, eighteen thousand two hundred dollars.
```

### Chunk 19
**Control Instruction:** `"Speaks with dry, absurdist understatement at the setting's incongruity."`
```text
By day seventeen, commercial rules collapse. You meet your debt lawyers at a Denny's off the interstate. You slide into a vinyl booth. You order black coffee. You ask why you are meeting in a pancake house. Your lawyer points to the kitchen hallway.
```

### Chunk 20
**Control Instruction:** `"Speaks with nostalgic, deadpan fascination with the obsolete machinery."`
```text
An analog telephone booth sits by the restrooms. On a small wooden desk rests a gray fax machine from nineteen ninety-eight. It runs on a physical copper wire. The machine whirs. It spits out warm thermal paper. Your lawyer feeds legal emergency motions into the tray.
```

### Chunk 21
**Control Instruction:** `"Speaks with grim, escalating urgency as the threat sharpens."`
```text
The lenders are pulling the trigger, he tells you. Digital merchant lenders are filing blanket claims on company assets. You listen to him read the clauses. The lenders do not care that the ad networks are dark. They want their principal returned.
```

### Chunk 22
**Control Instruction:** `"Speaks with flat, somber inevitability."`
```text
You realize your clients signed personal debt guarantees. The court notices go out by registered mail. Sheriffs tape foreclosure notices to front doors in quiet suburbs.
```

### Chunk 23
**Control Instruction:** `"Speaks with weary, expanding-scale alarm, the crisis widening past one warehouse."`
```text
You drive back down to Long Beach. You see a new crisis on the road. The port has run out of bare truck chassis. Fourteen thousand steel chassis sit trapped under abandoned containers in gravel parking lots. Importers refuse to pay dock storage to free them. You watch truckers idle on the shoulder of the freeway. They have nowhere to go.
```

### Chunk 24
**Control Instruction:** `"Speaks with quiet, absurdist irony at goods stuck for want of a login."`
```text
In Nebraska and Iowa, grain elevators are stuffed full of winter wheat. Exporters need chassis and containers to move grain to sea. The containers are trapped three miles from your warehouse, holding imported massage guns and scented candles that nobody can sell.
```

### Chunk 25
**Control Instruction:** `"Speaks with clinical, newsroom-anchor flatness, the Day Twenty-Four tally read out like a body count."`
```text
Day twenty-four ledger: Time elapsed, five hundred and seventy-six hours. Abandoned cargo claims, one thousand eight hundred and forty. Detained truck chassis, fourteen thousand two hundred. Court injunctions filed, four hundred and twelve. Unpaid carrier balances, sixty-four million dollars.
```

### Chunk 26
**Control Instruction:** `"Speaks with hushed, deliberate stillness, letting the silence do the work."`
```text
Day thirty arrives. You drive up to your warehouse at seven in the morning. The parking lot is empty. You step out of your truck. You hear no forklifts. You hear no radio chatter. You hear only the distant hum of the highway.
```

### Chunk 27
**Control Instruction:** `"Speaks with slow, deliberate inventory, one grim detail at a time."`
```text
You walk toward the main entrance. You stop. A private guard stands by the bay doors. A thick steel chain wraps around the fence posts. A heavy brass padlock hangs from the link.
```

### Chunk 28
**Control Instruction:** `"Speaks with flat, legal-document gravity."`
```text
You see a white legal notice pasted to the chain-link wire. Your building is in official receivership. You cannot touch the boxes. You cannot open the doors. Everything inside now belongs to the port authority and the container lines.
```

### Chunk 29
**Control Instruction:** `"Speaks with cold, forensic finality, the numbers collapsing to zero."`
```text
You look through the wire at your pallets. You know what is on those racks. Eight point four million dollars in retail merchandise. You know its actual value today. Zero dollars. To move those goods, someone must pay one point two million dollars in unpaid dock fines and freight bills. Nobody will write that check. It is cheaper to let the boxes rot on the concrete.
```

### Chunk 30
**Control Instruction:** `"Speaks with bitter, ironic lightness, the world's cheer landing like a slap."`
```text
Then, on day thirty-one, your pocket vibrates. You pull out your phone. The screen blinks. The apps are back. You see red badge icons stack up on the glass. The feed opens. People post funny pictures about their month away from screens. Morning news hosts joke about how much gardening they finished. They celebrate thirty days of mental peace.
```

### Chunk 31
**Control Instruction:** `"Speaks with somber, unhurried finality, letting the last line land and hold."`
```text
You look at the padlocked gate in front of you. You look at the dark warehouse behind the chain link. Nobody on television mentions the six thousand small companies that died while the screens were dark. They did not die because their products were flawed. They died because modern trade forgot how to sell without an ad auction. When the auctions turned off, the real world choked on its own inventory. And all the quiet mornings in the world could not unlock the gate.
```

---

## 4. Audio Synthesis Execution Gatekeeper

> [!CAUTION]
> ### 🛑 HARD AUDIO TIMING GATE (DO NOT GENERATE BEATS YET)
> The visual beat sheet ([`07_BEAT_SHEET.md`](./07_BEAT_SHEET.md)) MUST NOT be generated until voiceover audio files exist.
> 
> **Instructions for Creator / Pipeline:**
> 1. Run the 32 chunks through VoxCPM2 (or your selected neural TTS engine) using the copy-paste prompt blocks above, [`06_VOICE_DIRECTION.json`](./06_VOICE_DIRECTION.json), or [`voiceover/VOICE_DIRECTION_VOXCPM2.json`](./voiceover/VOICE_DIRECTION_VOXCPM2.json).
> 2. Concatenate or save the audio clips into [`voiceover/master_narration.wav`](./voiceover/master_narration.wav).
> 3. Generate the timestamp alignment JSON ([`voiceover/alignment.json`](./voiceover/alignment.json) or `.srt`).
> 4. Once the real timestamps exist, return here to unlock **Phase 07: Spoken-Cadence Beat Sheet** for 0.0s timing drift.
