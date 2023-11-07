/**
 * 1. Only pass the first or the most popular or latest movie to hero.
 * 2. Set interval to the fetch data
 * 3. Add loading indicator to the fetch request
 */
import { useState, useEffect } from "react";
import { Hero } from "../components/Hero/Hero";
import { MovieList } from "../components/MovieList/MovieList";
import { fetchPopularMovies, fetchImageSizes } from "../api/movieApi";

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [imageSizes, setImageSizes] = useState([]);
  const [secureBaseUrl, setSecureBaseUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [movies, images] = await Promise.all([
          fetchPopularMovies(),
          fetchImageSizes(),
        ]);
        setPopularMovies(movies);
        setImageSizes(images);
        setSecureBaseUrl(images.secure_base_url);
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };
    // Calling function
    fetchData();
  }, []);

  return (
    <>
      <Hero
        movie={popularMovies}
        secureBaseUrl={secureBaseUrl}
        imageSizes={imageSizes}
      />

      <MovieList
        popularMovies={popularMovies}
        secureBaseUrl={secureBaseUrl}
        imageSizes={imageSizes}
      />
    </>
  );
};
