import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Dropdown from "./Dropdown";
import getInfo from "../state/actionCreators";

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

  startRef = React.createRef();
  endRef = React.createRef();

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.getInfo(this.state.start, this.state.end);
    this.setState({
      start: "",
      end: ""
    });
    this.startRef.current.value = "";
    this.endRef.current.value = "";
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
                  ref={this.startRef}
                  list="types"
                  name="myType"
                  type="text"
                  id="start"
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
                  ref={this.endRef}
                  list="types"
                  name="myType"
                  type="text"
                  id="end"
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
const mapDispatchToProps = dispatch => {
  return {
    getInfo: (start, end) => dispatch(getInfo(start, end))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
