import React from "react";
import styled from "styled-components";
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
      type: "Gold",
      amount: "20.50",
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
              <p>${element.amount}</p>
            </Top>
            <ul>
              {element.included.map((listItem) => {
                return <li>{listItem.item}</li>;
              })}
            </ul>
            <button>Select Option</button>
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
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
const Card = styled.div`
  display: flex;
  width: 90vw;
  box-shadow: 2px 0px 10px #dddddd;
  max-width: 250px;
  flex-direction: column;
  li {
    margin-bottom: 30px;
  }
`;
