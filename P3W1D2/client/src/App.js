import "./App.css";
import { useState, useEffect, useCallback } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import useInput from "./customHooks/userInput";
import { validateName } from "./helpers/validationFuncs";
import Wrapper from "./contexts/contexts";

function App() {
  const inputs = [
    useInput("Название", "text"),
    useInput("Автор", "text", validateName),
  ];

  const [booksList, setBooksList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.every((el) => el.checkValid())) {
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
        .then((data) => setBooksList((prevValue) => [...prevValue, data]));

      inputs.forEach((el) => el.clear());
    }
  };

  const handleFavorite = useCallback(
    (id) => {
      fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
        method: "PATCH",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const itemIndex = booksList.findIndex((el) => el.id === data.id);
          const updatedBooks = booksList.slice();
          updatedBooks[itemIndex] = data;

          setBooksList(updatedBooks);
        });
    },
    [booksList]
  );

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.REACT_APP_API_URL);
      const data = await response.json();

      setBooksList(data);
    })();
  }, []);

  return (
    <Wrapper>
      <div className="container py-5">
        <Form handleSubmit={handleSubmit} inputs={inputs} />
        <List books={booksList} handleFavorite={handleFavorite} />
      </div>
    </Wrapper>
  );
}

export default App;
