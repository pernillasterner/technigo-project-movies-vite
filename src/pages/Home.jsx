import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchPopularMovies,
  fetchMovieDetails,
  fetchGenresList,
} from "../api/movieApi";
import { Hero } from "../components/Hero/Hero";
import { MovieList } from "../components/MovieList/MovieList";

export const Home = () => {
  const [param, setParam] = useState("popular");
  const [genresList, setGenresList] = useState([]);
  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { genre } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [popularMovies, movieGenresList] = await Promise.all([
          fetchPopularMovies(),
          fetchGenresList(),
        ]);
        setMovies(popularMovies);
        setGenresList(movieGenresList);

        // Check if popularMovies is not empty and has a movie
        if (popularMovies.length > 0) {
          const movieId = popularMovies[0].id;

          // Fetch movie details using the movie ID
          const movieDetails = await fetchMovieDetails(movieId);
          setDetails(movieDetails);
        }

        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    if (isLoading) {
      fetchData();
    }
  }, [isLoading]);

  // Need this because otherwise it will become an infinite loop
  useEffect(() => {
    // Update param when genre changes
    if (genre !== undefined) {
      setParam(genre);
    }
  }, [genre]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const movieTitle = movies[0]?.title;
  const posterPath = movies[0]?.poster_path;

  return (
    <>
      <Hero title={movieTitle} posterPath={posterPath} details={details} />
      <MovieList movies={movies} genreTitle={param} />
    </>
  );
};
