import { MOVIE_CREATE, MOVIE_ADD_TO_WATCHED, MOVIE_DELETE } from "../types";

export function moviesReducer(state = [], action) {
  switch (action.type) {
    case MOVIE_CREATE: {
      const { title } = action.payload;
      const newMovie = { id: Date.now(), title };

      return [...state, newMovie];
    }

    case MOVIE_ADD_TO_WATCHED: {
      const { id } = action.payload;
      const newMovieState = state.map((movie) =>
        movie.id === id ? { ...movie, isWatched: true } : movie
      );
      return newMovieState;
    }

    case MOVIE_DELETE: {
      const { id } = action.payload;
      const newMovieState = state.filter((movie) => movie.id !== id);
      return newMovieState;
    }

    default:
      return state;
  }
}
