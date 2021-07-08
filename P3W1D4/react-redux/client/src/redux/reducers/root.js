import { combineReducers } from "redux";
import booksReducer from "./books";
import usersReducer from "./users";

const reducer = combineReducers({
  books: booksReducer,
  users: usersReducer,
});

export default reducer;
