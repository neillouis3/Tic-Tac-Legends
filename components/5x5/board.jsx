import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Board({ board, handleCellClick, width }) {
  const renderCell = (index) => {
    return (
      <TouchableOpacity 
      style={[styles.cell, { width: width / 5.75, height: width / 5.5, margin: 2 }]} 
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
