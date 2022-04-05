import React from "react";
import { Link } from "react-router-dom";
import SmLogo from "../../Icons/SmallLogo.svg";
import FeatureCardCont from "./FeatureCardCont";
import OverviewCard from "./OverviewCard";
import styled from "styled-components";
function HomePage() {
  return (
    <>
      <Hero className="Hero">
        <div>
          <h2>TRACK YOUR SOFTWARE DEVELOPMENT WORKFLOW</h2>
          <p>Blunder Bugs is the number one bug tracking software</p>
          <Link to="/GettingStarted">
            Start Tracking Now <img width="35px" src={SmLogo} alt="Checks" />
          </Link>
        </div>
      </Hero>
      <Board></Board>
      <Bottom>
        <Container>
          <OverviewCard />
          <FeatureCardCont />
        </Container>
      </Bottom>
    </>
  );
}

export default HomePage;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -60px;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  width: 95%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: baseline;
`;
const Hero = styled.div`
  height: 480px;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 35px;

    text-align: right;
    margin: 0px;
  }
  p {
    text-align: right;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-decoration: none;
    background: var(--dark-color);
    color: white;
    padding: 5px;
    width: 250px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 5px;
  }
  div {
    display: flex;
    margin-bottom: 50px;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;
    width: 70%;
  }
`;
const Board = styled.div`
  width: 100%;
  height: 24px;

  box-shadow: 0px 8px 8px #dddddd;
`;
