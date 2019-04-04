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

const Financial = () => {
  return <Styledcontainer>financial yummy info</Styledcontainer>;
};

export default Financial;
