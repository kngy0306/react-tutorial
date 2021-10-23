import Article from "./components/Article";
import { useState } from "react";

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
    </>
  );
}

export default App;
