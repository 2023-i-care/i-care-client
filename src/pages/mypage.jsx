import React, { useContext } from "react";
import styles from "@/styles/MyPage.module.css";
import Navbar from "@/components/Navbar";
import { SetUserContext, UserContext } from "@/context/UserContext";
import axios from "axios";

const MyPage = () => {
  const user = useContext(UserContext);
  const setUser = useContext(SetUserContext);
  // axios.get("http://localhost:3001/signup")
  //   .then((req) => {
  //     setUser((prevState) => {
  //       return {...prevState, id: req.id, name: req.name}
  //     });
  //   });

  return (
    <>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.profile_container}>
          <img src="/images/profile.png"/>
          <div className={styles.info_container}>
            <div className={styles.text}>닉네임 : {user.name}</div>
            <div className={styles.text}>아이디 : {user.id}</div>
            <div className={styles.btn_container}>
              <button className={styles.btn}>정보수정</button>
              <button className={styles.btn}>저장</button>
            </div>
          </div>
        </div>
        <div className={styles.favorites_container}>
          <div className={styles.title}>내가 좋아요 누른 글</div>
          <div className={styles.content_container}>
            글 목록
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;