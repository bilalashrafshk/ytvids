import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

import lienBgImg from '../../assets/episode03/090_ucc1_lien_document_bg.jpg';
import { TOKENS } from '../../tokens';

export const LienAccelerationStampCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Slow 2.5D Push-in across 135 frames)
  // -------------------------------------------------------------
  const cameraProgress = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.2, 0.1, 0.2, 1.0),
  });
  const bgScale = interpolate(cameraProgress, [0, 1], [1.0, 1.06]);
  const bgPanY = interpolate(cameraProgress, [0, 1], [0, -10]);

  // Entrance animations
  const headerOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
  const headerSlide = interpolate(frame, [0, 15], [-20, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const cardOpacity = interpolate(frame, [6, 18], [0, 1], { extrapolateRight: 'clamp' });
  const cardSlide = interpolate(frame, [6, 18], [24, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const footerOpacity = interpolate(frame, [18, 30], [0, 1], { extrapolateRight: 'clamp' });

  // -------------------------------------------------------------
  // 2. STAMP SLAM IMPACT (Frame 15-25)
  // -------------------------------------------------------------
  const stampSlam = interpolate(frame, [15, 25], [3.0, 1.0], { extrapolateRight: 'clamp' });
  const stampOpacity = interpolate(frame, [15, 25], [0, 1], { extrapolateRight: 'clamp' });
  const isStamped = frame >= 15;
  const pulse = isStamped ? (Math.sin((frame - 15) * 0.3) + 1) / 2 : 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        fontFamily: TOKENS.typography.fontFamilySans,
        overflow: 'hidden',
      }}
    >
      {/* -------------------------------------------------------------
          LAYER 1: PHYSICAL SCENE FOUNDATION (UCC-1 Lien Document Close-up)
          ------------------------------------------------------------- */}
      <AbsoluteFill
        style={{
          transform: `scale(${bgScale}) translateY(${bgPanY}px)`,
          transformOrigin: 'center center',
          filter: isStamped ? 'brightness(0.85)' : 'brightness(1.0)',
          transition: 'filter 0.3s ease',
        }}
      >
        <Img
          src={lienBgImg}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Editorial vignette */}
        <AbsoluteFill
          style={{
            background: isStamped
              ? `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.68) 0%, rgba(15, 20, 28, 0.96) 100%)`
              : `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.52) 0%, rgba(15, 20, 28, 0.92) 100%)`,
          }}
        />
      </AbsoluteFill>

      {/* -------------------------------------------------------------
          LAYER 2: KINETIC LIEN STAMP REVEAL (Strict 4-Label Max, Single Crimson Accent)
          ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 85,
          left: 100,
          right: 100,
          bottom: 85,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          zIndex: 10,
        }}
      >
        {/* LABEL 1 & 2: Header Block (Title + Visible Source directly underneath) */}
        <div
          style={{
            transform: `translateY(${headerSlide}px)`,
            opacity: headerOpacity,
          }}
        >
          <div
            style={{
              fontFamily: TOKENS.typography.fontFamilyMono,
              fontSize: 13,
              fontWeight: 800,
              color: TOKENS.colors.crimson,
              letterSpacing: '0.14em',
              marginBottom: 8,
              textTransform: 'uppercase',
            }}
          >
            Legal Foreclosure Acceleration
          </div>
          <h1
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            UCC Article 9 Blanket Claim Enforcement
          </h1>
          <div style={{ fontSize: 15, color: TOKENS.colors.textMuted, marginTop: 8 }}>
            Source: Superior Court of California, County of Los Angeles
          </div>
        </div>

        {/* LABEL 3: Hero Document Card (Stamp arrives alone, Single Crimson Accent) */}
        <div
          style={{
            transform: `translateY(${cardSlide}px)`,
            opacity: cardOpacity,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 640,
              backgroundColor: 'rgba(15, 20, 28, 0.94)',
              border: `2px solid ${isStamped ? TOKENS.colors.crimson : 'rgba(255, 255, 255, 0.12)'}`,
              borderRadius: 16,
              padding: '32px 44px',
              boxShadow: isStamped
                ? `0 24px 60px rgba(0,0,0,0.85), 0 0 ${12 + pulse * 14}px ${TOKENS.colors.crimson}40`
                : '0 24px 60px rgba(0,0,0,0.85)',
              backdropFilter: 'blur(20px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 12,
                fontWeight: 700,
                color: TOKENS.colors.textMuted,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Notice of Acceleration & Lien Enforcement
            </div>

            {/* Aggressive Red Rubber Stamp */}
            <div
              style={{
                marginTop: 26,
                display: 'flex',
                justifyContent: 'center',
                transform: `scale(${stampSlam}) rotate(-8deg)`,
                opacity: stampOpacity,
              }}
            >
              <div
                style={{
                  border: `4px solid ${TOKENS.colors.crimson}`,
                  color: TOKENS.colors.crimson,
                  padding: '14px 32px',
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 34,
                  fontWeight: 900,
                  letterSpacing: '0.08em',
                  borderRadius: 8,
                }}
              >
                DEFAULT ACCELERATED
              </div>
            </div>
          </div>
        </div>

        {/* LABEL 4: Direct Annotation / Takeaway Line */}
        <div
          style={{
            opacity: footerOpacity,
            backgroundColor: 'rgba(15, 20, 28, 0.92)',
            border: `1px solid ${isStamped ? TOKENS.colors.crimson : 'rgba(255, 255, 255, 0.12)'}`,
            borderRadius: 10,
            padding: '16px 28px',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontSize: 17, fontWeight: 600, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
            "Lenders trigger immediate seizure of physical warehouse collateral."
          </span>
          <span
            style={{
              fontFamily: TOKENS.typography.fontFamilyMono,
              fontSize: 13,
              fontWeight: 800,
              color: isStamped ? TOKENS.colors.crimson : TOKENS.colors.textMuted,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {isStamped ? 'LIEN FILED' : 'PENDING'}
          </span>
        </div>
      </div>

      {/* -------------------------------------------------------------
          LAYER 3: 2.39:1 CINEMATIC ANAMORPHIC LETTERBOX BARS (55px)
          ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 55,
          backgroundColor: '#000000',
          zIndex: 100,
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 55,
          backgroundColor: '#000000',
          zIndex: 100,
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      />
    </AbsoluteFill>
  );
};
