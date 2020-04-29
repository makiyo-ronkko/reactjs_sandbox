import React from 'react';
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import './Blog.css';
import Post from '../Post/Post';
import postdata from '../../postdata';


const Blog = () => {

    //let { path, url } = useRouteMatch();
    let match = useRouteMatch();
    const posts = postdata;

    const blogList = posts.map((post) => {// create a new array from postdata
        return (
            <div key={post.id}>
                <img src={post.img} alt={post.title} />
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.author}</p>
                    <p>{post.desc}</p>
                    <Link to={`${match.url}/${post.title}`} >Read More</Link>
                </div>
            </div>
        );
    })

    {/* The Blog page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an main "index" page for all topics, or
          the page that is shown when no topic is selected */}
    return (
        <div>
            <Switch>
                {/* if path is matching with "/blog/:postId", show Post component */}
                <Route path="/blog/:postId">
                    <Post />
                </Route >
                {/* if path is not matching, show blogList component */}
                <Route path={match.path}>{blogList}</Route>
            </Switch>
        </div >
    );

};

export default Blog;