import { all } from "redux-saga/effects";
import { getBooksWatch } from "./bookSaga";

export function* rootSaga() {
  yield all([getBooksWatch()]);
}
