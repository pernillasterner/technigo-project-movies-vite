import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api/movieApi";
import { Hero } from "../components/Hero/Hero";
import { MovieDetail } from "../components/MovieDetail/MovieDetail";

export const MovieDetailPage = () => {
  const [movieDetails, setmMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setmMovieDetails(movie);
        if (movie) {
          setIsLoading(false); // Data is loaded
        }
      } catch (err) {
        setError(err.message);
      }
    };

    if (isLoading) {
      fetchData();
    }
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
      <Hero title={movieDetails.title} posterPath={movieDetails.poster_path} />
      <MovieDetail movie={movieDetails} />
    </>
  );
};
