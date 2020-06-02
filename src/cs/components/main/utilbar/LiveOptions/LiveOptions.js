import React from "react";
import "./LiveOptions.scss";
import navi from "../../../../../shared/img/teams/navi.svg";
import nip from "../../../../../shared/img/teams/nip.svg";
import { Link } from "react-router-dom";

const DUMMY_LIVES = [
  {
    id: 1,
    to: "/cs/1",
    map: "Dust 2",
    teams: [
      { name: "Natus Vincere", logo: navi, score: 6 },
      { name: "Ninjas in Pyjamas", logo: nip, score: 10 },
    ],
  },
  {
    id: 2,
    to: "/cs/1",
    map: "Dust 2",
    teams: [
      { name: "Natus Vincere", logo: navi, score: 6 },
      { name: "Ninjas in Pyjamas", logo: nip, score: 10 },
    ],
  },
  {
    id: 3,
    to: "/cs/1",
    map: "Dust 2",
    teams: [
      { name: "Natus Vincere", logo: navi, score: 6 },
      { name: "Ninjas in Pyjamas", logo: nip, score: 10 },
    ],
  },
  {
    id: 4,
    to: "/cs/1",
    map: "Dust 2",
    teams: [
      { name: "Natus Vincere", logo: navi, score: 6 },
      { name: "Ninjas in Pyjamas", logo: nip, score: 10 },
    ],
  },
  {
    id: 5,
    to: "/cs/1",
    map: "Dust 2",
    teams: [
      { name: "Natus Vincere", logo: navi, score: 6 },
      { name: "Ninjas in Pyjamas", logo: nip, score: 10 },
    ],
  },
];

const LiveOptions = () => {
  return (
    <div className="live-options">
      {DUMMY_LIVES.map((live, i) => (
        <Link key={i.toString()} to={live.to}>
          <div className="live-options__item">
            {live.teams.map((team, idx) => (
              <div key={idx.toString()} className="live-options__team">
                <div className="live-team__imgwrap">
                  <img src={team.logo} alt="" className="live-team__img" />
                  <p className="live-team__name">{team.name}</p>
                </div>
                <p className="live-team__score">{team.score}</p>
              </div>
            ))}
            <div className="live-options__info">
              <p className="live-info__map">{live.map}</p>
              <p className="live-info__live">LIVE</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LiveOptions;
