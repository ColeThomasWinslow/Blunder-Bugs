import React from "react";
import styled from "styled-components";
import SearchIcon from "../Icons/Search.svg";
function TopBar() {
  return (
    <TopBarCont>
      <div className="SearchBox">
        <input placeholder="Search " />
        <img src={SearchIcon} alt="search" />
      </div>
      <div className="Info">
        <p className="Name">Username</p>
        <button>Logout</button>
      </div>
    </TopBarCont>
  );
}

export default TopBar;
const TopBarCont = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #f8f8f8;
  justify-content: flex-end;
  width: 100%;
  flex-wrap: wrap-reverse;
  box-shadow: 0px 0px 8px #dddddd;
  button {
    font-size: 12px;
    box-shadow: 0px 0px 4px #dddddd;
    background: var(--light-color);
    color: white;
    border: none;
    width: 80px;
    padding: 4px;
    border-radius: 5px;
  }
  input {
    border-radius: 5px;
    padding: 6px;
    width: 220px;
    margin-right: 10px;
    font-size: 14px;
    background: #e6e6e6;
    font-weight: 300;
    box-shadow: 0px 0px 2px #dddddd;
    border: none;
  }
  .SearchBox {
    flex: 1;
    margin-left: 40px;
    display: flex;
    align-items: center;
  }
  .Info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
  }
  .Name {
    margin-right: 30px;
    font-weight: bold;
    font-size: 12px;
  }
  @media only screen and (max-width: 600px) {
    justify-content: center;
    padding-top: 10px;
    .SearchBox {
      flex: 0;
      margin-top: 10px;
      margin-bottom: 5px;
    }
  }
`;
