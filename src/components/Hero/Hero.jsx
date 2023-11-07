import { useLocation } from "react-router-dom";
import "./Hero.scss";

export const Hero = ({ movie, secureBaseUrl, imageSizes }) => {
  const imageSize = imageSizes.backdrop_sizes[2]; //"w1280"
  const posterPath = movie.poster_path;
  const isHomePage = location.pathname === "/";

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${secureBaseUrl}${imageSize}${posterPath})`,
      }}
    >
      {isHomePage && (
        <div className="movieContainer">
          <p className="movieBy">A MOVIE by Matthew</p>
          <h1 className="movieTitle">{movie.title}</h1>
          <p className="storyBy">STORY INSPIRED BY SOMETHING OR SOMEBODY</p>
        </div>
      )}
    </section>
  );
};
