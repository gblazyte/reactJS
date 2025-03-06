import React, { useState, useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from "./pages/Dashboard";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

const App = () => {
  const { user } = useContext(AuthContext); // Access user from global state

  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <h1>Welcome to the Authentication App</h1>

      {/* Only show the login/register forms if the user is not logged in */}
      {!user ? (
        <>
          <button onClick={toggleForm}>
            {showLogin ? "Go to Register" : "Go to Login"}
          </button>
          {showLogin ? <Login /> : <Register />}
        </>
      ) : (
        // When user is logged in, automatically redirect to the Dashboard
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      )}

      {/* Protected Route for Dashboard */}
      <Routes>
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
      </Routes>
    </div>
  );
};

export default App;
