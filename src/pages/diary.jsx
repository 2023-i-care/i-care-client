import React from "react";
import styles from "@/styles/Diary.module.css";
import Navbar from "@/components/Navbar";
import db from '../net/db';
import {collection, getDocs, orderBy, query, onSnapshot} from 'firebase/firestore';
import { useEffect,useState } from 'react';

const Diary = () => {
  const [list,setList]  = useState([]);
  useEffect(() => {
    onSnapshot(query(collection(db,'articles3'),orderBy('created_at','desc')), results => {
        const newList = [];
       results.forEach(doc => {
         const data = doc.data();
         data.id = doc.id;
         newList.push(data);
         console.log(doc.id);
         console.log(doc.data());
         console.log('------');
       });
       setList(newList)
    })
  },[]);
  return (
    <>
      <Navbar/>
      <div className={styles.gen_btn}><a href='/diary/posting'>글쓰기</a></div>
      <div className={styles.container}>
        {list.map(item => (
          <div key={item.id} className={styles.diary_box}>
            <div className={styles.content_container}>
              <div className={styles.title}>{item.subject}</div>
              <div className={styles.content}>{item.content}</div>
            </div>
            <div className={styles.image}></div>
          </div>
          ))}
      </div>
    </>
  );
};

export default Diary;