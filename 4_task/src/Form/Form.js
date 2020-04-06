import React from 'react';
import './Form.css';

const Form = props => {
    return (
        <form>
            <h1>Please enter your information</h1>
            <label htmlFor="first">First name:
              <input type='text' name='first' onChange={props.changeValue} placeholder="Enter your first name" />
            </label>
            <label htmlFor="last">Last name:
              <input type='text' name='last' onChange={props.changeValue} placeholder="Enter your last name" />
            </label>
            <label htmlFor="phone">Phone number:
              <input type='text' name='phone' onChange={props.changeValue} placeholder="Enter your phone number" />
            </label>
            <label htmlFor="message">Message:
              <input type='text' name='message' onChange={props.changeValue} placeholder="Enter your message" />
            </label>
        </form>
    );
};

export default Form