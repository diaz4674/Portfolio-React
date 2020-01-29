import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Topbar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Miguel Diaz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">About Me</Link>
            <Link to="/Tech">Tech Stack</Link>
            <Link to="/Projects">Projects</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Topbar;
