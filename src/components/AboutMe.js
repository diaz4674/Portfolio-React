import React, { Component } from "react";
import styled from "styled-components";
import Us from "../images/us4.0.png"

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <AboutText>
          <Title>Welcome!</Title>
          <Text>
            I am a Full Stack Engineer that enjoys to focus on
            aesthetically pleasing colors, themes, and animations to generate a
            strong user interface. I enjoy building a healthy working
            relationship with people by communicating, building rapport, and
            organizing to build an effective work flow.
          </Text>
          <Text>
            In these coming years, I hope to be a Senior Software Engineer, mentor
            incoming developers to help make an effiecient, and positive environment.
          </Text>
        </AboutText>
        <FamilyImg src = {Us} alt = "Miguel, Pregnant wife, and pets"/>
      </Container>
    );
  }
}

//Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  flex-wrap: wrap;
  margin-right: 5%;
  box-shadow: 0px 4px 30px black;
  background-color: #FFDC74;
  padding: 25px;

  @media (max-width: 1230px) {

    margin: 25px 0 80px;
  }
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;
`;

const Title = styled.p`
  font-size: 47px;
  font-weight: 900;
  color: black;
  font-family: 'Bangers';
  letter-spacing: 2px;
  display: flex;
  justify-content: flex-start;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: 20px;
  padding: 5px;
  display: flex;
  // font-weight: 800;
  justify-content: center;
  font-family: 'Bangers';
  letter-spacing: 1px;
`;

const FamilyImg = styled.img `
    width: 35em;
    display: flex;
    margin: auto;
    padding: 15px;
    background: #FFFFFF;
    box-shadow: 0px 3px 15px gray;
    border-radius: 10px;
    
    @media (max-width: 650px) {
        width: 100%;
    }
`

export default AboutMe;
