import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BottomNav = ({ darkMode, set }) => {
    return (
        <Navbar className='fixed-bottom justify-content-center' variant={darkMode ? 'dark' : 'light'}
            style={{ boxShadow: `0 -.5rem 1rem rgba(0,0,0,.15)` }}>
            <Nav>
                <Link to='' className='nav-link mx-2'>
                    <i onClick={() => { set(!darkMode) }} className={darkMode ? "far fa-sun" : "far fa-moon"}></i>{' '}
                </Link>
                <Link className='nav-link mx-2' to='/home'><i className="fas fa-home"></i>{' '}</Link>
                <Link className='nav-link mx-2' to='/experience'><i className="far fa-star"></i>{' '}</Link>
                <Link className='nav-link mx-2' to='/projects'><i className="fas fa-tasks"></i>{' '}</Link>
                <Link className='nav-link mx-2' to='/about'><i className="far fa-address-card"></i>{' '}</Link>
            </Nav>
        </Navbar>
    )
}

export default BottomNav;
