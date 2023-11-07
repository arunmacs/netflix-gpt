import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieVideos: null,
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action?.payload;
    },
    addMovieVideos: (state, action) => {
      state.movieVideos = action?.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action?.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action?.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieVideos,
  addPopularMovies,
  addTopRatedMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
