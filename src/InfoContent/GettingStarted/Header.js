import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <GetStartedBox>
      <h3>Get started with Blunder Bugs</h3>
      <p>
        Blunder Bugs works by creating different roles within the company.
        Manager, admin, and developers. Each role has has certain permissions
        for projects that are created but provides a great way to attack the
        issues within the software being worked on.
      </p>
      <p>It's fast, flexible, and reliable - Fix issues properly</p>
    </GetStartedBox>
  );
}

export default Header;
const GetStartedBox = styled.div`
  border: 2px solid var(--dark-color);
  box-shadow: 0px 5px 10px #dddddd;
  border-radius: 10px;
  margin: 25px;
  display: flex;
  color: white;
  background: var(--dark-color);
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  h3 {
    width: 90%;
    padding-bottom: 14px;
    border-bottom: 2px solid var(--light-color);
    margin: 5px;
    margin-top: 20px;
  }
  p {
    font-weight: 200;
    margin: 8px;
    width: 90%;
    font-size: 16px;
  }
`;
