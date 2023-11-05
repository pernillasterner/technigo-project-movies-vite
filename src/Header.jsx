import "./Header.scss";

export const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="menu-header">
            <div className="navbar-brand">
              <h1>CINEMATIC</h1>
            </div>
            {/* When is-active show submenu */}
            <div className="hamburger is-active">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className="dropdown">
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
