import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const MonitorModal = ({ show, handleClose, handleSubmit, monitorData }) => {
  const [formData, setFormData] = useState({
    web_name: "",
    url: "",
    interval: "",
    retries: "",
    email_alert: "",
    // Add other fields you want to edit
  });

  useEffect(() => {
    // Populate form data when the modal is opened
    if (show && monitorData) {
      setFormData({
        web_name: monitorData.web_name || "",
        url: monitorData.url || "",
        interval: monitorData.interval || "",
        retries: monitorData.retries || "",
        email_alert: monitorData.email_alert || "",
        // Add other fields you want to edit
      });
    }
  }, [show, monitorData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Pass the edited data to the parent component for submission
    handleSubmit(formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {monitorData ? "Edit Monitor" : "Add Monitor"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          {/* Render form fields here based on your requirements */}
          <Form.Group controlId="formBasicURL">
            <Form.Label>Website/Service URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter URL"
              name="url"
              value={formData.url}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicWebName">
            <Form.Label>Web Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Web Name"
              name="web_name"
              value={formData.web_name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicMonitorInterva">
            <Form.Label>Monitor Interval (seconds)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Interval"
              name="interval"
              value={formData.interval}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicNotificationEmail">
            <Form.Label>Notification Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="email_alert"
              value={formData.email_alert}
              onChange={handleChange}
            />
          </Form.Group>
          {/* Add other form fields here */}
          <Button
            variant="primary"
            type="submit"
            style={{
              backgroundColor: "#9def6c",
              color: "#010101",
              borderColor: "#9def6c",
            }}
          >
            {monitorData ? "Update Monitor" : "Add Monitor"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default MonitorModal;
