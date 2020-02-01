import React, { Component } from "react";
import BatmanLego from "../images/BatmanLego.jpg";
import styled from "styled-components";
import Portrait from "./Portrait";

class Landing extends Component {
  componentDidMount() {
    console.log("landing");
  }
  render() {
    return (
      <>
        <Head>
          <Batman src={BatmanLego} />
          <ProfileDiv>
            {/* <Me src={me} /> */}
            <Name> Miguel </Name>
            <Name2> Diaz</Name2>
          </ProfileDiv>
        </Head>
        <AboutMe>
          <AboutText>
            <Title>About Me</Title>
            <Text>
              {/* I am a full-stack developer with a particular interest in
              front-end development. I enjoy learning different tech, which
              allows me to bring my creative visions to life.  */}
              I am a creative full stack developer that enjoys to learn
              different tech stacks, and solve complex problems. I also like to
              spend time with my two cats, and my supportive wife.
            </Text>
          </AboutText>
          <CarouselImages>
            <Portrait />
          </CarouselImages>
        </AboutMe>
      </>
    );
  }
}
const Head = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: 1425px) {
    height: auto;
  }
`;

const Batman = styled.img`
  z-index: -1;
  filter: grayscale(80%);
  width: 100%;
  overflow: hidden;
  transition: 0.5s ease;
  @media (max-width: 1650px) {
    transition: 0.5s ease;
  }
`;

const ProfileDiv = styled.div`
  z-index: 1;
  top: 131px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.1s ease;
  @media (max-width: 900px) {
    transition: 0.1s ease;
    top: 90px;
  }
`;
const Name = styled.p`
  font-size: 100px;
  color: white;
  font-family: "Bangers", cursive;
  -webkit-text-stroke: 2px black;
  text-transform: uppercase;
  transition: 1s ease;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 1650px) {
    transition: 1s ease;
    font-size: 80px;
  }
  @media (max-width: 900px) {
    transition: 1s ease;
    font-size: 60px;
  }

  @media (max-width: 600px) {
    transition: 1s ease;
    font-size: 40px;
  }
`;

const Name2 = styled.p`
  font-size: 120px;
  color: white;
  font-family: "Bangers", cursive;
  -webkit-text-stroke: 2px black;
  text-transform: uppercase;
  transition: 1s ease;
  line-height: 0.1;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 1650px) {
    transition: 1s ease;
    font-size: 80px;
  }
  @media (max-width: 900px) {
    transition: 1s ease;
    font-size: 60px;
    /* nested rules work as expected */
  }

  @media (max-width: 600px) {
    transition: 1s ease;
    font-size: 40px;
    /* nested rules work as expected */
  }
`;

const AboutMe = styled.div`
  height: 30em;
  background-color: #feffe4;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1030px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;

const AboutText = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  width: 60%;
  height: auto;
  @media (max-width: 1030px) {
    width: 80%;
  }
`;
const Title = styled.p`
  font-size: 35px;
  color: #f6c102;
  font-family: "Bangers", cursive;
  -webkit-text-stroke: 0.8px black;
  display: flex;
  justify-content: flex-start;
`;

const Text = styled.p`
  display: flex;
  color: black;
  justify-content: flex-start;
  font-size: 30px;
  font-family: "Bangers", cursive;
  /* -webkit-text-stroke: 1px black; */
  flex-wrap: wrap;
  word-wrap: break-word;
  white-space: normal;
`;

const CarouselImages = styled.div`
  display: flex;
  padding: 20px 25px;
  width: 500px;
  overflow: hidden;
  justify-content: center;
`;
export default Landing;
