import React from "react";

import "./PostCard.css";
import { Link } from "react-router-dom";

const PostCard = ({ title, img, desc, link, remove }) => {
  return (
    <div className="postCard">
      <h2>{title}</h2>
      <p>{desc}</p>
      <img src={img} alt={title} />
      <Link to={link} style={{ color: "black", fontWeight: "bold", }}>Read more</Link>
      <p onClick={remove} style={{ cursor: "pointer" }}>Remove this post</p>
    </div>
  );
};

export default PostCard;
