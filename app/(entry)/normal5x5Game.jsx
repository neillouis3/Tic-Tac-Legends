import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Button, StyleSheet, Modal, Image } from 'react-native';
import Board from '@/components/5x5/board';
import GameLogic from '@/components/5x5/gameLogic';
import ResultModal from '@/components/ui/resultModal';

export default function Normal5x5Game() {
  const [gameState, setGameState] = useState({
    board: Array(25).fill(null),
    status: 'Next player: Player 1 (X)',
    player1Wins: 0,
    player2Wins: 0,
    winner: null,
  });

  const handleGameUpdate = (state) => {
    setGameState(state);
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const [boardWidth, setBoardWidth] = useState(0);

  const gameLogic = GameLogic({ onGameUpdate: handleGameUpdate });

  const handlePlayAgain = () => {
    gameLogic.resetGame();
    setGameState((prevState) => ({
      ...prevState,
      winner: null,
      status: 'Next player: Player 1 (X)',
    }));
  };

  const isPlayer1Turn = gameState.currentPlayerTurn === 'Player 1';
  const isPlayer2Turn = gameState.currentPlayerTurn === 'Player 2';

  return (
  <View style={styles.container}>
    <View style={styles.majorContentContainer}>
      <View style={styles.statContainer}>
        <View style={[
          styles.player1StatContainer,
          styles.playerStatContainer,
          { flex: 1 },
          isPlayer1Turn && { borderColor: 'yellow', borderWidth: 2 }
        ]}>
          <View style={[styles.player1Avatar, styles.playerAvatar]}>
            <Image 
              source={require('@/assets/icons/player1Avatar.jpg')}
              style={{width: '100%', height: '100%', borderRadius: 8}}
            />
          </View>
          <Text style={{textAlign: 'center', marginTop: 10}}>Player 1</Text>
        </View>
        <View style={[styles.statusContainer, { flex: 1.5 }]}>
          <View style={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 32, marginRight: 10, fontWeight: 'bold'}}>{gameState.player1Symbol}</Text>
            <Text>:</Text>
            <Text style={{fontSize: 32, marginLeft: 10, fontWeight: 'bold'}}>{gameState.player2Symbol}</Text>
          </View>
          <Text>{gameState.player1Wins}:{gameState.player2Wins}</Text>
        </View>
        <View style={[
          styles.player2StatContainer,
          styles.playerStatContainer,
          { flex: 1 },
          isPlayer2Turn && { borderColor: 'yellow', borderWidth: 2 }
        ]}>
          <View style={[styles.player2Avatar, styles.playerAvatar]}>
            <Image 
              source={require('@/assets/icons/player2Avatar.jpg')}
              style={{width: '100%', height: '100%', borderRadius: 8}}
            />
          </View>
          <Text style={{textAlign: 'center', marginTop: 10}}>Player 2</Text>
        </View>
      </View>

      <View style={styles.boardContainer} onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          setBoardWidth(width);
        }}
      >
        <Board width={boardWidth} board={gameState.board} handleCellClick={gameLogic.handleCellClick} />
      </View>
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
  },
  majorContentContainer: {
    flex: 11,
    padding: 20,
    alignItems: 'center',
  },
  statContainer: {
    width: '100%',
    height: 'auto',
    borderRadius: 8,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50, 
  },
  playerStatContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  statusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boardContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    borderRadius: 8,
    backgroundColor: '#4299FF',
    paddingVertical: 16,
  },
  status: {
    fontSize: 24,
    marginBottom: 10,
  },
});
