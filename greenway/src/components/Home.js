import React from "react";
import styled from "styled-components";
import connect from "react-redux";

import Dropdown from "./Dropdown";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
class Home extends React.Component {
  state = {
    start: "",
    end: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("boo");
  };
  render() {
    return (
      <StyledContainer>
        <Form onSubmit={this.handleSubmit}>
          <div>
            <h5>Select Starting Point</h5>
            <div className="input-field">
              <label htmlFor="type">
                <input
                  list="types"
                  name="myType"
                  type="text"
                  id="type"
                  placeholder="Select Station:"
                  onChange={this.handleChange}
                />
              </label>
              <Dropdown />
            </div>
          </div>
          <div>
            <h5>Select Destination</h5>
            <div className="input-field">
              <label htmlFor="type">
                <input
                  list="types"
                  name="myType"
                  type="text"
                  id="type"
                  placeholder="Select Station:"
                  onChange={this.handleChange}
                />
              </label>
              <Dropdown />
            </div>
          </div>
          <div className="input-field">
            <button>Show Info</button>
          </div>
        </Form>
      </StyledContainer>
    );
  }
}

export default connect(
  st => st,
  null
)(Home);
