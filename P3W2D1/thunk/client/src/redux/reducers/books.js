import {
  BOOK_ADD,
  BOOK_ADD_TO_FAVORITE,
  BOOK_LOADING_START,
  BOOK_GET_SUCCESS,
  BOOK_LOADING_ERROR,
} from "../types";

// Reducer
const booksReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_LOADING_START: {
      return { ...state, isLoading: true };
    }
    case BOOK_GET_SUCCESS: {
      const { books } = payload;
      return { items: books, isLoading: false, error: null };
    }
    case BOOK_LOADING_ERROR: {
      const { error } = payload;
      return { ...state, error, isLoading: false };
    }

    case BOOK_ADD: {
      const { newBook } = payload;
      return [...state, newBook];
    }

    case BOOK_ADD_TO_FAVORITE: {
      const { id } = payload;

      return state.map((el) =>
        el.id === id ? { ...el, isFavorite: !el.isFavorite } : el
      );
    }

    default: {
      return state;
    }
  }
};

export default booksReducer;
