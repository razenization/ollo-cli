import React from "react";
import "./MapStats.scss";
import vitality from "../../../../../shared/img/teams/vitality.svg";
import spirit from "../../../../../shared/img/teams/spirit.svg";

import dust2 from "./img/dust2.svg";
import inferno from "./img/inferno.svg";
import overpass from "./img/overpass.svg";
import mirage from "./img/mirage.svg";
import train from "./img/train.svg";
import vertigo from "./img/vertigo.svg";
import nuke from "./img/nuke.svg";

const DUMMY_MAPS = [
  {
    id: 1,
    img: dust2,
    name: "Dust2",
    picked: vitality,
    stats: [44, 25],
    played: [3, 2],
  },
  {
    id: 2,
    img: inferno,
    name: "Inferno",
    picked: spirit,
    stats: [44, 25],
    played: [3, 2],
  },
  {
    id: 3,
    img: mirage,
    name: "Mirage",
    picked: true,
    stats: [44, 25],
    played: [3, 2],
  },
  {
    id: 4,
    img: nuke,
    name: "Nuke",
    picked: false,
    stats: [44, 25],
    played: [3, 2],
  },
  {
    id: 5,
    img: overpass,
    name: "Overpass",
    picked: false,
    stats: [44, 25],
    played: [3, 2],
  },
  {
    id: 6,
    img: train,
    name: "Train",
    picked: false,
    stats: [44, 25],
    played: [3, 2],
  },
  {
    id: 7,
    img: vertigo,
    name: "Vertigo",
    picked: false,
    stats: [44, 25],
    played: [3, 2],
  },
];

const MapStats = () => {
  return (
    <div className="map-stats white-pd-rounded">
      <div className="map-stats__head">
        <p className="map__stats__head-text header-blue">Статистика карт</p>
        <div className="map-stats__teams">
          <img src={vitality} alt="" className="map-stats__team" />
          <img src={spirit} alt="" className="map-stats__team" />
        </div>
      </div>
      <div className="map-stats__content">
        {DUMMY_MAPS.map((map, idx) => (
          <div key={idx} className="map-stats__map">
            <div className="map-stats__pic">
              <img src={map.img} alt="" className="map-stats__img" />
              <div className="map-stats__mapinfo">
                {map.picked !== true && map.picked !== false && (
                  <img
                    src={map.picked}
                    alt=""
                    className="map-stats__pickerimg"
                  />
                )}
                <p className="map-stats__mapname">{map.name}</p>
              </div>
            </div>
            <div className="map-stats__stats">
              {map.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`map-stats__stat${
                    stat > map.stats.find((findStat) => findStat !== stat)
                      ? " map-stats__stat-higher"
                      : ""
                  }`}
                >
                  <p className="map-stats__stat-percent">{stat}%</p>
                  <p className="map-stats__stat-subtext">
                    {map.played[idx]} карты
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapStats;
