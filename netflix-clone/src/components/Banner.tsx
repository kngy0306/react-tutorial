import { useEffect, useState } from "react";
import axios from "axios";
import { requests } from "../request";
import "./Banner.scss";

type movieProps = {
  title?: string;
  name?: string;
  original_name?: string;
  backdrop_path?: string;
  overview?: string;
};

export const Banner = () => {
  const baseURL = "https://api.themoviedb.org/3";
  const [movie, setMovie] = useState<movieProps>({});

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        `${baseURL}${requests.fetchNetflixOriginals}`
      );

      const randomIndex = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomIndex]);
      return request;
    };
    fetchData();
  }, []);
  console.log(movie);

  const truncate = (strLength: number, description?: string) => {
    if (description) {
      return description.length > strLength
        ? description.substr(0, strLength - 1) + "..."
        : description;
    }
  };

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="Banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="Banner-buttons">
          <button className="Banner-button">Play</button>
          <button className="Banner-button">My List</button>
        </div>

        <h1 className="Banner-description">{truncate(150, movie?.overview)}</h1>
      </div>

      <div className="Banner-fadeBottom" />
    </header>
  );
};
