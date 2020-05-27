import React from "react";
import "./HeadOption.scss";

const HeadOption = (props) => {
  return (
    <div className="match-option">
      <img src={props.icon} alt="" />
    </div>
  );
};

export default HeadOption;
