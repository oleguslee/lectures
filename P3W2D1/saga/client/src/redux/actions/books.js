import {
  BOOK_LOADING_ERROR,
  BOOK_LOADING_START,
  BOOK_GET_SUCCESS,
  BOOK_ADD_ERROR,
  BOOK_ADD_START,
  BOOK_ADD_SUCCESS,
} from "../types";

export const bookAddStart = (newBook) => ({
  type: BOOK_ADD_START,
  payload: {
    newBook,
  },
});

export const bookAddSuccess = (newBook) => ({
  type: BOOK_ADD_SUCCESS,
  payload: {
    newBook,
  },
});

export const bookAddError = (error) => ({
  type: BOOK_ADD_ERROR,
  payload: {
    error,
  },
  error: true,
});

export const booksLoadingStart = () => ({
  type: BOOK_LOADING_START,
});

export const booksGetSuccess = (books) => ({
  type: BOOK_GET_SUCCESS,
  payload: {
    books,
  },
});

export const booksLoadingError = (error) => ({
  type: BOOK_LOADING_ERROR,
  payload: {
    error,
  },
  error: true,
});
