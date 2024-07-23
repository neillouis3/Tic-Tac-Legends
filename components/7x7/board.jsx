import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Board({ board, handleCellClick, width }) {
  const renderCell = (index) => {
    return (
      <TouchableOpacity 
      style={[styles.cell, { width: width / 7.5, height: width / 7.5, margin: 4 }]} 
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
        {renderCell(5)}
        {renderCell(6)}
      </View>
      <View style={styles.row}>
        {renderCell(7)}
        {renderCell(8)}
        {renderCell(9)}
        {renderCell(10)}
        {renderCell(11)}
        {renderCell(12)}
        {renderCell(13)}
      </View>
      <View style={styles.row}>
        {renderCell(14)}
        {renderCell(15)}
        {renderCell(16)}
        {renderCell(17)}
        {renderCell(18)}
        {renderCell(19)}
        {renderCell(20)}
      </View>
      <View style={styles.row}>
        {renderCell(21)}
        {renderCell(22)}
        {renderCell(23)}
        {renderCell(24)}
        {renderCell(25)}
        {renderCell(26)}
        {renderCell(27)}
      </View>
      <View style={styles.row}>
        {renderCell(28)}
        {renderCell(29)}
        {renderCell(30)}
        {renderCell(31)}
        {renderCell(32)}
        {renderCell(33)}
        {renderCell(34)}
      </View>
      <View style={styles.row}>
        {renderCell(35)}
        {renderCell(36)}
        {renderCell(37)}
        {renderCell(38)}
        {renderCell(39)}
        {renderCell(40)}
        {renderCell(41)}
      </View>
      <View style={styles.row}>
        {renderCell(42)}
        {renderCell(43)}
        {renderCell(44)}
        {renderCell(45)}
        {renderCell(46)}
        {renderCell(47)}
        {renderCell(48)}
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

