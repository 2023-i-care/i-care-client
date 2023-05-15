import React from "react";
import Navbar from "../Navbar";
import styles from "../../styles/DiaryPost.module.css";

const DiaryPost = () => {
  return (
    <div>
      <Navbar />
      <div className={`${styles.diary}`}></div>
    </div>
  );
};

export default DiaryPost;
