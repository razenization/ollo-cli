import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

const Button = (props) => {
  if (props.href) {
    return (
      <a
        className={`button ${props.className ? props.className : ""} button--${
          props.size || "default"
        } ${props.green ? "button--green" : ""} ${
          props.inverse ? "button--inverse" : ""
        } ${props.danger ? "button--danger" : ""} ${
          props.opacity ? "button--opacity" : ""
        } ${props.opacityInv ? "button--opacity--inverse" : ""}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button ${props.className ? props.className : ""} button--${
          props.size || "default"
        } ${props.green ? "button--green" : ""} ${
          props.inverse ? "button--inverse" : ""
        } ${props.danger ? "button--danger" : ""} ${
          props.opacity ? "button--opacity" : ""
        } ${props.opacityInv ? "button--opacity--inverse" : ""}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button ${props.className ? props.className : ""} button--${
        props.size || "default"
      } ${props.green ? "button--green" : ""} ${
        props.inverse ? "button--inverse" : ""
      } ${props.danger ? "button--danger" : ""} ${
        props.opacity ? "button--opacity" : ""
      } ${props.opacityInv ? "button--opacity--inverse" : ""}`}
      style={props.style}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
