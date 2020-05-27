import React from "react";
import "./StatsContainer.scss";
import OverallStats from "../OverallStats/OverallStats";
import PickedStats from "../PickedStats/PickedStats";
import MapStats from "../MapStats/MapStats";

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
      <div className="row">
        <div className="col-lg-7">
          <OverallStats />
          <PickedStats />
        </div>
        <div className="col-lg-5">
          <MapStats />
        </div>
      </div>
    </div>
  );
};

export default StatsContainer;
