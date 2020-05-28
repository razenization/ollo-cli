import React from "react";
import "./Explain.scss";

const Explain = (props) => {
  return (
    <span
      className={`explain-wrapper${
        props.className ? ` ${props.className}` : ""
      }${props.blue ? " explain-blue" : ""}`}
      style={props.style}
    >
      ?<span className="explain-text">{props.explainText}</span>
    </span>
  );
};

export default Explain;
