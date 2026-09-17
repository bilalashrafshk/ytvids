# Remotion Bits — Complete Animation & Template Catalog

A comprehensive directory of all **42 ready-made animations, templates, and motion components** available in [Remotion Bits](https://remotion-bits.dev/) (`remotion-bits` v0.2.0).

---

## Quick Reference & Installation

```bash
# Install package into your Remotion project
npm install remotion-bits culori

# Or search & inspect individual bits via CLI
npx remotion-bits find [query]
npx remotion-bits fetch <bit-id>
```

### Core Imports

```tsx
import {
  AnimatedText,
  AnimatedCounter,
  TypeWriter,
  StaggeredMotion,
  Scene3D,
  Step,
  Particles,
  Spawner,
  Behavior,
  GradientTransition,
  CodeBlock,
  useViewportRect,
  useCamera,
} from "remotion-bits";
```

---

## 1. Typography & Text Animations

| Animation Name | Bit ID | Visual Look & Motion Mechanics | Key Capabilities | Best Video Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Blur In** | `bit-blur-slide-word` | Heavy cinematic gaussian blur dissolving into sharp text while sliding upward. | Word or character splitting; customizable blur radius and spring curves. | Dramatic chapter titles, thesis statements, opening video hooks. |
| **Character by Character** | `bit-char-by-char` | High-frequency typewriter-like pop where each glyph appears with a micro scale bounce. | Precise character stagger timing without cursor. | Ticker symbols, forensic exhibits, technical headers. |
| **Word by Word** | `bit-word-by-word` | Rhythmic entrance of words popping in sequentially. | Staggers individual word opacity and translation with zero motion blur. | Synchronized voiceover captions and punchy statements. |
| **Slide from Left** | `bit-slide-from-left` | Text sweeps in horizontally from the left margin with a clean fade-in. | Spring-loaded horizontal translation offset. | Subtitles, lower-thirds, source attribution lines. |
| **Basic Typewriter** | `basic-typewriter` | Mechanical typewriter effect with a blinking cursor (`\|` or `▋`). | Configurable typing speed and cursor blink duration. | Archival memos, retro documents, investigative reporting notes. |
| **Multi-Text Typewriter** | `multitext-typewriter` | Types out a sentence, pauses, backspaces/deletes it, and types a replacement phrase. | Sequential text array cycling with configurable pause and erase speed. | Contrasting narratives (e.g., *"Wall Street expected X"* $\to$ backspace $\to$ *"Reality was Y"*). |
| **Variable Speed & Typos** | `variable-speed-typewriter` | Types like a human: pauses randomly, makes a typo, backspaces, and corrects itself. | Built-in error probability rate, correction delay, and realistic cadence. | Simulating authentic leaked emails, Slack messages, or chat transcripts. |
| **CLI Simulation** | `cli-simulation` | Retro computer terminal prompt (`$ `) with live command typing and system stdout logs. | Types a command, pauses, and outputs colored system response logs. | Cyber-crime analysis, blockchain transactions, database audits. |
| **Glitch In** | `bit-glitch-in` | Text flashes violently with chromatic aberration and horizontal slice displacements before settling. | Cyberpunk glitch distortion effect. | Company collapse, market panic, fraud revelations, system crashes. |
| **Glitch Cycle** | `bit-glitch-cycle` | Words flicker and scramble through distorted characters as they morph into new words. | Rapid digital glitch transitions between text states. | Valuation swings, market volatility, flashing financial metrics. |
| **Matrix Rain** | `bit-matrix-rain` | Cascading vertical streams of glowing Japanese katakana and digital glyphs. | Classic Matrix digital rain with head glow and fading phosphor trails. | Algorithmic trading, crypto backends, digital tracing. |

---

## 2. Numbers & Financial Metrics

| Animation Name | Bit ID | Visual Look & Motion Mechanics | Key Capabilities | Best Video Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Animated Counter** | `bit-basic-counter` | Smoothly rolling numbers with easing, decimal places, prefixes, and suffixes. | Exponential / cubic easing, `prefix` (`$`), `postfix` (`x`, `%`), hold frames. | Balance sheets, revenue surges, multi-billion dollar tallies. |
| **Counter Confetti** | `bit-counter-confetti` | Number rolls to a milestone (e.g. `$1,000,000`), triggering a particle confetti explosion. | Links `AnimatedCounter` to a celebratory particle emitter at completion. | Milestones, IPO peak, record-breaking quarters. |
| **Easings Visualizer** | `bit-easings-visualizer` | Multi-lane motion comparison showing different physics curves (spring, cubic, expo). | Side-by-side sliding blocks comparing easing curves in real-time. | Technical explainers, physics/animation demonstrations. |

---

## 3. 2.5D Layouts & Staggered Sequences

| Animation Name | Bit ID | Visual Look & Motion Mechanics | Key Capabilities | Best Video Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **3D Card Stack** | `bit-card-stack` | A dense stack of cards or documents that fans out in 3D perspective space. | Distributes layers across $Z$-depth and angles with spring-loaded staggering. | Pitch decks, investor term sheets, stacked exhibits. |
| **Fracture & Reassemble** | `bit-fracture-reassemble` | An image or document shatters into a 3D grid of floating tiles and snaps back together. | Calculates 3D trajectory dispersal and convergence for each grid tile. | Corporate restructuring, fraud deconstruction, split narratives. |
| **Grid Stagger** | `bit-grid-stagger` | A clean grid of cards or thumbnails popping in from the center outward. | Multi-directional stagger (center-out, radial, diagonal) with scale bounce. | Product feature grids, cohort comparisons, team rosters. |
| **List Reveal** | `bit-list-reveal` | Vertical stack of items sliding into place one after another. | Cascading list animation with automatic offset spacing. | Key takeaways, audit checklists, timelines, SEC infractions. |
| **Mosaic Reframe** | `bit-mosaic-reframe` | Multiple image tiles morphing from an even grid into a dynamic featured mosaic. | Re-layouts elements dynamically while animating bounding boxes and aspect ratios. | Case studies, multi-angle evidence boards, photo dossiers. |
| **Staggered Fade In** | `bit-staggered-fade-in` | Gentle sequential reveal of cards or icons. | Clean linear opacity and translation cascade without 3D rotation. | Subtle bullet points, clean financial summary cards. |

---

## 4. 3D Camera & Scene Systems (`Scene3D`)

| Animation Name | Bit ID | Visual Look & Motion Mechanics | Key Capabilities | Best Video Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Basic 3D Scene** | `bit-3d-basic` | Impress.js / Prezi-style camera sweeping between positioned cards in 3D space. | Coordinates a moving camera between discrete positional "Steps". | Multi-chapter presentations, navigating across a large document board. |
| **Cube Navigation 3D** | `bit-scene-3d-cube-nav` | Isometric 3D cube revolving to display different faces as the camera orbits. | Maps 6 content faces to a 3D cube with smooth camera rotational transitions. | Comparing 4–6 pillars of a business model or corporate divisions. |
| **3D Carousel** | `bit-carousel-3d` | Ring of cards revolving in circular 3D space toward and away from camera. | Cylindrical layout with depth fading and scale perspective. | Product lineups, customer profiles, sequential case studies. |
| **Cursor Flyover** | `bit-cursor-flyover` | Camera glides diagonally over an interface screenshot while an animated mouse cursor clicks. | Synchronizes 3D camera pan with cursor pointer vectors and click pulses. | SaaS product demos, website breakdowns, trading platform audits. |
| **Ken Burns Effect** | `bit-ken-burns` | Cinematic slow zoom and panning drift over high-resolution archival photos. | Smooth procedural pan/zoom keyframes with organic camera drift. | Historical photos, newspaper clippings, founder portraits. |
| **3D Terminal** | `bit-terminal-3d` | Multiple retro CRT/terminal windows floating in 3D perspective with active logs. | Combines `TypeWriter` with 3D plane rotations and ambient glow. | Cyber investigations, high-frequency trading breakdowns. |
| **Flying Through Words** | `bit-flying-through-words` | 3D fly-through where keywords zoom past the camera lens into outer space. | Spawns text in depth along the $Z$-axis and drives camera forward. | High-energy montages, buzzword critique, hype-cycle explainers. |
| **Transform3D Showcase** | `bit-transform3d-showcase` | Complex matrix rotations, quaternion spherical interpolations, and relative scales. | Demonstrates raw matrix math and chainable 3D transforms in Remotion. | Advanced custom geometry, abstract kinetic motion. |

---

## 5. Particle Systems & Physics Engine

| Animation Name | Bit ID | Visual Look & Motion Mechanics | Key Capabilities | Best Video Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Fountain Burst** | `bit-particles-fountain` | Particles erupt upward like a geyser from a focal point and arc down under gravity. | Spawner with directional velocity, drag, gravity, and opacity decay. | Explosions, cash bursts, celebration milestones. |
| **Fireflies** | `bit-fireflies` | Soft, glowing motes of light wandering randomly and pulsating in dark space. | Continuous emitter with Perlin-style `wiggle` behavior and soft blur. | Ambient documentary backdrops, moody financial noir atmospheres. |
| **Falling Snow** | `bit-particles-snow` | Gentle flakes drifting downward with subtle horizontal wind currents. | Full-screen top spawner with downward velocity and sinusoidal sway. | Winter themes, cold market environments, frozen funds. |
| **Grid Particles** | `bit-particles-grid` | Swarm of scattered particles that snap into structured matrix grid positions. | Physics particles governed by attraction forces toward coordinate targets. | Data assembly, network connections, system initialization. |
| **Scrolling Columns** | `bit-scrolling-columns` | Multi-column image strip scrolling indefinitely in 3D space with parallax. | Staggered vertical velocity columns creating infinite parallax ribbons. | Brand showcases, customer review cascades, social media feeds. |

---

## 6. Background Effects & Gradients

| Animation Name | Bit ID | Visual Look & Motion Mechanics | Key Capabilities | Best Video Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Linear Gradient** | `bit-linear-gradient` | Smooth, non-muddy morph between complex color schemes across an angle. | Interpolates CSS linear gradients in perceptual **Oklch** color space. | Dynamic scene backdrops, mood shifts (e.g. prosperity green to crisis red). |
| **Radial Gradient** | `bit-radial-gradient` | Pulsing or shifting circular vignette lighting with subtle movement. | Interpolates center position, radius, and color stops over time. | Spotlights on key figures, ambient glow behind charts. |
| **Conic Gradient** | `bit-conic-gradient` | Hypnotic 360-degree rotating color wheel / angular gradient sweep. | Rotates angular gradient around a focal anchor point. | Radar sweeps, tech loading rings, abstract kinetic energy. |

---

## 7. Code & Syntax Highlight Animations

| Animation Name | Bit ID | Visual Look & Motion Mechanics | Key Capabilities | Best Video Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Basic Code Block** | `bit-basic-code-block` | Beautiful syntax-highlighted code block with line-by-line reveal and line numbers. | Uses Prism parser with progressive line reveal and focus highlighting. | Explaining algorithms, smart contracts, API endpoints. |
| **Typing Code Block** | `bit-typing-code-block` | Code block where characters are typed in real-time with an active cursor. | Combines Prism code tokenization with typewriter speed curves. | Developer tutorials, demonstrating exploit code execution. |

---

## 8. Full Showcases & Promo Compositions

| Composition | Bit ID | Description |
| :--- | :--- | :--- |
| **Feature Showcase** | `bit-remotion-bits-promo` | A full 1140-frame promotional showcase integrating typography, particles, 3D scenes, and counters. |
| **Bits Showcase** | `BitsShowcase` | In-repo interactive 4-quadrant control dashboard demonstrating TypeWriter, AnimatedCounter, StaggeredMotion, and Particles simultaneously. |

---

## Practical Pairing: Remotion Bits + FinanceCraft Aesthetic

`remotion-bits` acts as the **animation and physics engine**, while our workspace skin acts as the **visual paper & forensic layer**:

| Motion Requirement | Remotion Bits Component | Workspace Cardstock / SVG Skin |
| :--- | :--- | :--- |
| **Document Title Entrance** | `<AnimatedText split="word" blur={[12, 0]} />` | Google Fonts (`Cinzel` / `Courier Prime`) + ink bleed drop shadows. |
| **Balance Sheet Tally** | `<AnimatedCounter values={[0, 4020000000]} />` | Stamped ink text styling (`#0E8A5F`) on a tactile manila tag. |
| **Audit Desk Camera Move** | `<Scene3D><Step ... /></Scene3D>` | Cardstock desk texture (`#F4EFEA`) with realistic drop-shadow perspective. |
| **Rubber Stamp Slam** | Spring trigger + `<Particles />` dust puff | Dashed forest-green ink border with slight tilt (`-2deg`). |
| **Leaked Email Reveal** | `<TypeWriter typeSpeed={2} errorRate={0.03} />` | Courier Prime monospace on legal affidavit paper stock. |
