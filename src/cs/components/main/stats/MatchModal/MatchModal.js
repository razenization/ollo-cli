import React from "react";
import "./MatchModal.scss";
import Button from "../../../../../shared/components/UIElements/Button/Button";

const MatchModal = ({ match }) => {
  return (
    <div className="match-detail">
      <div className="match-detail__content white-pd-rounded">
        {match.maps.map((map) => (
          <div className="match-detail__item">
            <div className="match-detail__team">
              <img
                src={match.team1Logo}
                alt=""
                className="match-detail__team-img"
              />
              <p
                className={`match-detail__team-score${
                  map.score[0] < map.score[1]
                    ? " match-detail__team-score_lost"
                    : ""
                }`}
              >
                {map.score[0]}
              </p>
            </div>
            <div className="match-detail__map">
              <img src={map.mapImg} alt="" className="match-detail__map-img" />
              <p className="match-detail__map-name">{map.name}</p>
            </div>
            <div className="match-detail__team">
              <p
                className={`match-detail__team-score${
                  map.score[1] < map.score[0]
                    ? " match-detail__team-score_lost"
                    : ""
                }`}
              >
                {map.score[1]}
              </p>
              <img
                src={match.team2Logo}
                alt=""
                className="match-detail__team-img"
              />
            </div>
          </div>
        ))}
        <Button opacityInv style={{ margin: 0 }} className="match-detail__link">
          Перейти к событию
        </Button>
      </div>
    </div>
  );
};

export default MatchModal;
