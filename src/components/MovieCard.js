import React from "react";
import { constants } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="">
      <img
        src={`${constants.TMDB_IMAGE_CDN("w780", movie?.poster_path)}`}
        alt="moviePoster"
      />
      {/* <h1 className="text-white truncate">{movie?.original_title}</h1> */}
    </div>
  );
};

export default MovieCard;
