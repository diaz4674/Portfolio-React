import React, { Component } from "react";
import styled from "styled-components";
import Portrait from "./Portrait";
import Video1 from "./Video1";

const Vid1 = {
  width: "100%",
  objectFit: "fill"
};

class Landing extends Component {
  componentDidMount() {
    console.log("landing");
  }
  render() {
    return (
      <Body>
        <Head>
          <Video1 style={Vid1} />
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
      </Body>
    );
  }
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
  width: 100%;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-bottom: -145px;

  @media (max-width: 1850px) {
    margin-bottom: -116;
  }
  @media (max-width: 1800px) {
    margin-bottom: -115px;
  }
  @media (max-width: 1600px) {
    margin-bottom: -86px;
  }
  @media (max-width: 1500px) {
    margin-bottom: -66px;
  }
  @media (max-width: 1500px) {
    margin-bottom: -36px;
  }
  @media (max-width: 1200px) {
    margin-bottom: -6px;
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
