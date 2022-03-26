import React from "react";
import AssignRoles from "./AssignRoles";
import CreateRoles from "./CreateRoles";
import Header from "./Header";
import MakingIssues from "./MakingIssues";
import TrackingDev from "./TrackingDev";

function GettingStarted() {
  return (
    <div>
      <Header />
      <CreateRoles />
      <AssignRoles />
      <MakingIssues />
      <TrackingDev />
    </div>
  );
}

export default GettingStarted;
