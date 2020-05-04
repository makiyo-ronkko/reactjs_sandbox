import React from 'react';
import { useParams, Link } from 'react-router-dom';
import postdata from '../../postdata';
import Card from 'react-bootstrap/Card';

const Post = () => {
    let { postId } = useParams();
    let post = postdata.find((p) =>
        p.title === postId);

    return (
        <Card style={{ width: '20rem' }} border="primary">
            <div className="post-container">
                <Card.Img src={post.img} alt={post.title} className="m-0" fluid />
                <div className="post-text">
                    <Card.Title className="m-2" >{post.title}</Card.Title>
                    <Card.Text className="m-2">{post.author}</Card.Text>
                    <Card.Text className="m-2">{post.desc}</Card.Text>
                    <Link to="/blog" className="m-2">Back to Blog page</Link>
                </div>
            </div>
        </Card>
    );
};

export default Post;