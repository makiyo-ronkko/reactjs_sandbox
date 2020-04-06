import React, { Component } from 'react'; //rcc
import './App.css';
import Circle from './Circle/Circle';

class App extends Component {

  state = {
    score: 0,
  };
  //(circleId) is parameter, 1 2 3 and 4.
  clickHandler = (circleId) => {
    console.log('Clicked!', circleId);
    this.setState({
      score: this.state.score + 1
    })
  }

  render() {
    return (
      <div>

        <div className='header-container'>
          <h1>Speed Game</h1>
          <p>Your score: {this.state.score}</p>
        </div>

        <main>
          <Circle click={this.clickHandler.bind(this, 1)} />
          <Circle click={this.clickHandler.bind(this, 2)} />
          <Circle click={this.clickHandler.bind(this, 3)} />
          <Circle click={this.clickHandler.bind(this, 4)} />
        </main>

        <div className='button-container'>
          <button>Start Game</button>
          <button>End Game</button>
        </div>

      </div >
    )
  }



}

export default App;
