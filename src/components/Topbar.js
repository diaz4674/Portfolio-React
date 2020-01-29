import React from "react";
import { Navbar, Nav } from "react-bootstrap";

class Topbar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Miguel Diaz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">About Me</Nav.Link>
            <Nav.Link href="/techstack">Tech Stack</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Topbar;
