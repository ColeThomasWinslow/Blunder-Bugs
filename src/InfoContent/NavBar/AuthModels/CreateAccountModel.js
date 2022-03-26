import React from "react";
import styled from "styled-components";
function CreateAccountModel({ state }) {
  const Exit = () => {
    state(false);
  };
  return (
    <Model className="Model">
      <Top>
        <h2>Create New Account</h2>{" "}
        <button className="Exit" onClick={Exit}>
          X
        </button>
      </Top>
      <p>Please create an account</p>
      <input placeholder="Enter Name Here" />
      <input placeholder="Enter Email Here" />
      <input placeholder="Create New Password " />
      <input placeholder="Confirm Password Here" />
      <button className="submit">Create Account</button>
    </Model>
  );
}

export default CreateAccountModel;
const Model = styled.div`
  padding: 15px;
  p {
    margin: 0px;
    font-weight: 200;
    margin-bottom: 10px;
  }
  input {
    padding: 8px;
    font-size: 14px;
    margin: 10px;
    width: 70%;
  }
  .Exit {
    margin-left: 20px;
    width: 25px;
    height: 25px;
    background: grey;
    border: none;
    color: white;
    border-radius: 50%;
  }
  .submit {
    background: var(--light-color);
    color: white;
    border: none;
    width: 70%;
    border-radius: 4px;
    padding: 8px;
    margin: 20px;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
