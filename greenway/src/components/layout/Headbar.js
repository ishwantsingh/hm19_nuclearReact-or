import React from "react";
import { Link } from "react-router-dom";
//import { connect } from "react-redux";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  height: 53px;
  background-color: rgb(124, 252, 0);
  a {
    margin-right: 3%;
    margin-left: 5.8%;
    text-decoration: none;
  }
  .logo {
    color: white;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

const Headbar = () => {
  return (
    <StyledDiv>
      <Link to="/" className="logo">
        Green Way!
      </Link>
    </StyledDiv>
  );
};

export default Headbar;
