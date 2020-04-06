import React from 'react';
import './Circle.css';

//props are arguments passed into React Components. also passed to components via HTML attributes.
const Circle = (props) => {
    return ( // if active add active to className
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