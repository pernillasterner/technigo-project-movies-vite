import "./Hero.scss";

export const Hero = ({ popularMovies, secureBaseUrl, imageSize }) => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${secureBaseUrl}${imageSize.backdrop_sizes[2]}${popularMovies[0].poster_path})`,
      }}
    >
      {/* Display if homepage */}
      <div className="movieContainer">
        <p className="movieBy">A MOVIE by Matthew</p>
        <h1 className="movieTitle">{popularMovies[0].title}</h1>
        <p className="storyBy">STORY INSPIRED BY SOMETHING OR SOMEBODY</p>
      </div>
      {/* Display if homepage */}
    </section>
  );
};
