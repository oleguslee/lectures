import { BOOK_ADD, BOOK_ADD_TO_FAVORITE } from "../types";

export const addBook = (newBook) => ({
  type: BOOK_ADD,
  payload: {
    newBook,
  },
});

export const addBookToFavorite = (id) => ({
  type: BOOK_ADD_TO_FAVORITE,
  payload: { id },
});
