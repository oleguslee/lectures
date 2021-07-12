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

export const getAllBooks = () => async (dispatch, getState) => {
  // console.log(getState());
  dispatch(getAllBooksStart());

  const response = await fetch(process.env.REACT_APP_API_URL);
  const result = await response.json();

  setTimeout(() => {
    if (response.ok) {
      dispatch(getAllBooksSuccess(result));
      // dispatch(getAllBooksError("some Error"));
    } else {
      dispatch(getAllBooksError(result));
    }
  }, 3000);
};

// createBook
export const createBookStart = () => ({
  type: BOOK_CREATE_START,
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

export const createBook = (newBook) => async (dispatch) => {
  dispatch(createBookStart());

  const response = await fetch(process.env.REACT_APP_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBook),
  });

  const result = await response.json();

  if (response.ok) {
    dispatch(createBookSuccess(result));
  } else {
    dispatch(createBookError(result));
  }
};
