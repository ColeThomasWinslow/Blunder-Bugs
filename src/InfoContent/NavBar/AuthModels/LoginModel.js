import React from "react";

function LoginModel({ state }) {
  console.log(state);
  const Exit = () => {
    state(false);
  };
  return (
    <div className="Model">
      <button onClick={Exit}>X</button>
      <h2>Login</h2>

      <input placeholder="Enter Email" />
      <input placeholder="Enter Password " />

      <button>Login</button>
    </div>
  );
}

export default LoginModel;
