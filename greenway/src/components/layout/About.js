import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  text-align: center;
`;
const About = () => {
  return (
    <StyledContainer>
      <h1>Welcome to Green Way!</h1>
      <p>
        Select your starting point and final destination for the route below and
        click the button below to get some yummy info
      </p>
    </StyledContainer>
  );
};

export default About;
