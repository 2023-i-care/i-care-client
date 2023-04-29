import React from 'react';
import { useState } from 'react';
import './TipPosting.module.css';
import Group2 from '../../img/Group2.png';
const TipPosting = () => {

    return(
        <div>
             
             <div class="form-group">
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='제목 입력' style={{width:"100%" , marginBottom:"10px", marginTop:"30px"}}></input>
            </div>
            <div class="form-group">
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='내용 입력' style={{width:"100%" , marginBottom:"10px", height:"1000px", verticalAlign:"top"}}></input>
            </div>
            <button type="button" class="btn btn-outline-warning" style={{marginLeft:"300px"}}>등록</button>
           
        </div>
    )
}

export default TipPosting;