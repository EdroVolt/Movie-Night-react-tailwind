import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HeartIcon } from "@heroicons/react/outline";
import "./movieCard.css";
import {
  addToFavourite,
  removeFromFavourite,
} from "../../../Redux/action/actions";

export default function MovieCard({ movie }) {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const isInFavorites = () => {
    return !!favorites?.find((ele) => ele?.id === movie?.id);
  };

  return (
    <div className="movie-card lg:col-span-3 sm:col-span-6 md:col-span-4 text-center col-span-12 mx-3 sm:mx-0">
      <div className="shadow-sm relative shadow-gray-700 hover:shadow-md hover:shadow-gray-700 hover:scale-110 hover:cursor-pointer hover:border-2 hover:border-orange-700 transition-all">
        <Link to={`/movies/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
        </Link>
        <div
          onClick={() => {
            !isInFavorites()
              ? dispatch(addToFavourite(movie))
              : dispatch(removeFromFavourite(movie.id));
          }}
          className={
            "favourite-icon active:bg-yellow-600 active:text-white hover:text-red-600 hover:bg-yellow-400 flex justify-center py-1 absolute top-0 right-0 left-0 bg-[#121212d1] " +
            (isInFavorites()
              ? " visible bg-green-400 text-red-500 "
              : " invisible ")
          }
        >
          <HeartIcon className="w-8" />
        </div>
        <p className="text-xl absolute invisible bottom-0 py-2 right-0 left-0 text-yellow-400 bg-[#121212c1]">
          Rate: {movie.vote_average}
          <span className="mx-2 text-cyan-200 ">|</span>
          {movie.release_date}
        </p>
        {/* <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          magni corporis nobis in atque dolor tempore vero sapiente provident
          consequatur deserunt, dignissimos nam inventore velit praesentium,
          voluptate facilis animi delectus?
        </p> */}
      </div>
    </div>
  );
}
