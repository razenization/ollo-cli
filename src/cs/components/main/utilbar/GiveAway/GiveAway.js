import React from "react";
import "./GiveAway.scss";
import giveawayItem from "./img/giveaway.svg";
import giveawayBg1 from "./img/giveaway-bg.svg";
import giveawayBg2 from "./img/giveaway-bg-top.svg";
import Button from "../../../../../shared/components/UIElements/Button/Button";

const DUMMY_GIVEAWAY = { itemImg: giveawayItem, link: "https://google.com/" };

const GiveAway = () => {
  return (
    <div className="giveaway">
      <img src={DUMMY_GIVEAWAY.itemImg} alt="" className="giveaway-item" />
      <Button href={DUMMY_GIVEAWAY.link} className="giveaway-take">
        Забрать скин!
      </Button>
      <img src={giveawayBg1} alt="" className="giveaway-bg giveaway-bg-btm" />
      <img src={giveawayBg2} alt="" className="giveaway-bg" />
    </div>
  );
};

export default GiveAway;
