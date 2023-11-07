import "./Hero.scss";

export const Hero = ({ movie, secureBaseUrl, imageSizes }) => {
  // const imageSize = imageSizes.backdrop_sizes[2];
  const imageSize = "w1280";
  const posterPath = movie.poster_path;

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${secureBaseUrl}${imageSize}${posterPath})`,
      }}
    >
      {/* Display if homepage */}
      <div className="movieContainer">
        <p className="movieBy">A MOVIE by Matthew</p>
        <h1 className="movieTitle">{movie.title}</h1>
        <p className="storyBy">STORY INSPIRED BY SOMETHING OR SOMEBODY</p>
      </div>
      {/* Display if homepage */}
    </section>
  );
};
