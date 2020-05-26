import React from "react";
import MatchPlayer from "../MatchPlayer/MatchPlayer";
import "./MatchTeam.scss";
import shox from "../../../../shared/img/players/shox.svg";
import rpk from "../../../../shared/img/players/rpk.svg";
import apex from "../../../../shared/img/players/apex.svg";
import zywoo from "../../../../shared/img/players/zywoo.svg";
import misutaaa from "../../../../shared/img/players/misutaaa.svg";

const DUMMY_PLAYERS = [
  {
    id: 1,
    nick: "shox",
    profile: "/players/1",
    avatar: shox,
  },
  {
    id: 2,
    nick: "RpK-",
    profile: "/players/2",
    avatar: rpk,
  },
  {
    id: 3,
    nick: "apEX",
    profile: "/players/3",
    avatar: apex,
  },
  {
    id: 4,
    nick: "ZyWoO",
    profile: "/players/4",
    avatar: zywoo,
  },
  {
    id: 5,
    nick: "misutaaa",
    profile: "/players/5",
    avatar: misutaaa,
  },
];

const MatchTeam = (props) => {
  let teamPreview;
  if (props.reverse) {
    teamPreview = (
      <div className="match-team__preview reversed">
        <div className="match__img-full">
          <img
            src={props.avatar}
            alt={props.name}
            className="match-team__img"
          />
          <div className="match-team__country">
            <img src={props.origin} alt="Origin" className="match-team__flag" />
          </div>
          <a href={props.profile} className="match-team__link">
            Профиль
          </a>
        </div>
        <p className="match-team__name">{props.name}</p>
      </div>
    );
  } else {
    teamPreview = (
      <div className="match-team__preview">
        <p className="match-team__name">{props.name}</p>
        <div className="match__img-full">
          <img
            src={props.avatar}
            alt={props.name}
            className="match-team__img"
          />
          <div className="match-team__country">
            <img src={props.origin} alt="Origin" className="match-team__flag" />
          </div>
          <a href={props.profile} className="match-team__link">
            Профиль
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className="match-team">
      {teamPreview}
      <div className="match-team__players">
        {DUMMY_PLAYERS.map((player) => (
          <MatchPlayer
            nick={player.nick}
            key={player.id}
            profile={player.profile}
            avatar={player.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default MatchTeam;
