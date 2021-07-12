import "./App.css";
import Header from "./Components/Header/Header";
import BooksContainer from "./Components/BooksContainer/BooksContainer";
import Info from "./Components/Info/Info";
import ItemInfo from "./Components/ItemInfo/ItemInfo";
import About from "./Components/About/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from "react";

function App() {
  const [loggedIn] = useState(false);

  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <BooksContainer />
        </Route>

        <Route exact path="/info">
          <Info />
        </Route>

        <Route exact path="/book/:bookId">
          <ItemInfo />
        </Route>

        <Route exact path="/profile">
          {!loggedIn ? <Redirect to="/" /> : <Info />}
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
