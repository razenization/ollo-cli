import React from "react";
import { Link } from "react-router-dom";
import "./SidebarItem.scss";

export const SidebarItem = (props) => {
  if (props.href) {
    return (
      <div className={`sidenav__option${props.beta ? " beta" : ""}`}>
        <a href={props.href}>{props.children}</a>
      </div>
    );
  }
  if (props.to) {
    return (
      <div className={`sidenav__option${props.beta ? " beta" : ""}`}>
        <Link to={props.to} exact={props.exact}>
          {props.children}
        </Link>
      </div>
    );
  }
  return (
    <div className={`sidenav__option${props.beta ? " beta" : ""}`}>
      {props.children}
    </div>
  );
};
