import React, { useEffect, useState } from "react";
import styles from "@/styles/MyPage.module.css";
import Navbar from "@/components/Navbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, where, query } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import app from "@/net/firebaseApp";
import db from "../net/db";
import { DateTime } from "luxon";

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

    const fetchBookmarkedPosts = async () => {
      const q = query(
        collection(db, "articles"),
        where("bookmarked", "==", true)
      );

      try {
        const querySnapshot = await getDocs(q);
        const posts = [];
        querySnapshot.forEach((doc) => {
          posts.push({ id: doc.id, ...doc.data() });
        });
        setBookmarkedPosts(posts);
      } catch (error) {
        console.error("Error fetching bookmarked posts: ", error);
      }
    };

    if (user) {
      fetchMyPosts();
      fetchBookmarkedPosts();
    }
  }, [user]);

  const saveToBookmarks = async (articleId) => {
    try {
      await fetch("/api/bookmarks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ articleId }),
      });
      fetchBookmarkedPosts();
    } catch (error) {
      // 에러 처리
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) {
      return ''; // 또는 다른 기본값으로 변경
    }
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
      <Navbar />
      <div className={styles.container}>
        <div className={styles.profile_container}>
          <img src="/images/profile.png" />
          <div className={styles.info_container}>
            <div className={styles.text}>닉네임: {user?.displayName}</div>
            <div className={styles.text}>아이디: {user?.email}</div>
            <div className={styles.btn_container}>
              <button className={styles.btn}>로그아웃</button>
            </div>
          </div>
        </div>
        <div className={styles.favorites_container}>
          <div className={styles.bookmarkedPosts}>
            <h2 className={styles.title}>내가 좋아요 한 글</h2>
            <table className={styles.table}>
              <colgroup>
                <col style={{ width: "70%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "10%" }} />
              </colgroup>
              <thead className={styles.thead}>
                <tr className={styles.tr}>
                  <th className={styles.th}>제목</th>
                  <th className={styles.th}>작성자</th>
                  <th className={styles.th}>작성일</th>
                </tr>
              </thead>
              <tbody>
                {bookmarkedPosts.map((post) => (
                    <tr key={post.id} 
                      className={styles.post} 
                      onClick={() =>
                        (location.href = `community/articles/${post.id}`)
                      }>
                      <td className={styles.td}>{post.subject}</td>
                      <td className={styles.td}>{post.author}</td>
                      <td className={styles.td}>{formatDate(post.created_at)}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;