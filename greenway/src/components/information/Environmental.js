import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Styledcontainer = styled.div`
  dispaly: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 0px;
  margin-right: 7%;
  margin-left: 6.1%;
  div {
    font-size: 1.6rem;
    margin-bottom: 30px;
    span {
      font-weight: bold;
    }
  }
  font-size: 1.3rem;
  text-align: left;
  .no-data-div {
    text-align: center;
    margin-right: 36%;
  }
  table {
    width: 70%;
    th {
      text-align: center;
    }
    td {
      text-align: center;
    }
  }
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
      <Styledcontainer className="card-action">
        <div className="card-text">
          Environmental Information for route between <span>{props.start}</span>{" "}
          and <span>{props.end}</span> :{" "}
        </div>
        <table className="striped highlight">
          <thead>
            <tr>
              <th>Transport</th>
              <th>Carbon Emmision</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Car</td>
              <td>{carPrint()} kg of CO2</td>
            </tr>
            <tr>
              <td>Bus</td>
              <td>{busPrint()} kg of CO2</td>
            </tr>
            <tr>
              <td>Metro</td>
              <td>0 kg of CO2</td>
            </tr>
          </tbody>
        </table>
      </Styledcontainer>
    );
  } else {
    return (
      <Styledcontainer>
        <div className="no-data-div">Please Select Stations</div>
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
