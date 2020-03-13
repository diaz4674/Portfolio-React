import React, { Component } from "react";
import Git from "../icons/Git.png";
import CSS3 from "../icons/CSS3.png";
import HTMLLogo from "../icons/HTMLLogo.png";
import JavasciptLogo from "../icons/JS.png";
import ReactLogo from "../icons/React.png";
import dj from "../icons/dj.webp";
import NodeIcon from "../icons/node.png";
import python from "../icons/python.png";
import styled from "styled-components";

class Landing extends Component {
  render() {
    return (
      <>
        <Container>
          {/* <Television>
            <BlueScreen> */}
          <LogoContainer>
            <Img src={ReactLogo} alt="" /> <Text> React </Text>
          </LogoContainer>
          <LogoContainer>
            {" "}
            <Img src={JavasciptLogo} alt="" /> <Text> JavaScript </Text>{" "}
          </LogoContainer>
          <LogoContainer>
            {" "}
            <Img src={python} alt="" /> <Text> Python </Text>{" "}
          </LogoContainer>
          <LogoContainer>
            {" "}
            <Img src={dj} alt="" /> <Text> Django</Text>{" "}
          </LogoContainer>
          <LogoContainer>
            {" "}
            <Img src={NodeIcon} alt="" /> <Text> Node</Text>{" "}
          </LogoContainer>
          <LogoContainer>
            {" "}
            <Img src={HTMLLogo} alt="" /> <Text> HTML5</Text>{" "}
          </LogoContainer>
          <LogoContainer>
            {" "}
            <Img src={CSS3} alt="" /> <Text> CSS3</Text>{" "}
          </LogoContainer>
          <LogoContainer>
            {" "}
            <Img src={Git} alt="" /> <Text> Git </Text>{" "}
          </LogoContainer>
          {/* </BlueScreen>
          </Television> */}
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  flex-wrap: wrap;
`;

// const Television = styled.div`
//   z-index: -2;
//   background-color: black;
//   width: 90%;
//   position: relative;
//   display: flex;
//   justify-content: center;
// `;
// const BlueScreen = styled.div`
//   z-index: -1;
//   background-color: blue;
//   width: 80%;
//   position: relative;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: center;
// `;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 130px;
  margin: 15px;
`;
const Text = styled.p`
  font-size: 25px;
  padding: 10px;
  display: flex;
  font-weight: 900;
  justify-content: center;
  font-family: "raleway-bold";
  text-transform: uppercase;
`;

const Img = styled.img`
  width: 8em;
  display: flex;
  justify-content: center;
`;

export default Landing;
