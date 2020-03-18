import React, { Component } from "react";
import Bar from "./Bar";
import Git from "../icons/Git.png";
import CSS3 from "../icons/CSS3.png";
import HTMLLogo from "../icons/HTMLLogo.png";
import JavasciptLogo from "../icons/JS.png";
import ReactLogo from "../icons/React.png";
import BataRang from "../icons/batarang.png";
import dj from "../icons/dj.png";
import NodeIcon from "../icons/node.png";
import python from "../icons/python.png";
import styled from "styled-components";

class Landing extends Component {
  render() {
    return (
      <>
        <Container>
          <TitleDiv>
            <Title> Technologies </Title>
            <BataRangIcon src={BataRang} />
          </TitleDiv>
          <TechDiv>
            <LogoContainer>
              <Img src={ReactLogo} alt="React" />
              <Bar name="React" />
            </LogoContainer>
            <LogoContainer>
              {" "}
              <Img src={JavasciptLogo} alt="JavaScript" />
              <Bar name="JavaScript" />
            </LogoContainer>
            <LogoContainer>
              {" "}
              <Img src={python} alt="" />
              <Bar name="Python" />
            </LogoContainer>
            <LogoContainer>
              {" "}
              <Img src={dj} alt="" />
              <Bar name="Django" />
            </LogoContainer>
            <LogoContainer>
              {" "}
              <Img src={NodeIcon} alt="" />
              <Bar name="Node" />
            </LogoContainer>
            <LogoContainer>
              {" "}
              <Img src={HTMLLogo} alt="" />
              <Bar name="HTML" />
            </LogoContainer>
            <LogoContainer>
              {" "}
              <Img src={CSS3} alt="" />
              <Bar name="CSS3" />
            </LogoContainer>
            <LogoContainer>
              {" "}
              <Img src={Git} alt="" />
              <Bar name="GIT" />
            </LogoContainer>
          </TechDiv>
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  flex-wrap: wrap;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px;
`;

const TechDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Title = styled.p`
  color: black;
  font-family: Bangers;
  font-size: 37px;
  margin: 0;
`;
const Img = styled.img`
  width: 5em;
  display: flex;
  margin-right: 20px;
  justify-content: center;
`;
const BataRangIcon = styled.img`
  width: 8em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Landing;
