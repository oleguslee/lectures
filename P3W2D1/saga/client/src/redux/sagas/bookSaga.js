import { takeEvery, call, put } from "redux-saga/effects";
import { BOOK_LOADING_START, BOOK_ADD_START } from "../types";
import { getDataFromServer, postDataOnServer } from "../tools/tools";
import {
  booksLoadingError,
  booksGetSuccess,
  bookAddError,
  bookAddSuccess,
} from "../actions/books";

// worker
function* getAllBooks() {
  try {
    const result = yield call(getDataFromServer, process.env.REACT_APP_API_URL);

    yield put(booksGetSuccess(result));
  } catch (error) {
    yield put(booksLoadingError(error));
  }
}

function* addBook(action) {
  const { newBook } = action.payload;

  try {
    const result = yield call(
      postDataOnServer,
      process.env.REACT_APP_API_URL,
      newBook
    );

    yield put(bookAddSuccess(result));
  } catch (err) {
    yield put(bookAddError(err));
  }
}

// watcher
export function* getBooksWatch() {
  yield takeEvery(BOOK_LOADING_START, getAllBooks);
  yield takeEvery(BOOK_ADD_START, addBook);
}
