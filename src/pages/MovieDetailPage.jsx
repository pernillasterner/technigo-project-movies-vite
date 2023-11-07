import { MovieDetail } from "../components/MovieDetail/MovieDetail";

export const MovieDetailPage = ({
  popularMovies,
  secureBaseUrl,
  imageSizes,
}) => {
  return (
    <>
      <MovieDetail
        popularMovies={popularMovies}
        secureBaseUrl={secureBaseUrl}
        imageSizes={imageSizes}
      />
    </>
  );
};
