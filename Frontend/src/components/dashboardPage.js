import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Table from "react-bootstrap/Table";
import axios from "axios"; // Import Axios

const DashboardPage = () => {
  const [monitorData, setMonitorData] = useState([]);

  useEffect(() => {
    // Fetch monitor data from the server using Axios
    axios
      .get("http://localhost:5000/monitors")
      .then((response) => {
        setMonitorData(response.data.monitors || []);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Container>
        <Row className="mt-4">
          <Col md="8">
            <Link to="/addmonitor">
              <button
                className="btn btn-primary py-2"
                style={{
                  backgroundColor: "#9def6c",
                  color: "#010101",
                  borderColor: "#9def6c",
                }}
              >
                Add Monitor
              </button>
            </Link>
            <h2 className="py-4">Dashboard</h2>

            <Card>
              <Card.Header>Server Status</Card.Header>
              <Card.Body>
                {/* Add server status information here */}
                <p>Server Name: Google Server</p>
                <p>Status: Online</p>
              </Card.Body>
            </Card>

            {/* Display monitor data */}
            {monitorData.map((monitor, index) => (
              <Card key={index} className="mt-3">
                <Card.Header>Website Monitoring</Card.Header>
                <Card.Body>
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
                      <tr>
                        <td>
                          <div>
                            <a href="{monitor.url}" target="_blank">
                              {monitor.url}
                            </a>
                          </div>
                        </td>
                        <td>
                          <div>{monitor.web_name}</div>
                        </td>
                        <td>
                          <div></div>
                        </td>
                        <td>
                          <div></div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            ))}
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
