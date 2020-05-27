import React from "react";
import "./PickedStats.scss";
import vitality from "../../../../../shared/img/teams/vitality.svg";
import spirit from "../../../../../shared/img/teams/spirit.svg";
import { v4 } from "uuid";

import inferno from "./img/inferno.svg";
import train from "./img/train.svg";
import mirage from "./img/mirage.svg";
import nuke from "./img/nuke.svg";
import overpass from "./img/overpass.svg";
import dust2 from "./img/dust2.svg";
import vertigo from "./img/vertigo.svg";

const DUMMY_MAPS = {
  inferno: inferno,
  train: train,
  mirage: mirage,
  nuke: nuke,
  overpass: overpass,
  dust2: dust2,
  vertigo: vertigo,
};

const DUMMY_STATS = [
  {
    team: "Vitality",
    img: vitality,
    maps: {
      inferno: 27,
      train: 40,
      nuke: 12,
      mirage: 5,
      overpass: 2,
      dust2: 7,
      vertigo: 1,
    },
  },
  {
    team: "Spirit",
    img: spirit,
    maps: {
      inferno: 27,
      train: 25,
      nuke: 25,
      mirage: 25,
      overpass: 25,
      dust2: 25,
      vertigo: 25,
    },
  },
];

const PickedStats = () => {
  const sortedMaps = [
    Object.entries(DUMMY_STATS[0].maps).sort((a, b) => b[1] - a[1]),
    Object.entries(DUMMY_STATS[1].maps).sort((a, b) => b[1] - a[1]),
  ];

  return (
    <div className="picked-stats white-pd-rounded">
      <p className="picked-stats__head header-blue text-explain-blue">
        Статистика по пикабельности
      </p>
      <div className="picked-stats__main">
        {sortedMaps.map((teamstats, idx) => (
          <div key={idx} className="picked-stats__team">
            <img
              src={DUMMY_STATS[idx].img}
              alt=""
              className="picked-stats__teamimg"
            />
            {teamstats.map((map, idx) => (
              <div key={v4()} className="picked-stats__map">
                <img
                  // eslint-disable-next-line
                  src={DUMMY_MAPS[map[0]]}
                  alt=""
                  className="picked-stats__mapimg"
                />
                {idx === 0 && (
                  <p className="picked-stats__best-text">Лучшая!</p>
                )}
                <div className="picked-stats__map-textcontainer">
                  <p className="picked-stats__percent">{map[1]}%</p>
                  <p className="picked-stats__mapname">{map[0]}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
        {/* <img src={spirit} alt="" className="picked-stats__team" /> */}
      </div>
    </div>
  );
};

export default PickedStats;
