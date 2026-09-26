# Raahim — Standing Assets

Generate once, reuse every episode. Save results in `channels/raahim/assets/`.

**Order matters:** make the master first, approve it, then generate every pose *with the master attached as the reference image* so he stays the same person.

Starting point: `remotion/public/filmstrip_jumping_people.jpg` already has the right Raahim — attach it as a reference for the master if you want to keep that exact face.

---

## 1. Master portrait — `ref_raahim_master.png`
```
3840x2160, 16:9. 1950s mid-century educational filmstrip illustration, flat mid-century modern shapes, limited-palette screen print, visible halftone dot texture, slightly misregistered colour layers, soft paper grain, charcoal ink outlines. Full-body portrait of Raahim, a cheerful, unflappable 1950s educational-film presenter: round friendly face, neat dark side-parted hair, thick black-rimmed glasses, short-sleeved white shirt with a breast pocket, skinny black tie, grey trousers, holding a wooden pointer at his side. Standing centred on a plain warm-cream paper background with a soft teal floor shadow, polite closed-mouth smile, completely calm. Palette only: warm cream, teal, burnt orange, mustard, charcoal. Follow best industry-standard guidelines and quality and visualisations.

NEGATIVE: photorealism, 3D render, anime, modern flat vector, white background, stick figure, multiple views, turnaround sheet, text, extra fingers, distorted face.
```

## 2. Poses — generate each with the master attached
Same style line as above, then one of:

| File | Pose |
| :--- | :--- |
| `ref_raahim_point.png` | Pointing his wooden pointer to the right at something off-frame, pleasant smile |
| `ref_raahim_thumbsup.png` | Facing camera, calm thumbs-up, slightly too pleased |
| `ref_raahim_tie.png` | Adjusting his tie, eyebrows very slightly raised — his "alarmed" |
| `ref_raahim_desk.png` | Seated at a tidy wooden classroom desk, hands folded, looking at camera |

Negative for all: the master's negative + `different face, different glasses, different outfit`.

## 3. Home base — `set_classroom.png`
```
3840x2160, 16:9. [style line]. An empty 1950s classroom: a large chalkboard on the right wall, a big picture window on the left looking out onto a tidy suburban street, a wooden desk, a wall-mounted seismograph and a globe on a shelf. Warm cream walls, teal accents, room for a presenter to stand at left of centre. No people. Follow best industry-standard guidelines and quality and visualisations.
```

## 4. Test before episode 1
- **Voice:** one 30-second VoxCPM2 read in Raahim's persona (profile §8). Check that the calm holds on a catastrophe line.
- **Music:** one bed from `videos/raahim/_template/11_AUDIO_DESIGN.md`. Check it stays cheerful under narration at −34 dB.
