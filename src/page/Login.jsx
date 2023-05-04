import React, { useState }from "react";
import styled from "styled-components";

const Login = (props) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Container>
            <Title>Login</Title>
            <Form>
                <IdInput 
                    type='email' 
                    name="email"
                    placeholder='이메일을 입력해주세요'
                    onChange={e => {
                        setId(e.target.value);
                    }}/>
                <PwInput 
                    type='password'
                    name="password"
                    placeholder='비밀번호를 입력해주세요'
                    onChange={e => {
                        setPassword(e.target.value);
                    }}/>
                <Button 
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        const userData = {
                            userId: id,
                            userPassword: password,
                        };
                        fetch("http://localhost:3001/login", { //auth 주소에서 받을 예정
                        method: "post", // method :통신방법
                        headers: {      // headers: API 응답에 대한 정보를 담음
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(userData), //userData라는 객체를 보냄
                        })
                        .then(res => res.json())
                        .then(json => {  
                            if(json.isLogin === true) props.setMode("WELCOME");
                            else alert(json.isLogin);
                        });
                    }}>Login</Button>
            </Form>
            <Text>아이디가 없으신가요?  <SignUpBtn href="/signup" onClick={() => props.setMode("SIGNUP")}>Sign Up</SignUpBtn></Text>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FDF3D1;
`;

const Title = styled.div`
    width: 100vw;
    padding-top: 160px;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    color: #F6D697;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const IdInput = styled.input`
    width: 400px;
    margin-top: 110px;
    padding: 10px;
    font-size: 20px;
    background-color: #FDF3D1;
    border: 0;
    border-bottom: 1px solid #BDA470;
    outline: none;

    &::placeholder {
        color: #A8884A;
    }
`;

const PwInput = styled.input`
    width: 400px;
    margin-top: 70px;
    padding: 10px;
    font-size: 20px;
    background-color: #FDF3D1;
    border: 0;
    border-bottom: 1px solid #BDA470;
    outline: none;

    &::placeholder {
        color: #A8884A;
    }
`;

const Button = styled.button`
    width: 330px;
    height: 70px;
    margin-top: 80px;
    font-size: 32px;
    color: white;
    background-color: #F6D697;
    border: 0;
    box-shadow: 0px 4px 4px lightgray;
`;

const Text = styled.div`
    margin-top: 10px;
    white-space: pre-wrap;
    color: #BDA470;
`;

const SignUpBtn = styled.a`
    font-size: 24px;
    color: #F6D697;
`;

export default Login;