import { all } from "redux-saga/effects";
import { watchBooks } from "./bookSaga";

export default function* rootSaga() {
  yield all([watchBooks()]);
}
