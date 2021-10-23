import Article from "./components/Article";
import { useState } from "react";
import { Input } from "./components/Input";
import { Counter } from "./components/Counter";
import { ToggleButton } from "./components/ToggleButton";

function App() {
  const firstTitle = "最初のタイトル！";
  const kona = "kona";

  const [state, setState] = useState(false);
  const changeState = () => {
    const forwardState = !state;
    setState(forwardState);
  };

  return (
    <>
      <Article title={firstTitle} clickFunc={changeState} state={state} />
      <Input />
      <Counter />
      <ToggleButton />
      <h3>{kona}</h3>
    </>
  );
}

export default App;
