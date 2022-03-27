import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
function NavElements() {
  return (
    <NavCont>
      <Link to="/">Dashboard</Link>
      <Link to="/Create">Create Issue</Link>
      <Link to="/Assigned">Assigned Issue</Link>
    </NavCont>
  );
}

export default NavElements;
const NavCont = styled.div`
  display: flex;
  flex-direction: column;
  a {
    font-weight: 300;
    font-size: 16px;
    color: var(--light-color);
    text-decoration: none;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-bottom: 10px;
    justify-content: space-evenly;
    flex-direction: row;
  }
`;
