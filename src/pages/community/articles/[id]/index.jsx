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
        const docRef = doc(db, "articles", router.query.id);
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
            {imageURL && (
              <img
                src={imageURL}
                alt="게시물 이미지"
                className={styles.image}
              />
            )}
            <hr className={styles.divider} />
            <p className={styles.content}>{content}</p>
          </div>
          <button className={styles.backbtn} onClick={() => router.push("/")}>
            목록으로 돌아가기
          </button>
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
