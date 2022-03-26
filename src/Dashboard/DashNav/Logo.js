import React from "react";
import { Link } from "react-router-dom";
import BBLogo from "../../Icons/BlunderBugsLogo.svg";
function Logo() {
  return (
    <Link to="/">
      <img src={BBLogo} alt="Blunder Bugs Logo" />
    </Link>
  );
}

export default Logo;
