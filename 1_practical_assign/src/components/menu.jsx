import React from 'react';

const Menu = ({ activeSection, setActiveSection }) => {
    const handleClick = (section) => {
        setActiveSection(section); // Update active section
    };

    return (
        <nav>
            <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
                <li
                    onClick={() => handleClick('taskList')}
                    style={{
                        padding: '10px',
                        cursor: 'pointer',
                        backgroundColor: activeSection === 'taskList' ? '#ddd' : 'transparent',
                    }}
                >
                    Task List
                </li>
                <li
                    onClick={() => handleClick('shopping')}
                    style={{
                        padding: '10px',
                        cursor: 'pointer',
                        backgroundColor: activeSection === 'shopping' ? '#ddd' : 'transparent',
                    }}
                >
                    Shopping Cart
                </li>
                <li
                    onClick={() => handleClick('guess')}
                    style={{
                        padding: '10px',
                        cursor: 'pointer',
                        backgroundColor: activeSection === 'guess' ? '#ddd' : 'transparent',
                    }}
                >
                    Guessing Game
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
