import React, { useState } from "react";
import "./TicTacToe.css";

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        if (board[index] || calculateWinner(board)) return;

        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const restartGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    const calculateWinner = (squares) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let [a, b, c] of winningCombinations) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = calculateWinner(board);
    const status = winner ? `Győztes: ${winner}` : `Következő lépés: ${isXNext ? "X" : "O"}`;

    return (
        <div className="tic-tac-toe">
            <h2>Tic-Tac-Toe</h2>
            <p>{status}</p>
            <div className="board">
                {board.map((cell, index) => (
                    <button key={index} onClick={() => handleClick(index)} className="cell">
                        {cell}
                    </button>
                ))}
            </div>
            <button onClick={restartGame} className="restart-btn">🔄 Újraindítás</button>
        </div>
    );
}

export default TicTacToe;

