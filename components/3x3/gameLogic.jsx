import React, { useState, useEffect } from 'react';
import Board from './board';

export default function GameLogic({ onGameUpdate }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);

  useEffect(() => {
    const winner = calculateWinner(board);
    let status;
    if (winner) {
      status = 'Winner: ' + (winner === 'X' ? 'Player 1' : 'Player 2');
      setGameOver(true);
      if (winner === 'X') {
        setPlayer1Wins(player1Wins + 1);
      } else {
        setPlayer2Wins(player2Wins + 1);
      }
    } else if (gameOver) {
      status = 'Game Over';
    } else {
      status = 'Next player: ' + (isXNext ? 'Player 1 (X)' : 'Player 2 (O)');
    }
    onGameUpdate({ board, status, player1Wins, player2Wins });
  }, [board, isXNext, gameOver, player1Wins, player2Wins]);

  const handleCellClick = (index) => {
    if (board[index] || calculateWinner(board) || gameOver) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
  };

  return { board, handleCellClick, resetGame };
}
