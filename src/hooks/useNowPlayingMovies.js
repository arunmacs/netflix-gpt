import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { constants } from "../utils/constants";
import { addNowPlayingMovies } from "../store/slices/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const response = await fetch(
      constants.TMDB_NOW_PLAYING_URI,
      constants.OPTIONS
    );
    const jsonData = await response.json();
    dispatch(addNowPlayingMovies(jsonData?.results));
  };

  useEffect(() => {
    const controller = new AbortController();
    getNowPlayingMovies();

    return () => {
      controller?.abort();
    };
  }, []);
};

export default useNowPlayingMovies;
