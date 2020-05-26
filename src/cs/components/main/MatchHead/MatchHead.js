import React from "react";
import "./MatchHead.scss";
import MatchTeam from "../MatchTeam/MatchTeam";
import MatchData from "../../prematch/MatchData/MatchData";
import HeadOption from "../HeadOption/HeadOption";
import vitality from "../../../../shared/img/teams/vitality.svg";
import spirit from "../../../../shared/img/teams/spirit.svg";
import ru from "../../../../shared/img/flags/ru.svg";

import star from "./img/options/star.svg";
import ollo from "./img/options/ollo.svg";
import gift from "./img/options/gift.svg";
import chat from "./img/options/chat.svg";

const DUMMY_TEAMS = [
  {
    id: 1,
    name: "Vitality",
    score: 15,
    profile: "/teams/1",
    avatar: vitality,
    origin: ru,
  },
  {
    id: 2,
    name: "Spirit",
    score: 9,
    profile: "/teams/2",
    avatar: spirit,
    origin: ru,
  },
];

const DUMMY_OPTIONS = [
  { id: 1, image: ollo, to: "/" },
  { id: 2, image: chat, to: "/" },
  { id: 3, image: gift, to: "/" },
  { id: 4, image: star, to: "/" },
];

const MatchHead = () => {
  // useEffect(() => {
  //   const teams = document.getElementsByClassName("match__team-preview");
  //   teams[0].style = "justify-content: flex-end";
  //   teams[1].style = "justify-content: flex-start";
  // });
  return (
    <div className="match-head">
      <div className="match-main__info">
        <div key={DUMMY_TEAMS[0].id} className="match-team__wrapper">
          <MatchTeam
            name={DUMMY_TEAMS[0].name}
            score={DUMMY_TEAMS[0].score}
            profile={DUMMY_TEAMS[0].profile}
            avatar={DUMMY_TEAMS[0].avatar}
            origin={DUMMY_TEAMS[0].origin}
          />
        </div>
        <div className="match-data">
          <MatchData />
        </div>
        <div key={DUMMY_TEAMS[1].id} className="match-team__wrapper">
          <MatchTeam
            reverse
            name={DUMMY_TEAMS[1].name}
            score={DUMMY_TEAMS[1].score}
            profile={DUMMY_TEAMS[1].profile}
            avatar={DUMMY_TEAMS[1].avatar}
            origin={DUMMY_TEAMS[1].origin}
          />
        </div>
      </div>
      <div className="match-options">
        {DUMMY_OPTIONS.map((option) => (
          <HeadOption icon={option.image} to={option.to} />
        ))}
      </div>
    </div>
  );
};

export default MatchHead;
