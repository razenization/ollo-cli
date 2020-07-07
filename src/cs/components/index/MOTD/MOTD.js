import React from 'react';
import './MOTD.scss';

export const MOTD = () => {
  return (
    <div class="motd">
      <h4 class="motd__title">Матч дня</h4>
      <p class="motd__event">ESL Major League fdfdfd</p>
      <div class="motd__inner">
        <div class="motd__team">
          <div class="motd__team-logo winner">
            <img src="assets/img/teams/godsent/logo.svg" alt="" />
          </div>
          <p class="motd__team-tag">GODSENT</p>
          <div class="motd__team-score">
            <span class="score"></span>
            <span class="score"></span>
            <span></span>
          </div>
        </div>
        <div class="motd__delim">
          <div class="motd__delim-info">
            <p class="motd__best-of">BO3</p>
            <p class="motd__delim-info-timeleft">
              До матча: <span class="motd__timestamp">4ч 52мин</span>
            </p>
          </div>
          <a href="#" class="motd__delim-link">
            Открыть
          </a>
        </div>
        <div class="motd__team">
          <div class="motd__team-logo">
            <img src="assets/img/teams/wisla-krakow/logo.svg" alt="" />
          </div>
          <p class="motd__team-tag">Wisla Krakow</p>
          <div class="motd__team-score">
            <span class="score"></span>
            <span class="score"></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
