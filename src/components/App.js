import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./core/Navbar/Navbar";
import "./App.css";
import MovieList from "./MovieList/MovieList";
import MovieDetails from "./MovieList/MovieDetails/MovieDetails";
import { Provider } from "react-redux";
import Store from "../Redux/store";
import FavoriteMovies from "./FavoriteMovies/FavoriteMovies";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Navbar />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/movies" replace />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/favourites" element={<FavoriteMovies />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
