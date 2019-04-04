import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 15%;
  height: 100px;
  margin: 3px 1.7% 0 0;
  align-items: space-between;
  margin: 50px auto;
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
