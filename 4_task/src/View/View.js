import React from 'react';
import './View.css';

const View = props => {
    return (
        <div className="view">
            <h1>Result</h1>
            <p>First Name:<span>{props.firstName}</span> </p>
            <p>Last Name:<span>{props.lastName}</span></p>
            <p>Phone Number:<span>{props.phoneNumber}</span></p>
            <p>Message:<span>{props.message}</span></p>
        </div>
    );
};

export default View