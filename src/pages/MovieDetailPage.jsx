import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMovieDetails } from "../api/movieApi";
import { Hero } from "../components/Hero/Hero";
import { MovieDetail } from "../components/MovieDetail/MovieDetail";
import { NotFoundPage } from "./NotFoundPage";

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
  }, [isLoading, movieId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (movieDetails.success === false) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Hero title={movieDetails.title} posterPath={movieDetails.poster_path} />
      <MovieDetail movie={movieDetails} />
    </>
  );
};
