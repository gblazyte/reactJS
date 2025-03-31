import React from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
    const { id } = useParams(); // Get book ID from URL
    const book = {
        id,
        title: "Sample Book Title",
        author: "John Doe",
        genre: "Fiction",
        description: "This is a sample book description. More details about the book can go here."
    };

    return (
        <div className="book-detail-container">
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Description:</strong> {book.description}</p>
        </div>
    );
};

export default BookDetail;
