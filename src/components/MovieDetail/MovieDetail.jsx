import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import { fetchPopularMovies, fetchImageSizes } from "../api/movieApi";
import { Hero } from "../Hero/Hero";
import "./MovieDetail.scss";

export const MovieDetail = ({ popularMovies, secureBaseUrl, imageSizes }) => {
  const { movieId } = useParams();

  // Search for a matching movie
  const movieMatch = popularMovies.find(
    (movie) => movie.id === Number(movieId)
  );
  console.log(movieMatch);
  const baseUrl = secureBaseUrl;
  const imageSize = imageSizes.posterSize;
  const posterPath = movieMatch.poster_path;

  return (
    <>
      {/* <Hero /> */}
      <div className="movieDetailContainer">
        <img
          src={`${baseUrl}${imageSize}${posterPath}`}
          alt={movieMatch.title}
          className="movieImg"
        />
        <div className="movieInfo">
          <h2>{movieMatch.title}</h2>
          <p className="description">{movieMatch.overview}</p>
        </div>
      </div>
    </>
  );
};
