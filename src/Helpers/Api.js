import axios from "axios";

const mainUrl = `https://api.themoviedb.org/3/`;
const api = "29e884a4d6c7875743e082626c09e382";

const trendingUrl = () =>
  axios
    .get(`${mainUrl}trending/all/day?api_key=${api}`)
    .then((res) => res.data.results);

const movieFinderUrl = (query) =>
  axios.get(
    `${mainUrl}search/movie?api_key=${api}&language=en-US&page=1&include_adult=false&query=${query}`
  );

const movieDetails = (movieId) =>
  axios.get(`${mainUrl}movie/${movieId}?api_key=${api}&language=en-US`);

const movieActors = (movieId) =>
  axios.get(`${mainUrl}movie/${movieId}/credits?api_key=${api}`);

const movieReview = (movieId) =>
  axios.get(`${mainUrl}movie/${movieId}/reviews?api_key=${api}`);

export default {
  trendingUrl,
  movieFinderUrl,
  movieDetails,
  movieActors,
  movieReview,
};
