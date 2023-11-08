/**
 * 1. Show menu when clicking on hamburger 🍿
 * 2. The active site should be marked 🍿
 * 3. If you click on M the menu should open 🍿
 * 4. Make the menu transform from 0% to 100%
 */
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.scss";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleDropdown = () => {
    setIsActive(!isActive);
  };

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
              <li className="dropdown-link">
                <NavLink to="/action">action</NavLink>
              </li>
              <li className="dropdown-link">
                <NavLink to="/drama">drama</NavLink>
              </li>
              <li className="dropdown-link">
                <NavLink to="/horror">horror</NavLink>
              </li>
              <li className="dropdown-link">
                <NavLink to="/comedy">comedy</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
