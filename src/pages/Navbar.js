import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`${styles.navbar}`}>
            <div className={`${styles.navbar_logo}`}>
                <a className={`${styles.a}`} href='/'>
                    <img className={`${styles.logo}`} src="logo.png" alt='logo' />
                </a>
                <input className={`${styles.input}`} />
                <button className={`${styles.group}`}><img src="Group.png" /></button>
            </div>
            <ul className={`${styles.navbar_menu} ${isMenuOpen ? 'active' : ''}`}>
                <li><a className={`${styles.a}`} href='/community'>소통방</a></li>
                <li><a className={`${styles.a}`} href='/tip'>육아팁</a></li>
                <li><a className={`${styles.a}`} href='/diary'>다이어리</a></li>
                <li><a className={`${styles.a}`} href='/mypage'><img className={`${styles.profile}`} src="profile.png" /></a></li>
            </ul>
            <a href='#' className={`${styles.navbar_toggleBtn}`} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </a>
        </nav>
    );
};

export default Navbar;