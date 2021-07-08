import store from "./redux/store";
import { addBook } from "./redux/actions/books";

console.log(store);

const form = document.getElementById("addBook");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newBook = {
    title: e.target.bookTitle.value,
    id: "1",
  };

  store.subscribe(() => {
    console.log(store.getState());
  });

  store.dispatch(addBook(newBook));
});
