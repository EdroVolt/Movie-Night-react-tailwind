import { useSelector } from "react-redux";
import MovieCard from "../MovieList/MovieCard/MovieCard";
import MovieDetails from "../MovieList/MovieDetails/MovieDetails";

export default function FavoriteMovies() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-8">
      {favorites.map((item) => (
        <MovieCard key={item.id} movie={item} />
      ))}
    </div>
  );
}
