import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./core/Navbar/Navbar";
import "./App.css";
import MovieList from "./MovieList/MovieList";
import MovieDetails from "./MovieList/MovieDetails/MovieDetails";
import { Provider } from "react-redux";
import Store from "../Redux/store";
import FavoriteMovies from "./FavoriteMovies/FavoriteMovies";
import React, { useState } from "react";

export const LanguageContext = React.createContext();

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <Provider store={Store}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <BrowserRouter>
          <Navbar />
          <div
            className="container mx-auto"
            dir={language === "en" ? "ltr" : "rtl"}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/movies" replace />} />
              <Route path="/movies" element={<MovieList />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
              <Route path="/favourites" element={<FavoriteMovies />} />
            </Routes>
          </div>
        </BrowserRouter>
      </LanguageContext.Provider>
    </Provider>
  );
}

export default App;
