import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Nav from '../Nav/Nav';


const Header = () => {
    return (
        <div className="nav-container">
            <Link to="/">Makiyo's Portfolio</Link>
            <Nav />
        </div>
    );
};

export default Header;