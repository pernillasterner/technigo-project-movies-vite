// Time to fetch data from the server
const TMDB_KEY = import.meta.env.VITE_TMDB_KEY;
const API_KEY = `?api_key=${TMDB_KEY}`;
const BASE__URL = "https://api.themoviedb.org/3/movie/popular";
const API_LANG = "&language=en-US&page=1";
const IMAGE__URL = "https://api.themoviedb.org/3/configuration";
const DETAILS__URL = "https://api.themoviedb.org/3/movie/";
const GENRES__URL = "https://api.themoviedb.org/3/genre/movie/list";
const COMPANY__URL = "https://api.themoviedb.org/3/company/";

export const fetchPopularMovies = async () => {
  const url = `${BASE__URL}${API_KEY}${API_LANG}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error("Error fetching popular movies", err);
    throw err;
  }
};

export const fetchImageSizes = async () => {
  const url = `${IMAGE__URL}${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.images;
  } catch (err) {
    console.error("Error fetching images sizes", err);
    throw err;
  }
};

// DETAILS -> Details of popular movies
export const fetchMovieDetails = async (movie_id) => {
  const url = `${DETAILS__URL}${movie_id}${API_KEY}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching movie detail", err);
    throw err;
  }
};

// GENRES -> Details of popular movies
export const fetchGenresList = async () => {
  const url = `${GENRES__URL}${API_KEY}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching genres", err);
    throw err;
  }
};

// COMPANY -> Production details
export const fetchCompanyDetails = async (companyId) => {
  const url = `${COMPANY__URL}${companyId}${API_KEY}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching genres", err);
    throw err;
  }
};
