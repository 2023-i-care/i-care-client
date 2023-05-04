import React, { useState } from "react";
import styled from "styled-components";

const SignUp = (props) => {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    return (
        <Container>
            <Title>Sign Up</Title>
            <Form>
                <NameInput 
                    type='text'
                    placeholder='닉네임을 입력해주세요'
                    onChange={e => {
                        setName(e.target.value);
                    }}/>
                <IdInput 
                    type='email'
                    placeholder='이메일을 입력해주세요'
                    onChange={e => {
                        setId(e.target.value);
                    }}/>
                <PwInput 
                    type='password'
                    placeholder='비밀번호를 입력해주세요'
                    onChange={e => {
                        setPassword(e.target.value);
                    }}/>
                <PwInput 
                    type='password'
                    placeholder='비밀번호를 한 번 더 입력해주세요'
                    onChange={e => {
                        setPassword2(e.target.value);
                    }}/>
                <Button 
                    type="submit"
                    onClick={() => {
                        const userData = {
                            userName: name,
                            userId: id,
                            userPassword: password,
                            userPassword2: password2,
                        };
                        fetch("http://localhost:3001/signup", { //signup 주소에서 받을 예정
                          method: "post", // method :통신방법
                          headers: {      // headers: API 응답에 대한 정보를 담음
                            "content-type": "application/json",
                          },
                          body: JSON.stringify(userData), //userData라는 객체를 보냄
                        })
                          .then(res => res.json())
                          .then(json => {
                            if(json.isSuccess === true){
                              alert('회원가입이 완료되었습니다!');
                              props.setMode("LOGIN");
                            }
                            else alert(json.isSuccess);
                          });
                    }}>Sign Up</Button>
            </Form>
            <Text>회원가입이 되어있으신가요?  <SignUpBtn href="/login" onClick={() => props.setMode("LOGIN")}>Login</SignUpBtn></Text>
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
    padding-top: 100px;
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

const NameInput = styled.input`
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

const IdInput = styled.input`
    width: 400px;
    margin-top: 60px;
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

export default SignUp;