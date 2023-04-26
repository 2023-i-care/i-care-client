import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Community from './page/community/Community';
import Tip from './page/tip/Tip';
import Diary from './page/diary/Diary';
import MyPage from './page/MyPage';

function App() {
  const [mode, setMode] = useState("");
  const [content, setContent] = useState("");
  const matchPath = {
    path: "/Community"
  }

  useEffect(() => {
    fetch("http://localhost:3001/authcheck")
      .then((res) => res.json())
      .then((json) => {        
        if (json.isLogin === "True") setMode("WELCOME");
        else setMode("LOGIN");
      });
  }, []); 
  
  useEffect(() => {
    if(mode==="LOGIN"){
      setContent(<Login setMode={setMode} />);
    } else if (mode === "SIGNUP") {
      setContent(<SignUp setMode={setMode} />); 
    } else if (mode === "WELCOME") {
      setContent(<Community match={matchPath}/>);
    }
  }, [mode]); 

  return (
    <>
      {content}
      <Router>
        <Switch>
          <Route path='/' exact component={Community} />
          <Route path='/community' component={Community} />
          <Route path='/tip' component={Tip} />
          <Route path='/diary' component={Diary} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/mypage' component={MyPage}/>
          <Route path="*" element={<h1>404 페이지</h1>}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;