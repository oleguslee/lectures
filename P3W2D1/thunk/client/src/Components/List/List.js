import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../redux/actions/books";
import { Link } from "react-router-dom";
export default function List() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const { items, error, loading } = books;

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return (
    <>
      {loading ? (
        <p>Wait for it...</p>
      ) : error ? (
        <p>Ooooops</p>
      ) : (
        <ul>
          {items.map((el) => (
            <li key={el._id}>
              <Link to={`/book/${el._id}`}>
                <span>{el.title}</span>
                <span>{el.author}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
