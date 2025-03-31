import React from "react";
// import "../App.css";

const UserCard = React.memo(({ user }) => {
    return (
        <div className="user-card">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>City: {user.city}</p>
        </div>
    );
});

export default UserCard;
