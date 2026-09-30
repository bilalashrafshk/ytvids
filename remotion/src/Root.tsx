import React from 'react';
import { Composition } from 'remotion';
import { HypotheticalScenarioWatermark } from './scenes/episode03/HypotheticalScenarioWatermark';
import { CountdownLedgerDrain } from './scenes/episode03/CountdownLedgerDrain';
import { DemurrageAccumulationCurve } from './scenes/episode03/DemurrageAccumulationCurve';
import { Pier400AerialFlyoverMap } from './scenes/episode03/Pier400AerialFlyoverMap';
import { CalendarDemurrageStomp } from './scenes/episode03/CalendarDemurrageStomp';
import { ContainerGridlockMetric3D } from './scenes/episode03/ContainerGridlockMetric3D';
import { InfiniteContainerZoomTunnel } from './scenes/episode03/InfiniteContainerZoomTunnel';
import { TimeRewindWhipMontage } from './scenes/episode03/TimeRewindWhipMontage';
import { GlobalFeedBlackoutMap } from './scenes/episode03/GlobalFeedBlackoutMap';
import { DailyDispatchWaterfall } from './scenes/episode03/DailyDispatchWaterfall';
import { AdAuctionBlackoutGraphic } from './scenes/episode03/AdAuctionBlackoutGraphic';
import { SerumUnitCostStack } from './scenes/episode03/SerumUnitCostStack';
import { PaidAdAcquisitionImpact } from './scenes/episode03/PaidAdAcquisitionImpact';
import { Day07LedgerCheckpoint } from './scenes/episode03/Day07LedgerCheckpoint';
import { FrozenWorkingCapitalCascade } from './scenes/episode03/FrozenWorkingCapitalCascade';
import { CourierCashDepletionMeter } from './scenes/episode03/CourierCashDepletionMeter';
import { GlobalCashDisruptionMap } from './scenes/episode03/GlobalCashDisruptionMap';
import { WireSettlementDelayCurve } from './scenes/episode03/WireSettlementDelayCurve';
import { Day16LedgerCheckpoint } from './scenes/episode03/Day16LedgerCheckpoint';
import { LienAccelerationStampCard } from './scenes/episode03/LienAccelerationStampCard';
import { ChassisDeadZoneClusterMap } from './scenes/episode03/ChassisDeadZoneClusterMap';
import { Day24LedgerCheckpoint } from './scenes/episode03/Day24LedgerCheckpoint';
import { UnpaidCarrierDebtWaterfall } from './scenes/episode03/UnpaidCarrierDebtWaterfall';
import { FinalBalanceSheetAutopsy } from './scenes/episode03/FinalBalanceSheetAutopsy';
import { NegativeEquityWaterfall } from './scenes/episode03/NegativeEquityWaterfall';
import { NotificationExplosionHUD } from './scenes/episode03/NotificationExplosionHUD';
import { AttentionReboundVsBusinessDeaths } from './scenes/episode03/AttentionReboundVsBusinessDeaths';
import { AuctionHammerCrushContainer } from './scenes/episode03/AuctionHammerCrushContainer';
import { FinanceCraftEndCard } from './scenes/episode03/FinanceCraftEndCard';
import { Ep04Compositions } from './scenes/episode04';
import { Ep05Compositions } from './scenes/episode05';
import { Img, staticFile } from 'remotion';
import { FilmLook } from './channels/raahim/FilmLook';
import { RaahimChalkboard } from './channels/raahim/RaahimChalkboard';
import { HonestNumber } from './channels/raahim/HonestNumber';
import { ActCard } from './channels/raahim/ActCard';

