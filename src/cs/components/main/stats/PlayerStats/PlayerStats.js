import React, { useState } from "react";
import "./PlayerStats.scss";

import shox from "../../../../../shared/img/players/shox.svg";
import rpk from "../../../../../shared/img/players/rpk.svg";
import apex from "../../../../../shared/img/players/apex.svg";
import zywoo from "../../../../../shared/img/players/zywoo.svg";
import misutaaa from "../../../../../shared/img/players/misutaaa.svg";
import chopper from "../../../../../shared/img/players/chopper.svg";
import chopperLarge from "./img/chopper-large.svg";
import shoxLarge from "./img/shox-large.svg";
import vitality from "../../../../../shared/img/teams/vitality.svg";
import spirit from "../../../../../shared/img/teams/spirit.svg";
import Button from "../../../../../shared/components/UIElements/Button/Button";
import Explain from "../../../../../util/components/Explain/Explain";

const DUMMY_PLAYERS = [
  {
    team: "Vitality",
    players: [
      {
        id: 1,
        nick: "shox",
        profile: "/players/1",
        avatar: shox,
        largeAvatar: shoxLarge,
        stats: {
          matchesPlayed: { value: 564, explainText: false },
          kd: { value: 2.41, explainText: "KD KDKKD KDDK DKDK DKDK DKDKDK" },
          adr: {
            value: 93.6,
            explainText:
              "ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ",
          },
          avg: {
            value: 25,
            explainText: "AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG ",
          },
          awp: {
            value: 0.85,
            explainText: false,
          },
          fb: {
            value: 0.91,
            explainText: false,
          },
          hs: {
            value: "43%",
            explainText: false,
          },
        },
      },
      {
        id: 2,
        nick: "RpK-",
        profile: "/players/2",
        avatar: rpk,
        largeAvatar: rpk,
        stats: {
          matchesPlayed: { value: 564, explainText: false },
          kd: { value: 2.41, explainText: "KD KDKKD KDDK DKDK DKDK DKDKDK" },
          adr: {
            value: 93.6,
            explainText:
              "ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ",
          },
          avg: {
            value: 25,
            explainText: "AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG ",
          },
          awp: {
            value: 0.85,
            explainText: false,
          },
          fb: {
            value: 0.91,
            explainText: false,
          },
          hs: {
            value: "43%",
            explainText: false,
          },
        },
      },
      {
        id: 3,
        nick: "apEX",
        profile: "/players/3",
        avatar: apex,
        largeAvatar: apex,
        stats: {
          matchesPlayed: { value: 564, explainText: false },
          kd: { value: 2.41, explainText: "KD KDKKD KDDK DKDK DKDK DKDKDK" },
          adr: {
            value: 93.6,
            explainText:
              "ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ",
          },
          avg: {
            value: 25,
            explainText: "AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG ",
          },
          awp: {
            value: 0.85,
            explainText: false,
          },
          fb: {
            value: 0.91,
            explainText: false,
          },
          hs: {
            value: "43%",
            explainText: false,
          },
        },
      },
      {
        id: 4,
        nick: "ZyWoO",
        profile: "/players/4",
        avatar: zywoo,
        largeAvatar: zywoo,
        stats: {
          matchesPlayed: { value: 564, explainText: false },
          kd: { value: 2.41, explainText: "KD KDKKD KDDK DKDK DKDK DKDKDK" },
          adr: {
            value: 93.6,
            explainText:
              "ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ",
          },
          avg: {
            value: 25,
            explainText: "AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG ",
          },
          awp: {
            value: 0.85,
            explainText: false,
          },
          fb: {
            value: 0.91,
            explainText: false,
          },
          hs: {
            value: "43%",
            explainText: false,
          },
        },
      },
      {
        id: 5,
        nick: "misutaaa",
        profile: "/players/5",
        avatar: misutaaa,
        largeAvatar: misutaaa,
        stats: {
          matchesPlayed: { value: 564, explainText: false },
          kd: { value: 2.41, explainText: "KD KDKKD KDDK DKDK DKDK DKDKDK" },
          adr: {
            value: 93.6,
            explainText:
              "ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ",
          },
          avg: {
            value: 25,
            explainText: "AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG ",
          },
          awp: {
            value: 0.85,
            explainText: false,
          },
          fb: {
            value: 0.91,
            explainText: false,
          },
          hs: {
            value: "43%",
            explainText: false,
          },
        },
      },
    ],
  },
  {
    team: "Spirit",
    players: [
      {
        id: 1,
        nick: "shox",
        profile: "/players/1",
        avatar: shox,
        largeAvatar: shoxLarge,
        stats: {
          matchesPlayed: { value: 564, explainText: false },
          kd: { value: 2.41, explainText: "KD KDKKD KDDK DKDK DKDK DKDKDK" },
          adr: {
            value: 93.6,
            explainText:
              "ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ",
          },
          avg: {
            value: 25,
            explainText: "AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG ",
          },
          awp: {
            value: 0.85,
            explainText: false,
          },
          fb: {
            value: 0.91,
            explainText: false,
          },
          hs: {
            value: "43%",
            explainText: false,
          },
        },
      },
      {
        id: 2,
        nick: "chopper",
        profile: "/players/2",
        avatar: rpk,
        largeAvatar: rpk,
        stats: {
          matchesPlayed: { value: 564, explainText: false },
          kd: { value: 2.41, explainText: "KD KDKKD KDDK DKDK DKDK DKDKDK" },
          adr: {
            value: 93.6,
            explainText:
              "ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ",
          },
          avg: {
            value: 25,
            explainText: "AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG ",
          },
          awp: {
            value: 0.85,
            explainText: false,
          },
          fb: {
            value: 0.91,
            explainText: false,
          },
          hs: {
            value: "43%",
            explainText: false,
          },
        },
      },
      {
        id: 3,
        nick: "apEX",
        profile: "/players/3",
        avatar: apex,
        largeAvatar: apex,
        stats: {
          matchesPlayed: { value: 564, explainText: false },
          kd: { value: 2.41, explainText: "KD KDKKD KDDK DKDK DKDK DKDKDK" },
          adr: {
            value: 93.6,
            explainText:
              "ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ",
          },
          avg: {
            value: 25,
            explainText: "AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG ",
          },
          awp: {
            value: 0.85,
            explainText: false,
          },
          fb: {
            value: 0.91,
            explainText: false,
          },
          hs: {
            value: "43%",
            explainText: false,
          },
        },
      },
      {
        id: 4,
        nick: "chopper",
        profile: "/players/4",
        avatar: chopper,
        largeAvatar: chopperLarge,
        stats: {
          matchesPlayed: { value: 564, explainText: false },
          kd: { value: 2.41, explainText: "KD KDKKD KDDK DKDK DKDK DKDKDK" },
          adr: {
            value: 93.6,
            explainText:
              "ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ",
          },
          avg: {
            value: 25,
            explainText: "AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG ",
          },
          awp: {
            value: 0.85,
            explainText: false,
          },
          fb: {
            value: 0.91,
            explainText: false,
          },
          hs: {
            value: "42%",
            explainText: false,
          },
        },
      },
      {
        id: 5,
        nick: "misutaaa",
        profile: "/players/5",
        avatar: misutaaa,
        largeAvatar: misutaaa,
        stats: {
          matchesPlayed: { value: 564, explainText: false },
          kd: { value: 2.41, explainText: "KD KDKKD KDDK DKDK DKDK DKDKDK" },
          adr: {
            value: 93.6,
            explainText:
              "ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ADR ",
          },
          avg: {
            value: 25,
            explainText: "AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG AVG ",
          },
          awp: {
            value: 0.85,
            explainText: false,
          },
          fb: {
            value: 0.91,
            explainText: false,
          },
          hs: {
            value: "43%",
            explainText: false,
          },
        },
      },
    ],
  },
];

