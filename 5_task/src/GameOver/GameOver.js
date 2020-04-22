import React from 'react';
import './GameOver.css';

const closeHandler = () => {
    window.location.reload();
};

const GameOver = (props) => {
    return (
        <div className="overlay">
            <div className="popup-box">
                <button onClick={closeHandler} >close</button>
                <div>
                    <h2>Game Over!</h2>
                    <p>Your final score: <span>{props.score}</span></p>
                    <p><span>{props.endMessage}</span></p>
                </div>
            </div>
        </div>
    )
}


export default GameOver;