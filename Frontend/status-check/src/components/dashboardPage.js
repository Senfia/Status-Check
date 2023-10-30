import React from 'react';
import NavBar from './NavBar'; // Assuming you've created the NavBar component

const DashboardPage = () => {
  return (
    <div>
      <NavBar /> {/* Include the navigation bar component at the top of the dashboard page */}
      <div className="container mt-4">
        <h1>Welcome to Your Dashboard</h1>
        <div className="row mt-4">
          <div className="col-md-6">
            <h2>Your Dashboard Content</h2>
            {/* Add your dashboard content here, e.g., data, charts, or widgets */}
          </div>
          <div className="col-md-6">
            <h2>Notifications</h2>
            {/* Display notifications or alerts here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
