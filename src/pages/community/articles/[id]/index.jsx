import Navbar from "@/components/Navbar";
import db from "@/net/db";
import {
  doc,
  getDoc,
  onSnapshot,
  query,
  collection,
  orderBy,
  addDoc,
  where,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../../../styles/CommunityPost.module.css";

export default function Article() {
  const router = useRouter();
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [comment, setComment] = useState("");
  const [list, setList] = useState([]);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "articles", router.query.id);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        setSubject(data.subject);
        setContent(data.content);
        setBookmarked(data.bookmarked || false);
      } catch (error) {
        // 에러 처리
      }
    };

    fetchData();
  }, [router.query.id]);

  const toggleBookmark = async () => {
    try {
      const docRef = doc(db, "articles", router.query.id);
      await docRef.update({
        bookmarked: !bookmarked,
      });
      setBookmarked((prevBookmark) => !prevBookmark);
    } catch (error) {
      // 에러 처리
    }
  };

  const submit = async () => {
    await addDoc(collection(db, "articles2"), {
      articleId: router.query.id,
      comment,
    });
    alert("댓글이 등록되었습니다");
    setComment("");
    router.push(`/community/articles/${router.query.id}`);
    //history.back();
  };

  useEffect(() => {
    if (router.query.id) {
      const q = query(
        collection(db, "articles2"),
        where("articleId", "==", router.query.id)
      );

      const unsubscribe = onSnapshot(q, (results) => {
        const newList = [];
        results.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          newList.push(data);
          console.log(doc.id);
          console.log(doc.data());
          console.log("------");
        });
        setList(newList);
      });

      return () => {
        unsubscribe();
      };
    }
  }, [router.query.id]);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.postContainer}>
          <div className={styles.post}>
            <h1 className={styles.title}>{subject}</h1>
            <hr className={styles.divider} />
            <p className={styles.content}>{content}</p>
          </div>
          <button className={styles.bookmarkBtn} onClick={toggleBookmark}>
            {bookmarked ? "찜 해제" : "찜하기"}
          </button>
        </div>
        <div className={styles.comment}>
          <div className={styles.commentsList}>
            {list.map((item) => (
              <div key={item.id} className={styles.commentContainer}>
                <p className={styles.commentText}>{item.comment}</p>
                <hr className={styles.commentHr} />
              </div>
            ))}
          </div>
          <div className={styles.commentsContainer}>
            <textarea
              className={styles.commentsInput}
              type="text"
              placeholder="댓글을 입력하세요"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            <button className={styles.submitBtn} onClick={submit}>
              ↖
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
