import "./Hero.scss";

export const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "url('https://images4.alphacoders.com/929/929236.jpg')",
      }}
    >
      <div className="movieContainer">
        <p className="movieBy">A MOVIE by Matthew</p>
        <h1 className="movieTitle">venom</h1>
        <p className="storyBy">STORY INSPIRED BY SOMETHING OR SOMEBODY</p>
      </div>
    </section>
  );
};
