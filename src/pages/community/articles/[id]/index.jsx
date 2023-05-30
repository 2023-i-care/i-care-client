import Navbar from "@/components/Navbar";
import db from "@/net/db";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../../../../styles/CommunityPost.module.css";

export default function Article() {
    const router = useRouter();
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

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

    return (
            <>
            <Navbar/>
            <h1 className={styles.title}>{subject}</h1>
            <p className={styles.content}>{content}</p>
            
        </>
    )
}