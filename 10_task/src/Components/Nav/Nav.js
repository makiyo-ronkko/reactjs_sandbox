import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container" >
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/newpost">New Post</Link>
          </li>
          {/* <li>
            <Link to="/formexample">PreOrder Form</Link>
          </li> */}
        </ul>
      </nav>
    </div >
  );
};

export default Nav;
