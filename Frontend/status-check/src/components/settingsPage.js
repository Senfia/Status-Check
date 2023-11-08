import React, { useState } from "react";
//import NavBar from './NavBar'; // Assuming you've created the NavBar component
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import NavBar from "./NavBar";

const SettingsPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(""); // You can use a file input for profile picture changes

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    // You can handle profile picture changes here, e.g., uploading and updating the picture.
  };

  const handleSaveSettings = () => {
    // You can implement the logic to save the updated settings to the user's account.
    // For this example, we'll just log the entered data to the console.
    console.log("Updated Username:", username);
    console.log("Updated Email:", email);
    console.log("Updated Name:", name);
    console.log("Updated Current Password:", currentPassword);
    console.log("Updated New Password:", newPassword);
    console.log("Updated Profile Picture:", profilePicture);
  };

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Container>
        <Row className="mt-4">
          <Col md="8">
            <h2>Account Settings</h2>
            <Card>
              <Card.Body>
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

                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicCurrentPassword">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Current Password"
                      value={currentPassword}
                      onChange={handleCurrentPasswordChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicNewPassword">
                    <Form.Label>New Password (optional)</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={handleNewPasswordChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicConfirmNewPassword">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm New Password"
                      value={confirmNewPassword}
                      onChange={handleConfirmNewPasswordChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicProfilePicture">
                    <Form.Label>Profile Picture (optional)</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={handleProfilePictureChange}
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SettingsPage;
