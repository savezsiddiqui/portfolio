import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect={true} expand="sm" bg="transparent" variant="light">
            <Navbar.Brand>Savez Siddiqui</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link className='nav-link' to='/home'><i class="fas fa-home"></i>{' '}Home</Link>
                    <Link className='nav-link' to='/experience'><i class="far fa-star"></i>{' '}Experience</Link>
                    <Link className='nav-link' to='/projects'><i class="fas fa-tasks"></i>{' '}Projects</Link>
                    <Link className='nav-link' to='/about'><i class="far fa-address-card"></i>{' '}About</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
