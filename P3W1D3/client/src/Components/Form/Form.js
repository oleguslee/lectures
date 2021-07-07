import { useBooksContext } from "../../contexts/booksContext";
import useInput from "../../hooks/inputHook";

export default function Form() {
  const inputs = [
    useInput({ placeholder: "title", type: "text" }),
    useInput({ placeholder: "author", type: "text" }),
  ];

  const { setBooks } = useBooksContext();

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
      .then((newBook) =>
        setBooks((prevBooks) => {
          setBooks([...prevBooks, newBook]);
          inputs.forEach((el) => el.clear());
        })
      );
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
