# Phase 11: Batch 4 — Audio Score & Sound Design — Episode 05

> **Bed: M1, Inquisitive Neo-Classical & Playful Tech** (bible/10 Rule 1: tech explainer, hardware, flywheel mechanics). It matches the wry, curious register of Draft A and suits a mechanism story with no villain. One cohesive bed for the whole episode, instrumental only, no vocals. All modulation comes from ducking, swells and silences, computed from `voiceover/alignment.json`, so re-run `scripts/build_ep05_beats.py` after any re-alignment.
>
> **Levels:** narration at 0 dB (-14 to -16 LUFS, true peak -1.0 dBFS); bed ducked to -34 dB under speech; +8 dB swells on pauses over 1.2 s; -50 dB during the fee and number cards; dead silence on two shock lines; foley -24 to -28 dB.

---

## 1. BGM Score Bed Prompt

```
FILENAME: 000_bgm_master_score.mp3
TYPE: Audio (Score Bed)
MUSIC BED: M1 Inquisitive Neo-Classical & Playful Tech
TOOL / ENGINE: Suno v3.5 / Udio / ElevenLabs Music
PROMPT: [Instrumental] Inquisitive minimalist neo-classical explainer, 118 BPM, C Major, staccato pizzicato violins, wooden marimba melodic plucks, light glockenspiel accents, clean warm Rhodes piano chords, subtle muted electronic percussion, playful, intellectual, curious, forward-moving, transparent mix with space for a narrator, no vocals, follow best industry-standard guidelines and quality and visualisations.
NEGATIVE PROMPT: vocals, singing, speech, choir, heavy distortion, harsh drums, electric guitar solo, EDM drop, heavy sub-bass drone
EPIDEMIC SEARCH QUERY: Genres: Classical > Minimalist / Acoustic > Quirky. Moods: Curious, Playful, Clever, Inquisitive, Technology. Instruments: Pizzicato Strings, Marimba, Glockenspiel, Muted Electric Piano
TARGET DURATION: 3:30 minimum, loopable, looped to 11:33.5
TIMELINE ROLE: Master narrative bed, Track 3, base level -34 dB under speech
```

**Speech EQ pocket on the bed:** parametric notch at 2 kHz, -4 dB, Q 1.2, to leave room for the voice.

## 2. Ducking envelope (from the alignment)

### Pause swells (silence over 1.2 s: +8 dB over 300 ms, back down 200 ms before the next word)

| # | Silence starts | Silence ends | Length | Sits after sentence |
| :-: | :-: | :-: | :-: | :--- |
| 1 | 11:11.9 | 11:13.3 | 1.4s | "Go back to that TV." |

### Math Mode (bed to -50 dB while a number card is on screen)

| Beat | Timecode | Card |
| :---: | :---: | :--- |
| 360 | 02:39.3 - 02:44.1 | key fee |
| 370 | 02:44.1 - 02:48.1 | key prices |
| 600 | 04:22.1 - 04:26.2 | annual big |
| 610 | 04:26.2 - 04:29.2 | annual small |
| 620 | 04:29.2 - 04:36.5 | per device 15 |
| 630 | 04:36.5 - 04:44.6 | per device tiers |
| 680 | 05:05.9 - 05:08.8 | small yearly |
| 690 | 05:08.8 - 05:13.2 | small per tv |
| 700 | 05:13.2 - 05:24.6 | small total |
| 710 | 05:24.6 - 05:28.2 | giant setup |
| 720 | 05:28.2 - 05:36.3 | giant total |
| 730 | 05:36.3 - 05:42.3 | forty times |
| 850 | 06:17.8 - 06:23.0 | devices 2017 |
| 860 | 06:23.0 - 06:28.0 | devices times |
| 870 | 06:28.0 - 06:32.6 | growth a |
| 880 | 06:32.6 - 06:37.5 | growth b |
| 910 | 06:42.3 - 06:52.1 | range total |
| 980 | 07:19.3 - 07:26.5 | dp vs hdmi |
| 1320 | 10:37.6 - 10:44.0 | four k lost |
| 1330 | 10:44.0 - 10:47.8 | four k ratio |

### Low-pass focus zoom (bed low-passed to 800 Hz for the whole card, whoosh open on exit)

| Beat | Timecode | Document |
| :---: | :---: | :--- |
| 650 | 04:49.3 - 04:54.8 | logo rules |
| 1130 | 08:43.8 - 08:50.7 | docket |
| 1150 | 08:58.4 - 09:03.7 | court finding |
| 1300 | 10:19.0 - 10:28.8 | amd quote a |
| 1310 | 10:28.8 - 10:37.6 | amd quote b |

