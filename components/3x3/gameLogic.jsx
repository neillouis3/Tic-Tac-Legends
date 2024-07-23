import { useState, useEffect } from 'react';

export default function GameLogic({ onGameUpdate }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);
  const [player1Symbol, setPlayer1Symbol] = useState('X'); // Default symbol for Player 1 is 'X'
  const player2Symbol = player1Symbol === 'X' ? 'O' : 'X'; // Player 2 symbol is the opposite
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const gameWinner = calculateWinner(board);
    let currentPlayerTurn;
    if (gameWinner) {
      currentPlayerTurn = gameWinner === player1Symbol ? 'Player 1' : 'Player 2';
      setGameOver(true);
      if (gameWinner === player1Symbol) {
        setPlayer1Wins(player1Wins + 1);
        setWinner('Player 1');
      } else {
        setPlayer2Wins(player2Wins + 1);
        setWinner('Player 2');
      }
    } else if (!board.includes(null)) {
      currentPlayerTurn = 'Draw';
      setGameOver(true);
      setWinner('Draw');
    } else {
      currentPlayerTurn = isXNext ? 'Player 1' : 'Player 2';
      setWinner(null);
    }

    console.log('Updating game state:', { board, currentPlayerTurn, player1Wins, player2Wins, winner: gameWinner, player1Symbol, player2Symbol });
    onGameUpdate({
      board,
      currentPlayerTurn,
      player1Wins,
      player2Wins,
      winner: gameWinner ? (gameWinner === player1Symbol ? 'Player 1' : 'Player 2') : null,
      player1Symbol,
      player2Symbol
    });
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
    setWinner(null);
  };

  const chooseSymbol = (symbol) => {
    setPlayer1Symbol(symbol);
    resetGame();
  };

  return { board, handleCellClick, resetGame, chooseSymbol, player1Symbol, player2Symbol };
}
