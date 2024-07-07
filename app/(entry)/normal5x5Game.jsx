import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Board from '@/components/5x5/board';
import GameLogic from '@/components/5x5/gameLogic';

export default function NormalGame5x5() {
  const [gameState, setGameState] = useState({
    board: Array(25).fill(null),
    status: 'Next player: Player 1 (X)',
    player1Wins: 0,
    player2Wins: 0,
  });

  const handleGameUpdate = (state) => {
    setGameState(state);
  };

  const gameLogic = GameLogic({ onGameUpdate: handleGameUpdate });

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{gameState.status}</Text>
      <Board board={gameState.board} handleCellClick={gameLogic.handleCellClick} />
      <Button title="Reset Game" onPress={gameLogic.resetGame} />
      <Text>Player 1 Wins: {gameState.player1Wins}</Text>
      <Text>Player 2 Wins: {gameState.player2Wins}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  status: {
    fontSize: 24,
    marginBottom: 10,
  },
});
