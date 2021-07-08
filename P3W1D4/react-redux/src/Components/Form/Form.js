import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../../redux/actions/movies";

export default function () {
  const [formFields, setFormFields] = useState({ title: "" });
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const field = e.target.id;
    const newValue = e.target.value;
    setFormFields((prevValue) => ({ ...prevValue, [field]: newValue }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addMovie(formFields.title));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <input
          id="title"
          type="text"
          value={formFields.title}
          onChange={changeHandler}
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
