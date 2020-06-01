import React, { useState } from "react";
import "./AdjustButton.scss";

const AdjustButton = ({ onClick }) => {
  const [toggled, setToggled] = useState(false);
  const toggleClick = () => {
    setToggled(!toggled);
    onClick();
  };
  return (
    <div
      className={`adjust-button${toggled ? " adjust-button_toggled" : ""}`}
      onClick={toggleClick}
    ></div>
  );
};

export default AdjustButton;
