import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import styles from "../../styles/CommunityPosting.module.css";
import { collection, addDoc } from 'firebase/firestore';
import db from '../../net/db';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from "@/net/firebaseApp";
import { storage } from 'firebase/storage';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const CommunityPosting = () => {
  const [subject, setSubject] = useState();
  const [content, setContent] = useState();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
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

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const submit = async () => {
    try {
      if (image) {
        const storageRef = ref(storage, 'images/' + image.name);
        await uploadBytes(storageRef, image);
        const downloadUrl = await getDownloadURL(storageRef);
        setImageUrl(downloadUrl);
      }

      await addDoc(collection(db, 'articles'), {
        subject,
        content,
        imageUrl: imageUrl || '',
        author: user?.displayName || 'Unknown User',
        created_at: new Date().getTime(),
      });

      alert('게시글이 등록되었습니다');
      setSubject('');
      setContent('');
      setImage(null);
      setImageUrl(null);
      router.push('/');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <input
          className={styles.title}
          type="text"
          placeholder="제목을 입력하세요"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
        <textarea
          className={styles.content}
          type="text"
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <div className={styles.btn_container}>
          <button className={styles.img_btn}>
            <label htmlFor="image-input">사진 업로드</label>
            <input
              id="image-input"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </button>
          <button className={styles.post_btn} onClick={submit}>
            게시하기
          </button>
        </div>
      </div>
    </>
  );
};

export default CommunityPosting;