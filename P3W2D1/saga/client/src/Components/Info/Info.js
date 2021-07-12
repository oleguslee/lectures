import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Info() {
  const [counter, setCounter] = useState(0);
  const [isCounterShown, setIsCounterShown] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (isCounterShown) {
      setTimeout(() => {
        if (counter === 1) {
          history.push("/");
        }
        setCounter(counter - 1);
      }, 1000);
    }
  }, [counter]);

  const handleClick = () => {
    setIsCounterShown(true);
    setCounter(3);
  };

  return (
    <div>
      {isCounterShown && <p>{counter}</p>}
      <button onClick={handleClick} type="button">
        Push me
      </button>
    </div>
  );
}
