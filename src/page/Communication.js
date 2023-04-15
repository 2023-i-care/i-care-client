import './Communication.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import logo from '../img/logo.png'
import mom from '../img/mom.png';
import React, { useState } from 'react';
import heart from '../img/heart.png';
import communi from '../img/communi.png';
import pink_heart from '../img/pink_heart.png';
import Group from '../img/Group.png';


const Communication = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const [text, setText] = useState('');

   

    const click_heart = () => {
        setIsClick(!isClick);
    }

    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
   
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar_logo'>
                    <a href=''>
                        <img className='logo' src={logo} alt='logo'/>
                        <input className='input'/>
                        <button className='group'><img src={Group}/></button>
                    </a>
                </div>
                <ul className={`navbar_menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href=''>소통방</a></li>
                    <li><a href=''>육아팁</a></li>
                    <li><a href=''>다이어리</a></li>
                    <li><img className='mom' src={mom}/></li>
                </ul>
                <a href='#' className='navbar_toggleBtn' onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </a>
            </nav>

            <body>
                <Link to='/writing' className='story'>당신의 이야기를 들려주세요</Link>

                <div className='communi-box'>
                    산후 우울증에 대해...
                               

                <img src={isClick? pink_heart: heart} alt='img' onClick={click_heart} className='heart'/>
                    
                    <img className='communi' src={communi} alt="communi"/>
                    
                </div>
            </body>
        </div>
    );
};

export default Communication;