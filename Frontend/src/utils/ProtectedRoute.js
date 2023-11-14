import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom"; // Import Navigate from react-router-dom
import isAuthenticated from "./isAuthenticated"; // Import the isAuthenticated function

const ProtectedRoute = () => {
  const user = isAuthenticated();
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ form: location }} replace />
  );
};

export default ProtectedRoute;
