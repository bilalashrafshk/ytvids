import React from 'react';
import { Composition } from 'remotion';
import { Beat100CapitalDestruction } from './components/Beat100CapitalDestruction';
import { Beat270CacFlywheel } from './components/Beat270CacFlywheel';
import { Beat320ChurnRetention } from './components/Beat320ChurnRetention';
import { Beat480BullwhipPhysics } from './components/Beat480BullwhipPhysics';
import { Beat490BullwhipCascade } from './components/Beat490BullwhipCascade';
import { Beat590AirFreightBurn } from './components/Beat590AirFreightBurn';
import { Beat780UnitMarginWaterfall } from './components/Beat780UnitMarginWaterfall';
import { Beat940RecallHit } from './components/Beat940RecallHit';
import { Beat1080McCarthyAxe } from './components/Beat1080McCarthyAxe';
import { OhioFarmlandDroneCinematic } from './components/OhioFarmlandDroneCinematic';
import { OhioFactoryInfiniteTunnel } from './components/OhioFactoryInfiniteTunnel';
import { BeatBlackoutBgpSeverance } from './components/BeatBlackoutBgpSeverance';
import { BeatAdAuctionWaterfall } from './components/BeatAdAuctionWaterfall';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Beat100CapitalDestruction"
        component={Beat100CapitalDestruction}
        durationInFrames={210}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Beat270CacFlywheel"
        component={Beat270CacFlywheel}
        durationInFrames={210}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Beat320ChurnRetention"
        component={Beat320ChurnRetention}
        durationInFrames={210}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Beat480BullwhipPhysics"
        component={Beat480BullwhipPhysics}
        durationInFrames={210}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Beat490BullwhipCascade"
        component={Beat490BullwhipCascade}
        durationInFrames={210}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Beat590AirFreightBurn"
        component={Beat590AirFreightBurn}
        durationInFrames={210}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Beat780UnitMarginWaterfall"
        component={Beat780UnitMarginWaterfall}
        durationInFrames={210}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Beat940RecallHit"
        component={Beat940RecallHit}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Beat1080McCarthyAxe"
        component={Beat1080McCarthyAxe}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="OhioFarmlandDroneCinematic"
        component={OhioFarmlandDroneCinematic}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="OhioFactoryInfiniteTunnel"
        component={OhioFactoryInfiniteTunnel}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="BeatBlackoutBgpSeverance"
        component={BeatBlackoutBgpSeverance}
        durationInFrames={210}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="BeatAdAuctionWaterfall"
        component={BeatAdAuctionWaterfall}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
