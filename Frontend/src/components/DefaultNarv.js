//import React, { useState } from "react";
//import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const DefaultNarv = () => {
  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={process.env.PUBLIC_URL + "/logo-03.svg"}
            width="40px"
            height="auto"
            alt="logo"
          />
          <span className="title-logo">Status Check</span>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default DefaultNarv;
