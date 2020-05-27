import React, { useState, useEffect, useRef } from "react";
import "./Select.scss";
import { v4 } from "uuid";

const Select = (props) => {
  const initialElement = props.initial;
  const [currentElement, setCurrentElement] = useState(initialElement);
  const [opened, setOpened] = useState(false);
  const selectRef = useRef();

  const clickHandler = (e) => {
    setOpened(!opened);
  };

  useEffect(() => {
    setCurrentElement(initialElement);
  }, [initialElement]);

  return (
    <div
      ref={selectRef}
      className={`select-box ${props.className ? props.className : ""} ${
        opened ? "select-box__opened" : ""
      }`}
      onClick={clickHandler}
    >
      <div className="select-box__current">
        <img src={currentElement.img} alt="Book" className="select-box__img" />
        <p className="select-box__text">{currentElement.text}</p>
      </div>
      <span className="select-box__icon" />

      <div className="select-box__options">
        {props.selections.map((selection) => (
          <div key={v4()} className="select-box__option">
            <img src={selection.img} alt="Book" className="select-box__img" />
            <p className="select-box__text">{selection.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
