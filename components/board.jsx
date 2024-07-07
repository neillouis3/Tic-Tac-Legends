import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Board({ board, handleCellClick, size }) {
  const renderCell = (index) => {
    return (
      <TouchableOpacity 
        style={styles.cell(size)} 
        onPress={() => handleCellClick(index)}
        key={index}
      >
        <Text style={styles.cellText(size)}>{board[index]}</Text>
      </TouchableOpacity>
    );
  };

  const renderRow = (rowIndex) => {
    const cells = [];
    for (let i = 0; i < size; i++) {
      cells.push(renderCell(rowIndex * size + i));
    }
    return (
      <View style={styles.row} key={rowIndex}>
        {cells}
      </View>
    );
  };

  const rows = [];
  for (let i = 0; i < size; i++) {
    rows.push(renderRow(i));
  }

  return (
    <View style={styles.board(size)}>
      {rows}
    </View>
  );
}

const styles = StyleSheet.create({
  board: (size) => ({
    width: size * 60,
    height: size * 60,
    backgroundColor: 'skyblue',
  }),
  row: {
    flexDirection: 'row',
  },
  cell: (size) => ({
    width: 60,
    height: 60,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  }),
  cellText: (size) => ({
    fontSize: 24,
    color: 'white',
  }),
});
