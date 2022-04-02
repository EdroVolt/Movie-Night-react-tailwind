import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../Redux/action/actions";
import { LanguageContext } from "../App";
import Pagination from "../common/Pagination/Pagination";
import MovieCard from "./MovieCard/MovieCard";

export default function MovieList() {
  const movies = useSelector((select) => select.movies);
  const totalResults = useSelector((select) => select.totalResults);
  const totalPages = useSelector((select) => select.totalPages);
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    // const data = await Movie.get("/popular");
    dispatch(getMovies(pageNumber, language));
  }, [language]);

  const getData = async (pageNumber) => {
    dispatch(getMovies(pageNumber));
    setPageNumber(pageNumber);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="mt-5">
        <Pagination
          pageNumber={pageNumber}
          totalResults={totalResults}
          totalPages={totalPages}
          getData={getData}
        />
      </div>
    </>
  );
}
