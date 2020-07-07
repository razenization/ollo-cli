import React from 'react';
import './Banner.scss';

export const Banner = () => {
  return (
    <div class="banner">
      <div class="banner__container">
        <div class="banner-slider">
          <div>
            <div class="banner__slide-main-slide">
              <div class="main-slide__content">
                <h2 class="banner__slide-header">
                  СОВЕРШЕННО НОВЫЙ <span>OLLO</span>
                </h2>
                <p class="banner__slide-header-optional">
                  Чем OLLO может быть тебе полезен
                </p>
                <a href="#" class="banner__slide-link">
                  Прочитать статью
                </a>
                <img
                  src="assets/img/util/phone-logo.svg"
                  alt=""
                  class="banner__slide-img"
                />
              </div>
            </div>
          </div>
          <div>
            <div class="banner__slide-main-slide">
              <div class="main-slide__content">
                <h2 class="banner__slide-header">
                  СОВЕРШЕННО НОВЫЙ <span>OLLO</span>
                </h2>
                <p class="banner__slide-header-optional">
                  Чем OLLO может быть тебе полезен
                </p>
                <a href="#" class="banner__slide-link">
                  Прочитать статью
                </a>
                <img
                  src="assets/img/util/phone-logo.svg"
                  alt=""
                  class="banner__slide-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
