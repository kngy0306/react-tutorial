import { Article } from "./components/Article";

function App() {
  const firstTitle = "最初のタイトル！";
  const kona = "kona";

  return (
    <>
      <Article title={firstTitle} />
      <Article title={kona} />
    </>
  );
}

export default App;
