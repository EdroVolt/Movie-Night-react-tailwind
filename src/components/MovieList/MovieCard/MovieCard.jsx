import { Link } from "react-router-dom";

export default function MovieCard({ image, id }) {
  return (
    <div className="lg:col-span-3 px-10 sm:px-0 sm:col-span-6 md:col-span-4 text-center col-span-12 mx-3 sm:mx-0">
      <div className="shadow-sm shadow-gray-700 hover:shadow-md hover:shadow-gray-700 hover:scale-110 hover:cursor-pointer hover:border-2 hover:border-orange-700 transition-all">
        <Link to={`/movies/${id}`}>
          <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt="" />
        </Link>
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
