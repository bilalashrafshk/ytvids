import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

import yardBgImg from '../../assets/episode03/024_container_yard_five_high_bg.jpg';
import { TOKENS } from '../../tokens';

export const ContainerGridlockMetric3D: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Cinematic Subtle Push Across 135 frames)
  // -------------------------------------------------------------
  const cameraProgress = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.2, 0.1, 0.2, 1.0),
  });
  const bgScale = interpolate(cameraProgress, [0, 1], [1.0, 1.06]);
  const bgPanY = interpolate(cameraProgress, [0, 1], [0, -14]);

  // Entrance animations
  const headerOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: 'clamp' });
  const headerSlide = interpolate(frame, [0, 18], [-25, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const cardsOpacity = interpolate(frame, [10, 26], [0, 1], { extrapolateRight: 'clamp' });
  const cardsSlide = interpolate(frame, [10, 26], [25, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  // -------------------------------------------------------------
  // 2. KINETIC COUNTER & STACK PROGRESSION (Frames 15 to 105)
  // -------------------------------------------------------------
  const counterProgress = interpolate(frame, [15, 95], [0, 1], {
    easing: Easing.bezier(0.25, 0.1, 0.15, 1.0),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const totalCount = Math.round(interpolate(counterProgress, [0, 1], [0, 42000]));
  const lockedCount = Math.round(totalCount * 0.52);

  // 5-Tier stack animation
  const tier1 = interpolate(frame, [18, 28], [0, 1], { extrapolateRight: 'clamp' });
  const tier2 = interpolate(frame, [28, 38], [0, 1], { extrapolateRight: 'clamp' });
  const tier3 = interpolate(frame, [38, 48], [0, 1], { extrapolateRight: 'clamp' });
  const tier4 = interpolate(frame, [48, 58], [0, 1], { extrapolateRight: 'clamp' });
  const tier5 = interpolate(frame, [58, 68], [0, 1], { extrapolateRight: 'clamp' });

  const tiers = [
    { label: 'TIER 5 (TOP)', height: '47.5 FT', status: 'UNLOCKED / EXPOSED', opacity: tier5, color: TOKENS.colors.amber },
    { label: 'TIER 4', height: '38.0 FT', status: 'BURIED (1 MOVE)', opacity: tier4, color: '#94A3B8' },
    { label: 'TIER 3', height: '28.5 FT', status: 'BURIED (2 MOVES)', opacity: tier3, color: '#94A3B8' },
    { label: 'TIER 2', height: '19.0 FT', status: 'BURIED (3 MOVES)', opacity: tier2, color: '#94A3B8' },
    { label: 'TIER 1 (GROUND)', height: '9.5 FT', status: 'TRAPPED BASE (4 MOVES)', opacity: tier1, color: TOKENS.colors.crimson },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        fontFamily: TOKENS.typography.fontFamilySans,
        overflow: 'hidden',
      }}
    >
      {/* -------------------------------------------------------------
          LAYER 1: PHYSICAL SCENE FOUNDATION (Container Yard Feeder Plate)
          ------------------------------------------------------------- */}
      <AbsoluteFill
        style={{
          transform: `scale(${bgScale}) translateY(${bgPanY}px)`,
          transformOrigin: 'center center',
        }}
      >
        <Img
          src={yardBgImg}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Dark editorial vignette and contrast grading */}
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.50) 0%, rgba(15, 20, 28, 0.90) 100%)`,
          }}
        />
      </AbsoluteFill>

      {/* -------------------------------------------------------------
          LAYER 2: KINETIC DATA & 3D ISOMETRIC STACK VISUALIZER
          ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: 85,
          left: 90,
          right: 90,
          bottom: 85,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          zIndex: 10,
        }}
      >
        {/* Header Block: Title -> Unit -> Visible Source */}
        <div
          style={{
            transform: `translateY(${headerSlide}px)`,
            opacity: headerOpacity,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'rgba(211, 47, 47, 0.15)',
                border: `1px solid ${TOKENS.colors.crimson}60`,
                borderRadius: 4,
                padding: '4px 12px',
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 12,
                fontWeight: 800,
                color: TOKENS.colors.crimson,
                letterSpacing: '0.12em',
                marginBottom: 8,
              }}
            >
              <span>HARBOR CAPACITY SEIZURE</span>
              <span>•</span>
              <span>TERMINAL BERTH 400</span>
            </div>
            <h1
              style={{
                fontSize: 38,
                fontWeight: 800,
                color: '#FFFFFF',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              Terminal Inventory Gridlock
            </h1>
            <div
              style={{
                fontSize: 14,
                color: TOKENS.colors.textMuted,
                marginTop: 6,
              }}
            >
              Source: Port of Los Angeles Container Terminal Operations & Inventory Census • Berth 400 Grid
            </div>
          </div>

          {/* Right Capacity Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              backgroundColor: 'rgba(15, 20, 28, 0.92)',
              border: `1.5px solid ${TOKENS.colors.crimson}`,
              borderRadius: 8,
              padding: '10px 20px',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: TOKENS.colors.crimson,
                boxShadow: `0 0 10px ${TOKENS.colors.crimson}`,
              }}
            />
            <span
              style={{
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 13,
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '0.1em',
              }}
            >
              YARD DENSITY: 100% MAXIMUM STACK LIMIT
            </span>
          </div>
        </div>

        {/* Centerpiece: 5-High Vertical Stack Diagram + Big Metric Cards */}
        <div
          style={{
            display: 'flex',
            gap: 36,
            justifyContent: 'center',
            alignItems: 'center',
            transform: `translateY(${cardsSlide}px)`,
            opacity: cardsOpacity,
          }}
        >
          {/* Left Visual: 5-Tier Container Stack Visualizer */}
          <div
            style={{
              width: 380,
              backgroundColor: 'rgba(15, 20, 28, 0.92)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: 12,
              padding: '24px 28px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                paddingBottom: 8,
                fontSize: 12,
                fontFamily: TOKENS.typography.fontFamilyMono,
                color: TOKENS.colors.amber,
                fontWeight: 700,
                letterSpacing: '0.1em',
              }}
            >
              <span>VERTICAL STACK PROFILE</span>
              <span>5 HIGH MAX</span>
            </div>

            {/* Render 5 Tiers */}
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                style={{
                  opacity: tier.opacity,
                  backgroundColor: 'rgba(30, 41, 59, 0.6)',
                  border: `1.5px solid ${tier.color}`,
                  borderRadius: 6,
                  padding: '8px 12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: tier.color,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: TOKENS.typography.fontFamilyMono,
                      fontSize: 12,
                      fontWeight: 800,
                      color: '#FFFFFF',
                    }}
                  >
                    {tier.label}
                  </span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div
                    style={{
                      fontFamily: TOKENS.typography.fontFamilyMono,
                      fontSize: 11,
                      fontWeight: 700,
                      color: tier.color,
                    }}
                  >
                    {tier.status}
                  </div>
                  <div
                    style={{
                      fontFamily: TOKENS.typography.fontFamilyMono,
                      fontSize: 10,
                      color: TOKENS.colors.textMuted,
                    }}
                  >
                    {tier.height}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Metrics: Big Numbers */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              width: 580,
            }}
          >
            {/* Metric 1: Total Staged Containers */}
            <div
              style={{
                backgroundColor: 'rgba(15, 20, 28, 0.94)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderLeft: `5px solid ${TOKENS.colors.amber}`,
                borderRadius: 10,
                padding: '24px 32px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 12,
                    fontWeight: 700,
                    color: TOKENS.colors.amber,
                    letterSpacing: '0.12em',
                  }}
                >
                  TOTAL INVENTORY ON GROUND
                </span>
                <span
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 11,
                    color: TOKENS.colors.textMuted,
                  }}
                >
                  BERTH 400 CAP: 42,000 TEU
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                }}
              >
                <span
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 64,
                    fontWeight: 900,
                    color: '#FFFFFF',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {totalCount.toLocaleString()}
                </span>
                <span
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 16,
                    color: TOKENS.colors.amber,
                    fontWeight: 800,
                  }}
                >
                  CONTAINERS FIVE HIGH
                </span>
              </div>
            </div>

            {/* Metric 2: Locked Bill of Lading */}
            <div
              style={{
                backgroundColor: 'rgba(15, 20, 28, 0.94)',
                border: `1.5px solid ${TOKENS.colors.crimson}`,
                borderRadius: 10,
                padding: '24px 32px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 12,
                    fontWeight: 800,
                    color: TOKENS.colors.crimson,
                    letterSpacing: '0.12em',
                  }}
                >
                  LOCKED: AUTHENTICATION DEADLOCK
                </span>
                <span
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 12,
                    color: TOKENS.colors.crimson,
                    fontWeight: 800,
                  }}
                >
                  52% OF TOTAL FLEET
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                }}
              >
                <span
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 64,
                    fontWeight: 900,
                    color: TOKENS.colors.crimson,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {lockedCount.toLocaleString()}
                </span>
                <span
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 14,
                    color: TOKENS.colors.textMuted,
                    fontWeight: 700,
                  }}
                >
                  CANNOT BE DISPATCHED
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner: Quote & Evidence Sourcing */}
        <div
          style={{
            backgroundColor: 'rgba(15, 20, 28, 0.94)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderLeft: `5px solid ${TOKENS.colors.crimson}`,
            borderRadius: 8,
            padding: '14px 28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span
              style={{
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 12,
                fontWeight: 800,
                color: TOKENS.colors.crimson,
                letterSpacing: '0.12em',
              }}
            >
              OPERATIONAL REALITY:
            </span>
            <span
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: '#E2E8F0',
              }}
            >
              “You look across the yard. Forty-two thousand containers sit stacked five high.”
            </span>
          </div>
          <div
            style={{
              fontFamily: TOKENS.typography.fontFamilyMono,
              fontSize: 12,
              fontWeight: 800,
              color: TOKENS.colors.amber,
            }}
          >
            YARD REACH CRANE LIMIT EXCEEDED
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          LAYER 3: EDITORIAL HUD & ANAMORPHIC LETTERBOXING (55px Bars)
          ------------------------------------------------------------- */}
      {/* Top Letterbox Bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 55,
          backgroundColor: TOKENS.colors.backgroundDark,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 60px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 12,
            color: TOKENS.colors.textMuted,
            letterSpacing: '0.15em',
          }}
        >
          FINANCECRAFT DISPATCH // YARD INVENTORY SENSOR
        </div>
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 12,
            color: TOKENS.colors.amber,
            letterSpacing: '0.1em',
          }}
        >
          STACK GEOMETRY: 5 UNITS VERTICAL
        </div>
      </div>

      {/* Bottom Letterbox Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 55,
          backgroundColor: TOKENS.colors.backgroundDark,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 60px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 11,
            color: TOKENS.colors.textMuted,
            letterSpacing: '0.08em',
          }}
        >
          PORT OF LOS ANGELES // PIER 400 TERMINAL CAPACITY
        </div>
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 11,
            color: TOKENS.colors.textMuted,
            letterSpacing: '0.08em',
          }}
        >
          STACK DEPTH: 14 ROWS PER BAY
        </div>
      </div>
    </AbsoluteFill>
  );
};
