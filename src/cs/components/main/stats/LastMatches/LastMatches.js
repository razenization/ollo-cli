import React from "react";
import "./LastMatches.scss";

import navi from "./img/navi-small.svg";
import vitality from "../../../../../shared/img/teams/vitality.svg";
import spirit from "../../../../../shared/img/teams/spirit.svg";

const DUMMY_LAST = [
  {
    team: "Vitality",
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

const LastMatches = () => {
  return (
    <div className="last-matches white-pd-rounded">
      <div className="last-matches__head">
        <div className="last-matches__team">
          <img src={vitality} alt="" className="last-matches__teamimg" />
          <p className="last-matches__teamname">{DUMMY_LAST[0].team}</p>
        </div>
        <p className="last-matches__header header-blue">
          Последние встречи команд
        </p>
        <div className="last-matches__team">
          <p className="last-matches__teamname">{DUMMY_LAST[1].team}</p>
          <img src={spirit} alt="" className="last-matches__teamimg" />
        </div>
      </div>
      <div className="last-matches__items">
        {DUMMY_LAST.map((team, idx) => (
          <div key={idx} className="last-matches__item">
            {team.matches.map((match, idx) => (
              <div key={idx} className="last-matches__content">
                <p className="last-matches__content__date">{match.date}</p>
                <p className="last-matches__content__event">{match.event}</p>
                <p className="last-matches__content__format">{match.format}</p>
                <p
                  className={`last-matches__content__score${
                    match.winner ? " last-matches__score_winner" : ""
                  }`}
                >
                  {match.score}
                </p>
                <p className="last-matches__content__vsname">{match.vs}</p>
                <img
                  src={match.vslogo}
                  alt={match.vs}
                  className="last-matches__content__vs"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastMatches;
