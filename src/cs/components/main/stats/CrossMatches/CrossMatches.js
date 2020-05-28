import React from "react";
import "./CrossMatches.scss";

import vp from "./img/vp-small.svg";
import vitality from "../../../../../shared/img/teams/vitality.svg";
import spirit from "../../../../../shared/img/teams/spirit.svg";
import Explain from "../../../../../util/components/Explain/Explain";

const DUMMY_MUTUAL = [
  {
    team: "Vitality",
    wins: 10,
    matches: [
      {
        id: 1,
        vs: "Natus Vincere",
        vslogo: vp,
        format: "BO3",
        event: "ESL Pro League 2020",
        date: "25.04.20",
        score: "2-0",
        winner: true,
      },
      {
        id: 2,
        vs: "Natus Vincere",
        vslogo: vp,
        format: "BO3",
        event: "ESL Pro League 2020",
        date: "25.04.20",
        score: "2-0",
        winner: true,
      },
      {
        id: 3,
        vs: "Natus Vincere",
        vslogo: vp,
        format: "BO3",
        event: "ESL Pro League 2020",
        date: "25.04.20",
        score: "2-0",
        winner: true,
      },
      {
        id: 4,
        vs: "Natus Vincere",
        vslogo: vp,
        format: "BO3",
        event: "ESL Pro League 2020",
        date: "25.04.20",
        score: "2-0",
        winner: true,
      },
    ],
  },
  {
    team: "Spirit",
    wins: 6,
    matches: [
      {
        id: 1,
        vs: "Natus Vincere",
        vslogo: vp,
        format: "BO3",
        event: "ESL Pro League 2020",
        date: "25.04.20",
        score: "2-0",
        winner: true,
      },
      {
        id: 2,
        vs: "Natus Vincere",
        vslogo: vp,
        format: "BO3",
        event: "ESL Pro League 2020",
        date: "25.04.20",
        score: "2-0",
        winner: true,
      },
      {
        id: 3,
        vs: "Natus Vincere",
        vslogo: vp,
        format: "BO3",
        event: "ESL Pro League 2020",
        date: "25.04.20",
        score: "2-0",
        winner: true,
      },
      {
        id: 4,
        vs: "Natus Vincere",
        vslogo: vp,
        format: "BO3",
        event: "ESL Pro League Katowice",
        date: "25.04.20",
        score: "2-0",
        winner: true,
      },
    ],
  },
];

const CrossMatches = () => {
  return (
    <div className="crossing-matches white-pd-rounded">
      <div className="crossing-matches__head">
        <p className="crossing-matches__header header-blue">
          Встречи с пересекающимися командами
          <Explain
            style={{ width: "13px", height: "13px", fontSize: "9px" }}
            blue
            explainText="QJFJOWIFJQOIWJOQIWFJ::QOIWFJ:QWOF:QWFQJOIFQWFIOJQWFOIWJFJ"
          />
        </p>
      </div>
      <div className="crossing-matches__subhead">
        <div className="crossing-matches__team">
          <img src={vitality} alt="" className="crossing-matches__teamimg" />
          <p className="crossing-matches__teamname">{DUMMY_MUTUAL[0].team}</p>
        </div>
        <div className="crossing-matches__subhead-stats">
          <div className="subhead-stats__wins">
            <div
              className={`subhead-stats__wins-count${
                DUMMY_MUTUAL[0].wins > DUMMY_MUTUAL[1].wins
                  ? " wins-count_greater"
                  : ""
              }`}
            >
              {DUMMY_MUTUAL[0].wins}
            </div>
            <p className="subhead-stats__wins-text">Победы</p>
          </div>
          <div className="subhead-stats__total">
            <p className="subhead-stats__total-count">
              {DUMMY_MUTUAL[0].wins + DUMMY_MUTUAL[1].wins}
            </p>
            <p className="subhead-stats__total-text">Всего встреч</p>
          </div>
          <div className="subhead-stats__wins">
            <div
              className={`subhead-stats__wins-count${
                DUMMY_MUTUAL[1].wins > DUMMY_MUTUAL[0].wins
                  ? " wins-count_greater"
                  : ""
              }`}
            >
              {DUMMY_MUTUAL[1].wins}
            </div>
            <p className="subhead-stats__wins-text">Победы</p>
          </div>
        </div>
        <div className="crossing-matches__team">
          <p className="crossing-matches__teamname">{DUMMY_MUTUAL[1].team}</p>
          <img src={spirit} alt="" className="crossing-matches__teamimg" />
        </div>
      </div>
      <div className="crossing-matches__items">
        {DUMMY_MUTUAL.map((team, idx) => (
          <div key={idx} className="crossing-matches__item">
            {team.matches.map((match, idx) => (
              <div key={idx} className="crossing-matches__content">
                <p className="crossing-matches__content__date">{match.date}</p>
                <p className="crossing-matches__content__event">
                  {match.event}
                </p>
                <p className="crossing-matches__content__format">
                  {match.format}
                </p>
                <div className="crossing-matches__content__team">
                  <img
                    src={vitality}
                    alt=""
                    className="crossing-matches__team-teamimg"
                  />
                  <p className="crossing-matches__team-teamname">
                    {DUMMY_MUTUAL[0].team}
                  </p>
                </div>
                <p className="crossing-matches__content__score">
                  {match.score}
                </p>
                <div className="crossing-matches__content__team">
                  <p className="crossing-matches__team-teamname">
                    {DUMMY_MUTUAL[1].team}
                  </p>
                  <img
                    src={spirit}
                    alt=""
                    className="crossing-matches__team-teamimg"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrossMatches;
