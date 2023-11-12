/**
 * 1. Show menu when clicking on hamburger 🍿
 * 2. The active site should be marked 🍿
 * 3. If you click on M the menu should open 🍿
 * 4. Make the menu transform from 0% to 100% 🍿
 */
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchGenresList } from "../../api/movieApi";
import "./Header.scss";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [genresList, setGenresList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const selectedGenres = [
    "action",
    "horror",
    "drama",
    "comedy",
    "adventure",
    "thriller",
    "fantasy",
    "animation",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieGenresList = await fetchGenresList();
        setGenresList(movieGenresList.genres);
        setIsLoading(false);
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

  const handleDropdown = () => {
    setIsActive(!isActive);
  };

  const filteredGenres = genresList.filter((genre) => {
    // Convert both to lowercase
    const lowerCaseGenreName = genre.name.toLowerCase();
    return selectedGenres.includes(lowerCaseGenreName);
  });

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="menu-header">
            <div className="navbar-brand">
              <h2>
                <Link to="/">cinematic</Link>
              </h2>
            </div>
            <div className="hamburger" onClick={handleDropdown}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={`dropdown ${isActive ? "is-active" : ""}`}>
              {/* Use NavLink to set clicked a tag to active */}
              {filteredGenres.map((genre) => (
                <li className="dropdown-link" key={genre.id} id={genre.id}>
                  <NavLink to={`/genre/${genre.id}`} onClick={handleDropdown}>
                    {genre.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
