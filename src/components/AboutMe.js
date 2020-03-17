import React, { Component } from "react";
import styled from "styled-components";

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <AboutText>
          <Title>Welcome!</Title>
          <Text>
            I am a Full Stack Engineer that loves to focus on creating
            aesthetically pleasing colors, themes, and animations to generate a
            strong user interface. I enjoy building a healthy working
            relationship with people, by communicating, building rapport, and
            organizing to build an effective work flow.
          </Text>
          <Text>
            In the next five years, I am hoping to gain enough experience to be
            considered a Senior Software Engineer.
          </Text>

          <Text>
            {" "}
            Hobbies include 3D modeling designs and printing them out with my 3D
            printer, as well as spending time with my wife & two cats. I have a
            passion for learning, and spend time in Udemy to learn other skills,
            such as the Adobe products that helped build this site.
          </Text>
        </AboutText>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  flex-wrap: wrap;
  padding-right: 5%;
  @media (max-width: 1230px) {
    padding-right: 0;
  }
`;

const AboutText = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;
  background-color: #eef1ff;
`;

const Title = styled.p`
  font-size: 47px;
  font-weight: 900;
  color: #f6c102;
  font-family: Bangers;
  letter-spacing: 2px;
  -webkit-text-stroke: 0.2px black;
  display: flex;
  justify-content: flex-start;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: 18px;
  padding: 10px;
  display: flex;
  font-weight: 900;
  justify-content: center;
  font-family: "raleway-bold";
  text-transform: uppercase;
`;

export default AboutMe;
