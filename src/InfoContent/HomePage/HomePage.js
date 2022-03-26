import React from "react";
import { Link } from "react-router-dom";
import FeatureCardCont from "./FeatureCardCont";
import OverviewCard from "./OverviewCard";

function HomePage() {
  return (
    <div>
      <h2>TRACK YOUR SOFTWARE DEVELOPMENT WORKFLOW</h2>
      <p>Blunder Bugs is the number one bug tracking software</p>
      <Link to="/GettingStarted">Start Tracking Now</Link>
      <div>
        <OverviewCard />
        <FeatureCardCont />
      </div>
    </div>
  );
}

export default HomePage;
