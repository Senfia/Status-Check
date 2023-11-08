import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Import the Link and useNavigate components from React Router
import axios from "axios";
import DefaultNarv from "./DefaultNarv";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Get the navigate function

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = () => {
    axios
      .post("http://localhost:5000/register", {
        username,
        email,
        password,
      })
      .then((response) => {
        // Handle the response from the server as needed
        console.log("Registration successful:", response.data);
        navigate("/dashboard"); // Redirect to the dashboard
      })
      .catch((error) => {
        // Handle errors from the server, e.g., display an error message
        console.error("Registration failed:", error);
      });
  };

  return (
    <div>
      <header>
        <DefaultNarv />
      </header>
      <Container className="py-5">
        <Row className="justify-content-md-center">
          <Col md="6">
            <h2>User Registration</h2>
            <Form>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="button"
                onClick={handleRegistration}
              >
                Register
              </Button>
            </Form>
            <p className="mt-3">
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegistrationPage;
