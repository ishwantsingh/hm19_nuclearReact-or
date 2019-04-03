import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { connect } from "react-redux";
// import { compose } from "redux";
import styled from "styled-components";

import "./App.css";

import Headbar from "./components/layout/Headbar";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Headbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
