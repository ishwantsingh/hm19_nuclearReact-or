import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 15%;
  height: 100px;
  align-items: space-between;
  border: 1px solid black;
  margin: 50px auto;
`;

function Switchbar() {
  return (
    <Nav>
      <Link to="/financial">Financial Info</Link>
      <Link to="/Environmental">Environmental Info</Link>
    </Nav>
  );
}
export default Switchbar;
