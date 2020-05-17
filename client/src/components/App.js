import React, { useState, useEffect } from "react";
import LoginPage from "./login-page/LoginPage";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import { Router } from '@reach/router';
import ChatWindow from "./chat-window/ChatWindow";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [friends, setFriends] = useState([]);
  const handleEmail = e => {
    setEmail(e.target.value);
  }
  const handlePassword = e => {
    setPassword(e.target.value);
  }
  const handleFirst = e => {
    setFirst(e.target.value);
  }
  const handleSecond = e => {
    setSecond(e.target.value);
  }
  const handleThird = e => {
    setThird(e.target.value);
  }
  const handleClick = () => {
    setSubmitted(true);
    setFriends(first.concat(second).concat(third));
  }
  useEffect(() => { }, [submitted, setSubmitted]);


  return (
    <div className="App" align="center" style={{ margin: "auto", maxWidth: 750 }}>
      <Header />
      <Router>
        <LoginPage
          path="/"
          handleEmail={handleEmail}
          handlePassword={handlePassword}
          handleFirst={handleFirst}
          handleSecond={handleSecond}
          handleThird={handleThird}
          handleClick={handleClick}
        />
        <ChatWindow
          path="/chat-window"
          email={email}
          password={password}
          friends={friends}
        />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
