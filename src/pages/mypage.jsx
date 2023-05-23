import React from "react";
import styles from "@/styles/MyPage.module.css";
import Navbar from "@/components/Navbar";

const MyPage = () => {
  return (
    <>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.profile_container}>
          <img src="/images/profile.png"/>
          <div className={styles.info_container}>
            <div className={styles.text}>닉네임 : hello</div>
            <div className={styles.text}>아이디 : hi</div>
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