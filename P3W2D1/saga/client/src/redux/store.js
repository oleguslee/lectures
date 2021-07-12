import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/root";
import rootSaga from "./sagas/rootSaga";
import initialState from "./initialState";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export default store;
