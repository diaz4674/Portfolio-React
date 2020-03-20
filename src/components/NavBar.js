import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Github from "../icons/Git.png";
import LinkedIn from "../icons/linkedin.png";

// Styles
const noUnderline = {
  textDecoration: "none",
  fontFamily: "Bangers",
  fontSize: "20px"
};
const Gray = {
  backgroundColor: "#f5bd07",
  zIndex: "50"
};

class Topbar extends React.Component {
  render() {
    return (
      <Container>
        <Navbar collapseOnSelect expand="lg" style={Gray}>
          <Navbar.Brand to="/" style={noUnderline}>
            Miguel Diaz
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" style={noUnderline}>
                <Nav.Link href="#About_me">About Me</Nav.Link>
              </Link>{" "}
              <Link style={noUnderline}>
                <Nav.Link href="#Projects">Projects</Nav.Link>
              </Link>{" "}
              <Link style={noUnderline}>
                <Nav.Link href="#Contact">Contact</Nav.Link>
              </Link>{" "}
            </Nav>
            <EndIcons>
              <Link style={noUnderline}>
                <Nav.Link href="#" target="_blank">
                  <img src={Github} alt="Github" style={{ height: "2em" }} />
                </Nav.Link>
              </Link>{" "}
              <Link style={noUnderline}>
                <Nav.Link href="#" target="_blank">
                  <img src={LinkedIn} alt="Github" style={{ height: "2em" }} />
                </Nav.Link>
              </Link>{" "}
            </EndIcons>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
`;

const EndIcons = styled.div``;
export default Topbar;
