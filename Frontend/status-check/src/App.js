import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col";
import NavBar from "./components/navbar";

function App(){
    return (
        <div className="App">
            <header>
                <NavBar />
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