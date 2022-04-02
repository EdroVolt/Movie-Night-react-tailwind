import { ADD_FAVOURITE, GET_MOVIES, REMOVE_FAVOURITE } from "../action/types";

const INITIAL_STATE = {
  movies: [],
  totalPages: 0,
  totalResults: 0,
  favorites: [],
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload.movies,
        totalPages: payload.totalPages,
        totalResults: payload.totalResults,
      };

    case ADD_FAVOURITE:
      return { ...state, favorites: [...state.favorites, payload.movie] };

    case REMOVE_FAVOURITE:
      return {
        ...state,
        favorites: state.favorites.filter((ele) => ele.id !== payload.id),
      };

    default:
      return state;
  }
};

export default reducer;
