import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import MoodCard from './MoodCard';

const Mood = ({ initialMoods }) => {
    const initialState = JSON.parse(window.localStorage.getItem('moods'));
    const [moods, setMoods] = useState(initialMoods || initialState);

    /*  useEffect(() => {
         axios.get('http://localhost:3001/moods')
             .then(response => {
                 setMoods(response.data);
             });
     }, []); */

    useEffect(() => {
        window.localStorage.setItem('items', JSON.stringify(moods));
    }, [moods])

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
            <h2>Welcome!</h2>
            <h3 style={{ textAlign: "center", margin: "1rem" }}>What is your mood today? <br />Add some number to indicate your feelings.</h3>
            {moods.map(mood => (
                <MoodCard key={mood.id} {...mood} updateLike={updateLike} />))}
        </div>
    );
}

export default Mood;
