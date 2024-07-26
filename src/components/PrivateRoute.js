import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = () => !!localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  return (
    <Route
      {...rest}
      element={
        isAuthenticated() && userRole === "admin" ? (
          element
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
