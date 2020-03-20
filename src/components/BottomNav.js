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
          <img
            src={Hamburger}
            alt="hamburger navigation"
            className="hamburger"
          />
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
  overflow: hidden;
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
