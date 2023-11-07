/**
 * 1. Only pass the first or the most popular or latest movie to hero.✅
 * 2. Set interval to the fetch data
 * 3. Add loading indicator to the fetch request ✅
 */

import { Hero } from "../components/Hero/Hero";
import { MovieList } from "../components/MovieList/MovieList";

export const Home = ({ popularMovies, secureBaseUrl, imageSizes }) => {
  return (
    <>
      <Hero
        popularMovies={popularMovies[0]}
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
