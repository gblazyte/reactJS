import React from 'react';

const Message = ({ message, attempts }) => {
    return (
        <div className="message-container">
            {message && <p className="message-text">{message}</p>}
            <p className="attempts-text">Attempts: {attempts}</p>
        </div>
    );
};

export default Message;
