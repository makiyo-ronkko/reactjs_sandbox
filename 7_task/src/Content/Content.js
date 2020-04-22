/* import React, { Component } from 'react';

class Lecture extends Component {
    state = { counter: 0 };

    addHandler = () => this.setState({ counter: this.state.counter + 1 });
    removeHandler = () => this.setState({ counter: this.state.counter - 1 });
    resetHandler = () => this.setState({ counter: 0 });


    render() {
        return (
            <div>
                <h1>This is my votes: {this.state.counter}</h1>
                <button onClick={this.addHandler}>Add one</button>
                <button onClick={this.removeHandler}>Remove one</button>
                <button onClick={this.resetHandler}>Reset</button>
            </div>
        );
    }
}

export default Lecture;
 */

import React from 'react';
import './Content.css';

const Content = (props) => {
    if (props.likecounter === 0 && props.dislikecounter === 0) {
        return (<div className="display-container">
            <h2>If you like this page, please click Like! </h2>
            <h2>Otherwise, click Dislike!</h2>
        </div>);
    } else {

        return (

            <div className="display-container">
                <h1>Click to vote: </h1>
                <h2>Likes: {props.likecounter}</h2>
                <h2>Dislikes: {props.dislikecounter} </h2>
            </div>
        );
    }
}

export default Content;