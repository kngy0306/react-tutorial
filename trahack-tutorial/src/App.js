import { useEffect, useState } from "react";

function App() {
  const [id, setId] = useState("kngy0306");
  const [name, setName] = useState("");
  const ids = ["kngy0306", "google", "facebook"];

  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)];
    setId(_id);
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.name);
        setName(data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <h3>
        {name}のGitHubIDは{id}です
      </h3>
      <button onClick={getRandomId}>ランダムにidを取得</button>
    </>
  );
}

export default App;
