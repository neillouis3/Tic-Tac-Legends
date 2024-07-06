import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import GameLogic from './gameLogic';

export default function Board({ board, handleCellClick }) {
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

  return (
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
  );
}

const styles = StyleSheet.create({
  board: {
    width: 300,
    height: 300,
    backgroundColor: 'skyblue',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 100,
    height: 100,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 48,
    color: 'white',
  },
});
