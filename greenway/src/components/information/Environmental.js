import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Styledcontainer = styled.div`
  dispaly: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid grey;
  text-align: center;
  width: 100%;
  margin: 50px auto;
`;
// 2.354 kg CO2 per litre petrol

// Diesel 2.7 kg Co2 per litre
// CNG 3kg CO2 per litre
// Each of the following activities add 1 kg of CO2 to your personal carbon footprint:

// Travel by public transportation (train or bus) a distance of 10 to 12 km (6.5 to 7 miles)
// Drive with your car a distance of 6 km or 3.75 miles (assuming 7.3 litres petrol per 100 km or 39 mpg)

const Environmental = props => {
  function carPrint() {
    const liters = props.distance / 18.2;
    const footprint = liters * 2.354;
    return Math.round(footprint * 100) / 100;
  }
  function busPrint() {
    return Math.round(props.distance * 0.1 * 100) / 100;
  }
  if (props.start && props.end) {
    return (
      <Styledcontainer>
        <div>
          Carbon footprint Emmision via Car between {props.start} and{" "}
          {props.end} is about {carPrint()} kg of CO2.
        </div>
        <div>
          Carbon footprint Emmision via Bus between {props.start} and{" "}
          {props.end} is {busPrint()} kg of CO2.
        </div>{" "}
        <div>
          Carbon footprint Emmision via Metro between {props.start} and{" "}
          {props.end} is 0kg CO2 released.
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
)(Environmental);
