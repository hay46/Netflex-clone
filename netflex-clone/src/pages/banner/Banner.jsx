import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchAction);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
function truncate(str,n){
  return str?.length > n ? str.substr(0, n-1)  + '...': str;
}
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: movie?.backdrop_path
          ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`
          : `url("https://image.tmdb.org/t/p/original${movie?.poster_path}")`,

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.originale_name}
        </h1>
        <div className="banner-button">
          <button className="banner-botton-player">play</button>
          <button className="banner-button-my-list">my List</button>
        </div>
        <h1 className="banner-discription">{truncate(movie?.overview,200)}</h1>
      </div>
      <div className="banner-fadeBottom"></div>
    </div>
  );
};

export default Banner;
