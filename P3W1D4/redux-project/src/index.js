import store from "./redux/store";
import { addMovie } from "./redux/actions/movies";

console.log({ store });

store.subscribe(() => {
  console.log("store is updated", store.getState());
});

// store.dispatch(addMovie("something"));

const form = document.getElementById("createMovie");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  store.dispatch(addMovie(e.target.movieDescription.value));
});
