import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/Image"

function App(){
    return (
        <div className="App">
            <header>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
                    <Container>
                        <Navbar.Brand href="#home">STATUS CHECK</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Button type="button">Dashboard</Button>
                            <Image className="px-2" src="holder.js/171x180" roundedCircle />
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main>
                <Container>
                    <Row className="px-4 my-5">
                    <Col sm={4} className="">sm=8</Col>
                    <Col sm={8}>sm=4</Col>
                    </Row>
                </Container>
            </main>
        </div>
    
  );
}


export default App