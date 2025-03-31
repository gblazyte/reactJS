import React, { useState } from "react";

const AddBook = () => {
    const [book, setBook] = useState({ title: "", author: "", genre: "" });

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Book added:", book);
        setBook({ title: "", author: "", genre: "" }); // Reset form after submission
    };

    return (
        <div className="add-book-container">
            <h2>Add a New Book</h2>
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