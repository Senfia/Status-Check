import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col";
import NavBar from "./components/navbar";
import LoginPage from "./components/login";
import Footer from "./components/footer";
import RegistrationPage from "./components/register";

function App(){
    return (
        <div className="App">
            <header>
                <NavBar />
            </header>
            <main>
                <Container>
                    <Row className="px-4 my-5">
                    <Col sm={4} className="">
                        <RegistrationPage />
                    </Col>
                    <Col sm={8}>
                        <LoginPage />
                    </Col>
                    </Row>
                </Container>
            </main>
                <footer>
                    <Footer />
                </footer>
        </div>
    
  );
}


export default App