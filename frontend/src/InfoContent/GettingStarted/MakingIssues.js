import React from "react";
import styled from "styled-components";
function MakingIssues() {
  return (
    <Container>
      <h3>Adding New Issues</h3>
      <p>
        Blunder Bugs works by creating different roles within the company.
        Manager, admin, and developers. Each role has has certain permissions
        for projects that are created but provides a great way to attack the
        issues within the software being worked on.
      </p>
    </Container>
  );
}

export default MakingIssues;
const Container = styled.div`
  border-radius: 10px;
  margin: 25px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0px 10px #dddddd;
  padding-bottom: 20px;
  h3 {
    font-weight: 300;
    width: 90%;
    margin: 5px;
    margin-top: 20px;
    padding-bottom: 14px;
    border-bottom: 2px solid var(--light-color);
  }
  p {
    font-weight: 200;
    margin: 8px;
    width: 90%;
    font-size: 16px;
  }
`;
