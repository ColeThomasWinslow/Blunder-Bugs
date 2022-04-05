import React from "react";
import styled from "styled-components";
function TrackingDev() {
  return (
    <Container>
      <h3>Track Progress</h3>
      <p>
        Blunder Bugs works by creating different roles within the company.
        Manager, admin, and developers. Each role has has certain permissions
        for projects that are created but provides a great way to attack the
        issues within the software being worked on.
      </p>
      <p>High Priority Medium Priority Low Priority</p>
    </Container>
  );
}

export default TrackingDev;
const Container = styled.div`
  border-radius: 10px;
  margin: 25px;
  display: flex;
  background: white;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0px 10px #dddddd;
  padding-bottom: 20px;
  h3 {
    font-weight: 300;
    width: 90%;
    margin: 5px;
    padding-bottom: 14px;
    border-bottom: 2px solid var(--light-color);
    margin-top: 20px;
  }
  p {
    font-weight: 200;
    margin: 8px;
    width: 90%;
    font-size: 16px;
  }
`;
