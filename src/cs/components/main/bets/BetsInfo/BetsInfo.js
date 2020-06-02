import React from "react";
import "./BetsInfo.scss";
import { v4 } from "uuid";

import { ReactComponent as parimatch } from "./img/parimatch.svg";
import { ReactComponent as fonbet } from "./img/fonbet.svg";
import { ReactComponent as ggbet } from "./img/ggbet.svg";
import { ReactComponent as xstavka } from "./img/1xstavka.svg";
import { ReactComponent as melbet } from "./img/melbet.svg";
import { ReactComponent as winline } from "./img/winline.svg";
import { ReactComponent as betcity } from "./img/betcity.svg";
import { ReactComponent as PmPrem } from "./img/parimatch-premium.svg";

import { ReactComponent as Gift } from "./img/gift.svg";

import vitality from "../../../../../shared/img/teams/vitality.svg";
import spirit from "../../../../../shared/img/teams/spirit.svg";
import BetCalculator from "../BetCalculator/BetCalculator";

const DUMMY__BOKIES = [
  {
    id: 1,
    img: parimatch,
    premiumImg: PmPrem,
    bonus: 1000,
    kefs: [3.21, 3.21],
  },
  { id: 2, img: ggbet, bonus: 1000, kefs: [3.21, 3.21] },
  { id: 3, img: winline, bonus: 1000, kefs: [3.21, 3.21] },
  { id: 4, img: fonbet, bonus: 1000, kefs: [3.21, 3.21] },
  { id: 5, img: xstavka, bonus: 1000, kefs: [3.21, 3.2] },
  { id: 6, img: melbet, bonus: 1000, kefs: [3.21, 3.21] },
  { id: 7, img: betcity, bonus: 1000, kefs: [3.21, 3.21] },
];

const BetsInfo = () => {
  return (
    <div className="bet-info white-pd-rounded">
      <div className="bet-info__head">
        <div className="bet-info__options">
          <button className="bet-info__option">Победа</button>
          <button className="bet-info__option">Фора</button>
          <button className="bet-info__option">Тотал</button>
          <button className="bet-info__option">Чёт/Нечёт</button>
          <button className="bet-info__option">Точный счёт</button>
          <button className="bet-info__option">Карты</button>
        </div>
        <h4 className="bet-info__head-text header-blue">
          Коэффиценты и калькулятор ставок
        </h4>
      </div>
      <div className="bet-info__contentwrapper">
        <div className="bet-info__content">
          <div className="bet-info__main">
            <div className="bet-info__teams">
              <img
                src={vitality}
                alt="Vitality"
                className="bet-info__teamimg"
              />
              <p className="bet-info__vs">VS</p>
              <img src={spirit} alt="Spirit" className="bet-info__teamimg" />
            </div>
            <div className="bet-info__main__betoptions">
              <p className="bet-info__main__betoption">Победа 1</p>
              <p className="bet-info__main__betoption">Победа 2</p>
            </div>
          </div>
          <div className="bet-info__bookies">
            {DUMMY__BOKIES.map((bookie, idx) => (
              <React.Fragment key={idx.toString()}>
                <div
                  key={bookie.id}
                  className={`bet-info__bookie${
                    bookie.premiumImg ? " bet-info__bookie_premium" : ""
                  }`}
                >
                  <div className="bet-info__inner">
                    <div className="bet-info__bookie__bonuswrapper">
                      <Gift />
                      <p className="bet-info__bookie__bonus">{bookie.bonus}</p>
                    </div>
                    <div className="bet-info__bookie__img">
                      <bookie.img />
                    </div>
                    {bookie.kefs.map((kef) => (
                      <p
                        key={v4()}
                        className={`bet-info__bookie__kef ${
                          kef > bookie.kefs.find((findKef) => findKef !== kef)
                            ? "kef-higher"
                            : ""
                        }`}
                      >
                        {kef}
                      </p>
                    ))}
                  </div>
                  {bookie.premiumImg && (
                    <bookie.premiumImg className="bet-info__bookie__premimg" />
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <BetCalculator />
      </div>
    </div>
  );
};

export default BetsInfo;
