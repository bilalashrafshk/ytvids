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

import dawnDeskImg from '../../assets/episode03/015_dawn_demurrage_stamp_desk_bg.jpg';
import { TOKENS } from '../../tokens';

export const CalendarDemurrageStomp: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Cinematic Subtle Push Across 129 frames)
  // -------------------------------------------------------------
  const cameraProgress = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.2, 0.1, 0.2, 1.0),
  });
  const bgScale = interpolate(cameraProgress, [0, 1], [1.0, 1.06]);
  const bgPanX = interpolate(cameraProgress, [0, 1], [0, -15]);
  const bgPanY = interpolate(cameraProgress, [0, 1], [0, -8]);

  // Entrance animations
  const headerOpacity = interpolate(frame, [0, 16], [0, 1], { extrapolateRight: 'clamp' });
  const headerSlide = interpolate(frame, [0, 16], [-20, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const contentOpacity = interpolate(frame, [8, 22], [0, 1], { extrapolateRight: 'clamp' });
  const contentSlide = interpolate(frame, [8, 22], [25, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  // -------------------------------------------------------------
  // 2. KINETIC CALENDAR & ACCRUAL PROGRESSION (Frames 15 to 105)
  // -------------------------------------------------------------
  const timelineProgress = interpolate(frame, [15, 100], [0, 1], {
    easing: Easing.bezier(0.3, 0.0, 0.2, 1.0),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const rawDay = interpolate(timelineProgress, [0, 1], [1, 21]);
  const currentDay = Math.min(21, Math.max(1, Math.round(rawDay)));

  // Accrual math:
  // $275 per container per day. 40 containers = $11,000 / day.
  const singleBoxAccrual = currentDay * 275;
  const fleetAccrual = currentDay * 11000;

  // Stomp animation on day increments
  const stompTrigger = frame >= 18;
  const stompSpring = spring({
    frame: frame % 5,
    fps,
    config: { damping: 12, stiffness: 220 },
  });
  const stampScale = stompTrigger ? interpolate(stompSpring, [0, 1], [1.15, 1.0]) : 1.0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        fontFamily: TOKENS.typography.fontFamilySans,
        overflow: 'hidden',
      }}
    >
      {/* -------------------------------------------------------------
          LAYER 1: PHYSICAL SCENE FOUNDATION (Dawn Dispatch Office Feeder Plate)
          ------------------------------------------------------------- */}
      <AbsoluteFill
        style={{
          transform: `scale(${bgScale}) translate(${bgPanX}px, ${bgPanY}px)`,
          transformOrigin: 'center center',
        }}
      >
        <Img
          src={dawnDeskImg}
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
          LAYER 2: KINETIC CALENDAR & RUBBER STAMP ACCRUAL ENGINE
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
              <span>AUTOMATED BILLING CLOCK</span>
              <span>•</span>
              <span>DAILY 06:00 AM STAMP</span>
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
              The Compounding Dawn Stomp
            </h1>
            <div
              style={{
                fontSize: 14,
                color: TOKENS.colors.textMuted,
                marginTop: 6,
              }}
            >
              Source: Port of Los Angeles Tariff No. 4, Item 1000 • Demurrage Fee Schedule Tier 1
            </div>
          </div>

          {/* Right Status Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              backgroundColor: 'rgba(15, 20, 28, 0.92)',
              border: `1.5px solid ${TOKENS.colors.amber}`,
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
              TRIGGER: 06:00 AM PACIFIC EVERY MORNING
            </span>
          </div>
        </div>

        {/* Centerpiece: Tear-Off Calendar Stomp + Accrual Ledger Cards */}
        <div
          style={{
            display: 'flex',
            gap: 36,
            justifyContent: 'center',
            alignItems: 'center',
            transform: `translateY(${contentSlide}px)`,
            opacity: contentOpacity,
          }}
        >
          {/* Tear-Off Dispatch Calendar */}
          <div
            style={{
              width: 320,
              backgroundColor: 'rgba(255, 255, 255, 0.96)',
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0,0,0,0.75)',
              display: 'flex',
              flexDirection: 'column',
              border: '2px solid rgba(255,255,255,0.3)',
            }}
          >
            {/* Calendar Month Header */}
            <div
              style={{
                backgroundColor: TOKENS.colors.crimson,
                color: '#FFFFFF',
                padding: '14px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 16,
                  fontWeight: 900,
                  letterSpacing: '0.15em',
                }}
              >
                JULY CALENDAR
              </span>
              <span
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 12,
                  fontWeight: 700,
                  backgroundColor: 'rgba(0,0,0,0.25)',
                  padding: '2px 8px',
                  borderRadius: 4,
                }}
              >
                06:00 AM
              </span>
            </div>

            {/* Giant Date Display */}
            <div
              style={{
                padding: '36px 20px',
                textAlign: 'center',
                backgroundColor: '#FFFFFF',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 104,
                  fontWeight: 900,
                  color: TOKENS.colors.textPrimary,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                }}
              >
                {String(currentDay).padStart(2, '0')}
              </div>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 12,
                  fontWeight: 700,
                  color: TOKENS.colors.textSecondary,
                  letterSpacing: '0.2em',
                  marginTop: 10,
                }}
              >
                HARBOR CALENDAR DAY
              </div>

              {/* Rubber Stamp: Authentic Red Ink on Paper with Zero Solid Background */}
              <div
                style={{
                  position: 'absolute',
                  top: '42%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(-14deg) scale(${stampScale})`,
                  border: `3.5px dashed ${TOKENS.colors.crimson}`,
                  borderRadius: 6,
                  padding: '6px 14px',
                  backgroundColor: 'rgba(211, 47, 47, 0.10)',
                  boxShadow: '0 0 12px rgba(211, 47, 47, 0.25)',
                  pointerEvents: 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 22,
                    fontWeight: 900,
                    color: TOKENS.colors.crimson,
                    letterSpacing: '0.08em',
                    lineHeight: 1.1,
                    textShadow: '0 0 2px rgba(211, 47, 47, 0.4)',
                  }}
                >
                  TARIFF: +$275
                </div>
              </div>
            </div>

            {/* Calendar Footer */}
            <div
              style={{
                backgroundColor: '#E2E8F0',
                padding: '10px 16px',
                fontSize: 11,
                fontFamily: TOKENS.typography.fontFamilyMono,
                color: TOKENS.colors.textSecondary,
                textAlign: 'center',
                fontWeight: 600,
              }}
            >
              TARIFF AUTOMATION ITEM #1000-A
            </div>
          </div>

          {/* Accrual Ledger Cards (Single Box & 40-Box Fleet) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              width: 580,
            }}
          >
            {/* Box 1: Single Container Meter */}
            <div
              style={{
                backgroundColor: 'rgba(15, 20, 28, 0.92)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderLeft: `5px solid ${TOKENS.colors.amber}`,
                borderRadius: 10,
                padding: '20px 28px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 8,
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
                  SINGLE CONTAINER RATE
                </span>
                <span
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 12,
                    color: TOKENS.colors.textMuted,
                  }}
                >
                  TARIFF: $275.00 / DAY
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
                    fontSize: 48,
                    fontWeight: 900,
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                  }}
                >
                  ${singleBoxAccrual.toLocaleString()}
                </span>
                <span
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 13,
                    color: TOKENS.colors.crimson,
                    fontWeight: 800,
                  }}
                >
                  +${(275).toLocaleString()} EACH DAWN
                </span>
              </div>
            </div>

            {/* Box 2: 40-Container Fleet Compounding Total */}
            <div
              style={{
                backgroundColor: 'rgba(15, 20, 28, 0.94)',
                border: `1.5px solid ${TOKENS.colors.crimson}`,
                borderRadius: 10,
                padding: '24px 28px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 8,
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
                  40 REEFER FLEET ACCUMULATED FINE
                </span>
                <span
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 12,
                    fontWeight: 700,
                    color: TOKENS.colors.crimson,
                  }}
                >
                  RATE: $11,000 / MORNING
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
                    fontSize: 56,
                    fontWeight: 900,
                    color: TOKENS.colors.crimson,
                    letterSpacing: '-0.02em',
                  }}
                >
                  ${fleetAccrual.toLocaleString()}
                </span>
                <span
                  style={{
                    fontFamily: TOKENS.typography.fontFamilyMono,
                    fontSize: 14,
                    color: TOKENS.colors.textMuted,
                    fontWeight: 700,
                  }}
                >
                  DAY {currentDay} OF 21
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
              EVIDENTIARY MANDATE:
            </span>
            <span
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: '#E2E8F0',
              }}
            >
              “Two hundred and seventy-five dollars every single morning. Compounding at dawn.”
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
            EDI INVOICE TRANSMISSION: SUCCESS
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
          FINANCECRAFT DISPATCH // PORT OPERATIONS DESK
        </div>
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 12,
            color: TOKENS.colors.amber,
            letterSpacing: '0.1em',
          }}
        >
          GATE TIMECODE: 06:00:00 AM PST
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
          BERTH 406 REEFER CORRIDOR // SAN PEDRO BAY HARBOR TARIFF
        </div>
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 11,
            color: TOKENS.colors.textMuted,
            letterSpacing: '0.08em',
          }}
        >
          BILLING ENGINE: AUTOMATED EDI 310 FREIGHT INVOICE
        </div>
      </div>
    </AbsoluteFill>
  );
};
