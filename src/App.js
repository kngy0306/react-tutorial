import styled from "styled-components";
import { getLanguages } from "./const/languages";
import { Form } from "./Form";
import { withLoading } from "./hoc/withLoading";
import { List } from "./List";
import { useState } from "react";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const HeaderUl = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${(props) => (props.focused ? "2px solid #f44336" : "none")};
`;

function App({ data }) {
  const [tab, setTab] = useState("list");
  const [langs, setLangs] = useState(data);

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab("list");
  };

  const body =
    tab === "list" ? <List langs={langs} /> : <Form onAddLang={addLang} />;

  return (
    <div>
      <Header>
        <HeaderUl>
          <HeaderLi focused={tab === "list"} onClick={() => setTab("list")}>
            リスト
          </HeaderLi>
          <HeaderLi focused={tab === "form"} onClick={() => setTab("form")}>
            フォーム
          </HeaderLi>
        </HeaderUl>
      </Header>
      {body}
    </div>
  );
}

export default withLoading(App, getLanguages);