import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "./types";

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
