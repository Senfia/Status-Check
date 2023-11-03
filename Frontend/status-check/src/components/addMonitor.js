import React, { useState } from "react";
//import NavBar from './NavBar'; // Assuming you've created the NavBar component
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const AddMonitorPage = () => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [monitorInterval, setMonitorInterval] = useState(15); // Default monitor interval in minutes
  const [notificationEmail, setNotificationEmail] = useState(""); // Notification email state

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
    // You can implement the logic to add the monitor to your list of monitored services,
    // including sending alerts to the notification email.
    // For this example, we'll just log the entered data to the console.
    console.log("URL:", url);
    console.log("Name:", name);
    console.log("Monitor Interval:", monitorInterval);
    console.log("Notification Email:", notificationEmail);
  };

  return (
    <div>
      <Container>
        <Row className="mt-4">
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
