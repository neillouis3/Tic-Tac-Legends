import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

function NormalGame({ navigation }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);

  const handleCellClick = (index) => {
    if (board[index] || calculateWinner(board) || gameOver) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    const winner = calculateWinner(newBoard);
    if (winner) {
      setGameOver(true);
      if (winner === 'X') {
        setPlayer1Wins(player1Wins + 1);
      } else {
        setPlayer2Wins(player2Wins + 1);
      }
    }
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

  const renderCell = (index) => {
    return (
      <TouchableOpacity 
        style={styles.cell} 
        onPress={() => handleCellClick(index)}
      >
        <Text style={styles.cellText}>{board[index]}</Text>
      </TouchableOpacity>
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
  };

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = 'Winner: ' + (winner === 'X' ? 'Player 1' : 'Player 2');
  } else if (gameOver) {
    status = 'Game Over';
  } else {
    status = 'Next player: ' + (isXNext ? 'Player 1 (X)' : 'Player 2 (O)');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{status}</Text>
      <Text style={styles.winCount}>Player 1 Wins: {player1Wins}</Text>
      <Text style={styles.winCount}>Player 2 Wins: {player2Wins}</Text>
      <View style={styles.board}>
        <View style={styles.row}>
          {renderCell(0)}
          {renderCell(1)}
          {renderCell(2)}
        </View>
        <View style={styles.row}>
          {renderCell(3)}
          {renderCell(4)}
          {renderCell(5)}
        </View>
        <View style={styles.row}>
          {renderCell(6)}
          {renderCell(7)}
          {renderCell(8)}
        </View>
      </View>
      {(gameOver || winner) && (
        <Button title="Retry" onPress={resetGame} />
      )}
      <Button title="Back to Menu" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  status: {
    fontSize: 20,
    marginBottom: 10,
  },
  winCount: {
    fontSize: 16,
    marginBottom: 10,
  },
  board: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 100,
    height: 100,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  cellText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default NormalGame;
