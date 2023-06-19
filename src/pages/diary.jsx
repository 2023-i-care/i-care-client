import React from "react";
import styles from "@/styles/Diary.module.css";
import Navbar from "@/components/Navbar";
import db from '../net/db';
import {collection, getDocs, orderBy, query, onSnapshot} from 'firebase/firestore';
import { useEffect,useState } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from "@/net/firebaseApp";

const Diary = () => {
  const [list,setList]  = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          query(collection(db, "articles3"), orderBy("created_at", "desc"))
        );
  
        const newList = await Promise.all(querySnapshot.docs.map(async (doc) => {
          const data = doc.data();
          data.id = doc.id;
  
          // 이미지 URL 가져오기
          if (data.image) {
            const storage = getStorage(app); // Storage 인스턴스 가져오기
            const storageRef = ref(storage, data.image);
            try {
              const url = await getDownloadURL(storageRef);
              data.imageURL = url;
            } catch (error) {
              console.error("Error getting image URL:", error);
            }
          }
  
          return data;
        }));
  
        setList(newList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  
  useEffect(() => {
    onSnapshot(query(collection(db,'articles3'),orderBy('created_at','desc')), results => {
        const newList = [];
       results.forEach(doc => {
         const data = doc.data();
         data.id = doc.id;
         newList.push(data);
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
          <div key={item.id} className={styles.diary_box} onClick={() =>
            (location.href = `diary/articles/${item.id}`)
          }>
            <div className={styles.content_container}>
              <div className={styles.title}>{item.subject}</div>
              <div className={styles.content}>{item.content}</div>
            </div>
            {/* {item.imageURL && (
              <img src={item.imageURL} alt="image" className={styles.image} />
            )} */}
          </div>
          ))}
      </div>
    </>
  );
};

export default Diary;