import "./App.css";
import { requests } from "./request";
import { Row } from "./components/Row";
import { Banner } from "./components/Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;
