import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./core/Navbar/Navbar";
import "./App.css";
import MovieList from "./MovieList/MovieList";
import MovieDetails from "./MovieList/MovieDetails/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto px-2">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
