import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ element }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); // hook to programmatically navigate

  // If user is not logged in, navigate to login page
  if (!user) {
    navigate("/", { replace: true }); // Redirect to login
    return null; // Prevent rendering of protected route
  }

  // If user is logged in, render the element (e.g., Dashboard)
  return element;
};

export default ProtectedRoute;
