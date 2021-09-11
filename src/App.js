import { useState } from "react";
import { Form } from "./Form";
import { List } from "./List";

function App() {
  const [tab, setTab] = useState("list");

  const body = tab === "list" ? <List /> : <Form />;

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
