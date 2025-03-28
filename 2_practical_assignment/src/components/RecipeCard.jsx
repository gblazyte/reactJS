import React from "react";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext"; 

const RecipeCard = ({ recipe, isFavorite, toggleFavorite }) => {
    // const { user } = useContext(AuthContext);  
    const navigate = useNavigate();

    const handleFavoriteClick = async (e) => {
        e.stopPropagation();
        try {
            await toggleFavorite(recipe.id);
        } catch (err) {
            console.error("Error updating favorite", err);
        }
    };

    return (
        <div className="recipe-card" onClick={() => navigate(`/recipe/${recipe.id}`)} style={{ cursor: "pointer" }}>
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p><strong>Category:</strong> {recipe.tags?.[0] || "Unknown"}</p>
            <p><strong>Cooking Time:</strong> {recipe.cookTimeMinutes} min</p>

            <button
                className="favorite-btn"
                onClick={handleFavoriteClick}
                style={{
                    color: isFavorite ? "red" : "gray",
                    backgroundColor: isFavorite ? "#ffcccc" : "transparent",
                    border: "none",
                    borderRadius: "50%",
                    padding: "10px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                }}
            >
                ❤️
            </button>
        </div>
    );
};

export default RecipeCard;
