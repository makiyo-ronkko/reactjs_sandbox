import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };

        // You should bind this object to componentWillMount method, other setState was not working
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({ posts: data }));
    }

    render() {

        const { posts } = this.state;

        return (
            <ul>
                {posts.map(post =>
                    <li key={post.title}>
                        {post.title}
                        {post.body}
                    </li>
                )}
            </ul>
        );
    }
}


export default Cards;
