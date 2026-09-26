import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
  spring,
} from 'remotion';

import warehouseBgImg from '../../assets/episode03/047_warehouse_serum_pallets_bg.jpg';
import { TOKENS } from '../../tokens';

export const PaidAdAcquisitionImpact: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Cinematic Slow Push-in)
  // -------------------------------------------------------------
  const cameraProgress = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.2, 0.1, 0.2, 1.0),
  });
  const bgScale = interpolate(cameraProgress, [0, 1], [1.0, 1.05]);
  const bgPanY = interpolate(cameraProgress, [0, 1], [0, -10]);

  // Entrance animations
  const headerOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
  const headerSlide = interpolate(frame, [0, 15], [-20, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const cardOpacity = interpolate(frame, [6, 18], [0, 1], { extrapolateRight: 'clamp' });
  const footerOpacity = interpolate(frame, [18, 30], [0, 1], { extrapolateRight: 'clamp' });

  // -------------------------------------------------------------
  // 2. THE $42.00 AD SLAM (Impact physics at Frame 24)
  // -------------------------------------------------------------
  const slamSpring = spring({
    frame: frame - 24,
    fps,
    config: { damping: 14, stiffness: 180, mass: 1.2 },
  });

  const slamY = frame < 24 ? -600 : interpolate(slamSpring, [0, 1], [-600, 0]);
  const slamOpacity = interpolate(frame, [22, 26], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Screen shake on slam impact (frames 27-40)
  const isShaking = frame >= 27 && frame <= 40;
  const shakeOffset = isShaking
    ? Math.sin((frame - 27) * 1.8) * Math.max(0, 12 - (frame - 27))
    : 0;

  // Pulse for the towering crimson card
  const pulse = frame > 42 ? (Math.sin(frame * 0.2) + 1) / 2 : 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        fontFamily: TOKENS.typography.fontFamilySans,
        overflow: 'hidden',
        transform: `translateY(${shakeOffset}px)`,
      }}
    >
      {/* -------------------------------------------------------------
          LAYER 1: PHYSICAL SCENE FOUNDATION (Warehouse Feeder Plate)
          ------------------------------------------------------------- */}
      <AbsoluteFill
        style={{
          transform: `scale(${bgScale}) translateY(${bgPanY}px)`,
          transformOrigin: 'center center',
        }}
      >
        <Img
          src={warehouseBgImg}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Editorial vignette */}
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.62) 0%, rgba(15, 20, 28, 0.94) 100%)`,
          }}
        />
      </AbsoluteFill>

      {/* -------------------------------------------------------------
          LAYER 2: KINETIC COMPARISON ENGINE (Strict 4-Label Max, Single Semantic Accent)
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
            Cost Structure Asymmetry
          </div>
          <h1
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Customer Acquisition Cost
          </h1>
          <div
            style={{
              fontSize: 15,
              color: TOKENS.colors.textMuted,
              marginTop: 8,
            }}
          >
            Source: E-Commerce Digital Advertising Benchmarks (Per Converted Unit)
          </div>
        </div>

        {/* LABEL 3: Hero Comparison Display ("Numbers arrive alone", Single Semantic Accent) */}
        <div
          style={{
            opacity: cardOpacity,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(15, 20, 28, 0.94)',
              border: `2px solid rgba(255, 255, 255, 0.12)`,
              borderRadius: 16,
              padding: '36px 54px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.85)',
              backdropFilter: 'blur(20px)',
              width: '100%',
              maxWidth: 960,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              gap: 48,
              minHeight: 400,
            }}
          >
            {/* Left Column: Physical Product Cost ($2.35) */}
            <div
              style={{
                width: 260,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 34,
                  fontWeight: 800,
                  color: TOKENS.colors.textSecondary,
                  letterSpacing: '-0.02em',
                }}
              >
                $2.35
              </div>
              {/* Proportional height bar (28px) */}
              <div
                style={{
                  width: '100%',
                  height: 38,
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1.5px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 12,
                    fontWeight: 700,
                    color: TOKENS.colors.textMuted,
                    letterSpacing: '0.1em',
                  }}
                >
                  5.3% OF TOTAL
                </span>
              </div>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 13,
                  fontWeight: 700,
                  color: TOKENS.colors.textMuted,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Physical Product
              </div>
            </div>

            {/* Right Column: Towering Crimson Ad Slam ($42.00) */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                transform: `translateY(${slamY}px)`,
                opacity: slamOpacity,
              }}
            >
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 64,
                  fontWeight: 900,
                  color: TOKENS.colors.crimson,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 12,
                }}
              >
                $42.00
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: TOKENS.colors.textMuted,
                    letterSpacing: '0.1em',
                  }}
                >
                  PAID AD CLICK
                </span>
              </div>

              {/* Towering Crimson Pillar (280px) */}
              <div
                style={{
                  width: '100%',
                  height: 270,
                  backgroundColor: 'rgba(211, 47, 47, 0.18)',
                  border: `2px solid ${TOKENS.colors.crimson}`,
                  borderRadius: 12,
                  boxShadow: `0 0 ${16 + pulse * 14}px ${TOKENS.colors.crimson}40`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: 20,
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 32,
                    fontWeight: 900,
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                  }}
                >
                  94.7%
                </div>
                <div
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 13,
                    fontWeight: 800,
                    color: TOKENS.colors.crimson,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  Of Total Cost Is Paid Advertising
                </div>
              </div>

              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 13,
                  fontWeight: 700,
                  color: TOKENS.colors.crimson,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Online Ad Network Fee (18x Physical Cost)
              </div>
            </div>
          </div>
        </div>

        {/* LABEL 4: Direct Annotation / Takeaway Line */}
        <div
          style={{
            opacity: footerOpacity,
            backgroundColor: 'rgba(15, 20, 28, 0.92)',
            border: `1px solid ${TOKENS.colors.crimson}60`,
            borderRadius: 10,
            padding: '16px 28px',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              fontSize: 17,
              fontWeight: 600,
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
            }}
          >
            “The Facebook click that convinced a stranger to buy it cost forty-two dollars.”
          </span>
          <span
            style={{
              fontFamily: TOKENS.typography.fontFamilyMono,
              fontSize: 13,
              fontWeight: 800,
              color: TOKENS.colors.crimson,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            AD TAX: 94.7%
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
