import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const normalText = {
  textDecoration: "none",
  color: "white"
};
class Topbar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand to="/">Miguel Diaz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link style={normalText} to="/">
              <Nav.Link href="/">About Me</Nav.Link>
            </Link>{" "}
            <Link style={normalText} to="/techstack">
              <Nav.Link href="/techstack">Skills</Nav.Link>
            </Link>{" "}
            <Link style={normalText} to="/projects">
              <Nav.Link href="/projects">Projects</Nav.Link>
            </Link>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Topbar;
