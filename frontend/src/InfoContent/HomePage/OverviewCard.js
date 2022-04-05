import React from "react";
import styled from "styled-components";
function OverviewCard() {
  return (
    <FeatureCard>
      <h3>Tracker Features</h3>
      <p>- Role Management</p>
      <p>- Issue Creation</p>
      <p>- Status Progress</p>
      <p>- Priority Metrics</p>
      <p>- Issues Notes</p>
    </FeatureCard>
  );
}

export default OverviewCard;
const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--dark-color);
  width: 90vw;
  border-radius: 2px;
  border: 2px solid var(--light-color);
  max-width: 200px;
  padding: 10px;
  color: white;

  padding-left: 20px;
  p {
    font-weight: 200;
  }
  @media only screen and (max-width: 1000px) {
    max-width: 50vw;
    margin-bottom: 20px;
  }
`;
