import { useState, useEffect } from 'react';

export default function GameLogic({ onGameUpdate }) {
  const [board, setBoard] = useState(Array(49).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);
  const [player1Symbol, setPlayer1Symbol] = useState('X');
  const player2Symbol = player1Symbol === 'X' ? 'O' : 'X';

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
      onGameUpdate && onGameUpdate({
        board,
        status,
        player1Wins: player1Wins + (winner === player1Symbol ? 1 : 0),
        player2Wins: player2Wins + (winner !== player1Symbol ? 1 : 0),
        winner: winner === player1Symbol ? 'Player 1' : 'Player 2',
        player1Symbol,
        player2Symbol,
      });
    } else if (isBoardFull(board)) {
      status = 'Draw!';
      setGameOver(true);
      onGameUpdate && onGameUpdate({
        board,
        status,
        player1Wins,
        player2Wins,
        winner: 'Draw',
        player1Symbol,
        player2Symbol,
      });
    } else {
      status = 'Next player: ' + (isXNext ? (player1Symbol === 'X' ? 'Player 1 (X)' : 'Player 2 (X)') : (player1Symbol === 'O' ? 'Player 1 (O)' : 'Player 2 (O)'));
      onGameUpdate && onGameUpdate({
        board,
        status,
        player1Wins,
        player2Wins,
        winner: null,
        player1Symbol,
        player2Symbol,
      });
    }
  }, [board]);

  const handleCellClick = (index) => {
    if (board[index] || gameOver) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? player1Symbol : player2Symbol;
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13], [14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25, 26, 27], [28, 29, 30, 31, 32, 33, 34], [35, 36, 37, 38, 39, 40, 41], [42, 43, 44, 45, 46, 47, 48],
      [0, 7, 14, 21, 28, 35, 42], [1, 8, 15, 22, 29, 36, 43], [2, 9, 16, 23, 30, 37, 44], [3, 10, 17, 24, 31, 38, 45], [4, 11, 18, 25, 32, 39, 46], [5, 12, 19, 26, 33, 40, 47], [6, 13, 20, 27, 34, 41, 48],
      [0, 8, 16, 24, 32, 40, 48], [6, 12, 18, 24, 30, 36, 42]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d, e, f, g] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e] && squares[a] === squares[f] && squares[a] === squares[g]) {
        return squares[a];
      }
    }
    return null;
  };

  const isBoardFull = (squares) => {
    return squares.every(square => square !== null);
  };

  const resetGame = () => {
    setBoard(Array(49).fill(null));
    setIsXNext(true);
    setGameOver(false);
  };

  const chooseSymbol = (symbol) => {
    setPlayer1Symbol(symbol);
    resetGame();
  };

  return { board, handleCellClick, resetGame, chooseSymbol, player1Symbol, player2Symbol, player1Wins, player2Wins, gameOver };
}
