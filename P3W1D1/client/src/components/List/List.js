function List({ books }) {
  return (
    <ul class="list-group py-5">
      {books.length ? (
        books.map((el) => (
          <li
            key={el.id}
            class="list-group-item justify-content-between d-flex"
          >
            <span>{el.title}</span>
            <span>{el.author}</span>
          </li>
        ))
      ) : (
        <p>Телефонов нет</p>
      )}
    </ul>
  );
}

export default List;
