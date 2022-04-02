import { Movie } from "../../APIs/moviesDb.api";
import { ADD_FAVOURITE, GET_MOVIES, REMOVE_FAVOURITE } from "./types";

export const getMovies =
  (pageNumber = 1, language = "en") =>
  (dispatch) => {
    return Movie.get("/popular", {
      params: {
        page: pageNumber,
        language,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch({
          type: GET_MOVIES,
          payload: {
            movies: res.data.results,
            totalPages: res.data.total_pages,
            totalResults: res.data.total_results,
          },
        });
      })
      .catch(console.log);
  };

export const addToFavourite = (movie) => ({
  type: ADD_FAVOURITE,
  payload: {
    movie,
  },
});

export const removeFromFavourite = (id) => ({
  type: REMOVE_FAVOURITE,
  payload: {
    id,
  },
});
