import Navbar from "@/components/Navbar";
import db from "@/net/db";
import {
  doc,
  getDoc,
  onSnapshot,
  query,
  collection,
  addDoc,
  where,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import app from "@/net/firebaseApp";
import styles from "../../../../styles/CommunityPost.module.css";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export default function Article() {
  const router = useRouter();
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [comment, setComment] = useState("");
  const [list, setList] = useState([]);
  const [bookmarked, setBookmarked] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const storage = getStorage(app);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "articles3", router.query.id);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        setSubject(data.subject);
        setContent(data.content);
        setBookmarked(data.bookmarked || false);
        if (data.image) {
          const storageRef = ref(storage, data.image);
          const downloadURL = await getDownloadURL(storageRef);
          setImageURL(downloadURL);
        }
      } catch (error) {
        // 에러 처리
      }
    };    

    fetchData();
  }, [router.query.id]);

  const toggleBookmark = async () => {
    try {
      const docRef = doc(db, "articles3", router.query.id);
      await docRef.update({
        bookmarked: !bookmarked,
      });
      setBookmarked((prevBookmark) => !prevBookmark);
    } catch (error) {
      // 에러 처리
    }
  };
  
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.postContainer}>
          <div className={styles.post}>
            <h1 className={styles.title}>{subject}</h1>
            {imageURL && <img src={imageURL} alt="게시물 이미지" className={styles.image}/>}
            <hr className={styles.divider} />
            <p className={styles.content}>{content}</p>
          </div>
          <button className={styles.bookmarkBtn} onClick={toggleBookmark}>
            {bookmarked ? "찜 해제" : "찜하기"}
          </button>
        </div>
      </div>
    </div>
  );
}