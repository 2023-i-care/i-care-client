import Navbar from '@/components/Navbar';
import React from 'react';
import styles from "@/styles/Community.module.css";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.gen_btn}><a href='/community/posting'>글쓰기</a></div>
        <table className={styles.table}>
          <colgroup>
            <col style={{width: "10%"}}/>
            <col style={{width: "70%"}}/>
            <col style={{width: "10%"}}/>
            <col style={{width: "10%"}}/>
          </colgroup>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th className={styles.th}></th>
              <th className={styles.th}>제목</th>
              <th className={styles.th}>작성자</th>
              <th className={styles.th}>작성일</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.post} onClick={() => location.href = 'community/post'}>
              <td className={styles.td}><img src='/images/image.png'/></td>
              <td className={styles.td}>아휴 힘들다</td>
              <td className={styles.td}>hyennin</td>
              <td className={styles.td}>2023.05.22</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
