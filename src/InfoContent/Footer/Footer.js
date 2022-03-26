import React from "react";
import { Link } from "react-router-dom";
import BBLogo from "../../Icons/BlunderBugsLogo.svg";
function Footer() {
  return (
    <div>
      <Link to="/">
        <img src={BBLogo} alt="Blunder Bugs Logo" />
      </Link>
      <div>
        <img src="/" alt="Facebook" />
        <img src="/" alt="Linkedin" />
      </div>
      <p>© Copyright 2022, Blunder Bugs LLC. All rights reserved.</p>
    </div>
  );
}

export default Footer;
