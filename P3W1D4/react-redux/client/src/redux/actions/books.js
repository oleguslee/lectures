import { BOOK_ADD, BOOK_ADD_TO_FAVORITE, BOOK_ADD_ALL } from "../types";

export const addAllBooks = (books) => ({
  type: BOOK_ADD_ALL,
  payload: {
    books,
  },
});

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
