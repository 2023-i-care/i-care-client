import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from '../img/logo.png'
import profile from '../img/profile.png';
import Group from '../img/Group.png';
import React, { useState } from 'react';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='navbar'>
            <div className='navbar_logo'>
                <a href='/'>
                    <img className='logo' src={logo} alt='logo' />
                    <input className='input' />
                    <button className='group'><img src={Group} /></button>
                </a>
            </div>
            <ul className={`navbar_menu ${isMenuOpen ? 'active' : ''}`}>
                <li><a href='/community'>소통방</a></li>
                <li><a href='/tip'>육아팁</a></li>
                <li><a href='/diary'>다이어리</a></li>
                <li><a href='/mypage'><img className='profile' src={profile} /></a></li>
            </ul>
            <a href='#' className='navbar_toggleBtn' onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </a>
        </nav>
    );
};

export default Navbar;