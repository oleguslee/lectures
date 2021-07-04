import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  const [booksList, setBooksList] = useState([]);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");

  const handleAuthor = (event) => {
    if (event.target.value) {
      setAuthor(event.target.value);
    } else {
      setAuthor("");
    }
  };
  const handleTitle = (event) => {
    if (event.target.value) {
      setTitle(event.target.value);
    } else {
      setTitle("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (author && title) {
      fetch(process.env.REACT_APP_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author,
          title,
        }),
      })
        .then((response) => response.json())
        .then((data) => setBooksList((prevValue) => [...prevValue, data]));

      clearInput();
    }
  };

  const clearInput = () => {
    setAuthor("");
    setTitle("");
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.REACT_APP_API_URL);
      const data = await response.json();

      setBooksList(data);
    })();
  }, []);

  return (
    <div className="container py-5">
      <Form
        handleSubmit={handleSubmit}
        handleTitle={handleTitle}
        handleAuthor={handleAuthor}
        author={author}
        title={title}
      />
      <List books={booksList} />
    </div>
  );
}

export default App;
