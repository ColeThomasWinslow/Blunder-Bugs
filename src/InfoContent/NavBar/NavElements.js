import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateAccountModel from "./AuthModels/CreateAccountModel";
import LoginModel from "./AuthModels/LoginModel";

function NavElements() {
  const [Login, setLogin] = useState(false);
  const [CreateNew, setCreateNew] = useState(false);
  return (
    <div>
      <Link to="/GettingStarted">Getting Started</Link>
      <Link to="/Pricing">Pricing</Link>
      <button onClick={() => setCreateNew(!CreateNew)}>Create Account</button>
      <button onClick={() => setLogin(!Login)}>Login</button>
      <div
        className={(Login === true) | (CreateNew === true) ? "ModelScreen" : ""}
      >
        {Login && <LoginModel state={setLogin} />}
        {CreateNew && <CreateAccountModel state={setCreateNew} />}
      </div>
    </div>
  );
}

export default NavElements;
