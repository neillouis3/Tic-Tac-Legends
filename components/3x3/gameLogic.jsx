import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function GameLogic({ onGameUpdate, resetTrigger }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [player1Symbol, setPlayer1Symbol] = useState('X'); // Default symbol for Player 1 is 'X'
  const player2Symbol = player1Symbol === 'X' ? 'O' : 'X'; // Player 2 symbol is the opposite
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (resetTrigger !== null) {
      setBoard(Array(9).fill(null));
      setIsXNext(true);
      setGameOver(false);
      setWinner(null);
    }
  }, [resetTrigger]);

  useEffect(() => {
    const gameWinner = calculateWinner(board);
    let currentPlayerTurn;
    if (gameWinner) {
      currentPlayerTurn = gameWinner === player1Symbol ? 'Player 1' : 'Player 2';
      setGameOver(true);
      setWinner(gameWinner === player1Symbol ? 'Player 1' : 'Player 2');
    } else if (!board.includes(null)) {
      currentPlayerTurn = 'Draw';
      setGameOver(true);
      setWinner('Draw');
    } else {
      currentPlayerTurn = isXNext ? 'Player 1' : 'Player 2';
      setWinner(null);
    }

    onGameUpdate({
      board,
      currentPlayerTurn,
      winner: gameWinner ? (gameWinner === player1Symbol ? 'Player 1' : 'Player 2') : null,
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
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  return (
    <View style={styles.board}>
      {board.map((cell, index) => (
        <TouchableOpacity
          key={index}
          style={styles.cell}
          onPress={() => handleCellClick(index)}
        >
          <Text style={styles.cellText}>{cell}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    height: 300,
    margin: 20,
  },
  cell: {
    width: '33%',
    height: '33%',
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 24,
  },
});
