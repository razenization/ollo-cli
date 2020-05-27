import React from "react";
import "./MatchPicks.scss";
import MatchPick from "../MatchPick/MatchPick";
import MatchBan from "../MatchBan/MatchBan";

import dust2 from "./img/picks/dust2.svg";
import inferno from "./img/picks/inferno.svg";
import tba from "./img/picks/tba.svg";
import nuke from "./img/bans/nuke.svg";
import train from "./img/bans/train.svg";
import vitality from "../../../../../shared/img/teams/vitality.svg";
import spirit from "../../../../../shared/img/teams/spirit.svg";

// Teams will be linked via db documents (mongo)
const DUMMY_PICKS = [
  {
    id: 1,
    map: "Dust2",
    team: "Vitality",
    teamImg: vitality,
    img: dust2,
  },
  {
    id: 2,
    map: "Inferno",
    team: "Spirit",
    teamImg: spirit,
    img: inferno,
  },
  { id: 3, img: tba },
];

const DUMMY_BANS = [
  {
    id: 1,
    map: "Nuke",
    team: "Sprit",
    teamImg: spirit,
    img: nuke,
  },
  {
    id: 2,
    map: "Train",
    team: "Vitality",
    teamImg: vitality,
    img: train,
  },
  {
    id: 3,
    map: "Nuke",
    team: "Sprit",
    teamImg: spirit,
    img: nuke,
  },
  {
    id: 4,
    map: "Train",
    team: "Vitality",
    teamImg: vitality,
    img: train,
  },
];

const MatchPicks = () => {
  return (
    <div className="match-picks white-pd-rounded">
      <div className="match-picks__head">
        <h4 className="match-picks__head-text header-blue">
          Пики и баны команд
        </h4>
        <p className="match-picks__head_bestof">Best of 3</p>
      </div>
      <div className="match-picks__picks">
        {DUMMY_PICKS.map((pick) => (
          <MatchPick key={pick.id} pick={pick} />
        ))}
      </div>
      <div className="match-picks__bans">
        {DUMMY_BANS.map((ban) => (
          <MatchBan key={ban.id} ban={ban} />
        ))}
      </div>
    </div>
  );
};

export default MatchPicks;
