import { createStore } from "redux";
import initialState from "./initialState";
import rootReducer from "./reducers/root";

const store = createStore(rootReducer, initialState);

export default store;
