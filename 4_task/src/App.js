import React, { Component } from 'react';

class App extends Component {

  state = {
    value: ""
  };

  changeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState(
      { [nam]: val }
    );
  };

  render() {
    return (
      <div>
        <form>
          <h1>Please enter your information</h1>
          <label htmlFor="first">First name:
              <input type='text' name='first' onChange={this.changeHandler} placeholder="Enter your first name" />
          </label>
          <label htmlFor="last">Last name:
              <input type='text' name='last' onChange={this.changeHandler} placeholder="Enter your last name" />
          </label>
          <label htmlFor="phone">Phone number:
              <input type='text' name='phone' onChange={this.changeHandler} placeholder="Enter your phone number" />
          </label>
          <label htmlFor="message">Message:
              <input type='text' name='message' onChange={this.changeHandler} placeholder="Enter your message" />
          </label>
        </form>

        <div class="view">
          <h1>Result</h1>
          <p>First Name:<span>{this.state.first}</span> </p>
          <p>Last Name:<span>{this.state.last}</span></p>
          <p>Phone Number:<span>{this.state.phone}</span></p>
          <p>Message:<span>{this.state.message}</span></p>
        </div>

      </div>
    )
  }
}


export default App;