const enums = {
  matchesPlayed: "Матчей в команде",
  kd: "KD",
  adr: "ADR",
  avg: "AVG",
  awp: "Убийств из AWP за раунд",
  fb: "Первых убийств",
  hs: "HS%",
};

const PlayerStats = () => {
  const [currentPlayerTeam1, setCurrentPlayerTeam1] = useState(
    DUMMY_PLAYERS[0].players[0]
  );
  const [currentPlayerTeam2, setCurrentPlayerTeam2] = useState(
    DUMMY_PLAYERS[1].players[3]
  );

  return (
    <div className="player-stats white-pd-rounded">
      <div className="player-box">
        <div className="player-box__team">
          {DUMMY_PLAYERS[0].players.map((player) => (
            <div
              key={player.id}
              className={`player-box__team-player${
                player === currentPlayerTeam1 ? " team-player_active" : ""
              }`}
              onClick={() => setCurrentPlayerTeam1(player)}
            >
              <img src={player.avatar} alt="" className="team-player__img" />
              <p className="team-player__nick">{player.nick}</p>
            </div>
          ))}
        </div>
        <div className="player-box__current-player">
          <img src={vitality} alt="" className="current-player__team-bg" />
          <div className="current-player__info">
            <p className="current-player__team">{DUMMY_PLAYERS[0].team}</p>
            <p className="current-player__nick">{currentPlayerTeam1.nick}</p>
          </div>
          <img
            src={currentPlayerTeam1.largeAvatar}
            alt=""
            className="current-player__largeimg"
          />
        </div>
      </div>
      <div className="players-comparison">
        <h3 className="players-comparison__header">
          Сравнение статистики игроков
        </h3>
        <Button className="players-comparison__goteam" opacityInv>
          Сравнить команды
        </Button>
        <div className="players-comparison__content">
          {Object.entries(currentPlayerTeam1.stats).map((stat, idx) => (
            <div key={idx} className="comparison-content__item">
              <p
                className={`comparison-content__stat${
                  parseFloat(stat[1].value) >
                  parseFloat(currentPlayerTeam2.stats[stat[0]].value)
                    ? " comparison-content__stat-higher"
                    : ""
                }`}
              >
                {stat[1].value}
              </p>
              <p className="comparison-content__stat-name">
                {enums[stat[0]]}
                {stat[1].explainText && (
                  <Explain explainText={stat[1].explainText} />
                )}
              </p>
              <p
                className={`comparison-content__stat${
                  parseFloat(
                    currentPlayerTeam2.stats[stat[0].value] >
                      parseFloat(stat[1].value)
                  )
                    ? " comparison-content__stat-higher"
                    : ""
                }`}
              >
                {currentPlayerTeam2.stats[stat[0]].value}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="player-box">
        <div className="player-box__current-player">
          <img src={spirit} alt="" className="current-player__team-bg" />
          <div className="current-player__info">
            <p className="current-player__team">{DUMMY_PLAYERS[1].team}</p>
            <p className="current-player__nick">{currentPlayerTeam2.nick}</p>
          </div>
          <img
            src={currentPlayerTeam2.largeAvatar}
            alt=""
            className="current-player__largeimg"
          />
        </div>
        <div className="player-box__team">
          {DUMMY_PLAYERS[1].players.map((player) => (
            <div
              key={player.id}
              className={`player-box__team-player${
                player === currentPlayerTeam2 ? " team-player_active" : ""
              }`}
              onClick={() => setCurrentPlayerTeam2(player)}
            >
              <img src={player.avatar} alt="" className="team-player__img" />
              <p className="team-player__nick">{player.nick}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
