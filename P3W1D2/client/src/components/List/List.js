import "./style.module.scss";
import { memo, useEffect, useCallback } from "react";
import { useBooksContext } from "../../contexts/booksContext";

const List = () => {
  console.log("Rerender List");
  const { books, setBooks } = useBooksContext();

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  const handleFavorite = useCallback(
    (id) => {
      fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
        method: "PATCH",
      })
        .then((response) => response.json())
        .then((data) => {
          const currentId = books.findIndex((el) => el.id === data.id);
          const booksCopy = books.slice();
          booksCopy[currentId].isFavorite = !booksCopy[currentId].isFavorite;

          setBooks(booksCopy);
        });
    },
    [books]
  );

  return (
    <ul className="list-group py-5">
      {books.map((el) => {
        return (
          <li key={el.id} className="list-group-item">
            <button
              type="button"
              className="d-flex justify-content-between w-100"
              onClick={() => handleFavorite(el.id)}
            >
              <span>{el.title}</span>

              <span>
                {el.isFavorite ? <span className="px-3">⭐</span> : ""}
                <span>{el.author}</span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(List);
