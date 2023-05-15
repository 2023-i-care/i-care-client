import React, { useContext } from "react";
import Navbar from "./Navbar";
import styles from "../styles/MyPage.module.css";
import { useUser } from "@/context/UserContext";

const MyPage = () => {
  const {user, setUser} = useUser();

  return (
    <>
      <Navbar />
      <div className={`${styles.img}`}>
        <img className={`${styles['img-1']}`} src="profile.png" alt="프로필"/>
      </div>
      <div>
        <p className={`${styles.text}`}>
          설윤맘미
          <br/>
          smom.546
          {/* {`닉네임 : ${user.nickname}`}
          <br /> {`아이디 : ${user.id}`} */}
        </p>
      </div>
      <button className={`${styles.button}`}>정보수정</button>
      <button className={`${styles.button}`}>저장</button>
    </>
  );
};

export default MyPage;