/**
 * 1. Show menu when clicking on hamburger 🍿
 * 2. The active site should be marked
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
              <li className="dropdown-link">
                {/* Use NavLink to set clicked a tag to active */}
                <a href="#" role="button">
                  home
                </a>
              </li>
              <li className="dropdown-link">
                <a href="#" role="button">
                  action
                </a>
              </li>
              <li className="dropdown-link">
                <a href="#" role="button">
                  drama
                </a>
              </li>
              <li className="dropdown-link">
                <a href="#" role="button">
                  horror
                </a>
              </li>
              <li className="dropdown-link">
                <a href="#" role="button">
                  comedy
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
