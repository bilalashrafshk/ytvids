import React from 'react';
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { TOKENS } from '../../tokens';

import img01GateShut from '../../assets/episode03/022_terminal_gate_arm_bolted_shut.png';
import img02GoogleDead from '../../assets/episode03/021_pivotal_sign_in_with_google_spinning_wheel.png';
import img03GateGuard from '../../assets/episode03/017_terminal_gate_guard_at_booth.png';
import img04DemurrageTicket from '../../assets/episode03/014_showable_demurrage_ticket_container_latch.png';
import img05MeltedButter from '../../assets/episode03/010_macro_melted_butter_crane_tracks.png';
import img06FrozenClock from '../../assets/episode03/006_rusted_harbor_clock_frozen.png';
import img07MondayDesk from '../../assets/episode03/029_operator_dispatch_desk_long_beach.png';

interface MontageClip {
  src: string;
  focalOrigin: string;
  dateLabel: string;
}

const CLIPS: MontageClip[] = [
  { src: img01GateShut, focalOrigin: '50% 50%', dateLabel: 'DAY 21 - 16:30' },
  { src: img02GoogleDead, focalOrigin: '50% 50%', dateLabel: 'DAY 18 - 11:15' },
  { src: img03GateGuard, focalOrigin: '48% 52%', dateLabel: 'DAY 14 - 09:00' },
  { src: img04DemurrageTicket, focalOrigin: '50% 48%', dateLabel: 'DAY 09 - 06:45' },
  { src: img05MeltedButter, focalOrigin: '52% 50%', dateLabel: 'DAY 05 - 13:20' },
  { src: img06FrozenClock, focalOrigin: '50% 50%', dateLabel: 'DAY 02 - 06:00' },
  { src: img07MondayDesk, focalOrigin: '50% 50%', dateLabel: 'DAY 01 - 08:00 AM' }, // Landing Shot
];

export const TimeRewindWhipMontage: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();

  // 5 frames per staccato clip (Justin Odisho formula)
  const FRAMES_PER_STACCATO_CLIP = 5;

  // 6 staccato whip cuts = 30 frames (1.0 second)
  // Followed by the landing shot (clip 7) holding through frame 135 (3.5s)
  const staccatoCount = CLIPS.length - 1; // 6 cuts
  const staccatoDuration = staccatoCount * FRAMES_PER_STACCATO_CLIP; // 30 frames

  let activeIndex = 0;
  let clipLocalFrame = 0;
  let isLanding = false;

  if (frame < staccatoDuration) {
    activeIndex = Math.floor(frame / FRAMES_PER_STACCATO_CLIP);
    clipLocalFrame = frame % FRAMES_PER_STACCATO_CLIP;
  } else {
    activeIndex = staccatoCount; // Final landing clip (Monday Morning Desk)
    clipLocalFrame = frame - staccatoDuration;
    isLanding = true;
  }

  const activeClip = CLIPS[activeIndex];

  // Scale & Motion Dynamics
  let scale = 1.0;
  let motionBlurAmount = 0;
  let shutterAngleGhosting = 0;

  if (!isLanding) {
    const progress = clipLocalFrame / (FRAMES_PER_STACCATO_CLIP - 1); // 0.0 -> 1.0

    // Custom cubic-bezier easing matching whip-zoom speed ramp
    const easedProgress = interpolate(progress, [0, 1], [0, 1], {
      easing: Easing.bezier(0.25, 0.1, 0.25, 1.0),
    });

    scale = interpolate(easedProgress, [0, 1], [2.15, 1.0]);

    // Simulated 300° Shutter Angle Motion Blur
    motionBlurAmount = interpolate(progress, [0, 0.25, 0.7, 1.0], [5.5, 7.0, 2.5, 0]);
    shutterAngleGhosting = interpolate(progress, [0, 0.3, 0.8, 1.0], [0.35, 0.45, 0.15, 0]);
  } else {
    // Landing shot: gentle cinematic push from 1.12 -> 1.0 across full landing hold
    scale = interpolate(clipLocalFrame, [0, 210], [1.12, 1.0], {
      easing: Easing.out(Easing.quad),
      extrapolateRight: 'clamp',
    });
    motionBlurAmount = 0;
    shutterAngleGhosting = 0;
  }

  // Camera whip shake on cut boundaries
  const shakeX = !isLanding ? Math.sin(clipLocalFrame * 3.5) * (4 - clipLocalFrame * 0.8) : 0;
  const shakeY = !isLanding ? Math.cos(clipLocalFrame * 4.2) * (3 - clipLocalFrame * 0.6) : 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        overflow: 'hidden',
      }}
    >
      {/* Active Clip Layer with Whip Dynamics */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: `scale(${scale}) translate3d(${shakeX}px, ${shakeY}px, 0)`,
          transformOrigin: activeClip.focalOrigin,
          filter: motionBlurAmount > 0 ? `blur(${motionBlurAmount}px)` : 'none',
        }}
      >
        <Img
          src={activeClip.src}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Shutter Angle Ghosting Layer */}
      {shutterAngleGhosting > 0 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            transform: `scale(${scale * 1.05}) translate3d(${shakeX * 1.5}px, ${shakeY * 1.5}px, 0)`,
            transformOrigin: activeClip.focalOrigin,
            opacity: shutterAngleGhosting,
            filter: 'blur(8px)',
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
        >
          <Img
            src={activeClip.src}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      )}

      {/* Reverse Timeline Timecode HUD (Top Left) */}
      <div
        style={{
          position: 'absolute',
          top: 48,
          left: 64,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          backgroundColor: 'rgba(10, 13, 20, 0.85)',
          border: '1px solid rgba(211, 47, 47, 0.4)',
          borderRadius: 8,
          padding: '10px 20px',
          backdropFilter: 'blur(10px)',
          zIndex: 60,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: isLanding ? TOKENS.colors.textMuted : TOKENS.colors.crimson,
            boxShadow: isLanding
              ? '0 0 10px rgba(148, 163, 184, 0.8)'
              : '0 0 10px rgba(211, 47, 47, 0.8)',
          }}
        />
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 20,
            fontWeight: 700,
            color: '#f3f4f6',
            letterSpacing: '0.08em',
          }}
        >
          {isLanding ? 'TIMELINE RESET: DAY 01 — MONDAY' : `REWIND: ${activeClip.dateLabel}`}
        </span>
      </div>

      {/* Subtle Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 50%, transparent 40%, rgba(5, 7, 10, 0.75) 100%)',
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
};
