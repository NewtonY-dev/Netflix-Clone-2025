import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    (async () => {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    })();
  }, [fetchUrl]);

  const baseUrl = `https://image.tmdb.org/t/p/original`;

  function handleClick(movie) {
    if (trailer) {
      setTrailer("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get("v"));
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  }
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => {
          return (
            <img
              key={index}
              onClick={() => handleClick(movie)}
              src={`${baseUrl}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie?.title || movie?.name}
              className={`row_poster ${isLarge && "row_posterLarge"}`}
            />
          );
        })}
      </div>
      <div>{trailer && <Youtube videoId={trailer} opts={opts} />}</div>
    </div>
  );
};

export default Row;
