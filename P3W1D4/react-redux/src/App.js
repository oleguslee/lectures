import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import MoviesForm from "./Components/MoviesForm/MoviesForm";
import Features from "./Components/Features/Features";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <MoviesForm />
        </Route>
        <Route exact path="/features">
          <Features />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
