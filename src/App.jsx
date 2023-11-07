import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// import { AppRoutes } from "./routes/AppRoutes";
import { fetchPopularMovies, fetchImageSizes } from "./api/movieApi";
import { Header } from "../src/components/Header/Header";
import { Home } from "./pages/Home";
import { MovieDetailPage } from "./pages/MovieDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  // const [imageSizes, setImageSizes] = useState([]);
  const [secureBaseUrl, setSecureBaseUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [movies, images] = await Promise.all([
          fetchPopularMovies(),
          fetchImageSizes(),
        ]);
        setPopularMovies(movies);
        // setImageSizes(images);
        setSecureBaseUrl(images.secure_base_url);
        setIsLoading(false); // Data is loaded
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };

    // Calling function only once when component mounts
    if (isLoading) {
      fetchData();
    }
  }, [isLoading]);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  console.log(popularMovies);
  // const mainProps = {
  //   popularMovies: popularMovies,
  //   imageSizes: imageSizes,
  //   secureBaseUrl: secureBaseUrl,
  // };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              popularMovies={popularMovies}
              // imageSizes={imageSizes}
              secureBaseUrl={secureBaseUrl}
            />
          }
        />
        <Route path="/movie/:movieId" element={<MovieDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
