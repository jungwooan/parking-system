// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginWithKakao from "./LoginWithKakao";
import UserInfo from "./UserInfo";

function App() {
  return (
    <Router>
      <div style={{ padding: "1rem" }}>
        <h1>주차권 시스템</h1>
        
        <LoginWithKakao />

        <UserInfo />

      </div>
    </Router>
  );
}

export default App;
