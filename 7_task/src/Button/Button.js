import React, { Children } from 'react';
import './Button.css';


const Button = ({ clickHandler, text, children }) => {
    return (
        <div className="button-container">
            <button onClick={clickHandler}>
                {text}
                {children}
            </button>
        </div>
    );
}


export default Button;
