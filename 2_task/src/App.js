import React from 'react'; //React component, 'react' module
import './App.css';
import Person from './Person/Person'; //Person component from js file

const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Hellow, again!</p>
      <Person name="Margit" age="39" />
      <Person name="Mark" age="35" />
      <Person name="Jane" age="29" />
      <Person name="James" age="19" />
      <Person name="Tom" age="69" />
      <Person name="Tommy" age="59" />
    </div>
  );
};


export default App;
