import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const movieTitle = movies[0]?.title;
  const posterPath = movies[0]?.poster_path;
  const { genre } = useParams();

  if (genre !== undefined) {
    setParam(genre);
  }

  const location = useLocation();
  // console.log(location);

  const fetchGenreId = () => {
    const location = useLocation();
    const { id } = location.state;
    console.log(id);
  };
  // fetchGenreId();
  return (
    <>
      <Hero title={movieTitle} posterPath={posterPath} details={details} />
      <MovieList movies={movies} genreTitle={param} />
    </>
  );
};
