import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import RecipeList from "../components/RecipeList";

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const goToFavorites = () => {
        navigate("/favorites"); 
    };

    return (
        <div>
            <h1>Welcome, {user?.username}!</h1>
            <p>Email: {user?.email}</p>

            <button onClick={handleLogout}>Logout</button>

            <button onClick={goToFavorites}>Go to Favorites</button>

            <RecipeList />
        </div>
    );
};

export default Dashboard;
