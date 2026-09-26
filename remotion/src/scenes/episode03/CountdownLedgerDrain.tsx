import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';

import treasuryBgImg from '../../assets/episode03/003_treasury_ledger_terminal_bg.jpg';
import { TOKENS } from '../../tokens';

export const CountdownLedgerDrain: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // -------------------------------------------------------------
  // 1. CAMERA KINEMATICS (Cinematic Slow Push Across 126 frames)
  // -------------------------------------------------------------
  const cameraProgress = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.2, 0.1, 0.2, 1.0),
  });
  const bgScale = interpolate(cameraProgress, [0, 1], [1.0, 1.06]);
  const bgPanX = interpolate(cameraProgress, [0, 1], [0, -20]);
  const bgPanY = interpolate(cameraProgress, [0, 1], [0, -10]);

  // Entrance animations (Establish frames 0-24)
  const headerOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: 'clamp' });
  const headerSlide = interpolate(frame, [0, 18], [-25, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const cardsOpacity = interpolate(frame, [10, 26], [0, 1], { extrapolateRight: 'clamp' });
  const cardsSlide = interpolate(frame, [10, 26], [30, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp',
  });

  const warningOpacity = interpolate(frame, [25, 40], [0, 1], { extrapolateRight: 'clamp' });

  // -------------------------------------------------------------
  // 2. KINETIC COUNTDOWN & DRAIN SIMULATION (Frames 20 to 105)
  // -------------------------------------------------------------
  const drainProgress = interpolate(frame, [20, 102], [0, 1], {
    easing: Easing.bezier(0.3, 0.0, 0.15, 1.0),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Staccato day counter (30 down to 0)
  const rawDays = interpolate(drainProgress, [0, 1], [30, 0]);
  const days = Math.max(0, Math.round(rawDays));

  // Balance drain ($420,000 down to 0)
  const rawBalance = interpolate(drainProgress, [0, 1], [420000, 0]);
  const balance = Math.max(0, Math.round(rawBalance));

  // Burn rate calculation ($14,000/day)
  const cumulativeBurn = 420000 - balance;

  // Pulse when critical / zero
  const isCritical = days <= 7;
  const isZero = days === 0;
  const pulse = (Math.sin(frame * 0.3) + 1) / 2;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        fontFamily: TOKENS.typography.fontFamilySans,
        overflow: 'hidden',
      }}
    >
      {/* -------------------------------------------------------------
          LAYER 1: PHYSICAL SCENE FOUNDATION (Treasury Desk Feeder Plate)
          ------------------------------------------------------------- */}
      <AbsoluteFill
        style={{
          transform: `scale(${bgScale}) translate(${bgPanX}px, ${bgPanY}px)`,
          transformOrigin: 'center center',
        }}
      >
        <Img
          src={treasuryBgImg}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Dark editorial vignette and contrast grading */}
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse at 50% 50%, rgba(15, 20, 28, 0.55) 0%, rgba(15, 20, 28, 0.90) 100%)`,
          }}
        />
      </AbsoluteFill>

      {/* -------------------------------------------------------------
          LAYER 2: KINETIC DATA & EVIDENCE-BEARING CARDS
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
        {/* Header Block: Information Architecture (Title -> Scale -> Source) */}
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
                backgroundColor: 'rgba(245, 158, 11, 0.12)',
                border: `1px solid ${TOKENS.colors.amber}50`,
                borderRadius: 4,
                padding: '4px 12px',
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 12,
                fontWeight: 800,
                color: TOKENS.colors.amber,
                letterSpacing: '0.12em',
                marginBottom: 8,
              }}
            >
              <span>FORENSIC LIQUIDITY AUDIT</span>
              <span>•</span>
              <span>ACT I: DAY 00 – DAY 30 RUNWAY</span>
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
              Commercial Solvency Runway
            </h1>
            <div
              style={{
                fontSize: 14,
                color: TOKENS.colors.textMuted,
                marginTop: 6,
              }}
            >
              Source: Uniform Commercial Code (UCC) Art. 9 § 601 • Port of Los Angeles Tariff Master Schedule
            </div>
          </div>

          {/* Right Status Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              backgroundColor: 'rgba(15, 20, 28, 0.9)',
              border: `1.5px solid ${isZero ? TOKENS.colors.crimson : isCritical ? TOKENS.colors.amber : TOKENS.colors.emerald}`,
              borderRadius: 8,
              padding: '10px 20px',
              backdropFilter: 'blur(12px)',
              boxShadow: isZero
                ? `0 0 ${12 + pulse * 14}px ${TOKENS.colors.crimson}60`
                : 'none',
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: isZero ? TOKENS.colors.crimson : isCritical ? TOKENS.colors.amber : TOKENS.colors.emerald,
                boxShadow: `0 0 8px ${isZero ? TOKENS.colors.crimson : isCritical ? TOKENS.colors.amber : TOKENS.colors.emerald}`,
              }}
            />
            <span
              style={{
                fontFamily: TOKENS.typography.fontFamilyMono,
                fontSize: 13,
                fontWeight: 800,
                color: isZero ? TOKENS.colors.crimson : isCritical ? TOKENS.colors.amber : TOKENS.colors.emerald,
                letterSpacing: '0.1em',
              }}
            >
              {isZero ? 'LIQUIDITY ZERO: SEIZURE ACTIVE' : isCritical ? 'STATUS: CRITICAL DEFAULT RISK' : 'STATUS: CLEARING RUNWAY ACTIVE'}
            </span>
          </div>
        </div>

        {/* Center Double-Card Display: Countdown & Drain Balance */}
        <div
          style={{
            display: 'flex',
            gap: 36,
            justifyContent: 'center',
            alignItems: 'stretch',
            transform: `translateY(${cardsSlide}px)`,
            opacity: cardsOpacity,
            margin: '20px 0',
          }}
        >
          {/* Card 1: 30-Day Staccato Countdown Clock */}
          <div
            style={{
              flex: 1,
              maxWidth: 500,
              backgroundColor: 'rgba(15, 20, 28, 0.92)',
              border: `1.5px solid ${isZero ? TOKENS.colors.crimson : isCritical ? TOKENS.colors.amber : 'rgba(255,255,255,0.12)'}`,
              borderRadius: 12,
              padding: '36px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
              backdropFilter: 'blur(16px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                paddingBottom: 12,
              }}
            >
              <span
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 12,
                  fontWeight: 700,
                  color: TOKENS.colors.amber,
                  letterSpacing: '0.15em',
                }}
              >
                CLOCK TO STATUTORY FORFEITURE
              </span>
              <span
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 11,
                  color: TOKENS.colors.textMuted,
                }}
              >
                DAY 30 HORIZON
              </span>
            </div>

            <div style={{ padding: '24px 0', textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 96,
                  fontWeight: 900,
                  color: isZero ? TOKENS.colors.crimson : isCritical ? TOKENS.colors.amber : '#FFFFFF',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                }}
              >
                {days}
              </div>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 16,
                  fontWeight: 800,
                  color: isZero ? TOKENS.colors.crimson : TOKENS.colors.textSecondary,
                  letterSpacing: '0.2em',
                  marginTop: 8,
                }}
              >
                DAYS REMAINING
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.4)',
                borderRadius: 6,
                padding: '10px 16px',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: 12,
                fontFamily: TOKENS.typography.fontFamilyMono,
              }}
            >
              <span style={{ color: TOKENS.colors.textMuted }}>CURRENT TIMEPOINT:</span>
              <span style={{ color: '#E2E8F0', fontWeight: 700 }}>
                DAY {30 - days} OF 30 ({(30 - days) * 24}H ELAPSED)
              </span>
            </div>
          </div>

          {/* Card 2: Commercial Bank Deposit Balance Drain */}
          <div
            style={{
              flex: 1,
              maxWidth: 620,
              backgroundColor: 'rgba(15, 20, 28, 0.92)',
              border: `1.5px solid ${isZero ? TOKENS.colors.crimson : 'rgba(255,255,255,0.12)'}`,
              borderRadius: 12,
              padding: '36px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
              backdropFilter: 'blur(16px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                paddingBottom: 12,
              }}
            >
              <span
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 12,
                  fontWeight: 700,
                  color: isZero ? TOKENS.colors.crimson : TOKENS.colors.emerald,
                  letterSpacing: '0.15em',
                }}
              >
                PRIMARY OPERATING CASH LEDGER
              </span>
              <span
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 11,
                  color: TOKENS.colors.textMuted,
                }}
              >
                ACCOUNT: #7822-DEMURRAGE
              </span>
            </div>

            <div style={{ padding: '24px 0', textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 76,
                  fontWeight: 900,
                  color: isZero ? TOKENS.colors.crimson : TOKENS.colors.emerald,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                }}
              >
                ${balance.toLocaleString()}
              </div>
              <div
                style={{
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  fontSize: 15,
                  fontWeight: 700,
                  color: TOKENS.colors.textMuted,
                  letterSpacing: '0.15em',
                  marginTop: 8,
                }}
              >
                CASH RESERVE BALANCE
              </div>
            </div>

            {/* Metrics footer: Burn rate & cumulative drain */}
            <div
              style={{
                display: 'flex',
                gap: 12,
              }}
            >
              <div
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(30, 41, 59, 0.4)',
                  borderRadius: 6,
                  padding: '8px 14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 12,
                  fontFamily: TOKENS.typography.fontFamilyMono,
                }}
              >
                <span style={{ color: TOKENS.colors.textMuted }}>DAILY BURN:</span>
                <span style={{ color: TOKENS.colors.crimson, fontWeight: 700 }}>
                  -$14,000 / DAY
                </span>
              </div>
              <div
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(30, 41, 59, 0.4)',
                  borderRadius: 6,
                  padding: '8px 14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 12,
                  fontFamily: TOKENS.typography.fontFamilyMono,
                }}
              >
                <span style={{ color: TOKENS.colors.textMuted }}>TOTAL DRAINED:</span>
                <span style={{ color: TOKENS.colors.amber, fontWeight: 700 }}>
                  -${cumulativeBurn.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner: Editorial Rule & Seizure Trigger */}
        <div
          style={{
            opacity: warningOpacity,
            backgroundColor: 'rgba(15, 20, 28, 0.94)',
            border: `1px solid ${isZero ? TOKENS.colors.crimson : 'rgba(255, 255, 255, 0.12)'}`,
            borderLeft: `5px solid ${isZero ? TOKENS.colors.crimson : TOKENS.colors.amber}`,
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
                color: isZero ? TOKENS.colors.crimson : TOKENS.colors.amber,
                letterSpacing: '0.12em',
              }}
            >
              LEGAL SEIZURE TRIGGER:
            </span>
            <span
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: '#E2E8F0',
              }}
            >
              When cash reserves hit zero, commercial port liens lock container release orders automatically.
            </span>
          </div>
          <div
            style={{
              fontFamily: TOKENS.typography.fontFamilyMono,
              fontSize: 12,
              fontWeight: 800,
              color: isZero ? TOKENS.colors.crimson : TOKENS.colors.amber,
            }}
          >
            {isZero ? 'LIEN FORECLOSURE TRIGGERED' : 'ENFORCEMENT: AUTOMATIC AT DAY 30'}
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
          FINANCECRAFT DISPATCH // FORENSIC LIQUIDITY LEDGER
        </div>
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 12,
            color: TOKENS.colors.amber,
            letterSpacing: '0.1em',
          }}
        >
          SOLVENCY HORIZON: 30 DAYS (720 HOURS)
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
          STATUTORY REFERENCE: UCC ARTICLE 9 DEFAULT ENFORCEMENT & PORT WAREHOUSE LIENS
        </div>
        <div
          style={{
            fontFamily: TOKENS.typography.fontFamilyMono,
            fontSize: 11,
            color: TOKENS.colors.textMuted,
            letterSpacing: '0.08em',
          }}
        >
          COMMERCIAL RUNWAY: CRITICAL DEFICIT
        </div>
      </div>
    </AbsoluteFill>
  );
};
