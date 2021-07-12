import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { booksLoadingStart } from "../../redux/actions/books";
import { Link } from "react-router-dom";
export default function List() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const { items, isLoading, error } = books;

  useEffect(() => {
    dispatch(booksLoadingStart());
  }, []);

  return (
    <ul>
      {isLoading ? (
        <p>Wait for it...</p>
      ) : error ? (
        <p>Oooooops</p>
      ) : (
        items.map((el) => (
          <li key={el._id}>
            <Link to={`/book/${el._id}`}>
              <span>{el.title}</span>
              <span>{el.author}</span>
            </Link>
          </li>
        ))
      )}
    </ul>
  );
}
