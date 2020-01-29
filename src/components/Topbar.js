import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
class Topbar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand to="/">Miguel Diaz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">
              <Link to="/">About Me </Link>{" "}
            </Nav.Link>
            <Nav.Link href="/techstack">
              <Link to="/techstack">Tech </Link>{" "}
            </Nav.Link>
            <Nav.Link href="/projects">
              <Link to="/projects">Projects </Link>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Topbar;
