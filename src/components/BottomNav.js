import React from "react";
import styled from "styled-components";
import Hamburger from "../icons/Hamburger.png";

class BottomNav extends React.Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

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
