import './Communication.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import heart from '../../img/heart.png';
import pink_heart from '../../img/pink_heart.png';
import styled from "styled-components";

const CommunityList = () => {
    const [isClick, setIsClick] = useState(false);

    const click_heart = () => {
        setIsClick(!isClick);
    }
   
    return (
        <div>
            <Button href="/community/posting">당신의 이야기를 들려주세요</Button>
            <div className={`${communitycss.communi_box}`}>
                산후 우울증에 대해...
                            
            <input type="text" className={`${communitycss.communi}`} placeholder='따뜻한 말 한마디 해주세요'></input>
            <img src={isClick? pink_heart: heart} alt='img' onClick={click_heart} className={` ${communitycss.heart}`}/>
                
            </div>
        </div>
    );
};

const Button = styled.a`
    width: 100px;
    margin: auto;
    display: block;
    margin-top: 100px;
    width: 500px;
    height: 30px;
    border-radius: 30px;
    background-color: #FFF9E3;
    text-align: center;
    text-decoration: none;
    box-shadow: 5px 5px 5px rgb(145, 145, 145);
    color: #F6D697;
`;

export default CommunityList;