import React from 'react';
import {
  AbsoluteFill,
  Img,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

import portalImg from '../assets/clean_portal.jpg';

export const InfiniteDroneZoomTunnel: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // 75 frames (2.5 seconds at 30fps) per architectural doorway cycle
  // Exactly 3 cycles across 225 frames (7.5s) for a mathematically seamless loop
  const LOOP_FRAMES = 75;
  const loopProgress = (frame % LOOP_FRAMES) / LOOP_FRAMES; // 0.0 -> 1.0 continuously

  // Exact geometric ratio between successive concrete archways in clean_portal.jpg
  const SCALE_RATIO = 2.46;

  // Vanishing point measured from perspective lines
  const ORIGIN_X = '50%';
  const ORIGIN_Y = '52%';

  // Harmonic drone camera oscillation (zero hitch across loop boundaries)
  const angle = loopProgress * Math.PI * 2;
  const droneRoll = Math.sin(angle) * 1.1;  // subtle cinematic roll in degrees
  const dronePitch = Math.cos(angle) * 6;    // vertical drift in px
  const droneYaw = Math.sin(angle * 2) * 9;  // gentle horizontal sway in px

  // -------------------------------------------------------------------------
  // Shift-Invariant Droste Functions (Optimized Short Ramps + 7 Layers)
  // -------------------------------------------------------------------------
  // Shortened fade-in ramp over 0.3 of u starting deeper at -3.3 -> -3.0
  // Collapses the crossfade/ghost window to under a quarter-second
  const getOpacity = (u: number): number => {
    if (u <= -3.3) return 0;
    if (u < -3.0) {
      const p = (u - -3.3) / 0.3; // 0 -> 1 over 0.3 u (~22 frames)
      return 0.5 * (1 - Math.cos(Math.PI * p)); // smooth fade in from far mist
    }
    if (u <= 2.0) return 1.0;
    if (u < 3.0) {
      const p = u - 2.0; // 0 -> 1
      return 0.5 * (1 + Math.cos(Math.PI * p)); // smooth fade out as foreground passes camera
    }
    return 0;
  };

  // Shortened iris opening ramp over 0.35 of u (-0.35 -> 0.0)
  // Keeps doorway completely solid until camera is right in front, preventing ghost peek-through
  const getHoleSize = (u: number): number => {
    if (u <= -0.35) return 0; // solid concrete until close
    if (u < 0.0) {
      const p = (u - -0.35) / 0.35; // 0 -> 1 over 0.35 u
      return 0.5 * (1 - Math.cos(Math.PI * p)); // rapid iris opening
    }
    return 1.0; // fully open doorway for foreground chambers
  };

  // 7 cascading layers covering u from -4.0 to 3.0 (populates far depth with short ramps)
  const layers = [0, 1, 2, 3, 4, 5, 6];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#020305',
        overflow: 'hidden',
      }}
    >
      {/* Camera Flight Container with Drone Physics */}
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

          const maskStyle: React.CSSProperties =
            hole <= 0.005
              ? {}
              : {
                  WebkitMaskImage: `radial-gradient(ellipse ${38 * hole}% ${46 * hole}% at 50% 52%, transparent ${24 * hole}%, rgba(0,0,0,0.85) ${64 * hole}%, black ${100 * hole}%)`,
                  maskImage: `radial-gradient(ellipse ${38 * hole}% ${46 * hole}% at 50% 52%, transparent ${24 * hole}%, rgba(0,0,0,0.85) ${64 * hole}%, black ${100 * hole}%)`,
                };

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
                ...maskStyle,
              }}
            >
              <Img
                src={portalImg}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(1.08)',
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Atmospheric Mist & Volumetric Light (dropped to ~0.08, pushed past crossfade zone) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 50% 52%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 18%, transparent 56%)',
          mixBlendMode: 'screen',
          pointerEvents: 'none',
          zIndex: 35,
        }}
      />

      {/* Cinematic Drone FPV Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(ellipse at 50% 50%, transparent 45%, rgba(0, 0, 0, 0.4) 75%, rgba(0, 0, 0, 0.9) 100%)',
          pointerEvents: 'none',
          zIndex: 40,
        }}
      />

      {/* Cinematic Anamorphic Film Letterbox (Top & Bottom bars) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 38,
          backgroundColor: '#000000',
          zIndex: 50,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 38,
          backgroundColor: '#000000',
          zIndex: 50,
        }}
      />
    </AbsoluteFill>
  );
};
