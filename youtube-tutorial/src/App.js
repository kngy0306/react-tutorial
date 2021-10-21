import { Form } from "./Form";
import { List } from "./List";
import { useContext, useState } from "react";
import { Header } from "./Header";
import styled from "styled-components";
import { ThemeContext } from "./context/ThemeContext";

const Container = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`;

function App({ data }) {
  const [tab, setTab] = useState("list");
  const [langs, setLangs] = useState(data);

  const [theme] = useContext(ThemeContext);

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab("list");
  };

  const body =
    tab === "list" ? <List langs={langs} /> : <Form onAddLang={addLang} />;

  return (
    <Container theme={theme}>
      <Header tab={tab} setTab={setTab} />
      {body}
    </Container>
  );
}

export default App;
