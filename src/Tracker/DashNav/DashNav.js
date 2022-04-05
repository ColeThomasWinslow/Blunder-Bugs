import React from "react";
import Logo from "./Logo";
import NavElements from "./NavElements";
import styled from "styled-components";
function DashNav() {
  return (
    <DashNavCont>
      <Logo />
      <NavElements />
    </DashNavCont>
  );
}

export default DashNav;
const DashNavCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  background: #f8f8f8;
  padding-left: 10px;
  padding-right: 10px;
  z-index: 2;
  align-items: center;
  height: 100vh;
  box-shadow: 0px 4px 5px #dddddd;
  .Logo {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    padding: 0px;
    justify-content: center;
    flex-direction: row;
  }
`;
