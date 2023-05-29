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
        getDoc(doc(db, 'articles', router.query.id))
        .then(doc => {
            const data = doc.data();
            setSubject(data.subject);
            setContent(data.content);
        })
    },[])

    return (
            <>
            <Navbar/>
            <h1 className={styles.title}>{subject}</h1>
            <p className={styles.content}>{content}</p>
            
        </>
    )
}