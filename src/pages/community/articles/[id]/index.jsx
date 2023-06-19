import React, { useEffect, useState } from "react";
import styles from "@/styles/MyPage.module.css";
import Navbar from "@/components/Navbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  getDocs,
  where,
  query,
  onSnapshot,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import app from "@/net/firebaseApp";
import db from "@/net/db"; // 경로 수정

const MyPage = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [myPosts, setMyPosts] = useState([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchMyPosts = async () => {
      // Firestore에서 현재 사용자가 작성한 글을 가져오는 쿼리 생성
      const q = query(
        collection(db, "articles"),
        where("author", "==", user.email)
      );

      try {
        const querySnapshot = await getDocs(q);
        const posts = [];
        querySnapshot.forEach((doc) => {
          posts.push({ id: doc.id, ...doc.data() });
        });
        setMyPosts(posts);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    const fetchBookmarkedPosts = () => {
      const q = query(
        collection(db, "articles"),
        where("bookmarked", "==", true)
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const posts = [];
        snapshot.forEach((doc) => {
          posts.push({ id: doc.id, ...doc.data() });
        });
        setBookmarkedPosts(posts);
      });

      return () => {
        unsubscribe();
      };
    };

    if (user) {
      fetchMyPosts();
      fetchBookmarkedPosts();
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.profile_container}>
          <img src="/images/profile.png" />
          <div className={styles.info_container}>
            <div className={styles.text}>닉네임 : {user?.displayName}</div>
            <div className={styles.text}>아이디 : {user?.email}</div>
            <div className={styles.btn_container}>
              <button className={styles.btn}>정보수정</button>
              <button className={styles.btn}>저장</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.favorites_container}>
        <div className={styles.title}>찜한 글</div>
        <div className={styles.content_container}>
          {bookmarkedPosts.length > 0 ? (
            bookmarkedPosts.map((post) => (
              <div key={post.id} className={styles.post}>
                {/* 게시물 내용을 표시하는 부분 */}
                <h3>{post.subject}</h3>
                <p>{post.content}</p>
              </div>
            ))
          ) : (
            <p>찜한 글이 없습니다.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MyPage;
