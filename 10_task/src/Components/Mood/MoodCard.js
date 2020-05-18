import React from 'react';
import './MoodCard.css';

const MoodCard = ({ id, title, like, updateLike }) => {


    const subtractLike = () => updateLike(id, like - 1);
    const addLike = () => updateLike(id, like + 1)

    return (
        <div className="moodCard">
            <div>{title}</div>
            <div>
                <button onClick={subtractLike} disabled={like <= 0}>-</button>
                {like}
                <button onClick={addLike}>+</button>
            </div>
        </div >
    );
}

export default MoodCard;
