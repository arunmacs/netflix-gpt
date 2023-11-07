import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { constants } from "../utils/constants";
import { addPopularMovies } from "../store/slices/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = () => {
    axios
      .get(constants.TMDB_POPULAR_MOVIES, constants.OPTIONS)
      .then((data) => {
        console.log(data);
        dispatch(addPopularMovies(data?.data?.results));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
