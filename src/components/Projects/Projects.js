import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import ScrollableAnchor from "react-scrollable-anchor";

class Projects extends React.Component {
  render() {
    return (
      <Container>
        <ScrollableAnchor id={"Projects"}>
          <Title> Projects </Title>
        </ScrollableAnchor>
        <Carousel />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 73%;
`;

const Title = styled.p`
  color: black;
  font-family: Bangers;
  font-size: 37px;
  margin: 0;
`;

export default Projects;
