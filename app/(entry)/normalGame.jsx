import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GameLogic from '@/components/3x3/gameLogic';
import ResultModal from '@/components/ui/resultModal';

const NormalGame = () => {
  const [gameState, setGameState] = useState({
    board: Array(9).fill(null),
    currentPlayerTurn: 'Player 1',
    player1Wins: 0,
    player2Wins: 0,
    winner: null,
    player1Symbol: 'X',
    player2Symbol: 'O',
  });

  const [isModalVisible, setModalVisible] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(0); // Changed to number for easier toggling

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    if (isModalVisible) {
      resetGame();
    }
  };

  const handleGameUpdate = (updatedGameState) => {
    setGameState((prevState) => ({
      ...prevState,
      ...updatedGameState,
      player1Wins: updatedGameState.winner === 'Player 1' ? prevState.player1Wins + 1 : prevState.player1Wins,
      player2Wins: updatedGameState.winner === 'Player 2' ? prevState.player2Wins + 1 : prevState.player2Wins,
    }));
    if (updatedGameState.winner) {
      setModalVisible(true);
    }
  };

  const resetGame = () => {
    setGameState((prevState) => ({
      ...prevState,
      board: Array(9).fill(null),
      currentPlayerTurn: 'Player 1',
      winner: null,
    }));
    setResetTrigger((prev) => prev + 1); // Increment reset trigger to force reset
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text style={styles.status}>
          {gameState.winner ? `${gameState.winner} wins!` : `Next turn: ${gameState.currentPlayerTurn}`}
        </Text>
      </View>
      <GameLogic onGameUpdate={handleGameUpdate} resetTrigger={resetTrigger} />
      <ResultModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        winner={gameState.winner}
      />
      <View style={styles.scoreboard}>
        <Text style={styles.score}>Player 1 (X): {gameState.player1Wins}</Text>
        <Text style={styles.score}>Player 2 (O): {gameState.player2Wins}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  statusContainer: {
    marginBottom: 20,
  },
  status: {
    fontSize: 20,
  },
  scoreboard: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  score: {
    fontSize: 16,
  },
});

export default NormalGame;
