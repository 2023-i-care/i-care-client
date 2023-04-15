import './App.css';
import Login from './page/Login';
import Communication from './page/Communication';
import Writing from './page/Writing';
import {BrowserRouter, Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Communication />} />
        <Route path="/Writing" element={<Writing />} />
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
