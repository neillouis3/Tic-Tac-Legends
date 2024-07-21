import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Button } from 'react-native';
import { Link } from 'expo-router';
import ComingSoonModal from '@/components/ui/comingSoonModal'; // Adjust the path as needed

export default function GameScreen({ navigation }: { navigation: any }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Play</Text>
      </View>
      <View>
        <Text>Normal Modes</Text>
        <View>
          <Link href="/normalGame" style={styles.linkButton} asChild>
            <Pressable style={styles.modesBtn}>
              <Text>3x3</Text>
            </Pressable>
          </Link>
          <Link href="/normal5x5Game" style={styles.linkButton} asChild>
            <Pressable style={styles.modesBtn}>
              <Text>5x5</Text>
            </Pressable>
          </Link>
          <Link href="/normal7x7Game" style={styles.linkButton} asChild>
            <Pressable style={styles.modesBtn}>
              <Text>7x7</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      <View>
        <Text>Custom Modes</Text>
        <View>
          <Pressable style={styles.modesBtn} onPress={toggleModal}>
            <Text>3x3</Text>
          </Pressable>
          <Pressable style={styles.modesBtn} onPress={toggleModal}>
            <Text>3x3</Text>
          </Pressable>
          <Pressable style={styles.modesBtn} onPress={toggleModal}>
            <Text>3x3</Text>
          </Pressable>
        </View>
      </View>

      <Text style={styles.bottomText}>neillouis3</Text>

      <ComingSoonModal isModalVisible={isModalVisible} toggleModal={toggleModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  bottomText: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#4299FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 15,
    paddingVertical: 15,
  },
  titleContainer: {
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  modesBtn: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 200,
    marginVertical: 5, // Add some vertical spacing between buttons
  },
});
