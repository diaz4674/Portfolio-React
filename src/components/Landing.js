import React, { Component } from "react";
import me from "../images/me.png";
import BatmanLego from "../images/BatmanLego.jpg";
import styled from "styled-components";
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
            <Me src={me} />
            <Name> Miguel Diaz </Name>
          </ProfileDiv>
        </Head>
      </>
    );
  }
}

const Head = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Batman = styled.img`
  z-index: -1;
  filter: grayscale(80%);
  width: 100%;
  position: absolute;
  top: -150px;
  overflow: hidden;
  height: 117vh;
  transition: 0.5s ease;
  @media (max-width: 1650px) {
    transition: 0.5s ease;
    top: -100px;
    height: auto;

    /* nested rules work as expected */
  }
  @media (max-width: 1450px) {
    transition: 0.5s ease;
    top: -50px;

    /* nested rules work as expected */
  }
  @media (max-width: 950px) {
    transition: 0.5s ease;
    top: 0px;

    /* nested rules work as expected */
  }
`;
const Me = styled.img`
  width: 25em;
  border-radius: 48%;
  transition: 1s ease;
  @media only screen and (max-width: 1390px) {
    width: 15em;
    border-radius: 150px;
    transition: 1s ease;
  }
  @media (max-width: 900px) {
    width: 14em;
    top: 0px;
    transition: 1s ease;
    /* nested rules work as expected */
  }

  @media (max-width: 600px) {
    width: 10em;
    top: 0px;
    /* nested rules work as expected */
  }
`;

const ProfileDiv = styled.div`
  z-index: 1;
  top: 131px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease;
  @media (max-width: 900px) {
    transition: 0.1s ease;
    top: 90px;
    /* nested rules work as expected */
  }
`;
const Name = styled.p`
  font-size: 100px;
  color: white;
  font-family: "Bangers", cursive;
  -webkit-text-stroke: 2px black;
  text-transform: uppercase;
  transition: 1s ease;
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

export default Landing;
