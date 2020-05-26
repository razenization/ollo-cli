import React from "react";
import logo from "./img/logo-head.svg";
import "./Dev.scss";
import { Icon } from "../../components/Icon/Icon";
import { ReactComponent as TgIcon } from "./img/social/tg-icon.svg";
import { ReactComponent as VkIcon } from "./img/social/vk-icon.svg";
import { ReactComponent as YtIcon } from "./img/social/yt-icon.svg";

const Dev = () => {
  return (
    <div className="dev">
      <div className="dev__body">
        <img src={logo} alt="Header" className="dev__sup-title__img" />
        <h1 className="dev__title">
          <span className="dev__title-blue">OLLO.GG</span> в разработке
        </h1>
        <h4 className="dev__sub-title">Что мы создаем?</h4>
        <p className="dev__sub-title__text">
          Миссия проекта «OLLO.GG» в том, чтобы ты побеждал!
          <br />
          Мы создаем идеальные условия для аналитики киберспортивных событий по
          дисциплинам CS:GO, Dota 2 и Valorant, LoL.
          <br />
          <br />
          Подписывайся на нас в соц. сетях, участвуй в закрытом
          бета-тестировании, и, возможно, именно ты станешь членом нашей
          команды!
        </p>
        <div className="dev__social">
          <Icon bigger newPage to="/tg" icon={<TgIcon />} />
          <Icon bigger hrefNewPage="https://vk.com/ollogg" icon={<VkIcon />} />
          <Icon
            bigger
            hrefNewPage="https://www.youtube.com/channel/UCcZZ7eZsuJPRRww6DgGBB3g"
            icon={<YtIcon />}
            nofill
          />
        </div>
        <p className="dev__sub-title__text">«Все для твоей победы!»</p>
      </div>
    </div>
  );
};

export default Dev;
