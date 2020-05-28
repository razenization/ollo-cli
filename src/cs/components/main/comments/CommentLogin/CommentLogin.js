import React from "react";
import "./CommentLogin.scss";

const CommentLogin = () => {
  return (
    <div className="comment-login white-pd-rounded">
      <p className="comment-login__text">
        Чтобы оставлять комментарии, войдите или зарегистрируйтесь:
      </p>
      <button className="comment-login__btn">Войти</button>
      <button className="comment-login__btn">Зарегистрироваться</button>
    </div>
  );
};

export default CommentLogin;
