import './App.css';
import { useState, useEffect } from 'react';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Community from './page/community/CommunityList';

function App() {
  const [mode, setMode] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/authcheck")
      .then((res) => res.json())
      .then((json) => {        
        if (json.isLogin === "True") {
          setMode("WELCOME");
        } else {
          setMode("LOGIN");
        }
      });
  }, []); 
  
  useEffect(() => {
        if(mode==="LOGIN"){
          setContent(<Login setMode={setMode} />);
        } else if (mode === "SIGNUP") {
          setContent(<SignUp setMode={setMode} />); 
        } else if (mode === "WELCOME") {
          setContent(<Community/>);
        }
  }, [mode]); 

  return {content};
}

export default App;