import React, { useState, useEffect } from "react";
import { fetchPopularMovies } from "../api/movieApi";
import { Hero } from "../components/Hero/Hero";
import { MovieList } from "../components/MovieList/MovieList";

export const Home = () => {
  const [selectedCat, setSelectedCat] = useState("popular");
  const [movies, setMovies] = useState([]); // Initialize with an empty array
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const popularMovies = await fetchPopularMovies();
        setMovies(popularMovies);
        setIsLoading(false); // Data is loaded
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

  const movieTitle = movies[0]?.title; // Use optional chaining to avoid errors
  const posterPath = movies[0]?.poster_path; // Use optional chaining to avoid errors

  return (
    <>
      <Hero title={movieTitle} posterPath={posterPath} />
      <MovieList movies={movies} selectedCat={selectedCat} />
    </>
  );
};
