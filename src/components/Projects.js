import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
class Projects extends React.Component {
  render() {
    return (
      <Container>
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
