import Navbar from "@/components/Navbar";
import React from "react";
import styles from "../../styles/CommunityPost.module.css";

const CommunityPost = () => {
	return (
		<>
			<Navbar/>
			<div className={styles.container}>
				<input className={styles.title} type='text' placeholder="제목을 입력하세요"/>
				<textarea className={styles.content} type='text' placeholder="내용을 입력하세요"/>
				<div className={styles.btn_container}>
					<button className={styles.img_btn}>사진 업로드</button>
					<button className={styles.post_btn}>게시하기</button>
				</div>
			</div>
		</>
	);
}

export default CommunityPost;