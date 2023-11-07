import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroContainer from "./HeroContainer";
import MoviesList from "./MoviesList";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  const nowPlayingMovies = useSelector(
    (state) => state?.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((state) => state?.movies?.popularMovies);
  const topRatedMovies = useSelector((state) => state?.movies?.topRatedMovies);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  if (!nowPlayingMovies) return;

  const movie = nowPlayingMovies[0];

  return (
    <div>
      <Header />
      <div>
        <HeroContainer movie={movie} />
        <MoviesList title="Now playing" movies={nowPlayingMovies} />
        <MoviesList title="Toprated movies" movies={topRatedMovies} />
        <MoviesList title="Popular movies" movies={popularMovies} />
      </div>
    </div>
  );
};

export default Browse;
