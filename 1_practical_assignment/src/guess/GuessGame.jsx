import React, { useState, useEffect } from 'react';
import GuessForm from './GuessForm';
import Message from './Message';

const GuessGame = () => {
    const [randomNumber, setRandomNumber] = useState(null);
    const [userGuess, setUserGuess] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [message, setMessage] = useState('');
    const [guessHistory, setGuessHistory] = useState([]); // Store the guesses

    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * 100) + 1);
    }, []);

    const handleGuess = (guess) => {
        setAttempts(attempts + 1);
        setGuessHistory([...guessHistory, guess]); // Add the new guess to the history

        if (guess < randomNumber) {
            setMessage('Try larger');
        } else if (guess > randomNumber) {
            setMessage('Try smaller');
        } else {
            setMessage('Correct!');
        }
    };

    return (
        <div className="container">
            <h1 className="title">Number Guessing Game</h1>
            <GuessForm setUserGuess={setUserGuess} handleGuess={handleGuess} />
            <Message message={message} attempts={attempts} />
            <div className="guess-history">
                <h3>Your Guesses:</h3>
                <ul className="guess-list">
                    {guessHistory.map((guess, index) => (
                        <li key={index} className="guess-item">{guess}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GuessGame;
