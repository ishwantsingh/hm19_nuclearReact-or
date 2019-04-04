import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Financial from "./Financial";
import Environmental from "./Environmental";

const Container = styled.div`
  dispaly: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid grey;
  tex-align: center;
  width: 100%;
`;

const Information = () => {
  return (
    <Container>
      <div>
        <Financial />
      </div>
      <div>
        <Environmental />
      </div>
    </Container>
  );
};

export default Information;
