import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FullPost.css";

import axios from 'axios';

import postdata from "../../postdata";

const FullPost = () => {
  const [loadedPost, setLoadedPost] = useState(); // when post is loaded, update to this
  let { postId } = useParams();
  let post = postdata.find((p) => p.id == postId);

  /* useEffect(() => { //to get specific url
    if (!loadedPost) { // if no loadedPost show axios
      axios.get('http://localhost:3001/posts/' + postId)
        .then((response) => {
          console.log(response.data);
          setLoadedPost(response.data);
        });
    }
  }, []); */
  /* 
    let postData = undefined;
  
    if (postId) {
      postData = <h1>Loading post..</h1>
    }
  
    if (loadedPost)  */
  const postData = (
    <div className="fullPost">
      <div className="container">
        <div className="text-container">
          <h1 className="container-title">Post {post.id}</h1>
          <h2 >{post.title}</h2>
          <p>{post.desc}</p>
        </div>
        <div className="image-container">
          <img src={post.img} alt={post.title} />
        </div>
      </div>
      {/*  <h1>Post {loadedPost.id}</h1>
        <p>{loadedPost.title}</p>
        <p>{loadedPost.desc}</p> */}
      {/* <img src={loadedPost.thumbnailUrl} alt={loadedPost.title} /> */}
      {/* <img src={loadedPost.img} alt={loadedPost.title} /> */}
    </div >
  );


  return (postData);

  /* <div className="fullPost">
      <h1>Post {post.id}</h1>
      <p>{post.title}</p>
      <img src={post.img} alt={post.title} />
    </div> */

};

export default FullPost;
