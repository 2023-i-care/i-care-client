import React, { useState } from 'react';
import Navbar from './Navbar';
import styles from '../styles/Tip.module.css';

const TipList = () => {
    const [isClick, setIsClick] = useState(false);

    const click_heart = () => {
        setIsClick(!isClick);
    }
   
    return (
        <div>
            <Navbar/>
            <a className={`${styles.postingBtn}`} href="/tip/posting">당신의 팁을 들려주세요</a>
            <div className={`${styles.communi_bx}`}>
                아이가 잠을 안 잘때!                              
                <input type="text" className={`${styles.communi_tip}`} placeholder='따뜻한 말 한마디 해주세요'></input>
                <img src={isClick? "pink_heart.png": "heart.png"} alt='img' onClick={click_heart} className={`${styles.heart_tip}`}/>             
            </div>
        </div>
    );
};

export default TipList;