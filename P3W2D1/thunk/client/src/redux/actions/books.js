import {
  BOOK_ADD,
  BOOK_ADD_TO_FAVORITE,
  BOOK_LOADING_ERROR,
  BOOK_LOADING_START,
  BOOK_GET_SUCCESS,
} from "../types";

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

// thunk
export const getBooks = () => async (dispatch, getState) => {
  // console.log(getState())

  // getBooksStart
  dispatch(booksLoadingStart());

  try {
    const response = await fetch(process.env.REACT_APP_API_URL);
    const result = await response.json();

    setTimeout(() => {
      // getBooksSuccess
      dispatch(booksGetSuccess(result));
    }, 2000);
  } catch (err) {
    //getBooksError
    dispatch(booksLoadingError(err));
  }
};

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
