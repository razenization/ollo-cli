import React, { useState } from "react";
import "./CommentItem.scss";
import avatar from "./img/avatar.svg";
import { ReactComponent as UpVote } from "./img/upvote.svg";
import { ReactComponent as DownVote } from "./img/downvote.svg";
import { ReactComponent as RepliesIcon } from "./img/reply-count.svg";
import { ReactComponent as ReportIcon } from "./img/report-icon.svg";
import { ReactComponent as ReplyIcon } from "./img/reply-icon.svg";
import CommentInput from "../CommentInput/CommentInput";

const CommentItem = (props) => {
  const [showInput, setShowInput] = useState(false);
  return (
    <div
      className={`comment-item${
        props.color ? ` comment-item_${props.color}` : ""
      }`}
    >
      <div className="comment-item__main white-pd-rounded">
        <img src={avatar} alt="" className="comment-item__avatar" />
        <div className="comment-item__body">
          <p className="comment-item__body-author">{props.author}</p>
          <p className="comment-item__body-text">{props.body}</p>
          <div className="comment-item__body-info">
            <div className="comment-info__ups">
              <button className="comment-info__ups-vote">
                <UpVote />
              </button>
              <p className="comment-info__ups-count">{props.ups}</p>
            </div>
            <div className="comment-info__downs">
              <button className="comment-info__downs-vote">
                <DownVote />
              </button>
              <p className="comment-info__downs-count">{props.downs}</p>
            </div>
            <div className="comment-info__replies">
              <button className="comment-info__replies-vote">
                <RepliesIcon />
              </button>
              <p className="comment-info__replies-count">
                {props.replies.length}
              </p>
            </div>
          </div>
        </div>
        <div className="comment-item__actions">
          <button className="comment-action__report">
            <ReportIcon />
          </button>
          <button
            className="comment-action__reply"
            onClick={() => setShowInput(!showInput)}
          >
            <ReplyIcon />
          </button>
        </div>
      </div>
      {showInput && <CommentInput />}

      {props.replies && !!props.replies.length && (
        <div className="comment-replies">
          {props.replies.map((reply) => (
            <CommentItem
              author={reply.author}
              body={reply.body}
              ups={reply.ups}
              downs={reply.downs}
              replies={reply.replies}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
