import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

import Home from "./components/home";
import reducers from "./reducers";

import { Provider } from "react-redux";
import { createStore } from "redux";
import Robot from "../src/robot";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/robot/:id">
          <Robot />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,

  document.getElementById("root")
);
