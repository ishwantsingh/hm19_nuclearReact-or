import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Styledcontainer = styled.div`
  dispaly: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin: 50px 7%;
  font-size: 1.3rem;
  text-align: left;
`;

//average fuel efficiency = 18.2km/l and petrol price: 72.6rs/lt
// average price of petrol per km = 4rs

const Financial = props => {
  function carFuel() {
    if (props.difference === 0) {
      let cost = 0;
      return Math.round(cost);
    } else {
      let cost = props.distance * 7.5;
      return Math.round(65 + cost);
    }
  }
  function metroCost() {
    if (props.difference === 1) {
      var cost = 10;
    } else if (props.difference === 0) {
      var cost = 0;
    } else if (props.difference === 2 || props.difference === 3) {
      var cost = 20;
    } else if (
      props.difference === 4 ||
      props.difference === 5 ||
      props.difference === 6 ||
      props.difference === 7 ||
      props.difference === 8 ||
      props.difference === 9 ||
      props.difference === 10
    ) {
      var cost = 30;
    } else if (props.difference >= 11) {
      var cost = 40;
    }
    return Math.round(cost);
  }
  if (props.start && props.end) {
    return (
      <Styledcontainer>
        <div>
          Travelling Cost via Car between {props.start} and {props.end} is about{" "}
          {carFuel()}Rs.
        </div>
        <div>
          Travelling Cost via Bus between {props.start} and {props.end} is{" "}
          {metroCost() / 2}Rs.
        </div>{" "}
        <div>
          Travelling Cost via Metro between {props.start} and {props.end} is
          {metroCost()}Rs.
        </div>
      </Styledcontainer>
    );
  } else {
    return (
      <Styledcontainer>
        <div>Please Select Options</div>
      </Styledcontainer>
    );
  }
};
function mapStateToProps(state) {
  return {
    distance: state.distance,
    start: state.start,
    end: state.end,
    difference: Math.abs(state.startIndex - state.endIndex)
  };
}

export default connect(
  mapStateToProps,
  null
)(Financial);
