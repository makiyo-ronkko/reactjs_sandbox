import React from 'react';
import { useParams } from 'react-router-dom';
import './Post.css';

const Post = (props) => {
    let { blogId } = useParams();
    return (

        <div className="post-container">
            <h1>BlogPost: {blogId}</h1>
            <img src={props.img} alt={props.title} />
            <div className="post-text">
                <h2>{props.title}</h2>
                <p>{props.author}</p>
                <p>{props.desc}</p>
            </div>
        </div>
    );
}

export default Post;