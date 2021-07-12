import useInput from "../../hooks/inputHook";
import { useDispatch } from "react-redux";
import { createBookStart } from "../../redux/actions/books";

export default function Form() {
  const inputs = [
    useInput({ placeholder: "title", type: "text" }),
    useInput({ placeholder: "author", type: "text" }),
  ];

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title: inputs[0].getValue(),
      author: inputs[1].getValue(),
    };

    dispatch(createBookStart(newBook));
    inputs.forEach((el) => el.clear());
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
