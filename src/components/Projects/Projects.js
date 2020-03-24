import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import ScrollableAnchor from "react-scrollable-anchor";
import Arrow from '../../icons/arrow.png'

class Projects extends React.Component {
  render() {
    return (
      <Container>
        <AligningTitle> 
          <ScrollableAnchor id={"Projects"}>
            <Title> Projects </Title>
          </ScrollableAnchor>
          <HoverHelper> 
            <DownArrow src = {Arrow} alt = "arrow pointing down" />
            <Text> hover video to play</Text>
          </HoverHelper>
        </AligningTitle>
        <Carousel />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const AligningTitle = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const Title = styled.p`
  color: black;
  font-family: Bangers;
  font-size: 68px;
  display: flex;
  justify-content: flex-end;
`;

const HoverHelper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-right: 22px;
`

const DownArrow = styled.img`
  height: 2.4em;
  margin-right: 13px;
`
const Text = styled.p`
  color: black;
  font-family: Bangers;
  font-size: 25px;
  margin-bottom: 20px;
`

export default Projects;
