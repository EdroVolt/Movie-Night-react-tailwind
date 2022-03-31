import { useEffect, useState } from "react";
import { Movie } from "../../APIs/moviesDb.api";
import Pagination from "../common/Pagination/Pagination";
import MovieCard from "./MovieCard/MovieCard";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await Movie.get("/popular");
      console.log(data);
      setTotalPages(data.data.total_pages);
      setTotalResults(data.data.total_results);
      setMovies(data.data.results);
    })();
  }, []);

  const getData = async (pageNumber) => {
    const data = await Movie.get("/popular", {
      params: {
        page: pageNumber,
      },
    });

    setPageNumber(pageNumber);
    setMovies(data.data.results);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        {movies.map((movie) => (
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
