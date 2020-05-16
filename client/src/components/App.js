import React from 'react';
import LoginPage from './login-page/LoginPage';
import ChatWindow from './chat-window/ChatWindow';
import Footer from './layouts/Footer';
import Header from './layouts/Header';

function App() {
  return (
    <div className="App">
        <Header/>
            <ChatWindow />
            <LoginPage />
        <Footer/>
    </div>
  );
}

export default App;
