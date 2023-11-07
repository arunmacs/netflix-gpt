import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { constants } from "../utils/constants";
import { addTopRatedMovies } from "../store/slices/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = () => {
    axios
      .get(constants.TMDB_TOP_RATED_MOVIES, constants.OPTIONS)
      .then((data) => {
        dispatch(addTopRatedMovies(data?.data?.results));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
