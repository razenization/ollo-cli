import React from "react";
import "./MatchPick.scss";

const MatchPick = ({ pick }) => {
  console.log(pick);

  return (
    <div
      className={`match-picks__pick ${
        pick.map ? "match-picks__pick_picked" : ""
      }`}
    >
      <img src={pick.img} alt={pick.map} className="match-picks__pick-img" />
      <div className="match-picks__pick-content">
        <img
          className="match-picks__pick-content__teamimg"
          src={pick.teamImg}
          alt={pick.team}
        />
        <p className="match-picks__pick-content__mapname">
          {pick.map ? pick.map : "TBA"}
        </p>
      </div>
    </div>
  );
};

export default MatchPick;
