/**
 * 1. Only pass the first or the most popular or latest movie to hero.
 */
import { useState, useEffect } from "react";
import { Hero } from "../components/Hero/Hero";
import { MovieList } from "../components/MovieList/MovieList";

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [secureBaseUrl, setSecureBaseUrl] = useState("");
  const [imageSize, setImageSize] = useState([]);

  // Time to fetch data from the server
  const movieAPIKey = "f0cd5b88d931f2b23bac64656e5fda18";
  const movieAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${movieAPIKey}&language=en-US&page=1`;
  const movieImgAPI = `https://api.themoviedb.org/3/configuration?api_key=${movieAPIKey}`;

  useEffect(() => {
    const fetchAllPopularMovies = async () => {
      try {
        // Get all movies
        const resPopularMovies = await fetch(movieAPI);
        const popluarMoviesData = await resPopularMovies.json();
        setPopularMovies(popluarMoviesData.results);
        // Get all images
        const resMovieImages = await fetch(movieImgAPI);
        const movieImagesData = await resMovieImages.json();
        setSecureBaseUrl(movieImagesData.images.secure_base_url);
        setImageSize(movieImagesData.images);
        // return data;
      } catch (err) {
        console.error("Failed to fetch Popular Movies", err);
      }
    };
    fetchAllPopularMovies();
  }, []);

  return (
    <>
      {imageSize && imageSize.backdrop_sizes && (
        <Hero
          popularMovies={popularMovies}
          secureBaseUrl={secureBaseUrl}
          imageSize={imageSize}
        />
      )}
      {imageSize && imageSize.poster_sizes && (
        <MovieList
          popularMovies={popularMovies}
          secureBaseUrl={secureBaseUrl}
          imageSize={imageSize}
        />
      )}
    </>
  );
};
