import React from "react";
import AssignRoles from "./AssignRoles";
import CreateRoles from "./CreateRoles";
import Header from "./Header";
import MakingIssues from "./MakingIssues";
import TrackingDev from "./TrackingDev";
import styled from "styled-components";
function GettingStarted() {
  return (
    <Page>
      <HeaderCont>
        <h2 className="Title">Documentation</h2>
        <p className="sub">Learn Blunder Bugs to get started tracking issues</p>
      </HeaderCont>
      <Board></Board>
      <Content>
        <Header />
        <CreateRoles />
        <AssignRoles />
        <MakingIssues />
        <TrackingDev />
      </Content>
    </Page>
  );
}

export default GettingStarted;
const Board = styled.div`
  width: 100%;
  height: 24px;
  box-shadow: 0px 0px 8px #dddddd;
  margin-bottom: 30px;
`;
const HeaderCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 1px;
  background: white;
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
const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  width: 90vw;
  margin-top: 20px;
  max-width: 900px;
  p {
    line-height: 30px;
  }
`;
