import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import Login from "../src/containers/Login";
import SignUp from "../src/containers/SignUp";
import Quote from "../src/containers/Quote";
import Dashboard from "../src/containers/Dashboard";
import AdminDashboard from "../src/containers/AdminDashboard";
import Navigation from "../src/containers/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";


import "./index.css";
import App from "./App";

import { store } from './store'

ReactDOM.render(

  <Provider store={store}>
    <Router>
      <Navigation />
      <Route exact path="/" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/admin-dashboard" component={AdminDashboard} />
      <Route exact path="/create-quote" component={Quote} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
