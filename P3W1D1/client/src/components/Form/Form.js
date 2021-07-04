function Form({ handleSubmit, handleTitle, handleAuthor, author, title }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <p>Автор: {author}</p>
        <input
          onChange={handleAuthor}
          value={author}
          type="text"
          placeholder="Имя автора"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <p>Название: {title}</p>
        <input
          onChange={handleTitle}
          value={title}
          type="text"
          placeholder="Название"
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Добавить
      </button>
    </form>
  );
}

export default Form;
