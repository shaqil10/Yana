import React from "react";
import LoginPage from "./login-page/LoginPage";
import ChatWindow from "./chat-window/ChatWindow";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import axios from "axios";

function App() {
  async function sendFbMessage() {
    const res = await axios.get("http://localhost:4000/");
    console.log(res.statusText);
  }

  sendFbMessage();

  return (
    <div className="App">
      <Header />
      <ChatWindow />
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App;
