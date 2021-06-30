function Form({ handleSubmit, handlerPhone, handlerName, userName, phone }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <p>Name: {userName}</p>
        <input
          onChange={handlerName}
          value={userName}
          type="text"
          placeholder="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <p>Phone: {phone}</p>
        <input
          onChange={handlerPhone}
          value={phone}
          type="text"
          placeholder="phone"
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Create new
      </button>
    </form>
  );
}

export default Form;
