import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

class Cards extends Component {

    state = {
        post: [],
        number: 4
    }

    addNumber(e) {
        this.setState({
            number: e.target.value
        })
    }

    render() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                let posts = data.map(post => {
                    if (post.userId == this.state.number) {
                        return (
                            <div key={post.userId}>
                                <h4>Post ID: {post.userId}</h4>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        );
                    }
                })
                this.setState({
                    post: posts
                })

                console.log(`Data is ${this.post}`);

                let { jsonId } = useParams();
                let post = posts.find((p) =>
                    p.userId === jsonId);
            })
        return (
            <div><Card style={{ width: '20rem' }}>
                {/* <Card.Img src={post.img} alt={post.title} /> */}
                <div className="post-text">
                    <Card.Title>{this.post.title}</Card.Title>
                    <Card.Text>{this.post.userId}</Card.Text>
                    <Card.Text>{this.post.body}</Card.Text>
                    <Link to="/blog">Back to Blog page</Link>
                </div>
            </Card></div>
        );
    }
}
export default Cards;
