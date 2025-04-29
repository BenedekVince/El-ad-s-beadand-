import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Calculator from "./components/Calculator";
import TicTacToe from "./components/TicTacToe";

function App() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>React Játékok</h1>
            <nav>
                <Link to="/calculator">➡ Számológép</Link>
                <Link to="/tic-tac-toe" style={{ marginLeft: "10px" }}>🎮 Tic-Tac-Toe</Link>
            </nav>
            <Routes>
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/tic-tac-toe" element={<TicTacToe />} />
            </Routes>
        </div>
    );
}

export default App;
