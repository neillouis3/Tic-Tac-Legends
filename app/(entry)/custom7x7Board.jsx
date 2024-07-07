import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Custom7x7Board({ board, handleCellClick, blockedSquares }) {
  return (
    <View style={styles.board}>
      {board.map((cell, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.cell,
            blockedSquares.includes(index) && styles.blockedCell,
          ]}
          onPress={() => handleCellClick(index)}
          disabled={blockedSquares.includes(index)}
        >
          <Text style={styles.cellText}>{cell}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 350,
    height: 350,
  },
  cell: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockedCell: {
    backgroundColor: '#ccc',
  },
  cellText: {
    fontSize: 24,
  },
});
