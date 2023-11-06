import React from "react";
import VideoBgContainer from "./VideoBgContainer";
import MovieTitleContainer from "./MovieTitleContainer";
import useMovieVideos from "../hooks/useMovieVideos";
import { useSelector } from "react-redux";

const HeroContainer = ({ movie }) => {
  const movieVideos = useSelector((state) => state?.movies?.movieVideos);

  useMovieVideos(movie?.id);

  const trailer = (movieVideos || [])?.find(
    (trailer) => trailer?.type === "Trailer"
  );

  if (!trailer) return;

  return (
    <div>
      <MovieTitleContainer movie={movie} />
      <VideoBgContainer videoId={trailer?.key} />
    </div>
  );
};

export default HeroContainer;
