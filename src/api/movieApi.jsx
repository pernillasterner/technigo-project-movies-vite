// Time to fetch data from the server
const API_KEY = "f0cd5b88d931f2b23bac64656e5fda18";
const BASE__URL = "https://api.themoviedb.org/3/movie/popular?api_key=";
const API_LANG = "&language=en-US&page=1";
const IMAGE__URL = "https://api.themoviedb.org/3/configuration?api_key=";
const GENRES__URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=";

// const apiKey = process.env.REACT_APP_API_KEY;
// console.log(apiKey);

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

// GENRES -> Movie List
export const fetchMovieGenres = async () => {
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
