import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Board from './board.jsx';
import GameLogic from './gameLogic.jsx';
import ResultModal from './resultModal';
import { Link, router } from 'expo-router';

export default function Normal5x5Game() {
  const [gameState, setGameState] = useState({
    board: Array(25).fill(null),
    status: 'Next player: Player 1 (X)',
    player1Wins: 0,
    player2Wins: 0,
    winner: null,
    player1Symbol: 'X',
    player2Symbol: 'O',
  });

  const [isModalVisible, setModalVisible] = useState(false);
  const [boardWidth, setBoardWidth] = useState(0);

  const handleGameUpdate = ({
    board,
    status,
    player1Wins,
    player2Wins,
    winner,
    player1Symbol,
    player2Symbol,
  }) => {
    setGameState({
      board,
      status,
      player1Wins,
      player2Wins,
      winner,
      player1Symbol,
      player2Symbol,
    });
    if (winner) {
      setModalVisible(true);
    }
  };

  const gameLogic = GameLogic({ onGameUpdate: handleGameUpdate });

  const handlePlayAgain = () => {
    setModalVisible(false);
    gameLogic.resetGame();
    setGameState((prevState) => ({
      ...prevState,
      winner: null,
      status: 'Next player: Player 1 (X)',
    }));
  };

  const isPlayer1Turn = gameState.status.includes('Player 1');
  const isPlayer2Turn = gameState.status.includes('Player 2');

  return (
    <View style={styles.container}>
      <View style={styles.statContainer}>
        <View
          style={[
            styles.player1StatContainer,
            styles.playerStatContainer,
            { flex: 1, flexWrap: 'wrap', flexDirection: 'row' },
          ]}>
          <View
            style={[
              styles.player1Avatar,
              styles.playerAvatar,
              isPlayer1Turn && styles.player1Turn,
              { flex: 1 },
            ]}>
            <Image
              source={require('./player1Avatar.jpg')}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
          <View style={{ flex: 2 }}>
            <Text
              style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'right' }}>
              {gameState.player1Symbol}
            </Text>
            <Text style={{ textAlign: 'left' }}>Player 1</Text>
            <Text style={{ textAlign: 'left' }}>{gameState.player1Wins}</Text>
          </View>
        </View>
        <View
          style={[
            styles.player2StatContainer,
            styles.playerStatContainer,
            { flex: 1, flexWrap: 'wrap', flexDirection: 'row' },
          ]}>
          <View style={{ flex: 2 }}>
            <Text
              style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'left' }}>
              {gameState.player2Symbol}
            </Text>
            <Text style={{ textAlign: 'right' }}>Player 2</Text>
            <Text style={{ textAlign: 'right' }}>{gameState.player2Wins}</Text>
          </View>
          <View
            style={[
              styles.player1Avatar,
              styles.playerAvatar,
              isPlayer2Turn && styles.player2Turn,
              { flex: 1 },
            ]}>
            <Image
              source={require('./player2Avatar.jpg')}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
        </View>
      </View>

      <View
        style={styles.boardContainer}
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          setBoardWidth(width);
        }}>
        <Board
          width={boardWidth}
          board={gameState.board}
          handleCellClick={gameLogic.handleCellClick}
        />
      </View>
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
    backgroundColor: '#F5f5f5',
    opacity: '50',
    justifyContent: 'center',
  },
  statContainer: {
    width: '100%',
    height: 'auto',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#4299FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
  },
  boardContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    backgroundColor: '#4299FF',
    paddingVertical: 16,
  },
  playerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: 'grey',
    borderWidth: 5,
    margin: 8,
  },
  playerStatContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  player1StatContainer: {
    paddingRight: 8,
  },
  player2StatContainer: {
    paddingLeft: 8,
  },
  player1Turn: {
    borderColor: 'yellow',
    borderWidth: 5,
  },
  player2Turn: {
    borderColor: 'yellow',
    borderWidth: 5,
  },
});
