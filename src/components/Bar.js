import React, { Component } from "react";
import styled from "styled-components";

class Landing extends Component {
  render() {
    return (
      <>
        <Container>
          <Text> {this.props.name} </Text>
          <OuterBar>
            <Progress />
          </OuterBar>
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

const Text = styled.p`
  font-size: 25px;
  display: flex;
  font-weight: 900;
  justify-content: center;
  font-family: "raleway-bold";
  text-transform: uppercase;
`;

const OuterBar = styled.div`
  width: 214px;
  height: 27px;
  border: 0.5px black solid;
  box-shadow: 0px 4px 56px #ffe602;
`;

const Progress = styled.div`
  width: 100%;
  height: 27px;
  /* position: absolute; */
  z-index: 2;
  border: 0.5px black solid;
  background-color: #f5bd07;
`;

export default Landing;
