import './communityList.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from "styled-components";


const CommunityList = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClick, setIsClick] = useState(false);



    const click_heart = () => {
        setIsClick(!isClick);
    }


    return (
        <div>
            <p className='p'>제목</p>
            <hr className='hr' size="3" color='#FDEBC7'></hr>
            <p className='p'>제목</p>
            <hr className='hr' size="3" color='#FDEBC7'></hr>
            <p className='p'>제목</p>
            <hr className='hr' size="3" color='#FDEBC7'></hr>
            <p className='p'>제목</p>
            <hr className='hr' size="3" color='#FDEBC7'></hr>
            <p className='p'>제목</p>
            <hr className='hr' size="3" color='#FDEBC7'></hr>
            <p className='p'>제목</p>
            <hr className='hr' size="3" color='#FDEBC7'></hr>
        </div>
    );
};
export default CommunityList;