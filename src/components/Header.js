import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ darkMode, set }) => {

    const [expand, setExpand] = useState(false);

    return (
        <Navbar expand='md' variant={darkMode ? 'dark' : 'light'} expanded={expand} onToggle={() => setExpand(!expand)}>
            <Navbar.Brand>Savez Siddiqui</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Link className='nav-link' onClick={() => setExpand(false)} to='/home'><i className="fas fa-home"></i>{' '}Home</Link>
                    <Link className='nav-link' onClick={() => setExpand(false)} to='/experience'><i className="far fa-star"></i>{' '}Experience</Link>
                    <Link className='nav-link' onClick={() => setExpand(false)} to='/projects'><i className="fas fa-tasks"></i>{' '}Projects</Link>
                    <Link className='nav-link' onClick={() => setExpand(false)} to='/about'><i className="far fa-address-card"></i>{' '}About</Link>
                    <Nav.Link
                        onClick={() => {
                            set(!darkMode);
                            setExpand(false);
                        }}
                    >
                        <i className={darkMode ? "far fa-sun" : "far fa-moon"}></i>{' '}
                        {darkMode ? 'light' : 'dark'}
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
