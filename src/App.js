import { useEffect, useState } from "react";
import { getLanguages } from "./const/languages";
import { Form } from "./Form";
import { List } from "./List";

function App() {
  const [tab, setTab] = useState("list");
  const [langs, setLangs] = useState([]);

  useEffect(() => {
    console.log("App.jsのuseeffetct");
    fetchLanguages();
  }, []);

  const fetchLanguages = async () => {
    const languages = await getLanguages();
    setLangs(languages);
  };

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab("list");
  };

  const body =
    tab === "list" ? <List langs={langs} /> : <Form onAddLang={addLang} />;

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab("list")}>リスト</li>
          <li onClick={() => setTab("form")}>フォーム</li>
        </ul>
      </header>
      <hr />
      {body}
    </div>
  );
}

export default App;
