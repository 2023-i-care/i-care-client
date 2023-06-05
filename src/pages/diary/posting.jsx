import styles from "../../styles/DiaryPosting.module.css";
import Navbar from '@/components/Navbar';
import React,{useState} from 'react';
import {collection,addDoc} from 'firebase/firestore';
import db from '../../net/db';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '@/net/auth';

const DiaryPosting = () => {
  const [subject, setSubject] = useState();
	const [content, setContent] = useState();
	const [user, setUser] = useState();
	const router = useRouter();
	const submit = async() => {
		await addDoc(collection(db, 'articles3'), {
			subject,
			content,
			author : user.email,
			created_at : new Date().getTime(),
		})
		alert('저장 되었습니다');
		setSubject('');
		setContent('');
		router.push('/diary');
		//history.back();
		
	}

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

export default DiaryPosting;
