import React from "react";
import styled from "styled-components";
import Hamburger from "../icons/Hamburger.png";

class BottomNav extends React.Component {
  // constructor() {
  //   super();
  //   // this.state = {
  //   //   isHovered: false
  //   // };
  // }

  // handleHover() {
  //   this.setState({
  //     isHovered: !this.state.isHovered
  //   });
  // }
  render() {
    return (
      <Container
      // onMouseEnter={() => this.handleHover()}
      // onMouseLeave={() => this.handleHover()}
      >
        {/* {this.state.isHovered ? ( */}
        <div className="slide this">
          <Text href="#Home"> Home </Text>
          <Text href="#About_me"> About </Text>
          <Text href="#Projects"> Projects</Text>
          <Text href="#Contact"> Contact </Text>
        </div>
        {/* ) : ( */}
        {/* <HamburgerDiv>
          <HamburgerIcon src={Hamburger} />
        </HamburgerDiv>
        )} */}
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  box-shadow: rgba(0, 0, 0, 0.2) -5px -5px 10px;
  position: fixed;
  right: 0px;
  bottom: 0px;
  margin-bottom: 25px;
  /* border-top-left-radius: 20px; */
  /* background: rgba(255, 255, 255, 0.98); */
  /* padding: 12px 45px 12px 0px; */
  overflow: hidden;

  @media (max-width: 590px) {
    /* width: 100%;
    height: 60px; */
  }
`;

const HamburgerDiv = styled.div`
  z-index: 50;
  position: fixed;
  background-color: pink;
  border-radius: 50px;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  -webkit-box-pack: end;
  align-items: center;
  transition: 1s ease;

  /* &:hover {
    text-decoration: none;
    z-index: -100;
    width: 300px;
    width: 0;
    padding: 12px 45px 12px 0px;
  } */
`;
const HamburgerIcon = styled.img`
  width: 4em;
  transition: 1s ease;
  transform: transformX(-100%);
  /* &:hover {
    opacity: 0;
    width: 0;
    transform: transformX(100%);
  } */
`;
const Nav = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  box-shadow: rgba(0, 0, 0, 0.2) -5px -5px 10px;
  position: fixed;
  right: 0px;
  bottom: 0px;
  padding: 35px 0 0 0;
  align-items: center;
  /* border-top-left-radius: 20px; */
  /* background: rgba(255, 255, 255, 0.98); */
  /* padding: 12px 45px 12px 0px; */
  overflow: hidden;
  &:hover {
    text-decoration: none;
    z-index: 30;
  }
`;

const Text = styled.a`
  display: flex;
  justify-content: center;
  font-family: Bangers;
  align-items: center;
  font-size: 23px;
  margin: 0 20px;
  color: black;
  &:hover {
    text-decoration: none;
  }
`;

export default BottomNav;
