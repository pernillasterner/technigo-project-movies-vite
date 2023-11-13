/**
 * Fetch data for the selected movie and pass it to the Hero adn movie details
 */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCompanyDetails } from "../../api/movieApi";
import { LoaderSpinner } from "../Loader/LoaderSpinner";
import "./MovieDetail.scss";

export const MovieDetail = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w342";
  const imageUrl = `${baseUrl}${movie.poster_path}`;
  const [companyDetails, setCompanyDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Need to get the company id from the movie oject
        const prodIds = movie.production_companies.map((prod) => prod.id);

        // Need to fectch all the prodIds
        const prodDetailsPromises = prodIds.map((id) =>
          fetchCompanyDetails(id)
        );

        const prodDetails = await Promise.all(prodDetailsPromises);
        setCompanyDetails(prodDetails);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    if (isLoading) {
      fetchData();
    }
  }, [isLoading, movie.production_companies]);

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
      {isLoading ? (
        <LoaderSpinner />
      ) : (
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
                  {movie.production_companies.map((prod, index) => (
                    <li key={index}>
                      {" "}
                      <Link
                        to={companyDetails[index]?.homepage}
                        target="_blank"
                      >
                        {prod.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <h4 onClick={handleAccordian}>languages</h4>
                <ul className="lang">
                  {movie.spoken_languages.map((lang, index) => (
                    <li key={index}>{lang.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
