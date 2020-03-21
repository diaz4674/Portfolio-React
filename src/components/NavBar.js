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
  state = {
    linkedIn: false,
    Github: false
  };

  toggleGit = () => {
    this.setState({ Github: !this.state.Github });
  };

  toggleLinkedIn = () => {
    this.setState({ linkedIn: !this.state.linkedIn });
  };

  render() {
    return (
      <Container>
        <Navbar collapseOnSelect expand="lg" style={Gray}>
          <Navbar.Brand to="/" style={noUnderline}>
            Miguel Diaz
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ justifyContent: "space-between" }}
          >
            <Nav className="mr-auto" style={{ alignItems: "center" }}>
              {/* <Link style={noUnderline}> */}
              <Nav.Link href="#About_me" style={noUnderline}>
                About Me
              </Nav.Link>
              {/* </Link>{" "} */}
              <Link style={noUnderline}>
                <Nav.Link href="#Projects">Projects</Nav.Link>
              </Link>{" "}
              <Link style={noUnderline}>
                <Nav.Link href="#Contact">Contact</Nav.Link>
              </Link>{" "}
            </Nav>
            <EndIcons>
              <Icons
                target="_blank"
                href="https://github.com/diaz4674"
                onMouseEnter={this.toggleGit}
                onMouseLeave={this.toggleGit}
              >
                <img
                  src={Github}
                  alt="Github"
                  style={{
                    width: "2.5em",
                    transition: "ease 0.3s",
                    transform: this.state.Github ? "scale(1.2, 1.2)" : ""
                  }}
                />
              </Icons>
              <Icons
                target="_blank"
                href="https://www.linkedin.com/in/diaz4674/"
                onMouseEnter={this.toggleLinkedIn}
                onMouseLeave={this.toggleLinkedIn}
              >
                <img
                  src={LinkedIn}
                  alt="Linkedin"
                  style={{
                    width: "2.5em",
                    transition: "ease 0.3s",
                    transform: this.state.linkedIn ? "scale(1.2, 1.2)" : ""
                  }}
                />
              </Icons>
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

const EndIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Icons = styled.a`
  margin: 0 12px;
`;
export default Topbar;
