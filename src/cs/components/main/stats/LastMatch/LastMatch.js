import React, { useState } from "react";
import "./LastMatch.scss";
import { CSSTransition } from "react-transition-group";
import MatchModal from "../MatchModal/MatchModal";

const LastMatch = ({ match }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="last-matches__content">
      <p className="last-matches__content__date">{match.date}</p>
      <p className="last-matches__content__event">{match.event}</p>
      <p className="last-matches__content__format">{match.format}</p>
      <div
        className={`last-matches__content__score${
          match.winner ? " last-matches__score_winner" : ""
        }`}
        onMouseEnter={() => setModal(true)}
        onMouseLeave={() => setModal(false)}
      >
        <p className="last-matches__score">{match.score}</p>
        <CSSTransition
          in={modal}
          timeout={200}
          mountOnEnter
          unmountOnExit
          classNames="ra"
        >
          <MatchModal match={match.matchData} />
        </CSSTransition>
      </div>
      <p className="last-matches__content__vsname">{match.vs}</p>
      <img
        src={match.vslogo}
        alt={match.vs}
        className="last-matches__content__vs"
      />
    </div>
  );
};

export default LastMatch;
