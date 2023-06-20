import React, { useState } from "react";
import styles from "../styles/Signup.module.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from '../net/auth';
import { useRouter } from "next/router";


const SignUp = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [displayName, setDisplayName] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
   
   const router = useRouter();
   const submit = () => {
    if (password.length < 6) {
        alert('비밀번호는 최소 6자리 이상이어야 합니다.');
      }
       createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
           const user = userCredential.user;
           updateProfile(user, { displayName: displayName }) // displayName 업데이트
           .then(() => {
               router.push('/login');
           })
           .catch(() => {
               alert("회원 가입에 실패했습니다.");
           });
       })
   }

    return (
        <div className={styles.Container}>
            <h1 className={styles.Title}>회원가입</h1>
            <div className={styles.Form}>
                <input
                    className={styles.Email}
                    type="email"
                    placeholder="이메일을 입력하시오"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <input
                    className={styles.Password}
                    type="password"
                    placeholder="비밀번호을 입력하시오"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <input
                    className={styles.DisplayName}
                    type="text"
                    placeholder="닉네임을 입력하시오"
                    value={displayName}
                    onChange={event => setDisplayName(event.target.value)}
                />
                <button className={styles.Button} onClick={submit}>회원가입</button>
            </div>
            <p className={styles.Text}>
                회원가입이 되어있으신가요?{" "}
                <button className={styles.SignUpBtn} onClick={() => router.push("/login")}>
                    Login
                </button>
            </p>
        </div>
    );
}

export default SignUp;