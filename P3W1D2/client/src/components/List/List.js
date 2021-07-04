import style from "./style.module.scss";
import { memo } from "react";

function List({ books, handleFavorite }) {
  console.log("check!");
  return (
    <ul className="list-group py-5">
      {books.length ? (
        books.map((el) => (
          <li
            key={el.id}
            className="list-group-item"
            onClick={() => handleFavorite(el.id)}
          >
            <button
              className={`justify-content-between d-flex ${style.listItem}`}
            >
              <span>{el.title}</span>

              <span className="d-flex">
                {el.isFavorite ? <span className="px-3">⭐</span> : ""}
                <span>{el.author}</span>
              </span>
            </button>
          </li>
        ))
      ) : (
        <p>Телефонов нет</p>
      )}
    </ul>
  );
}

export default memo(List);
