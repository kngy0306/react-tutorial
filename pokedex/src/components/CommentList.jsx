import { useEffect, useState } from "react";

export const CommentList = (props) => {
  const data = [
    {
      author: "ヘンリー・キッシンジャー",
      text: "チャンスは__貯金__できない。",
    },
    {
      author: "kona",
      text: "乃木坂スキッツACT2 初コント集",
    },
  ];
  
  const pushData = (obj) => {
    data.push(obj);
  }

  const commentNodes = data.map((data, id) => {
    return (
      <div key={id}>
        <h2>{data.author}</h2>
        <p>{data.text}</p>
      </div>
    );
  });

  return <div>{commentNodes}</div>;
};
