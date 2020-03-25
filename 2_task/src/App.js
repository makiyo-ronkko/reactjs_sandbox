import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Margit', age: 39 },
      { name: 'Mark', age: 35 },
      { name: 'Jane', age: 29 },
      { name: 'James', age: 19 },
      { name: 'Tom', age: 69 },
      { name: 'Tommy', age: 59 }
    ]
  };

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>Hellow, again!</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
        <Person name={this.state.persons[4].name} age={this.state.persons[4].age} />
        <Person name={this.state.persons[5].name} age={this.state.persons[5].age} />
      </div>
    );
  }
}

export default App;
