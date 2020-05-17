import React from "react";
import LoginPage from "./login-page/LoginPage";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import { Router } from '@reach/router';

const App = () => {
  return (
    <div className="App" align="center" style={{ margin: "auto", maxWidth: 750 }}>
      <Header />
      <Router>
        <LoginPage path="/" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
