import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import Table from "react-bootstrap/Table";
import MonitorModal from "./MonitorModal";
import axios from "axios";

const DashboardPage = () => {
  const [monitors, setMonitors] = useState([]);
  const [selectedMonitor, setSelectedMonitor] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch monitors when the component mounts
    fetchMonitors();
  }, []);

  const fetchMonitors = async () => {
    try {
      const response = await axios.get("http://localhost:5000/monitors");
      setMonitors(response.data.monitors || []);
    } catch (error) {
      console.error("Error fetching monitors:", error);
    }
  };

  const handleEditClick = (monitor) => {
    setSelectedMonitor(monitor);
    setShowModal(true);
  };

  const handleAddClick = () => {
    setSelectedMonitor(null);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (selectedMonitor) {
        // Update existing monitor
        await axios.put(
          `http://localhost:5000/monitors/${selectedMonitor._id}`,
          formData
        );
      } else {
        // Add new monitor
        await axios.post("http://localhost:5000/monitors", formData);
      }
      // Refresh the list of monitors after adding/editing
      fetchMonitors();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/monitors/${id}`);
      // Refresh the list of monitors after deleting
      fetchMonitors();
    } catch (error) {
      console.error("Error deleting monitor:", error);
    }
  };

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Container>
        <Row className="mt-4">
          <Col md="8">
            <Button
              className="btn btn-primary py-2"
              style={{
                backgroundColor: "#9def6c",
                color: "#010101",
                borderColor: "#9def6c",
              }}
              onClick={handleAddClick}
            >
              Add Monitor
            </Button>
            <h2 className="py-4">Dashboard</h2>

            {/* Display monitors */}
            {/* {monitors.map((monitor, index) => ( */}
            <Card className="mt-3">
              <Card.Header>
                {/* {monitor.web_name}
                  <Button
                    variant="outline-primary"
                    className="float-right"
                    onClick={() => handleEditClick(monitor)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    className="float-right mr-2"
                    onClick={() => handleDeleteClick(monitor._id)}
                  >
                    Delete
                  </Button> */}
              </Card.Header>
              <Card.Body>
                {/* Display monitor details here */}
                {/* <p>Website: {monitor.url}</p>
                  <p>Status: {monitor.status}</p>
                  <p>Response Time: {monitor.responseTime}</p> */}
                <Table striped borderless hover variant="dark">
                  <thead>
                    <tr>
                      <th>
                        <div>Monitor URL</div>
                      </th>
                      <th>
                        <div>Website</div>
                      </th>
                      <th>
                        <div>Status</div>
                      </th>
                      <th>
                        <div>Response Time</div>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {monitors.map((monitor, index) => (
                      <tr key={index}>
                        <td>
                          <div>
                            <a href={monitor.url} target="_blank">
                              {monitor.url}
                            </a>
                            <div>
                              <span
                                style={{
                                  paddingTop: "2px",
                                  paddingRight: "10px",
                                }}
                              >
                                <Button
                                  variant="outline-primary"
                                  className="float-right"
                                  onClick={() => handleEditClick(monitor)}
                                  style={{
                                    color: "#b1b8c0",
                                    backgroundColor: "#161b22",
                                    borderColor: "#161b22",
                                  }}
                                >
                                  Edit
                                </Button>
                              </span>
                              <Button
                                variant="outline-danger"
                                className="float-right mr-2"
                                onClick={() => handleDeleteClick(monitor._id)}
                              >
                                Delete
                              </Button>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>{monitor.web_name}</div>
                        </td>
                        <td>
                          <div>{monitor.status}</div>
                        </td>
                        <td>
                          <div>{monitor.responseTime}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            {/* Modal for adding/editing monitors */}
            <MonitorModal
              show={showModal}
              handleClose={handleCloseModal}
              handleSubmit={handleFormSubmit}
              monitorData={selectedMonitor}
            />
          </Col>

          <Col md="4">
            <Card className="">
              <Card.Header>Recent Events</Card.Header>
              <Card.Body>
                {/* Add recent events information here */}
                <p>Event 1: Website www.example.com is back online.</p>
                <p>Event 2: Server maintenance scheduled for tomorrow.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardPage;
