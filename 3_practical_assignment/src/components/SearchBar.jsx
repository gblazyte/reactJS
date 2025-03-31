import React from "react";
// import "../App.css";

const SearchBar = ({ searchTerm, onSearch, onClear }) => {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
                className="search-bar"
            />
            {searchTerm && (
                <button className="clear-btn" onClick={onClear}>
                    Clear
                </button>
            )}
        </div>
    );
};

export default SearchBar;
