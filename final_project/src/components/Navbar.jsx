import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav>
            <ul className="navbar">
                {/* Show Home link regardless of login status */}
                <li>
                    <Link to="/">Home</Link>
                </li>

                {user && (
                    <>
                        <li>
                            <Link to="/add-book">Add Book</Link>
                        </li>
                        <li>
                            <Link to="/edit-book">Edit Book</Link>
                        </li>
                    </>
                )}

                {!user ? (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <span>Welcome, {user.name}</span>
                        </li>
                        <li>
                            <button onClick={logout}>Logout</button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
