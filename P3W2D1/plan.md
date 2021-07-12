Thunk

Вот было бы здорово, если бы можно было как-то вынести fetch из компонента, например в action-creater.
Однако по умолчанию так делать нельзя.

Но! Если очень хочется, то конечно же можно 😉

В этом нам поможет библиотека redux-thunk (https://github.com/reduxjs/redux-thunk)

После ее установки надо поправить подключение стора

<script>
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/root";
import initialState from "./initialState";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
</script>

Теперь можно вытащить fetch из компонента и переложить в action-creater

Обновленный экшен должен возвращать не объект, а функцию, которой стали доступны 2 параметра dispatch и getState

В идеале разбить логику на более мелкие шаги:

- старт операции
- успешное завершение
- неуспешное

На каждый из этих вариантов можно сделать отдельный action-creater

<script>
export const getAllBooks = () => async (dispatch, getState) => {
  // console.log(getState());
  dispatch(getAllBooksStart())
  const response = await fetch(process.env.REACT_APP_API_URL);
  const result = await response.json();
  
  if (response.ok) {
    dispatch(getAllBooksSuccess(result));
  } else {
    dispatch(getAllBooksError(result));
  }

};
</script>

initialState также надо переделать в объект, который содержит значение, ошибку и состояние загрузки

<script>
const initialState = {
  books: {
    items: [],
    error: null,
    loading: false,
  }, 
};
</script>

Saga

альтернатива thunk, работающая на генераторах
Генераторы дают нам возможность прервать работу функции и продолжить по необходимости с ключевого слова yeld

Необходимо установить библиотеку redux-saga и подключить в сторе

<script>
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

</script>

Использует принцип watcher/worker

Вотчер следит за экшенами и запускает определенные воркеры в зависимости от типа экшена (используя эффект takeEvery)

<script>
// worker
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

// watcher
export function* watchBooks() {
  yield takeEvery(BOOK_GET_ALL_START, getAllBooks);
}
</script>

На одну сагу один вотчер.

Чтобы собрать несколько саг в одну общую, нужно использовать эффект all, в аргументе которого в массиве вызвать все необходимые вотчеры

<script>
import { all } from "redux-saga/effects";
import { watchBooks } from "./bookSaga";

export default function* rootSaga() {
  yield all([watchBooks()]);
}
</script>
