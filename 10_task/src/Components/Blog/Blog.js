import React, { useState, useEffect } from "react";
import axios from 'axios';

import PostCard from "../PostCard/PostCard";
import { Switch, Route, useRouteMatch } from "react-router-dom";

//import postdata from "../../postdata";
import FullPost from "../FullPost/FullPost";

const Blog = () => {

  const [post, setPost] = useState([]); // when updating component with functional component

  let match = useRouteMatch();

  useEffect(() => {
    //axios.get('http://jsonplaceholder.typicode.com/photos')
    axios.get('http://localhost:3001/posts')
      .then((response) => {
        //console.log(response.data); .data is axios data
        //const posts = response.data.slice(0, 10); // result data from 0 to 9
        setPost(response.data);
        //console.log(posts);
      });
  }, []); // empty array to stop loading axios and run only once

  /* axios.get('http://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      //console.log(response.data); .data is axios data
      const posts = response.data.slice(0, 10); // result data from 0 to 9
      console.log(posts);
    }); */


  const removeHandler = (id) => { // identify ID and passing into this function
    console.log(id);

    axios.delete('http://localhost:3001/posts/' + id)
      .then(() => {
        return axios.get('http://localhost:3001/posts');// retun a new post array after deleting the post
      })
      .then(response => {
        setPost(response.data);
      });

  };

  //const PostList = postdata.map((p) => {
  const PostList = post.map((p) => { // getting data from axios
    return (
      <PostCard
        key={p.id}
        title={p.title}
        desc={p.desc}
        img={p.img}
        //img={p.thumbnailUrl}
        link={`${match.url}/${p.id}`}
        remove={() => removeHandler(p.id)}
      />
    );
  });

  return (
    <>
      <Switch>
        <Route path="/blog/:postId">
          <FullPost />
        </Route>
        <Route path={match.path}>
          <div>
            <h1 style={{ margin: "20px" }}>Blog</h1>
            {PostList}
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default Blog;
