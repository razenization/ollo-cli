import React from "react";
import "./BetCalculator.scss";

import vitality from "../../../../../shared/img/teams/vitality.svg";
import spirit from "../../../../../shared/img/teams/spirit.svg";
import ggbet from "./img/ggbet.svg";
import Select from "../../../../../shared/components/FormElements/Select/Select";
import Input from "../../../../../shared/components/FormElements/Input/Input";
import Button from "../../../../../shared/components/UIElements/Button/Button";

const DUMMY_SELECTIONS = [
  { id: 1, img: ggbet, text: 2.3 },
  { id: 2, img: ggbet, text: 2.2 },
  { id: 3, img: ggbet, text: 2.1 },
];

const BetCalculator = () => {
  return (
    <form id="bet-calculator__form">
      <div className="bet-calculator white-pd-rounded">
        <div className="bet-calculator__team-select">
          <p className="bet-calculator__team-select__header">Выбор команды</p>

          <div className="bet-calculator__teams">
            <img
              src={vitality}
              alt="Vitality"
              className="bet-calculator__teamimg"
            />
            <img
              src={spirit}
              alt="Spirit"
              className="bet-calculator__teamimg grayscale"
            />
          </div>
        </div>
        <p className="bet-calculator__bookhead">Выберите БК:</p>
        <Select
          initial={DUMMY_SELECTIONS[0]}
          selections={DUMMY_SELECTIONS.slice(1)}
        />
        <Input
          id="bet-calculator__userbet"
          type="text"
          placeholder="Ваша ставка..."
          label="Ваша ставка"
        />
        <Input id="bet-calculator__userwin" type="text" label="Ваш выигрыш" />
        <Button green noMargin style={{ marginTop: "3px", width: "100%" }}>
          Сделать ставку!
        </Button>
      </div>
    </form>
  );
};

export default BetCalculator;
