import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/esm/Button";
import NavLink from "react-bootstrap/esm/NavLink";

const AVATAR = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const NavBar = () => {
    return (
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
                    <Container>
                        <Navbar.Brand href="#home">STATUS CHECK</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Feature</Nav.Link>
                            <Nav.Link href="#pricing">Feature</Nav.Link>
                        </Nav>
                        <Nav>
                            <Button type="button">Dashboard</Button>
                            <NavLink className="font-weight-bold" href="/">
                                <img src={AVATAR} alt="avatar" className="img-fluid rounded-circle" style={{ width: 30 }} />
                                
                            </NavLink>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
    
  );
};


export default NavBar