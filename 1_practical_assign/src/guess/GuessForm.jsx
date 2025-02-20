import React from 'react';

const GuessForm = ({ setUserGuess, handleGuess }) => {
    const handleInputChange = (e) => {
        setUserGuess(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleGuess(Number(e.target.guess.value)); // Convert input to number
    };

    return (
        <form onSubmit={handleSubmit} className="guess-form">
            <input
                type="number"
                id="guess"
                name="guess"
                placeholder="Enter your guess"
                min="1"
                max="100"
                required
                onChange={handleInputChange}
                className="guess-input"
            />
            <button type="submit" className="guess-button">Guess</button>
        </form>
    );
};

export default GuessForm;
