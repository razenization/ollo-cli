import React from "react";
import "./SocialNets.scss";
import { ReactComponent as Twitter } from "./img/twitter.svg";
import { ReactComponent as Steam } from "./img/steam.svg";
import { ReactComponent as Ig } from "./img/ig.svg";
import { ReactComponent as Faceit } from "./img/faceit.svg";
import vitality from "../../../../../shared/img/teams/vitality.svg";
import spirit from "../../../../../shared/img/teams/spirit.svg";
import social from "./img/social.svg";
import { v4 } from "uuid";

const DUMMY_SOCIAL = [
  {
    team: "Vitality",
    logo: vitality,
    players: [
      {
        id: 1,
        nick: "shox",
        social: {
          steam: {
            link: "http://steamcommunity.com/",
            icon: Steam,
          },
          faceit: {
            link: "http://faceit.com",
            icon: Faceit,
          },
          twitter: {
            link: "http://twitter.com/",
            icon: Twitter,
          },
          ig: {
            link: "http://instagram.com",
            icon: Ig,
          },
        },
      },
      {
        id: 2,
        nick: "shox",
        social: {
          steam: {
            link: "http://steamcommunity.com/",
            icon: Steam,
          },
          faceit: {
            link: "http://faceit.com",
            icon: Faceit,
          },
          twitter: {
            link: "http://twitter.com/",
            icon: Twitter,
          },
          ig: {
            link: "http://instagram.com",
            icon: Ig,
          },
        },
      },
      {
        id: 3,
        nick: "shox",
        social: {
          steam: {
            link: "http://steamcommunity.com/",
            icon: Steam,
          },
          faceit: {
            link: "http://faceit.com",
            icon: Faceit,
          },
          twitter: {
            link: "http://twitter.com/",
            icon: Twitter,
          },
          ig: {
            link: "http://instagram.com",
            icon: Ig,
          },
        },
      },
      {
        id: 4,
        nick: "shox",
        social: {
          steam: {
            link: "http://steamcommunity.com/",
            icon: Steam,
          },
          faceit: {
            link: "http://faceit.com",
            icon: Faceit,
          },
          twitter: {
            link: "http://twitter.com/",
            icon: Twitter,
          },
          ig: {
            link: "http://instagram.com",
            icon: Ig,
          },
        },
      },
      {
        id: 5,
        nick: "shox",
        social: {
          steam: {
            link: "http://steamcommunity.com/",
            icon: Steam,
          },
          faceit: {
            link: "http://faceit.com",
            icon: Faceit,
          },
          twitter: {
            link: "http://twitter.com/",
            icon: Twitter,
          },
          ig: {
            link: "http://instagram.com",
            icon: Ig,
          },
        },
      },
    ],
  },
  {
    team: "Spirit",
    logo: spirit,
    players: [
      {
        id: 1,
        nick: "shox",
        social: {
          steam: {
            link: "http://steamcommunity.com/",
            icon: Steam,
          },
          faceit: {
            link: "http://faceit.com",
            icon: Faceit,
          },
          twitter: {
            link: "http://twitter.com/",
            icon: Twitter,
          },
          ig: {
            link: "http://instagram.com",
            icon: Ig,
          },
        },
      },
      {
        id: 2,
        nick: "shox",
        social: {
          steam: {
            link: "http://steamcommunity.com/",
            icon: Steam,
          },
          faceit: {
            link: "http://faceit.com",
            icon: Faceit,
          },
          twitter: {
            link: "http://twitter.com/",
            icon: Twitter,
          },
          ig: {
            link: "http://instagram.com",
            icon: Ig,
          },
        },
      },
      {
        id: 3,
        nick: "shox",
        social: {
          steam: {
            link: "http://steamcommunity.com/",
            icon: Steam,
          },
          faceit: {
            link: "http://faceit.com",
            icon: Faceit,
          },
          twitter: {
            link: "http://twitter.com/",
            icon: Twitter,
          },
          ig: {
            link: "http://instagram.com",
            icon: Ig,
          },
        },
      },
      {
        id: 4,
        nick: "shox",
        social: {
          steam: {
            link: "http://steamcommunity.com/",
            icon: Steam,
          },
          faceit: {
            link: "http://faceit.com",
            icon: Faceit,
          },
          twitter: {
            link: "http://twitter.com/",
            icon: Twitter,
          },
          ig: {
            link: "http://instagram.com",
            icon: Ig,
          },
        },
      },
      {
        id: 5,
        nick: "shox",
        social: {
          steam: {
            link: "http://steamcommunity.com/",
            icon: Steam,
          },
          faceit: {
            link: "http://faceit.com",
            icon: Faceit,
          },
          twitter: {
            link: "http://twitter.com/",
            icon: Twitter,
          },
          ig: {
            link: "http://instagram.com",
            icon: Ig,
          },
        },
      },
    ],
  },
];

const SocialNets = () => {
  return (
    <div className="social-nets white-pd-rounded">
      {DUMMY_SOCIAL.map((team, idx) => (
        <div key={idx.toString()} className="social-nets__team">
          <div className="social-team__head">
            <img src={team.logo} alt="" className="social-team__img" />
            <p className="social-team__name">{team.team}</p>
            <img src={social} alt="" className="social-team__headimg" />
          </div>
          {team.players.map((player, idx) => (
            <div key={v4()} className="social-nets__player">
              <p className="social-player__nick">{player.nick}</p>
              <div className="social-player__links">
                {Object.values(player.social).map((socialLink) => (
                  <a
                    key={v4()}
                    href={socialLink.link}
                    className="social-player__link"
                  >
                    <socialLink.icon />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SocialNets;
