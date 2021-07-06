import "./App.css";
import { useMemo } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";

function App() {
  const handleMemo = () => {
    let value = 1;

    for (let i = 0; i < 1e9; i++) {
      value++;
    }

    return value;
  };

  console.log(useMemo(handleMemo, []));
  // console.log(handleMemo());

  return (
    <>
      <Form />
      <List />
    </>
  );
}

export default App;
