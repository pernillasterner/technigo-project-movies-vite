import { Link } from "react-router-dom";
import { Hero } from "../Hero/Hero";
import "./MovieDetail.scss";

export const MovieDetail = () => {
  return (
    <>
      <Hero />
      <div className="movieDetailContainer">
        <img
          src="https://images4.alphacoders.com/929/929236.jpg"
          alt="Muzzle"
          width={260}
          height={340}
          className="movieImg"
        />
        <div className="movieInfo">
          <h2>Venom</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quas nesciunt culpa expedita labore rerum, ratione voluptatibus unde
            reiciendis adipisci, ad fuga! Tempora laboriosam error accusamus
            ducimus provident reiciendis molestias.
          </p>
        </div>
      </div>
    </>
  );
};
