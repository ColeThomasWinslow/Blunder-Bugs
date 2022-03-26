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
const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  width: 90vw;
  max-width: 600px;
`;
