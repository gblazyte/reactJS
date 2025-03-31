import React, { useState, useMemo, useCallback, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import { users } from "./data";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); 

  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const clearSearch = () => {
    setSearchTerm("");
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  useEffect(() => {
    setLoading(false); 
  }, []); 

  return (
    <div className="app-container">
      <h1>User Search</h1>

      {loading ? (
        <p className="loading-message">Loading...</p>
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
