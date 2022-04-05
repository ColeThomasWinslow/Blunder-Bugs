import React from "react";
import styled from "styled-components";
import SmallLogo from "../../Icons/SmallLogo.svg";
function Options() {
  const SubOptions = [
    {
      id: 1,
      type: "Bronze",
      amount: "20.50",
      included: [
        { id: 1, item: "fdjfjd sbs jbvj" },
        { id: 2, item: "fdjfjd sbs jbvj" },
        { id: 3, item: "fdjfjd sbs jbvj" },
        { id: 4, item: "fdjfjd sbs jbvj" },
      ],
    },
    {
      id: 1,
      type: "Silver",
      amount: "36.80",
      included: [
        { id: 1, item: "fdjfjd sbs jbvj" },
        { id: 2, item: "fdjfjd sbs jbvj" },
        { id: 3, item: "fdjfjd sbs jbvj" },
        { id: 4, item: "fdjfjd sbs jbvj" },
      ],
    },
    {
      id: 1,
      type: "Gold",
      amount: "42.00",
      included: [
        { id: 1, item: "fdjfjd sbs jbvj" },
        { id: 2, item: "fdjfjd sbs jbvj" },
        { id: 3, item: "fdjfjd sbs jbvj" },
        { id: 4, item: "fdjfjd sbs jbvj" },
      ],
    },
  ];
  return (
    <Container>
      {SubOptions.map((element) => {
        return (
          <Card>
            <Top>
              <h3>{element.type}</h3>
              <p>${element.amount} /month</p>
            </Top>
            <ul>
              {element.included.map((listItem) => {
                return <li>{listItem.item}</li>;
              })}
            </ul>
            <div className="BtnCont">
              <button>
                Select Option <img width="25px" src={SmallLogo} alt="check" />
              </button>
            </div>
          </Card>
        );
      })}
    </Container>
  );
}

export default Options;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  p {
    background: var(--light-color);
    color: white;
    font-size: 14px;
    padding: 5px;
    width: 100px;
    text-align: center;
    border-radius: 5px;
    margin-left: 20px;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const Card = styled.div`
  display: flex;
  width: 90vw;
  box-shadow: 2px 0px 10px #dddddd;
  max-width: 270px;
  margin: 10px;
  flex-direction: column;
  border-radius: 4px;
  li {
    font-weight: 200;
    margin-bottom: 30px;
  }
  .BtnCont {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: none;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    width: 70%;
    background: var(--dark-color);
    color: white;
    margin-bottom: 20px;
  }
`;
