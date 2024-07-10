import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

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
        {renderCell(3)}
        {renderCell(4)}
      </View>
      <View style={styles.row}>
        {renderCell(5)}
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
        {renderCell(9)}
      </View>
      <View style={styles.row}>
        {renderCell(10)}
        {renderCell(11)}
        {renderCell(12)}
        {renderCell(13)}
        {renderCell(14)}
      </View>
      <View style={styles.row}>
        {renderCell(15)}
        {renderCell(16)}
        {renderCell(17)}
        {renderCell(18)}
        {renderCell(19)}
      </View>
      <View style={styles.row}>
        {renderCell(20)}
        {renderCell(21)}
        {renderCell(22)}
        {renderCell(23)}
        {renderCell(24)}
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
    width: 60,
    height: 60,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 24,
    color: 'white',
  },
});
