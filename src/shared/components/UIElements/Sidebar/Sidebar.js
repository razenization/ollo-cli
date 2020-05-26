import React from "react";
import ReactDOM from "react-dom";
import "./Sidebar.scss";
import logo from "./img/sidebar-logo.svg";
import settingsIcon from "./img/settings-icon.svg";
import { Link } from "react-router-dom";
import { SidebarItem } from "../SidebarItem/SidebarItem";

import { ReactComponent as CSGOIcon } from "./img/csgo-icon.svg";
import { ReactComponent as DotaIcon } from "./img/dota-icon.svg";
import { ReactComponent as ValorantIcon } from "./img/valorant-icon.svg";
import { ReactComponent as LOLIcon } from "./img/lol-icon.svg";
import { ReactComponent as TournamentsIcon } from "./img/tournaments-icon.svg";
import { ReactComponent as SchoolIcon } from "./img/school-icon.svg";
import { ReactComponent as CalcIcon } from "./img/calc-icon.svg";
import warningIcon from "./img/warning-icon.svg";

const DUMMY_OPTIONS = [
  {
    id: 1,
    name: "CSGO",
    icon: CSGOIcon,
    link: "/cs",
    beta: false,
  },
  {
    id: 2,
    name: "Dota",
    icon: DotaIcon,
    link: "/dota",
    beta: false,
  },
  {
    id: 3,
    name: "Valorant",
    icon: ValorantIcon,
    // link: "/valorant",
    beta: true,
  },
  {
    id: 4,
    name: "League of Legends",
    icon: LOLIcon,
    // link: "/lol",
    beta: true,
  },
  {
    id: 5,
    name: "Tournaments",
    icon: TournamentsIcon,
    link: "/tournaments",
    beta: false,
  },
  {
    id: 6,
    name: "School",
    icon: SchoolIcon,
    link: "/school",
    beta: true,
  },
  {
    id: 7,
    name: "Calculator",
    icon: CalcIcon,
    link: "/calc",
    beta: true,
  },
];

const Sidebar = () => {
  const content = (
    <div className="sidenav">
      <Link to="/">
        <div className="sidebar-logo__wrapper">
          <img className="sidebar-logo" src={logo} alt="" />
        </div>
      </Link>
      <div className="user-actions">
        <Link className="user-actions__option" to="/profile">
          amaterasu
        </Link>
        <Link className="user-actions__option" to="/settings">
          <img src={settingsIcon} alt="Settings" />
        </Link>
      </div>
      <div className="sidenav__options">
        {DUMMY_OPTIONS.map((option, idx) => {
          if (idx % 4 === 0 && idx > 0) {
            return (
              <React.Fragment key={option.id}>
                <div className="sidebar-delim" key={option.name} />
                <SidebarItem
                  key={option.id}
                  name={option.name}
                  to={option.link}
                  beta={option.beta}
                >
                  {<option.icon />}
                </SidebarItem>
              </React.Fragment>
            );
          }
          if (!DUMMY_OPTIONS[idx + 1]) {
            return (
              <React.Fragment key={option.id}>
                <SidebarItem
                  key={option.id}
                  name={option.name}
                  to={option.link}
                  beta={option.beta}
                >
                  {<option.icon />}
                </SidebarItem>
                <div className="sidebar-delim" key={option.name} />
              </React.Fragment>
            );
          }
          return (
            <SidebarItem
              key={option.id}
              name={option.name}
              to={option.link}
              beta={option.beta}
            >
              {<option.icon />}
            </SidebarItem>
          );
        })}
      </div>
      <div className="sidenav__beta">
        <img src={warningIcon} alt="Warning" />
        <p className="sidenav__beta-bugtext">Нашли баг? </p>
        <a href="/" className="sidenav__beta-buglink">
          Сообщите нам!
        </a>
        <p className="sidenav__beta-text">
          Бета-версия: 1.0.0 <br />
          Последнее обновление: <br />
          22.05.20
        </p>
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("sidenav"));
};

export default Sidebar;
