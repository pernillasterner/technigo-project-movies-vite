import { Link } from "react-router-dom";
export const NotFoundPage = () => {
  return (
    <div className="notFoundContainer">
      <p>oops!</p>
      <h1>Looks like this link isn´t working.</h1>
      <button className="movieBtn">
        <Link to={"/"}>🍿home</Link>
      </button>
    </div>
  );
};
