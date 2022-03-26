import React from "react";
import styled from "styled-components";
import Options from "./Options";

function Pricing() {
  return (
    <Page>
      <h2 className="Title">Blunder Bugs Pricing</h2>
      <p className="sub"> Select an option below - Bronze, Silver Gold</p>
      <Options />
    </Page>
  );
}

export default Pricing;
const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  .Title {
    margin-top: 50px;
  }
  .sub {
    margin: 0px;
    margin-bottom: 80px;
  }
`;
