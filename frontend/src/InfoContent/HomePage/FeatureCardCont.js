import React from "react";
import styled from "styled-components";
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
    <Container>
      {Features.map((feature) => {
        return (
          <FeatureCard key={feature.id}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </FeatureCard>
        );
      })}
    </Container>
  );
}

export default FeatureCardCont;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const FeatureCard = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 4px;
  flex-direction: column;
  width: 80vw;
  background: white;
  box-shadow: 2px 0px 10px #dddddd;
  margin-bottom: 18px;
  max-width: 600px;

  h3 {
    margin: 10px;
    font-weight: 300;
    margin-bottom: 0px;
  }
  p {
    font-size: 14px;
    line-height: 30px;
    border-top: 2px solid var(--light-color);
    padding-top: 10px;
    margin: 15px;
  }
`;
