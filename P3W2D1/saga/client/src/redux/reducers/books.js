import {
  BOOK_ADD_ERROR,
  BOOK_ADD_START,
  BOOK_ADD_SUCCESS,
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

    case BOOK_ADD_START: {
      return { ...state, isLoading: true };
    }

    case BOOK_ADD_SUCCESS: {
      const { newBook } = payload;
      
      return {
        items: [...state.items, newBook],
        isLoading: false,
        error: null,
      };
    }

    case BOOK_ADD_ERROR: {
      const { error } = payload;
      return { ...state, error, isLoading: false };
    }

    default: {
      return state;
    }
  }
};

export default booksReducer;
