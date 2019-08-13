import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Navigation from "../src/containers/Navigation";
import Dashboard from "../src/containers/Dashboard";
import Login from "../src/containers/Login";
import Quote from "../src/containers/Quote";
import App from "./App";

ReactDOM.render(
  <Router>
    <Navigation />
    <Route exact path="/" component={Login} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/create-quote" component={Quote} />
  </Router>,
  document.getElementById("root")
);
