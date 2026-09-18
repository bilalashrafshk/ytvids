# Phase 10: Batch 3 — Remotion Graphics Specifications

> **Instructions**: Standalone asset generation deliverable. Specifications, React props, and render commands for code-driven motion graphics (`newsroom-chart-animations`, `map-explainer`, `3d-flyover`, `remotion-bits`).
>
> **MANDATORY RULES:**
> 1. **Theme-Lock Mandate:** 100% of Remotion code MUST inherit the episode's established color palette and visual tokens.
> 2. **Audio Synchronization:** Frame counts ($30\text{fps}$) must snap directly to the narration audio timestamps for the corresponding beat.
> 3. **Newsroom Editorial Quality:** Quiet field, single semantic accent, visible sourcing, no decorative clutter.

---

## Remotion Asset Inventory

| Beat # | Component Name | Resolution & FPS | Frame Count / Duration | Visual Purpose |
| :---: | :--- | :--- | :--- | :--- |
| **020** | `BeatDataVisualization` | 1920×1080 @ 30fps | 111 frames (~3.7s) | Waterfall / Chart / Counter |

---

## Component Specifications & Render Commands

### Beat 020 — `BeatDataVisualization`
- **Component File**: `remotion/src/components/BeatDataVisualization.tsx`
- **Composition ID**: `BeatDataVisualization`
- **Render Command**:
```bash
npx remotion render src/index.ts BeatDataVisualization out/020_data_viz.mp4 --props='{"durationInFrames":111}'
```
