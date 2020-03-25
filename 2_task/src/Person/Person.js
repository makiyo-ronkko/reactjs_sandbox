import React from 'react'; //calling react from node_module
import './Person.css';

const Person = (props) => {
    return (<div class="card"><p>Hello, my name is {props.name} and I am {props.age} years old.</p></div>);
};

export default Person;