import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component }) => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    alert('You need to log in to access this page.');
    return <Navigate to="/login" replace />;
  }

  return Component;
};

export default ProtectedRoute;
