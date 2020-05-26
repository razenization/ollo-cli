import React from "react";
import { Link } from "react-router-dom";
import "./Icon.scss";

export const Icon = (props) => {
  const classList = ["basic-icon"];
  if (props.nofill) {
    classList.push("nofill");
  }
  if (props.darkened) {
    classList.push("icon-darkened");
  }
  if (props.bigger) {
    classList.push("icon-bigger");
  }
  if (props.hrefNewPage) {
    return (
      <div className={classList.join(" ")}>
        <a href={props.hrefNewPage} target="_blank" rel="noopener noreferrer">
          {props.icon}
        </a>
      </div>
    );
  }

  if (props.href) {
    return (
      <div className={classList.join(" ")}>
        <a href={props.href}>{props.icon}</a>
      </div>
    );
  }

  return (
    <div className={classList.join(" ")}>
      <Link to={props.to}>{props.icon}</Link>
    </div>
  );
};
