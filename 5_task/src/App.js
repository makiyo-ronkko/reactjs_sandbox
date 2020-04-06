import React, { Component } from 'react'; //rcc
import './App.css';
import Circle from './Circle/Circle';

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};

class App extends Component {

  state = {
    score: 0,
    current: 0,
  };

  // place variables higher as possible
  pace = 1000;
  timer = undefined;

  // next function is finding a new number
  next = () => {
    let nextActive = undefined; //initially undecided

    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current) //get a new random number until next active and current numbers are same

    this.setState({ // current becomes nextActive number
      current: nextActive, // keep looping until the game ends
    });

    this.timer = setTimeout(this.next, this.pace); //two properties, which function, which speed
    console.log('this is active circle', this.state.current);
  };

  // finding a random number

  //(circleId) is parameter, 1 2 3 and 4.
  clickHandler = (circleId) => {
    console.log('Clicked!', circleId);
    this.setState({
      score: this.state.score + 1
    });
  };

  // starting the game and running the next() function
  startHandler = () => {
    this.next();
  };

  // ending the game by using clearTimeout()
  endHandler = () => {
    clearTimeout(this.timer);
  };

  render() {
    return (
      <div>

        <div className='header-container'>
          <h1>Speed Game</h1>
          <p>Your score: {this.state.score}</p>
        </div>

        {/* if the circle is clicked, clickHandler binds an individual circle to the number 1-4 */}
        <main>
          <Circle active={this.state.current === 1} click={this.clickHandler.bind(this, 1)} defaultColor='yellow' />
          <Circle active={this.state.current === 2} click={this.clickHandler.bind(this, 2)} defaultColor='green' />
          <Circle active={this.state.current === 3} click={this.clickHandler.bind(this, 3)} defaultColor='red' />
          <Circle active={this.state.current === 4} click={this.clickHandler.bind(this, 4)} defaultColor='blue' />
        </main>

        <div className='button-container'>
          <button onClick={this.startHandler}>Start Game</button>
          <button onClick={this.endHandler}>End Game</button>
        </div>

      </div >
    )
  }



}

export default App;
