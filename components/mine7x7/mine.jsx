import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

const Mine = ({ onPress }) => (
  <TouchableOpacity style={styles.mine} onPress={onPress}>
    <View />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  mine: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Mine;
