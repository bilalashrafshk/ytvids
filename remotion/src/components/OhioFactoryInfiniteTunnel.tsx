import React from 'react';
import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const OhioFactoryInfiniteTunnel: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Normalized time: 0 -> 1
  const t = frame / Math.max(1, durationInFrames - 1);

  // -------------------------------------------------------------------------
  // 1. Dynamic Flight Pacing: "Start a bit slow, then fast"
  // -------------------------------------------------------------------------
  // Smooth power curve: gentle glide at first, then rapid forward acceleration
  const totalCycles = 3.2;
  const phase = totalCycles * (0.35 * t + 0.65 * Math.pow(t, 2.0));

  // Current continuous loop fraction (0.0 -> 1.0)
  const loopProgress = phase % 1.0;

  // Perspective expansion ratio of the structural bays
  const SCALE_RATIO = 1.96;

  // Architectural vanishing point of the central doorway
  const ORIGIN_X = '50%';
  const ORIGIN_Y = '54.5%';

  // Harmonic drone camera physics (smooth sway & banking roll)
  const angle = phase * Math.PI * 2;
  const droneRoll = Math.sin(angle * 0.7) * (0.8 + t * 0.6); // subtle banking in deg
  const dronePitch = Math.cos(angle * 0.8) * 3.5; // vertical px drift
  const droneYaw = Math.sin(angle * 1.1) * 5.0;   // horizontal px sway

  // -------------------------------------------------------------------------
  // 2. Continuous Mathematical Layer Transfer Functions
  // -------------------------------------------------------------------------
  const getOpacity = (u: number): number => {
    if (u <= -2.0) return 0;
    if (u < -1.0) {
      const p = u - -2.0; // 0 -> 1
      return 0.5 * (1 - Math.cos(Math.PI * p)); // smooth fade in from horizon mist
    }
    if (u <= 2.0) return 1.0;
    if (u < 3.0) {
      const p = u - 2.0; // 0 -> 1
      return 0.5 * (1 + Math.cos(Math.PI * p)); // smooth fade out as it clears camera
    }
    return 0;
  };

  const getHoleSize = (u: number): number => {
    if (u <= -1.0) return 0; // distant layers are solid
    if (u < 0.0) {
      const p = u - -1.0; // 0 -> 1
      return 0.5 * (1 - Math.cos(Math.PI * p)); // opening portal
    }
    return 1.0; // fully open doorway for foreground chambers
  };

  // 5 cascading layers covering u from -2.0 to 3.0
  const layers = [0, 1, 2, 3, 4];

  return (
    <AbsoluteFill style={{ backgroundColor: '#05080C', overflow: 'hidden' }}>
      {/* ── Drone Camera Rig ─────────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: `rotate(${droneRoll}deg) translate3d(${droneYaw}px, ${dronePitch}px, 0)`,
          transformOrigin: `${ORIGIN_X} ${ORIGIN_Y}`,
        }}
      >
        {layers.map((layerIndex) => {
          const u = (2 - layerIndex) + loopProgress;
          const opacity = getOpacity(u);

          if (opacity <= 0.002) return null;

          const layerScale = Math.pow(SCALE_RATIO, u);
          const hole = getHoleSize(u);

          // Precision rectangular portal cutout (ZERO ghosting on solid concrete walls)
          let clipStyle: React.CSSProperties = {};
          if (hole > 0.005) {
            const halfW = 10.9 * hole;
            const halfH = 19.75 * hole;
            const x0 = (50 - halfW).toFixed(2);
            const x1 = (50 + halfW).toFixed(2);
            const y0 = (54.5 - halfH).toFixed(2);
            const y1 = (54.5 + halfH).toFixed(2);
            const poly = `polygon(0% 0%, 0% 100%, ${x0}% 100%, ${x0}% ${y0}%, ${x1}% ${y0}%, ${x1}% ${y1}%, ${x0}% ${y1}%, ${x0}% 100%, 100% 100%, 100% 0%)`;
            clipStyle = {
              WebkitClipPath: poly,
              clipPath: poly,
            };
          }

          return (
            <div
              key={layerIndex}
              style={{
                position: 'absolute',
                inset: 0,
                transform: `scale(${layerScale})`,
                transformOrigin: `${ORIGIN_X} ${ORIGIN_Y}`,
                opacity,
                zIndex: 20 - layerIndex,
                ...clipStyle,
              }}
            >
              <Img
                src={staticFile('peloton_portal_clean_2x.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          );
        })}
      </div>

      {/* ── Atmospheric Winter Mist at Horizon Vanishing Point ─────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 50% 54.5%, rgba(190, 215, 235, 0.22) 0%, rgba(170, 195, 220, 0.06) 24%, transparent 60%)',
          mixBlendMode: 'screen',
          pointerEvents: 'none',
          zIndex: 35,
        }}
      />

      {/* ── Clean Cinematic Vignette (Zero Useless Overlays) ───────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(ellipse at 50% 50%, transparent 48%, rgba(5, 8, 12, 0.4) 76%, rgba(5, 8, 12, 0.85) 100%)',
          pointerEvents: 'none',
          zIndex: 40,
        }}
      />

      {/* ── Anamorphic Letterbox Bars ──────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 36,
          backgroundColor: '#000',
          zIndex: 50,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 36,
          backgroundColor: '#000',
          zIndex: 50,
        }}
      />
    </AbsoluteFill>
  );
};
