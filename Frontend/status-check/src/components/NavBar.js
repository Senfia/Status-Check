import React, { useState } from "react";
//import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const AVATAR =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const NavBar = () => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleProfileMenuToggle = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">STATUS CHECK</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <NavDropdown
            title={
              <div onClick={handleProfileMenuToggle}>
                <img
                  src={AVATAR}
                  alt="avatar"
                  width="40"
                  height="40"
                  className="rounded-circle"
                />
              </div>
            }
            show={profileMenuOpen}
            id="profile-dropdown"
          >
            <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
