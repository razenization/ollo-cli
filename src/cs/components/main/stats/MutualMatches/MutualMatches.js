import React from "react";
import "./MutualMatches.scss";

import navi from "./img/navi-small.svg";
import vitality from "../../../../../shared/img/teams/vitality.svg";
import spirit from "../../../../../shared/img/teams/spirit.svg";

const DUMMY_MUTUAL = [
  {
    team: "Vitality",
    wins: 10,
    matches: [
      {
        id: 1,
        vs: "Natus Vincere",
        vslogo: navi,
        format: "BO3",
        event: "ESL Pro League 2020",
        date: "25.04.20",
        score: "2-0",
        winner: true,
      },
      {
        id: 2,
        vs: "Natus Vincere",
        vslogo: navi,
        format: "BO3",
        event: "ESL Pro League 2020",
        date: "25.04.20",
        score: "2-0",
        winner: true,
      },
      {
        id: 3,
        vs: "Natus Vincere",
        vslogo: navi,
        format: "BO3",
        event: "ESL Pro League 2020",
        date: "25.04.20",
        score: "2-0",
        winner: true,
      },
      {
        id: 4,
        vs: "Natus Vincere",
        vslogo: navi,
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
        vslogo: navi,
        format: "BO3",
        event: "ESL Pro League 2020",
        date: "25.04.20",
        score: "2-0",
        winner: true,
      },
      {
        id: 2,
        vs: "Natus Vincere",
        vslogo: navi,
        format: "BO3",
        event: "ESL Pro League 2020",
        date: "25.04.20",
        score: "2-0",
        winner: true,
      },
      {
        id: 3,
        vs: "Natus Vincere",
        vslogo: navi,
        format: "BO3",
        event: "ESL Pro League 2020",
        date: "25.04.20",
        score: "2-0",
        winner: true,
      },
      {
        id: 4,
        vs: "Natus Vincere",
        vslogo: navi,
        format: "BO3",
        event: "ESL Pro League Katowice",
        date: "25.04.20",
        score: "2-0",
        winner: true,
      },
    ],
  },
];

const MutualMatches = () => {
  return (
    <div className="mutual-matches white-pd-rounded">
      <div className="mutual-matches__head">
        <p className="mutual-matches__header header-blue">
          Личные встречи команд
        </p>
      </div>
      <div className="mutual-matches__subhead">
        <div className="mutual-matches__team">
          <img src={vitality} alt="" className="mutual-matches__teamimg" />
          <p className="mutual-matches__teamname">{DUMMY_MUTUAL[0].team}</p>
        </div>
        <div className="mutual-matches__subhead-stats">
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
        <div className="mutual-matches__team">
          <p className="mutual-matches__teamname">{DUMMY_MUTUAL[1].team}</p>
          <img src={spirit} alt="" className="mutual-matches__teamimg" />
        </div>
      </div>
      <div className="mutual-matches__items">
        {DUMMY_MUTUAL.map((team, idx) => (
          <div key={idx} className="mutual-matches__item">
            {team.matches.map((match, idx) => (
              <div key={idx} className="mutual-matches__content">
                <p className="mutual-matches__content__date">{match.date}</p>
                <p className="mutual-matches__content__event">{match.event}</p>
                <p className="mutual-matches__content__format">
                  {match.format}
                </p>
                <div className="mutual-matches__content__team">
                  <img
                    src={vitality}
                    alt=""
                    className="mutual-matches__team-teamimg"
                  />
                  <p className="mutual-matches__team-teamname">
                    {DUMMY_MUTUAL[0].team}
                  </p>
                </div>
                <p
                  className={`mutual-matches__content__score${
                    match.winner ? " mutual-matches__score_winner" : ""
                  }`}
                >
                  {match.score}
                </p>
                <div className="mutual-matches__content__team">
                  <p className="mutual-matches__team-teamname">
                    {DUMMY_MUTUAL[1].team}
                  </p>
                  <img
                    src={spirit}
                    alt=""
                    className="mutual-matches__team-teamimg"
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

export default MutualMatches;
