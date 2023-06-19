import styles from "../../styles/DiaryPosting.module.css";
import Navbar from "@/components/Navbar";
import React, { useState, useRef, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../../net/db";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import auth from "@/net/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const DiaryPosting = () => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const fileInputRef = useRef(null);
  const router = useRouter();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleImageUpload = async () => {
    if (!image) return;

    const storage = getStorage();
    const storageRef = ref(storage, "images/" + image.name);
    const uploadTask = uploadBytesResumable(storageRef, image);

    try {
      await uploadTask.on(
        "state_changed",
        null,
        (error) => {
          console.error("Error uploading image: ", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUrl(downloadURL);
            alert("이미지가 업로드되었습니다");
          });
        }
      );
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };

  const submit = async () => {
    try {
      const article = {
        subject,
        content,
        author: user?.email || "Unknown User",
        created_at: new Date().getTime(),
        imageUrl,
      };
      await addDoc(collection(db, "articles3"), article);

      alert("저장 되었습니다");
      setSubject("");
      setContent("");
      setImage(null);
      setImageUrl("");
      router.push("/diary");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
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
          <div className={styles.file_input_wrapper}>
            <input
              type="file"
              accept="image/*"
              className={styles.file_input}
              onChange={handleImageChange}
              ref={fileInputRef}
            />
            <div
              className={styles.file_input_label}
              onClick={() => fileInputRef.current.click()}
            ></div>
          </div>
          <button className={styles.post_btn} onClick={submit}>
            게시하기
          </button>
        </div>
        {imageUrl && (
          <div className={styles.image_preview}>
            <img src={imageUrl} alt="Uploaded" />
          </div>
        )}
      </div>
    </>
  );
};

export default DiaryPosting;
