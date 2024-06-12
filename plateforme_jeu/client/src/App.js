import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GamePage from "./components/GamePage";
import ListeGame from "./components/ListeGame";
import Header from "./components/Header";
import Login from "./components/Login";
import AdminPage from "./components/AdminPage";
import ProblemSubmission from "./components/Submission";
import ProblemSolving from "./components/Solving";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="games" element={<GamePage />} />
          <Route path="/" element={<Login />} />
          <Route path="listGame" element={<ListeGame />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="submission" element={<ProblemSubmission />} />
          <Route path="solving" element={<ProblemSolving />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
