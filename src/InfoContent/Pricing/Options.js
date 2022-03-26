import React from "react";

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
    <div>
      {SubOptions.map((element) => {
        return (
          <div>
            <h3>{element.type}</h3>
            <p>${element.amount}</p>
            <ul>
              {element.included.map((listItem) => {
                return <li>{listItem.item}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Options;
