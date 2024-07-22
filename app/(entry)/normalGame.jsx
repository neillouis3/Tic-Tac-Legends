import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Board from '@/components/3x3/board';
import GameLogic from '@/components/3x3/gameLogic';
import Svg, { Path } from 'react-native-svg';
import ResultModal from '@/components/ui/resultModal';
import { Link, router } from 'expo-router';

export default function NormalGame() {
  const [gameState, setGameState] = useState({
    board: Array(9).fill(null),
    status: 'Next player: Player 1 (X)',
    player1Wins: 0,
    player2Wins: 0,
    winner: null,
  });

  const [isModalVisible, setModalVisible] = useState(false);

  const handleGameUpdate = ({ board, status, player1Wins, player2Wins, winner }) => {
    setGameState({ board, status, player1Wins, player2Wins, winner });
    if (winner) {
      setModalVisible(true);
    }
  };

  const gameLogic = GameLogic({ onGameUpdate: handleGameUpdate });

  const handlePlayAgain = () => {
    gameLogic.resetGame();
    setGameState((prevState) => ({
      ...prevState,
      winner: null,
      status: 'Next player: Player 1 (X)',
    }));
    setModalVisible(false);
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
      <View style={styles.tabBarContainer} />
      <ResultModal
        isModalVisible={isModalVisible}
        toggleModal={handlePlayAgain}
        winner={gameState.winner}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
});
