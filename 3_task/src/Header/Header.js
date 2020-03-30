import React from 'react';
import './Header.css';

const Header = () => {
    const date = new Date(); // date method declearing new date object
    return (
        <div className="header">
            <h1>React Task 3</h1>
            <p>Today is: {date.toDateString()}</p>
        </div>
    )
}

export default Header;