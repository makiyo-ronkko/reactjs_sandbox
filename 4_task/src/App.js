import React, { Component } from 'react';
import Form from './Form/Form.js';
import View from './View/View.js';

class App extends Component {

  state = {
    first: "",
    last: "",
    phone: "",
    message: "",
  };

  changeHandler = event => { // function(event)
    let nam = event.target.name;
    let val = event.target.value;
    this.setState(
      { [nam]: val }
    );
  };

  render() {
    return (
      <div>
        <Form changeValue={this.changeHandler} />

        <View firstName={this.state.first} lastName={this.state.last} phoneNumber={this.state.phone} message={this.state.message} />
      </div>
    )
  }
}


export default App;
