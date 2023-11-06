import React from "react";

const MovieTitleContainer = ({ movie }) => {
  return (
    <div className="absolute top-1/2 px-14 text-white w-full">
      <h1 className="truncate w-1/2 text-5xl py-5">{movie?.original_title}</h1>
      <p className="truncate w-1/2 text-lg my-4">{movie?.overview}</p>

      <button
        type="button"
        className="bg-gray-50 opacity-70 text-black mx-1 my-4 px-4 py-2.5 rounded-md hover:opacity-100"
      >
        &#9658; Play
      </button>
      <button
        type="button"
        className="bg-gray-500 opacity-70 mx-1 px-4 py-2.5 rounded-md hover:opacity-100"
      >
        &#x1F6C8; More info
      </button>
    </div>
  );
};

export default MovieTitleContainer;
