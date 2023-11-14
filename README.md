# Status Check

## Web Service Monitoring System

## Overview

This is a portfolio Project for ALX Software Engineering Program.

Status Check is a comprehensive tool designed to monitor the health and performance of various web services, including websites, APIs, and servers. This system provides real-time insights, data visualisation, and alerting mechanisms to ensure proactive management of web services.

## Table of Contents

- [Features](#features)

- [Getting Started](#getting-started)

- [Prerequisites](#prerequisites)

- [Installation](#installation)

- [Usage](#usage)

- [Project Structure](#project-structure)

- [Technologies Used](#technologies-used)

- [Authors](#authors)

- [License](#license)

## Features

1.  **Real-Time Monitoring:** Continuously tracks the status and performance of web services.

2.  **Data Visualization:** Presents data through interactive charts and diagrams for easy analysis.

3.  **Alerting Mechanisms:** Sends email notifications for service downtimes or irregularities.

4.  **User-Friendly Interface:** Intuitive dashboard for easy configuration and navigation.

5.  **Historical Data Analysis:** Generates reports for analysing service performance trends.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js: [Download](https://nodejs.org/)
- MongoDB: [Download](https://www.mongodb.com/try/download/community)

### Backend Installation

1. Clone the repository:

```bash
git  clone  https://github.com/Senfia/Status-Check.git

1.  Navigate  to  the  project  directory:
cd  server

2.  Install  dependencies:
npm  install

3.  Set  up  the  MongoDB  database.  Update  the  MongoDB  connection  string  in  .env:
MONGO_URI=mongodb://localhost:27017/your-database-name

4.  Start  the  development  server:
npm  run  dev

### Frontend Installation
1.  Navigate  to  the  Frontend  directory:
cd  Frontend
.  Install  dependencies:
npm  install

2.  Start  the  development  server:
npm  run  dev

```

### Usage

1.  Add a Monitor:

- Access the dashboard and click "Add Monitor."
- Fill in the required information such as URL, Name, Monitor Interval, and - Notification Email.
- Click "Add Monitor" to save the monitor.

2.  View Dashboard:

- The dashboard displays server status, website monitoring information, and recent events.

3.  Data Analysis:

- Explore the data visualisations on the dashboard to analyse historical performance.

### Technologies Used

#### Frontend:

- React
- React Router
- Axios
- React-Bootstrap

### Backend:

- Node.js
- Express
- MongoDB
- Mongoose
- Axios

### Other:

- Chart.js (for data visualisation- to be implemented)
- Brevo (SMTP Relay)

### Authors

**Senyo Fiawornu**

- [Senfia](https://github.com/Senfia)

**Joseph Darko**

- [osomfonashticah](https://github.com/osomfonashticah)

### License

This project is licensed under the MIT License - see the LICENSE file for details.
