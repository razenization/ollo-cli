import React from "react";
import ReactDOM from "react-dom";
import "./Footer.scss";

import { ReactComponent as TgIcon } from "./img/social/tg-icon.svg";
import { ReactComponent as VkIcon } from "./img/social/vk-icon.svg";
import { ReactComponent as YtIcon } from "./img/social/yt-icon.svg";
import { ReactComponent as TwitterIcon } from "./img/social/twitter-icon.svg";
import { ReactComponent as FbIcon } from "./img/social/fb-icon.svg";
import { ReactComponent as TwitchIcon } from "./img/social/twitch-icon.svg";
import { ReactComponent as IgIcon } from "./img/social/ig-icon.svg";
import { Icon } from "../../../../util/components/Icon/Icon";
import footerLogo from "./img/footer-logo.svg";

const DUMMY_SOCIAL = [
  {
    id: 1,
    name: "Telegram",
    href: "tg://resolve?domain=ollogg",
    newPage: true,
    bigger: true,
    icon: TgIcon,
  },
  {
    id: 2,
    name: "Vk",
    href: "https://vk.com/ollogg",
    newPage: true,
    bigger: true,
    icon: VkIcon,
  },
  {
    id: 3,
    name: "Facebook",
    // href: "https://vk.com/ollogg",
    newPage: true,
    bigger: true,
    icon: FbIcon,
  },
  {
    id: 4,
    name: "Twitter",
    // href: "https://vk.com/ollogg",
    newPage: true,
    bigger: true,
    icon: TwitterIcon,
  },
  {
    id: 5,
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCcZZ7eZsuJPRRww6DgGBB3g",
    newPage: true,
    bigger: true,
    icon: YtIcon,
    nofill: true,
  },
  {
    id: 6,
    name: "Twitch",
    // href: "https://vk.com/ollogg",
    newPage: true,
    bigger: true,
    icon: TwitchIcon,
  },
  {
    id: 7,
    name: "Instagram",
    // href: "https://vk.com/ollogg",
    newPage: true,
    bigger: true,
    icon: IgIcon,
  },
];

const Footer = () => {
  const content = (
    <div className="footer-content">
      <div className="footer-content__col">
        <div className="footer-social">
          {DUMMY_SOCIAL.map((social) => (
            <Icon
              bigger={social.bigger}
              newPage={social.newPage}
              nofill={social.nofill}
              href={social.href}
              to={social.to}
              icon={<social.icon />}
            />
          ))}
        </div>
        <div className="footer-nav">
          <p className="footer-nav__option">О проекте</p>
          <p className="footer-nav__option">Вакансии</p>
          <p className="footer-nav__option">Контакты</p>
          <p className="footer-nav__option">Правила</p>
          <p className="footer-nav__option">Пользовательское соглашение</p>
        </div>
      </div>
      <div className="footer-content__col footer-content__col-text">
        <div className="footer-content__text-section">
          <p className="footer-copyright">&copy; OLLO.GG</p>
          <p className="footer-careful">
            Играйте ответственно. При признаках зависимости обратитесь к
            специалисту
          </p>
        </div>
        <div className="footer-content__text-section">
          <p className="footer-infotext">
            Мы не являемся букмекерской конторой и не организуем игры на деньги
            Наша миссия в том, чтобы создать идеальные условия для анализа
            киберспортивных событий
          </p>
        </div>
      </div>
      <img src={footerLogo} alt="" className="footer-logo" />
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("footer"));
};

export default Footer;
