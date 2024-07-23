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
            { width: width / 3.5, height: width / 3.5, margin: 4 },
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    borderWidth: 2,
    borderColor: '#4299FF',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',


    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
  },
  blockedCell: {
    backgroundColor: '#ccc',
  },
  cellText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FBB64E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
