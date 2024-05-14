import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import GamePage from "./components/GamePage";
import HomePage from "./components/HomePage";
import TsumegoPage from "./components/TsumegoPage";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="games" element={<GamePage />} />
          <Route path="tsumego" element={<TsumegoPage />} />
          <Route path="login" element={<Login />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
