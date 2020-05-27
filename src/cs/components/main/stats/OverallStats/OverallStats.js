import React from "react";
import "./OverallStats.scss";
import vitality from "../../../../../shared/img/teams/vitality.svg";
import spirit from "../../../../../shared/img/teams/spirit.svg";
import { v4 } from "uuid";

const DUMMY_STATS = [
  { id: 1, name: "Матчей сыграно", values: [145, 345], max: 600 },
  { id: 2, name: "Винрейт, %", values: [56, 25], max: 100 },
  { id: 3, name: "Пистолетные раунды, %", values: [34, 48], max: 100 },
  { id: 4, name: "Средний KD", values: [4, 14], max: 20, explain: true },
  { id: 5, name: "Средний ADR", values: [31, 25], max: 50, explain: true },
];

const OverallStats = () => {
  return (
    <div className="overall-stats white-pd-rounded">
      <div className="overall-stats__head">
        <p className="overall-stats__header header-blue">Общая статистика</p>
        <div className="overall-stats__teamlegend">
          <div className="overall-stats__teamlegend-item">
            <img src={vitality} alt="Vitality" />
          </div>
          <div className="overall-stats__teamlegend-item">
            <img src={spirit} alt="Spirit" />
          </div>
        </div>
      </div>
      <div className="overall-stats__main">
        {DUMMY_STATS.map((stat) => (
          <div key={v4()} className="overall-stats-item">
            <div className="overall-stats-item__scales">
              <div className="overall-stats-item__scale">
                <div
                  className={`overall-stats-item__scale_inner${
                    (stat.values[0] / stat.max) * 100 > 90 ? " no-pseudo" : ""
                  }`}
                  style={{ height: `${(stat.values[0] / stat.max) * 100}%` }}
                >
                  <p
                    className="overall-stats-text"
                    style={
                      stat.values[0].toString().length > 2
                        ? { transform: "rotate(-90deg)" }
                        : { transform: "none" }
                    }
                  >
                    {stat.values[0]}
                  </p>
                </div>
              </div>
              <div className="overall-stats-item__scale">
                <div
                  className={`overall-stats-item__scale_inner${
                    (stat.values[1] / stat.max) * 100 > 90 ? " no-pseudo" : ""
                  }`}
                  style={{ height: `${(stat.values[1] / stat.max) * 100}%` }}
                >
                  <p
                    className="overall-stats-text"
                    style={
                      stat.values[1].toString().length > 2
                        ? { transform: "rotate(-90deg)" }
                        : { transform: "none" }
                    }
                  >
                    {stat.values[1]}
                  </p>
                </div>
              </div>
            </div>
            <p
              className={`overall-stats-item__subtitle${
                stat.explain ? " text-explain" : ""
              }`}
            >
              {stat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverallStats;
