import React from "react";
import "./LastMatches.scss";

import navi from "./img/navi-small.svg";
import vitality from "../../../../../shared/img/teams/vitality.svg";
import spirit from "../../../../../shared/img/teams/spirit.svg";
import LastMatch from "../LastMatch/LastMatch";
import inferno from "./img/inferno.svg";
import dust2 from "./img/dust2.svg";
import mirage from "./img/mirage.svg";

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
        matchData: {
          id: "uniqueid",
          maps: [
            { id: 1, name: "Dust2", mapImg: dust2, score: [16, 10] },
            { id: 2, name: "Inferno", mapImg: inferno, score: [20, 22] },
            { id: 3, name: "Mirage", mapImg: mirage, score: [16, 6] },
          ],
        },
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
        matchData: {
          id: "uniqueid",
          maps: [
            { id: 1, name: "Dust2", mapImg: dust2, score: [16, 10] },
            { id: 2, name: "Inferno", mapImg: inferno, score: [20, 22] },
            { id: 3, name: "Mirage", mapImg: mirage, score: [16, 6] },
          ],
        },
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
        matchData: {
          id: "uniqueid",
          maps: [
            { id: 1, name: "Dust2", mapImg: dust2, score: [16, 10] },
            { id: 2, name: "Inferno", mapImg: inferno, score: [20, 22] },
            { id: 3, name: "Mirage", mapImg: mirage, score: [16, 6] },
          ],
        },
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
        matchData: {
          id: "uniqueid",
          maps: [
            { id: 1, name: "Dust2", mapImg: dust2, score: [16, 10] },
            { id: 2, name: "Inferno", mapImg: inferno, score: [20, 22] },
            { id: 3, name: "Mirage", mapImg: mirage, score: [16, 6] },
          ],
        },
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
        matchData: {
          id: "uniqueid",
          maps: [
            { id: 1, name: "Dust2", mapImg: dust2, score: [16, 10] },
            { id: 2, name: "Inferno", mapImg: inferno, score: [20, 22] },
            { id: 3, name: "Mirage", mapImg: mirage, score: [16, 6] },
          ],
        },
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
        matchData: {
          id: "uniqueid",
          maps: [
            { id: 1, name: "Dust2", mapImg: dust2, score: [16, 10] },
            { id: 2, name: "Inferno", mapImg: inferno, score: [20, 22] },
            { id: 3, name: "Mirage", mapImg: mirage, score: [16, 6] },
          ],
        },
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
        matchData: {
          id: "uniqueid",
          maps: [
            { id: 1, name: "Dust2", mapImg: dust2, score: [16, 10] },
            { id: 2, name: "Inferno", mapImg: inferno, score: [20, 22] },
            { id: 3, name: "Mirage", mapImg: mirage, score: [16, 6] },
          ],
        },
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
        matchData: {
          id: "uniqueid",
          team1Logo: vitality,
          team2Logo: navi,
          maps: [
            { id: 1, name: "Dust2", mapImg: dust2, score: [16, 10] },
            { id: 2, name: "Inferno", mapImg: inferno, score: [20, 22] },
            { id: 3, name: "Mirage", mapImg: mirage, score: [16, 6] },
          ],
        },
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
              <LastMatch key={idx} match={match} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastMatches;
