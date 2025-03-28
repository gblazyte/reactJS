import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const FavoritesPage = () => {
    const { user } = useContext(AuthContext);
    const [favorites, setFavorites] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/favorites?userId=${user.id}`);
                const favoriteIds = response.data.map(fav => fav.recipeId);


                const recipesResponse = await axios.get("https://dummyjson.com/recipes");
                const userFavoriteRecipes = recipesResponse.data.recipes.filter(recipe =>
                    favoriteIds.includes(recipe.id)
                );

                setFavorites(response.data);
                setRecipes(userFavoriteRecipes);
                setLoading(false);
            } catch (err) {
                setError("Failed to load favorite recipes");
                setLoading(false);
            }
        };

        fetchFavorites();
    }, [user.id]);

    const toggleFavorite = async (recipeId) => {
        const isFavorite = favorites.some((fav) => fav.recipeId === recipeId);

        try {
            if (isFavorite) {
                const favoriteToDelete = favorites.find((fav) => fav.recipeId === recipeId);
                if (favoriteToDelete) {
                    await axios.delete(`http://localhost:5000/favorites/${favoriteToDelete.id}`);
                    setFavorites((prevFavorites) =>
                        prevFavorites.filter((fav) => fav.recipeId !== recipeId)
                    );
                    setRecipes((prevRecipes) => prevRecipes.filter(recipe => recipe.id !== recipeId));
                }
            } else {
                const response = await axios.post("http://localhost:5000/favorites", {
                    userId: user.id,
                    recipeId: recipeId,
                });
                setFavorites((prevFavorites) => [
                    ...prevFavorites,
                    response.data,
                ]);
                const newRecipe = await axios.get(`https://dummyjson.com/recipes/${recipeId}`);
                setRecipes((prevRecipes) => [...prevRecipes, newRecipe.data]);
            }
        } catch (err) {
            console.error("Error updating favorite status", err);
        }
    };

    const handleGoBack = () => {
        navigate("/dashboard");
    };

    if (loading) return <p>Loading favorites...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="favorite-recipes">
            <h2>Your Favorite Recipes</h2>

            <button onClick={handleGoBack} style={{ marginBottom: '20px' }}>
                Go Back to Dashboard
            </button>

            <div className="recipe-grid">
                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        isFavorite={true}
                        toggleFavorite={toggleFavorite}
                    />
                ))}
            </div>
        </div>
    );
};

export default FavoritesPage;
