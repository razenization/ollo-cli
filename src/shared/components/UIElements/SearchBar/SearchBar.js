import React from 'react';
import './SearchBar.scss';
import searchBtn from './img/search.svg';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Поиск по сайту"
        className="search-bar__input"
      />
      <img src={searchBtn} alt="" className="search-bar__btn" />
    </div>
  );
};

export default SearchBar;
