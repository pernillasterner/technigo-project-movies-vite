import { useLocation } from "react-router-dom";
import "./Hero.scss";

export const Hero = ({ title, posterPath }) => {
  const isHomePage = location.pathname === "/";
  const baseUrl = "https://image.tmdb.org/t/p/w1280";
  const imageUrl = `${baseUrl}${posterPath}`;
  // const url = `https://image.tmdb.org/t/p/w1280/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg`;

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {isHomePage && (
        <div className="movieContainer">
          <p className="movieBy">A MOVIE by Matthew</p>
          <h1 className="movieTitle">{title}</h1>
          <p className="storyBy">STORY INSPIRED BY SOMETHING OR SOMEBODY</p>
        </div>
      )}
    </section>
  );
};
