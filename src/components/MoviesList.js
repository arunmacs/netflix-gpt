import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="-mt-28 mb-16">
      <div className="bg-slate-900 p-6">
        <h1 className="font-medium text-xl text-white ">{title}</h1>
        <div className="flex overflow-x-auto scrollbar-hide">
          <div className="flex my-5">
            {movies?.map((movie) => (
              <MovieCard key={movie?.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
