import React from "react";
import styled from "styled-components";
import Options from "./Options";

function Pricing() {
  return (
    <Page>
      <Header>
        <h2 className="Title">Blunder Bugs Pricing</h2>
        <p className="sub"> Select an option below - Bronze, Silver, Gold.</p>
      </Header>
      <Board></Board>
      <Options />
    </Page>
  );
}

export default Pricing;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 1px;
  background: white;
`;
const Board = styled.div`
  width: 100%;
  height: 24px;
  box-shadow: 0px 0px 8px #dddddd;
  margin-bottom: 30px;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  .Title {
    font-weight: 300;
    margin-top: 50px;
  }
  .sub {
    font-weight: 200;
    margin: 0px;
    margin-bottom: 40px;
  }
`;
