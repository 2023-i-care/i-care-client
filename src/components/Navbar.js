import React, { useState } from "react";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <a href="/">
          <img src="/images/logo.png" />
        </a>
      </div>
      <div className={styles.right_container}>
        <div className={styles.text}>
          <a href="/">소통방</a>
        </div>
        <div className={styles.text}>
          <a href="/diary">다이어리</a>
        </div>
        <div>
          <a className={styles.profile} href="/mypage">
            <img className={styles.profile_img} src="/images/profile.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
