import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MoodCard from './MoodCard';

const Mood = () => {
    const [moods, setMoods] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/moods')
            .then(response => {
                setMoods(response.data);
            });
    }, []);

    const updateLike = (id, newLike) => {
        const newMoods = moods.map(mood => {
            if (mood.id === id) {
                return { ...mood, like: newLike }
            }
            return mood;
        });
        setMoods(newMoods);
    }

    return (
        <div>
            <h3 style={{ textAlign: "center", margin: "1rem" }}>What is your mood today? <br />Add some number to indicate your feelings.</h3>
            {moods.map(mood => (
                <MoodCard key={mood.id} {...mood} updateLike={updateLike} />))}
        </div>
    );
}

export default Mood;
