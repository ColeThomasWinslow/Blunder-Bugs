import React from "react";
import { Link } from "react-router-dom";
import BBLogo from "../../Icons/BlunderBugsLogo.svg";
function Logo() {
  return (
    <>
      <img
        className="Logo"
        width="155px"
        src={BBLogo}
        alt="Blunder Bugs Logo"
      />
    </>
  );
}

export default Logo;
