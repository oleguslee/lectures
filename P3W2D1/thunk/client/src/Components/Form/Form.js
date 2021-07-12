import useInput from "../../hooks/inputHook";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/actions/books";

export default function Form() {
  const inputs = [
    useInput({ placeholder: "title", type: "text" }),
    useInput({ placeholder: "author", type: "text" }),
  ];

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(process.env.REACT_APP_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: inputs[0].getValue(),
        author: inputs[1].getValue(),
      }),
    })
      .then((response) => response.json())
      .then((newBook) => {
        dispatch(addBook(newBook));
        inputs.forEach((el) => el.clear());
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((el, i) => (
        <input key={i} {...el.tagAttrs} />
      ))}
      <button type="submit">Добавить</button>
    </form>
  );
}
