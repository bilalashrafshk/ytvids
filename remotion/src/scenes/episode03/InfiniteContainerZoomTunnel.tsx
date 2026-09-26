import React, { useLayoutEffect, useRef } from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import { TOKENS } from '../../tokens';

export const InfiniteContainerZoomTunnel: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 60 frames (2.0s at 30fps) per container bay cycle
  // Exactly 4 seamless cycles across 240 frames (8.0s)
  const LOOP_FRAMES = 60;
  const loopProgress = (frame % LOOP_FRAMES) / LOOP_FRAMES; // 0.0 -> 1.0 continuous

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Reset canvas
    ctx.clearRect(0, 0, width, height);

    // Camera Kinematics (Harmonic FPV drone flight)
    const angle = loopProgress * Math.PI * 2;
    const droneRoll = Math.sin(angle) * 0.85; // degrees banking
    const dronePitch = Math.cos(angle) * 4.0; // px vertical drift
    const droneSway = Math.sin(angle * 2) * 5.5; // px horizontal sway

    const camX = width * 0.5 + droneSway;
    const camY = height * 0.52 + dronePitch; // Horizon slightly below center for monumental stack height
    const focalLength = 840.0;

    // -------------------------------------------------------------
    // 1. SKY & DISTANT HORIZON
    // -------------------------------------------------------------
    // Golden dusty California harbor sunset smog gradient (single amber accent)
    const skyGrad = ctx.createLinearGradient(0, 0, 0, camY + 20);
    skyGrad.addColorStop(0, TOKENS.colors.backgroundDark);
    skyGrad.addColorStop(0.45, TOKENS.colors.navy);
    skyGrad.addColorStop(0.85, TOKENS.colors.background);
    skyGrad.addColorStop(1, TOKENS.colors.amber);
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, width, camY + 25);

    // Distant pastel container backdrop on horizon
    ctx.fillStyle = TOKENS.colors.background;
    ctx.fillRect(camX - 420, camY - 20, 840, 24);
    ctx.fillStyle = TOKENS.colors.borderCard;
    ctx.fillRect(camX - 280, camY - 36, 560, 20);
    ctx.fillStyle = TOKENS.colors.navy;
    ctx.fillRect(camX - 140, camY - 50, 280, 16);

    // Distant Port of Los Angeles STS gantry crane silhouettes
    ctx.strokeStyle = TOKENS.colors.navy;
    ctx.lineWidth = 2.5;
    const cranePositions = [camX - 320, camX - 210, camX + 190, camX + 310];
    cranePositions.forEach((craneX) => {
      ctx.beginPath();
      ctx.moveTo(craneX, camY);
      ctx.lineTo(craneX - 16, camY - 95);
      ctx.moveTo(craneX, camY);
      ctx.lineTo(craneX + 16, camY - 95);
      // Crane horizontal boom
      ctx.moveTo(craneX - 25, camY - 95);
      ctx.lineTo(craneX + 65, camY - 95);
      // Machine room box
      ctx.moveTo(craneX - 10, camY - 65);
      ctx.lineTo(craneX + 10, camY - 65);
      ctx.stroke();
    });

    // -------------------------------------------------------------
    // 2. 3D PERSPECTIVE PROJECTION ENGINE
    // -------------------------------------------------------------
    const rad = (droneRoll * Math.PI) / 180;
    const cosR = Math.cos(rad);
    const sinR = Math.sin(rad);

    const project = (X: number, Y: number, Z: number): [number, number] | null => {
      if (Z <= 0.15) return null;
      // Apply camera roll
      const rx = X * cosR - Y * sinR;
      const ry = X * sinR + Y * cosR;
      const sx = camX + (rx * focalLength) / Z;
      const sy = camY - (ry * focalLength) / Z;
      return [sx, sy];
    };

    // -------------------------------------------------------------
    // 3. ROAD FLOOR & PAVEMENT
    // -------------------------------------------------------------
    // Deep asphalt floor
    ctx.fillStyle = '#3a3e47';
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(width, height);
    ctx.lineTo(width, camY);
    ctx.lineTo(0, camY);
    ctx.closePath();
    ctx.fill();

    // Side loading aprons under container walls
    // Left concrete apron (sunlit)
    const apL1 = project(-6.0, -1.8, 1.2);
    const apL2 = project(-6.0, -1.8, 88.0);
    const apL3 = project(-28.0, -1.8, 88.0);
    const apL4 = project(-28.0, -1.8, 1.2);
    if (apL1 && apL2 && apL3 && apL4) {
      ctx.fillStyle = '#525660';
      ctx.beginPath();
      ctx.moveTo(apL1[0], apL1[1]);
      ctx.lineTo(apL2[0], apL2[1]);
      ctx.lineTo(apL3[0], apL3[1]);
      ctx.lineTo(apL4[0], apL4[1]);
      ctx.closePath();
      ctx.fill();
    }

    // Right concrete apron (shadowed)
    const apR1 = project(6.0, -1.8, 1.2);
    const apR2 = project(6.0, -1.8, 88.0);
    const apR3 = project(28.0, -1.8, 88.0);
    const apR4 = project(28.0, -1.8, 1.2);
    if (apR1 && apR2 && apR3 && apR4) {
      ctx.fillStyle = '#343840';
      ctx.beginPath();
      ctx.moveTo(apR1[0], apR1[1]);
      ctx.lineTo(apR2[0], apR2[1]);
      ctx.lineTo(apR3[0], apR3[1]);
      ctx.lineTo(apR4[0], apR4[1]);
      ctx.closePath();
      ctx.fill();
    }

    // Ground contact shadow under container stacks
    const shdL1 = project(-6.0, -1.8, 1.2);
    const shdL2 = project(-6.0, -1.8, 88.0);
    const shdL3 = project(-5.0, -1.8, 88.0);
    const shdL4 = project(-5.0, -1.8, 1.2);
    if (shdL1 && shdL2 && shdL3 && shdL4) {
      ctx.fillStyle = 'rgba(18, 22, 28, 0.45)';
      ctx.beginPath();
      ctx.moveTo(shdL1[0], shdL1[1]);
      ctx.lineTo(shdL2[0], shdL2[1]);
      ctx.lineTo(shdL3[0], shdL3[1]);
      ctx.lineTo(shdL4[0], shdL4[1]);
      ctx.closePath();
      ctx.fill();
    }

    const shdR1 = project(6.0, -1.8, 1.2);
    const shdR2 = project(6.0, -1.8, 88.0);
    const shdR3 = project(4.8, -1.8, 88.0);
    const shdR4 = project(4.8, -1.8, 1.2);
    if (shdR1 && shdR2 && shdR3 && shdR4) {
      ctx.fillStyle = 'rgba(10, 14, 20, 0.65)';
      ctx.beginPath();
      ctx.moveTo(shdR1[0], shdR1[1]);
      ctx.lineTo(shdR2[0], shdR2[1]);
      ctx.lineTo(shdR3[0], shdR3[1]);
      ctx.lineTo(shdR4[0], shdR4[1]);
      ctx.closePath();
      ctx.fill();
    }

    // Diagonal safety chevron stripes on road shoulders
    const travelRoad = loopProgress * 14.0;
    for (let zBase = 2.0; zBase < 65.0; zBase += 2.0) {
      let zHatch = zBase - (travelRoad % 2.0);
      if (zHatch < 1.2) zHatch += 63.0;

      // Left shoulder hatch
      const p1 = project(-6.0, -1.8, zHatch);
      const p2 = project(-4.4, -1.8, zHatch + 1.2);
      if (p1 && p2 && p1[1] < height && p2[1] > camY) {
        ctx.strokeStyle = '#8a909c';
        ctx.lineWidth = Math.max(1, Math.round(18 / zHatch));
        ctx.beginPath();
        ctx.moveTo(p1[0], p1[1]);
        ctx.lineTo(p2[0], p2[1]);
        ctx.stroke();
      }

      // Right shoulder hatch
      const p3 = project(6.0, -1.8, zHatch);
      const p4 = project(4.4, -1.8, zHatch + 1.2);
      if (p3 && p4 && p3[1] < height && p4[1] > camY) {
        ctx.strokeStyle = '#5e636e';
        ctx.lineWidth = Math.max(1, Math.round(18 / zHatch));
        ctx.beginPath();
        ctx.moveTo(p3[0], p3[1]);
        ctx.lineTo(p4[0], p4[1]);
        ctx.stroke();
      }
    }

    // White edge boundary lines
    ctx.strokeStyle = '#e2e5e9';
    ctx.lineWidth = Math.max(1, Math.round(15 / 1.2));
    [-4.4, 4.4].forEach((laneX) => {
      const ps = project(laneX, -1.8, 1.2);
      const pe = project(laneX, -1.8, 88.0);
      if (ps && pe) {
        ctx.beginPath();
        ctx.moveTo(ps[0], ps[1]);
        ctx.lineTo(pe[0], pe[1]);
        ctx.stroke();
      }
    });

    // Dual steel crane rails
    ctx.strokeStyle = '#1a1e24';
    ctx.lineWidth = Math.max(1, Math.round(10 / 1.2));
    [-6.0, -5.8, 5.8, 6.0].forEach((railX) => {
      const ps = project(railX, -1.8, 1.2);
      const pe = project(railX, -1.8, 88.0);
      if (ps && pe) {
        ctx.beginPath();
        ctx.moveTo(ps[0], ps[1]);
        ctx.lineTo(pe[0], pe[1]);
        ctx.stroke();
      }
    });

    // White dashed center lane line
    for (let zBase = 2.0; zBase < 75.0; zBase += 3.2) {
      let zDash = zBase - (travelRoad % 3.2);
      if (zDash < 1.2) zDash += 73.0;
      const pNear = project(0, -1.8, zDash);
      const pFar = project(0, -1.8, zDash + 1.6);
      if (pNear && pFar && pNear[1] < height && pFar[1] > camY) {
        ctx.strokeStyle = '#f3f4f6';
        ctx.lineWidth = Math.max(1, Math.round(22 / zDash));
        ctx.beginPath();
        ctx.moveTo(pNear[0], pNear[1]);
        ctx.lineTo(pFar[0], pFar[1]);
        ctx.stroke();
      }
    }

    // -------------------------------------------------------------
    // 4. 3D CONTAINER CANYON
    // -------------------------------------------------------------
    // Modular Blocks: 12.0m container length + 2.0m cross-aisle gap = 14.0m period
    const BLOCK_LEN = 12.0;
    const AISLE_GAP = 2.0;
    const PERIOD = BLOCK_LEN + AISLE_GAP; // 14.0m
    const NUM_BLOCKS = 6;
    const forwardTravel = loopProgress * PERIOD;

    // Cel-shaded container color palettes (authentic Port of LA maritime fleets)
    // Stencil text is a single neutral white across every line — the fleet
    // identity comes from the container body hue, not the label color, so
    // the scene keeps exactly one saturated accent (amber, in the sky).
    const leftPalette = [
      { base: [46, 138, 82], label: 'SEA-KING', text: TOKENS.colors.surfaceCard }, // Forest Green
      { base: [158, 52, 62], label: 'MAERSK', text: TOKENS.colors.surfaceCard },   // Crimson Red
      { base: [46, 138, 82], label: 'GLOBAL', text: TOKENS.colors.surfaceCard },   // Forest Green
      { base: [42, 110, 186], label: 'OCEANIC', text: TOKENS.colors.surfaceCard }, // Maritime Blue
      { base: [218, 112, 48], label: 'OCEANIC', text: TOKENS.colors.surfaceCard }, // Rust Orange
      { base: [210, 154, 44], label: 'GLOBAL', text: TOKENS.colors.surfaceCard },  // Mustard Yellow
    ];

    const rightPalette = [
      { base: [158, 52, 62], label: 'MAERSK', text: TOKENS.colors.surfaceCard },   // Crimson Red
      { base: [46, 138, 82], label: 'GLOBAL', text: TOKENS.colors.surfaceCard },   // Forest Green
      { base: [140, 48, 64], label: 'SNCF', text: TOKENS.colors.surfaceCard },     // Plum Maroon
      { base: [46, 138, 82], label: 'GLOBAL', text: TOKENS.colors.surfaceCard },   // Forest Green
      { base: [215, 130, 42], label: 'GLOBAL', text: TOKENS.colors.surfaceCard },  // Amber Orange
      { base: [64, 74, 86], label: 'CAI', text: TOKENS.colors.surfaceCard },       // Industrial Slate
    ];

    // Render blocks back-to-front (Z = 84m down to Z = 0m)
    for (let b = NUM_BLOCKS; b >= 0; b--) {
      let zNear = b * PERIOD - forwardTravel;
      let zFar = zNear + BLOCK_LEN;

      // Loop wrap around horizon
      if (zNear < 0.5) {
        zNear += (NUM_BLOCKS + 1) * PERIOD;
        zFar += (NUM_BLOCKS + 1) * PERIOD;
      }

      // Distance haze blend factor (0.0 near -> 1.0 at 50m)
      const haze = Math.min(1.0, Math.max(0.0, (zNear - 12.0) / 38.0));
      const strokeAlpha = Math.max(0, 1 - haze * 1.15);

      // ----------------- LEFT WALL -----------------
      // Render 3 columns wide (Row 2, 1, 0)
      for (let row = 2; row >= 0; row--) {
        const xInner = -6.0 - row * 2.6;
        const xOuter = xInner - 2.5;

        for (let stack = 0; stack < 5; stack++) {
          const yBot = -1.8 + stack * 1.55;
          const yTop = yBot + 1.48;

          const colItem = leftPalette[(stack + b * 2 + row) % leftPalette.length];
          const base = colItem.base;

          // Warm sunlit ambient color
          const r = Math.round(base[0] * (1 - haze) + 230 * haze);
          const g = Math.round(base[1] * (1 - haze) + 208 * haze);
          const bC = Math.round(base[2] * (1 - haze) + 185 * haze);
          const fillColor = `rgb(${r}, ${g}, ${bC})`;
          const strokeColor = `rgba(18, 22, 28, ${strokeAlpha})`;

          // Side corrugated face (visible along corridor edge for row 0)
          if (row === 0) {
            const ps1 = project(xInner, yTop, zNear);
            const ps2 = project(xInner, yTop, zFar);
            const ps3 = project(xInner, yBot, zFar);
            const ps4 = project(xInner, yBot, zNear);

            if (ps1 && ps2 && ps3 && ps4 && ps1[0] < width && ps4[1] > 0) {
              ctx.fillStyle = fillColor;
              ctx.strokeStyle = strokeColor;
              ctx.lineWidth = Math.max(1, Math.round(4 / zNear));
              ctx.beginPath();
              ctx.moveTo(ps1[0], ps1[1]);
              ctx.lineTo(ps2[0], ps2[1]);
              ctx.lineTo(ps3[0], ps3[1]);
              ctx.lineTo(ps4[0], ps4[1]);
              ctx.closePath();
              ctx.fill();
              if (strokeAlpha > 0.05) ctx.stroke();

              // Container mid-seam (6.0m seam dividing the two 20ft containers)
              const zSeam = zNear + 6.0;
              const pSeamT = project(xInner, yTop, zSeam);
              const pSeamB = project(xInner, yBot, zSeam);
              if (pSeamT && pSeamB && strokeAlpha > 0.05) {
                ctx.strokeStyle = `rgba(14, 18, 24, ${strokeAlpha})`;
                ctx.lineWidth = Math.max(2, Math.round(7 / zSeam));
                ctx.beginPath();
                ctx.moveTo(pSeamT[0], pSeamT[1]);
                ctx.lineTo(pSeamB[0], pSeamB[1]);
                ctx.stroke();
              }

              // Corrugated vertical ribs with bevel shadow and highlight
              if (zNear < 38.0) {
                const numRibs = 24;
                for (let rib = 1; rib < numRibs; rib++) {
                  if (rib === 12) continue; // skip mid-seam
                  const zRib = zNear + (zFar - zNear) * (rib / numRibs);
                  const prTop = project(xInner, yTop, zRib);
                  const prBot = project(xInner, yBot, zRib);

                  if (prTop && prBot) {
                    // Dark bevel shadow
                    ctx.strokeStyle = `rgba(${Math.round(r * 0.76)}, ${Math.round(g * 0.76)}, ${Math.round(bC * 0.76)}, ${strokeAlpha})`;
                    ctx.lineWidth = Math.max(1, Math.round(3.5 / zRib));
                    ctx.beginPath();
                    ctx.moveTo(prTop[0], prTop[1]);
                    ctx.lineTo(prBot[0], prBot[1]);
                    ctx.stroke();

                    // Bright bevel highlight
                    const prTopH = project(xInner, yTop, zRib + 0.04);
                    const prBotH = project(xInner, yBot, zRib + 0.04);
                    if (prTopH && prBotH) {
                      ctx.strokeStyle = `rgba(${Math.min(255, Math.round(r * 1.18))}, ${Math.min(255, Math.round(g * 1.18))}, ${Math.min(255, Math.round(bC * 1.18))}, ${strokeAlpha})`;
                      ctx.lineWidth = Math.max(1, Math.round(1.8 / zRib));
                      ctx.beginPath();
                      ctx.moveTo(prTopH[0], prTopH[1]);
                      ctx.lineTo(prBotH[0], prBotH[1]);
                      ctx.stroke();
                    }
                  }
                }
              }

              // Stenciled maritime logo on container side
              if (zNear < 24.0) {
                [0, 1].forEach((cSub) => {
                  const lText = cSub === 0 ? colItem.label : colItem.label === 'GLOBAL' ? 'OCEANIC' : 'GLOBAL';
                  const zMid = zNear + 3.0 + cSub * 6.0;
                  const yMid = (yTop + yBot) * 0.5;
                  const pText = project(xInner, yMid, zMid);
                  if (pText && pText[0] < width && pText[0] > -100) {
                    const fontSize = Math.max(9, Math.round(185 / zMid));
                    ctx.font = `900 ${fontSize}px sans-serif`;
                    ctx.fillStyle = colItem.text;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(lText, pText[0], pText[1]);
                  }
                });
              }
            }
          }

          // Front door face (facing viewer at cross-aisle)
          const pf1 = project(xInner, yTop, zNear);
          const pf2 = project(xOuter, yTop, zNear);
          const pf3 = project(xOuter, yBot, zNear);
          const pf4 = project(xInner, yBot, zNear);

          if (pf1 && pf2 && pf3 && pf4 && pf2[0] < width && pf4[1] > 0) {
            const rf = Math.round(r * (0.86 - row * 0.04));
            const gf = Math.round(g * (0.86 - row * 0.04));
            const bf = Math.round(bC * (0.86 - row * 0.04));

            ctx.fillStyle = `rgb(${rf}, ${gf}, ${bf})`;
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = Math.max(1, Math.round(4 / zNear));
            ctx.beginPath();
            ctx.moveTo(pf1[0], pf1[1]);
            ctx.lineTo(pf2[0], pf2[1]);
            ctx.lineTo(pf3[0], pf3[1]);
            ctx.lineTo(pf4[0], pf4[1]);
            ctx.closePath();
            ctx.fill();
            if (strokeAlpha > 0.05) ctx.stroke();

            // Front door vertical split & locking rods
            if (zNear < 28.0) {
              const xMidF = (xInner + xOuter) * 0.5;
              const pSplitT = project(xMidF, yTop, zNear);
              const pSplitB = project(xMidF, yBot, zNear);
              if (pSplitT && pSplitB) {
                ctx.strokeStyle = `rgba(14, 18, 24, ${strokeAlpha})`;
                ctx.lineWidth = Math.max(1, Math.round(3.5 / zNear));
                ctx.beginPath();
                ctx.moveTo(pSplitT[0], pSplitT[1]);
                ctx.lineTo(pSplitB[0], pSplitB[1]);
                ctx.stroke();
              }

              // Steel locking bars
              [xMidF - 0.45, xMidF + 0.45].forEach((rodX) => {
                const pRodT = project(rodX, yTop, zNear);
                const pRodB = project(rodX, yBot, zNear);
                if (pRodT && pRodB) {
                  ctx.strokeStyle = `rgba(203, 213, 225, ${strokeAlpha})`;
                  ctx.lineWidth = Math.max(1, Math.round(4.5 / zNear));
                  ctx.beginPath();
                  ctx.moveTo(pRodT[0], pRodT[1]);
                  ctx.lineTo(pRodB[0], pRodB[1]);
                  ctx.stroke();
                }
              });

              // Corner casting steel pads at corners
              const pCc = project(xInner - 0.15, yTop - 0.1, zNear);
              if (pCc) {
                const sz = Math.max(2, Math.round(11 / zNear));
                ctx.fillStyle = TOKENS.colors.navy;
                ctx.fillRect(pCc[0] - sz, pCc[1] - sz, sz * 2, sz * 2);
              }
            }
          }
        }
      }

      // ----------------- RIGHT WALL -----------------
      // Render 3 columns wide (Row 2, 1, 0) in deep ambient shadow
      for (let row = 2; row >= 0; row--) {
        const xInner = 6.0 + row * 2.6;
        const xOuter = xInner + 2.5;

        for (let stack = 0; stack < 5; stack++) {
          const yBot = -1.8 + stack * 1.55;
          const yTop = yBot + 1.48;

          const colItem = rightPalette[(stack + b * 3 + row) % rightPalette.length];
          const base = colItem.base;

          // Shadowed ambient color (cooler, 60% luminosity)
          const r = Math.round((base[0] * 0.60) * (1 - haze) + 225 * haze);
          const g = Math.round((base[1] * 0.60) * (1 - haze) + 205 * haze);
          const bC = Math.round((base[2] * 0.60) * (1 - haze) + 180 * haze);
          const fillColor = `rgb(${r}, ${g}, ${bC})`;
          const strokeColor = `rgba(12, 16, 22, ${strokeAlpha})`;

          if (row === 0) {
            const ps1 = project(xInner, yTop, zNear);
            const ps2 = project(xInner, yTop, zFar);
            const ps3 = project(xInner, yBot, zFar);
            const ps4 = project(xInner, yBot, zNear);

            if (ps1 && ps2 && ps3 && ps4 && ps1[0] > 0 && ps4[1] > 0) {
              ctx.fillStyle = fillColor;
              ctx.strokeStyle = strokeColor;
              ctx.lineWidth = Math.max(1, Math.round(4 / zNear));
              ctx.beginPath();
              ctx.moveTo(ps1[0], ps1[1]);
              ctx.lineTo(ps2[0], ps2[1]);
              ctx.lineTo(ps3[0], ps3[1]);
              ctx.lineTo(ps4[0], ps4[1]);
              ctx.closePath();
              ctx.fill();
              if (strokeAlpha > 0.05) ctx.stroke();

              const zSeam = zNear + 6.0;
              const pSeamT = project(xInner, yTop, zSeam);
              const pSeamB = project(xInner, yBot, zSeam);
              if (pSeamT && pSeamB && strokeAlpha > 0.05) {
                ctx.strokeStyle = `rgba(8, 12, 18, ${strokeAlpha})`;
                ctx.lineWidth = Math.max(2, Math.round(7 / zSeam));
                ctx.beginPath();
                ctx.moveTo(pSeamT[0], pSeamT[1]);
                ctx.lineTo(pSeamB[0], pSeamB[1]);
                ctx.stroke();
              }

              if (zNear < 38.0) {
                const numRibs = 24;
                for (let rib = 1; rib < numRibs; rib++) {
                  if (rib === 12) continue;
                  const zRib = zNear + (zFar - zNear) * (rib / numRibs);
                  const prTop = project(xInner, yTop, zRib);
                  const prBot = project(xInner, yBot, zRib);
                  if (prTop && prBot) {
                    ctx.strokeStyle = `rgba(${Math.round(r * 0.74)}, ${Math.round(g * 0.74)}, ${Math.round(bC * 0.74)}, ${strokeAlpha})`;
                    ctx.lineWidth = Math.max(1, Math.round(3.5 / zRib));
                    ctx.beginPath();
                    ctx.moveTo(prTop[0], prTop[1]);
                    ctx.lineTo(prBot[0], prBot[1]);
                    ctx.stroke();
                  }
                }
              }

              if (zNear < 24.0) {
                [0, 1].forEach((cSub) => {
                  const lText = cSub === 0 ? colItem.label : colItem.label === 'GLOBAL' ? 'MAERSK' : 'GLOBAL';
                  const zMid = zNear + 3.0 + cSub * 6.0;
                  const yMid = (yTop + yBot) * 0.5;
                  const pText = project(xInner, yMid, zMid);
                  if (pText && pText[0] > 0 && pText[0] < width + 100) {
                    const fontSize = Math.max(9, Math.round(185 / zMid));
                    ctx.font = `900 ${fontSize}px sans-serif`;
                    ctx.fillStyle = colItem.text;
                    ctx.globalAlpha = 0.8;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(lText, pText[0], pText[1]);
                    ctx.globalAlpha = 1.0;
                  }
                });
              }
            }
          }

          const pf1 = project(xInner, yTop, zNear);
          const pf2 = project(xOuter, yTop, zNear);
          const pf3 = project(xOuter, yBot, zNear);
          const pf4 = project(xInner, yBot, zNear);

          if (pf1 && pf2 && pf3 && pf4 && pf2[0] > 0 && pf4[1] > 0) {
            const rf = Math.round(r * (0.90 - row * 0.04));
            const gf = Math.round(g * (0.90 - row * 0.04));
            const bf = Math.round(bC * (0.90 - row * 0.04));

            ctx.fillStyle = `rgb(${rf}, ${gf}, ${bf})`;
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = Math.max(1, Math.round(4 / zNear));
            ctx.beginPath();
            ctx.moveTo(pf1[0], pf1[1]);
            ctx.lineTo(pf2[0], pf2[1]);
            ctx.lineTo(pf3[0], pf3[1]);
            ctx.lineTo(pf4[0], pf4[1]);
            ctx.closePath();
            ctx.fill();
            if (strokeAlpha > 0.05) ctx.stroke();

            if (zNear < 28.0) {
              const xMidF = (xInner + xOuter) * 0.5;
              const pSplitT = project(xMidF, yTop, zNear);
              const pSplitB = project(xMidF, yBot, zNear);
              if (pSplitT && pSplitB) {
                ctx.strokeStyle = `rgba(8, 12, 16, ${strokeAlpha})`;
                ctx.lineWidth = Math.max(1, Math.round(3.5 / zNear));
                ctx.beginPath();
                ctx.moveTo(pSplitT[0], pSplitT[1]);
                ctx.lineTo(pSplitB[0], pSplitB[1]);
                ctx.stroke();
              }

              [xMidF - 0.45, xMidF + 0.45].forEach((rodX) => {
                const pRodT = project(rodX, yTop, zNear);
                const pRodB = project(rodX, yBot, zNear);
                if (pRodT && pRodB) {
                  ctx.strokeStyle = `rgba(148, 163, 184, ${strokeAlpha})`;
                  ctx.lineWidth = Math.max(1, Math.round(4.5 / zNear));
                  ctx.beginPath();
                  ctx.moveTo(pRodT[0], pRodT[1]);
                  ctx.lineTo(pRodB[0], pRodB[1]);
                  ctx.stroke();
                }
              });
            }
          }
        }
      }
    }

    // Volumetric Horizon Flare (Warm golden sun glow blending vanishing point)
    const flareGrad = ctx.createRadialGradient(camX, camY, 10, camX, camY, 340);
    flareGrad.addColorStop(0, 'rgba(255, 245, 220, 0.40)');
    flareGrad.addColorStop(0.35, 'rgba(250, 225, 190, 0.22)');
    flareGrad.addColorStop(0.70, 'rgba(240, 205, 160, 0.08)');
    flareGrad.addColorStop(1, 'rgba(240, 205, 160, 0)');
    ctx.fillStyle = flareGrad;
    ctx.fillRect(0, 0, width, height);

    // -------------------------------------------------------------
    // 5. FOREGROUND RAILROAD / CRANE CROSS TRACKS
    // -------------------------------------------------------------
    ctx.fillStyle = '#2c3038';
    ctx.fillRect(0, height - 98, width, 28);
    ctx.strokeStyle = '#181b22';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, height - 94);
    ctx.lineTo(width, height - 94);
    ctx.moveTo(0, height - 74);
    ctx.lineTo(width, height - 74);
    ctx.stroke();

    // -------------------------------------------------------------
    // 6. 2.39:1 ANAMORPHIC CINEMATIC LETTERBOX BARS
    // -------------------------------------------------------------
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, 55);
    ctx.fillRect(0, height - 55, width, 55);
  }, [frame, width, height, loopProgress]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TOKENS.colors.backgroundDark,
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </AbsoluteFill>
  );
};
