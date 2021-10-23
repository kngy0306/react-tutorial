import A from "./components/Article";

function App() {
  const firstTitle = "最初のタイトル！";
  const kona = "kona";

  return (
    <>
      <A title={firstTitle} />
      <A title={kona} />
    </>
  );
}

export default App;
