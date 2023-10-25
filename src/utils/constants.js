export const apiConstants = {
  API_KEY: "4adb4a2a56e0394f403da780df8e17c9",
  API_ACCESS_TOKEN:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWRiNGEyYTU2ZTAzOTRmNDAzZGE3ODBkZjhlMTdjOSIsInN1YiI6IjY1MzhmMGQzYWUzNjY4MDBlYTljZDk1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qDh_Mz4PhVig5Qopl0XT9BB0h0a6h985KmvBOfS3vmw",
};

export const constants = {
  TMDB_NOW_PLAYING_URI: "https://api.themoviedb.org/3/movie/now_playing?page=1",
  OPTIONS: {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiConstants.API_ACCESS_TOKEN}`,
    },
  },
};
