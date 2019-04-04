import React from "react";
import styled from "styled-components";

import metro from "../../images/metro.jpg";

const StyledImg = styled.img`
  width: 100%;
`;
export default function Metromap() {
  return (
    <div>
      <StyledImg src={metro} alt="metro" />
    </div>
  );
}
