import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchPopularMovies,
  fetchMovieDetails,
  fetchGenresList,
} from "../api/movieApi";
import { Hero } from "../components/Hero/Hero";
import { MovieList } from "../components/MovieList/MovieList";
import { LoaderSpinner } from "../components/Loader/LoaderSpinner";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { genre = "popular", genre_id } = useParams();
  const [movieTitle, setMovieTitle] = useState("Oops! No Movies Found");
  const [posterPath, setPosterPath] = useState("");

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

  useEffect(() => {
    if (genre === "popular") {
      setFilteredMovies(movies);
      // I only want to send in the first object
      setMovieTitle(movies[0]?.title);
      setPosterPath(movies[0]?.poster_path);
    } else {
      const genreIdNumber = Number(genre_id);
      // Check if the genre_id matches id in movies list
      const updatedMovies = movies.filter((movie) =>
        movie.genre_ids.some((id) => id === genreIdNumber)
      );
      setFilteredMovies(updatedMovies);
      setMovieTitle(updatedMovies[0]?.title);
      setPosterPath(updatedMovies[0]?.poster_path);
    }
  }, [movies, genre, genre_id]);

  if (isLoading) {
    return <LoaderSpinner />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Hero title={movieTitle} posterPath={posterPath} details={details} />
      <MovieList movies={filteredMovies} genreTitle={genre} />
    </>
  );
};
