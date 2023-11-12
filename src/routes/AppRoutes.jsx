import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieDetailPage } from "../pages/MovieDetailPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/genre/:genre_id" element={<Home />} />
      <Route path="/movie/:movieId" element={<MovieDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
