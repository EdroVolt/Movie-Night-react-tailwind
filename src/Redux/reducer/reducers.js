import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../action/types";

const INITIAL_STATE = {
  favorites: [],
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
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
