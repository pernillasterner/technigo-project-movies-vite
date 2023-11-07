import { useLocation } from "react-router-dom";
import "./Hero.scss";

export const Hero = ({ popularMovies, secureBaseUrl, imageSizes }) => {
  const imageSize = imageSizes.heroSize;
  const posterPath = popularMovies.poster_path;
  const baseUrl = secureBaseUrl;
  const movieTitle = popularMovies.title;
  const isHomePage = location.pathname === "/";

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${baseUrl}${imageSize}${posterPath})`,
      }}
    >
      {isHomePage && (
        <div className="movieContainer">
          <p className="movieBy">A MOVIE by Matthew</p>
          <h1 className="movieTitle">{movieTitle}</h1>
          <p className="storyBy">STORY INSPIRED BY SOMETHING OR SOMEBODY</p>
        </div>
      )}
    </section>
  );
};
