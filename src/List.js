import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 12px 64px;
`;

const ListItem = styled.div`
  padding: 8px 16px;

  &:nth-child(n + 2) {
    border-top: 1px solid #d9dbde;
  }
`;

export const List = ({ langs }) => {
  useEffect(() => {
    console.log("List.jsのuseEffect");

    return () => {
      console.log("List.jsのUnmount");
    };
  });
  return (
    <Container>
      {langs.map((lang, index) => {
        return <ListItem key={index}>{lang}</ListItem>;
      })}
    </Container>
  );
};
