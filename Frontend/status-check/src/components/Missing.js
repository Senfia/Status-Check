import { Container } from "react-bootstrap";
import DefaultNarv from "./DefaultNarv";

const Missing = () => {
  return (
    <div>
      <header>
        <DefaultNarv />
      </header>
      <Container className="py-5 my-4">
        <div>
          <h1>Ops!! you are lost!</h1>
        </div>
      </Container>
    </div>
  );
};

export default Missing;
