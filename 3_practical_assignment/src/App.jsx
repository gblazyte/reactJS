import React, { useState, useMemo, useCallback, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import { users } from "./data";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // Loading state

  // Memoized search function
  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  // Clear Search function
  const clearSearch = () => {
    setSearchTerm("");
  };

  // Memoized user filtering
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // useEffect to handle loading state
  useEffect(() => {
    // Assuming the data is ready or the operation completes immediately
    setLoading(false); // Set loading to false after the operation completes
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <div className="app-container">
      <h1>User Search</h1>

      {/* Show loading spinner/message when loading */}
      {loading ? (
        <p className="loading-message">Loading...</p> // Display loading message
      ) : (
        <>
          <SearchBar searchTerm={searchTerm} onSearch={handleSearch} onClear={clearSearch} />

          {filteredUsers.length === 0 && searchTerm && (
            <p className="no-results">No results found</p>
          )}

          <UserList users={filteredUsers} />
        </>
      )}
    </div>
  );
};

export default App;
