import style from "./style.module.scss";
import { useTitleContext } from "../../contexts/contexts";

function Form({ handleSubmit, inputs }) {
  const fromContext = useTitleContext();
  return (
    <form onSubmit={handleSubmit} className={`${style.form}`}>
      {inputs.map((el, i) => {
        return (
          <div key={i} className="mb-3">
            <input {...el.forTag} className="form-control" />
          </div>
        );
      })}

      <button type="submit" className="btn btn-primary">
        Добавить
      </button>
    </form>
  );
}

export default Form;
