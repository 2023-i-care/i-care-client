import Navbar from "@/components/Navbar";
import db from "@/net/db";
import { doc, getDoc, onSnapshot, query, collection, orderBy, addDoc, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../../../styles/CommunityPost.module.css";

export default function Article() {
  const router = useRouter();
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [comment, setComment] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'articles', router.query.id);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        setSubject(data.subject);
        setContent(data.content);
      } catch (error) {
        // 에러 처리
      }
    };

    fetchData();
  }, [router.query.id]);

  //댓글 기능
  const submit = async () => {
    await addDoc(collection(db, "articles2"), {
      articleId: router.query.id,
      comment,
    });
    alert("저장 되었습니다");
    setComment("");
    router.push(`/community/articles/${router.query.id}`);
    //history.back();
  };

  useEffect(() => {
    if (router.query.id) {
      const q = query(collection(db, 'articles2'), where('articleId', '==', router.query.id));

      const unsubscribe = onSnapshot(q, (results) => {
        const newList = [];
        results.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          newList.push(data);
          console.log(doc.id);
          console.log(doc.data());
          console.log('------');
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
            <Navbar/>
            <div className={styles.post}>
            <h1 className={styles.title}>{subject}</h1>
            <p className={styles.content}>{content}</p>
            </div>
            <div className={styles.Comments}>
            <textarea className={styles.comments} type='text' placeholder="댓글을 입력하세요" 
			value={comment} onChange= {event => setComment(event.target.value)}/>

            <button className={styles.post_btn} onClick={submit}>등록하기</button>
            </div>
            {list.map(item => (
            <div key={item.id} className={styles.comment2}>
                <p className={styles.td}>{item.comment}</p>
                <hr className={styles.hr}/>
            </div>
            ))}
            
            
        </div>
    )
}