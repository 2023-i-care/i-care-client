import React from 'react';
import { useState } from 'react';
import logo from '../img/logo.png';
import Group from '../img/Group.png';
import mom from '../img/mom.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import './Writing.css';
import Group2 from '../img/Group2.png';
const Writing = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <div>
            <nav className='navbar'>
                <div className='navbar_logo'>
                    <a herf=''>
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
            <table border={1}>
                <thead>
                    <tr>
                    <th></th>
                    <button className='group2'><img src={Group2}/></button>
                    </tr>
                </thead>
            </table>
                <thead>
                <textarea className='text' placeholder="내용을 입력하세요."></textarea>
                </thead>
                <button className='up'>올리기</button>
            

           
        </div>
    )
}

export default Writing;