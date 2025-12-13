import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../utils/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargerRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data?.results || []);
      } catch (error) {
        console.log("error fetching movies:", error);
      }
    };
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          if (!url) return;
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log("Trailer not found:", error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {movies?.map(
          (movie) =>
            (movie.poster_path || movie.backdrop_path) && (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row-poster ${isLargerRow ? "row-posterLarge" : ""}`}
                src={`${base_url}${
                  isLargerRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title || movie.name || movie.original_name}
              />
            )
        )}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
