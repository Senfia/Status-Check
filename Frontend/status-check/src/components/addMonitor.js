import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import NavBar from "./NavBar";

const AddMonitorPage = () => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [monitorInterval, setMonitorInterval] = useState(15); // Default monitor interval in minutes
  const [notificationEmail, setNotificationEmail] = useState(""); // Notification email state
  const [showSuccess, setShowSuccess] = useState(false); // State for success message
  const navigate = useNavigate(); // Get the history object

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMonitorIntervalChange = (e) => {
    setMonitorInterval(e.target.value);
  };

  const handleNotificationEmailChange = (e) => {
    setNotificationEmail(e.target.value);
  };

  const handleAddMonitor = () => {
    const data = {
      url,
      name,
      monitorInterval,
      notificationEmail,
    };

    axios
      .post("http://localhost:5000/add-monitor", data)
      .then((response) => {
        if (response.status === 200) {
          setShowSuccess(true);
          setTimeout(() => {
            setShowSuccess(false);
            navigate("/dashboard");
          }, 3000);
        } else {
          console.error("Failed to add monitor");
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
      });
  };

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Container>
        <Row className="mt-4">
          {showSuccess && (
            <div className="success-message">
              Monitor added successfully! Redirecting to dashboard...
            </div>
          )}
          <Col md="8">
            <h2>Add Monitor</h2>
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formBasicURL">
                    <Form.Label>Website/Service URL</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter URL"
                      value={url}
                      onChange={handleUrlChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name (optional)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicMonitorInterval">
                    <Form.Label>Monitor Interval (minutes)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Interval"
                      value={monitorInterval}
                      onChange={handleMonitorIntervalChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicNotificationEmail">
                    <Form.Label>Notification Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      value={notificationEmail}
                      onChange={handleNotificationEmailChange}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="button"
                    onClick={handleAddMonitor}
                    style={{
                      backgroundColor: "#9def6c",
                      color: "#010101",
                      borderColor: "#9def6c",
                    }}
                  >
                    Add Monitor
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

export default AddMonitorPage;
