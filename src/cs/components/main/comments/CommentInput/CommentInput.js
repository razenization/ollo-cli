import React from "react";
import "./CommentInput.scss";

import userImg from "./img/user-img.svg";
import { ReactComponent as SendIcon } from "./img/send-icon.svg";
import { ReactComponent as SmileyIcon } from "./img/smiley-icon.svg";

const CommentInput = () => {
  return (
    <form className="comment-input white-pd-rounded">
      <img src={userImg} alt="" className="comment-input__userimg" />
      <input
        type="text"
        className="comment-input__input"
        placeholder="Выскажи своё мнение здесь..."
      />
      <SmileyIcon className="comment-input__smileys" />
      <button type="submit" className="comment-input__submit">
        <SendIcon />
      </button>
    </form>
  );
};

export default CommentInput;
