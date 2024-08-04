import { useState, useEffect } from 'react';

export default function useCustom7x7GameLogic(onGameUpdate) {
  const [board, setBoard] = useState(Array(49).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);
  const [player1Symbol, setPlayer1Symbol] = useState('X');
  const player2Symbol = player1Symbol === 'X' ? 'O' : 'X';
  const [blockedSquares, setBlockedSquares] = useState([]);

  const generateBlockedSquares = () => {
    const blocked = new Set();
    while (blocked.size < 15) {
      const randomIndex = Math.floor(Math.random() * 49);
      blocked.add(randomIndex);
    }
    return Array.from(blocked);
  };

  useEffect(() => {
    setBlockedSquares(generateBlockedSquares());
  }, []);

  useEffect(() => {
    const winner = calculateWinner(board);
    let status;
    if (winner) {
      status = 'Winner: ' + (winner === player1Symbol ? 'Player 1' : 'Player 2');
      setGameOver(true);
      if (winner === player1Symbol) {
        setPlayer1Wins(player1Wins + 1);
      } else {
        setPlayer2Wins(player2Wins + 1);
      }
      onGameUpdate({
        board,
        status,
        player1Wins: player1Wins + (winner === player1Symbol ? 1 : 0),
        player2Wins: player2Wins + (winner === player2Symbol ? 1 : 0),
        winner: winner === player1Symbol ? 'Player 1' : 'Player 2',
        player1Symbol,
        player2Symbol,
        blockedSquares,
      });
    } else if (isBoardFull(board)) {
      status = 'Draw!';
      setGameOver(true);
      onGameUpdate({
        board,
        status,
        player1Wins,
        player2Wins,
        winner: 'Draw',
        player1Symbol,
        player2Symbol,
        blockedSquares,
      });
    } else {
      status = 'Next player: ' + (isXNext ? 'Player 1 (' + player1Symbol + ')' : 'Player 2 (' + player2Symbol + ')');
      onGameUpdate({ 
        board, 
        status, 
        player1Wins, 
        player2Wins, 
        winner: null,
        player1Symbol,
        player2Symbol,
        blockedSquares 
      });
    }
  }, [board]);

  const handleCellClick = (index) => {
    if (board[index] || gameOver || blockedSquares.includes(index)) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? player1Symbol : player2Symbol;
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(49).fill(null));
    setIsXNext(true);
    setGameOver(false);
    setBlockedSquares(generateBlockedSquares());
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
      [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
      [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
      [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
      [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
      [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
      [42, 43, 44, 45], [43, 44, 45, 46], [44, 45, 46, 47], [45, 46, 47, 48],
      [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35], [21, 28, 35, 42],
      [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36], [22, 29, 36, 43],
      [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37], [23, 30, 37, 44],
      [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38], [24, 31, 38, 45],
      [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39], [25, 32, 39, 46],
      [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40], [26, 33, 40, 47],
      [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41], [27, 34, 41, 48],
      [0, 8, 16, 24], [8, 16, 24, 32], [16, 24, 32, 40], [24, 32, 40, 48],
      [6, 12, 18, 24], [12, 18, 24, 30], [18, 24, 30, 36], [24, 30, 36, 42],
      [7, 15, 23, 31], [15, 23, 31, 39], [23, 31, 39, 47], [14, 22, 30, 38],
      [1, 9, 17, 25], [9, 17, 25, 33], [17, 25, 33, 41], [3, 9, 15, 21],
      [2, 8, 14, 20], [10, 16, 22, 28], [18, 24, 30, 36], [26, 32, 38, 44],
      [4, 10, 16, 22], [10, 16, 22, 28], [16, 22, 28, 34], [22, 28, 34, 40],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
        return squares[a];
      }
    }
    return null;
  };

  const isBoardFull = (squares) => {
    return squares.every(square => square !== null);
  };

  return { 
    board, 
    handleCellClick, 
    blockedSquares, 
    resetGame 
  };
}
