import React, { useState } from 'react';
import Navbar from './Navbar';
import styles from '../styles/Community.module.css'

const CommunityList = () => {
    const [isClick, setIsClick] = useState(false);
    const click_heart = () => {
        setIsClick(!isClick);
    }
   
    return (
        <div>
            <Navbar />
            <a className={`${styles.postingBtn}`} href="/community/posting">당신의 이야기를 들려주세요</a>
            <div className={`${styles.communi_box}`}>
                산후 우울증에 대해...      
                <input type="text" className={`${styles.communi}`} placeholder='따뜻한 말 한마디 해주세요'></input>
                <img src={isClick? "pink_heart.png" : "heart.png"} alt='img' onClick={click_heart} className={`${styles.heart}`}/>               
            </div>
        </div>
    );
};

export default CommunityList;