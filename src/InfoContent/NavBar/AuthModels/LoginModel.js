import React from "react";
import styled from "styled-components";
function LoginModel({ state }) {
  console.log(state);
  const Exit = () => {
    state(false);
  };
  return (
    <Model className="Model">
      <Top>
        <h2>Login </h2>
        <button className="Exit" onClick={Exit}>
          X
        </button>
      </Top>
      <p>Sign into your account</p>
      <input placeholder="Enter Email" />
      <input placeholder="Enter Password " />
      <p className="Demo">Login With Demo Info</p>
      <button className="submit">Login</button>
    </Model>
  );
}

export default LoginModel;
const Model = styled.div`
  padding: 15px;
  p {
    margin: 0px;
    font-weight: 200;
    margin-bottom: 10px;
  }
  .Demo {
    font-size: 14px;
    margin-top: 20px;
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
  width: 70%;
  justify-content: flex-start;
  h2 {
    flex: 1;
  }
`;
