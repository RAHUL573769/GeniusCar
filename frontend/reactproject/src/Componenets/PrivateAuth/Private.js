import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  let location = useLocation();
  if (loading) {
    return (
      <progress
        className="progress progress-warning w-56"
        value="100"
        max="100"
      ></progress>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default Private;
