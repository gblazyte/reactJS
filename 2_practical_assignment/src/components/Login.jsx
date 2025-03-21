import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

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
                setMessage("Login successful!");
                login(user);
                navigate("/dashboard");
            } else {
                setMessage("Invalid email or password");
            }
        } catch (error) {
            setMessage("Error logging in");
        }
    };


    const goToRegisterPage = () => {
        navigate("/register");
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Login</button>
            </form>

            {message && <p>{message}</p>}


            <button onClick={goToRegisterPage}>
                Don't have an account? Register here
            </button>
        </div>
    );
};

export default Login;
