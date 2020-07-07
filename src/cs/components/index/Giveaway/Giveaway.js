import React from 'react';
import './Giveaway.scss';

export const Giveaway = () => {
  return (
    <div class="skin__ad">
      <img src="assets/img/rightbar/ak47.svg" alt="" class="skin-main" />
      <img
        src="assets/img/rightbar/ak47-bg-left.svg"
        alt=""
        class="skin-bg-left"
      />
      <img
        src="assets/img/rightbar/ak47-bg-right.svg"
        alt=""
        class="skin-bg-right"
      />
      <a href="#" class="skin__btn">
        Забрать скин!
      </a>
    </div>
  );
};
