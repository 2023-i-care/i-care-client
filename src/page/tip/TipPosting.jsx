import React from 'react';
import './TipPosting.css';
import Group2 from '../../img/Group2.png';

const TipPosting = () => {

    return(
        <div>
            <table border={1}>
                <thead>
                    <tr>
                    <th></th>
                    <button className='group2'><img src={Group2} alt="group"/></button>
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

export default TipPosting;