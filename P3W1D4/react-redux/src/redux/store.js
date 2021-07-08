import { createStore } from "redux";
import initialState from "./initialState";
import rootReducer from "./reducers/root";
import { composeWithDevTools } from "redux-devtools-extension";

const parsedStateFromStorage = JSON.parse(window.localStorage.getItem("redux"));
const store = createStore(
  rootReducer,
  parsedStateFromStorage ?? initialState,
  composeWithDevTools()
);

store.subscribe(() => {
  const currentState = store.getState();
  window.localStorage.setItem("redux", JSON.stringify(currentState));
});

export default store;
