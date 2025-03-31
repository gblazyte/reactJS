import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
    return useContext(AuthContext);
};

// Provider to wrap app and manage state
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Simulate checking localStorage for saved user (to keep user logged in across refreshes)
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) {
            setUser(savedUser);
        }
    }, []);

    // Login function (simulate login)
    const login = (email, password) => {
        // Normally you'd send a request to the server, but here we'll simulate successful login
        const mockUser = { email, name: "John Doe" };
        setUser(mockUser);
        localStorage.setItem("user", JSON.stringify(mockUser)); // Save user in localStorage
    };

    // Logout function
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
