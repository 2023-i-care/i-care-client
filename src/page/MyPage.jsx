import React from "react";
import Navbar from "../components/Navbar";
import profile from "../img/profile.png";
import "./MyPage.css";
const MyPage = () => {
  return (
    <>
      <Navbar />
      <div className="img">
        <img className="img-1" src={profile} alt="프로필"/>
      </div>
      <div>
        <p className="text">
          닉네임 : 설윤 맘미
          <br /> 아이디 : smom.546
          <br /> 생일 : 2006.02.03
        </p>
      </div>
      <button className="button">정보수정</button>
      <button className="button">저장</button>
    </>
  );
};

export default MyPage;
