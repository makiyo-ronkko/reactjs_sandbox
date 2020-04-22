import React, { Component } from 'react'; //rcc
import './App.css';
import Circle from './Circle/Circle';
import GameOver from './GameOver/GameOver';

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};

class App extends Component {

  state = {
    score: 0,
    current: 0,
    showGameOver: false,
    rounds: 0,
    endMessage: '',
  };

  // place variables higher as possible
  pace = 1000;
  timer = undefined;

  // next function is finding a new number
  next = () => {

    if (this.state.rounds >= 100) {
      this.endHandler();
      return; // to end the game 
    }

    let nextActive = undefined; //initially undecided

    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current) //get a new random number until next active and current numbers are same

    this.setState({ // current becomes nextActive number
      current: nextActive, // keep looping until the game ends
      rounds: this.state.rounds + 1, // state round +1
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.next, this.pace); //two properties, which function, which speed
    console.log('this is active circle', this.state.current);
  };

  // finding a random number

  //(circleId) is parameter, 1 2 3 and 4.
  clickHandler = (circleId) => {
    let audio = new Audio("/soundeffect.mp3");

    console.log('Clicked!', circleId);

    if (this.state.current !== circleId) {
      this.endHandler();
      return;
    }

    audio.play();

    this.setState({
      score: this.state.score + 1,
      roudns: 0,
    });
  };

  // starting the game and running the next() function
  startHandler = () => {
    this.next();
  };

  // ending the game by using clearTimeout()
  endHandler = () => {
    let audio = new Audio("/gameend.mp3");
    let endScore = undefined;

    if (this.state.score <= 5) {
      endScore = "Your score is less than 5, do it again!"
    }
    if (this.state.score <= 10) {
      endScore = "You can do it better!"
    }
    if (this.state.score > 10) {
      endScore = "Good job!"
    }
    if (this.state.score >= 15) {
      endScore = "you did it great!"
    }

    clearTimeout(this.timer);

    this.setState({
      showGameOver: true,
      endMessage: endScore,
    })
    audio.play();

  };

  render() {
    return (
      <div>
        <div className='header-container'>
          <h1>Pat the Shibainu</h1>
          <p>Your score: <span>{this.state.score}</span></p>
        </div>

        {/* if the circle is clicked, clickHandler binds an individual circle to the number 1-4 */}

        <main>
          <Circle active={this.state.current === 1} click={this.clickHandler.bind(this, 1)} defaultColor='#FCF3CF' />
          <Circle active={this.state.current === 2} click={this.clickHandler.bind(this, 2)} defaultColor='#F0B27A' />
          <Circle active={this.state.current === 3} click={this.clickHandler.bind(this, 3)} defaultColor='#EC7063' />
          <Circle active={this.state.current === 4} click={this.clickHandler.bind(this, 4)} defaultColor='#5DADE2' />
        </main>

        <div className='button-container'>
          <button onClick={this.startHandler}>Start Game</button>
          <button onClick={this.endHandler}>End Game</button>
        </div>
        {this.state.showGameOver && <GameOver score={this.state.score} endMessage={this.state.endMessage} />}
      </div > // curly braces wrapping GameOver is JS, comparison. 
    )   // if showGameOver and GameOver are matching
  }



}

export default App;
