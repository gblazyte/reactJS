const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../db/db");

const router = express.Router();

router.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ error: "Error hashing password" });
        }

        console.log("Hashed password:", hash);

        db.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, hash],
            function (err) {
                if (err) {
                    return res.status(500).json({ error: "User already exists or DB error" });
                }
                res.status(201).json({ id: this.lastID, name, email });
            }
        );
    });

});


router.get("/users", (req, res) => {
    db.all("SELECT id, name, email FROM users", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    db.get("SELECT * FROM users WHERE email = ?", [email], (err, user) => {
        if (err) {
            return res.status(500).json({ error: "Database error" });
        }
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ error: "Error checking password" });
            }
            if (!isMatch) {
                return res.status(400).json({ error: "Invalid password" });
            }

            res.json({ id: user.id, name: user.name, email: user.email });
        });
    });
});


module.exports = router;
