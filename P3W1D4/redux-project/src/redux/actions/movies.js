import { MOVIE_CREATE, MOVIE_ADD_TO_WATCHED, MOVIE_DELETE } from "../types";

export const addMovie = (title) => ({
  type: MOVIE_CREATE,
  payload: { title },
});

export const addMovieToWatched = (id) => ({
  type: MOVIE_ADD_TO_WATCHED,
  payload: { id },
});

export const deleteMovie = (id) => ({
  type: MOVIE_DELETE,
  payload: { id },
});
