import { Link } from "react-router-dom";

import "./MovieList.scss";

export const MovieList = () => {
  return (
    <section className="movieListContainer">
      {/* should be able to change depending on category */}
      <h2 className="title">most popular</h2>

      <Link to="/movie/234">
        <img
          src="https://images4.alphacoders.com/929/929236.jpg"
          alt="Muzzle"
          width={360}
          height={440}
          className="movieImg"
        />
        <div className="details">
          <h3 className="title">muzzle</h3>
          <p className="date">2023-09-12</p>
        </div>
      </Link>
      <Link to="/movie/234">
        <img
          src="https://images4.alphacoders.com/929/929236.jpg"
          alt="Muzzle"
          width={360}
          height={440}
        />
        <div className="details">
          <h3 className="title">muzzle</h3>
          <p className="date">2023-09-12</p>
        </div>
      </Link>
      <Link to="/movie/234">
        <img
          src="https://images4.alphacoders.com/929/929236.jpg"
          alt="Muzzle"
          width={360}
          height={440}
        />
        <div className="details">
          <h3 className="title">muzzle</h3>
          <p className="date">2023-09-12</p>
        </div>
      </Link>
      <Link to="/movie/234">
        <img
          src="https://images4.alphacoders.com/929/929236.jpg"
          alt="Muzzle"
          width={360}
          height={440}
        />
        <div className="details">
          <h3 className="title">muzzle</h3>
          <p className="date">2023-09-12</p>
        </div>
      </Link>

      <Link to="/movie/234">
        <img
          src="https://images4.alphacoders.com/929/929236.jpg"
          alt="Muzzle"
          width={360}
          height={440}
          className="movieImg"
        />
        <div className="details">
          <h3 className="title">muzzle</h3>
          <p className="date">2023-09-12</p>
        </div>
      </Link>
      <Link to="/movie/234">
        <img
          src="https://images4.alphacoders.com/929/929236.jpg"
          alt="Muzzle"
          width={360}
          height={440}
        />
        <div className="details">
          <h3 className="title">muzzle</h3>
          <p className="date">2023-09-12</p>
        </div>
      </Link>
      <Link to="/movie/234">
        <img
          src="https://images4.alphacoders.com/929/929236.jpg"
          alt="Muzzle"
          width={360}
          height={440}
        />
        <div className="details">
          <h3 className="title">muzzle</h3>
          <p className="date">2023-09-12</p>
        </div>
      </Link>
      <Link to="/movie/234">
        <img
          src="https://images4.alphacoders.com/929/929236.jpg"
          alt="Muzzle"
          width={360}
          height={440}
        />
        <div className="details">
          <h3 className="title">muzzle</h3>
          <p className="date">2023-09-12</p>
        </div>
      </Link>
    </section>
  );
};
