import { BOOK_ADD, BOOK_ADD_TO_FAVORITE, BOOK_ADD_ALL } from "../types";

// Reducer
const booksReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case BOOK_ADD_ALL: {
      const { books } = payload;
      return books;
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
