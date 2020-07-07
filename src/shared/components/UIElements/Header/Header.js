import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logoSm from '../../../img/logo-sm.svg';
import SearchBar from '../SearchBar/SearchBar';
import { ReactComponent as LogoCSGO } from './img/csgo.svg';
import { ReactComponent as LogoDOTA } from './img/dota.svg';
import { ReactComponent as LogoVALORANT } from './img/valorant.svg';
import { ReactComponent as LogoLOL } from './img/lol.svg';
import { ReactComponent as StarIcon } from './img/star.svg';
import { ReactComponent as BellIcon } from './img/bell.svg';
import { ReactComponent as ExpandIcon } from './img/expand.svg';

const DUMMY_SELECTIONS = {
  csgo: {
    logo: LogoCSGO,
    link: '/cs/',
    selections: [
      { title: 'Новости', to: '/cs/' },
      { title: 'Матчи', to: '/cs/' },
      { title: 'Результаты', to: '/cs/' },
      { title: 'Турниры', to: '/cs/' },
    ],
  },
  dota: {
    logo: LogoDOTA,
    link: '/cs/',
    selections: [],
    new: true,
  },
  valorant: {
    logo: LogoVALORANT,
    link: '/cs/',
    selections: [],
    beta: true,
  },
  lol: {
    logo: LogoLOL,
    link: '/cs/',
    selections: [],
    beta: true,
  },
};

const DUMMY_USER = {
  nickname: 'amaterasu',
  pic: logoSm,
  favCount: 3,
  notifCount: 4,
};

const Header = ({ active, activeSelection }) => {
  return (
    <header className="header">
      <div className="header-content__wrapper">
        <div className="header-content">
          <img src={logoSm} alt="" className="header-logo" />
          <div className="header__discipline-selection">
            {Object.entries(DUMMY_SELECTIONS).map(
              ([discipline, dValues], idx) => {
                return (
                  <div
                    key={idx}
                    className={`discipline-item${
                      active === discipline ? ' active' : ''
                    }${dValues.new ? ' new' : ''}${
                      dValues.beta ? ' beta' : ''
                    }`}
                  >
                    <Link
                      to={dValues.link}
                      className="discipline-logo__wrapper"
                    >
                      <dValues.logo />
                    </Link>
                    {active === discipline && (
                      <div className="discipline-item__options">
                        {dValues.selections.map((sel, idx) => (
                          <Link
                            key={idx}
                            to={sel.to}
                            className={`discipline-item__option${
                              activeSelection === sel.title ? ' active' : ''
                            }`}
                          >
                            {sel.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              },
            )}
          </div>
        </div>
        <div className="header-utils">
          <SearchBar />
          <div className="header-user">
            <button className="header-fav">
              <StarIcon />
              <p className="header-count">{DUMMY_USER.favCount}</p>
            </button>
            <button className="header-notif">
              <BellIcon />
              <p className="header-count">{DUMMY_USER.notifCount}</p>
            </button>
            <div className="user-profile">
              <p className="user-name">{DUMMY_USER.nickname}</p>
              <img src={DUMMY_USER.pic} alt="" className="user-pic" />
              <ExpandIcon className="expand-icon" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
