import Navbar from '@/components/Navbar';
import React from 'react';
import styles from "@/styles/Community.module.css";
import db from '../net/db';
import {collection, getDocs, orderBy, query, onSnapshot} from 'firebase/firestore';
import { useEffect,useState } from 'react';
import {DateTime} from 'luxon';
import Link from 'next/link';


export default function Home() {
  const [list,setList]  = useState([]);
  const [userInput, setUserInput] = useState('');
  const [clicked, setClicked] = useState(false);
  const [posts, setPosts] = useState([]);

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

  const getValue = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };

  const searched = posts.filter((item) =>
    item.subject && item.subject.toLowerCase().includes(userInput)
  );

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
        <div className={styles.top_container}>
          <div className={styles.search_container}>
            <input className={styles.search_box} onChange={getValue} />
            <img
              className={styles.search_icon}
              src="/images/search.png"
              onClick={() => setClicked(true)}
            />
          </div>
          <div className={styles.gen_btn}>
            <a href="/community/posting">글쓰기</a>
          </div>
        </div>
        <table className={styles.table}>
          <colgroup>
            <col style={{width: "70%"}}/>
            <col style={{width: "10%"}}/>
            <col style={{width: "10%"}}/>
          </colgroup>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th className={styles.th}>제목</th>
              <th className={styles.th}>작성자</th>
              <th className={styles.th}>작성일</th>
            </tr>
          </thead>
          <tbody>
          {clicked
            ? searched.length > 0 // 검색 결과가 있을 때
              ? searched.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className={styles.post}
                    onClick={() => (location.href = `community/articles/${item.id}`)}
                  >
                    <td className={styles.td}>{item.subject}</td>
                    <td className={styles.td}>{item.author}</td>
                    <td className={styles.td}>{formatDate(item.created_at)}</td>
                  </tr>
                );
              })
              : <tr><td className={styles.no_result} colSpan={4}>검색 결과가 없습니다.</td></tr> // 검색 결과가 없을 때
            : list.map((item) => (
                <tr
                  key={item.id}
                  className={styles.post}
                  onClick={() => (location.href = `community/articles/${item.id}`)}
                >
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