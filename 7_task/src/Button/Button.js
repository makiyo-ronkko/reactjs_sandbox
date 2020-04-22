import React from 'react';
import './Button.css';


const Button = ({ click, text }) => {
    return (
        <div>
            <button onClick={click}>{text}</button>
        </div>
    );
}


export default Button;
