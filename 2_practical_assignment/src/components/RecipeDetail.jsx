import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const RecipeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get(`https://dummyjson.com/recipes/${id}`)
            .then((response) => setRecipe(response.data))
            .catch(() => setError("Error fetching recipe"))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">{error}</p>;
    if (!recipe) return <p className="error">Recipe not found.</p>;

    return (
        <div className="recipe-detail">
            <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
            <h2 className="recipe-title">{recipe.name}</h2>
            <img className="recipe-image" src={recipe.image} alt={recipe.name} />
            <div className="recipe-info">
                <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                <p><strong>Servings:</strong> {recipe.servings}</p>
                <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} min</p>
                <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} min</p>
            </div>

            <h3 className="section-title">Ingredients</h3>
            <ul className="ingredients-list">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <h3 className="section-title">Instructions</h3>
            <ol className="instructions-list">
                {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
    );
};

export default RecipeDetail;
