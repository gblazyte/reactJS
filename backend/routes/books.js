const express = require("express");
const db = require("../db/db");

const router = express.Router();

router.post("/add", (req, res) => {
    const { title, author, genre } = req.body;
    if (!title || !author || !genre) {
        return res.status(400).json({ error: "All fields are required" });
    }

    db.run("INSERT INTO books (title, author, genre) VALUES (?, ?, ?)", [title, author, genre], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID, title, author, genre });
    });
});

router.get("/", (req, res) => {
    const { genre } = req.query;

    let query = "SELECT * FROM books";
    let params = [];

    if (genre) {
        query += " WHERE genre = ?";
        params.push(genre);
    }


    db.all(query, params, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    db.get("SELECT * FROM books WHERE id = ?", [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: "Failed to fetch book" });
        }
        if (!row) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.json(row);
    });
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { title, author, genre } = req.body;

    if (!title || !author || !genre) {
        return res.status(400).json({ error: "All fields are required." });
    }

    db.run("UPDATE books SET title = ?, author = ?, genre = ? WHERE id = ?", [title, author, genre, id], function (err) {
        if (err) {
            return res.status(500).json({ error: "Failed to update book" });
        }
        res.json({ message: "Book updated successfully" });
    });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    db.run("DELETE FROM books WHERE id = ?", [id], function (err) {
        if (err) {
            return res.status(500).json({ error: "Failed to delete book" });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.json({ message: "Book deleted successfully" });
    });
});



module.exports = router;
