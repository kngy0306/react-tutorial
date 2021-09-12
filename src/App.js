import React from "react";
import { Form } from "./Form";
import { List } from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "list",
    };
  }

  render() {
    const { tab } = this.state;

    return (
      <div>
        <header>
          <ul onClick={() => this.setState({ tab: "list" })}>リスト</ul>
          <ul onClick={() => this.setState({ tab: "form" })}>フォーム</ul>
        </header>
        <hr />
        {tab === "list" ? <List /> : <Form />}
      </div>
    );
  }
}

export default App;
