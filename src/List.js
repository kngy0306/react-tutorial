import { useEffect } from "react";

export const List = ({ langs }) => {
  useEffect(() => {
    console.log("List.jsのuseEffect");

    return () => {
      console.log("List.jsのUnmount");
    };
  });
  return (
    <div>
      {langs.map((lang, index) => {
        return <div key={index}>{lang}</div>;
      })}
    </div>
  );
};
