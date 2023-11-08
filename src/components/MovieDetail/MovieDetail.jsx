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

  // console.log(movie.production_companies);

  return (
    <>
      <div className="movieDetailContainer">
        <Link to={movie.homepage} target="_blank">
          <img src={`${imageUrl}`} alt={movie.title} className="movieImg" />
        </Link>
        <div className="summary">
          <h2>{movie.title}</h2>
          <p className="voteAverage">⭐️ {movie.vote_average}</p>
          <p className="description">{movie.overview}</p>
          <div className="moreInfo">
            <h4>
              <img src="../../assets/down-arrow.svg" alt="Arrow Down" />
              More details
            </h4>
            <ul className="prodCompany">
              {movie.production_companies.map((prod) => {
                return <li>{prod.name}</li>;
              })}
            </ul>
            <ul className="lang">
              {movie.spoken_languages.map((lang) => {
                return <li>{lang.name}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
