/**
 * Fetch data for the selected movie and pass it to the Hero adn movie details
 */
import { useState } from "react";
import { Link } from "react-router-dom";
import "./MovieDetail.scss";

export const MovieDetail = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w342";
  const imageUrl = `${baseUrl}${movie.poster_path}`;
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordian = (e) => {
    const h4 = e.target;
    const ul = e.target.nextSibling;

    if (!isOpen) {
      h4.classList.add("is-open");
      ul.style.display = "block";
      setIsOpen(true);
    } else {
      h4.classList.remove("is-open");
      ul.style.display = "none";
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="movieDetailContainer">
        <Link to={movie.homepage} target="_blank">
          <img src={`${imageUrl}`} alt={movie.title} className="movieImg" />
        </Link>
        <div className="summary">
          <h2>{movie.title}</h2>
          <p className="voteAverage">
            ⭐️ {parseFloat(movie.vote_average).toFixed(1)}
          </p>
          <p className="description">{movie.overview}</p>
          <div className="moreInfo">
            <h4 onClick={handleAccordian}>production companies</h4>
            <ul className="prodCompany">
              {movie.production_companies.map((prod) => (
                <li>{prod.name}</li>
              ))}
            </ul>
            <h4 onClick={handleAccordian}>languages</h4>
            <ul className="lang">
              {movie.spoken_languages.map((lang) => (
                <li>{lang.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
