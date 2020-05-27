import React from "react";
import "./LiveStreams.scss";

import ru from "../../../../../shared/img/flags/ru.svg";
import { ReactComponent as Eye } from "../img/eye.svg";
import AdjustButton from "../../../../../shared/components/UIElements/AdjustButton/AdjustButton";

const DUMMY_STREAMS = [
  { id: 1, name: "HitMedia RU", origin: ru, watchers: 14233 },
  { id: 2, name: "Ruhub", origin: ru, watchers: 14233 },
  { id: 3, name: "Maincast", origin: ru, watchers: 14233 },
  { id: 4, name: "CSGO Stream", origin: ru, watchers: 14233 },
  { id: 5, name: "ESL TV", origin: ru, watchers: 14233 },
];

const LiveStreams = () => {
  return (
    <div className="streams white-pd-rounded">
      <h4 className="streams__header header-blue">Прямые трансляции</h4>
      {DUMMY_STREAMS.map((stream) => (
        <div key={stream.id} className="streams-item">
          <div className="streams-item__col">
            <p className="streams-item__name">{stream.name}</p>
            <img src={stream.origin} alt="ru" className="streams-item__flag" />
          </div>
          <div className="streams-item__col">
            <p className="streams-item__watchers">
              <span className="streams-item__watchers_text">
                {stream.watchers}
              </span>
              <Eye />
            </p>
          </div>
        </div>
      ))}
      <AdjustButton />
    </div>
  );
};

export default LiveStreams;
