import Navbar from '@/components/Navbar';
import React from 'react';
import styles from "@/styles/Community.module.css";
import db from '../net/db';
import {collection, getDocs, orderBy, query, onSnapshot} from 'firebase/firestore';
import { useEffect,useState } from 'react';
import {DateTime} from 'luxon';
import Link from 'next/link';
import app from '@/net/firebaseApp';

export default function Home() {
  const [list,setList]  = useState([]);
  useEffect(() => {
    onSnapshot(query(collection(db,'articles'),orderBy('created_at','desc')), results => {
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
    // getDocs(query(collection(db,'articles'),orderBy('created_at','desc')))
    //   .then(results => {
    //     const newList = [];
    //    results.forEach(doc => {
    //      const data = doc.data();
    //      data.id = doc.id;
    //      newList.push(data);
    //      console.log(doc.id);
    //      console.log(doc.data());
    //      console.log('------');
    //    });
    //    setList(newList)
    //   })
  },[]);

  const formatDate = (timestamp) => {
    const date = DateTime.fromMillis(timestamp);
    const today = DateTime.local().startOf('day');
    if (date >= today) {
      return date.toFormat('HH:mm');
    } else {
      return date.toFormat('yy-LL-dd');
    }
  };

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
          {list.map(item => (
              <tr key={item.id} className={styles.post} onClick={() => location.href = `community/articles/${item.id}`}>
                <td className={styles.td}><img src='/images/image.png'/></td>
                <td className={styles.td}>{item.subject}</td>
                <td className={styles.td}>{item.author}</td>
                <td className={styles.td}>{formatDate(item.created_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
