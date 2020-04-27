import React from 'react';
import { useParams } from 'react-router-dom';
import './Post.css';

const Post = () => {
    let { blogId } = useParams();
    return (
        <h1>BlogPost: {blogId}</h1>
    );
}

export default Post;