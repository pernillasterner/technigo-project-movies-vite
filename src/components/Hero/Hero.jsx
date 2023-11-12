import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Hero.scss";
import { NotFoundPage } from "../../pages/NotFoundPage";

export const Hero = ({ title, posterPath, details }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w1280";
  let imageUrl = `${baseUrl}${posterPath}`;
  const { movieId } = useParams();
  const notFoundContainer = imageUrl ? "" : "notFoundContainer";

  return (
    <section
      className={`hero ${notFoundContainer}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(${imageUrl})`,
      }}
    >
      {!movieId && title ? (
        <div className="movieContainer">
          {/* <p className="movieBy">A MOVIE by Matthew</p> */}
          {details.tagline ? (
            <>
              <h1 className="movieTitle">{details.tagline}</h1>
              <p className="storyBy">{title}</p>
            </>
          ) : (
            <h1 className="movieTitle">{title}</h1>
          )}
          <div className="genres">
            {details.genres.map((genre) => (
              <Link to={`/genre/${genre.id}`} key={genre.id}>
                {genre.name}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        // TODO Fix this not found stuff
        !title && (
          // <NotFoundPage info={setInfo} />
          <div className="notFoundContainer">
            <p>Oops!</p>
            <h1>No movies found 🎬</h1>
            <button className="movieBtn">
              <Link to="/">🍿 home</Link>
            </button>
          </div>
        )
      )}
    </section>
  );
};
