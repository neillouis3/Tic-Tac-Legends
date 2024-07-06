import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

function NormalGame({ navigation }) {
  const [gameOver] = useState(false);
  const [player1Wins] = useState(0);
  const [player2Wins] = useState(0);



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
