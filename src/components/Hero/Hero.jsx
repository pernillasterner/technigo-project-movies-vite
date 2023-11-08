import { useLocation } from "react-router-dom";
import "./Hero.scss";

export const Hero = ({ popularMovies, secureBaseUrl, imageSizes }) => {
  // console.log(movie);
  // const imageSize = imageSizes.heroSize;
  // const posterPath = popularMovies[0].poster_path;
  // const baseUrl = secureBaseUrl;
  // const movieTitle = movie.title;
  // console.log(posterPath);
  // console.log(secureBaseUrl);
  // console.log(imageSizes.heroSize);
  // const url = `https://image.tmdb.org/t/p/w1280/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg`;
  const isHomePage = location.pathname === "/";
  // backgroundImage: `url(${baseUrl}${imageSizes.heroSize}${popularMovies[0].posterPath})`,
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w1280/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg")`,
      }}
    >
      {isHomePage && popularMovies.length > 0 && (
        <div className="movieContainer">
          <p className="movieBy">A MOVIE by Matthew</p>
          <h1 className="movieTitle">{popularMovies[0].title}</h1>
          <p className="storyBy">STORY INSPIRED BY SOMETHING OR SOMEBODY</p>
        </div>
      )}
    </section>
  );
};
