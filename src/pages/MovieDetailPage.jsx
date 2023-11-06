import { useParams } from "react-router-dom";
import movies from "../api/movies.json";
import { MovieDetail } from "../components/MovieDetail/MovieDetail";

export const MovieDetailPage = () => {
  // I need to fetch the movies from api
  // console.log(data);
  const params = useParams();
  // use this params to find the right movie details

  const movieMatch = movies.find(
    (movie) => movie.id === Number(params.movieId)
  );
  console.log(movieMatch);

  // Fetching data and pass it to the MovieDetails :title :image :description :link to production

  return (
    <>
      <MovieDetail />
    </>
  );
};
