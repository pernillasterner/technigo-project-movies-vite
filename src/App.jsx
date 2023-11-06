import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../src/components/Header/Header";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
