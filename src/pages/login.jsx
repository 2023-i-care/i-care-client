import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import {signInWithEmailAndPassword} from 'firebase/auth';
import auth from '../net/auth';
import { useRouter } from "next/router";

const Login = () => {

    //이메일
    const [email, setEmail] = useState('');
    //비밀번호
    const [password, setPassword] = useState('');
    const router = useRouter();
    const submit = () => {
        console.log({email,password});
        signInWithEmailAndPassword(auth, email,password).then(res => {
            console.log(res);
            router.push('/');
        })
        .catch(error => {
            console.warn(error)
            alert("로그인에 실패했습니다")
        });
    }
    const signUp = () => {
        router.push('/signup');
    }

    return (
        <div className={styles.Container}>
            <h1 className={styles.Title}>Login</h1>
            <div className={styles.Form}>
            <input className={styles.IdInput}
                    type='email' 
                    placeholder="이메일을 입력하시오"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <input className={styles.PwInput} 
                    type="password"
                    placeholder="비밀번호를 입력하시오"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <button className={styles.Button} onClick={submit}>로그인</button>
            </div>
            <p className={styles.Text}>아이디가 없으신가요?  <button className={styles.SignUpBtn} onClick={signUp}>Sign Up</button></p>
        </div>
    );
}

export default Login;