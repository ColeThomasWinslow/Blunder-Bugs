import React from "react";
import Logo from "./Logo";
import NavElements from "./NavElements";
import styled from "styled-components";
function NavBar() {
  return (
    <div>
      <NavBarCont>
        <Logo />
        <NavElements />
      </NavBarCont>
      <Board></Board>
    </div>
  );
}

export default NavBar;
const Board = styled.div`
  width: 100%;
  height: 24px;
  box-shadow: 0px 2px 2px #dddddd;
`;
const NavBarCont = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  box-shadow: 0px 0px 5px #dddddd;
`;
