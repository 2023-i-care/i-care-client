import Navbar from '@/components/Navbar';
import React,{useState} from 'react';
import styles from "../../styles/CommunityPosting.module.css";
import {collection,addDoc} from 'firebase/firestore';
import db from '../../net/db';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from "@/net/firebaseApp";

const CommunityPosting = () => {
	const [subject, setSubject] = useState();
	const [content, setContent] = useState();
	const auth = getAuth(app);
  	const [user, setUser] = useState(null);
	const router = useRouter();

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
	  const submit = async () => {
		try {
		  await addDoc(collection(db, 'articles'), {
			subject,
			content,
			author: user?.displayName || 'Unknown User',
			created_at: new Date().getTime(),
		  });
	  
			alert('게시글이 등록되었습니다');
		  setSubject('');
		  setContent('');
		  router.push('/');
		} catch (error) {
		  console.error('Error adding document: ', error);
		}
	  };

	useEffect(() => {
		onAuthStateChanged(auth, user=> {
			setUser(user);
		});
	},[])

    return(
        <>
            <Navbar/>
			<div className={styles.container}>
				<input className={styles.title} type='text' placeholder="제목을 입력하세요" 
				value={subject} onChange= {event => setSubject(event.target.value)}/>
				<textarea className={styles.content} type='text' placeholder="내용을 입력하세요"
				value={content} onChange={event => setContent(event.target.value)}/>
				<div className={styles.btn_container}>
					<button className={styles.img_btn}>사진 업로드</button>
					<button className={styles.post_btn} onClick={submit}>게시하기</button>
				</div>
			</div>
        </>
    )
}

export default CommunityPosting; 