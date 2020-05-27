import React from "react";
import "./Input.scss";

const Input = (props) => {
  const changeHandler = () => {};

  return (
    <div className="input-default">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        // onBlur={touchHandler}
        // value={inputState.value}
      />
    </div>
  );
};

export default Input;
