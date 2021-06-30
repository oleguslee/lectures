import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  const [phonesList, setPhones] = useState([]);
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");

  const handlerName = (event) => {
    if (event.target.value) {
      setUserName(event.target.value);
    } else {
      setUserName("");
    }
  };
  const handlerPhone = (event) => {
    if (event.target.value) {
      setPhone(event.target.value);
    } else {
      setPhone("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName && phone) {
      fetch(process.env.REACT_APP_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          phone,
        }),
      })
        .then((response) => response.json())
        .then((data) => setPhones((prevValue) => [...prevValue, data]));

      clearInput();
    }
  };

  const clearInput = () => {
    setUserName("");
    setPhone("");
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.REACT_APP_API_URL);
      const data = await response.json();

      setPhones(data);
    })();
  }, []);

  return (
    <div className="container py-5">
      <Form
        handleSubmit={handleSubmit}
        handlerPhone={handlerPhone}
        handlerName={handlerName}
        userName={userName}
        phone={phone}
      />
      <List phones={phonesList} />
    </div>
  );
}

export default App;
