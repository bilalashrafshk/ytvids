import React from 'react';
import { interpolate, useCurrentFrame, AbsoluteFill } from 'remotion';
import { TOKENS } from '../tokens';

export const BeatBlackoutBgpSeverance: React.FC = () => {
  const frame = useCurrentFrame();

  const reveal = (start: number, end: number) =>
    interpolate(frame, [start, end], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

  const headerProgress = reveal(0, 18);
  const baselineProgress = reveal(15, 45);
  const triggerProgress = reveal(45, 75); // 15:39 UTC command
  const collapseProgress = reveal(75, 110); // Prefixes dropping to zero
  const telemetryProgress = reveal(110, 145); // DNS SERVFAIL surge
  const holdProgress = reveal(145, 180); // Final forensic impact

  // Route prefix count dropping from 6,420 to 0
  const prefixCount = Math.round(
    interpolate(collapseProgress, [0, 1], [6420, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );

  // Global DNS Failure Rate surging to 99.8%
  const failureRate = interpolate(telemetryProgress, [0, 1], [0.1, 99.8], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }).toFixed(1);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        fontFamily: TOKENS.typography.fontFamilySans,
        padding: '70px 90px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: '#F8FAFC',
      }}
    >
      {/* Header & Source */}
      <div style={{ opacity: headerProgress, transform: `translateY(${(1 - headerProgress) * 15}px)` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <span
            style={{
              backgroundColor: TOKENS.colors.crimson,
              color: '#FFF',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.1em',
              padding: '4px 10px',
              borderRadius: 4,
            }}
          >
            BEAT 240 • TELEMETRY AUTOPSY
          </span>
          <span style={{ fontSize: 15, color: '#94A3B8', fontWeight: 500 }}>
            OCTOBER 4, 2021 • 15:39:00 UTC
          </span>
        </div>
        <h1 style={{ fontSize: 38, fontWeight: 800, margin: 0, letterSpacing: '-0.02em', color: '#FFF' }}>
          Autonomous System 32934: Global BGP Prefix Withdrawal
        </h1>
        <p style={{ fontSize: 16, color: '#94A3B8', margin: '6px 0 0 0' }}>
          Source: ThousandEyes & Cloudflare Radar Telemetry Archive • Meta Engineering Post-Mortem
        </p>
      </div>

      {/* Main Forensic Display Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 40, alignItems: 'center' }}>
        {/* Left: Chart & Prefix Waterfall */}
        <div
          style={{
            backgroundColor: '#1E293B',
            borderRadius: 12,
            border: '1px solid #334155',
            padding: '28px 32px',
            position: 'relative',
            opacity: baselineProgress,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 14, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Announced IPv4/IPv6 Prefixes (AS32934)
              </div>
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 900,
                  fontFamily: TOKENS.typography.fontFamilyMono,
                  color: prefixCount === 0 ? TOKENS.colors.crimson : '#10B981',
                  transition: 'color 0.2s ease',
                }}
              >
                {prefixCount.toLocaleString()}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 14, color: '#94A3B8' }}>Authoritative Status</div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: collapseProgress > 0.8 ? TOKENS.colors.crimson : '#10B981',
                }}
              >
                {collapseProgress > 0.8 ? 'ROUTES WITHDRAWN' : 'ONLINE (STEADY)'}
              </div>
            </div>
          </div>

          {/* Timeline Visual Bar */}
          <div style={{ height: 180, position: 'relative', borderBottom: '2px solid #475569', display: 'flex', alignItems: 'flex-end' }}>
            {/* Normal State line */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                bottom: 120,
                width: '35%',
                height: 4,
                backgroundColor: '#10B981',
              }}
            />
            {/* Cliff Drop line */}
            <div
              style={{
                position: 'absolute',
                left: '35%',
                bottom: 0,
                width: `${collapseProgress * 45}%`,
                height: 4,
                backgroundColor: TOKENS.colors.crimson,
                boxShadow: '0 0 12px rgba(211, 47, 47, 0.6)',
              }}
            />

            {/* Vertical Marker at 15:39 UTC */}
            <div
              style={{
                position: 'absolute',
                left: '35%',
                top: 10,
                bottom: 0,
                width: 2,
                backgroundColor: TOKENS.colors.amber,
                opacity: triggerProgress,
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: -24,
                  left: -50,
                  fontSize: 12,
                  fontWeight: 700,
                  color: TOKENS.colors.amber,
                  backgroundColor: '#0F172A',
                  padding: '2px 8px',
                  borderRadius: 4,
                  border: `1px solid ${TOKENS.colors.amber}`,
                }}
              >
                15:39 UTC
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontSize: 13, color: '#64748B' }}>
            <span>15:30 UTC</span>
            <span>15:35 UTC</span>
            <span>15:40 UTC</span>
            <span>15:45 UTC</span>
            <span>15:50 UTC</span>
          </div>
        </div>

        {/* Right: Cascade Telemetry & Badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Card 1: Trigger Event */}
          <div
            style={{
              backgroundColor: '#1E293B',
              borderRadius: 8,
              borderLeft: `4px solid ${TOKENS.colors.amber}`,
              padding: '16px 20px',
              opacity: triggerProgress,
              transform: `translateX(${(1 - triggerProgress) * 20}px)`,
            }}
          >
            <div style={{ fontSize: 13, color: TOKENS.colors.amber, fontWeight: 700 }}>STEP 1: CONFIGURATION CMD</div>
            <div style={{ fontSize: 15, color: '#E2E8F0', marginTop: 4 }}>
              Routine maintenance command unhooks backbone links; audit parser fails to catch syntax.
            </div>
          </div>

          {/* Card 2: Pivotal Detail Fail-Safe */}
          <div
            style={{
              backgroundColor: '#1E293B',
              borderRadius: 8,
              borderLeft: `4px solid ${TOKENS.colors.crimson}`,
              padding: '16px 20px',
              opacity: collapseProgress,
              transform: `translateX(${(1 - collapseProgress) * 20}px)`,
            }}
          >
            <div style={{ fontSize: 13, color: TOKENS.colors.crimson, fontWeight: 700 }}>
              STEP 2: [PIVOTAL] DNS FAIL-SAFE SUICIDE SWITCH
            </div>
            <div style={{ fontSize: 15, color: '#E2E8F0', marginTop: 4 }}>
              Authoritative DNS loses telemetry contact and immediately executes automated BGP withdrawal.
            </div>
          </div>

          {/* Card 3: Global Impact Metric */}
          <div
            style={{
              backgroundColor: '#1E293B',
              borderRadius: 8,
              borderLeft: `4px solid #38BDF8`,
              padding: '16px 20px',
              opacity: telemetryProgress,
              transform: `translateX(${(1 - telemetryProgress) * 20}px)`,
            }}
          >
            <div style={{ fontSize: 13, color: '#38BDF8', fontWeight: 700 }}>STEP 3: RESOLVER RECURSION COLLAPSE</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: '#FFF', marginTop: 4 }}>
              {failureRate}% <span style={{ fontSize: 15, fontWeight: 500, color: '#94A3B8' }}>SERVFAIL Query Loop</span>
            </div>
            <div style={{ fontSize: 13, color: '#94A3B8', marginTop: 2 }}>
              OAuth identity tokens severed across all third-party services globally.
            </div>
          </div>
        </div>
      </div>

      {/* Footer Benchmark Bar */}
      <div
        style={{
          borderTop: '1px solid #334155',
          paddingTop: 16,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 14,
          color: '#94A3B8',
          opacity: holdProgress,
        }}
      >
        <div>
          <strong style={{ color: '#FFF' }}>Facility Lockout:</strong> Badge verification servers offline; Santa Clara technicians physically barred.
        </div>
        <div>
          <strong style={{ color: TOKENS.colors.crimson }}>Global Status:</strong> AS32934 Dropped to Zero in Peering Tables
        </div>
      </div>
    </AbsoluteFill>
  );
};
