import React from "react";
import "./StatsContainer.scss";
import OverallStats from "../OverallStats/OverallStats";
import PickedStats from "../PickedStats/PickedStats";
import MapStats from "../MapStats/MapStats";
import PlayerStats from "../PlayerStats/PlayerStats";
import LastMatches from "../LastMatches/LastMatches";
import MutualMatches from "../MutualMatches/MutualMatches";
import CrossMatches from "../CrossMatches/CrossMatches";

const StatsContainer = () => {
  return (
    <div className="stats-container">
      <div className="stats-switch">
        <div className="stats-switch__option">Последние 3 месяца</div>
        <div className="stats-switch__option">Последний месяц</div>
        <div className="stats-switch__option stats-switch__option_active">
          Выбрать период
        </div>
      </div>
      <div className="grid seven-to-five">
        <div className="grid-col">
          <OverallStats />
          <PickedStats />
        </div>
        <div className="grid-col">
          <MapStats />
        </div>
      </div>
      <PlayerStats />
      <LastMatches />
      <MutualMatches />
      <CrossMatches />
    </div>
  );
};

export default StatsContainer;
