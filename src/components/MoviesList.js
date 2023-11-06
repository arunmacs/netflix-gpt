import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="z-10 -my-44 bg-slate-800">
      <h1 className="font-semibold text-2xl text-white my-5">{title}</h1>
      <div className="">
        {movies?.map((movie) => (
          <>
            <MovieCard key={movie?.id} movie={movie} />
          </>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
