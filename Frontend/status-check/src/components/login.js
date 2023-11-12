import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import DefaultNarv from "./DefaultNarv";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //const [showSuccess, setShowSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:5000/login", {
        email,
        password,
      })
      .then((response) => {
        // If login is successful, redirect to the dashboard
        //get token from response
        const token = response.data.token;

        //set JWT token to local
        localStorage.setItem("token", token);

        //set token to axios common header

        console.log("Login successful:", response.data);
        // setShowSuccess(true);
        // setTimeout(() => {
        //   setShowSuccess(false);
        // }, 3000);

        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <div>
      <header>
        <DefaultNarv />
      </header>
      <Container className="py-5 my-4">
        <Row className="justify-content-md-center">
          {/* {showSuccess && (
            <div className="success-message">
              Monitor added successfully! Redirecting to dashboard...
            </div>
          )} */}
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
                  required="required"
                  data-validation-required-message="Please a valid email"
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
                onClick={handleLogin}
                style={{
                  backgroundColor: "#9def6c",
                  color: "#010101",
                  borderColor: "#9def6c",
                }}
              >
                Login
              </Button>
            </Form>
            <p className="mt-3">
              Don't have an account?{" "}
              <Link to="/register" style={{ color: "#9def6c" }}>
                Register
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
