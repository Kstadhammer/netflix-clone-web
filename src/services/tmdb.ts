import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '818feb3557285da91faa3ce27a0ea43a'; // Replace this with your TMDB API key

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchTrending = () => 
  tmdbApi.get('/trending/all/week');

export const fetchNetflixOriginals = () =>
  tmdbApi.get('/discover/tv', {
    params: {
      with_networks: 213, // Netflix
    },
  });

export const fetchTopRated = () => 
  tmdbApi.get('/movie/top_rated');

export const fetchActionMovies = () =>
  tmdbApi.get('/discover/movie', {
    params: {
      with_genres: 28,
    },
  });

export const fetchComedyMovies = () =>
  tmdbApi.get('/discover/movie', {
    params: {
      with_genres: 35,
    },
  });

export const fetchHorrorMovies = () =>
  tmdbApi.get('/discover/movie', {
    params: {
      with_genres: 27,
    },
  });

export const fetchRomanceMovies = () =>
  tmdbApi.get('/discover/movie', {
    params: {
      with_genres: 10749,
    },
  });

export const fetchDocumentaries = () =>
  tmdbApi.get('/discover/movie', {
    params: {
      with_genres: 99,
    },
  });

export const fetchMovieDetails = (id: number) =>
  tmdbApi.get(`/movie/${id}`, {
    params: {
      append_to_response: 'videos',
    },
  });
