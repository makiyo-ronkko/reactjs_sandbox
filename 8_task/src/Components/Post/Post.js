import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Post.css';
import postdata from '../../postdata';

const Post = () => {
    let { postId } = useParams();
    let post = postdata.find((p) =>
        p.title === postId);

    return (
        <div className="post-container">
            <img src={post.img} alt={post.title} />
            <div className="post-text">
                <h2>{post.title}</h2>
                <p>{post.author}</p>
                <p>{post.desc}</p>
                <Link to="/blog">Back to Blog page</Link>
            </div>
        </div>
    );
};

export default Post;