import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { connect } from "react-redux";
// import { compose } from "redux";
import styled from "styled-components";

import "./App.css";

import Headbar from "./components/layout/Headbar";
import About from "./components/layout/About";
import Home from "./components/Home";
//import Information from "./components/information/Information";
import Financial from "./components/information/Financial";
import Environmental from "./components/information/Environmental";
import Switchbar from "./components/layout/Switchbar";

const Conatainer = styled.div`
  margin: 0 auto;
`;
const StyledDiv = styled.div`
  margin: 0 2%;
  .data {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Conatainer>
          <Headbar />
          <StyledDiv>
            <About />
            <Home />
            <br />
            <br />
            <br />

            <div className="data">
              <Switchbar />
              <Switch>
                <Route exact path="/financial" component={Financial} />
                <Route exact path="/environmental" component={Environmental} />
              </Switch>
            </div>
          </StyledDiv>
        </Conatainer>
      </Router>
    );
  }
}

export default App;
