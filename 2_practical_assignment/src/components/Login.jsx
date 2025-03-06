import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import for navigation
import { AuthContext } from "../context/AuthContext"; // Import AuthContext

const Login = () => {
    const { login } = useContext(AuthContext); // Access global login function
    const navigate = useNavigate(); // For redirecting user after login

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:5000/users?email=${formData.email}`);
            const user = response.data[0];

            if (user && user.password === formData.password) {
                setMessage("Login successful! ✅");
                login(user); // Save user in global state and localStorage
                navigate("/dashboard"); // Redirect to Dashboard
            } else {
                setMessage("Invalid email or password ❌");
            }
        } catch (error) {
            setMessage("Error logging in ❌");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />

                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
