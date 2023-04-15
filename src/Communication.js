import './Communication.css';
import {Route} from 'react-router-dom';
import mom from './mom.png'
import baby from './baby.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import styled from 'styled-components';
import heart from './heart.png';
import Vector from './Vector.png';

const Communication = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar_logo'>
                    <a href=''><img src={baby} alt="logo"/></a>
                </div>
                <ul className={`navbar_menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href=''>소통방</a></li>
                    <li><a href=''>육아팁</a></li>
                    <li><a href=''>다이어리</a></li>
                    <li><img src={mom} alt="mom"/></li>
                </ul>

                <a href='#' className='navbar_toggleBtn' onClick={toggleMenu}>
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