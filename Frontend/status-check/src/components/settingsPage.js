import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const SettingsPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSaveSettings = () => {
    // You can add your settings update logic here, e.g., making an API call to save user settings.
    // For this example, we'll just log the entered data to the console.
    console.log("Updated Username:", username);
    console.log("Updated Email:", email);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>Settings</h2>
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

            <Button
              variant="primary"
              type="button"
              onClick={handleSaveSettings}
            >
              Save Settings
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SettingsPage;
