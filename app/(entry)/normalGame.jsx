import React, { useState } from 'react';
import { View, Text, Button,  TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Board from '@/components/3x3/board';
import GameLogic from '@/components/3x3/gameLogic';
import Svg, { Path } from 'react-native-svg';
import { Link, router } from 'expo-router';



export default function NormalGame() {
  const [gameState, setGameState] = useState({
    board: Array(9).fill(null),
    status: 'Next player: Player 1 (X)',
    player1Wins: 0,
    player2Wins: 0,
    winner: null,
  });

  const handleGameUpdate = ({ board, status, player1Wins, player2Wins, winner }) => {
    setGameState({ board, status, player1Wins, player2Wins, winner });
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
      <Link href={router.back} asChild>
          <TouchableOpacity style={styles.backButton}>
            <Svg height="48" width="48" viewBox="0 0 512 512">
              <Path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292" />
            </Svg>
          </TouchableOpacity>
        </Link>
      <View style={styles.majorContentContainer}>
        <View style={styles.statContainer}>
          <Text style={styles.status}>{gameState.status}</Text>
          <Text>Player 1 Wins: {gameState.player1Wins}</Text>
          <Text>Player 2 Wins: {gameState.player2Wins}</Text>
        </View>

        <View style={styles.boardContainer}>
          <Board board={gameState.board} handleCellClick={gameLogic.handleCellClick} />
        </View>
      </View>
      <View style={styles.tabBarContainer}>
      </View>
        <Modal
          visible={gameState.winner !== null}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                {gameState.winner === 'Draw' ? 'Game is a Draw!' : `${gameState.winner} wins!`}
              </Text>
              <Button title="Play Again" onPress={handlePlayAgain} />
            </View>
          </View>
        </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  majorContentContainer: {
    flex: 11,
    padding: 20,
    alignItems: 'center',
  },

  tabBarContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },

  statContainer: {
    backgroundColor: '#4299FF',
    width: '100%',
    borderRadius: 8,
    padding: 16,
  },

  boardContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 300,
    borderRadius: 8,

  },

  status: {
    fontSize: 24,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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