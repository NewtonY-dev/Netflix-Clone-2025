import React, { useEffect, useState } from "react";
import "./banner.css";
import requests from "../../utils/requests";
import axios from "../../utils/axios";
const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
      } catch (err) {
        console.log("error", err);
      }
    })();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  // console.log(movie);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
};

export default Banner;
