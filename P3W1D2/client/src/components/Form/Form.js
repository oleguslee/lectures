import styles from "./style.module.scss";

import { useBooksContext } from "../../contexts/booksContext";
import useInput from "../../hooks/inputHook";

function Form() {
  const inputs = [
    useInput({ placeholder: "title", type: "text" }),
    useInput({ placeholder: "author", type: "text" }),
  ];

  const { books, setBooks } = useBooksContext();

  const handleSubmit = (event) => {
    event.preventDefault();

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
      .then((data) => {
        setBooks([...books, data]);
        inputs.forEach((el) => el.clear());
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {inputs.map((el, i) => (
        <div className="mb-3" key={i}>
          <input {...el.tagAttrs} className="form-control" />
        </div>
      ))}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
