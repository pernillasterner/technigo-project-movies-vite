/**
 * 1. URL using the secure_base_url + size + path from the API response.
 * 2. Use w342 for size
 */

import { Link } from "react-router-dom";
import "./MovieList.scss";

export const MovieList = ({ popularMovies, secureBaseUrl, imageSize }) => {
  console.log(popularMovies);
  return (
    <section className="movieListContainer">
      {/* should be able to change depending on category */}
      <h2 className="title">most popular</h2>

      {/* Add id to link */}
      {popularMovies.map((movie) => (
        <>
          <Link to={`/movie/${movie.id}`}>
            <img
              src={`${secureBaseUrl}${imageSize[3]}${movie.poster_path}`}
              alt={movie.title}
              className="movieImg"
              key={movie.id}
            />
            <div className="details">
              <h3 className="title">{movie.title}</h3>
              <p className="date">{movie.release_date}</p>
            </div>
          </Link>
        </>
      ))}
    </section>
  );
};
