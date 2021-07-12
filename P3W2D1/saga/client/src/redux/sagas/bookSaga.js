import { call, put, takeEvery } from "redux-saga/effects";
import {
  getAllBooksError,
  getAllBooksSuccess,
  createBookSuccess,
  createBookError,
} from "../actions/books";
import { BOOK_GET_ALL_START, BOOK_CREATE_START } from "../types";
import { getDataFromServer, createBookFromServer } from "./tools";

function* getAllBooks() {
  try {
    const response = yield call(
      getDataFromServer,
      process.env.REACT_APP_API_URL
    );

    yield put(getAllBooksSuccess(response));
  } catch (err) {
    yield put(getAllBooksError(err));
  }
}

function* createBook(action) {
  const { newBook } = action.payload;

  try {
    const response = yield call(
      createBookFromServer,
      process.env.REACT_APP_API_URL,
      newBook
    );

    yield put(createBookSuccess(response));
  } catch (err) {
    yield put(createBookError(err));
  }
}

export function* watchBooks() {
  yield takeEvery(BOOK_GET_ALL_START, getAllBooks);
  yield takeEvery(BOOK_CREATE_START, createBook);
}
