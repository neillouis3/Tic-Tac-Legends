import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Button, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import ComingSoonModal from '@/components/ui/comingSoonModal'; // Adjust the path as needed

export default function GameScreen({ navigation }: { navigation: any }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Play</Text>
      </View>
      <View style={styles.modeContainer}>
        <Text style={styles.modeTitle}>Normal Modes</Text>
        <View style={styles.modeContentContainer}>
          <Link href="/normalGame" asChild>
            <Pressable style={styles.modesBtn}>
              <Text>3x3</Text>
              <Text>Classic game of tic tac toe</Text>
            </Pressable>
          </Link>
          <Link href="/normal5x5Game" asChild>
            <Pressable style={styles.modesBtn}>
              <Text>5x5</Text>
            </Pressable>
          </Link>
          <Link href="/normal7x7Game" asChild>
            <Pressable style={styles.modesBtn}>
              <Text>7x7</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      <View style={styles.modeContainer}>
        <Text style={styles.modeTitle}>Custom Modes</Text>
        <View style={styles.modeContentContainer}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 20,
  },

  modeContainer:{
    height: 400,
  },



  modeTitle: {
    fontSize: 16,
    marginBottom: 16,
  },

  modeContentContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row', 
    gap: 32,

  },
  bottomText: {


    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#4299FF',
    fontSize: 16,
    fontWeight: 'bold',
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
    width: 150,
    height: 150,
  },
});
