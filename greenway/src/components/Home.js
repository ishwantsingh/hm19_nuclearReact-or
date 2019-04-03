import React from "react";
import styled from "styled-components";

import Dropdown from "./Dropdown";

const StyledContainer = styled.div`
  display: flex;
`;
const Form = styled.form`
  display: flex;
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
          <h5>Select Starting Point</h5>

          <div className="input-field">
            <label htmlFor="type">
              <input
                list="types"
                name="myType"
                type="text"
                id="type"
                placeholder="Select Post Type:"
                onChange={this.handleChange}
              />
            </label>
            <Dropdown />
          </div>
          <br />
          <h5>Select Destination</h5>

          <div className="input-field">
            <label htmlFor="type">
              <input
                list="types"
                name="myType"
                type="text"
                id="type"
                placeholder="Select Post Type:"
                onChange={this.handleChange}
              />
            </label>
            <Dropdown />
          </div>
          <div className="input-field">
            <button>Show Info</button>
          </div>
        </Form>
      </StyledContainer>
    );
  }
}

export default Home;