// Raahim kit demo: the approved test still wrapped in the film look.
const RaahimFilmLookDemo: React.FC = () => (
  <FilmLook>
    <Img src={staticFile('filmstrip_jumping_people.jpg')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </FilmLook>
);

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HypotheticalScenarioWatermark"
        component={HypotheticalScenarioWatermark}
        durationInFrames={84}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="CountdownLedgerDrain"
        component={CountdownLedgerDrain}
        durationInFrames={126}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DemurrageAccumulationCurve"
        component={DemurrageAccumulationCurve}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Pier400AerialFlyoverMap"
        component={Pier400AerialFlyoverMap}
        durationInFrames={210}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="CalendarDemurrageStomp"
        component={CalendarDemurrageStomp}
        durationInFrames={129}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ContainerGridlockMetric3D"
        component={ContainerGridlockMetric3D}
        durationInFrames={135}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="InfiniteContainerZoomTunnel"
        component={InfiniteContainerZoomTunnel}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TimeRewindWhipMontage"
        component={TimeRewindWhipMontage}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="GlobalFeedBlackoutMap"
        component={GlobalFeedBlackoutMap}
        durationInFrames={114}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DailyDispatchWaterfall"
        component={DailyDispatchWaterfall}
        durationInFrames={129}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="AdAuctionBlackoutGraphic"
        component={AdAuctionBlackoutGraphic}
        durationInFrames={135}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="SerumUnitCostStack"
        component={SerumUnitCostStack}
        durationInFrames={141}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="PaidAdAcquisitionImpact"
        component={PaidAdAcquisitionImpact}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Day07LedgerCheckpoint"
        component={Day07LedgerCheckpoint}
        durationInFrames={165}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="FrozenWorkingCapitalCascade"
        component={FrozenWorkingCapitalCascade}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="CourierCashDepletionMeter"
        component={CourierCashDepletionMeter}
        durationInFrames={135}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="GlobalCashDisruptionMap"
        component={GlobalCashDisruptionMap}
        durationInFrames={135}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="WireSettlementDelayCurve"
        component={WireSettlementDelayCurve}
        durationInFrames={135}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Day16LedgerCheckpoint"
        component={Day16LedgerCheckpoint}
        durationInFrames={120}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="LienAccelerationStampCard"
        component={LienAccelerationStampCard}
        durationInFrames={135}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ChassisDeadZoneClusterMap"
        component={ChassisDeadZoneClusterMap}
        durationInFrames={135}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Day24LedgerCheckpoint"
        component={Day24LedgerCheckpoint}
        durationInFrames={165}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="UnpaidCarrierDebtWaterfall"
        component={UnpaidCarrierDebtWaterfall}
        durationInFrames={135}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="FinalBalanceSheetAutopsy"
        component={FinalBalanceSheetAutopsy}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="NegativeEquityWaterfall"
        component={NegativeEquityWaterfall}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="NotificationExplosionHUD"
        component={NotificationExplosionHUD}
        durationInFrames={135}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="AttentionReboundVsBusinessDeaths"
        component={AttentionReboundVsBusinessDeaths}
        durationInFrames={141}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="AuctionHammerCrushContainer"
        component={AuctionHammerCrushContainer}
        durationInFrames={135}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="FinanceCraftEndCard"
        component={FinanceCraftEndCard}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Ep04Compositions />
      <Ep05Compositions />
      {/* Raahim channel kit — channels/raahim/CHANNEL.md */}
      <Composition id="Raahim-FilmLookDemo" component={RaahimFilmLookDemo} durationInFrames={90} fps={30} width={1920} height={1080} />
      <Composition
        id="Raahim-Chalkboard"
        component={RaahimChalkboard}
        durationInFrames={120}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ lines: ['8 BILLION PEOPLE', 'JUMP AT ONCE'], answer: 'EARTH' }}
      />
      <Composition
        id="Raahim-HonestNumber"
        component={HonestNumber}
        durationInFrames={105}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ value: 8000000000, caption: 'people, all landing at once', peak: false }}
      />
      <Composition
        id="Raahim-ActCard"
        component={ActCard}
        durationInFrames={75}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ part: 'PART TWO', title: 'THE TIDES' }}
      />
    </>
  );
};
