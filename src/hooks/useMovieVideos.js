import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { constants } from "../utils/constants";
import { addMovieVideos } from "../store/slices/movieSlice";

const useMovieVideos = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const response = await fetch(
      constants.TMDB_MOVIE_VIDEOS_URI(movieId),
      constants.OPTIONS
    );
    const jsonData = await response.json();
    dispatch(addMovieVideos(jsonData?.results));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieVideos;
