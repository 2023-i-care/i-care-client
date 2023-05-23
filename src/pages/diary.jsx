import React from "react";
import styles from "@/styles/Diary.module.css";
import Navbar from "@/components/Navbar";

const Diary = () => {
  return (
    <>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.diary_box}>
          <div className={styles.content_container}>
            <div className={styles.title}>글 제목</div>
            <div className={styles.content}>글 내용</div>
          </div>
          <div className={styles.image}></div>
        </div>
      </div>
    </>
  );
};

export default Diary;