import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import the Link component from React Router
import axios from "axios"; // Import Axios

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegistration = () => {
    if (password === confirmPassword) {
      // Passwords match, make an API call to register the user
      axios
        .post("/api/register", {
          username,
          email,
          password,
        })
        .then((response) => {
          // Handle the response from the server as needed
          console.log("Registration successful:", response.data);
        })
        .catch((error) => {
          // Handle errors from the server, e.g., display an error message
          console.error("Registration failed:", error);
        });
    } else {
      // Passwords do not match, you can display an error message or take appropriate action.
      console.error("Passwords do not match");
    }
  };

  return (
    <div>
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

              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
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
