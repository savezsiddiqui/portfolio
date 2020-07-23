import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="transparent" variant="light">
            <Navbar.Brand>Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link className='nav-link' to='/home'>Home</Link>
                    <Link className='nav-link' to='/experience'>Experience</Link>
                    <Link className='nav-link' to='/projects'>Projects</Link>
                    <Link className='nav-link' to='/education'>Education</Link>
                    <Link className='nav-link' to='/about'>About</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
