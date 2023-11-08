import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    axios
      .post("/login", {
        email,
        password,
      })
      .then((response) => {
        // If login is successful, redirect to the dashboard
        console.log("Login successful:", response.data);
        navigate.push("/dashboard");
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <div>
      <Container className="py-5 my-4">
        <Row className="justify-content-md-center">
          <Col md="6">
            <h2>Login</h2>
            <Form>
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

              <Button variant="primary" type="button" onClick={handleLogin}>
                Login
              </Button>
            </Form>
            <p className="mt-3">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
