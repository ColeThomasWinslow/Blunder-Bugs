import React from "react";

function CreateAccountModel({ state }) {
  const Exit = () => {
    state(false);
  };
  return (
    <div className="Model">
      <button onClick={Exit}>X</button>
      <h2>Create New Account</h2>
      <input placeholder="Enter Name Here" />
      <input placeholder="Enter Email Here" />
      <input placeholder="Create New Password " />
      <input placeholder="Confirm Password Here" />
      <button>Create Account</button>
    </div>
  );
}

export default CreateAccountModel;
