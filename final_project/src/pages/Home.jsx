import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [genre, setGenre] = useState("");
    const [genres, setGenres] = useState(['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Mystery', 'Young Adult']);

    useEffect(() => {
        fetchBooks();
    }, [genre]);

    const fetchBooks = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/books", {
                params: { genre },
            });
            setBooks(response.data);
        } catch (err) {
            console.error("Error fetching books:", err);
            setError("Failed to load books.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this book?")) {
            return;
        }

        try {
            await axios.delete(`http://localhost:5000/api/books/${id}`);
            setBooks(books.filter(book => book.id !== id));
        } catch (err) {
            console.error("Error deleting book:", err);
            alert("Failed to delete book.");
        }
    };

    return (
        <div className="home-container">
            <h1>Welcome to the Online Library</h1>
            <p>Browse, add, and manage books easily.</p>

            {/* Genre Filter */}
            <div className="filter-container">
                <label htmlFor="genre">Filter by Genre:</label>
                <select
                    id="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                >
                    <option value="">All Genres</option>
                    {genres.map((gen, idx) => (
                        <option key={idx} value={gen}>
                            {gen}
                        </option>
                    ))}
                </select>
            </div>

            {loading ? (
                <p>Loading books...</p>
            ) : error ? (
                <p>{error}</p>
            ) : books.length === 0 ? (
                <p>No books available.</p>
            ) : (
                <ul className="book-list">
                    {books.map((book) => (
                        <li key={book.id} className="book-item">
                            <strong>{book.title}</strong> by {book.author} - <em>{book.genre}</em>
                            <br />
                            <Link to={`/edit-book/${book.id}`}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(book.id)} style={{ marginLeft: "10px", color: "red" }}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Home;
