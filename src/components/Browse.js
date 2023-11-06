import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroContainer from "./HeroContainer";
import MoviesList from "./MoviesList";

const Browse = () => {
  const nowPlayingMovies = useSelector(
    (state) => state?.movies?.nowPlayingMovies
  );

  useNowPlayingMovies();

  if (!nowPlayingMovies) return;

  const movie = nowPlayingMovies[0];

  return (
    <div className="">
      <Header />
      <div>
        <HeroContainer movie={movie} />
        <MoviesList title="Now playing" movies={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default Browse;
