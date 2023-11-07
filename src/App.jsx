import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../src/components/Header/Header";
import { Home } from "./pages/Home";
import { MovieDetailPage } from "./pages/MovieDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
