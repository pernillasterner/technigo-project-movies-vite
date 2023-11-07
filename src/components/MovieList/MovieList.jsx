/**
 * 1. URL using the secure_base_url + size + path from the API response.
 * 2. Use w342 for size
 */

import { Link } from "react-router-dom";
import "./MovieList.scss";

export const MovieList = ({ popularMovies, secureBaseUrl, imageSizes }) => {
  const imageSize = imageSizes.posterSize;

  return (
    <section className="movieListContainer">
      <div className="titleContainer">
        <h2 className="title">popular</h2>
        <p className="subtitle">The most popular movies at the moment</p>
      </div>
      {/* Add id to link */}
      {popularMovies.map((movie) => (
        <div key={movie.id} className="movieWrapper">
          <Link to={`/movie/${movie.id}`}>
            <img
              src={`${secureBaseUrl}${imageSize}${movie.poster_path}`}
              alt={movie.title}
              className="movieImg"
            />
            <div className="details">
              <h3 className="title">{movie.title}</h3>
              <p className="date">{movie.release_date}</p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};
