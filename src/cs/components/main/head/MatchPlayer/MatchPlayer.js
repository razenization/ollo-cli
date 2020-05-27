import React from "react";
import "./MatchPlayer.scss";

const MatchPlayer = (props) => {
  return (
    <div className="match__team-players-item">
      <div className="player__img-wrapper">
        <img src={props.avatar} alt="" className="player__img" />
        <a href={props.profile} className="player__link">
          Профиль
        </a>
      </div>
      <p className="player__nick">{props.nick}</p>
    </div>
  );
};

export default MatchPlayer;
