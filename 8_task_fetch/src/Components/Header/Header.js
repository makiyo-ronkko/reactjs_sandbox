import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../MainNav/MainNav';
import Navbar from "react-bootstrap/Navbar";



const Header = () => {
    return (
        <Navbar bg="light" expand="lg" variant="dark">
            <Navbar.Brand><Link to="/">Makiyo's Portfolio</Link></Navbar.Brand>
            <MainNav />

        </Navbar>
    );
};

export default Header;