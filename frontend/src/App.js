import React, {useState, useEffect} from 'react';
import './App.css';
import Navi from './components/Navi';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import { Route } from 'react-router-dom';

function App() {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState([])

  let [isAuthenticated, setisAuthenticated] = useState(localStorage.getItem('token') ? true : false)

  const userHasAuthenticated = (authenticated, username, token) => { 
    setisAuthenticated(authenticated)
    setUser(username)
    localStorage.setItem('token', token);
  }//회원가입이나 로그인이 성공했을 때 토큰을 저장

  return (
    <>
      <div className="App">
        <div className="auto-margin"> 
        
          <Route exact path="/">
            <Header modal={modal}/>
          </Route>

          <Route exact path="/">
            <Navi/>
          </Route>

          <Route exact path="/login">
            {/* LoginModal을 향해 modal의 상태값을 변경할 수 있는 함수 setModal을 setModal이라는 이름으로 바운딩 시킨다.
            userHasAuthenticated라는 토큰을 저장하는 함수를 같은 이름으로 데이터 바운딩시킨다는 의미
            이는 LoginModal(props)의 props에 담긴다. */}
            <LoginModal setModal={setModal} userHasAuthenticated={userHasAuthenticated}/>
          </Route>
          
      </div>
    </div>
    </>
  );
}

export default App;