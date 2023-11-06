import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { MovieList } from "../components/MovieList/MovieList";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <MovieList />
    </>
  );
};
