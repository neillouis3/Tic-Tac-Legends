import { useState, useEffect } from 'react';

export default function GameLogic({ onGameUpdate }) {
    const [board, setBoard] = useState(Array(25).fill(null));
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
        onGameUpdate({
          board,
          status,
          player1Wins: player1Wins + (winner === 'X' ? 1 : 0),
          player2Wins: player2Wins + (winner === 'O' ? 1 : 0),
          winner: winner === 'X' ? 'Player 1' : 'Player 2'
        });
      } else {
        status = 'Next player: ' + (isXNext ? 'Player 1 (X)' : 'Player 2 (O)');
        onGameUpdate({ board, status, player1Wins, player2Wins, winner: null });
      }
    }, [board]);
  
    const handleCellClick = (index) => {
      if (board[index] || gameOver) return;
      const newBoard = [...board];
      newBoard[index] = isXNext ? 'X' : 'O';
      setBoard(newBoard);
      setIsXNext(!isXNext);
    };
  
    const calculateWinner = (squares) => {
      const lines = [
        [0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], // rows
        [0, 5, 10, 15, 20], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24], // columns
        [0, 6, 12, 18, 24], [4, 8, 12, 16, 20] // diagonals
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c, d, e] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e]) {
          return squares[a];
        }
      }
      return null;
    };
  
    const resetGame = () => {
      setBoard(Array(25).fill(null));
      setIsXNext(true);
      setGameOver(false);
    };
  
    return { board, handleCellClick, resetGame };
  }