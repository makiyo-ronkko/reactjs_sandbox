import React, { useState } from "react";
import "./NewPost.css";
import axios from 'axios';

const NewPost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    desc: "",
    img: ""
  });

  const changeValueHandler = (e) => {
    setNewPost({
      ...newPost,//spread the exsiting object
      [e.target.name]: e.target.value,
    });
  };

  /* const addPostHandler = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/posts', newPost)
      .then(response => {
        console.log(response);
      }); // sending newPost to axios local host json database
  } */
  const addPostHandler = (e) => {
    e.preventDefault();
    // updating the list
    setNewPost({ ...newPost, [e.target.name]: e.target.value })
  }

  return (
    <>
      <form className="newPost">
        <h2>Add new post</h2>

        <div>
          <label htmlFor="title">TITLE</label>
          <input type="text" name="title" id="title" onChange={changeValueHandler} />
        </div>
        <div>
          <label htmlFor="desc">DESCRIPTION</label>
          <textarea type="text" name="desc" id="desc" onChange={changeValueHandler} />
        </div>
        <div>
          <label htmlFor="img">IMAGE URL</label>
          <input type="text" name="img" id="img" onChange={changeValueHandler} />
        </div>
        <div>
          <button type="submit" onClick={addPostHandler}>Add new post</button>
        </div>
      </form>
    </>
  );
};

export default NewPost;
