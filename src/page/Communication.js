import './Communication.css';
import {Route} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from '../img/logo.png'
import profile from '../img/profile.png';
import React, { useState } from 'react';
<<<<<<< HEAD:src/Communication.js
import styled from 'styled-components';
import heart from './heart.png';
import Vector from './Vector.png';
=======

>>>>>>> 2c0bdf1b5c4bdaa3d4f51b6de00dedec2c478145:src/page/Communication.js

const Communication = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar_logo'>
                    <a href=''>
                        <img src={logo} alt='logo'/>
                    </a>
                </div>
                <ul className={`navbar_menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href=''>소통방</a></li>
                    <li><a href=''>육아팁</a></li>
                    <li><a href=''>다이어리</a></li>
                    <a href='#' className='navbar_toggleBtn' onClick={toggleMenu}>
                        <li><img src={profile}/></li>
                    </a>
                </ul>
                <a href='#' className='navbar_toggleBtn'>
                    <FontAwesomeIcon icon={faBars} />
                </a>
            </nav>

            <body>
                <button className='story'>당신의 이야기를 들려주세요</button>

                <div className='communi-box'>
                    산후 우울증에 대해...
                               
                    <img className='heart' src={heart} alt="heart"/>
                    <img className='Vector' src={Vector} alt="Vector"/>
                    
                </div>
            </body>
        </div>
    );
};

export default Communication;