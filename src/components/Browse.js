import React, { useEffect, useState } from "react";
import Header from "./Header";
import { constants } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../store/slices/movieSlice";

const Browse = () => {
  const nowPlayingMovies = useSelector(
    (state) => state?.movies?.nowPlayingMovies
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getNowPlayingMovies() {
      const response = await fetch(
        constants.TMDB_NOW_PLAYING_URI,
        constants.OPTIONS
      );
      const data = await response.json();
      dispatch(addNowPlayingMovies(data?.results));
    }
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
      <div className="">
        <ul>
          {(nowPlayingMovies || []).map((movie) => (
            <>
              <li key={movie?.id}>{movie?.original_title}</li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Browse;
