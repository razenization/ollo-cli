import React from "react";
import "./UpcomingList.scss";
import navi from "../../../../../shared/img/teams/navi.svg";
import nip from "../../../../../shared/img/teams/nip.svg";
import { ReactComponent as Dota } from "./img/dota2.svg";
import { ReactComponent as Csgo } from "./img/csgo.svg";

const DUMMY_UPCOMING = [
  {
    id: 1,
    team1: { name: "Natus Vincere", logo: navi },
    team2: { name: "Ninjas in Pyjamas", logo: nip },
    startsIn: "30 мин",
  },
  {
    id: 2,
    team1: { name: "Natus Vincere", logo: navi },
    team2: { name: "Ninjas in Pyjamas", logo: nip },
    startsIn: "30 мин",
  },
  {
    id: 3,
    team1: { name: "Natus Vincere", logo: navi },
    team2: { name: "Ninjas in Pyjamas", logo: nip },
    startsIn: "30 мин",
  },
  {
    id: 4,
    team1: { name: "Natus Vincere", logo: navi },
    team2: { name: "Ninjas in Pyjamas", logo: nip },
    startsIn: "30 мин",
  },
];

const UpcomingList = () => {
  return (
    <div className="upcoming-list white-pd-rounded">
      <div className="upcoming-list__head">
        <p className="upcoming-list__header header-blue">Ближайшие матчи</p>
        <div className="upcoming-list__switch">
          <i className="upcoming-switch__item">
            <Csgo />
          </i>
          <i className="upcoming-switch__item upcoming-switch__item_active">
            <Dota />
          </i>
        </div>
        <div className="upcoming-list__type-switch">
          <p className="upcoming-type-switch__item upcoming-type-switch__item_active">
            Все
          </p>
          <p className="upcoming-type-switch__item">Результаты</p>
        </div>
      </div>
      <div className="upcoming-list__content">
        {DUMMY_UPCOMING.map((match, idx) => (
          <div key={idx.toString()} className="upcoming-list__item">
            <div className="upcoming-list__item-team">
              <img
                src={match.team1.logo}
                alt=""
                className="upcoming-team__logo"
              />
              <p className="upcoming-team__name">{match.team1.name}</p>
            </div>
            <p className="upcoming-item__timeleft">{match.startsIn}</p>
            <div className="upcoming-list__item-team">
              <p className="upcoming-team__name">{match.team1.name}</p>
              <img
                src={match.team1.logo}
                alt=""
                className="upcoming-team__logo"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingList;
