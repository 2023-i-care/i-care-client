import './TipList.module.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import heart from '../../img/heart.png';
import communi from '../../img/communi.png';
import pink_heart from '../../img/pink_heart.png';
import styled from "styled-components";


const TipList = () => {
    const [isClick, setIsClick] = useState(false);

   

    const click_heart = () => {
        setIsClick(!isClick);
    }

   
    return (
        <div>

            <body>
            <>
            <Button href="/Tip/posting">당신의 팁을 들려주세요</Button>
            </>

                <div className='communi-box'>
                    아이가 잠을 안 잘때!
                               

                <img src={isClick? pink_heart: heart} alt='img' onClick={click_heart} className='heart'/>
                    
                    <img className='communi' src={communi} alt="communi"/>
                    
                </div>
            </body>
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
export default TipList;