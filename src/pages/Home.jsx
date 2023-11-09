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
  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { genre, genre_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [popularMovies] = await Promise.all([
          fetchPopularMovies(),
          fetchGenresList(),
        ]);
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

  console.log(genre);
  useEffect(() => {
    if (genre === undefined) {
      setFilteredMovies(movies);
    } else {
      const genreIdNumber = Number(genre_id);
      // Check if the genre_id matches id in movies list
      const updatedMovies = movies.filter((movie) =>
        movie.genre_ids.some((id) => id === genreIdNumber)
      );
      setFilteredMovies(updatedMovies);
    }
  }, [movies, genre]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // I only want to send in the first object
  const movieTitle = movies[0]?.title;
  const posterPath = movies[0]?.poster_path;

  return (
    <>
      <Hero title={movieTitle} posterPath={posterPath} details={details} />
      <MovieList
        movies={filteredMovies}
        genreTitle={genre}
        genreId={genre_id}
      />
    </>
  );
};
