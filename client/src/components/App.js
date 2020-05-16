import React from "react";
import LoginPage from "./login-page/LoginPage";
import ChatWindow from "./chat-window/ChatWindow";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import axios from "axios";
import { Router } from '@reach/router';
import nlp from '../nlp/nlp';

function App() {
  async function sendFbMessage() {
    const res = await axios.get("http://localhost:4000/");
    console.log(res.statusText);
  }

  sendFbMessage();

  return (
    <div className="App" align="center" style={{ margin: "auto", maxWidth: 750 }}>
      <Header />
      <Router>
        <LoginPage path="/" />
        <ChatWindow path="/chat-window" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
