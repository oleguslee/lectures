import {
  BOOK_CREATE_START,
  BOOK_CREATE_SUCCESS,
  BOOK_CREATE_ERROR,
  BOOK_GET_ALL_START,
  BOOK_GET_ALL_SUCCESS,
  BOOK_GET_ALL_ERROR,
} from "../types";

export const getAllBooksStart = () => ({
  type: BOOK_GET_ALL_START,
});

export const getAllBooksSuccess = (books) => ({
  type: BOOK_GET_ALL_SUCCESS,
  payload: {
    books,
  },
});

export const getAllBooksError = (err) => ({
  type: BOOK_GET_ALL_ERROR,
  payload: err,
  error: true,
});

// createBook
export const createBookStart = (newBook) => ({
  type: BOOK_CREATE_START,
  payload: {
    newBook,
  },
});

export const createBookSuccess = (newBook) => ({
  type: BOOK_CREATE_SUCCESS,
  payload: newBook,
});

export const createBookError = (err) => ({
  type: BOOK_CREATE_ERROR,
  payload: err,
  error: true,
});
