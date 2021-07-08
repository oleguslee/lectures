import { combineReducers } from "redux";
import { moviesReducer } from "./movie";

const rootReducer = combineReducers({
  movies: moviesReducer,
  users: (state = []) => state,
});

export default rootReducer;
