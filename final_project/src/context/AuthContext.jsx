import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) {
            setUser(savedUser);
        }
    }, []);

    const setUserAndSave = (user) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    };


    const register = async (name, email, password) => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", {
                name,
                email,
                password
            });
            setUserAndSave(response.data);
            return { success: true, data: response.data };
        } catch (error) {
            console.error("Registration failed:", error.response?.data?.error || error.message);
            return { success: false, error: error.response?.data?.error || "Registration failed" };
        }
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password
            });
            setUserAndSave(response.data);
            return { success: true };
        } catch (error) {
            console.error("Login failed:", error.response?.data?.error || error.message);
            return { success: false, error: error.response?.data?.error || "Login failed" };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};
