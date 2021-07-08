Redux – библиотека и архитектура для предсказуемого управления состоянием, которая легко интегрируется с React.

Вот основные плюсы Redux:

Детерминированное разрешение состояния (дающее возможность получить детерминированное представление при объединении с чистыми компонентами).
Изоляция управления состоянием от ввода-вывода и побочных эффектов.
Единый источник достоверных данных для состояния приложения.
Легкий общий доступ к состоянию для разных компонентов.
Мониторинг транзакций (автологирование объектов action).
Отладка с помощью путешествия во времени.

Что есть в Redux:

- Store (объект-хранилище состояния)
- Reducer (функция для обновления состояния) - это чистая функция
- State (состояние) - иммутабельный
- Dispatch (функция, которая создает action со всей необходимой информацией для изменения)
- Reducer получает событие от стора на изменение состояния
  Обновленное состояние попадает стор, затем в ui

В стейте может быть большое количество слайсов, поэтому можно разбить его на более мелкие стейты
и объединить с помощью combineReducers

ПРИМЕР:

<script>
// Исходное состояние
const initState = {
  something: [], // slice (сруз состояния)
  users: [],
};

const SOME_TYPE = "SOME_TYPE'";

// Редьюсер
function reducer(state = {}, action) {
  switch (action.type) {
    case SOME_TYPE:
      const { title } = action.payload;
      const newSliceState = { id: 'sfjgoeijp', title };

      return { ...state, something: [...something, newSliceState] };

    default:
      return state;
  }
}

const store = createStore(reducer, initState);

// Примеры экшенов
const doSomething = (title) => ({
  type: SOME_TYPE,
  payload: { title },
});
</script>

ПРИМЕР

Мы можем подписаться на стор store.subscribe. Коллбэк этой функции будет вызываться на каждое изменение стора

<script>
  import store from "./redux/store";
  import { addMovie } from "./redux/actions/movies";

  store.subscribe(() => {
    console.log("store is updated", store.getState);
  });

  store.dispatch(addMovie("something"));

</script>

2. React-router

Для доступа к редаксу из нашего реакт-приложения, надо обернуть все его содержимое в компонент Provider (react-redux)
и передать в него пропсом store

const dispatch = useDispatch(); - достаем функцию dispatch

const movies = useSelector((state) => state.movies); - достаем что-то из состояния

3. yarn add --dev redux-devtools-extension
чтобы начать использовать тулзы в проекте, надо добаить это в настройку стора
<script>const store = createStore(rootReducer, initialState, composeWithDevTools());</script>


4. Можно записывать наш стор в localeStorage

<script>
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

</script>
