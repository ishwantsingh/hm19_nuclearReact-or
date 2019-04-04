import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 22%;
  height: 100px;
  align-items: space-between;
  margin-top: 40px;
  margin-left: 10%;
  .btn {
    background-color: rgb(43, 187, 173);
  }
`;

function Switchbar() {
  return (
    <Div>
      <Link to="/financial" className="waves-effect btn">
        <span> Financial Info</span>
      </Link>
      <Link to="/environmental" className="waves-effect btn">
        <span> Environmental Info</span>
      </Link>
    </Div>
  );
}
export default Switchbar;
