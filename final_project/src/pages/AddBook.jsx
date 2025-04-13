import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
    const [book, setBook] = useState({ title: "", author: "", genre: "" });
    const [message, setMessage] = useState(""); 

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(""); 

        try {
            const response = await axios.post("http://localhost:5000/api/books/add", book);
            console.log("Book added:", response.data);
            setMessage("Book added successfully!");

            setBook({ title: "", author: "", genre: "" });
        } catch (error) {
            console.error("Error adding book:", error);
            setMessage("Failed to add book. Please try again.");
        }
    };

    return (
        <div className="add-book-container">
            <h2>Add a New Book</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={book.title}
                    onChange={handleChange}
                    required
                />

                <label>Author:</label>
                <input
                    type="text"
                    name="author"
                    value={book.author}
                    onChange={handleChange}
                    required
                />

                <label>Genre:</label>
                <input
                    type="text"
                    name="genre"
                    value={book.genre}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
