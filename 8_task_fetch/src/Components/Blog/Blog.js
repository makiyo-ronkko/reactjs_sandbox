import React from 'react';
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import Post from '../Post/Post';
import postdata from '../../postdata';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Cards from '../Cards/Cards';


const Blog = () => {

    //let { path, url } = useRouteMatch();
    let match = useRouteMatch();
    const posts = postdata;

    const blogList = posts.map((post) => {// create a new array from postdata
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={post.img} alt={post.title} className="m-0" />
                <Card.Body>
                    <div key={post.id}></div>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.author}</Card.Text>
                    <Card.Text>{post.desc}</Card.Text>
                    <Link to={`${match.url}/${post.title}`} >Read More</Link>
                </Card.Body>

            </Card>
        );
    })



    {/* The Blog page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an main "index" page for all topics, or
          the page that is shown when no topic is selected */}
    return (
        <CardGroup>
            <Switch>
                {/* if path is matching with "/blog/:postId", show Post component */}
                <Route path="/blog/:postId">
                    <Post />
                </Route >
                {/* if path is not matching, show blogList component */}
                <Route path={match.path}>{blogList}</Route>
                <Route path='/blog/:postId'>
                    <Cards />
                </Route>
            </Switch>
        </CardGroup>
    );

};

export default Blog;