### Dead silence drops (bed to -inf 0.6 s before the line, 40 Hz thud on the key word, bed back in on the next act)

| # | Drop begins | Line | Thud on |
| :-: | :-: | :--- | :--- |
| 1 | 09:12.8 | "Then it signed the contract again." | "signed" (09:14.3), -20 dB |
| 2 | 11:18.6 | "It was a piece of a contract." | "contract" (11:19.9), -20 dB |

## 3. Tactile foley & micro-SFX cues (Track 2)

| Beat cue | File name | Sound | Mix level | Sync downbeat |
| :--- | :--- | :--- | :---: | :---: |
| **010** | `010_foley_room_tone.wav` | soft living-room room tone, a chair creak | -34.0 dB | `00:00.0` |
| **020** | `020_foley_plug_click.wav` | small plastic click of a plug seating | -26.0 dB | `00:05.9` |
| **030** | `030_foley_coin_drop.wav` | single coin dropping into a metal slot | -26.0 dB | `00:18.3` |
| **060** | `060_foley_counter_ticks.wav` | soft muted register ticks as the dots resolve | -30.0 dB | `00:26.8` |
| **200** | `200_foley_badge_slams.wav` | seven soft card slaps, one per name | -26.0 dB | `01:25.6` |
| **280** | `280_foley_padlock_click.wav` | brass padlock clicking shut | -24.0 dB | `02:02.7` |
| **290** | `290_foley_card_fan.wav` | paper cards fanning out | -26.0 dB | `02:06.9` |
| **370** | `370_foley_counter_ticks.wav` | muted digital ticker notches | -30.0 dB | `02:44.1` |
| **380** | `380_foley_lock_pick.wav` | fine metal scrape then a padlock springing open | -24.0 dB | `02:48.1` |
| **520** | `520_foley_flywheel_whoosh.wav` | soft organic whoosh, highs rolled off, one per step | -28.0 dB | `03:37.6` |
| **540** | `540_foley_door_room_tone.wav` | low room tone with a distant door | -32.0 dB | `03:53.6` |
| **650** | `650_foley_paper_slide.wav` | crisp bond paper slide onto a desk | -26.0 dB | `04:49.3` |
| **700** | `700_foley_counter_ticks.wav` | muted ticker notches as the total lands | -30.0 dB | `05:13.2` |
| **820** | `820_foley_stamp_thud.wav` | rubber stamp thud | -22.0 dB | `06:03.6` |
| **850** | `850_foley_counter_ticks.wav` | register ticks as the number climbs | -30.0 dB | `06:17.8` |
| **1130** | `1130_foley_paper_slide.wav` | court paper slide | -26.0 dB | `08:43.8` |
| **1140** | `1140_foley_gavel.wav` | single gavel strike, dry room | -20.0 dB | `08:50.7` |
| **1150** | `1150_foley_highlighter.wav` | soft marker squeak sweeping across a page | -28.0 dB | `08:58.4` |
| **1170** | `1170_foley_counter_and_stamp.wav` | ticker notches then a stamp thud | -24.0 dB | `09:08.3` |
| **1210** | `1210_foley_brick_placements.wav` | four soft stone placements | -26.0 dB | `09:27.1` |
| **1270** | `1270_foley_book_close.wav` | thick book closing, then a padlock click | -24.0 dB | `10:03.2` |
| **1300** | `1300_foley_typewriter.wav` | soft vintage keyboard clicks, variable speed | -28.0 dB | `10:19.0` |
| **1310** | `1310_foley_typewriter.wav` | soft vintage keyboard clicks, variable speed | -28.0 dB | `10:28.8` |
| **1320** | `1320_foley_stamp_thud.wav` | cross and tick stamp thuds | -24.0 dB | `10:37.6` |
| **1440** | `1440_foley_tunnel_whoosh.wav` | long soft whoosh rising, no sub-bass | -28.0 dB | `11:21.4` |

*No arcade or cartoon sound effects. Every cue sits under the voice and is only tactile.*

## 4. Voiceover processing chain (Track 1)

1. High-pass filter, 24 dB/oct below 80 Hz. 2. Compression 4:1, attack 5 ms, release 50 ms, soft knee. 3. Presence +1.5 dB at 3.5 kHz, high-shelf +2.0 dB at 11 kHz. 4. Loudness -14.0 to -16.0 LUFS integrated, true peak -1.0 dBFS.

**Pacing note from the delivered audio:** the narrator runs about 170 words a minute overall. If the hook (first 60 s) sounds slow against the 165 to 180 wpm guidance, it can be sped 4 to 6% in the DAW, and the alignment re-run.

