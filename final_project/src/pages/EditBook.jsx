import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditBook = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [book, setBook] = useState({ title: "", author: "", genre: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/books/${id}`);
                setBook(response.data);
            } catch (err) {
                console.error("Error fetching book:", err);
                setError("Failed to load book.");
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:5000/api/books/${id}`, book);
            navigate("/"); 
        } catch (err) {
            console.error("Error updating book:", err);
            setError("Failed to update book.");
        }
    };

    if (loading) return <p>Loading book details...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="edit-book-container">
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={book.title} onChange={handleChange} required />

                <label>Author:</label>
                <input type="text" name="author" value={book.author} onChange={handleChange} required />

                <label>Genre:</label>
                <input type="text" name="genre" value={book.genre} onChange={handleChange} required />

                <button type="submit">Update Book</button>
            </form>
        </div>
    );
};

export default EditBook;
