import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Custom7x7Board({ board, handleCellClick, blockedSquares, width }) {
  const renderCell = (index) => {
    const isBlocked = blockedSquares.includes(index);
    return (
      <TouchableOpacity 
        key={index}
        style={[
          styles.cell, 
          { width: width / 8.5, height: width / 8.5, margin: 2 }, 
          isBlocked && styles.blockedCell
        ]}
        onPress={() => !isBlocked && handleCellClick(index)}
        disabled={isBlocked}
      >
        <Text style={styles.cellText}>{board[index]}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.board}>
      {Array.from({ length: 7 }).map((_, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {Array.from({ length: 7 }).map((_, colIndex) => renderCell(rowIndex * 7 + colIndex))}
        </View>
      ))}
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
  blockedCell: {
    backgroundColor: '#ccc',
  },
  cellText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FBB64E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
