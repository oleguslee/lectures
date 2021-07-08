import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllBooks } from "../../redux/actions/books";
import { Link } from "react-router-dom";
export default function List() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch(addAllBooks(data));
      })
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
