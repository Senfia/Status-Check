import React from "react";
import { Route, Navigate } from "react-router-dom";
import isAuthenticated from "./isAuthenticated"; // Import the isAuthenticated function

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = isAuthenticated();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
