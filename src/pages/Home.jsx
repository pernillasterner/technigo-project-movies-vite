import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPopularMovies, fetchMovieDetails } from "../api/movieApi";
import { Hero } from "../components/Hero/Hero";
import { MovieList } from "../components/MovieList/MovieList";

export const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState("popular");
  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { genre } = useParams();
  console.log(genre);
  console.log(movies);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [popularMovies] = await Promise.all([fetchPopularMovies()]);
        setMovies(popularMovies);

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
      <MovieList movies={movies} />
    </>
  );
};
