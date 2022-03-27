import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BBLogo from "../../Icons/BlunderBugsLogo.svg";
function Logo() {
  return (
    <LogoCont>
      <Link to="/">
        <img src={BBLogo} alt="Blunder Bugs Logo" />
      </Link>
    </LogoCont>
  );
}

export default Logo;
const LogoCont = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-start;
  img {
    margin: 10px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;
