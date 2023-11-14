import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const LogoutPage = () => {
  useEffect(() => {
    // Clear user data from local storage (e.g., authentication token)
    localStorage.removeItem("token");

    //const token = localStorage.getItem("token");

    // Redirect to the login page or another route
    // You can change the 'to' property to the desired destination
    return <Navigate to="/login" />;
  }, []);

  return null; // This component doesn't render anything, it's just for the logout logic.
};

export default LogoutPage;
