import React, { useEffect, useState } from "react";
import logo from "./img/logo-head.svg";
import "./Telegram.scss";
import Button from "../../../shared/components/UIElements/Button/Button";
import { Icon } from "../../components/Icon/Icon";
import { ReactComponent as AndroidIcon } from "./img/android-icon.svg";
import { ReactComponent as IOSIcon } from "./img/ios-icon.svg";
import phonePic from "./img/phone-pic.svg";

const Telegram = () => {
  const [secondsLeftText, setSecondsLeftText] = useState(
    "Переадресация через 3"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const secondsLeft = parseInt(secondsLeftText.match(/\d/g));

      if (secondsLeft) {
        if (secondsLeft > 1) {
          setSecondsLeftText(`Переадресация через ${secondsLeft - 1}`);
        } else {
          window.location.href = "tg://resolve?domain=ollogg";
          setSecondsLeftText("Перейти");
          clearInterval(interval);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [secondsLeftText]);

  return (
    <div className="tg">
      <div className="tg__body">
        <div className="row">
          <div className="col-lg-6">
            <div className="user-content__wrapper">
              <img src={logo} alt="Header" className="tg__sup-title__img" />
              <h1>Переход в Telegram OLLO.GG</h1>
              <h3>Ссылка откроется внутри приложения</h3>
              <Button opacity href="tg://resolve?domain=ollogg">
                {secondsLeftText}
              </Button>
              <p className="tg__container-helper">
                Ещё нет Telegram? Установи сейчас!
              </p>
              <div className="tg__container-helper-links">
                <Icon
                  darkened
                  href="https://play.google.com/store/apps/details?id=org.telegram.messenger"
                  icon={<AndroidIcon />}
                />
                <Icon
                  darkened
                  href="https://apps.apple.com/app/telegram-messenger/id686449807"
                  icon={<IOSIcon />}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={phonePic} alt="Phone" className="tg__phone-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telegram;
