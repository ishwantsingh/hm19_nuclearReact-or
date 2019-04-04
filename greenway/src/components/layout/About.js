import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
  div {
    font-size: 2.2rem;
    font-weight: bold;
  }
`;
const About = () => {
  return (
    <StyledContainer>
      <div>Select your starting point and final destination for the Route!</div>
    </StyledContainer>
  );
};

export default About;
