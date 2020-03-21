import React from "react";
import styled from "styled-components";

// Technology description Component
class Desciption extends React.Component {
  render() {
    return (
      <Container>
        <Title> Summary </Title>
        <Text>{this.props.description}</Text>
        <Title> Tech Stack </Title>
        <Text> {this.props.tech}</Text>
        <ButtonContainer>
          <Live href={this.props.link} target="_blank">
            Live Site
          </Live>
          <GitRepo href={this.props.gitrepo} target="_blank">
            Github Repo
          </GitRepo>
        </ButtonContainer>
      </Container>
    );
  }
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  color: black;
  font-family: Bangers;
  font-size: 37px;
  margin: 0;
`;

const Text = styled.p`
  margin: 0;
  font-size: 20px;
  display: flex;
  font-weight: 100;
  justify-content: center;
  align-items: center;
  font-family: "raleway-bold";
  color: black;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Live = styled.a`
  margin: 20px 10px 0;
  transition: all 0.8s;
  background-color: #fffb9b;
  border: 0.4px solid black;
  color: black;
  font-family: Bangers;
  font-size: 25px;
  padding: 5px 20px;

  &:hover {
    color: white;
    box-shadow: 0px 4px 23px black;
    -webkit-text-stroke: 1px black;
    background-color: #f5bd07;
    text-decoration: none;
    font-size: 28px;
  }
`;

const GitRepo = styled.a`
  margin: 20px 10px 0;
  transition: all 0.8s;
  background-color: #fffb9b;
  border: 0.4px solid black;
  color: black;
  font-family: Bangers;
  font-size: 25px;
  padding: 5px 20px;

  &:hover {
    color: white;
    box-shadow: 0px 4px 23px black;
    -webkit-text-stroke: 1px black;
    background-color: #f5bd07;
    text-decoration: none;
    font-size: 28px;
  }
`;
export default Desciption;
