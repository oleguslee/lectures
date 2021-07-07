import { useEffect } from "react";
import { useBooksContext } from "../../contexts/booksContext";
import { Link } from "react-router-dom";
export default function List() {
  const { books, setBooks } = useBooksContext();

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ul>
      {books.map((el) => (
        <li key={el._id}>
          <Link to={`/book/${el._id}`}>
            <span>{el.title}</span>
            <span>{el.author}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
