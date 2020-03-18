import React, { Component } from "react";
import styled from "styled-components";
import AboutMe from "./AboutMe";
import Video1 from "./Video1";
import ScrollableAnchor from "react-scrollable-anchor";
import TechSection from "./TechSection";
import Footer from "./Footer";

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
        <AboutMeDiv>
          <ScrollableAnchor id={"About_me"}>
            <Title> About Me </Title>
          </ScrollableAnchor>
          <AboutMeCoreDiv>
            <TechSection />
            <AboutMe />
          </AboutMeCoreDiv>
        </AboutMeDiv>
        <Footer />
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

const Title = styled.p`
  display: flex;
  justify-content: center;
  font-family: Bangers;
  align-items: center;
  font-size: 68px;
  padding-bottom: 10px;
  color: black;
  /* border-bottom: black 6px solid; */
`;
const AboutMeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #fffb9b; */
  background: linear-gradient(to right bottom, #fffb9b 55%, #cdcdcd 45%);
  padding: 26px 0;
`;

const AboutMeCoreDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 15px;
  width: 80%;
  justify-content: space-between;
  @media (max-width: 1230px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;
export default Landing;
