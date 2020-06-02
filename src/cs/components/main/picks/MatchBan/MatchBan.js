import React from "react";
import "./MatchBan.scss";

const MatchBan = ({ ban }) => {
  return (
    <div
      className={`match-picks__ban ${ban.map ? "match-picks__ban_banned" : ""}`}
    >
      <img src={ban.img} alt={ban.map} className="match-picks__ban-img" />
      <div className="match-picks__ban-content">
        <img
          className="match-picks__ban-content__teamimg"
          src={ban.teamImg}
          alt={ban.team}
        />
        <p className="match-picks__ban-content__mapname">
          {ban.map ? ban.map : "TBA"}
        </p>
      </div>
    </div>
  );
};

export default MatchBan;
