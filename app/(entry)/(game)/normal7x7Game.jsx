import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Board from '@/components/7x7/board';
import GameLogic from '@/components/7x7/gameLogic';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';


export default function Normal7x7Game() {
  const navigation = useNavigation();
  const [gameState, setGameState] = useState({
    board: Array(49).fill(null),
    status: 'Next player: Player 1 (X)',
    player1Wins: 0,
    player2Wins: 0,
    winner: null,
  });

  const handleGameUpdate = (state) => {
    setGameState(state);
  };

  const gameLogic = GameLogic({ onGameUpdate: handleGameUpdate });

  const handlePlayAgain = () => {
    gameLogic.resetGame();
    setGameState((prevState) => ({
      ...prevState,
      winner: null,
      status: 'Next player: Player 1 (X)',
    }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Svg height="48" width="48" viewBox="0 0 512 512">
          <Path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292" />
        </Svg>
      </TouchableOpacity>
      <Text style={styles.status}>{gameState.status}</Text>
      <Board board={gameState.board} handleCellClick={gameLogic.handleCellClick} />
      <Text>Player 1 Wins: {gameState.player1Wins}</Text>
      <Text>Player 2 Wins: {gameState.player2Wins}</Text>
      <Modal
        visible={gameState.winner !== null}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{gameState.winner} wins!</Text>
            <Button title="Play Again" onPress={handlePlayAgain} />
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 24,
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
});