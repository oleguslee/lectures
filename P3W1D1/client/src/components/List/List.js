function List({ phones }) {
  return (
    <ul class="list-group py-5">
      {phones.length ? (
        phones.map((el) => (
          <li
            key={el.id}
            class="list-group-item justify-content-between d-flex"
          >
            <span>{el.userName}</span>
            <span>{el.phone}</span>
          </li>
        ))
      ) : (
        <p>Телефонов нет</p>
      )}
    </ul>
  );
}

export default List;
