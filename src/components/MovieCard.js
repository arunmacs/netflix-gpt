import React from "react";
import { constants } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-48 mr-6">
      <img
        src={`${constants.TMDB_IMAGE_CDN("w780", movie?.poster_path)}`}
        alt="moviePoster"
        className="rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
