import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Facebook from "../../Icons/Facebook.svg";
import Linkedin from "../../Icons/linkedin.svg";
import BBLogo from "../../Icons/BlunderBugsLogo.svg";
function Footer() {
  return (
    <FooterCont>
      <SocialCont>
        <Link to="/">
          <img src={BBLogo} alt="Blunder Bugs Logo" />
        </Link>
        <img src={Facebook} alt="Facebook" />
        <img src={Linkedin} alt="Linkedin" />
      </SocialCont>

      <p>© Copyright 2022, Blunder Bugs LLC. All rights reserved.</p>
    </FooterCont>
  );
}

export default Footer;
const FooterCont = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin-top: 50px;
  box-shadow: 0px 0px 10px #dddddd;
  p {
    width: 100%;
    margin: 0px;
    text-align: center;
    font-size: 12px;
    color: grey;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 10px;
    box-shadow: 0px 0px 10px #dddddd;
  }
`;
const SocialCont = styled.div`
  width: 90vw;
  max-width: 400px;
  display: flex;
  margin-bottom: 10px;
  justify-content: space-evenly;
`;
