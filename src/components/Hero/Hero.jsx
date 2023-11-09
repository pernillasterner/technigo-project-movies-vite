import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Hero.scss";

export const Hero = ({ title, posterPath, details }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w1280";
  const imageUrl = `${baseUrl}${posterPath}`;
  const { movieId } = useParams();

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(${imageUrl})`,
      }}
    >
      {!movieId && title ? (
        <div className="movieContainer">
          <p className="movieBy">A MOVIE by Matthew</p>
          <h1 className="movieTitle">{title}</h1>
          <p className="storyBy">{details.tagline}</p>
          <div className="genres">
            {details.genres.map((genre) => (
              <Link to={`/${genre.name.toLowerCase()}`} key={genre.id}>
                {genre.name}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        !title && (
          <div className="no-movies">
            <h1 className="">Oops!</h1>
            <p className="">no movies found</p>
            <Link to="/">home</Link>
          </div>
        )
      )}
    </section>
  );
};
