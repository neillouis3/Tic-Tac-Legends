import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Board({ board, handleCellClick, width }) {
  const renderCell = (index) => {
    return (
      <TouchableOpacity 
        key={index}
        style={[styles.cell, { width: width / 3.5, height: width / 3.5, margin: 4 }]} 
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
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
  cellText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FBB64E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
