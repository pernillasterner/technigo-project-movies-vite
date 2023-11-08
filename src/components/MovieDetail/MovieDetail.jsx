/**
 * Fetch data for the selected movie and pass it to the Hero adn movie details
 */
import { useState } from "react";
import { Link } from "react-router-dom";
import "./MovieDetail.scss";

export const MovieDetail = ({ movie }) => {
  // Search for a matching movie
  // const movieMatch = popularMovies.find(
  //   (movie) => movie.id === Number(movieId)
  // );

  const baseUrl = "https://image.tmdb.org/t/p/w342";
  const imageUrl = `${baseUrl}${movie.poster_path}`;

  return (
    <>
      <div className="movieDetailContainer">
        <Link to={movie.homepage} target="_blank">
          <img src={`${imageUrl}`} alt={movie.title} className="movieImg" />
        </Link>
        <div className="movieInfo">
          <h2>{movie.title}</h2>
          <p className="vote_average">⭐️ {movie.vote_average}</p>
          <p className="description">{movie.overview}</p>
        </div>
      </div>
    </>
  );
};
