import React, { useState } from "react";
import './Home.css';
import Mood from '../Mood/Mood';
import moodsList from '../../moods.js';

const moods = moodsList

const Home = () => {

  const today = new Date();
  let message = `Good afternoon! Today is ${today}`;

  const [mood, setMood] = useState(true);
  const toggleMood = () => setMood(!mood);


  return (
    <div>
      <div className="welcome-container">
        <p className="container-title" onClick={toggleMood} style={{ textAlign: "center", cursor: "pointer", margin: "1rem", color: "white" }}>{mood ? "Give me high five! (^.^)/" : "Yay! Thanks (`.`)♡"}</p>
        {/* <h1 className="container-title" style={{ margin: "30px" }}>Welcome!</h1> */}
        <Mood initialMoods={moods} />
      </div>

      {/* <img alt="home" src="https://source.unsplash.com/1600x900/?color" /> */}
      <p style={{ margin: "30px", textAlign: "center", background: "rgb(233, 233, 247, 0.52)" }}>{message}</p>
    </div>
  );
};

export default Home;
