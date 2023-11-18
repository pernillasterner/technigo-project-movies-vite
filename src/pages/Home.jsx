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
  // Movie Related states
  const [movies, setMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState("Oops! No Movies Found");
  const [details, setDetails] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [posterPath, setPosterPath] = useState("");

  // Genre Related states
  const [genre, setGenre] = useState("popular");
  const { genre_id } = useParams();
  const genreIdNumber = genre_id ? parseInt(genre_id, 10) : null;
  const [genresList, setGenresList] = useState([]);

  // Error and Loaders
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [popularMovies, movieGenresList] = await Promise.all([
          fetchPopularMovies(),
          fetchGenresList(),
        ]);
        setMovies(popularMovies);
        setGenresList(movieGenresList.genres);

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
    if (genre_id) {
      // Find the genre that matches the id number
      const matchedGenre = genresList.find(
        (genre) => genre.id === genreIdNumber
      );

      if (matchedGenre) {
        setGenre(matchedGenre.name);
      } else {
        console.log("Sorry, genre not found");
      }
    }
  }, [genre_id, genresList, genreIdNumber]);

  useEffect(() => {
    if (genre === "popular" || genre_id === undefined) {
      setFilteredMovies(movies);
      // I only want to send in the first object
      setMovieTitle(movies[0]?.title);
      setPosterPath(movies[0]?.poster_path);
    } else {
      // Check if the genre_id matches id in movies list
      const updatedMovies = movies.filter((movie) =>
        movie.genre_ids.some((id) => id === genreIdNumber)
      );

      setFilteredMovies(updatedMovies);
      setMovieTitle(updatedMovies[0]?.title);
      setPosterPath(updatedMovies[0]?.poster_path);
    }
  }, [movies, genre, genreIdNumber]);

  // Fetch details for the selected movie when its ID changes
  useEffect(() => {
    const fetchMovieDetailsById = async () => {
      if (filteredMovies.length > 0) {
        const movieId = filteredMovies[0].id;
        const movieDetails = await fetchMovieDetails(movieId);
        setDetails(movieDetails);
      }
    };

    fetchMovieDetailsById();
  }, [filteredMovies]);

  return (
    <>
      {isLoading ? (
        <LoaderSpinner />
      ) : (
        <>
          <Hero title={movieTitle} posterPath={posterPath} details={details} />
          <MovieList movies={filteredMovies} genreTitle={genre} />
        </>
      )}
    </>
  );
};
