import React from 'react';
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

import imgBalloons from '../assets/montage/01_balloons.jpg';
import imgJeep from '../assets/montage/02_jeep.jpg';
import imgSteps from '../assets/montage/03_steps.jpg';
import imgStatue from '../assets/montage/04_statue.jpg';
import imgRelief from '../assets/montage/05_relief.jpg';
import imgTemple from '../assets/montage/06_temple.jpg';
import imgPortal from '../assets/montage/07_portal.jpg';

interface MontageClip {
  src: string;
  focalOrigin: string; // anchor point for cinematic alignment
}

const CLIPS: MontageClip[] = [
  { src: imgBalloons, focalOrigin: '50% 50%' },
  { src: imgJeep, focalOrigin: '48% 54%' },
  { src: imgSteps, focalOrigin: '46% 48%' },
  { src: imgStatue, focalOrigin: '50% 45%' },
  { src: imgRelief, focalOrigin: '45% 50%' },
  { src: imgTemple, focalOrigin: '50% 50%' },
  { src: imgPortal, focalOrigin: '50% 52%' },
];

export const InfiniteZoomMontage: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();

  // Exactly 5 frames per staccato clip (Justin Odisho formula: 3-6 frames per cut)
  const FRAMES_PER_STACCATO_CLIP = 5;

  // 6 staccato whip cuts = 30 frames (1.0 second)
  // Followed by the landing shot (clip 7) which holds for 90 frames (3.0 seconds) with a slow cinematic push
  const staccatoCount = CLIPS.length - 1; // 6 clips
  const staccatoDuration = staccatoCount * FRAMES_PER_STACCATO_CLIP; // 30 frames

  // Determine current active clip index
  let activeIndex = 0;
  let clipLocalFrame = 0;
  let isLanding = false;

  if (frame < staccatoDuration) {
    activeIndex = Math.floor(frame / FRAMES_PER_STACCATO_CLIP);
    clipLocalFrame = frame % FRAMES_PER_STACCATO_CLIP;
  } else {
    activeIndex = staccatoCount; // Final landing clip (Portal)
    clipLocalFrame = frame - staccatoDuration;
    isLanding = true;
  }

  const activeClip = CLIPS[activeIndex];

  // Scale & Motion Dynamics:
  let scale = 1.0;
  let motionBlurAmount = 0;
  let shutterAngleGhosting = 0;

  if (!isLanding) {
    // Justin Odisho Technique:
    // Scale starts punched-in at 200% and snaps down to 100% over the 5 frames
    // with Ease Out at start and Ease In at end
    const progress = clipLocalFrame / (FRAMES_PER_STACCATO_CLIP - 1); // 0.0 -> 1.0

    // Custom cubic-bezier easing matching Premiere Pro Ease Out / Ease In speed ramp
    const easedProgress = interpolate(progress, [0, 1], [0, 1], {
      easing: Easing.bezier(0.25, 0.1, 0.25, 1.0),
    });

    scale = interpolate(easedProgress, [0, 1], [2.15, 1.0]);

    // Simulated 300° Shutter Angle Motion Blur:
    // Highest during the high-velocity whip (frames 0 to 2)
    motionBlurAmount = interpolate(progress, [0, 0.25, 0.7, 1.0], [5.5, 7.0, 2.5, 0]);
    shutterAngleGhosting = interpolate(progress, [0, 0.3, 0.8, 1.0], [0.35, 0.45, 0.15, 0]);
  } else {
    // Landing shot: gentle, majestic cinematic glide from 1.08 -> 1.0
    scale = interpolate(clipLocalFrame, [0, 90], [1.08, 1.0], {
      easing: Easing.out(Easing.quad),
      extrapolateRight: 'clamp',
    });
    motionBlurAmount = 0;
    shutterAngleGhosting = 0;
  }

  // Subtle whip camera shake on each cut transition
  const shakeX = !isLanding ? Math.sin(clipLocalFrame * 3.5) * (4 - clipLocalFrame * 0.8) : 0;
  const shakeY = !isLanding ? Math.cos(clipLocalFrame * 4.2) * (3 - clipLocalFrame * 0.6) : 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#05070a',
        overflow: 'hidden',
      }}
    >
      {/* Main Image Layer with Transform & Optical Shutter Blur */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: `translate(${shakeX}px, ${shakeY}px) scale(${scale})`,
          transformOrigin: activeClip.focalOrigin,
          filter: `contrast(1.08) brightness(1.02) blur(${motionBlurAmount}px)`,
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

      {/* Simulated 300° Shutter Angle Radial Zoom Streak (Multi-Exposure Ghosting) */}
      {shutterAngleGhosting > 0.05 && (
        <>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              transform: `scale(${scale * 1.04})`,
              transformOrigin: activeClip.focalOrigin,
              opacity: shutterAngleGhosting * 0.5,
              mixBlendMode: 'screen',
              filter: `blur(${motionBlurAmount * 1.4}px)`,
              pointerEvents: 'none',
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
          <div
            style={{
              position: 'absolute',
              inset: 0,
              transform: `scale(${scale * 0.96})`,
              transformOrigin: activeClip.focalOrigin,
              opacity: shutterAngleGhosting * 0.35,
              mixBlendMode: 'screen',
              filter: `blur(${motionBlurAmount * 1.2}px)`,
              pointerEvents: 'none',
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
        </>
      )}

      {/* High-speed Anamorphic Vignette / Edge Shading */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(ellipse at 50% 50%, transparent 45%, rgba(0, 0, 0, 0.45) 80%, rgba(0, 0, 0, 0.85) 100%)',
          pointerEvents: 'none',
          zIndex: 30,
        }}
      />

      {/* Flash impact accent on every cut */}
      {!isLanding && clipLocalFrame === 0 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            mixBlendMode: 'overlay',
            pointerEvents: 'none',
            zIndex: 35,
          }}
        />
      )}

      {/* Cinematic Anamorphic Film Letterbox */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 42,
          backgroundColor: '#000000',
          zIndex: 40,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 42,
          backgroundColor: '#000000',
          zIndex: 40,
        }}
      />
    </AbsoluteFill>
  );
};
