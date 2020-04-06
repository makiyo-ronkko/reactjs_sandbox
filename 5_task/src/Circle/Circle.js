import React from 'react';
import './Circle.css';

const Circle = (props) => {
    return (
        <div className={'circle' + (props.active ? ' active' : ' ')}
            onClick={props.click}
            style={{
                backgroundColor: props.active ? props.active : props.defaultColor,
            }}
        >
        </div>
    )
}
// conditional rendering = whether active or not
//if props.active is true, props.active executed otherwise buttonColor

export default Circle;