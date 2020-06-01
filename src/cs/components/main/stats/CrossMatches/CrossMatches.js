import React from "react";
import "./CrossMatches.scss";

import vp from "./img/vp-small.svg";
import vitality from "../../../../../shared/img/teams/vitality.svg";
import spirit from "../../../../../shared/img/teams/spirit.svg";
import Explain from "../../../../../util/components/Explain/Explain";

const DUMMY_CROSS = [
  {
    id: 1,
    vs: "Natus Vincere",
    vslogo: vp,
    team1: {
      format: "BO3",
      score: "2-1",
      winner: true,
      date: "25.10.2019",
      event: "ESL Pro League 2020",
    },
    team2: {
      format: "BO3",
      score: "2-1",
      winner: true,
      date: "25.10.2019",
      event: "ESL Pro League 2020",
    },
  },
  {
    id: 2,
    vs: "Natus Vincere",
    vslogo: vp,
    team1: {
      format: "BO3",
      score: "2-1",
      winner: true,
      date: "25.10.2019",
      event: "ESL Pro League 2020",
    },
    team2: {
      format: "BO3",
      score: "2-1",
      winner: true,
      date: "25.10.2019",
      event: "ESL Pro League 2020",
    },
  },
  {
    id: 3,
    vs: "Natus",
    vslogo: vp,
    team1: {
      format: "BO3",
      score: "2-1",
      winner: true,
      date: "25.10.2019",
      event: "ESL Pro League 2020",
    },
    team2: {
      format: "BO3",
      score: "2-1",
      winner: true,
      date: "25.10.2019",
      event: "ESL Pro League 2020",
    },
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
          <p className="crossing-matches__teamname">Vitality</p>
        </div>
        <div className="subhead-stats__total">
          <p className="subhead-stats__total-count">{DUMMY_CROSS.length}</p>
          <p className="subhead-stats__total-text">Всего встреч</p>
        </div>
        <div className="crossing-matches__team">
          <p className="crossing-matches__teamname">Spirit</p>
          <img src={spirit} alt="" className="crossing-matches__teamimg" />
        </div>
      </div>
      <div className="crossing-matches__items">
        {DUMMY_CROSS.map((match, idx) => (
          <div key={idx} className="crossing-matches__item">
            <div key={idx} className="crossing-matches__content">
              <div className="crossing-matches__match">
                <p className="crossing-matches__date">{match.team1.date}</p>
                <p className="crossing-matches__event">{match.team1.event}</p>
                <p className="crossing-matches__format">{match.team1.format}</p>
                <p
                  className={`crossing-matches__score${
                    match.team1.winner ? " crossing-matches__score_winner" : ""
                  }`}
                >
                  {match.team1.score}
                </p>
              </div>
              <div className="crossing-matches__vs">
                <img
                  src={match.vslogo}
                  alt=""
                  className="crossing-matches__vsimg"
                />
                <p className="crossing-matches__vsname">{match.vs}</p>
              </div>
              <div className="crossing-matches__match">
                <p
                  className={`crossing-matches__score${
                    match.team2.winner ? " crossing-matches__score_winner" : ""
                  }`}
                >
                  {match.team2.score}
                </p>
                <p className="crossing-matches__format">{match.team2.format}</p>
                <p className="crossing-matches__event">{match.team2.event}</p>
                <p className="crossing-matches__date">{match.team2.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrossMatches;
