import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styles from "../../styles/CommunityPosting.module.css";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import db from "../../net/db";
import app from "@/net/firebaseApp";

const CommunityPosting = () => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
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

  const [imageFile, setImageFile] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const storage = getStorage(app);
    const storageRef = ref(storage, "images/" + file.name);

    try {
      await uploadBytes(storageRef, file);
      setImageFile(file);
      console.log("Image uploaded:", file.name);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const uploadImage = async (imageFile) => {
    try {
      const storage = getStorage(app);
      const storageRef = ref(storage, `images/${imageFile.name}`);
      await uploadBytes(storageRef, imageFile);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image: ", error);
      throw error;
    }
  };  


  const submit = async () => {
    try {
      let imageURL = null;
      if (imageFile) {
        imageURL = await uploadImage(imageFile);
      }

      const docRef = await addDoc(collection(db, "articles"), {
        subject,
        content,
        author: user?.displayName || "Unknown User",
        created_at: new Date().getTime(),
        image: imageURL, // 이미지 URL 저장
      });
  
      alert("게시글이 등록되었습니다");
      setSubject("");
      setContent("");
      router.push(`/community/articles/${docRef.id}`);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };  

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
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <div className={styles.btn_container}>
          <button className={styles.post_btn} onClick={submit}>
            게시하기
          </button>
        </div>
      </div>
    </>
  );
};

export default CommunityPosting;