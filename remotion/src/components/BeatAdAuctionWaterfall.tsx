import React from 'react';
import { interpolate, useCurrentFrame, AbsoluteFill } from 'remotion';
import { TOKENS } from '../tokens';

export const BeatAdAuctionWaterfall: React.FC = () => {
  const frame = useCurrentFrame();

  const reveal = (start: number, end: number) =>
    interpolate(frame, [start, end], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

  const headerProgress = reveal(0, 18);
  const baseProgress = reveal(18, 48);     // Baseline $24.5B monthly ad market
  const step1Progress = reveal(48, 75);    // Meta: -$10.76B
  const step2Progress = reveal(75, 100);   // Alphabet/YouTube: -$2.59B
  const step3Progress = reveal(100, 125);  // ByteDance/TikTok: -$1.81B
  const step4Progress = reveal(125, 150);  // Creator Sponsorships: -$2.05B
  const step5Progress = reveal(150, 175);  // Other Platforms (Snap, X, Pinterest): -$0.87B
  const finalProgress = reveal(175, 205);  // Net Frozen Liquidity: $18.08B - $24.50B
  // Frames 205–240 = reading hold

  const steps = [
    { label: 'Normal 30-Day Run-Rate', val: '+$24.50B', progress: baseProgress, color: TOKENS.colors.emerald },
    { label: 'Meta Auctions Frozen', val: '-$10.76B', progress: step1Progress, color: TOKENS.colors.crimson },
    { label: 'YouTube Video Bids', val: '-$2.59B', progress: step2Progress, color: TOKENS.colors.crimson },
    { label: 'TikTok Shop / Feed', val: '-$1.81B', progress: step3Progress, color: TOKENS.colors.crimson },
    { label: 'Creator Sponsorships', val: '-$2.05B', progress: step4Progress, color: TOKENS.colors.amber },
    { label: 'Snap / X / Pinterest', val: '-$0.87B', progress: step5Progress, color: TOKENS.colors.crimson },
    { label: '30-Day Liquidity Wipeout', val: '-$18.08B', progress: finalProgress, color: TOKENS.colors.crimson },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.background,
        fontFamily: TOKENS.typography.fontFamilySans,
        padding: '70px 90px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Header & Source Under Title */}
      <div style={{ opacity: headerProgress, transform: `translateY(${(1 - headerProgress) * 15}px)` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
          <span
            style={{
              backgroundColor: TOKENS.colors.crimson,
              color: '#FFF',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.08em',
              padding: '4px 10px',
              borderRadius: 4,
            }}
          >
            BEAT 410 • PROGRAMMATIC AD LIQUIDITY AUTOPSY
          </span>
          <span style={{ fontSize: 15, color: TOKENS.colors.textSecondary, fontWeight: 500 }}>
            30-DAY GLOBAL CESSATION WATERFALL
          </span>
        </div>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: TOKENS.colors.textPrimary, margin: 0, letterSpacing: '-0.02em' }}>
          $24.50 Billion Programmatic Advertising Liquidity Freeze
        </h1>
        <p style={{ fontSize: 15, color: TOKENS.colors.textSecondary, margin: '6px 0 0 0' }}>
          Sources: SEC Form 10-K Filings (Meta, Alphabet, Snap) • Interactive Advertising Bureau (IAB) Market Telemetry
        </p>
      </div>

      {/* Waterfall Steps Container */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          height: 380,
          borderBottom: `2px solid ${TOKENS.colors.borderCard}`,
          paddingBottom: 24,
          gap: 16,
        }}
      >
        {steps.map((step, idx) => {
          const isEnd = idx === steps.length - 1;
          const isStart = idx === 0;
          const barHeight = isStart ? 280 : isEnd ? 260 : 70 + idx * 25;

          return (
            <div
              key={step.label}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                opacity: step.progress,
                transform: `translateY(${(1 - step.progress) * 30}px)`,
              }}
            >
              <div
                style={{
                  fontSize: isEnd || isStart ? 24 : 18,
                  fontWeight: 800,
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  color: step.color,
                  marginBottom: 10,
                }}
              >
                {step.val}
              </div>

              {/* Bar element */}
              <div
                style={{
                  width: '100%',
                  height: barHeight * step.progress,
                  backgroundColor: step.color,
                  borderRadius: 6,
                  boxShadow: isEnd ? '0 8px 24px rgba(211, 47, 47, 0.35)' : 'none',
                }}
              />

              {/* Step Label */}
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: TOKENS.colors.textPrimary,
                  textAlign: 'center',
                  marginTop: 12,
                  lineHeight: 1.25,
                }}
              >
                {step.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Forensic Footnote & Retail Impact */}
      <div
        style={{
          backgroundColor: TOKENS.colors.surfaceCard,
          border: `1px solid ${TOKENS.colors.borderCard}`,
          borderRadius: 8,
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          opacity: finalProgress,
        }}
      >
        <div>
          <span style={{ fontWeight: 700, color: TOKENS.colors.crimson }}>DOWNSTREAM SUPPLY CHAIN CARNAGE:</span>{' '}
          <span style={{ color: TOKENS.colors.textSecondary, fontSize: 14 }}>
            Unserved programmatic inventory expires permanently. DTC order velocity drops 60%–85%, stranding warehouse inventory.
          </span>
        </div>
        <div
          style={{
            backgroundColor: TOKENS.colors.crimsonMuted,
            color: TOKENS.colors.crimson,
            fontSize: 13,
            fontWeight: 700,
            padding: '6px 14px',
            borderRadius: 6,
            whiteSpace: 'nowrap',
          }}
        >
          ACCOUNTS PAYABLE FREEZE
        </div>
      </div>
    </AbsoluteFill>
  );
};
