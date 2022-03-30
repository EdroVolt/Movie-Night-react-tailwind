import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../../../APIs/moviesDb.api";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      const data = await Movie.get(`/${id}`);
      console.log(data);
      setMovie(data.data);
    })();
  }, []);

  return (
    <div className="gradient-border grid grid-cols-12 md:gap-5 mx-3 md:mx-0">
      <div className="col-span-12 md:col-span-4">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        />
      </div>

      <div className="col-span-12 md:col-span-8 p-2">
        <h1 className=" border-b-4 border-red-500 pb-4 text-3xl md:text-6xl tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
          {movie.title}
        </h1>
        <p className="md:text-right  flex flex-wrap md:justify-end">
          <p className="mr-auto"> Release date: {movie.release_date} </p>
          <p>
            Rate: {movie.vote_average}
            <span className="mx-2 text-cyan-200 ">|</span>
            {movie.runtime} Minutes
          </p>
        </p>
        <div className="hidden md:block">
          <h2 className="text-2xl mt-5 mb-2 text-yellow-400 font-bold tracking-wider underline">
            Overview
          </h2>
          <p> {movie.overview} </p>
        </div>
      </div>
    </div>
  );
}
