import React from "react";
import "./CommentItems.scss";
import CommentItem from "../CommentItem/CommentItem";

const DUMMY_COMMENTS = [
  {
    id: 1,
    author: "Amaterasu",
    body:
      "djqwidjqwi dqwijodqwijo dqwijo dqwijo dqwijo dqwijodqwijodqwdioqwjdwioqj diowdjqwio dijqwodjqwi odjqw dqwijo dqwijodqwijo dijqwo dqw",
    timestamp: new Date(),
    ups: 23,
    downs: 1,
    replies: [
      {
        id: 5,
        author: "Amaterasu",
        body: "fjqioijoqfijqw qwijofqwijo fqwijo fqwijo fqwijofqwij fqwijofqw",
        timestamp: new Date(),
        ups: 0,
        downs: 0,
        replies: [],
      },
    ],
  },
  {
    id: 2,
    author: "Amaterasu",
    body:
      "djqwidjqwi dqwijodqwijo dqwijo dqwijo dqwijo dqwijodqwijodqwdioqwjdwioqj diowdjqwio dijqwodjqwi odjqw dqwijo dqwijodqwijo dijqwo dqw",
    timestamp: new Date(),
    ups: 23,
    downs: 1,
    replies: [
      {
        id: 5,
        author: "Amaterasu",
        body: "fjqioijoqfijqw qwijofqwijo fqwijo fqwijo fqwijofqwij fqwijofqw",
        timestamp: new Date(),
        ups: 0,
        downs: 0,
        replies: [],
      },
    ],
  },
  {
    id: 3,
    author: "Amaterasu",
    body:
      "djqwidjqwi dqwijodqwijo dqwijo dqwijo dqwijo dqwijodqwijodqwdioqwjdwioqj diowdjqwio dijqwodjqwi odjqw dqwijo dqwijodqwijo dijqwo dqw",
    timestamp: new Date(),
    ups: 23,
    downs: 1,
    replies: [
      {
        id: 5,
        author: "Amaterasu",
        body: "fjqioijoqfijqw qwijofqwijo fqwijo fqwijo fqwijofqwij fqwijofqw",
        timestamp: new Date(),
        ups: 0,
        downs: 0,
        replies: [],
      },
      {
        id: 6,
        author: "Amaterasu",
        body: "fjqioijoqfijqw qwijofqwijo fqwijo fqwijo fqwijofqwij fqwijofqw",
        timestamp: new Date(),
        ups: 0,
        downs: 0,
        replies: [],
      },
    ],
  },
];

const CommentItems = () => {
  return (
    <div className="comment-items">
      {DUMMY_COMMENTS.map((comment) => (
        <CommentItem
          color="yellow"
          author={comment.author}
          body={comment.body}
          ups={comment.ups}
          downs={comment.downs}
          replies={comment.replies}
        />
      ))}
    </div>
  );
};

export default CommentItems;
