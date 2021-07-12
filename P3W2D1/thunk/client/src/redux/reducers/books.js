import {
  BOOK_CREATE_START,
  BOOK_CREATE_SUCCESS,
  BOOK_CREATE_ERROR,
  BOOK_ADD_TO_FAVORITE_START,
  BOOK_ADD_TO_FAVORITE_SUCCESS,
  BOOK_ADD_TO_FAVORITE_ERROR,
  BOOK_GET_ALL_START,
  BOOK_GET_ALL_SUCCESS,
  BOOK_GET_ALL_ERROR,
} from "../types";

// Reducer
const booksReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case BOOK_GET_ALL_START: {
      return { ...state, loading: true };
    }

    case BOOK_GET_ALL_ERROR: {
      return { ...state, loading: false, error: payload };
    }

    case BOOK_GET_ALL_SUCCESS: {
      const { books } = payload;
      return { items: books, loading: false, error: null };
    }

    // TODO

    case BOOK_CREATE_START: {
      return { ...state, loading: true };
    }

    case BOOK_CREATE_ERROR: {
      return { ...state, loading: false, error: payload };
    }

    case BOOK_CREATE_SUCCESS: {
      return { items: [...state.items, payload], loading: false, error: null };
    }

    // case BOOK_ADD_TO_FAVORITE_SUCCESS: {
    //   const { id } = payload;

    //   return {
    //     ...state,
    //     items: state.items.map((el) =>
    //       el.id === id ? { ...el, isFavorite: !el.isFavorite } : el
    //     ),
    //   };
    // }

    default: {
      return state;
    }
  }
};

export default booksReducer;
