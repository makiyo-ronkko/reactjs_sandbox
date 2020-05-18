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
      <h1 style={{ margin: "30px" }}>Welcome!</h1>
      <Mood initialMoods={moods} />
      <h2 onClick={toggleMood} style={{ textAlign: "center", cursor: "pointer", margin: "1rem", color: mood ? 'orange' : 'green' }}>{mood ? "Give me high five! (^.^)/" : "Kiitos (`.`)♡"}</h2>
      <img alt="home" src="https://source.unsplash.com/1600x900/?color" />
      <p style={{ margin: "30px", textAlign: "center" }}>{message}</p>
    </div>
  );
};

export default Home;
