import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CreateAccountModel from "./AuthModels/CreateAccountModel";
import LoginModel from "./AuthModels/LoginModel";

function NavElements() {
  const [Login, setLogin] = useState(false);
  const [CreateNew, setCreateNew] = useState(false);
  return (
    <ElementsCont>
      <LinkCont>
        <Link to="/GettingStarted">Getting Started</Link>
        <Link to="/Pricing">Pricing</Link>
        <button className="Create" onClick={() => setCreateNew(!CreateNew)}>
          Create Account
        </button>
        <button className="Login" onClick={() => setLogin(!Login)}>
          Login
        </button>
      </LinkCont>
      <div
        className={(Login === true) | (CreateNew === true) ? "ModelScreen" : ""}
      >
        {Login && <LoginModel state={setLogin} />}
        {CreateNew && <CreateAccountModel state={setCreateNew} />}
      </div>
    </ElementsCont>
  );
}

export default NavElements;
const LinkCont = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  max-width: 500px;
  align-items: center;
  .Create {
    background: var(--light-color);
    border: none;
    font-weight: 300;
    font-size: 12px;
    width: 120px;
    padding: 4px;
    border-radius: 5px;
    color: white;
  }
  .Login {
    font-size: 12px;
    font-weight: 300;
    background: var(--dark-color);
    color: white;
    border: none;
    width: 80px;
    padding: 4px;
    border-radius: 5px;
  }
`;
const ElementsCont = styled.div`
  display: flex;
  width: 60%;
  justify-content: flex-end;

  a {
    font-weight: 200;
    font-size: 14px;
    color: var(--light-color);
    text-decoration: none;
  }
`;
