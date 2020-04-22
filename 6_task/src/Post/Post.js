import React from 'react';
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";


const Post = (props) => {

    return (
        <div className="card-container" >
            <div className="click-remove" onClick={props.removeClick}>
                <p>x</p>
            </div>
            <img src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.author}</p>
            <p>{props.desc}</p>
            <p>
                Total likes: {props.likes}
                <FontAwesomeIcon onClick={props.likeClick} icon={faThumbsUp} />
            </p>
        </div>
    );
};

export default Post;
