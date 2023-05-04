import React from 'react';
import Navbar from '../Navbar';
import styles from '../../styles/CommunityPosting.module.css';

const CommunityPosting = () => {
    return(
        <div>
            <Navbar />
            <div className="form-group">
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='제목 입력' style={{width:"100%" , marginBottom:"10px", marginTop:"30px"}}></input>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='내용 입력' style={{width:"100%" , marginBottom:"10px", height:"1000px", verticalAlign:"top"}}></input>
            </div>
            <button type="button" className="btn btn-outline-warning" style={{marginLeft:"300px"}}>등록</button>
        </div>
    )
}

export default CommunityPosting;