import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { AuthContext } from "../context/AuthContext";

const RecipeList = () => {
    const { user } = useContext(AuthContext);
    const [recipes, setRecipes] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(5);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/recipes");
                setRecipes(response.data.recipes);
            } catch (err) {
                setError("Failed to load recipes");
            }
        };

        const fetchFavorites = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/favorites?userId=${user.id}`);
                setFavorites(response.data);
            } catch (err) {
                console.error("Failed to load favorites", err);
            }
        };

        fetchRecipes();
        fetchFavorites();
    }, [user.id]);


    const toggleFavorite = async (recipeId) => {
        const isFavorite = favorites.some((fav) => fav.recipeId === recipeId);

        try {
            if (isFavorite) {
                const favoriteToDelete = favorites.find((fav) => fav.recipeId === recipeId);
                await axios.delete(`http://localhost:5000/favorites/${favoriteToDelete.id}`);
                setFavorites(favorites.filter((fav) => fav.recipeId !== recipeId));
            } else {
                const response = await axios.post("http://localhost:5000/favorites", { userId: user.id, recipeId });
                setFavorites([...favorites, response.data]);
            }
        } catch (err) {
            console.error("Error updating favorite status", err);
        }
    };

    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
    const totalPages = Math.ceil(recipes.length / recipesPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="recipe-list">
            <h2>Recipe List</h2>
            <div className="recipe-grid">
                {currentRecipes.map((recipe) => {
                    const isFavorite = favorites.some((fav) => fav.recipeId === recipe.id);
                    return (
                        <RecipeCard
                            key={recipe.id}
                            recipe={recipe}
                            isFavorite={isFavorite}
                            toggleFavorite={toggleFavorite}
                        />
                    );
                })}
            </div>

            <div className="pagination">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default RecipeList;
