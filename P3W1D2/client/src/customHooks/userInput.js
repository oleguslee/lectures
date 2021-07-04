import { useState } from "react";

function useInput(placeholder = "", type = "text", validationFunc) {
  const [value, setValue] = useState("");

  const clear = () => {};

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const getValue = () => {
    return value;
  };

  const checkValid = () => {
    return typeof validationFunc === "function"
      ? validationFunc(value)
      : value.length;
  };

  return {
    forTag: {
      onChange,
      value,
      placeholder,
      type,
    },
    clear,
    getValue,
    checkValid,
  };
}

export default useInput;
