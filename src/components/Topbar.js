import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <Link style={noUnderline} to="/projects">
              <Nav.Link href="#Projects">Projects</Nav.Link>
            </Link>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Topbar;
