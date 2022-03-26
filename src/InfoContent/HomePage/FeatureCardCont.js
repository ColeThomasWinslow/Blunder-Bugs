import React from "react";

function FeatureCardCont() {
  const Features = [
    {
      id: 1,
      title: "Role Management",
      description:
        "Lorem and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
    },
    {
      id: 2,
      title: "Issue Creation",
      description:
        "Lorem and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
    },
    {
      id: 3,
      title: "Status Progress",
      description:
        "Lorem and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
    },
    {
      id: 4,
      title: "Priority Metrics",
      description:
        "Lorem and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
    },
    {
      id: 5,
      title: "Issues Notes",
      description:
        "Lorem and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
    },
  ];
  return (
    <div>
      {Features.map((feature) => {
        return (
          <div key={feature.id}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FeatureCardCont;
