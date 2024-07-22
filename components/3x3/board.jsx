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
  },
  row: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 4,
    margin: 2,
  },
  cell: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#4299FF',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cellText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FBB64E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
