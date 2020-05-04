import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";

const MainNav = () => {
    return (
        <Nav as="ul" className="justify-content-center" >
            <Nav.Item as="li" >
                <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link><Link to="/about">About</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link><Link to="/newpost">NewPost</Link></Nav.Link>
            </Nav.Item>
        </Nav >
    );
}

export default MainNav;
