import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Dashboard from "../../Icons/Dashboard.svg";
import Roles from "../../Icons/Roles.svg";
import Projects from "../../Icons/Projects.svg";
import SingleProject from "../../Icons/SingleProject.svg";
import Issue from "../../Icons/Issue.svg";
import User from "../../Icons/User.svg";
function NavElements() {
  return (
    <NavCont>
      <Link to="/">
        <img src={Dashboard} alt="Dashboard" />
        <span>Dashboard</span>
      </Link>
      <Link to="/Roles">
        <img src={Roles} alt="Roles" />
        <span> Manage Roles</span>
      </Link>

      <Link to="/Projects">
        <img src={Projects} alt="Projects" />
        <span> Manage Projects</span>
      </Link>
      <Link to="/MyProjects">
        <img src={SingleProject} alt="Projects" />
        <span>My Projects</span>
      </Link>
      <Link to="/Issues">
        <img src={Issue} alt="Issue" />
        <span>My Issues</span>
      </Link>

      <Link to="/User">
        <img src={User} alt="User" />
        <span>User Profile</span>
      </Link>
    </NavCont>
  );
}

export default NavElements;
const NavCont = styled.div`
  display: flex;
  flex-direction: column;

  a {
    margin-top: 45px;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    color: var(--light-color);
    text-decoration: none;
  }
  img {
    width: 16px;
    margin-right: 20px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-bottom: 10px;
    justify-content: space-evenly;
    flex-direction: row;
    span {
      display: none;
    }
  }
`;
