import React from "react";
import "./CommentsContainer.scss";

import { ReactComponent as SortIcon } from "./img/sort-icon.svg";
import CommentLogin from "../CommentLogin/CommentLogin";
import CommentInput from "../CommentInput/CommentInput";
import CommentItems from "../CommentItems/CommentItems";

const CommentsContainer = () => {
  return (
    <div className="comments-section">
      <div className="comments-section__head white-pd-rounded">
        <p className="comments-head__count">112 комментариев</p>
        <div className="comments-head__sort">
          <SortIcon />
          <p className="comments-head__sort-text">Упорядочить</p>
        </div>
      </div>
      <CommentLogin />
      <CommentInput />
      <CommentItems />
    </div>
  );
};

export default CommentsContainer;
