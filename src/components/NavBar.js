import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import Github from "../icons/Git.png";
import LinkedIn from "../icons/linkedin.png";
import { withRouter } from "react-router-dom";
import "./Professional/professionalStyles.css";

// Styles
const noUnderline = {
  textDecoration: "none",
  fontFamily: "Bangers",
  fontSize: "20px",
};

class Topbar extends React.Component {
  state = {
    linkedIn: false,
    Github: false,
  };

  toggleTheme(e) {
    e.preventDefault();
    this.props.history.push("/");
  }

  toggleGit = () => {
    this.setState({ Github: !this.state.Github });
  };

  toggleLinkedIn = () => {
    this.setState({ linkedIn: !this.state.linkedIn });
  };

  render() {
    return (
      <Container>
        <Navbar collapseOnSelect expand="lg" style={{ background: "#f5bd07" }}>
          <Navbar.Brand to="/" style={noUnderline}>
            Miguel Diaz
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ justifyContent: "space-between" }}
          >
            <Nav className="mr-auto" style={{ alignItems: "center" }}>
              <Nav.Link href="#About_me" style={noUnderline}>
                About Me
              </Nav.Link>
              <Nav.Link href="#Projects" style={noUnderline}>
                Projects
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://drive.google.com/file/d/1gTK9m9lFyDAv6c4eeZQnO1-o7MrGAAWz/view"
                style={noUnderline}
              >
                Resume
              </Nav.Link>
              <Nav.Link href="#Contact" style={noUnderline}>
                Contact
              </Nav.Link>
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
                    width: "40px",
                    transition: "ease 0.3s",
                    transform: this.state.Github ? "scale(1.2, 1.2)" : "",
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
                    width: "40px",
                    transition: "ease 0.3s",
                    transform: this.state.linkedIn ? "scale(1.2, 1.2)" : "",
                  }}
                />
              </Icons>
              <button
                className="creativeBtn btn-5 btn-5a icon-cog"
                onClick={this.toggleTheme.bind(this)}
              >
                <span className="creativeText">Professional Mode</span>
              </button>
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
  justify-content: space-around;
  align-items: center;
`;

const Icons = styled.a`
  margin: 0 12px;
`;
export default withRouter(Topbar);
