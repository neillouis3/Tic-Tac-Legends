import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Board from '@/components/3x3/board';
import GameLogic from '@/components/3x3/gameLogic';
import ResultModal from '@/components/ui/resultModal';

export default function NormalGame() {
  const [gameState, setGameState] = useState({
    board: Array(9).fill(null),
    currentPlayerTurn: 'Player 1',
    player1Wins: 0,
    player2Wins: 0,
    winner: null,
    player1Symbol: 'X',
    player2Symbol: 'O'
  });

  const [isModalVisible, setModalVisible] = useState(false);
  const [boardWidth, setBoardWidth] = useState(0);

  const handleGameUpdate = ({ board, currentPlayerTurn, player1Wins, player2Wins, winner, player1Symbol, player2Symbol }) => {
    console.log('Game update received:', { board, currentPlayerTurn, player1Wins, player2Wins, winner, player1Symbol, player2Symbol });
    setGameState({ board, currentPlayerTurn, player1Wins, player2Wins, winner, player1Symbol, player2Symbol });
    if (winner || currentPlayerTurn === 'Draw') {
      setModalVisible(true);
    }
  };

  const gameLogic = GameLogic({ onGameUpdate: handleGameUpdate });

  const handlePlayAgain = () => {
    gameLogic.resetGame();
    setGameState((prevState) => ({
      ...prevState,
      winner: null,
      currentPlayerTurn: 'Player 1',
      player1Symbol: gameLogic.player1Symbol,
      player2Symbol: gameLogic.player2Symbol
    }));
    setModalVisible(false);
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
    paddingTop: 50,
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
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  statusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boardContainer: {
    marginTop: 25,
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
