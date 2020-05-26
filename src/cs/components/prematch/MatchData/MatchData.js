import React from "react";
import "./MatchData.scss";

const MatchData = (props) => {
  return (
    <>
      <div>
        <p className="match-data__event">ESL Pro League Season 11 Europe</p>
        <p className="match-data__type">Online, Playoff, 1/4</p>
      </div>
      <div className="match-data__delim">
        <p className="match-data__versus">VS</p>
        <p className="match-data__time_bestof">
          <span className="match-data__starttime">15:00 MSK</span>
          <span className="match-data__bestof">BO3</span>
        </p>
        <p className="match-data__date">25.04.2020</p>
      </div>
      <p className="match-data__timeleft-wrapper">
        До начала: <span className="match-data__timeleft">5 ч 45 мин</span>
      </p>
    </>
  );
};

export default MatchData;
