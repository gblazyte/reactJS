import React, { useState, useContext } from 'react';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from "./pages/Dashboard";
import RecipeDetail from "./components/RecipeDetail"; 
import FavoritesPage from "./pages/FavoritesPage"; 
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute"; 

const App = () => {
  const { user } = useContext(AuthContext); 
  const navigate = useNavigate(); 

  return (
    <div>
      <h1>Recipe Website</h1>

      {!user ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/recipe/:id" element={<ProtectedRoute element={<RecipeDetail />} />} />
          <Route path="/favorites" element={<ProtectedRoute element={<FavoritesPage />} />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
