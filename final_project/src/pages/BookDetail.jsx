import React, { useEffect, useState } from "react";
import axios from "axios";

const BookDetail = (id) => {
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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

        if (id) {
            fetchBook();
        }
    }, [id]);

    return { book, loading, error };
};


export default BookDetail;
